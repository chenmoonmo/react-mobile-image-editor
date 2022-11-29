import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Editor from './view/Editor';
import image from './image.jpg'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Editor image={image}/>);
