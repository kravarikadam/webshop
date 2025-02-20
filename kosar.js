document.addEventListener('DOMContentLoaded', () => {
    // Kiválasztjuk a gombot és a kosár ikon darab számot
    const gombKosarba = document.querySelector('.gomb_kosarba');
    const kosarDarabSzam = document.querySelector('#kosar_icon_darab_szam');

    // Ellenőrizzük, hogy léteznek-e a megfelelő elemek
    if (gombKosarba && kosarDarabSzam) {
        // Hozzáadunk egy kattintási eseménykezelőt a gombhoz
        gombKosarba.addEventListener('click', () => {
            // Megváltoztatjuk a kosár darab számának display stílusát
            kosarDarabSzam.style.display = 'inline-block';
        });
    }
});

