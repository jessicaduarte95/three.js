const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({
        color: 0x368ed1
    })
);
cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true;
scene.add(cube);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    // new THREE.MeshLambertMaterial({
    //     color: 0xFFFFFF,
    //     side: THREE.DoubleSide
    // })

    // Para a Luz SpotLight
    new THREE.MeshPhongMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
    })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true;
scene.add(floor);

// const shadowLight = new THREE.PointLight(
//     0xFFFFFF, 2, 60
// );
// shadowLight.position.y = 4;
// shadowLight.castShadow = true;
// scene.add(shadowLight);

// x3.add(shadowLight, {helper: { visible: false}})

// const sun = new THREE.DirectionalLight(
//     0xFFFFFF, 1 // Cor e intensidade
// );
// sun.position.y = 4;
// sun.castShadow = true;
// sun.target = cube
// scene.add(sun);

// x3.add(sun)

const shadowLight = new THREE.SpotLight(
    0xFFFFFF, 3, 10, 0.4 // Cor, intensidade, distância, ângulo
);
shadowLight.position.y = 8;
shadowLight.castShadow = true;
shadowLight.target = cube
scene.add(shadowLight);

x3.add(shadowLight, {helper: {visible: false}});
x3.add(cube);

renderer.setAnimationLoop(() => {
    x3.tick();
    x3.fps(() => {
        renderer.render(scene, camera);
    });
});