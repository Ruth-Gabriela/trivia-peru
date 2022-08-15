const buttonEnter = document.getElementById("button-form");
const inputName = document.getElementById("input-form");

/*Optenemos los datos del modal*/
const modal = document.getElementById("modal"); //modal
const titleModal = document.getElementById("title-modal"); //modal title
const textModal = document.getElementById("text-modal"); //modal text
const textButton = document.getElementById("close-modal"); //modal Button Text
const imgModal = document.getElementById("img-modal");

/*Creamos un objeto*/
const alerts = {
    welcome:{
        text: "Bienvenido al Juego",
        img: "https://i.imgur.com/rFcZFue.png",
        url: "./categorias222222.html",
        textButton: "Siguiente"
    },
    errorWelcome:{
        title: "Ingrese su nombre",
        text: "!Ha ocurrido un error!",
        img: "https://i.imgur.com/rFcZFue.png",
        url: "./index.html",
        textButton: "Aceptar"
    }
};

//Obtenemos el evento del Boton
buttonEnter.addEventListener("click", validateName);

function validateName(event) {
    event.preventDefault();
    
    if(inputName.value === ""){
        //No escribio su nombre y le mandamos modal de error
        showModal("error");
    }
    else{
        //Si escribio su nombre y le damos la modal de bienvenida
        showModal("success"); 
    }
}

function showModal(type){
    if(type === "error"){
        titleModal.innerHTML = alerts.errorWelcome["title"];
        textModal.innerHTML = alerts.errorWelcome["text"];
        textButton.innerHTML = alerts.errorWelcome["textButton"];
        textButton.href = alerts.errorWelcome["url"];
        imgModal.src = alerts.errorWelcome["img"];
    }
    if(type === "success"){
        titleModal.innerHTML = inputName.value.trim();
        textModal.innerHTML = alerts.welcome["text"];
        textButton.innerHTML = alerts.welcome["textButton"];
        textButton.href = alerts.welcome["url"];
        imgModal.src = alerts.welcome["img"];
    }
    modal.classList.remove("modalHide");
} 


