import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/favourite";

const imagePath = 'https://image.tmdb.org/t/p/w500';
const CartComponent = () => {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  const dispatch = useDispatch();
  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const handleToggleFavorites = (id) => {
    if (isFavorite(id)) {
      dispatch(removeFromFavorites(id));
    }
  };

  return (
    <>
      <div className="row">
        {favorites?.map((todo) => {
          return (
            <div className="col-md-6 col-lg-4 col-xl-4" key={todo.id}>
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src={`${imagePath}${todo.imgSrc}`}
                  className="card-img-top cardImg"
                  alt="Apple Computer"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="text-muted mb-4">{todo.overview}</p>
                    <span className="glyphicon glyphicon-heart-empty"></span>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>{todo.first_air_date}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleToggleFavorites(todo.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartComponent;