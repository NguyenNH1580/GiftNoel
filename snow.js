document.addEventListener("DOMContentLoaded", function () {
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        var flashCard = document.querySelector('.cards');

        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "&#10052;"; // You can change this to any snowflake symbol
        document.body.appendChild(snowflake);

        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        const speed = Math.random() * 2 + 1;

        snowflake.style.left = initialX + "px";
        snowflake.style.top = initialY + "px";

        setInterval(() => {
            const currentY = parseFloat(snowflake.style.top);
            snowflake.style.top = currentY + speed + "px";

            if (currentY > window.innerHeight) {
                snowflake.style.left = Math.random() * window.innerWidth + "px";
                snowflake.style.top = "0px";
            }
        }, 1000 / 60);
    }
});
