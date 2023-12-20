document.addEventListener("DOMContentLoaded", function () {
    const numberOfSnowflakes = 50;
    const snowflakes = [];

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }

    const heartCheckbox = document.querySelector('.heart__checkbox');
    let isHeartMode = false;

    heartCheckbox.addEventListener('click', function () {
        if (!isHeartMode) {
            // Disable the checkbox to prevent additional clicks during the animation
            heartCheckbox.disabled = true;

            isHeartMode = true;

            // Replace snowflakes with pink heart icons
            replaceWithHearts();

            // Set a timer to switch back to snowflakes after 10 seconds
            setTimeout(() => {
                isHeartMode = false;

                // Enable the checkbox after the animation is complete
                replaceWithSnowflakes();
            }, 10000);
        }
    });

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "&#10052;";
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);

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

    function replaceWithHearts() {
        snowflakes.forEach(snowflake => {
            snowflake.innerHTML = "&#x1F497;"; // Pink heart icon
            snowflake.style.color = "#FF69B4"; // Pink color
        });
    }

    function replaceWithSnowflakes() {
        snowflakes.forEach(snowflake => {
            snowflake.innerHTML = "&#10052;"; // Snowflake icon
            snowflake.style.color = "#ffffff"; // Reset color to white
        });
    }
});
