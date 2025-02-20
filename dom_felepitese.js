document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");
    const navContainer = document.getElementById("nav-container");
    const footerContainer = document.getElementById("footer-container");

    // Függvény egy külső HTML betöltésére egy adott elembe
    function loadHTML(url, targetElement) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                targetElement.innerHTML = html;
                attachNavListeners(); // Újra csatoljuk az eseményeket a dinamikusan betöltött elemekhez
                initializeKosar(); // Hozzáadjuk a kosár eseménykezelőt
            })
            .catch(error => console.error("Hiba a betöltés során:", error));
    }

    // Kosár események kezelése
    function initializeKosar() {
        const gombKosarba = document.querySelector('.gomb_kosarba');
        const kosarDarabSzam = document.querySelector('#kosar_icon_darab_szam');

        if (gombKosarba && kosarDarabSzam) {
            gombKosarba.addEventListener('click', () => {
                kosarDarabSzam.style.display = 'inline-block';
            });
        }
    }

    // Navigációs események kezelése
    function attachNavListeners() {
        document.querySelectorAll("nav .nav-link").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const page = this.textContent.trim().toLowerCase().replace(" ", "_");
                loadHTML(`${page}.html`, contentDiv);
            });
        });

        // Kosár ikon kattintás figyelése
        const kosarLink = document.querySelector("#kosar_icon_div a");
        if (kosarLink) {
            kosarLink.addEventListener("click", function (event) {
                event.preventDefault();
                loadHTML("kosar.html", contentDiv);
            });
        }
    }

    // Alapértelmezett főoldal betöltése
    loadHTML("fooldal.html", contentDiv);

    // Navigáció betöltése
    loadHTML("nav.html", navContainer);

    // Footer betöltése
    loadHTML("footer.html", footerContainer);
});







  





  