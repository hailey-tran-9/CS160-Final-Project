import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// React imports 
import { useLoader } from '@react-three/fiber';



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

// set up the camera
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

// Add raycaster
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

// GLTF Loader
const defaultPosition = new THREE.Vector3(0, 0, 0);
const defaultRotation = new THREE.Vector3(0, 0, 0);
const defaultScale = new THREE.Vector3(1, 1, 1);

/* Call this function to load your models */
function loadModel( objName, objPath, position = defaultPosition, rotation = defaultRotation, scale = defaultScale ) {
    var loader = new GLTFLoader( );
    loader.load( objPath, function ( gltf ) {

        gltf.scene.name = objName;
        
        scene.add( gltf.scene );

        if (objName == 'rooms') {
            initializeCamera(gltf.scene);
        }

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
        
        return gltf;
    }, function ( xhr ) {

        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    }, undefined, function ( error ) {

        console.error( error );

    } );
}

/* instantiate THREE.Vector3 */
function vector(x, y, z) {
    return new THREE.Vector3(x, y, z)
}


/* Load models */
// let roomsModel;
// loadModel('rooms', 'rooms.glb', defaultPosition, defaultRotation, vector(10, 10, 10))

// loadModel('couch', 'couch.glb', vector(-3, 0.32, -3), vector(0, Math.PI, 0), vector(0.9, 0.9, 0.9));
// loadModel('couch2', 'couch.glb', vector(-3.9, 0.32, -1.7), vector(0, -Math.PI/2, 0), vector(0.9, 0.9, 0.9));

// loadModel('tvStand', 'tvStand.glb', vector(2, 0.1, 4.3), vector(0, Math.PI/2, 0), vector(0.018, 0.018, 0.018));
// loadModel('tv', 'tv.glb', vector(-1.75, 0.5, -1.73), vector(0, Math.PI/2, 0), vector(0.08, 0.08, 0.08));
// loadModel('coffeeTable', 'coffeeTable.glb', vector(-3, 0.3, -1.8), vector(0, Math.PI/2, 0), vector(0.8, 0.4, 0.8));
// loadModel('electricGuitar', 'electricGuitar.glb', vector(-1.55, 0.155, -2.7), vector(0, -Math.PI/2, 0), vector(0.036, 0.036, 0.036));

// loadModel('desk', 'desk.glb', vector(-2, 0.35, 2), vector(0, 0, 0), vector(0.4, 0.4, 0.5));
// //no gaming chair??
// // loadModel('gamingChair', 'gamingChair.glb', vector(0, 0, 0), vector(0, 0, 0), vector(2000, 2000, 2000))

// loadModel('carpet', 'carpet.glb', vector(-3, 0.17, -1.8), new THREE.Vector3(0, Math.PI, 0), vector(0.8, 0.8, 0.8));

// loadModel('stairs', 'stairs.glb', vector(-4.4, 0.08, 1.1), vector(0,Math.PI/2, 0), vector(0.8, 0.8, 0.8));

// loadModel('polaroids', 'polaroids.glb', vector(-1.56, 1, -0.5), vector(0, Math.PI, 0), vector(0.7, 0.7, 0.7));

// loadModel('shelves', 'shelves.glb', vector(-2, 0.35, 2), vector(0, 0, 0), defaultScale);
// loadModel('shelves2', 'shelves.glb', vector(-2, 0.35, 2), vector(0, 0, 0), defaultScale);

// let box = loadModel('packageClosed', 'boxClosed.glb', vector(-1.75, 0.15, -0.45), vector(0, Math.PI/9, 0), defaultScale);
// loadModel('packageOpen', 'cardboardBox.glb', vector(-1.7, 0.17, -0.9), vector(0, -Math.PI/7, 0), vector(1.5, 1.5, 1.5));
// loadModel('boxingRing', 'boxingRing.glb', vector(0, 0, 0), vector(0, 0, 0), vector(0, 0, 0));


//set camera location towards the room
function initializeCamera(roomsModel) {
    camera.position.set(0, 10, 5);
    controls.target.set(0, 1, 0);
    camera.rotation.set(0, 90, 0);
    camera.scale.set(1, 1, 1);
    const box = new THREE.Box3().setFromObject(roomsModel);
    const center = box.getCenter(new THREE.Vector3());
    const direction = new THREE.Vector3(1, 0.1, 0); 
    camera.position.copy(center).addScaledVector(direction, 12);
}

//react load model
function model({url}) {
    const obj = useGLTF(url)
}



// Create a render/animate loop
function animate() {
    requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
animate();