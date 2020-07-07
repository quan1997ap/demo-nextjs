import NavComponent from "../../component/nav/nav.component";
import React from "react";
import "isomorphic-fetch";
import Head from "next/head";
import Link from "next/link";
import LoadingComponent from "../../component/loading/loading.component";

// https://fullstackstation.com/huong-dan-xay-dung-universal-javascript-app-voi-next-js/

export default class CardListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getCardList();
  }

  getCardList = async () => {
    this.setState({ loading: true });
    fetch("https://api.pokemontcg.io/v1/cards?pages=1&pageSize=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ cards: data.cards }, () => {
          console.log(this.state.cards);
          this.setState({ loading: false }); 
        });
      });
  };

  renderListCard() {
    if (this.state.cards && this.state.cards.length > 0) {
      return this.state.cards.map((card, i) => (
        <Link href={`card-edit?id=${card.id}`} key={i}>
          <div style={{ width: 200, float: "left" }}>
            <div style={{ margin: 10 }}>
              <img src={card.imageUrl} style={{ width: 160 }} />
            </div>
          </div>
        </Link>
      ));
    } else {
      return <div></div>;
    }
  }

  toggleShow = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"
          />
        </Head>
        <LoadingComponent isActive={this.state.loading} />
        <NavComponent />
        <Link href="/">
          <a>Back to home</a>
          {/* <button onClick={this.toggleShow} type="button">
            Toggle Show
          </button> */}
        </Link>
        <hr />
        {this.renderListCard()}
      </div>
    );
  }
}
