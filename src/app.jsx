import React from "react";
import { Canvas } from "react-three-fiber";

export default function App() {
    return (
        <div className="App">
            <Canvas>
                <mesh onClick={(e) => alert("Clicked")}>
                    <boxBufferGeometry />
                    <meshPhongMaterial />
                </mesh>
                <ambientLight args={[0xff0000]} intensity={0.1} />
                <directionalLight position={[0, 0, 5]} intensity={0.5} />
            </Canvas>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);