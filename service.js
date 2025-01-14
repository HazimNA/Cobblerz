document.addEventListener('DOMContentLoaded', () => {
    const chatboxBody = document.querySelector('.chatbox-body');
    const inputField = document.querySelector('.chatbox-footer input[type="text"]');
    const sendButton = document.querySelector('.chatbox-footer button');

    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you': "Need assistance, but I'm here to help!",
        'help': 'Sure, let me know what you need help with.',
        'thanks': 'You\'re welcome! Is there anything else I can help you with?',
        'whitening?': 'we offer whitening services for your shoes with quality products.',
        'polishing?': 'we offer polishing services for your shoes with quality products.',
        'repair?': 'we offer repair services for your shoes with quality products.',
        'cleaning?': 'we offer cleaning services for your shoes in a professional manner.',
        'bye': 'Goodbye! Have a great day!',
    };

    function addMessage(content, type) {
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = content;
        chatboxBody.appendChild(message);
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }

    function getResponse(userInput) {
        userInput = userInput.toLowerCase();
        for (const key in responses) {
            if (userInput.includes(key)) {
                return responses[key];
            }
        }
        return "I'm sorry, I don't understand that. Try again?";
    }

    sendButton.addEventListener('click', () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            addMessage(userInput, 'sent');
            const botResponse = getResponse(userInput);
            setTimeout(() => addMessage(botResponse, 'received'), 500);
            inputField.value = '';
        }
    });

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
