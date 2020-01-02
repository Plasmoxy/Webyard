
/**
 * 
 * Typy kociek = podla obrazka plan.png;
 * Kazda kocka je reprezentovana ako 3x3 array cisel, aby sa mohla otacat podla stredu cez array map (riadky do stlpcov a stlpce do riadkov)
 * 
 */


// ============= pomocne veci =================
function otocPole(pole) { // otoci pole o 90 stupnov, uplne popici kod ukradol som zos stackoverflow xdddddddddd ++ VRATI KOPIU 2D POLA!!!
  // okopiruj 2d pole
  let a = []
  for (let i=0; i<pole.length; i++) {
    a[i] = pole[i].slice() // naslajsuj každe jedno podpole
  }

  var n=a.length;
  for (var i=0; i<n/2; i++) {
      for (var j=i; j<n-i-1; j++) {
          var tmp=a[i][j];
          a[i][j]=a[n-j-1][i];
          a[n-j-1][i]=a[n-i-1][n-j-1];
          a[n-i-1][n-j-1]=a[j][n-i-1];
          a[j][n-i-1]=tmp;
      }
  }
  return a;
}

// ============= konštanty ==================
const velkostBunky = 30
const hodnotyFarieb = { // podla typu bunky
  0: 0, // cierna bunka, prázdno => IGNORUJ PRI KRESLENI!!
  1: "#0000FF", // modra stena
  2: "#00FF00", // zelena = aktivna bunka
  10: "#EEE", // siva = usadena bunka
  20: "#FF00FF", // warowanie znacka
}

const sirkaDosky = 15
const vyskaDosky = 20

// zaciatocne tvary, otacaj ich pomocou otocTvar
const tvaryKociek = [
  [ [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0] ],

  [ [2, 2, 0],
    [2, 2, 0],
    [0, 0, 0] ],
  
  [ [0, 2, 0],
    [2, 2, 2],
    [0, 0, 0] ],
]
// pozor aby kazdy riadok mal vlastnu referenciu, array.fill nestaci a kazdemu y priradi rovnaku referenciu na jeden array
const getZaciatocnaDoska = () => [
  new Array(sirkaDosky).fill(1),
  ...Array.from(Array(vyskaDosky-2), () => (
    Array.from(new Array(sirkaDosky), (x, i) => (
      i==0||i==sirkaDosky-1 ? 1 : 0
    ))
  )),
  new Array(sirkaDosky).fill(1)
]

const getNovyPrazdnyRiadokDosky = () => Array.from(new Array(sirkaDosky), (x, i) => 
  i==0||i==sirkaDosky-1 ? 1 : 0
)

const getNovaKocka = () => ({
  x: Math.floor(sirkaDosky/2)-1,
  y: 2,
  tvar: tvaryKociek[Math.floor(Math.random()*tvaryKociek.length)].slice()
})


// =============== premenné hry ====================
let doska = getZaciatocnaDoska()
let delayCyklu = 1000 // postupne sa zmensuje
let casCyklu = 0
let casHry = 0 // v ms
let kocka = getNovaKocka()
let skore = 0
let speed = false
let song
let hraAktivna = false
let bgimg
let bgimgUp = false
let bgimganim

// =============== funkcie =========================

function novaHra() {
  // reset
  doska = getZaciatocnaDoska()
  delayCyklu = 1000 // postupne sa zmensuje
  casCyklu = 0
  casHry = 0 // v ms
  kocka = getNovaKocka()
  skore = 0
  speed = false

  hraAktivna = true
}

function preload() {
  song = loadSound("davaj.mp3")
  bgimg = loadImage("pudzian.png")
}

function setup() {
  createCanvas(800, 700)
  textAlign(CENTER)

  setInterval(() => {
    if (hraAktivna) delayCyklu *= 0.999
  }, 1000) // kazdu sekundu sa zvysi obtiaznost
}

function predpovedajKolizie(x, y, tvar) {

  // [vlavo, vpravo, dole]
  let kolizie = {
    dolu: false,
    vpravo: false,
    vlavo: false,
    bolaKolizia: false
  }

  for (let [ty, tvarRiadok] of tvar.entries()) {
    for (let [tx, tvarCislo] of tvarRiadok.entries()) {
      // overujeme iba zelene casti tvaru (aktivne/hmotne)
      if ( tvarCislo == 2) {
        // nie je zlava od nej prazdno?
        if (doska[y+ty][x+tx-1] > 0) kolizie.bolaKolizia = kolizie.vlavo = true

        // nie je zprava od nej prazdno ?
        if (doska[y+ty][x+tx+1] > 0) kolizie.bolaKolizia = kolizie.vpravo = true

        // nie je pod bunkou prazdno ?
        if (doska[y+ty+1][x+tx] > 0) kolizie.bolaKolizia = kolizie.dolu = true
      }
    }
  }

  return kolizie
}

function hernyCyklus() {

  // ak je niekde cely plny riadok sivych usadenych buniek (cislo 10), potom daj ten riadok prec, daj skore, insertni hore novy empty riadok (cela doska sa shiftne dolu)
  for (let yDosky = 3; yDosky < vyskaDosky-1; yDosky++) {
    // ak tam je ten riadok
    if (doska[yDosky].reduce((a, i) => a+i) > (sirkaDosky-2)*10) {
      skore += 1
      doska.splice(yDosky, 1)
      doska.splice(4, 0, getNovyPrazdnyRiadokDosky())
      break
    }
  }
  
  // ak je zdola daco
  if (predpovedajKolizie(kocka.x, kocka.y, kocka.tvar).dolu) {

    // ak by bola kolizia v spawnovej casti (y=3), UKONCI HRU
    if (kocka.y <= 3) {
      console.log("ENDGAME xd")
      clearInterval(bgimganim)
      hraAktivna = false
    }

    // zmen tu kocku na usadenu (premietni kocku do dosky)
    for (let [ty, tvarRiadok] of kocka.tvar.entries()) {
      for (let [tx, tvarCislo] of tvarRiadok.entries()) {
        // vsetky hmotne bunky tvaru
        if (tvarCislo == 2) {
          // premietneme do dosky ako cislo 10 (usadene bunky)
          doska[kocka.y+ty][kocka.x+tx] = 10
        }
      }
    }

    // resetuj kocku
    kocka = getNovaKocka()

  } 
  // ak nie, tak moze normalne sa pohnut dolu
  else {
    kocka.y += 1
  }
}


function draw() {
  background(0)

  // pudzian background :)))))))))))))
  tint(255, 70)
  image(bgimg, velkostBunky, velkostBunky - 10 - (bgimgUp ? 10 : 0), (sirkaDosky-1)*velkostBunky, (vyskaDosky-1)*velkostBunky + 10 - (bgimgUp ? 10 : 0))

  // vykresli bunky dosky
  stroke(0)
  for (let [y, riadok] of doska.entries()) {
    for (let [x, cisloFarby] of riadok.entries()) {
      // ignoruj prazdnu bunku
      if (cisloFarby == 0) continue
      // vykresli bunku
      fill(hodnotyFarieb[cisloFarby])
      square(x*velkostBunky, y*velkostBunky, velkostBunky)
    }
  }

  // warovanje
  stroke(255, 0, 0)
  line(velkostBunky, 4*velkostBunky, (sirkaDosky-1)*velkostBunky, 4*velkostBunky)
  stroke(0)


  // vykresli kocku
  for (let [y, riadok] of kocka.tvar.entries()) {
    for (let [x, f] of riadok.entries()) {
      // ignoruj prazdnu bunku
      if (f == 0) continue
      // vykresli bunku
      fill(hodnotyFarieb[f])
      square((kocka.x + x)*velkostBunky, (kocka.y + y)*velkostBunky, velkostBunky)
    }
  }

  if (!hraAktivna) { // konec
    push()
      stroke(0)
      fill(255, 0, 0)
      textSize(24)
      text("Klikni s myšku tu,\nnaj še zapne hra! 😂", sirkaDosky*velkostBunky + 180, 400)
    pop()
  }

  // skore a nazov
  push()
    stroke(0)
    fill(0, 255, 255)
    textSize(24)
    text("!!! DAWAJ NA TETRIS !!!", sirkaDosky*velkostBunky + 180, 40)
    text("Skore: "+ skore, sirkaDosky*velkostBunky + 180, 200)
    text("Obcziaznostc: " + Math.floor(1000-delayCyklu) + "/1000", sirkaDosky*velkostBunky + 180, 250)
  pop()

  text("Eeej ta hento cezke naprogramovac.... Hrajese:\nZrob riadek zos kockoch !!!!!!!!!!!!\nsipka dolu=speed, space=otacaj", 200, vyskaDosky*velkostBunky + 30)
  
  // tickni cyklus ak je jeho cas a aplikuj cas
  if (hraAktivna) {
    casCyklu += deltaTime
    // ak speed tak rychlejsie chod na to
    if (casCyklu > (speed ? delayCyklu/10 : delayCyklu)) {
      casCyklu = 0
      hernyCyklus()
    }
  }
}

function keyPressed() {

  if (key == " ") {
    const novyTvarKocky = otocPole(kocka.tvar)
    const kolizie = predpovedajKolizie(kocka.x, kocka.y, novyTvarKocky)
    // ak nebude kolizia dolu
    if (!kolizie.dolu) {

      // ak nebude dolava alebo do prava kolidovat
      if (!kolizie.vpravo && !kolizie.vlavo) {
        kocka.tvar = novyTvarKocky
      }

      // ak by kolidovala vpravo a mohla ist vlavo, posun dolava (VYUZIVA SA NOVY SIMULOVANY TVAR KOCKY, NIE STARY!!!) a aplikuj novy tvar
      else if (kolizie.vpravo && !kolizie.vlavo) {
        kocka.x -= 1
        kocka.tvar = novyTvarKocky
      }

      // oskusame este na druhu stranu
      else if (kolizie.vlavo && !kolizie.vpravo) {
        kocka.x += 1
        kocka.tvar = novyTvarKocky
      }
    }

  } else if (keyCode == LEFT_ARROW) {

    // ak mozem posunut dolava, posunem sa
    if (!predpovedajKolizie(kocka.x, kocka.y, kocka.tvar).vlavo) {
      kocka.x -= 1
    }

  } else if (keyCode == RIGHT_ARROW) {

    if (!predpovedajKolizie(kocka.x, kocka.y, kocka.tvar).vpravo){
      kocka.x += 1
    }

  } else if (keyCode == DOWN_ARROW) {
    // zrychli cas 10x
    console.log("SPEED UP")
    speed = true
  }
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    console.log("SPEED DOWN")
    speed = false
  }
}

function mousePressed() {
  if (!hraAktivna) {
    song.stop()
    song.loop()
    novaHra()
    
    // anim
    bgimganim = setInterval(() => {
      bgimgUp = !bgimgUp
    }, 375)
  }
}

function kys() { song.stop(); song=null }