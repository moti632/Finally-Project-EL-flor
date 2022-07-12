import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ cards }) => {
  if (!cards.length) return <div>No Cards In The State Object...</div>;

  return (
    <table className="table btn-light shadow opacity-75">
      <thead>
        <tr>
          <th scope="col">#Catalog number:</th>
          <th scope="col">Title:</th>
          <th scope="col">Address:</th>
          <th scope="col">Phone:</th>
        </tr>
      </thead>

      <tbody>
        {cards.map((card) => {
          return (
            <tr key={card._id}>
              <th scope="row">{card.bizNumber}</th>
              <td>
                <Link to={`card-info/${card._id}`}>{card.title}</Link>
              </td>
              <td>{card.address}</td>
              <td>{card.phone}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Cards;
