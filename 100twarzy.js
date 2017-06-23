alert("działa!");

var uzyteKotki = [];
var stan = 1;
var pierwszyKotek;
var wynik = 0; 


function zbudujPlansze(wysokosc, szerokosc) {

	var domTable = document.querySelector("#plansza");

	var domTbody = document.createElement("tbody");

	var x, y

	for (y=0; y<wysokosc; y=y+1) {
		var domTR = document.createElement("tr");
		domTbody.appendChild(domTR);

		for (x=0; x<szerokosc; x++) {
			var domTD = document.createElement("td");
			var domIMG = document.createElement("img");
			var IMGnr = Math.floor((Math.random()*15)+1);
			
			//domIMG.src = "martaoto/" + IMGnr + ".jpg";
			domTD.addEventListener("click", function(ev) {
				wynik = wynik + 1; 
				document.querySelector("#wynik").innerHTML = wynik;
					if (stan == 3) {
						return;
					}
				var kliknietyKoteczek = this.children[0];
				if (uzyteKotki.indexOf(kliknietyKoteczek.src)>-1) {
					return;
				}
				kliknietyKoteczek.style.visibility = "visible";

			if (stan == 1) {
				pierwszyKotek = kliknietyKoteczek;
				stan = 2;
			} else {
				stan = 3; 
				if (pierwszyKotek.src == kliknietyKoteczek.src) {
					uzyteKotki.push(pierwszyKotek.src);
					stan = 1
				} else {
					setTimeout(function(){
						pierwszyKotek.style.visibility = "hidden";
						kliknietyKoteczek.style.visibility = "hidden";
				}, 1000);
				}
				stan = 1;
				}
			if (uzyteKotki.length == 4*4/2) {
				alert("WYGRALES! Wynik:" + wynik);
			}
		});

			domTD.id = 'pos' +x+"x"+y;
			domTD.appendChild(domIMG);
			domTR.appendChild(domTD);
		}
			
	}
	domTable.appendChild(domTbody);
}

function losujKotki () {
	var uzyteKotki = [];
	var IMGnr;

	


	var x,y;
	do {
		//losuj kotka
		do {
		IMGnr = Math.floor((Math.random()*15)+1);
		} while (uzyteKotki.indexOf(IMGnr) > -1);
		//postaw kotka na planszy po raz 1
		 do {
		 x = Math.floor((Math.random()*4));
		 y = Math.floor((Math.random()*4));
		// "td#pos5x6 img"
		domIMG = document.querySelector("td#pos" + x + "x" + y + " img");
		} while (domIMG.src != "");
		domIMG.src = "martaoto/" + IMGnr + ".jpg";

		//postaw kotka na planszy po raz 2
		 do {
		 x = Math.floor((Math.random()*4));
		 y = Math.floor((Math.random()*4));
		// "td#pos5x6 img"
		domIMG = document.querySelector("td#pos" + x + "x" + y + " img");
		} while (domIMG.src != "");
		domIMG.src = "martaoto/" + IMGnr + ".jpg";
		//zużyj kotka
		uzyteKotki.push(IMGnr);
	} while (uzyteKotki.length < 4*4/2);
	
	console.log(domIMG);
	
	}

zbudujPlansze (4,4);
losujKotki();