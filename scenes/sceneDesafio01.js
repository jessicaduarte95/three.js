const geometry = new THREE.BoxBufferGeometry();
const path = new THREE.Shape();
const materialPiso = new THREE.MeshLambertMaterial(
    {
        color: 0x0B3B0B,
        side: THREE.DoubleSide
    },
);
const materialParede = new THREE.MeshLambertMaterial(
    {
        color: 0x0101DF,
        side: THREE.DoubleSide
    },
);

const materialParedeLados = new THREE.MeshLambertMaterial(
    {
        color: 0x0404B4,
        side: THREE.DoubleSide
    },
);
const materialLine = new THREE.LineBasicMaterial({
    color: 0x0101DF,
    side: THREE.DoubleSide
});
const materialTelhado =  new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
const materialPorta =  new THREE.MeshLambertMaterial({
    color: 0x2EFEF7,
    side: THREE.DoubleSide
});
const materialPortaBorda =  new THREE.MeshLambertMaterial({
    color: 0xFF0080,
    side: THREE.DoubleSide
});
const materialMacaneta =  new THREE.MeshLambertMaterial({
    color: 0x190707,
    side: THREE.DoubleSide
});

const piso = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(6,6),
    materialPiso
);
piso.position.x = 2;
piso.position.z = 2;
piso.rotation.x = THREE.MathUtils.degToRad(-90)
scene.add(piso);

const parede = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2,2),
    materialParede
);
parede.position.y = 1;
parede.position.x = 1;
scene.add(parede);

const paredeEsquerda = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(3,2),
    materialParedeLados
);
paredeEsquerda.position.y = 1;
paredeEsquerda.position.z = 1.5;
paredeEsquerda.rotation.y = THREE.MathUtils.degToRad(-90)
scene.add(paredeEsquerda);

const paredeDireita = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(3,2),
    materialParedeLados
);
paredeDireita.position.y = 1;
paredeDireita.position.z = 1.5;
paredeDireita.position.x = 2;
paredeDireita.rotation.y = THREE.MathUtils.degToRad(-90)
scene.add(paredeDireita);

const paredeFrente = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2,2),
    materialParede
);
paredeFrente.position.y = 1;
paredeFrente.position.x = 1;
paredeFrente.position.z = 3;
scene.add(paredeFrente);

path.moveTo(0,2);
path.lineTo(1,3);
path.lineTo(2,2);
path.lineTo(0,2);
const geometryLine = new THREE.ShapeBufferGeometry(path);
const draw = new THREE.Mesh(geometryLine, materialLine);
scene.add(draw);

const telhado = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.1,1.7,3.3), 
    materialTelhado
);
telhado.position.x = 1.6;
telhado.position.y = 2.4;
telhado.position.z = 1.5;
telhado.rotation.z = THREE.MathUtils.degToRad(45);
scene.add(telhado);

const telhado2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.1,1.7,3.3), 
    materialTelhado
);
telhado2.position.x = 0.42;
telhado2.position.y = 2.45;
telhado2.position.z = 1.5;
telhado2.rotation.z = THREE.MathUtils.degToRad(-45);
scene.add(telhado2);

const porta = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.1,1.3,0.9),
    materialPorta
);
porta.position.x = 1;
porta.position.y = 0.65;
porta.position.z = 3;
porta.rotation.y = THREE.MathUtils.degToRad(90);
scene.add(porta);

const portaBordaEsquerda = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.18,1.3,0.1),
    materialPortaBorda
);
portaBordaEsquerda.position.x = 0.5;
portaBordaEsquerda.position.y = 0.65;
portaBordaEsquerda.position.z = 3;
portaBordaEsquerda.rotation.y = THREE.MathUtils.degToRad(90);
scene.add(portaBordaEsquerda);

const portaBordaDireita = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.18,1.3,0.1),
    materialPortaBorda
);
portaBordaDireita.position.x = 1.5;
portaBordaDireita.position.y = 0.65;
portaBordaDireita.position.z = 3;
portaBordaDireita.rotation.y = THREE.MathUtils.degToRad(90);
scene.add(portaBordaDireita);

const portaBordaSuperior = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.1,1.1,0.18),
    materialPortaBorda
);
portaBordaSuperior.position.x = 1;
portaBordaSuperior.position.y = 1.35;
portaBordaSuperior.position.z = 3;
portaBordaSuperior.rotation.z = THREE.MathUtils.degToRad(90);
scene.add(portaBordaSuperior);

const macaneta = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.05, 10, 10),
    materialMacaneta
)
macaneta.position.x = 0.63;
macaneta.position.y = 0.7;
macaneta.position.z = 3.1;
scene.add(macaneta)

const janela = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1.1,0.8),
    materialPorta
);
janela.position.y = 1;
janela.position.z = 1.5;
janela.position.x = 2.03;
janela.rotation.y = THREE.MathUtils.degToRad(-90)
scene.add(janela);

const janelaBordaEsquerda = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.13,1,0.1),
    materialPortaBorda
);
janelaBordaEsquerda.position.x = 2.03;
janelaBordaEsquerda.position.y = 1;
janelaBordaEsquerda.position.z = 2.1;
janelaBordaEsquerda.rotation.y = THREE.MathUtils.degToRad(90);
scene.add(janelaBordaEsquerda);

const janelaBordaDireita = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.13,1,0.1),
    materialPortaBorda
);
janelaBordaDireita.position.x = 2.03;
janelaBordaDireita.position.y = 1;
janelaBordaDireita.position.z = 0.9;
janelaBordaDireita.rotation.y = THREE.MathUtils.degToRad(90);
scene.add(janelaBordaDireita);

const janelaBordaMeio = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.13,0.8,0.1),
    materialPortaBorda
);
janelaBordaMeio.position.x = 2.03;
janelaBordaMeio.position.y = 1;
janelaBordaMeio.position.z = 1.5;
janelaBordaMeio.rotation.y = THREE.MathUtils.degToRad(90);
scene.add(janelaBordaMeio);

const janelaBordaCima = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.13,1.2,0.1),
    materialPortaBorda
);
janelaBordaCima.position.x = 2.03;
janelaBordaCima.position.y = 1.45;
janelaBordaCima.position.z = 1.5;
janelaBordaCima.rotation.x = THREE.MathUtils.degToRad(90);
scene.add(janelaBordaCima);

const janelaBordaBaixo = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.13,1.2,0.1),
    materialPortaBorda
);
janelaBordaBaixo.position.x = 2.03;
janelaBordaBaixo.position.y = 0.55;
janelaBordaBaixo.position.z = 1.5;
janelaBordaBaixo.rotation.x = THREE.MathUtils.degToRad(90);
scene.add(janelaBordaBaixo);

const janelaBordaMeio2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.13,1.2,0.1),
    materialPortaBorda
);
janelaBordaMeio2.position.x = 2.03;
janelaBordaMeio2.position.y = 1;
janelaBordaMeio2.position.z = 1.5;
janelaBordaMeio2.rotation.x = THREE.MathUtils.degToRad(90);
scene.add(janelaBordaMeio2);

x3.add(telhado2, { label: 'telhado'});

renderer.setAnimationLoop(() => {
    x3.tick();
    x3.fps(() => {
        renderer.render(scene, camera);
    });
});