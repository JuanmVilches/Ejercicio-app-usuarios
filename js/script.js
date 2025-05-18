const users = [
    {
        id: Date.now().toString().slice(-5),
        name: "Juan Manuel Vilches",
        email: "email@gmail.com",
        phone: 123456789,
        date: "1999-09-03",
    }
]

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

    Swal.fire({
        title: "Usuario añadido",
        text: "El usuario fue agregado correctamente",
        icon: "success",
    })
    formHTML.reset()
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
                                        <button title="Borrar usuario" class="button-icon trash"onclick="borrarUser(${user.id})">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                        <button title="Editar usuario" class="button-icon" onclick="editarUser(${user.id})">
                                            <i class="fa-solid fa-pen"></i>
                                        </button>
                                    </div>

                                </td>
                            </tr>`
    });

}
pintarUsuarios(users)
function borrarUser(id) {

    const indiceUser = users.findIndex(user => {
        if (Number(user.id) === id) {
            return true
        }
    })
    Swal.fire({
        title: "¿Esta seguro que desea borrar el usuario?",
        text: "No podrá deshacer esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar usuario!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Borrado!",
                text: "El usuario fue borrado correctamente",
                icon: "success"
            });
            users.splice(indiceUser, 1)

            pintarUsuarios(users)
        }
    });


    // if (confirmar) {
    //     users.splice(indiceUser, 1)

    //     pintarUsuarios(users)
    // }
}












