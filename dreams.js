import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera3D, scene, renderer, cube;
let dir = 0.01;
let controls;


function init3D() {

    //Scene
    scene = new THREE.Scene();
    camera3D = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
  


    //Rendering
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    // The Object
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    

    //Controls
    controls = new OrbitControls(camera3D, renderer.domElement);
    camera3D.position.z = 5;

    //BACKGROUND
    let bgGeometery = new THREE.SphereGeometry(1000, 40, 40);
    bgGeometery.scale(-1, 1, 1);
    let panotexture = new THREE.TextureLoader().load("Future2.jpg");
    let backMaterial = new THREE.MeshBasicMaterial({ map: panotexture });
    let back = new THREE.Mesh(bgGeometery, backMaterial);
    scene.add(back);


        animate();
    }
   


function animate() {
    requestAnimationFrame(animate);
    controls.update();
   /* cube.scale.x += dir;
    cube.scale.y += dir;
    cube.scale.z += dir;
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    if (cube.scale.x > 4 || cube.scale.x < -4) {
        dir = -dir;
    }
    */
    renderer.render(scene, camera3D);
}

init3D();