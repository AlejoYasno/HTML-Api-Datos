async function obtenerUsuarios() {

```
const resultado = document.getElementById("resultado");


resultado.innerHTML = `
    <div class="alert alert-info">
        Consultando la API...
    </div>
`;


try {

    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );


    if (!respuesta.ok) {

        throw new Error("Error al consultar la API");

    }


    const usuarios = await respuesta.json();


    let html = `
        <div class="row">
    `;


    usuarios.forEach(usuario => {

        html += `

            <div class="col-md-6 mb-3">

                <div class="card">

                    <div class="card-body">

                        <h5 class="card-title">

                            ${usuario.name}

                        </h5>

                        <p class="card-text">

                            <strong>Usuario:</strong>
                            ${usuario.username}

                            <br>

                            <strong>Email:</strong>
                            ${usuario.email}

                            <br>

                            <strong>Ciudad:</strong>
                            ${usuario.address.city}

                        </p>

                    </div>

                </div>

            </div>

        `;

    });


    html += `
        </div>
    `;


    resultado.innerHTML = html;


} catch (error) {

    resultado.innerHTML = `

        <div class="alert alert-danger">

            No se pudo conectar con la API.

            <br>

            ${error.message}

        </div>

    `;

    console.error(error);

}
```

}
