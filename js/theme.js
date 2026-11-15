
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    function updateThemeButton() {

        const isLight = document.body.classList.contains("light-theme");

        themeToggle.textContent = isLight ? "☾" : "☀";

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Ativar modo escuro" : "Ativar modo claro"
        );
    }

    updateThemeButton();

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        updateThemeButton();

    });

}
