import React from "react";
import PageHeader from "../common/pageHeader";
import { getFavoriteCards } from "../../services/cardService";
import CardExtends from "../common/Cards/CardExtends";
import Cards from "../common/Cards/cards";

class MyFavoriteCards extends CardExtends {
  state = {
    data: [],
    cards: [],
    likedCards: [],
    isMount: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getFavoriteCards();
      console.log(data);
      this.setState({ data, likedCards: data, isMount: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { isMount, likedCards } = this.state;
    if (!isMount) return <div>Loading...</div>;

    return (
      <React.Fragment>
        <div className="container">
          <PageHeader
            title="Your Favorite Flowers"
            subTitle="Here you can find your favorite Flowers"
          />
          <div className="mb-4">
            <Cards
              cards={likedCards}
              handleDelete={this.handleDelete}
              changeLikeStatus={this.changeLikeStatus}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyFavoriteCards;
