
let formName = document.getElementById("name");
let formEmail = document.getElementById("email");
let formSubject = document.getElementById("subject");
let formMessage = document.querySelector("textarea");
let formSubmit = document.querySelector("button[type=submit]");
let alertContainer = document.querySelector(".form-alert");
let alertContainerJQ = $(".form-alert");
let formAlert;

formSubmit.addEventListener("click", formValidattion);

function formValidattion(e) {

  if (
    formName.value === "" ||
    formEmail.value === "" ||
    formSubject.value === "" ||
    formMessage.value === ""
  ) {
    e.preventDefault();
    setAlert("danger", "Error", "Todos los campos son requeridos");
  }
  
  else if (formName.value.length < 3) {
    e.preventDefault();
    setAlert("danger", "Error", "El nombre deberia ingresar mas de 3 caracteres");
  }

  else if (formEmail.value.split("@").length <= 1) {
    e.preventDefault();
    setAlert("danger", "Error", "Ingresa un correcto email");
  }

  else {
    e.preventDefault();
    setAlert("success", "Success", "Tu mensaje se ha enviado");
    emptyFields();
  }

  alertContainer.innerHTML = formAlert;
  alertContainerJQ.fadeIn();
}

function emptyFields() {
  formName.value = "";
  formEmail.value = "";
  formSubject.value = "";
  formMessage.value = "";
}

function setAlert($color, $state, $message) {
  formAlert = `<div class="alert alert-${$color} alert-dismissible fade show">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">
      &times;
    </a>
    <strong>${$state}!</strong> ${$message}
  </div>`;
}
