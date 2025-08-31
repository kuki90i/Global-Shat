const socket = io();
const messages = document.getElementById('messages');
const msgInput = document.getElementById('msg');

socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight; // Авто-скролл вниз
});

function sendMessage() {
    const msg = msgInput.value.trim();
    if (msg) {
        socket.emit('chat message', msg);
        msgInput.value = '';
    }
}

msgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
