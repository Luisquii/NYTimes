export default (firestoreError, setErrorMessage) => {

    console.log(firestoreError.code);
    switch (firestoreError.code) {

        //login
        case "auth/user-disabled":
            setErrorMessage("Tu cuenta ha sido bloqueada.")
            break;

        case "auth/user-not-found":
            setErrorMessage("Usuario no encontrado.")
            break;

        case "auth/wrong-password":
            setErrorMessage("Datos incorrectos.")
            break;

        case "auth/too-many-requests":
            setErrorMessage("Debido a la cantidad de intentos, se bloqueo tu cuenta durante 1 hora.")
            break;
        ///////////

        //signup
        case "auth/weak-password":
            setErrorMessage("Contraseña debil, intente con una nueva contraseña")
            break;

        case "auth/email-already-in-use":
            setErrorMessage("Correo ya en uso, intente con un correo diferente.")
            break;

        case "auth/invalid-email":
            setErrorMessage("Direccion de correo invalida, intente nuevamente con una direccion de correo distinta")
            break;

        default:
            setErrorMessage("Hubo un error, intente nuevamente más tarde")
    }

}