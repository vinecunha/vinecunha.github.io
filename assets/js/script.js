const btn = document.getElementById('button');
const alert = document.getElementById('alert-msg');

function cleanAlert(){
  alert.style.display = 'none';
  alert.className = "";
}

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   
   btn.innerText = 'Sending...';

   const serviceID = 'service_o5yhboq';
   const templateID = 'template_z32ent6';

   emailjs.send(serviceID, templateID, {
        from_name: document.getElementById('nome').value + " " + document.getElementById('sobrenome').value,
        to_name: 'Vinicius',
        reply_to: document.getElementById('email').value,
        message: document.getElementById('mensagem').value,
   })
    .then(() => {
      btn.innerText = 'Send Email';

      alert.setAttribute('role','alert');
      alert.className = "alert alert-success d-flex align-items-center justify-content-between";


      var alertSVGSuccess = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
      alertUseSuccess = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    
      alertSVGSuccess.setAttribute('width','24');
      alertSVGSuccess.setAttribute('height','24');
      alertSVGSuccess.setAttribute('role','img');
      alertSVGSuccess.setAttribute('aria-label','Success:');

      alertUseSuccess.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#check-circle-fill');
      
      alertSVGSuccess.appendChild(alertUseSuccess);

      var alertSuccessMsg = document.createElement('div');
      var alertSuccessMsgTxt = document.createTextNode(' E-mail sent!');
            
      alertSuccessMsg.appendChild(alertSVGSuccess);
      alertSuccessMsg.appendChild(alertSuccessMsgTxt);
      alert.appendChild(alertSuccessMsg);

      setTimeout(cleanAlert, 5000);

    }, (err) => {
      btn.innerText = 'Send Email';

      var alert = document.getElementById('alert-msg');
      alert.setAttribute('role','alert');
      alert.className = "alert alert-danger d-flex align-items-center justify-content-between";


      var alertSVGError = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
      alertUseError = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    
      alertSVGError.setAttribute('width','24');
      alertSVGError.setAttribute('height','24');
      alertSVGError.setAttribute('role','img');
      alertSVGError.setAttribute('aria-label','Danger:');

      alertUseError.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#exclamation-triangle-fill');
      
      alertSVGError.appendChild(alertUseError);

      var alertErrorMsg = document.createElement('div');
      var alertErrorMsgTxt = document.createTextNode(' Error sending the e-mail!\n\n' + 'Status: ' + JSON.stringify(err.status));
      
      alertErrorMsg.appendChild(alertSVGError);
      alertErrorMsg.appendChild(alertErrorMsgTxt);
      alert.appendChild(alertErrorMsg);

      setTimeout(cleanAlert, 5000);
      window.navigator.vibrate(500);
    });
});


function Eve() {
  const today = new Date();
  const targetDate = new Date('2022-10-17');
  
  const diffTime = Math.abs(targetDate - today);
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(diffMonths / 12);
  
  const EveDiv = document.getElementById('Eve');

  if(diffYears <= 0 ){
    return EveDiv.innerText = `${diffMonths % 12} months old`;
  }else{
    return EveDiv.innerText = `${diffYears} years and ${diffMonths % 12} months old`;
  }
  
}

function Vinecunha() {
  const today = new Date();
  const targetDate = new Date('1994-04-12');
  
  const diffTime = Math.abs(targetDate - today);
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(diffMonths / 12);
  
  const VinecunhaDiv = document.getElementById('vinecunha');

  return VinecunhaDiv.innerText = `${diffYears} years old`;
  
}

function Year() {
  const currentYear = new Date().getFullYear();
  const pElement = document.getElementById('year');
  pElement.innerText = `${currentYear}`;
}


window.addEventListener('load', Eve);
window.addEventListener('load', Vinecunha);
window.addEventListener('load', Year);