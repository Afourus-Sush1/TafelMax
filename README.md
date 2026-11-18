# TafelMax — statični sajt

Statični sajt za TafelMax (metalne nogare i nameštaj po meri, Šabac).

- `index.html` — početna: uvod, kategorije proizvoda, galerija, naručivanje, saveti, kontakt.
- `proizvodi.html` — katalog proizvoda po kategorijama, sa detaljima (dimenzije, izvedba, boja).
  Direktni linkovi: `proizvodi.html#trpezarija`, `#klub`, `#matrix`, `#namestaj` ili ID proizvoda (npr. `#x`, `#matrix-140`).
- `assets/style.css` — zajednički stilovi, `assets/app.js` — podaci o proizvodima i logika obe strane. Nema build koraka.
- Boje i fontovi su iz TafelMax vizuelnog identiteta: Ugalj `#1A1A18`, Lan `#EFEBE4`, Hrast `#A87F56`, Čelik `#63686B`, Varnica `#D9652B`; Archivo za naslove, Inter za tekst.
- Crteži proizvoda se generišu u SVG-u iz podataka (`PRODUCTS` i `GALLERY` u skripti), sa merama iz proizvodnih crteža.

## Izmene

- Novi proizvod: dodajte objekat u niz `PRODUCTS` u `assets/app.js` (mere u mm: `h` visina, `w` širina, `l` dužina za Matrix, `p`×`pd` profil).
- Galerija: niz `GALLERY`.
- Kontakt podaci su u sekciji `#kontakt`.

## Objavljivanje

Fajl se može postaviti na bilo koji statični hosting (GitHub Pages, Netlify, Cloudflare Pages). Za GitHub Pages: Settings → Pages → Deploy from branch.
