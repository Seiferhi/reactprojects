import React, { Component } from "react";
import ListReclamation from "./listReclamation";

class Reclamation extends Component {
  render() {
    return (
      <div className="Reclamation">
        {/*bg image */}
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 text-left">
                <h1 className="uppercase">
                  <span>We don’t just find Great Deals</span> We Create them
                </h1>
                <p className="bottom30">
                  We have Properties in these Areas Discover your place to live
                  Get started in few clicks
                </p>
              </div>
              <div className="col-sm-4">
                {/* <div className="row">
                  <form className="callus clearfix border_radius">
                    <div className="single-query form-group">
                      <label>Titre de réclamation :</label>
                      <input
                        type="text"
                        className="keyword-input"
                        placeholder="Titre de réclamation"
                      />
                    </div>
                    <div className="single-query form-group top10">
                      <label>Message :</label>
                      <textarea
                        type="text"
                        className="keyword-input"
                        placeholder="Message"
                        style={{ width: "350px" }}
                      />
                    </div>
                    <button
                      type="Envoyer"
                      className="btn-blue border_radius top15"
                    >
                      Envoyer
                    </button>
                  </form>
                </div> */}
                <ListReclamation />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Reclamation;
