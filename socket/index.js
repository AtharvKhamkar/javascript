import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express()
const server = http.createServer(app)
const io = new Server(server)


app.use(express.static(path.resolve("./public")))

//socket server
io.on("connection", (socket) => {
    socket.on("client_message", (message) => {
        io.emit("message",message)
    })
})



app.get("/", (req, res) => {
    return res.sendFile("./public/index.html")
})



server.listen(12000, () => {
    console.log("server is running at 12000")
})
