document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.explosion-container');
    const images = [
        'assets/water_purifier_1.png',
        'assets/water_purifier_2.png',
        'assets/electronic_device_1.png',
        'assets/electronic_device_2.png'
    ];

    function createItem() {
        const item = document.createElement('img');
        const randomImg = images[Math.floor(Math.random() * images.length)];
        item.src = randomImg;
        item.classList.add('explosion-item');

        // Random trajectory
        const angle = Math.random() * Math.PI * 2;
        const distance = 300 + Math.random() * 500;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rot = Math.random() * 720 - 360;

        item.style.setProperty('--tx', `${tx}px`);
        item.style.setProperty('--ty', `${ty}px`);
        item.style.setProperty('--rot', `${rot}deg`);

        // Random duration and delay
        const duration = 2 + Math.random() * 3;
        item.style.animation = `explode ${duration}s ease-out forwards`;

        container.appendChild(item);

        // Remove item after animation
        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }

    // Continuous spawning
    setInterval(createItem, 400);

    // Initial burst
    for(let i=0; i<10; i++) {
        setTimeout(createItem, i * 100);
    }
});
