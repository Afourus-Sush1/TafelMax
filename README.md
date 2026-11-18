# TafelMax — statični sajt

Jednostranični statični sajt za TafelMax (metalne nogare i nameštaj po meri, Šabac).

- `index.html` — ceo sajt (HTML, CSS i JS u jednom fajlu, bez build koraka).
- Boje i fontovi su iz TafelMax vizuelnog identiteta: Ugalj `#1A1A18`, Lan `#EFEBE4`, Hrast `#A87F56`, Čelik `#63686B`, Varnica `#D9652B`; Archivo za naslove, Inter za tekst.
- Crteži proizvoda se generišu u SVG-u iz podataka (`PRODUCTS` i `GALLERY` u skripti), sa merama iz proizvodnih crteža.

## Izmene

- Novi proizvod: dodajte objekat u niz `PRODUCTS` (mere u mm: `h` visina, `w` širina, `l` dužina za Matrix, `p`×`pd` profil).
- Galerija: niz `GALLERY`.
- Kontakt podaci su u sekciji `#kontakt`.

## Objavljivanje

Fajl se može postaviti na bilo koji statični hosting (GitHub Pages, Netlify, Cloudflare Pages). Za GitHub Pages: Settings → Pages → Deploy from branch.
