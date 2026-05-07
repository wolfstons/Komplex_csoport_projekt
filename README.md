# Weboldal dokumentáció – Digitális és társasjátékok
1. Projekt célja
A projekt célja egy olyan egyszerű, mégis jól bővíthető weboldal elkészítése, amely különböző típusú játékokat mutat be.
A weboldal két fő kategóriára bontja a tartalmat:

Digitális játékok
Társasjátékok

A megvalósítás során fontos szempont volt, hogy az oldal később továbbfejleszthető legyen, például adatbázisos tárolás irányába.

2. Weboldal felépítése
A weboldal két külön HTML oldalból áll, amelyek egy közös navigációs menüből érhetők el:

Digitális játékok oldala
Társasjátékok oldala

Mindkét oldal azonos szerkezetet és megjelenést használ, ezzel biztosítva az egységes felhasználói élményt.

3. Navigáció
A weboldalon egy egyszerű navigációs menü található, amely lehetővé teszi az oldalak közötti váltást:

Digitális játékok
Társasjátékok

A navigáció minden oldalon elérhető, így a felhasználó könnyen mozoghat a tartalmak között.

4. Tartalom megjelenítése (kártyák)
Mindkét oldalon négy darab kártya jelenik meg egymás mellett.
Egy kártya az alábbi elemeket tartalmazza:

Egy kép a játékról
Egy rövid leírás
Egy gomb, amely megjeleníti a bővebb leírást

A kártyák célja, hogy átlátható és vizuálisan rendezett módon mutassák be a játékokat.

5. Stílus (CSS)
A weboldal megjelenését egy külön CSS fájl szabályozza.
A CSS feladata:

A kártyák elrendezése (négy elem egymás mellett)
Színek, betűtípusok és margók beállítása
Gombok megjelenésének formázása
Egységes kinézet biztosítása mindkét oldalon

A stílus elkülönítése a HTML-től segíti a tiszta és átlátható projektstruktúrát.

6. Dinamikus működés (JavaScript)
A JavaScript feladata a weboldal dinamikus működésének biztosítása.
A JavaScript segítségével:

A kártyák automatikusan jelennek meg az adatok alapján
A „Bővebb leírás” gomb működése megvalósul
Az adatok nem közvetlenül a HTML-ben szerepelnek

Ez a megközelítés megkönnyíti a karbantartást és a továbbfejlesztést.

7. Adattárolás (JSON)
A játékok adatai JSON fájlban vannak eltárolva.
A JSON fájl tartalmazza például:

A játék nevét
A kép elérési útját
A rövid leírást
A bővebb leírást
A játék típusát (digitális vagy társas)

Ez a megoldás azért előnyös, mert:

Könnyen bővíthető új játékokkal
Később egyszerűen lecserélhető adatbázisra
Elkülöníti az adatokat a megjelenítéstől


8. Továbbfejlesztési lehetőségek
A projekt kialakítása lehetőséget ad a későbbi bővítésre, például:

Adatbázis használata (pl. MySQL)
Kereső funkció a játékok között
Szűrés játék típus vagy népszerűség alapján
Admin felület új játékok hozzáadásához
Reszponzív megjelenés mobil eszközökre


9. Összegzés
A weboldal egy jól strukturált, könnyen érthető alapot biztosít egy játékbemutató rendszerhez.
A HTML, CSS, JavaScript és JSON elkülönített használata segíti az átláthatóságot és a továbbfejlesztést, így a projekt alkalmas tanulási és későbbi fejlesztési célokra is.
