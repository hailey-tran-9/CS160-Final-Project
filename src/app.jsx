import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client';
import { Mesh, BoxBufferGeometry, MeshBasicMaterial } from 'three';

export default function App() {
    return (
        <div>
            <mesh scale={[2, 2, 2]} rotation={[0, 2, 0]} onClick={(e) => alert("Clicked")}>
                <boxBufferGeometry />
                <meshPhongMaterial />
                <meshStandardMaterial color="hotpink" />
            </mesh>
            <ambientLight args={[0xff0000]} intensity={0.1} />
            <directionalLight position={[0, 0, 5]} intensity={0.5} />
        </div>
    );
}

function loadCube() {
    return (
        <>
            <mesh scale={[2, 2, 2]} rotation={[0, 2, 0]} onClick={(e) => alert("Clicked")}>
                <BoxBufferGeometry />
                <MeshPhongMaterial />
                <MeshStandardMaterial color="hotpink" />
            </mesh>
        </>
    )
};
const container = document.getElementById("canvas");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);