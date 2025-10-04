let lx = [0,0,0,0,0,0,0,0,0,0]
let ly = [0,0,0,0,0,0,0,0,0,0]
let bass = null
let kick = null
let snare = null
let hh = null
let walk = 7
let fall = 1
let pix 
let totalt = 0;
let place =0;
let bassnote = []; 
let kicknote
let snarenote
let hhnote

let nylinje = 0;
let antallinjer = 3;

function preload(){
 
   bass = loadImage("bass.png")
   kick = loadImage("dkick.png")
   hh = loadImage("dhh.png")
   snare = loadImage("dsnare.png")
  
  soundFormats('mp3', 'ogg');
  bassnote [1] = loadSound('bass_e.mp3');
  kicknote = loadSound('kick.mp3');
  hhnote = loadSound('hh.mp3');
  snarenote = loadSound('snare.mp3');

}

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  frameRate(4)
  
//  bbuff.loadPixels()
}

function linjer() {
   background(255);
    strokeWeight (3)
    lx [0] = random(400)
    ly [0] = random(40)
  
  for (j=1; j<antallinjer/2; j++) {
  i=j*2-1;
    lx [i] = random(400)
    ly [i] = 400-random(40)
    line (lx[i-1], ly[i-1], lx[i], ly[i])
    lx [i+1] = random(400)
    ly [i+1] = random(40)
    line (lx[i], ly[i], lx[i+1], ly[i+1])
  }
  i=i+2;
    lx [i] = random(400)
    ly [i] = 400-random(40)
    line (lx[i-1], ly[i-1], lx[i], ly[i])
  line (lx[i], ly[i], lx[0], ly[0])
}



function kollaRutan (x, y) {
  
let totalt = 0;
  for (py=0; py<50; py++) {
      for (px=0; px<50; px++) {

        place =  ((20000*y)+(50*x)+(py*400+px));
        pix = pixels [place*4]
        totalt=totalt+pix
       // pixels [place*4] = 0
      }
    }
  return totalt;
}

function draw() {
walk++;
  if (walk==8)  {fall++; walk=0; }
  if (fall==2) {
    fall=0; 
    linjer ();
    loadPixels ()
  } 
  
updatePixels ()

  image (bass, walk*50, fall*50, 50, 50)
  let bildvarde = kollaRutan (walk, fall)
      if (bildvarde<630000) bassnote[1].play ();

  image (kick, walk*50, (fall+2)*50, 50, 50)
  bildvarde = kollaRutan (walk, fall+2)
      if (bildvarde<630000) kicknote.play ();
  
  image (hh, walk*50, (fall+4)*50, 50, 50)
  bildvarde = kollaRutan (walk, fall+4)
      if (bildvarde<630000) hhnote.play ();

  image (snare, walk*50, (fall+6)*50, 50, 50)
  bildvarde = kollaRutan (walk, fall+6)
      if (bildvarde<630000) snarenote.play ();

  // updatePixels ()

  //print (walk)
 // print ((16000*walk)*4)
// print (totalt)
   
}