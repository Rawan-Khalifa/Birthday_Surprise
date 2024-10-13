function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = 'sponge';

    if (answer === correctAnswer) {
        document.getElementById('confusing-buttons').classList.add('hidden');
        document.getElementById('error').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');

        // Trigger confetti
        runConfetti();
    } else {
        document.getElementById('error').classList.remove('hidden');
    }
}

function confusingClick(message) {
    alert(message);
}

function runConfetti() {
    var duration = 5 * 1000; // Confetti lasts for 5 seconds
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
