const socket = io();
const messages = document.getElementById('messages');
const msgInput = document.getElementById('msg');
const authContainer = document.querySelector('.auth-container');
const chatContainer = document.getElementById('chat-container');
let currentUser = null;

socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${msg.nickname}</strong>: ${msg.text}`;
    messages.appendChild(li);
    messages.scrollTo(0, messages.scrollHeight); // Плавный скролл
});

function register() {
    const nickname = document.getElementById('regNickname').value;
    const password = document.getElementById('regPassword').value;
    const avatarInput = document.getElementById('regAvatar');
    const error = document.getElementById('regError');

    if (!/^[a-zA-Z0-9]{3,15}$/.test(nickname)) {
        error.textContent = 'Никнейм: 3-15 символов, только буквы и цифры';
        return;
    }
    if (password.length < 6) {
        error.textContent = 'Пароль должен быть минимум 6 символов';
        return;
    }
    if (!avatarInput.files || !avatarInput.files[0]) {
        error.textContent = 'Выберите изображение для аватара';
        return;
    }

    const file = avatarInput.files[0];
    if (!file.type.match('image.*')) {
        error.textContent = 'Файл должен быть изображением';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const avatarBase64 = e.target.result;
        error.textContent = '';
        socket.emit('register', { nickname, password, avatar: avatarBase64 });
    };
    reader.readAsDataURL(file);
}

function login() {
    const nickname = document.getElementById('loginNickname').value;
    const password = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');

    if (!nickname || !password) {
        error.textContent = 'Заполните все поля';
        return;
    }

    error.textContent = '';
    socket.emit('login', { nickname, password });
}

socket.on('auth success', (user) => {
    currentUser = user;
    document.getElementById('userNickname').textContent = user.nickname;
    document.getElementById('userAvatar').src = user.avatar;
    authContainer.style.display = 'none';
    chatContainer.style.display = 'block';
});

socket.on('error', (msg) => {
    document.getElementById('regError' in msg ? 'regError' : 'loginError').textContent = msg;
});

function sendMessage() {
    const msg = msgInput.value.trim();
    if (msg && currentUser) {
        socket.emit('chat message', { text: msg, nickname: currentUser.nickname });
        msgInput.value = '';
    }
}

msgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

document.body.classList.add(localStorage.getItem('theme') || 'light');
