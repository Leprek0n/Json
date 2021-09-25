// viewAllUsers()
// function getUserForFillModal(id) {
//     fetch("http://localhost:8080/api/admin/" + id)
//         .then(res => {
//             res.json().then(user => {
//                 console.log(user)
//                 document.getElementById("idEdit").value(user.id)
//                 document.getElementById("firstNameEdit").value(user.name)
//                 document.getElementById("emailEdit").value(user.email)
//                 document.getElementById("rolesEdit").value(user.roles.map(r => r.role.replace('ROLE_', '')).join(', '))
//             })
//         })
// }
// async function viewAllUsers() {
//     fetch("http://localhost:8080/api/admin/userInfo")
//         .then(res => {
//             res.json().then((user) => {
//                 console.log(user)
//                 let head1 = document.getElementById("head1")
//                 head1.textContent = user.name
//             })
//         })
//
//
//     fetch("http://localhost:8080/api/admin/users")
//         .then(res => {
//             res.json().then(data => {
//                 console.log(data)
//                 let temp = ""
//
//                 data.forEach((user) => {
//                     temp += "<tr>"
//                     temp += "<td>" + user.id + "</td>>"
//                     temp += "<td>" + user.name + "</td>>"
//                     temp += "<td>" + user.email + "</td>>"
//                     temp += "<td>" + user.roles.map(r => r.role.replace('ROLE_', '')).join(', ') + "</td>>"
//                     temp += "<td>" + '<button onclick="getUserForFillModal(user.id)" class="btn btn-primary">Edit</button>' + "</td>>"
//                 })
//                 document.getElementById("data").innerHTML = temp
//             })
//         })
// }
//
// async function updateUser() {
//     event.preventDefault()
//     let userid = document.getElementById("idEdit").value()
//     let firstName = document.getElementById("firstNameEdit").value()
//     let email = document.getElementById("emailEdit").value()
//     let roles = document.getElementById("rolesEdit").value()
//     let user = {
//         firstName: firstName,
//         email: email,
//         roles: roles
//     }
//     let response = await fetch("http://localhost:8080/api/admin/" + userid + "/" + firstName, {
//         method: 'PATCH',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//     if(response.ok) {
//         viewAllUsers()
//     }
// }
//
// async function userInfo() {
//     // let userInfoTab = document.getElementById()
//     fetch("http://localhost:8080/api/admin/userInfo")
//         .then(res => res.json())
//         .then(data => {
//             let tab = "<tr>"
//             data.forEach((user) => {
//             tab += "<td>" + user.id + "</td>"
//             tab +=  "<td>"+ user.name+"</td>"
//             tab +=  "<td>"+user.email +"</td>"
//             tab +=  "<td>"+user.roles+"</td>"
//
//         })
//             let userHead = document.getElementById("userInfoBodyTab")
//             userHead.append(tab)
//
//
//         })
// }