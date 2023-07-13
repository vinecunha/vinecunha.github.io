const btn = document.getElementById('button');
const alert = document.getElementById('alert-msg');

function cleanAlert(){
  alert.style.display = 'none';
  alert.className = "";
}

var isWhiteMode = false;

document.getElementById('changeColorBtn').addEventListener('click', function() {
  if (isWhiteMode) {
    // Modo Dark (valor original)
    document.documentElement.style.setProperty('--headercolor', '#13293d');
    document.documentElement.style.setProperty('--headercolorhover', '#069b8e');
    document.documentElement.style.setProperty('--bodycolor', '#111');
    document.documentElement.style.setProperty('--headerfontcolor', '#f0f0f0');
    document.documentElement.style.setProperty('--bodyfontcolor', '#e2e2e2');
    document.documentElement.style.setProperty('--gradient-color1', '#021e27');
    document.documentElement.style.setProperty('--gradient-color2', '#111');
    document.documentElement.style.setProperty('--accordion-background-color', '#22222299');
    document.documentElement.style.setProperty('--input-form-bgcolor', '#22222299');
    document.documentElement.style.setProperty('--accordion-button-bgcolor', '#222');
    document.documentElement.style.setProperty('--h5-background-color', '#19191977');
    document.documentElement.style.setProperty('--main-form-bgcolor', '#171515');
    document.getElementById("darkLightMode").innerHTML = "&#xf0eb";
    
    isWhiteMode = false;
  } else {
    // Modo White 
    document.documentElement.style.setProperty('--bodycolor', '#fafafa');
    document.documentElement.style.setProperty('--headercolor', '#fafafa');
    document.documentElement.style.setProperty('--bodyfontcolor', '#111111');
    document.documentElement.style.setProperty('--headerfontcolor', '#111111');
    document.documentElement.style.setProperty('--gradient-color2', '#fafafa');
    document.documentElement.style.setProperty('--accordion-background-color', '#eeeeee99');
    document.documentElement.style.setProperty('--accordion-button-bgcolor', '#ccc');
    document.documentElement.style.setProperty('--h5-background-color', '#E6E6E677');
    document.documentElement.style.setProperty('--main-form-bgcolor', '#d8d8d8');
    document.documentElement.style.setProperty('--input-form-bgcolor', '#fff');
    document.getElementById("darkLightMode").innerHTML = "&#xf186";
    
    isWhiteMode = true;
  }
});


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

function calculateAge(targetDate, elementId) {
  const today = new Date();

  const diffTime = Math.abs(targetDate - today);
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(diffMonths / 12);

  const element = document.getElementById(elementId);

  if (diffYears <= 0) {
    element.innerText = `${diffMonths % 12}-month`;
  } else {
    element.innerText = `${diffYears} year and ${diffMonths % 12} months`;
  }
}

calculateAge(new Date('2022-10-17'), 'Eve');
calculateAge(new Date('1994-04-12'), 'vinecunha');
calculateAge(new Date('2021-11-08'), 'hererightnow');

function Year() {
  const currentYear = new Date().getFullYear();
  const pElement = document.getElementById('year');
  pElement.innerText = `v.4.0.1.12. © ${currentYear}`;
}

window.addEventListener('load', Eve);
window.addEventListener('load', Vinecunha);
window.addEventListener('load', hererightnow);
window.addEventListener('load', Year);