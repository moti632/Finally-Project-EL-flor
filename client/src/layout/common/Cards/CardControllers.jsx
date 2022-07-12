import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CardControllers = ({ card, user, handleDelete, changeLikeStatus }) => {
  const cardLikes = card.likes;
  let isCardLiked = null;

  if (user && cardLikes.length)
    isCardLiked = cardLikes.find((id) => id === user._id);

  return (
    <div className="justify-content-between d-flex px-2 pb-2">
      {user && (user._id === card.user_id) | user.isAdmin ? (
        <div>
          <span
            className="cursor bg-danger text-light rounded p-1 position-absolute bottom-0 start-0 mx-5 mb-1"
            onClick={() => handleDelete(card._id)}
          >
            Delete{" "}
          </span>
          <Link to={`/edit-card/${card._id}`}>
            <span className="cursor bg-primary text-light rounded p-1 position-absolute bottom-0 end-0 mx-5 mb-1">
              Edit
            </span>
          </Link>
        </div>
      ) : null}

      {user && (
        <div>
          <FontAwesomeIcon
            icon={faCartPlus}
            className={
              isCardLiked
                ? "text-info btn-lg position-absolute top-0 start-0"
                : "text-light btn-lg position-absolute top-0 start-0"
            }
            onClick={() => changeLikeStatus(card._id, user)}
          />
        </div>
      )}
    </div>
  );
};

CardControllers.propTypes = {
  card: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default CardControllers;
