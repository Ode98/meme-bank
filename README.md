# Harjoitustyö MemeBank

## Sijainti

https://memebank.fly.dev/

## Käyttötarkoitus

MeemiPankki tai MemeBank on sivu jossa voi selata, ladata, tallentaa ja ennen kaikkea hakea meemejä. Tietyn meemien etsiminen on aina ollut (ainakin itselleni) jollain tavoin haastava ja aikaa vievää prosessi. MeemiPankki hyödyntää Google Cloudin Vision APIa, jonka avulla jokaisesta ladatusta meemistä skannataan talteen siinä oleva teksti ja sitä hyödynnetään meemien indeksoinnissa. Tällä tavoin meemien etsiminen onnistuu hakupalkissa ihan vain siinä olevan sisällön perusteella.

## Mahdollisia lisäyksiä tulevaisuudessa

- Meemien automaattinen croppaus. Meemejä selatessa on saattanut huomata, että joissakin tapauksissa ladatun meemin ympärillä on suuri valkoinen marginaali, joka estää kuvan näyttämisen isompana. Tämän voisi korjata croppaamalla kuva automaattisesti serverillä ennen sen postaamista. Tämäkin saattaisi lisätä jonkun verran lataamiseen käytettävää aikaa.
- Tykkäys ja kommentointi. Tykkäystoiminto on periaatteessa jo koodattu sivulle, mutta poistin sen käytöstä, koska se ei mielestäni sopinut sovelluksen ulkonäköön eikä käyttäjäkokemukseen.
- Oma meemisivu. Olisi hyvä jos käyttäjät pystyisivät selaamaan vain itse lisäämiään meemejä.
- Gamifikaatio. Aktiivisia meemien lataajia voisi palkita jotenkin. Esim sovelluksessa voisi olla ns. leaderboard, josta näkyy top 5 aktiivisinta meemien postaajaa.
- Duplikaattikäsittely. Tällä hetkellä meemipankkiin voi ladata saman meemin uudelleen. Olisi hyvä jos olisi jokin systeemi joka varmistaa ettei postattavaa meemiä löydy jo järjestelmästä. Cloud visionin ansiosta se olisi melko helppo toteuttaa, mutta se lisäisi jonkun verran meemien lataukseen käytettävää aikaa.
- Omien tagien lisääminen. Silloin tällöin on myös meemejä joissa ei ole ollenkaan tekstiä. Tällaista meemiä ei luonnollisesti voi hakea ollenkaan meemipankissa. Yksi ratkaisu on, että käyttäjä voisi itse lisätä tageja meemille, jotta se on helpompi löytää. Tässä on vain ongelmana se, että käyttäjät voivat lisätä periaattessa myös kuvaan liittymättöämiä tägejä. Tätä voisi yrittää ratkaista jonkinlaisella hakuäänestysjärjestelmällä, esim. jos käyttäjä hakee jotain meemiä ja huomaa että hakukone antaa hakusanaan täysin liittymättömän meemin, voi painaa painikkeesta joka antaa palautteen meemin ja hakusanan sopimattomuudesta ja se vaikuttaisi tulevaisuuden hakutuloksiin.

## Työaikakirjaukset

| Päivä      | Tunnit | Mitä tein                                                                                                                                                                                                                      |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 06.12.2022 | 4      | Projektin aloittaminen. prettier configurointi, ensimmäiset komponentit, google cloud storagen configurointi                                                                                                                   |
| 07.12.2022 | 8      | Backendin perusominaisuudet mukaanlukien suojatun yhteyden muodostaminen google cloud storagen kanssa, MongoDb configuraatio,                                                                                                  |
| 08.12.2022 | 6      | Meemien postaus frontendista kuntoon. Postauksen päivittyminen frontendiin. Meemin latausfunktionaalisuuden lisääminen.                                                                                                        |
| 09.12.2022 | 7      | Google Cloud Vision AI -Apin lisääminen backendiin. Ladattujen kuvien sisältämän tekstin scrapeeminen kuvan tageiksi. Hakuominaisuus frontendiin, MemeFeed komponentti                                                         |
| 10.12.2022 | 3      | Bugien korjaamista hakuiominaisuudesta, hakualgoritmin suunnittelua ja testailua                                                                                                                                               |
| 12.12.2022 | 7      | Hakuominaisuuden viimeistely, Mahdollisuus usean tiedoston postaamiseen samaan aikaan, ns. lazyloadin lisääminen kuville. Muu optimisaatio                                                                                     |
| 13.12.2022 | 5      | Lisätty käyttäjän luonti ja kirjautumistoiminnallisuudet. Selvitelty kuvien jatkuvaan uudelleenlataamiseen liittyvää ongelmaa, korjailtu bugeja.                                                                               |
| 14.12.2022 | 6      | Bugien selvittelyä ja korjaamista, lisätty latausanimaatio, Nyt vain käyttäjä pystyy postaaman meemin. Muutettu latauslinkki suoraan kuvaan.                                                                                   |
| 15.12.2022 | 7      | Tykkäys ja epätykkäystoiminnon lisääminen meemeihin. Sovelluksen tyylittämistä css:llä, refaktorointia.                                                                                                                        |
| 16.12.2022 | 6      | Lisätty Hover-animaatiot tykkäysnapeille. Käyttäjät pystyvät nyt tykkäämään postauksesta vain kerran. Tieto tykätyistä memeistä tallentuu mongoon.                                                                             |
| 19.12.2022 | 5      | Selvitetty proxy-bugia, lisätty proxy-middleware. Poistettu dislike-ominaisuus ja otettu tykkäysominaisuus pois käytöstä (ainakin väliaikaisesti). Luotu pohja menupalkille.                                                   |
| 20.12.2022 | 7      | Lisätty valikkopalkin ominaisuudet ja muotoiltu, muotoiltu formit avautumaan ja sulkeutumaan painalluksesta. Lisätty notifikaatiokomponentti.                                                                                  |
| 21.12.2022 | 6      | Lisätty About-sivu, suoritettu sovelluksen testausta, korjattu bugi joka esti tekstittömän kuvan lisäämisen. Refaktoroitu koodia. Muokattu notifikaatiota.                                                                     |
| 22.12.2022 | 7      | Korjailtu formien tyylejä, korjattu notification timer. Lisätty error handlingiä käyttäjäluontiin ja kirjautumiseen. Lisätty notifikaatioviestejä. Tehty hakualgoritmi kertaalleen vielä uusiksi, kirjoitettu readme puhtaaksi |
| 23.12.2022 | 6      | Refakoroitu ja siivottu backendin koodi. Deployattu sovellus fly.io kautta nettiin.                                                                                                                                            |
| Yhteensä   | 90     |
| Tavoite    | 87.5   |
| Suoritettu | 100%   |
