let h1 = document.querySelector("h1");
let h1Original = h1.dataset.text;

let letters = 'abcdefghijklmnopqrstuvwxyz';

h1.addEventListener("mouseover", () => {
  let iterations = 0;
  const interval = setInterval(() => {
    // split string to array:
    let h1Array = h1.innerText.split("");

    let h1Random = h1Array.map((value, index) => {
      if (value === ".") {
        return ".";
      };

      if (iterations > index) {
        return h1Original[index];
      };

      let randInt = Math.floor(Math.random() * 25);
      return letters[randInt];
    });

    h1.innerText = h1Random.join("");

    iterations += 1 / 5;

    if (iterations >= h1Original.length) {
      clearInterval(interval)
    }
  }, 30);
})