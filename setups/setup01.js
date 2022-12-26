const options = {
    targetSelector: '#scene', // Onde será desenhado.
    width: 800, 
    height: 600,
    backgroundColor: 0x222222
};

const renderer = new THREE.WebGLRenderer(); // Usa WebGL.

renderer.setSize(options.width, options.height); // Renderizando altura e largura.

document.querySelector(options.targetSelector).appendChild(renderer.domElement); // Adiciona o elemento básico html no seletor.

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(50, options.width / options.height);

camera.position.z = 5;