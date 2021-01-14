// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//models
const Box = new Model('Box.obj');
Box.setPosition(0.984, 1.184, -7.352); 
Box.setScale(0.045, 0.045, 0.045);
Box.setRotation(0, -36.9, 0);

//const Lichaam = new Model('Lichaam.obj');
//Box.setPosition(4.32912, 1.31293, -5.6555); 
//Box.setScale(0.1, 0.1, 0.1);
//Box.setRotation(0, -36.95, 0);

//Tafels

//voor,links
const tafel = new Model('Tafel.obj');
tafel.setPosition(-0.045, 0.000, -6.701); 
tafel.setScale(1.476, 1.670, 2.056 );
tafel.setRotation(0.000, -71.048, 0.000);

//voor, rechts 
const tafel2 = new Model('Tafel.obj');
tafel2.setPosition(3.305, 0.000, -0.781); 
tafel2.setScale(1.476, 1.670, 2.056 );
tafel2.setRotation(0.000, -96.404, 0.000);

//Rechts, voor
const tafel3 = new Model('Tafel.obj');
tafel3.setPosition(4.846, 0.000, -3.234); 
tafel3.setScale(1.476, 1.670, 2.056 );
tafel3.setRotation(0, -7.472, 0);

//EZEL
const palet = new Model('palet.obj');
palet.setPosition(1.977, 1.140, -0.618); 
palet.setScale(0.015, 0.015, 0.015 );
palet.setRotation(0, 0, 0);

//ROMP
const lichaam = new Model('lichaam.obj');
lichaam.setPosition(-1.708, 0, -6.197); 
lichaam.setScale(0.04, 0.04, 0.04 );
lichaam.setRotation(0, -16.849, 0);

