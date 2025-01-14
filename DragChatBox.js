document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const header = document.getElementById('chatboxHeader');
    const minimizeBtn = document.getElementById('minimizeBtn');
    const chatboxBody = document.getElementById('chatboxBody');
    let isMoving = false;
    let offsetX = 0;
    let offsetY = 0;

    minimizeBtn.addEventListener('click', () => {
        chatbox.classList.toggle('minimized'); // Toggle the minimized class
    });

    header.addEventListener('mousedown', (e) => {
        isMoving = true;
        offsetX = e.clientX - chatbox.offsetLeft;
        offsetY = e.clientY - chatbox.offsetTop;
        chatbox.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isMoving) {
            chatbox.style.left = `${e.clientX - offsetX}px`;
            chatbox.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isMoving = false;
        chatbox.style.cursor = 'grab';
    });
});
