const backButton = document.getElementById("backbutton");


// Back button to last page for screens smaller than 1024px

backButton.addEventListener("click", () => {
    history.back();
});