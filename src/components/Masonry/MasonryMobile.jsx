import { memo } from "react";

function MasonryMobile({ data }) {
  const firstColumn = [], secondColumn = [];
  let logic = true;
  data.elements.toReversed().forEach(element => {
    if (logic) {
      firstColumn.push(element);
    } else {
      secondColumn.push(element);
    }
    logic = !logic;
  });

  return (
    <div className="d-flex justify-content-center p-1">
      <div className="d-flex flex-column">
        {firstColumn.map((element, index) => (
          <div className="p-1" key={index}
            style={{height: index % 2 === 0 ? '150px' : '100px',
            width: '10vw', minWidth: '190px'}}>
            <img src={element.image}
              className='rounded'
              alt="masonry image" />
          </div>
        ))}
      </div>
      <div className="d-flex flex-column">
        {secondColumn.map((element, index) => (
          <div className="p-1" key={index}
            style={{height: index % 2 !== 0 ? '150px' : '100px',
            width: '10vw', minWidth: '190px'}}>
            <img src={element.image}
              className='rounded'
              alt="masonry image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(MasonryMobile);
