import classes from './Masonry.module.css';

function Masonry({ images }) {
  images.forEach(element => {
    // const sum = element.data.reduce((a, b) => { height: a.height + b.height });
    // console.log(sum);
  });
  

  return (
    <div className={classes.masonry}>
      <div className="d-flex">
        {images.map((imageData, index) => (
          <>
          <div key={index} className="bd-highlight mb-3">
            {imageData.data.map(element => (
              <div className="p-1" key={element.id}
                style={{height: `${element.height}vh`,
                width: '10vw'}}>
                <img src={element.image}
                  className='rounded'
                 alt="masonry image" />
              </div>
            ))}
          </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Masonry;
