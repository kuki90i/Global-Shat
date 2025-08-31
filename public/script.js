body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: background-color 0.3s, color 0.3s;
}

body.dark {
    background-color: #1a1a1a;
    color: #e0e0e0;
}

body.light {
    background-color: #f0f0f0;
    color: #333;
}

.auth-container, .chat-container {
    width: 400px;
    background: var(--bg-color, #fff);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
}

.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab {
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    font-weight: bold;
    color: var(--text-color, #333);
}

.tab.active {
    border-bottom: 2px solid var(--accent-color, #4caf50);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid var(--border-color, #ddd);
    border-radius: 5px;
    box-sizing: border-box;
    background: var(--input-bg, #fff);
    color: var(--text-color, #333);
}

.error {
    color: #f44336;
    font-size: 0.9em;
    display: block;
    margin-top: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background: var(--accent-color, #4caf50);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: var(--accent-hover, #45a049);
}

#chat-container .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color, #ddd);
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
}

.messages {
    flex: 1;
    list-style-type: none;
    padding: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 400px;
    border-bottom: 1px solid var(--border-color, #ddd);
    background: var(--msg-bg, #e0f7fa);
}

.messages li {
    background: var(--msg-item-bg, #d1e8eb);
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    word-wrap: break-word;
}

.messages li strong {
    color: var(--accent-color, #4caf50);
}

.input-area {
    display: flex;
    padding: 10px 0;
}

#msg {
    flex: 1;
    margin-right: 10px;
}

#themeToggle {
    width: auto;
    margin-top: 10px;
    background: var(--secondary-bg, #757575);
}

#themeToggle:hover {
    background: var(--secondary-hover, #616161);
}
