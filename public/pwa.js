let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installPopup = document.getElementById("install-popup")
  const btnAdd = document.getElementById("install-button");
  installPopup.style.display = "flex";
  btnAdd.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User Accepted the A2HS prompt");
      }
      deferredPrompt = null;
    });
    installPopup.style.display = "none"
  });
});
