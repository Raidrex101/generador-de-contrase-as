let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let constraseña = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');

const cadenaDeCaracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';


function generar() {

    let numeroSolicitado = parseInt(cantidad.value);

    if (numeroSolicitado < 8) {
        alert('La cantidad de caracteres deve ser mayor a 8');
        return
    }

    let contraseña = '';

    for (let i = 0; i < numeroSolicitado; i++) {
        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];

        contraseña += caracterAleatorio;
    }

    constraseña.value = contraseña

    if (tieneMayusculas(contraseña) && tieneEspeciales(contraseña) && tieneNumeros(contraseña)) { //condicioinales  para verificar si tiene al menos un caracter de cada tipo alert contraseña segura
        mensaje.textContent = 'Contrasena segura';
        mensaje.style.color ='green';

    } else {
        mensaje.textContent = 'Contrasena no segura';
        mensaje.style.color = 'red';
    }
}


function tieneMayusculas(contraseña) {
    return /[A-Z]/.test(contraseña); //   /[A-Z]/.test(contaseña) revisa entre todo el abecedario en mayusculas

}

function tieneEspeciales(contraseña) {
    return /[!@#$%^&*()]/.test(contraseña); //   /[!@#$%^&*()]/.test(contraseña) revisa si hay al menos un caracter especial esta en la contraseña

}

function tieneNumeros(contraseña) {

    return /[0-9]/.test(contraseña); //   /[0-9]/.test(contraseña) revisa si hay al menos un caracter numerico esta en la contraseña

}

function limpiar() { //borra los valores de contraseña y cantidad
    contrasena.value = '';
    cantidad.value = '';

}












