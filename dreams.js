import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera3D, scene, renderer, sphere;
let dir = 0.5;
let controls;


let img;


function init3D() {

    //Scene
    scene = new THREE.Scene();
    camera3D = new THREE.PerspectiveCamera(125, window.innerWidth / window.innerHeight, 0.1, 1000);
  


    //Rendering
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // The Object
    // const radius = 3;  
    // const segments = 10; 
    const geometry = new THREE.SphereGeometry(2.5, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    sphere = new THREE.Mesh(geometry, material);
    
    scene.add(sphere);
    
    //lights
    const light = new THREE.AmbientLight( 0xffffff, 0.5 );
    scene.add( ambient );


    //Controls
    controls = new OrbitControls(camera3D, renderer.domElement);
    camera3D.position.z = 5;

    // //BACKGROUND
    let bgGeometery = new THREE.SphereGeometry(1000, 60, 60);
    bgGeometery.scale(-1, 1, 1);
    let panotexture = new THREE.TextureLoader().load("Future8.jpg");
    let backMaterial = new THREE.MeshBasicMaterial({ map: panotexture });
    let back = new THREE.Mesh(bgGeometery, backMaterial);
    scene.add(back);
        animate();
    }
   

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    sphere.rotation.y += 0.01;
    sphere.rotation.x += 0.01;
    if (sphere.scale.x > 1 || sphere.scale.x < 1) {
        dir * 0.01
    }
 
    renderer.render(scene, camera3D);
}

init3D();