// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//models
const Box = new Model('Box.obj');
Box.setPosition(4.32912, 1.31293, -5.6555); 
Box.setScale(0.1, 0.1, 0.1);
Box.setRotation(0, -36.95, 0);

//const Lichaam = new Model('Lichaam.obj');
//Box.setPosition(4.32912, 1.31293, -5.6555); 
//Box.setScale(0.1, 0.1, 0.1);
//Box.setRotation(0, -36.95, 0);

//Tafels

//voor,links
const tafel = new Model('Tafel.obj');
tafel.setPosition(-0.005, 0.073, -3.364); 
tafel.setScale(1.476, 1.670, 2.056 );
tafel.setRotation(0.000, -87.739, 0.000);

//voor, rechts 
const tafel2 = new Model('Tafel.obj');
tafel2.setPosition(3.305, 0.073, -3.464); 
tafel2.setScale(1.476, 1.670, 2.056 );
tafel2.setRotation(0.000, -87.739, 0.000);

//Links, voor
const tafel1 = new Model('Tafel.obj');
tafel1.setPosition(-2.505, 0.073, -2.364); 
tafel1.setScale(1.467, 1.670, 2.046);
tafel1.setRotation(0, 0, 0);

//Rechts, voor
const tafel3 = new Model('Tafel.obj');
tafel3.setPosition(5.305, 0.073, -3.464); 
tafel3.setScale(1.476, 1.670, 2.056 );
tafel3.setRotation(0, 0, 0);


