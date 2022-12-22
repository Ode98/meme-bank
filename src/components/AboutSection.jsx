import React from "react";

const AboutSection = () => {
  return (
    <div className="about-page">
      <img src="https://storage.googleapis.com/oden_bucket/meme-library2.png" />
      <p>
        MeemiPankki tai MemeBank on sivu jossa voi selata, ladata, tallentaa ja
        ennen kaikkea hakea meemejä. Kuten edellisestä meemistä käy ilmi,
        meemien etsiminen on aina ollut (ainakin itselleni) jollain tavoin
        haastava ja aikaa vievää prosessi. MeemiPankki hyödyntää Google Cloudin
        Vision APIa, jonka avulla jokaisesta ladatusta meemistä skannataan
        talteen siinä oleva teksti ja sitä hyödynnetään meemien indeksoinnissa.
        Tällä tavoin meemien etsiminen onnistuu hakupalkissa ihan vain siinä
        olevan sisällön perusteella. Kokeile hakea esim. "miesflunssa" tai "no
        stupid questions". Kuka tahansa pystyy selaamaan ja hakemaan meemejä,
        mutta vain käyttäjät voivat ladata meemejä pankkiin.
      </p>
    </div>
  );
};

export default AboutSection;
