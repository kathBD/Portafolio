const navtoggle =document.querySelector(".nav-toggle")
const menu =document.querySelector(".menu")

navtoggle.addEventListener("click", () =>{
   menu.classList.toggle("menu_visible") 
});

const btn = document.getElementById('button');

document.getElementById('form-info')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'grlg';
   const templateID = 'template_ybz10c5';
   var tempparam = {
      from_name : "Nuevo Contacto Portafolio de " + document.getElementById('fullname').value,
      to_name : "Katerine", 
      message : document.getElementById('email').value +  ' ' + '\n' +
                document.getElementById('phone').value +  ' ' + '\n' +
                document.getElementById('affair').value+  ' ' + '\n' +
                document.getElementById('message').value
      };

    emailjs.send(serviceID, templateID,tempparam)
    .then(() => {
      btn.value = 'Send Email';
      alert('Su correo fue enviado con exito!!!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});