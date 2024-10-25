import { useEffect, useRef, useState, memo } from "react";
import Card from '../Card/Card';
import classes from './Timeline.module.css';

const CARD_WIDTH = 320;

function Timeline({ posts }) {
  const scrollBarRef = useRef();
  const count = useRef(0);
  const [ scrollPosition, setScrollPosition ] = useState(0);

  let isDesktop = window.innerWidth >= 412;
  let xDown, yDown = undefined;
  let isLeftTouch = undefined;
  
  const handleScroll = (scrollAmount) => {
    if (count.current === 0 && scrollAmount > 0) return;
    if (count.current === posts.length && scrollAmount < 0) return;
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    scrollBarRef.current.scrollLeft = newScrollPosition;
    scrollAmount > 0 ? count.current++ : count.current--;
  }

  const handleStartTouchScroll = (event) => {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;                                      
  }

  const handleMoveTouchScroll = (evt) => {
    if ( ! xDown || ! yDown ) {
      return;
    }
    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
          console.log('Right Swipe');
          isLeftTouch = false;
        } else {
          console.log('Left Swipe');
          isLeftTouch = true;
        }                       
    }
    xDown = null;
    yDown = null;
  }

  const handleEndTouchScroll = (event) => {
    if (isLeftTouch) {
      handleScroll(-CARD_WIDTH);
    } else {
      handleScroll(CARD_WIDTH);
    }
  }

  return (
    <div className={classes.timeline}>
      <header className={classes.header}>
        <div className="d-flex">
          <h2 className={classes.title}>Financial sector development timeline</h2>
          <a href="#" className="me-auto">
            <span className="ms-2">View All</span>
            <i className="bi bi-arrow-left"></i>
          </a>
        </div>
        <hr />
        {isDesktop && <div className="d-flex">
          <div className="me-auto">
            <button onClick={() => {handleScroll(CARD_WIDTH)}} className="m-2 btn btn-secondary">
              <i className="bi bi-arrow-right"></i>
            </button>
            <button onClick={() => {handleScroll(-CARD_WIDTH)}} className="btn btn-secondary">
              <i className="bi bi-arrow-left"></i>
            </button>
          </div>
        </div>}
      </header>
      <div className={classes.scrollbar}
        ref={scrollBarRef}
        onTouchStart={handleStartTouchScroll}
        onTouchMove={handleMoveTouchScroll}
        onTouchEnd={handleEndTouchScroll}>
        {posts.map(imageData => (
          imageData.data.map(element => (
            <Card post={element} className={classes.card} />
          ))
        ))}
      </div>
    </div>
  );
}

export default memo(Timeline);
