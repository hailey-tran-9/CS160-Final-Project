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
camera.position.set( 0, 10, 20 );

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
const loader = new GLTFLoader();
loader.load( 'Desk.glb', function ( gltf ) {

	scene.add( gltf.scene );

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object

}, function ( xhr ) {

    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

}, undefined, function ( error ) {

	console.error( error );

} );

// Create a render/animate loop
function animate() {
    requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
animate();