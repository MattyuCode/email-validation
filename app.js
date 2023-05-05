const form = document.querySelector("form"),
    inputName = document.querySelector("#inputName"),
    inputEmail = document.querySelector("#inputEmail"),
    inputPassword = document.querySelector("#inputPassword"),
    InputRetpeatPassword1 = document.querySelector("#InputRetpeatPassword1"),
    inputAffair = document.querySelector("#inputAffair"),
    messageText = document.querySelector("#messageText"),
    alertDanger = document.querySelectorAll(".alDanger"),
    // console.log(alertDanger);
    inputs = form.querySelectorAll("input, textarea"),
    ButtonClear = document.querySelector("#limpiar"),
    spinner = document.querySelector(".spinner"),
    // eyeSlashIcon = document.querySelector(".icon"),
    BtnEnviar = document.querySelector("#btnEnviar"),
    iconosShow = document.querySelectorAll(".icon");

const validUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    validEmail =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
    passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])[A-Za-z\d@$!%*?&]{8,}$/;

iconosShow.forEach((item) => {
    item.addEventListener("click", () => {
        const pInput = item.parentElement.querySelector("input");
        if (pInput.type === "password") {
            item.classList.replace("fa-eye-slash", "fa-eye");
            return (pInput.type = "text");
        }
        item.classList.replace("fa-eye", "fa-eye-slash");
        pInput.type = "password";
    });
});

ButtonClear.addEventListener("click", limpiarInputs);
form.addEventListener("input", ButtonClearDeshabilitar);
form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputName.addEventListener("keyup", checkNameFull);
    inputEmail.addEventListener("keyup", checkEmail);
    inputPassword.addEventListener("keyup", checkPassword);
    InputRetpeatPassword1.addEventListener("keyup", cofirmPassword);
    inputAffair.addEventListener("keyup", chekAsunto);
    messageText.addEventListener("keyup", chekMessage);

    validaciones();
});

//PARA ACCEDER A UNA PÁGINA COMO LO TIENE EL CODINGLAB https://youtu.be/RBT8Q6-cBsk
function llevarAlaPagina() {
    if (
        !inputName.classList.contains("is-invalid") &&
        !inputEmail.classList.contains("is-invalid") &&
        !inputPassword.classList.contains("is-invalid") &&
        !inputPassword.classList.contains("is-invalid") &&
        !InputRetpeatPassword1.classList.contains("is-invalid") &&
        !inputAffair.classList.contains("is-invalid") &&
        !messageText.classList.contains("is-invalid")
    ) {
        location.href = form.getAttribute("action");
    }
}

const checkNameFull = () => {
    if (!validUserName.test(inputName.value) || !inputName.value.trim()) {
        return (
            inputName.classList.add("is-invalid"),
            alertDanger[0].classList.add("invalid-feedback"),
            (alertDanger[0].innerHTML = "Formato no válido campo nombre, solo letras")
        );
    }
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
};

const checkEmail = () => {
    if (!validEmail.test(inputEmail.value)) {
        return (
            inputEmail.classList.add("is-invalid"),
            alertDanger[1].classList.add("invalid-feedback"),
            (alertDanger[1].innerHTML = "Escriba un correo válido")
        );
    }
    inputEmail.classList.remove("is-invalid");
    inputEmail.classList.add("is-valid");
};

const checkPassword = () => {
    if (!inputPassword.value.match(passPattern)) {
        inputPassword.classList.add("is-invalid"),
            inputPassword.classList.remove("is-valid"),
            alertDanger[2].classList.add("invalid-feedback"),
            (alertDanger[2].innerHTML =
                "Ingrese al menos 8 caracteres con número, símbolo, pequeño y letra mayúscula.");

        if (inputPassword.classList.contains("is-invalid")) {
            iconosShow[0].classList.add("isError");
            iconosShow[0].classList.remove("isNotError");
        } else {
            iconosShow[0].classList.remove("isError");
            iconosShow[0].classList.add("isNotError");
        }
        return;
    }
    inputPassword.classList.remove("is-invalid");
    inputPassword.classList.add("is-valid");

    if (inputPassword.classList.contains("is-valid")) {
        iconosShow[0].classList.add("isNotError");
        iconosShow[0].classList.remove("isError");
    }
    // else {
    //     eyeSlashIcon.classList.add('isError');
    //     eyeSlashIcon.classList.remove('isNotError');

    // }
};

const cofirmPassword = () => {
    if (
        inputPassword.value !== InputRetpeatPassword1.value ||
        InputRetpeatPassword1.value === ""
    ) {
        InputRetpeatPassword1.classList.add("is-invalid"),
            InputRetpeatPassword1.classList.remove("is-valid"),
            alertDanger[3].classList.add("invalid-feedback"),
            (alertDanger[3].innerHTML = "Ambos contraseñas tienen que ser iguales");

        if (InputRetpeatPassword1.classList.contains("is-invalid")) {
            iconosShow[1].classList.add("esError");
            iconosShow[1].classList.remove("NoEsError");
        } else {
            iconosShow[1].classList.remove("esError");
            iconosShow[1].classList.add("NoEsError");
        }
        return;
    }
    InputRetpeatPassword1.classList.remove("is-invalid");
    InputRetpeatPassword1.classList.add("is-valid");

    if (InputRetpeatPassword1.classList.contains("is-valid")) {
        iconosShow[1].classList.add("NoEsError");
        iconosShow[1].classList.remove("esError");
    }
};

const chekAsunto = () => {
    if (inputAffair.value.trim() === "") {
        // esto se pude usar los dos inputAffir.value.trim() === " " O "!inputAffair.value.trim()"
        return (
            inputAffair.classList.add("is-invalid"),
            inputAffair.classList.remove("is-valid"),
            alertDanger[4].classList.add("invalid-feedback"),
            (alertDanger[4].innerHTML = "Campo Obligatorio")
        );
    }
    inputAffair.classList.add("is-valid");
    inputAffair.classList.remove("is-invalid");
};


const chekMessage = () => {
    if (!messageText.value.trim()) {
        return (
            messageText.classList.add("is-invalid"),
            messageText.classList.remove("is-valid")
        );
        // console.log("Messages Obligatorio");
    }
    messageText.classList.add("is-valid");
    messageText.classList.remove("is-invalid");
};


// Validaciones--------------------------------------------------->
const validaciones = () => {
    //Valid Nombre completo------------->
    checkNameFull();
    // if (!validUserName.test(inputName.value) || !inputName.value.trim()) {
    //     inputName.classList.add("is-invalid");
    //     // inputName.classList.remove("is-valid");
    //     alertDanger[0].classList.add("invalid-feedback");
    //     alertDanger[0].innerHTML = "Formato no válido campo nombre, solo letras";
    //     // console.log("Campo Obligatorio");
    // } else {
    //     inputName.classList.add("is-valid");
    //     inputName.classList.remove("is-invalid");
    //     // alertDanger[0].classList.remove("invalid-feedback");
    //     // alertDanger[0].classList.remove("valid-feedback");
    //     // alertDanger[0].innerHTML = "";
    //     // agregarAlArray(inputValue);
    //     // console.log(inputValue);
    // }

    //Valid Email------------------------->
    checkEmail();
    // if (!validEmail.test(inputEmail.value) || !inputEmail.value.trim()) {
    //     inputEmail.classList.add("is-invalid");
    //     inputEmail.classList.remove("is-valid");
    //     alertDanger[1].classList.add("invalid-feedback");
    //     alertDanger[1].innerHTML = "Escriba un correo válido";
    // } else {
    //     inputEmail.classList.add("is-valid");
    //     inputEmail.classList.remove("is-invalid");
    //     alertDanger[1].classList.remove("invalid-feedback");
    //     alertDanger[1].classList.remove("valid-feedback");
    //     alertDanger[1].innerHTML = "";
    // }
    /*
                          const string = 'miemail@ejemplo.com';
                          const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                          const result = regex.test(string);

                          console.log(result); // Output: true


                          const string = 'Hello World, how are you today?';
                          const regex = /\b[a-z]{3}\b/g;
                          const result = string.match(regex);

                          console.log(result); // Output: ["Hello", "are", "you", "today"]

                      */

    //Valid Password
    checkPassword();
    // if (inputPassword.value === "") {
    //     inputPassword.classList.add("is-invalid");
    //     inputPassword.classList.remove("is-valid");
    //     alertDanger[2].classList.add("invalid-feedback");
    //     alertDanger[2].innerHTML = "Contraseña Obligatorio";
    // } else {
    //     inputPassword.classList.add("is-valid");
    //     inputPassword.classList.remove("is-invalid");
    //     alertDanger[2].classList.remove("invalid-feedback");
    //     alertDanger[2].classList.remove("valid-feedback");
    //     alertDanger[2].innerHTML = "";
    // }

    //Confirmar contraseña
    cofirmPassword();

    //Valid Affair
    chekAsunto();
    // if (inputAffair.value.trim() === "") { /// esto se pude usar los dos inputAffir.value.trim() === " " o se puede tambien el "!inputAffair.value.trim()"
    //     inputAffair.classList.add("is-invalid");
    //     alertDanger[4].classList.add("invalid-feedback");
    //     alertDanger[4].innerHTML = "Campo Obligatorio";
    // } else {
    //     inputAffair.classList.add("is-valid");
    //     inputAffair.classList.remove("is-invalid");
    //     alertDanger[4].classList.remove("invalid-feedback");
    //     alertDanger[4].classList.remove("valid-feedback");
    //     alertDanger[4].innerHTML = "";
    // }

    //Valid Messages
    chekMessage();
    // if (messageText.value === "") {
    //     messageText.classList.add("is-invalid");
    //     messageText.classList.remove("is-valid");
    //     // console.log("Messages Obligatorio");
    // } else {
    //     messageText.classList.add("is-valid");
    //     messageText.classList.remove("is-invalid");
    // }

    let invalidInputs = false;
    inputs.forEach((input) => {
        if (input.classList.contains("is-invalid")) {
            invalidInputs = true;
        }
    });

    if (!invalidInputs) {
        // se manda la negacion del invalid en FALSE dentro del if
        spinner.classList.remove("d-none");
        BtnEnviar.innerHTML = "Enviando....";

        setTimeout(() => {
            // form.reset();
            BtnEnviar.innerHTML = "Enviar";
            spinner.classList.add("d-none");
            limpiarInputs();
            // toastr.success('Mensaje enviado exitosamente', 'Éxito..!', {
            //     "positionClass": "toast-bottom-right"
            // })
            toastr.success("Mensaje enviado exitosamente", "Éxito..!");
            setTimeout(() => {
                llevarAlaPagina();
            }, 1000);
        }, 3000);
    }
    // spinner.classList.remove('d-none');
};

function limpiarInputs() {
    // form.reset();
    // const inputs = form.querySelectorAll('input, textarea');
    for (const input of inputs) {
        input.value = "";
        input.classList.remove("is-valid", "is-invalid");
    }
    iconosShow[0].classList.remove("isNotError", "isError");
    iconosShow[1].classList.remove("NoEsError", "esError");
    // se manda a llamar la funcion para volver a deshabilitar
    ButtonClearDeshabilitar();
}

//MUY IMPORTANTE
// function clearInputClasses() {//  se manda el onclick="clearInputClasses()" en HTML
//     const form = document.querySelector("form");
//     const inputs = form.querySelectorAll('form input, form textarea');

//     inputs.forEach(input => {
//         input.value = "";
//         input.classList.remove('is-valid', 'is-invalid');
//     });
// }

function ButtonClearDeshabilitar() {
    let isValid = true;
    for (const input of inputs) {
        if (input.value.trim() === "") {
            isValid = false;
            break;
        }
    }
    ButtonClear.disabled = !isValid;
}