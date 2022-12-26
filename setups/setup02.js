const options = {
    targetSelector: '#scene', // Onde será desenhado.
    width: 800, 
    height: 600,
    backgroundColor: 0x222222
};

const renderer = new THREE.WebGLRenderer(
    {antialias: true}
); // Usa WebGL.

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height); // Renderizando altura e largura.

document.querySelector(options.targetSelector).appendChild(renderer.domElement); // Adiciona o elemento básico html no seletor.

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(50, options.width / options.height);

camera.position.x = 2.5;
camera.position.y = 6.5;
camera.position.z = 9;

const light = new THREE.HemisphereLight(
    0xFFFFBB,
    0x080820,
    2
);

scene.add(light);

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    },
    {
        grid: {visible: false},
        axes: {visible: false}
    }
);

x3.add(camera, {open: false});
x3.add(light, {helper: {visible: false}});