// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//models

const Box = new Model('assets/models/Box/Box.gltf');
Box.setPosition(0.984, 1.184, -7.352); 
Box.setScale(4, 4, 4);
Box.setRotation(0, -36.9, 0);

const Box2 = new Model('assets/models/Box/Box.gltf');
Box2.setPosition(4.273, 1.184, -0.411); 
Box2.setScale(4, 4, 4);
Box2.setRotation(0, -36.9, 0);

const Box3 = new Model('assets/models/Box/Box.gltf');
Box3.setPosition(4.492, 1.184, -1.076); 
Box3.setScale(3, 3, 3);
Box3.setRotation(0, -9.009, 0);

const Box4 = new Model('assets/models/Box/Box.gltf');
Box4.setPosition(5.167, 1.184, -2.028); 
Box4.setScale(3, 3, 3);
Box4.setRotation(0, -9.009, 0);

const Box5 = new Model('assets/models/Box/Box.gltf');
Box5.setPosition(5.563, 0, -3.968); 
Box5.setScale(3, 3, 3);
Box5.setRotation(0, -9.009, 0);

const Box6 = new Model('assets/models/Box/Box.gltf');
Box6.setPosition(-0.739, 0, -6.056); 
Box6.setScale(3.5, 3.5, 3.5);
Box6.setRotation(0, 109.010, 0);

const Box7 = new Model('assets/models/Box/Box.gltf');
Box7.setPosition(-0.167, 0, -6.260); 
Box7.setScale(3.5, 3.5, 3.5);
Box7.setRotation(0, 109.010, 0);

//Tafels
const tafel = new Model('assets/models/Table/Table.gltf');
tafel.setPosition(-0.045, 0.000, -6.701); 
tafel.setScale(173.127, 165.457, 198.022 );
tafel.setRotation(0.000, -71.048, 0.000);

//voor, rechts 
const tafel2 = new Model('assets/models/Table/Table.gltf');
tafel2.setPosition(3.305, 0.000, -0.781); 
tafel2.setScale(173.127, 165.457, 198.022 );
tafel2.setRotation(0.000, -96.404, 0.000);

//Rechts, voor
const tafel3 = new Model('assets/models/Table/Table.gltf');
tafel3.setPosition(4.846, 0.000, -3.234); 
tafel3.setScale(173.127, 165.457, 198.022 );
tafel3.setRotation(0, -7.472, 0);

//PALET
const palet = new Model('assets/models/Palet/Palet.gltf');
palet.setPosition(1.977, 1.140, -0.618); 
palet.setScale(2, 2, 2 );
palet.setRotation(0, 0, 0);

//SPRAY
const spray = new Model('assets/models/Spray Paint/Spray Paint.gltf');
spray.setPosition(2.076, 0, -1.668); 
spray.setScale(18.000, 18.000, 18.000 );
spray.setRotation(0, -159.157, 0);

//SPRAY2
const spray2 = new Model('assets/models/Spray Paint/Spray Paint.gltf');
spray2.setPosition(5.060, 1.202, -4.571); 
spray2.setScale(18.000, 18.000, 18.000 );
spray2.setRotation(0, -109.767, 0);

//FARROW
const farrow = new Model('assets/models/Paint Farrow/Paint Farrow.gltf');
farrow.setPosition(4.570, 0, -3.857); 
farrow.setScale(8.000, 8.000, 8.000 );
farrow.setRotation(0, -109.767, 0);

//FARROW
const farrow2 = new Model('assets/models/Paint Farrow/Paint Farrow.gltf');
farrow2.setPosition(-1.400, 1.176, -6.316); 
farrow2.setScale(8.000, 8.000, 8.000);
farrow2.setRotation(0, -80.059, 0);

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

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(Box);

// listen for an event
foto1.addEventListener('mouseenter', () => 
    document.getElementById('Tekst').innerHTML= "Immortal Longings (The Burning of Roger Williamson, Zandvoort Formula One 1973), 2016");
foto1.addEventListener('mouseleave', () => 
    document.getElementById('Tekst').innerHTML= "");
foto2.addEventListener('mouseenter', () => 
    document.getElementById('Tekst').innerHTML= "Night Portal #3, 2015.");
foto2.addEventListener('mouseleave', () => 
    document.getElementById('Tekst').innerHTML= "");
foto3.addEventListener('mouseenter', () => 
    document.getElementById('Tekst').innerHTML= "The Balance, 2010.");
foto3.addEventListener('mouseleave', () => 
    document.getElementById('Tekst').innerHTML= "");

