const emailnappi = document.querySelector('.lahetanappi');

console.log (emailnappi);
emailnappi.addEventListener('click', e=> {
e.preventDefault();
sendJSON(); 
});

function sendJSON(){
  let zhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

xhr.open('post', url, true);

xhr.setRequestHeader("Content-Type", "application/json"); 
}

 xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
    console.log ("valmis, yhteys toimii");
    }
};
var data = JSON.stringify({
    "EmailMsg": "Azure"
    "EmailAddress": "mira.vorne@salpaus.fi",
    "EmailTo": "leevi.svard@gmail.com",
    "EmailName": "Tyyppi Testaa",
});
 xhr.send(data); 
}