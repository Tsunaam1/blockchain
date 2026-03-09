# Blockchain

Jedná se o jednoduchý JS skript, který pomocí uživateli zadaných dat vytváří jednotlivé bloky, které se poté dají do Blockchainu.<br>
Vše je před dodání do Blockchainu zahashováno pomocí sha256.

## Dependencies

Pro instalování závislostí stačí jen zadat toto do terminálu:

```
npm install
```

## Spuštění

Pro spuštění serveru:

```
npm start
```

## REST API

Pro API je zde využit express. Defaultní adresa po spuštění serveru je http://localhost:3000/api/blockchain.<br>
Na této adrese se vyskytuje JSON s vypsaným Blockchainem.<br><br>
Pro vypsání vybraného Blocku můžete použít http://localhost:3000/api/blockchain/x (x nahradíte číslem indexu).<br><br>
Pro vypnutí serveru můžete také využít http://localhost:3000/quit. Vypnutí serveru bude chvíli trvat.<br><br><br>
Po spuštění serveru je ihned přidán nový blok. Při přidání bloku se do konzole vypíše, že byl blok úspěšně přidán do Blockchainu. Tento blok se také ukáže <a href="http://localhost:3000/api/blockchain">ve výpisu JSONu.</a>

## Krátký lore

Když jsem uvažoval nad jménem Blockchainu a coinu, přemýšlel jsem, jaký by mohl mít příběh. Zde Vám ho napíšu.<br><br>
&nbsp;Je první polovina 80. let a v Düsseldorfu se milovníci techniky Ralf a Florian stávají skoro milionáři. Ralf a Florian mají vlastní továrnu (Elektro Müller), kde si vyrábějí syntezátory. V továrně však nepracují sami a pracuje tam s nimi ještě Wolfgang a Karl.&nbsp;Poslední dobou však jsou Wolfgang a Karl nespolehliví, a tak jim Ralf s Karlem zakážou pohybovat s penězi firmy. Wolfgang s Karlem si to vezmou osobně a jsou na ně naštvaní. Ralf si ale počne tak, že si vytvoří vlastní Blockchain, kde se bude zapisovat, kdo co kam poslal.&nbsp;Ralf s Florianem intenzivně pracovali, až si vytvořili vlastní Blockchain. <b>Kling Klang Chain</b>.

