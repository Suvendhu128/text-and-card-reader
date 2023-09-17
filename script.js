const toggleButton = document.getElementById('toggleButton');
    const textAreaContainer = document.getElementById('textAreaContainer');
    const textArea = document.getElementById('textArea');
    const readButton = document.getElementById('readButton');
    const cards = document.querySelectorAll('.card');

    toggleButton.addEventListener('change', () => {
        textAreaContainer.style.display = toggleButton.checked ? 'block' : 'none';
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            textArea.value = card.getAttribute('data-text');
            speakText(card.querySelector('p').textContent);
            textArea.value = '';
        });

        const cardImage = card.querySelector('img');
        cardImage.addEventListener('click', () => {
            const cardText = card.querySelector('p').textContent;
            speakText(cardText);
        });
    });

    readButton.addEventListener('click', () => {
        const textToRead = textArea.value;
        speakText(textToRead);
    });

    function speakText(text) {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(speech);
        } else {
            alert("error");
        }
    }