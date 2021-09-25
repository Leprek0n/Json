viewAllUsers()

async function viewAllUsers() {
    fetch("http://localhost:8080/api/admin/userInfo")
        .then(res => {
            res.json().then(user => {
                document.querySelector(".nav-username").textContent = user.name
                document.querySelector(".nav-user-roles").textContent = "with roles: " + user.roles.map(r => r.role.replace("ROLE_", "")).join(", ")
            })
        })

    // document.getElementById("data").detach()

    fetch("http://localhost:8080/api/admin/users")
        .then(res => {
            res.json().then(data => {
                console.log(data)
                let temp = ""
                data.forEach(function (users) {
                    temp += "<tr>"
                    temp += "<td>" + users.id + "</td>>"
                    temp += "<td>" + users.name + "</td>>"
                    temp += "<td>" + users.email + "</td>>"
                    temp += "<td>" + users.roles.map(r => r.role.replace('ROLE_', '')).join(', ') + "</td>>"
                    temp += "<td>" + '<button onclick="getUserForFillModal(user.id)" class="btn btn-primary">Edit</button>' + "</td>>"
                })
                let dat = document.getElementById("data")
                dat.append(temp)
            })
        })
}

function allUser() {
    document.getElementById("headPanel").style.display = "block"
}
function userInfo() {
    document.getElementById("headPanel").style.display = "none"
    fetch("http://localhost:8080/api/admin/userInfo")
        .then(res => {
            res.json().then(user => {
                let tab = ""
                temp += "<tr>"
                temp += "<td>" + user.id + "</td>>"
                temp += "<td>" + user.name + "</td>>"
                temp += "<td>" + user.email + "</td>>"
                temp += "<td>" + user.roles.map(r => r.role.replace('ROLE_', '')).join(', ') + "</td>>"
                temp += "<td>" + '<button onclick="getUserForFillModal(user.id)" class="btn btn-primary">Edit</button>' + "</td>>"
            })

        })
}