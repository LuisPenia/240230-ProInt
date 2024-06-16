import React, { useEffect, useState } from 'react';
import './AnimationComponent.css'

const AnimationComponent = ({ effect, framesFolder, framePrefix, frameQuantity, frameForSecond }) => {
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReverse, setIsReverse] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Cargar los fotogramas desde el repositorio utilizando importación dinámica
    const loadFrames = async () => {
      const frameCount = frameQuantity; // Número total de fotogramas
      const framePaths = [];
      
      for (let i = 1; i <= frameCount; i++) {
        const frameNumber = i.toString().padStart(4, '0');
        const framePath =  `./${framesFolder}/${framePrefix}_${frameNumber}.png`;
        const frameModule = await import(framePath);
        framePaths.push(frameModule.default);
       
      }

      setFrames(framePaths);
    };

    loadFrames();
  }, []);

  useEffect(() => {
    
    const interval = setInterval(() => {
      if (effect === 'repetirUna') {
        if (currentFrame < frames.length - 1) {
          setCurrentFrame(currentFrame + 1);
        }
      } else if (effect === 'cicloInfinito') {
        console.log( currentFrame );
  
        setCurrentFrame((currentFrame + 1) % frames.length);
      } else if (effect === 'cicloReverso') {
        if (isReverse) {
          if (currentFrame > 0) {
            setCurrentFrame(currentFrame - 1);
          } else {
            setIsReverse(false);
          }
        } else {
          if (currentFrame < frames.length - 1) {
            setCurrentFrame(currentFrame + 1);
          } else {
            setIsReverse(true);
          }
        }
      }
    }, frameForSecond);

    return () => clearInterval(interval);
  }, [currentFrame, effect, frames, isReverse, key]);

  
  const handleClick = () => {
    setCurrentFrame(0); // Reiniciar a la primera imagen
    setKey(prevKey => prevKey + 1); // Cambiar la clave para reiniciar el efecto
  };
  

  return (
    <div className='AnimationComponent-contenedorImagen'  onClick={handleClick}>
      {frames.length > 0 && (
        <img className='AnimationComponent-Imagen' src={frames[currentFrame]} alt={`Frame ${currentFrame}`} />
      )}
    </div>
  );
};

export default AnimationComponent;