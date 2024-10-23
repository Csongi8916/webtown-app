import classes from './Card.module.css';

function Card({ post }) {
  return (
    <>
      <div className={classes.cardContainer}>
        <div className="card">
          <img src={post.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">View More</a>
          </div>
        </div>
      </div>
      <hr />
      <p>{post.date}</p>
    </>
  );
}

export default Card;