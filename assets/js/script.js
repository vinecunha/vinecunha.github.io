const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_o5yhboq';
   const templateID = 'template_z32ent6';

   emailjs.send(serviceID, templateID, {
        from_name: document.getElementById('nome').value + " " + document.getElementById('sobrenome').value,
        to_name: 'Vinicius',
        reply_to: document.getElementById('email').value,
        message: document.getElementById('mensagem').value,
   })
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});