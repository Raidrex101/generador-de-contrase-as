let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let constraseña = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');

const cadenaDeCaracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';


function generar() {
     
    let numeroSolicitado = parseInt (cantidad.value);
    
    if (numeroSolicitado < 8) {
        alert('La cantidad de caracteres deve ser mayor a 8');
    }

    let contraseña = '';

    for (let i = 0; i < numeroSolicitado; i++) {
        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random()* cadenaDeCaracteres.length)];
        
        contraseña += caracterAleatorio;
    }

    if(tieneMayusculas(contraseña) && tieneEspeciales(contraseña) && tieneNumeros(contraseña)){ //condicioinales  para verificar si tiene al menos un caracter de cada tipo alert contraseña segura
         constraseña.value = contraseña
         alert('contraseña segura');
    }else {
         constraseña.value = contraseña
         alert('contraseña débil');
    }
}


function tieneMayusculas (contraseña){
    return /[A-Z]/.test(contraseña); //   /[A-Z]/.test(contaseña) revisa entre todo el abecedario en mayusculas

}

function tieneEspeciales(contraseña){
    return /[!@#$%^&*()]/.test(contraseña); //   /[!@#$%^&*()]/.test(contraseña) revisa si hay al menos un caracter especial esta en la contraseña

}

function tieneNumeros(contraseña){

    return /[0-9]/.test(contraseña); //   /[0-9]/.test(contraseña) revisa si hay al menos un caracter numerico esta en la contraseña

}

function limpiar(){ //borra los valores de contraseña y cantidad
    contrasena.value = '';
    cantidad.value = '';
    
}












