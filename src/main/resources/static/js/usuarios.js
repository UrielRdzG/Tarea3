// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailUsuario();
});

function actualizarEmailUsuario() {
    document.getElementById('txt-email-usuario').outerHTML= "Bienvenido " + localStorage.email;
}

async function cargarUsuarios() {

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
    //body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const usuarios = await request.json();

  let listadoUsuarios = '';
    for(let usuario of usuarios) {
        let  botonEliminar='<a href="#" onclick="eliminarUsuario('+usuario.id+')" className="btn btn-danger btn-circle btn-sm">Eliminar</a>';
        let usuarioHTML = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+' '+usuario.apellido+'</td><td>'+usuario.email+'</td><td>'+usuario.telefono+'</td><td>'+botonEliminar+'</td></tr>'
        listadoUsuarios += usuarioHTML;
    }

  console.log(usuarios);

  document.querySelector('#usuarios tbody').outerHTML = listadoUsuarios;

}

function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}
async function eliminarUsuario(id){
    if (!confirm('¿Desea eliminar este usuario?')){
        return
    }
    const request = await fetch('api/usuarios/'+id, {
        method: 'DELETE',
        headers: getHeaders()
        //body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    location.reload();
}