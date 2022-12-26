const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial(
    {
        color: 0x348feb,
        side: THREE.DoubleSide
    },
);

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1), // x,y,z
    material
);

scene.add(cube);

const circle = new THREE.Mesh(
    new THREE.CircleBufferGeometry(0.5,20), //Raio, segmentos
    material
);
circle.position.x = -2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(circle);

const cone = new THREE.Mesh(
    new THREE.ConeBufferGeometry(0.3,0.5), //Raio, altura, segmentos do raio, segmentos da altura.
    material
);
cone.position.x = -2;
cone.position.y = 2;
// cone.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(cone);

const cilindro = new THREE.Mesh(
    // Recebe p raio de cima, o raio de baixo e a altura;
    new THREE.CylinderBufferGeometry(0.5, 0.5, 1),
    material
);
cilindro.position.x = 2;
cilindro.position.y = 0;
scene.add(cilindro)

const plano = new THREE.Mesh(
    //Recebe altura e largura;
    new THREE.PlaneBufferGeometry(1,1),
    material
)
plano.position.x = 2;
plano.position.y = 2;
plano.rotation.x = THREE.MathUtils.degToRad(-90)
scene.add(plano)

const esfera = new THREE.Mesh(
    //Recebe raio e segmentos (widthSegments, heightSegments);
    new THREE.SphereBufferGeometry(0.3, 20, 20),
)
esfera.position.x = 0;
esfera.position.y = 2;
scene.add(esfera)

x3.add(circle, { label: 'circle'});

x3.add(cone, { label: 'cone'});

renderer.setAnimationLoop(() => {
    x3.tick();
    x3.fps(() => {
        renderer.render(scene, camera); 
    })
});