 const button = document.querySelector("button");

button.addEventListener("click", function () {

    document.querySelector(".container").innerHTML = `
        <div class="heart">❤️</div>

        <h1>Just a few things...</h1>

        <p class="subtitle">
            I wanted to you to know you are a special gift in my life you are loved. ✨
        </p>

        <div class="cards">

            <div class="card">
                <div class="icon">😊</div>
                <h2>Your Smile</h2>
                <p>
                    Your smiles is what makes me feel love is beautiful.
                </p>
            </div>

            <div class="card">
                <div class="icon">✨</div>
                <h2>Your kindest heart</h2>
                <p>
                    Where will i find like your heart.You still helps me become stronger,
                     I can't Thank you enough for that.You'll always be in my heart.

                </p>
            </div>

            <div class="card">
                <div class="icon">❤️</div>
                <h2>You</h2>
                <p>
                    Simply being yourself is more than enough. Ngei nung ku bamnyei Lumla.
                </p>
            </div>

        </div>

        <button id="nextButton">
            One More Thing ❤️
        </button>
    `;

    document
        .getElementById("nextButton")
        .addEventListener("click", showFinalPage);

});

function showFinalPage() {

    document.querySelector(".container").innerHTML = `

        <div class="final-page">

            <div class="heart big">❤️</div>
            <img src="lumla.jpeg.jpeg" class="lumla-photo">
            <h1>My dear Lumla</h1>

            <p class="final-text">
                I just wanted to make a lil something that belongs to you.
                Nothing too much,Nothing fancy.

            </p>

            <button id="surpriseButton">
                Open the Surprise 💌
            </button>

            <div id="message" class="hidden-message">

                <h2>❤️</h2>

                <p>
                    Oh lum oh how much you mean to me.
                </p>

                <p>
                    Oh lum oh how much i'm being selfish.
                </p>

                <p>
                    Oh lum oh how much i'm afraid of losing you cuz you;re the pearl to me.
                </p>
                <p>
                    Oh lum oh how much i belieeve you won't bring perish.
                </p>    

                <h3>— With a little smile 😊</h3>

            </div>

        </div>
    `;

    document
        .getElementById("surpriseButton")
        .addEventListener("click", function () {

            document
                .getElementById("message")
                .classList.add("show");

            this.style.display = "none";

        });
        startHearts();
}
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

 let heartInterval;

function startHearts() {
    heartInterval = setInterval(createHeart, 700);
}