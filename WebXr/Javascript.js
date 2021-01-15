// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//models
const Box = new Model('Box.gltf');
Box.setPosition(0.984, 1.184, -7.352); 
Box.setScale(4, 4, 4);
Box.setRotation(0, -36.9, 0);

//const Lichaam = new Model('Lichaam.obj');
//Box.setPosition(4.32912, 1.31293, -5.6555); 
//Box.setScale(0.1, 0.1, 0.1);
//Box.setRotation(0, -36.95, 0);

//Tafels

//voor,links
const tafel = new Model('Table.gltf');
tafel.setPosition(-0.045, 0.000, -6.701); 
tafel.setScale(173.127, 165.457, 198.022 );
tafel.setRotation(0.000, -71.048, 0.000);

//voor, rechts 
const tafel2 = new Model('Table.gltf');
tafel2.setPosition(3.305, 0.000, -0.781); 
tafel2.setScale(173.127, 165.457, 198.022 );
tafel2.setRotation(0.000, -96.404, 0.000);

//Rechts, voor
const tafel3 = new Model('Table.gltf');
tafel3.setPosition(4.846, 0.000, -3.234); 
tafel3.setScale(173.127, 165.457, 198.022 );
tafel3.setRotation(0, -7.472, 0);

//PALET
const palet = new Model('Palet.gltf');
palet.setPosition(1.977, 1.140, -0.618); 
palet.setScale(2, 2, 2 );
palet.setRotation(0, 0, 0);

//ROMP
const lichaam = new Model('lichaam.obj');
lichaam.setPosition(-1.708, 0, -6.197); 
lichaam.setScale(0.04, 0.04, 0.04 );
lichaam.setRotation(0, -16.849, 0);

//SPRAY
const spray = new Model('Spray Paint.gltf');
spray.setPosition(2.076, 0, -1.668); 
spray.setScale(18.000, 18.000, 18.000 );
spray.setRotation(0, -159.157, 0);

//SPRAY2
const spray2 = new Model('Spray Paint.gltf');
spray2.setPosition(5.060, 1.202, -4.571); 
spray2.setScale(18.000, 18.000, 18.000 );
spray2.setRotation(0, -109.767, 0);

//FARROW
const farrow = new Model('Paint Farrow.gltf');
farrow.setPosition(4.570, 0, -3.857); 
farrow.setScale(8.000, 8.000, 8.000 );
farrow.setRotation(0, -109.767, 0);

//FOTO1
const foto1 = new XRImage('Folkert-de-Jong-00.jpg');
foto1.setPosition(4.570, 1.680, -3.062); 
foto1.setScale(1.000, 1.000, 1.000 );
foto1.setRotation(0, -99.984, 0);

//FOTO2
const foto2 = new XRImage('Folkert-de-Jong-000.jpg');
foto2.setPosition(3.129, 1.680, -1.037); 
foto2.setScale(1.000, 1.000, 1.000 );
foto2.setRotation(0, -176.144, 0);

//FOTO3
const foto3 = new XRImage('Folkert-de-Jong-01.jpg');
foto3.setPosition(0.033, 1.680, -6.398); 
foto3.setScale(1.000, 1.000, 1.000 );
foto3.setRotation(0, 200.000, 0);