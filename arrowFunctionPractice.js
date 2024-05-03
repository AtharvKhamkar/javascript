// var person = {
//     name: "Atharv",
//     getName: function () {
//         var self = this;
//         function xyz() {
//             console.log(self)
//         }
//         xyz()
//     }
// }


var person = {
    name: 'Atharv',
    getName: function () {
        const xyz = () => {
            console.log(this);
        }

        xyz();
    }
}

person.getName();