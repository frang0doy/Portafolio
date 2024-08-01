let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
   if (menuVisible) {
      document.getElementById("nav").classList = "";
      menuVisible = false;
   } else {
      document.getElementById("nav").classList = "responsive";
      menuVisible = true;
   }
}

function seleccionar() {
   //oculto el menu una vez que selecciono una opcion
   document.getElementById("nav").classList = "";
   menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
   var skills = document.getElementById("skills");
   var distancia_skills =
      window.innerHeight - skills.getBoundingClientRect().top;
   if (distancia_skills >= 300) {
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("photoshop");
      habilidades[3].classList.add("wordpress");
      habilidades[4].classList.add("drupal");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajo");
      habilidades[7].classList.add("creatividad");
      habilidades[8].classList.add("dedicacion");
      habilidades[9].classList.add("proyect");
   }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
   efectoHabilidades();
};

document
   .getElementById("contact-form")
   .addEventListener("submit", function (event) {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);

      fetch(form.action, {
         method: "POST",
         body: formData,
         headers: {
            Accept: "application/json",
         },
      })
         .then((response) => {
            const messageElement = document.getElementById("form-messages");
            if (response.ok) {
               messageElement.innerText = "Mensaje enviado correctamente.";
               messageElement.classList.add("success", "show");
               form.reset();
            } else {
               response.json().then((data) => {
                  if (data.errors) {
                     messageElement.innerText = data.errors
                        .map((error) => error.message)
                        .join(", ");
                  } else {
                     messageElement.innerText =
                        "Hubo un problema al enviar el formulario.";
                  }
                  messageElement.classList.add("error", "show");
               });
            }
            setTimeout(() => {
               messageElement.classList.remove("show");
            }, 5000); // Oculta el mensaje después de 5 segundos
         })
         .catch((error) => {
            const messageElement = document.getElementById("form-messages");
            messageElement.innerText =
               "Hubo un problema al enviar el formulario.";
            messageElement.classList.add("error", "show");
            setTimeout(() => {
               messageElement.classList.remove("show");
            }, 5000); // Oculta el mensaje después de 5 segundos
         });
   });
