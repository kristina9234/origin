function popuniFormu(){
    function proveriIndeks(brojindeksa){
        const forma=/^\d{4}\/\d{4}$/;
        const proveraForme=forma.test(brojindeksa);
        const godina=Number(brojindeksa.substr(0,4));
        const broj=Number(brojindeksa.substr(5));
        if(proveraForme && godina>=2000 && broj>=1 && broj<=1000){
            return true;
        }else return false;
    }

      const paragrafi=document.querySelectorAll(".poruka-greske");
      paragrafi.forEach((paragraf)=>{
         if(paragraf){
                paragraf.remove();
          }
      });
        
    const str= document.getElementById("podaciforme").value;
    const objekat= JSON.parse(str);
    if(objekat.ocena!=null && objekat.ocena>=5 && objekat.ocena<=10){
        document.getElementById("podaciforme").insertAdjacentHTML(
            "afterend",
            <p class ="poruka-greske">Ocena nije pravilno uneta</p>
        );
    }
    if(objekat.brojindeksa!=null && proveriIndeks(objekat.brojindeksa)){
        document.getElementById("brojindeksa").value=objekat.brojindeksa;
    }else{
        document.getElementById("podaciforme").insertAdjacentHTML(
            "afterend",
            <p class ="poruka-greske">Broj indeksa nije pravilno unet</p>
        );
    }
    if(objekat.redniBrojIzlaska!=null && objekat.redniBrojIzlaska>=1 && objekat.redniBrojIzlaska<=5){
        document.getElementById("rednibroj").value=objekat.redniBrojIzlaska;
    }else{
        document.getElementById("podaciforme").insertAdjacentHTML(
            "afterend",
            <p class="porula-greske">Redni broj nije ispravno unet</p>
        );
    }
    if(objekat.datumIzlaska!=null){
        document.getElementById("datum").value=objekat.datumIzlaska;
    }else{
        document.getElementById("podaciforme").insertAdjacentHTML(
            "afterend",
            <p class="porula-greske">Datum izlaska nije ispravno unet</p>
        );
    }
    if(objekat.rok!=null && (objekat.rok=="januar"|| objekat.rok=="april" || objekat.rok=="jun" || objekat.rok=="septembar")){
        document.getElementById(objekat.rok).checked=true;
    }else{
        document.getElementById("podaciforme").insertAdjacentHTML(
            "afterend",
            <p class="porula-greske">Rok nije ispravno unet</p>
        );
    }
    if(objekat.polozen!=null){
        document.getElementById("polozio").checked=objekat.polozen;
    }else{
        document.getElementById("podaciforme").insertAdjacentHTML(
            "afterend",
            <p class="porula-greske">Polje polozio/la nije ispravno uneto</p>
        );
    }
}
function ucitajFunkcija(e){
    e.preventDefault();
    popuniFormu();
}
const ucitaj = document.getElementById("btn-ucitaj");
ucitaj.addEventListener("click", ucitakjFunkcija);







