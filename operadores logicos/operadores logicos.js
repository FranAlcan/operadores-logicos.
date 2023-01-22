let nombre = prompt("'¿Quíen es?", '');

if (nombre === 'Admin') {

  let contraseña = prompt('¿Contraseña?', '');

  if (contraseña === 'TheMaster') {
    alert( 'Bienvenido' );
  } else if (contraseña === '' || contraseña === null) {
    alert( 'Cancelado' );
  } else {
    alert( 'Contraseña incorrecta' );
  }

} else if (nombre === '' || nombre === null) {
  alert( 'Cancelado' );
} else {
  alert( "No te conozco" );
}