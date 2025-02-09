document.addEventListener("DOMContentLoaded", () => {
    const catchphrase = document.querySelector('.catchphrase');

    if (catchphrase) {
        const keyframes = {
            opacity: [0, 1],
        };

        const options = {
            duration: 1000,
            easing: 'ease',
            fill: 'forwards' // アニメーション終了後の状態を維持
        };

        catchphrase.animate(keyframes, options);
    }
});
