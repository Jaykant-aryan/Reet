(() => {
  "use strict";

  const stages = {
    welcome: document.querySelector("#welcomeStage"),
    quote: document.querySelector("#quoteStage"),
    reveal: document.querySelector("#revealStage"),
    flowers: document.querySelector("#flowersStage")
  };

  const buttons = {
    welcome: document.querySelector("#welcomeButton"),
    quote: document.querySelector("#quoteButton"),
    flower: document.querySelector("#flowerButton"),
    restart: document.querySelector("#restartButton")
  };

  function showStage(name) {
    Object.entries(stages).forEach(([key, section]) => {
      section.hidden = key !== name;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function replayBouquet() {
    const bouquet = document.querySelector("#virtualBouquet");
    if (!bouquet) return;

    const animatedElements = bouquet.querySelectorAll(
      ".bouquet-flower, .bouquet-stem, .bouquet-leaf, .baby-breath circle"
    );

    [bouquet, ...animatedElements].forEach((element) => {
      element.style.animation = "none";
      void element.getBoundingClientRect();
      element.style.animation = "";
    });
  }

  buttons.welcome?.addEventListener("click", () => showStage("quote"));
  buttons.quote?.addEventListener("click", () => showStage("reveal"));
  buttons.flower?.addEventListener("click", () => {
    showStage("flowers");
    replayBouquet();
  });
  buttons.restart?.addEventListener("click", () => showStage("welcome"));

  console.info("Petals in Code ready.");
})();
