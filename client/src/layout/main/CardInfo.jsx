import React, { Component } from "react";
import { getCard } from "../../services/cardService";
import PageHeader from "../common/pageHeader";

class CardInfo extends Component {
  state = {
    card: {},
    errors: {},
    isMounted: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getCard(this.props.id);
      this.setState({ card: data, isMounted: true });
    } catch (error) {
      this.setState({ errors: error.message });
    }
  }

  render() {
    const { card, isMounted } = this.state;
    if (!isMounted) return null;

    const {
      title,
      subTitle,
      description,
      image: { url, alt },
      address,
      phone,
      likes,
      bizNumber,
      createdAt,
    } = card;

    return (
      <React.Fragment>
        <div className="container">
          <PageHeader title={title} subTitle={subTitle} />
          <div className="d-grid justify-content-center pt-4">
            <img
              style={{ maxWidth: "800px" }}
              src={url}
              className="card-img"
              alt={alt}
            ></img>
            <div className="d-grid justify-content-center">
              <div className="imginfo pt-2 mt-4 mb-4 p-3 text-center rounded shadow-lg">
                <p className="text-primary">
                  <strong className="text-dark">Description: </strong>
                  {description}
                </p>
                <p className="text-primary">
                  <strong className="text-dark">Address: </strong>
                  {address}
                </p>

                <p className="text-primary">
                  <strong className="text-dark">Phone: </strong>
                  {phone}
                </p>

                <p className="text-primary">
                  <strong className="text-dark">Favorite Flower: </strong>
                  {likes.length}
                </p>

                <p className="text-primary">
                  <strong className="text-dark">#Catalog number: </strong>
                  {bizNumber}
                </p>

                <p className="text-primary">
                  <strong className="text-dark">Created At: </strong>
                  {createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardInfo;
