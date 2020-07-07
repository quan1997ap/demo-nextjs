import NavComponent from "../../component/nav/nav.component";
import React from "react";
import "isomorphic-fetch";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import router from 'next/router'

// https://fullstackstation.com/huong-dan-xay-dung-universal-javascript-app-voi-next-js/

export default class CardEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetail: {},
    };
  }

  componentDidMount() {
    this.getCardDetail();
  }

  getCardDetail = () => {
    axios({
      method: "get",
      url: "https://api.pokemontcg.io/v1/cards/" + router.query.id,
    })
      .then((res) => {
        this.setState({ cardDetail: res.data.card }, () => {
          console.log(this.state.cardDetail);
        });
      });
  };

  renderCardDetail() {
    if (this.state.cardDetail) {
      return (
        <>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{this.state.cardDetail.name}</li>
          </ul>
          <div className="columns">
            <div className="column col-4">
              <p>
                <img src={this.state.cardDetail.imageUrl} />
              </p>
            </div>
            <div className="column col-8 empty">
              <div className="form-horizontal">
                <div className="form-group">
                  <div className="col-3">
                    <label className="form-label">Name</label>
                  </div>
                  <div className="col-9">
                    <span>{this.state.cardDetail.name}</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-3">
                    <label className="form-label">HP</label>
                  </div>
                  <div className="col-9">
                    <span>{this.state.cardDetail.hp}</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-3">
                    <label className="form-label">Series</label>
                  </div>
                  <div className="col-9">
                    <span>{this.state.cardDetail.series}</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-3">
                    <label className="form-label">Set</label>
                  </div>
                  <div className="col-9">
                    <span>{this.state.cardDetail.set}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div className="container">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="//cdn.bootcss.com/spectre.css/0.1.29/spectre.min.css"
          />
        </Head>
        {this.renderCardDetail()}
      </div>
    );
  }
}
