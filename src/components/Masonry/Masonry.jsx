import classes from './Masonry.module.css';

function Masonry({ images }) {
  return (
    <div className={classes.container}>
      {images.map((imageData, index) => (
        <div key={index} >
          {imageData.data.map(element => (
            <div className="p-1" key={element.id}
              style={{height: `${element.height}px`,
              width: '10vw', minWidth: '200px'}}>
              <img src={element.image}
                className='rounded'
                alt="masonry image" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Masonry;
