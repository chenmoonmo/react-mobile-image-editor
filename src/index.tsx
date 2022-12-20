import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Editor from './view/Editor';
import image from './image.jpg';
// import image2 from './image.png';

const App = () => {
  const ref = useRef(null as any);

  return (
    <>
      <button
        style={{
          position: 'fixed',
          zIndex: 1000000,
        }}
        onClick={() => {
          console.log(ref.current?.exportImage());
        }}
      >
        11111
      </button>
      <Editor ref={ref} image={image} width={window.innerWidth} height={window.innerHeight} />;
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App></App>);
