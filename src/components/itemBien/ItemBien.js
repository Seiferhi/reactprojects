import React, { Component } from "react";
class Itembien extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="col-sm-6">
        <div className="property_item heading_space">
          <div className="image">
            <a href="property_detail1.html">
              <img
                src="images/latest1.jpg"
                alt="latest property"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="price default_clr clearfix bottom20">
            <span className="tag pull-left">{item.statut}</span>
            <h4 className="pull-right">
              {item.prix} - <small>Family Home</small>
            </h4>
          </div>
          <div className="proerty_content">
            <div className="proerty_text">
              <h3 className="bottom15">
                {" "}
                <a href="property_detail1.html">{item.titre}</a>
              </h3>
              <p>{item.parag}</p>
            </div>
            <div className="favroute clearfix">
              <p className="pull-md-left">Tunisie</p>
              <ul className="pull-right">
                <li>
                  <a href="javascript:void(0)">
                    <i className="icon-video-player" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="icon-like" />
                  </a>
                </li>
                <li>
                  <a
                    href="#one"
                    className="share_expender"
                    data-toggle="collapse"
                  >
                    <i className="icon-share3" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle_share collapse" id="one">
              <ul>
                <li>
                  <a href="javascript:void(0)" className="facebook">
                    <i className="icon-facebook-1" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="twitter">
                    <i className="icon-twitter-1" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="vimo">
                    <i className="icon-vimeo3" /> Vimeo
                  </a>
                </li>
              </ul>
            </div>
            <div className="property_meta">
              {" "}
              <span>
                <i className="icon-select-an-objecto-tool" />
                {item.surface}
              </span>{" "}
              <span>
                <i className="icon-bed" />
                {item.salleDeBain}
              </span>{" "}
              <span>
                <i className="icon-safety-shower" />
                {item.chambre}
              </span>{" "}
              <span>
                <i className="icon-old-television" />
                {item.tv}
              </span>{" "}
              <span>
                <i className="icon-garage" />1 Garage
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Itembien;
