import classes from './Card.module.css';

function Card({ post }) {
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
          <a href="#" className="card-link">
            <span className="ms-2">View More</span>
            <i className="bi bi-arrow-left"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr className={classes.cardHr} />
        <p className={classes.date}>{post.date}</p>
      </div>
    </div>
  );
}

export default Card;
