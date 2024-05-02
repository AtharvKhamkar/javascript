import express from 'express';
import path from 'path';
import { Server } from "socket.io";
import { fileURLToPath } from 'url';

const PORT = 1313;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ADMIN = "Admin"

const app = express();

app.use(express.static(path.join(__dirname,"public")))

const expressServer = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

//state
const UsersState = {
    users: [],
    setUsers: function (newUsersArray) {
        this.users = newUsersArray
    }
}

const io = new Server(expressServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500","http://127.0.0.1:5500"]
    }
})

io.on('connection', socket => {
    console.log(`User ${socket.id} connected`)

    //Upon connection - only to user
    socket.emit('message', buildMsg(ADMIN, "Welcome to Chat App!!"))
    
    socket.on('enterRoom', ({ name, room }) => {
        
        //leave previous room
        const prevRoom = getUser(socket.id)?.room

        if (prevRoom) {
            socket.leave(prevRoom)
            io.to(prevRoom).emit('message',buildMsg('ADMIN',`${name} has left the room`))
        }

        const user = activateUser(socket.id, name, room)
        
        //cannot update previous room users list until after the state update in activate user
        if (prevRoom) {
            io.to(prevRoom).emit('userList', {
                users:getUsersInRoom(prevRoom)
            })
        }

        //Join in new room
        socket.join(user.room)

        //To user who have joined in room
        socket.emit('message', buildMsg(ADMIN, `You have joined the ${user.room} chat room`))

        //To the users who are in room current user excluded
        socket.broadcast.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has joined the chat room`))
        
        //update the user list for the new joined room
        io.to(user.room).emit('userList', {
            users:getUsersInRoom(user.room)
        })

        io.emit('roomList', {
            rooms: getAllActiveRooms()
        })

    })
    
    //when user disconnects - to all others
    socket.on('disconnect', () => {
        const user = getUser(socket.id)
        userLeavesApp(socket.id)
        
        //broadcast the message that user has left the room
        if (user) {
            io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has left the chat room`))
            
            //update the room after the current user left the application
            io.to(user.room).emit('userList', {
                users:getUsersInRoom(user.room)
            })

            io.emit('roomList', {
                rooms:getAllActiveRooms()
            })
        }

        console.log(`user ${socket.id} has disconnected`)
    })
    

    

    //listning for message event
    socket.on('message', ({ name, text }) => {
        const room = getUser(socket.id)?.room

        if (room) {
            io.to(room).emit('message',buildMsg(name,text))
        }
    })

    socket.on('activity', (name) => {
        const room = getUser(socket.id)?.room
        if (room) {
            socket.broadcast.to(room).emit('activity',name)
        }
    })
})

function buildMsg(name, text) {
    return {
        name,
        text,
        time: new Intl.DateTimeFormat('default', {
            hour: 'numeric',
            minute: 'numeric',
            second:'numeric'
        }).format(new Date())
    }
}

function activateUser(id, name, room) {
    const user = { id, name, room }
    UsersState.setUsers([
        ...UsersState.users.filter(user => user.id !== id),
        user
    ])

    return user
}

function userLeavesApp(id) {
    UsersState.setUsers(
        UsersState.users.filter(user => user.id !== id)
    )
}

function getUser(id) {
    return UsersState.users.find(user => user.id === id)
}

function getUsersInRoom(room) {
    return UsersState.users.filter(user => user.room === room)
}

function getAllActiveRooms() {
    return Array.from(new Set(UsersState.users.map(user => user.room)))
}

