// Get references to the keypad keys, display input field, and the send button
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
