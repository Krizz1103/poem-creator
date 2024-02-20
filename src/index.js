function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Here is the poem",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
