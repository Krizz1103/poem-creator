function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "54734t1680o470cbbe3f700fdd2fa18e";
  let prompt = `creat a very funny poem about ${instructionInput.value}`;
  let context =
    "you are a very funny and inteligent poem artist and like to write short 4-6 line poems";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.style.display = "block";
  poemElement.innerHTML = `<div class="blink">Loading...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
