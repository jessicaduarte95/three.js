const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(8, 8),
    new THREE.MeshPhongMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
    })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true;
scene.add(floor);

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial({
        color: 0xB40431,
    })
);
cube.position.y = 1;
cube.castShadow = true;
scene.add(cube);

const lightScene = new THREE.SpotLight(
    0xFFFFFF, 3, 10, 0.4
);
lightScene.position.y = 7;
lightScene.position.x = 2;
lightScene.position.z = 2;
lightScene.castShadow = true;
scene.add(lightScene);

const lightScene2 = new THREE.PointLight(
    0xF781BE, 0.1
);
lightScene2.position.y = 10;
lightScene2.position.x = 5;
lightScene2.castShadow = true;
scene.add(lightScene2);

const lightScene3 = new THREE.PointLight(
    0x0101DF, 0.2
);
lightScene3.position.y = 3;
lightScene3.position.z = 3;
lightScene3.castShadow = true;
scene.add(lightScene3);

renderer.setAnimationLoop(() => {
    x3.tick();
    x3.fps(() => {
        renderer.render(scene, camera);
    });
});