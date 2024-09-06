const blockchainItems = document.querySelectorAll('.blockchain-item');

blockchainItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.querySelector('.checkmark')) {
            item.querySelector('.checkmark').remove();
        } else {
            const checkmark = document.createElement('div');
            checkmark.classList.add('checkmark');
            item.appendChild(checkmark);
        }
    });
});
