function podaciForme(){
    const ocena= document.getElementById("ocena").value;
    const brojindeksa= document.getElementById("brojindeksa").value;
    const rednibroj= document.getElementById("rednibroj").value;
    const datum= document.getElementById("datum").value;
    const rok= document.querySelector('input[name=rok]:checked').value;
    const polozio= document.getElementById("polozio").checked;

    function proveriIndeks(brojindeksa){
        const forma=/^\d{4}\/\d{4}$/;
        const proveraForme= forma.test(brojindeksa);
        const godina=Number(brojindeksa.substr(0,4));
        const broj=Number(brojindeksa.substr(5));
        if(proveraForme && godina>=2000 && broj>=1 && broj<=1000){
            return true;
        }else return false;
    }
    const paragrafi=document.querySelectorAll(".poruka-greske");
    paragrafi.forEach((paragraf) => {
        if(paragraf){
            paragraf.remove();
        }
    });

    if(ocena<5 || ocena>10){
        document.getElementById("ocena").parentElement.insertAdjacentHTML(
            "afterend", 
            <p class="poruka-greske">Ocena mora biti izmedju 5 i 10</p>
        );
    }
    if(!proveriIndeks(brojindeksa)){
        document.getElementById("brojindeksa").parentElement.insertAdjacentHTML(
            "afterend",
            <p class="poruka-greske">Indeks mora biti u formatu xxxx/yyyy.<br>Godina mora biti od 2000, indeks od 0001-1000</br></p>
        );
    }
    if(ocena>=6 && ocena <=10 && !polozio){
        document.getElementById("polozio").parentElement.insertAdjacentHTML(
            "afterend",
            <p class="poruka-greske">Polje mora biti oznaceno, posto je ocena u opsegu 6-0</p>
        );
    }
    if(ocena==5 && polozio){
        document.getElementById("polozio").parentElement.insertAdjacentHTML(
            "afterend",
            <p class="poruka-greske">Polje mora biti oznaceno, posto je ocena 5</p>
        );
    }
    if(ocena >=5 && ocena<=10 && proveriIndeks(brojindeksa) 
    && ((ocena==5 && !polozio) || (ocena>=6 && ocena<=10 && polozio))){
        let ispit={
            ocena:ocena,
            datumIzlaska:datum,
            brojIndeksa:brojindeksa,
            rok:rok,
            redniBrojIzlaska:rednibroj,
            polozen:polozio,
        };
        return JSON.stringify(ispit);
    }
}
function posaljiFunkcija(e){
    e.preventDefault();
    const podaci=podaciForme();
    if(podaci==undefined){
        return;
    }
    const tekst= document.getElementById("podaciforme");
    tekst.innerText=podaci;
    const forma=document.getElementById("forma");
    forma.reset();
}
const posalji=document.getElementById("btn-posalji");
posalji.addEventListener("click", posaljiFunkcija);













