const validateEmail = (value) => {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Dirección de correo electrónico no válida';
    }
    return error;
  }

const confirmEmail = (values) => {
    let error;
    if (values.email != values.confirmEmail) {
        error = 'Los correos no coinciden';
    } 
    return error;
}


export {
    validateEmail,
    confirmEmail
}