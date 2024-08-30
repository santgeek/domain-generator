/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function domainGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big", "only"];
    let noun = ["jogger", "racoon", "madhouse"];
    let tld = [".com", ".net", ".org"];

    // inicilizar array que contenga el string final
    let domain = [];

    // interar los elementos de los arrays

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < tld.length; l++) {
            domain.push(`${pronoun[i]}${adj[j]}${noun[k]}${tld[l]}`);
          }
        }
      }
    }
    // console.log (domain)
    // console.log("Hello Rigo from the console!");
    return domain;
  }

  function printDomain() {
    document.getElementById("domain").innerHTML = domainGenerator().join(
      "<br>"
    );
  }

  printDomain();
};
