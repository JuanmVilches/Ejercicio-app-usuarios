const users = []

const tableBodyHTML = document.getElementById("table-body")
const formHTML = document.getElementById("user-form")

// Escucha el boton submit del formulario y pushea el contenido a la tabla
formHTML.addEventListener("submit", (evt) => {

    evt.preventDefault()
    const el = evt.target.elements

    const newUser = {
        name: el.nombre.value,
        email: el.mail.value,
        phone: el.phone.valueAsNumber,
        date: el.date.value,
        id: Date.now().toString().slice(-5),
    }

    users.push(newUser)
    pintarUsuarios(users)
})

function pintarUsuarios(arrayUsers) {

    tableBodyHTML.innerHTML = ""

    arrayUsers.forEach(user => {

        tableBodyHTML.innerHTML += `<tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                                <td>${user.date}</td>
                                <td>
                                    <div class="action-group">
                                        <button onclick="borrarUser(${user.id})">
                                            <i class="fa-solid fa-trash action-btn"></i>
                                        </button>
                                        <button>
                                            <i class="fa-solid fa-pen action-btn"></i>
                                        </button>
                                    </div>

                                </td>
                            </tr>`
    });
}

function borrarUser(id) {
    console.log(id)

    const indiceUser = users.findIndex(user => {
        if (Number(user.id) === id) {
            return true
        }
    })

    console.log (indiceUser)
    const confirmar = confirm("Desea borrar el usuario?")


    if (confirmar) {
        users.splice(indiceUser, 1)

        pintarUsuarios(users)
    }
}












