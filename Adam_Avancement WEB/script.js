var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
// Init web socket when the page loads
window.addEventListener('load', onload);

function onload(event) {
    initWebSocket();
    initButton();
}

function getReadings(){
    websocket.send("getReadings");
}

function toggle(){
    websocket.send('toggle');
  }

  function initButton() {
    document.getElementById('button').addEventListener('click', toggle);
  }

function initWebSocket() {
    console.log('Trying to open a WebSocket connection…');
    websocket = new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
}

// When websocket is established, call the getReadings() function
function onOpen(event) {
    console.log('Connection opened');
    //getReadings();
}

function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}

// Function that receives the message from the ESP32 with the readings
function onMessage(event) {
    console.log(event.data);
    var myObj = JSON.parse(event.data);
    var keys = Object.keys(myObj);
    var state;

    for (var i = 0; i < keys.length; i++){
        var key = keys[i];
        document.getElementById(key).innerHTML = myObj[key];
    }
    
    if (event.data == "1"){
      state = "ON";
    }
    else{
      state = "OFF";
    }
    document.getElementById('state').innerHTML = state;     
}

function toggle(){
  websocket.send('toggle');
}
// Web socket send pressed key and number
// key:1

const keypadKeys = document.querySelectorAll(".key");
const display = document.getElementById("display");
const sendButton = document.getElementById("sendButton");

// Initialize a variable to store the entered data
let enteredData = "";

// Add click event listeners to the keypad keys
keypadKeys.forEach(key => {
    key.addEventListener("click", () => {
        const keyData = key.textContent;
        enteredData += keyData;
        display.value = enteredData;
    });
});

// Add a click event listener to the send button
sendButton.addEventListener("click", () => {
    sendEnteredDataToServer(enteredData);
});

// Function to send the entered data to the server (you need to implement this)
function sendEnteredDataToServer(data) {
    // Replace this with the code to send the entered data to your server using WebSockets or another method.
    // Example: You can use WebSocket.send(data) here to send it to the WebSocket server.
    console.log("Sending data to server: " + data);
}