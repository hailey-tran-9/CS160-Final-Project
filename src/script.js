import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add controls
const controls = new OrbitControls( camera, renderer.domElement );

// FBX Loader
const loader = new FBXLoader();
loader.load( 'couch___wide.fbx', function ( object ) {
    object.traverse( function ( child ) {
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    } );
    scene.add( object );
} );

const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 0.5)
scene.add(light)

// Add light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

camera.position.set( 0, 20, 200 );
controls.update();

// // Change scene background
// scene.background = new THREE.Color( 0xffffff );

// Create a render/animate loop
function animate() {
    controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();