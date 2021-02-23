import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((docs) => {
          return (
            <div className='img-wrap' key={docs.id}>
              <img src={docs.url} alt='obrazek z mojej galerii' />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
