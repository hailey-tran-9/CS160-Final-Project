import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create the scene, camera, and renderer
// Add scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
// scene.add(new THREE.AxesHelper(5))

// Add light
const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

// Add camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 10, 5 );

// Add renderer
const renderer = new THREE.WebGLRenderer( {antialias:true} );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild( renderer.domElement );

// Add controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true
controls.target.set(0, 1, 0)

// GLTF Loader
const defaultPosition = new THREE.Vector3(0, 0, 0);
const defaultRotation = new THREE.Vector3(0, 0, 0);
const defaultScale = new THREE.Vector3(0, 0, 0);

/* Call this function to load your models */
function loadModel( objName, objPath, position = defaultPosition, rotation = defaultRotation, scale = defaultScale ) {
    var loader = new GLTFLoader( );
    loader.load( objPath, function ( gltf ) {

        gltf.scene.name = objName;

        scene.add( gltf.scene );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        // console.log(gltf.scene.position);
        // console.log(gltf.scene.rotation);
        // console.log(gltf.scene.scale);

        gltf.scene.position.set(position.x, position.y, position.z);
        gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z);
        gltf.scene.scale.set(scale.x, scale.y, scale.z);

        // console.log(gltf.scene.position);
        // console.log(gltf.scene.rotation);
        // console.log(gltf.scene.scale);

    }, function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    }, undefined, function ( error ) {

        console.error( error );

    } );
}

// loadModel('Rooms', 'Rooms.glb', new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, Math.PI, 0), new THREE.Vector3(2, 2, 2));
loadModel('Desk', 'desk.glb', new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, Math.PI, 0), new THREE.Vector3(2, 2, 2));
loadModel('Carpet', 'carpet.glb', new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, Math.PI, 0), new THREE.Vector3(2, 2, 2));

// Create a render/animate loop
function animate() {
    requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
animate();