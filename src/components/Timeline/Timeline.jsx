import Card from '../Card/Card';

import classes from './Timeline.module.css';

function Timeline({ posts }) {
  return (
    <div className={classes.timeline}>
      <div className={classes.header}>
        <h2>Financial sector development timeline</h2>
        <a href="#" className="me-auto">
          <span className="ms-2">View All</span>
            <i class="bi bi-arrow-left"></i>
        </a>
        <div className="d-flex me-auto">
          <button className="btn">
            <i class="bi bi-arrow-left"></i>
          </button>
          <button className="btn">
            <i class="bi bi-arrow-left"></i>
          </button>
        </div>
      </div>
      <div className={classes.scrollbar}>
        <Card post={posts[0].data[0]} />
        <Card post={posts[0].data[1]} />
        <Card post={posts[0].data[2]} />
        <Card post={posts[0].data[3]} />
        <Card post={posts[1].data[0]} />
        <Card post={posts[0].data[0]} />
        <Card post={posts[0].data[0]} />
        <Card post={posts[0].data[0]} />
      </div>
    </div>
  );
}

export default Timeline;
