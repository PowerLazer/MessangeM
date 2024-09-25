let username = 'Гость';  // Имя по умолчанию

// Установка имени пользователя
document.getElementById('set-username').onclick = () => {
    const inputUsername = document.getElementById('username').value;
    if (inputUsername) {
        username = inputUsername;
        document.getElementById('username').value = '';  // Очистить поле ввода
        alert(`Имя установлено: ${username}`);
    }
};

// Отправка сообщения
document.getElementById('send').onclick = () => {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value;

    if (messageText) {
        // Получить текущие сообщения из localStorage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        
        // Добавить новое сообщение
        messages.push({
            username: username,
            message: messageText,
            timestamp: Date.now(),
        });

        // Сохранить обновленные сообщения в localStorage
        localStorage.setItem('messages', JSON.stringify(messages));

        messageInput.value = '';  // Очистить поле ввода
        displayMessages();  // Обновить отображение сообщений
    }
};

// Отображение сообщений
function displayMessages() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';  // Очистить предыдущие сообщения

    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<span class="username">${message.username}:</span> ${message.message}`;
        chatBox.appendChild(messageElement);
    });

    // Прокрутить вниз
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Инициализация чата
displayMessages();
