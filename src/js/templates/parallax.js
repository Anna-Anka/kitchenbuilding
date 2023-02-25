export const parallax = () => {
    const bg = document.querySelector('.best__bg');

    // По умолчанию здесь onmousemove повешен на document
    bg.onmousemove = (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerWidth;

        bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
    };
};
