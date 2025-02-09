//テキストを浮かび上がらせるアニメーション
//catchphrase に適用
const catchphrase= document.querySelector('#catchephrase');

const keyframes = {
    opacity: [0, 1],
    transform: ['scale(0)', 'scale(1)'],
    translate: ['0, 50px', 0],
};
const options = {
    duration: 4000,
    easing: 'ease',
}

catchphrase.animate(keyframes, options);
<script src="https://kit.fontawesome.com/aae9bb6c7e.js" crossorigin="anonymous"></script>
