// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios() {

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
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

async function eliminarUsuario(id){
    if (!confirm('¿Desea eliminar este usuario?')){
        return
    }
    const request = await fetch('api/usuarios/'+id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    location.reload();
}