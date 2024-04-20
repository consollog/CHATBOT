const sendMessage = document.querySelector(".chat-input textarea");
const send = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let message;

const createUser = (message, className) => {
    const chartLi = document.createElement("li");
    chartLi.classList.add("chat", className);
    let chatContext = className === "outgoing" ? `<p>${message}</p>` : ` <span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`
    chartLi.innerHTML = chatContext
    return chartLi;
}
const generateResponse = (incomingChat) => {
    const responses = [
        "I am fine! Hello, how are you?",
        "I'm doing great! How about you?",
        "All good here. How can I assist you?",
        "Hello! What can I do for you today?"
    ];

    //Choose a random response from the predefined list
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];

    //Update the content of the incoming message with the selected response
    const incomingMessage = incomingChat.querySelector("p");
    incomingMessage.textContent = randomResponse;
};


const handleMSG = () => {
    message = sendMessage.value.trim()
    if (!message) return;

    chatbox.appendChild(createUser(message, "outgoing"));

    setTimeout(() => {
        const incommingchat = chatbox.appendChild(createUser("Thinking...", "incomming"));
        setTimeout(() => {
            generateResponse(incommingchat);
        }, 700)
    }, 600)

}
send.addEventListener("click", handleMSG)
