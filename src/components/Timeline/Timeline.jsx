import Card from '../Card/Card';

import classes from './Timeline.module.css';

function Timeline({ posts }) {
  return (
    <div className={classes.timeline}>
      {console.log(posts)}
      <div className="d-flex">
        <Card post={posts[0].data[0]} />
        <Card post={posts[0].data[1]} />
        <Card post={posts[0].data[2]} />
        {console.log(posts[0].data[0])}
      </div>
    </div>
  );
}

export default Timeline;