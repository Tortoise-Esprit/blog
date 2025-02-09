document.addEventListener("DOMContentLoaded", () => {
    const catchphrase = document.querySelector('.catchphrase');

    if (catchphrase) {
        const keyframes = {
            opacity: [0, 1],
            transform: ['translateY(50px) scale(0)', 'translateY(0) scale(1)'],
        };

        const options = {
            duration: 4000,
            easing: 'ease',
            fill: 'forwards' // アニメーション終了後の状態を維持
        };

        catchphrase.animate(keyframes, options);
    }
});
