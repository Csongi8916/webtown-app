import classes from './Card.module.css';

function Card({ post, isRtl }) {
  return (
    <div className={classes.cardContainer}>
      <div className="card shadow ">
        <div className="p-2">
          <img src={post.image} className={classes.cardImage} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>
        <div className="card-body">
        <a href="#" className={isRtl ? "me-auto" : "ms-auto"}>
            {isRtl ? <i className="bi bi-arrow-right"></i> : <i className="bi bi-arrow-left"></i>}
            <span className="m-2">View All</span>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr className={classes.cardHr} />
        <div className={classes.date}>
          <p className="mb-1">{post.year}</p>
          <p>{post.month}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
