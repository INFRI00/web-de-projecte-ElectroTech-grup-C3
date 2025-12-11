const topButton = document.getElementById("back-to-top");

    // Mostrar botón cuando se baja
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }
    });

    // Subir suave
    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });