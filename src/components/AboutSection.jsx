import React from "react";

const AboutSection = () => {
  return (
    <div className="about-page">
      <h3>Mitä miksi?</h3>
      MeemiPankki tai MemeBank on sivu jossa voi katsella muiden lataamia
      meemejä, ladata niitä, tallentaa niitä ja ennen kaikkea hakea niitä.
      <img src="https://storage.googleapis.com/oden_bucket/meme-library2.png" />
      Kuten Edellisestä meemistä käy ilmi, meemien etsiminen on aina ollut
      (ainakin itselleni) jollain tavoin haastavaa ja aikaavievää. MeemiPankki
      hyödyntää Google Cloudin Vision APIa jonka avulla jokaisesta ladatusta
      meemistä skannataan talteen siinä oleva teksti ja sitä hyödynnetään
      meemien indeksoinnissa. Tällä tavoin meemien etsiminen onnistuu
      hakupalkissa ihan vain siinä olevan sisällön perusteella.
    </div>
  );
};

export default AboutSection;
