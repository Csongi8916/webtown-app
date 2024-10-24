import { useEffect, useRef, useState, memo } from "react";
import Card from '../Card/Card';
import classes from './Timeline.module.css';

const CARD_WIDTH = 320;

function Timeline({ posts }) {
  const scrollBarRef = useRef();
  const [ scrollPosition, setScrollPosition ] = useState(0);

  useEffect(() => {
    //scrollBarRef.current.scrollLeft = scrollPosition;
  });
  
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    scrollBarRef.current.scrollLeft = newScrollPosition;
  }

  return (
    <div className={classes.timeline}>
      <header className={classes.header}>
        <div className="d-flex">
          <h2>Financial sector development timeline</h2>
          <a href="#" className="me-auto">
            <span className="ms-2">View All</span>
            <i class="bi bi-arrow-left"></i>
          </a>
        </div>
        <hr />
        <div className="d-flex">
          <div className="me-auto">
            <button onClick={() => {handleScroll(CARD_WIDTH)}} className="m-2 btn btn-secondary">
              <i class="bi bi-arrow-right"></i>
            </button>
            <button onClick={() => {handleScroll(-CARD_WIDTH)}} className="btn btn-secondary">
              <i class="bi bi-arrow-left"></i>
            </button>
          </div>
        </div>
      </header>
      <div className={classes.scrollbar} ref={scrollBarRef}>
        {posts.map(imageData => (
            imageData.data.map(element => (
              <Card post={element} className={classes.card} />
            ))
        ))}
      </div>
      {/*<div className={classes.container}>
        <div ref={scrollBarRef} className={classes.scrollbar}>
          <div className={classes.contentBbox}>
            {posts.map(imageData => (
               imageData.data.map(element => (
                <Card post={element} className={classes.card} />
               ))
            ))}
          </div>
        </div>
      </div>*/}
      {/*<div className={classes.scrollbar} ref={scrollBar} data-bs-spy="scroll">
        <Card post={posts[0].data[0]} />
        <Card post={posts[0].data[1]} />
        <Card post={posts[0].data[2]} />
        <Card post={posts[0].data[3]} />
        <Card post={posts[1].data[0]} />
        <Card post={posts[0].data[0]} />
        <Card post={posts[0].data[0]} />
        <Card id="post" post={posts[0].data[0]} />
        <div id="p"></div>
      </div>*/}
    </div>
  );
}

export default memo(Timeline);
