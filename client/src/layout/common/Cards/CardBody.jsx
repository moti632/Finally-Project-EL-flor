import PropTypes from "prop-types";

const CardBody = ({ card }) => {
  const { bizNumber } = card;
  return (
    <div className="card-body center text-secondary p-2">
      <div className="mb-4">
        <strong>#Catalog number</strong>
        <div className="text-primary center">{bizNumber}</div>
      </div>
    </div>
  );
};

CardBody.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardBody;
