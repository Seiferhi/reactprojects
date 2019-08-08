import React, { Component } from "react";
import "./Conseils.css";
import ListConseil from "./listConseil";

class Conseils extends Component {
  render() {
    return (
      <div className="Conseils">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase">DÉTAILS DE LA PROPRIÉTÉ - 2</h1>
                <p>
                  Serving you since 1999. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit.
                </p>
                <ol className="breadcrumb text-center">
                  <li>
                    <a href="#">Acceuil</a>
                  </li>
                  <li>
                    <a href="#">Propriétés</a>
                  </li>
                  <li className="active">DÉTAILS DE LA PROPRIÉTÉ - 2</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Property Detail */}
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 listing1 property-details">
                <h2 className="text-uppercase bottom20">
                  Vidéo de Présentation
                </h2>
                <div className="row bottom40" style={{ width: " 70%;" }}>
                  <div className="col-md-12 padding-b-20">
                    <div className="pro-video">
                      <figure className="wpf-demo-gallery">
                        <video className="video" controls>
                          <source src="video/video.mp4" type="video/mp4" />
                          <source src="video/video.html" type="video/ogg" />
                        </video>
                      </figure>
                    </div>
                  </div>
                </div>
                <h2 className="text-uppercase"> A Propos</h2>
                <div className="parag">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et dui vestibulum, bibendum purus sit amet, vulputate mauris.
                  Ut adipiscing gravida tincidunt. Duis euismod placerat
                  rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis
                  nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem,
                  a aliquam mauris rutrum a. Curabitur sit amet pretium lectus,
                  nec consequat orci.
                </div>
                <div className="parag">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis et metus in libero
                  sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit
                  ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet
                  quis placerat nec, molestie id turpis.{" "}
                </div>
                <div className="parag">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam power nonummy nibh tempor cum soluta nobis eleifend
                  option congue nihil imperdiet doming Lorem ipsum dolor sit
                  amet. consectetuer elit sed diam power nonummy
                </div>

                <div className="row">
                  {/* <div className="col-sm-6 bottom40">
                    <h2 className="text-uppercase bottom20">Contact Agent</h2>
                    <form className="callus">
                      <label>
                        <h4>Nom & prénom :</h4>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nom & prénom"
                          style={{ width: " 500px;" }}
                        />
                      </div>
                      <label>
                        <h4>Téléphone :</h4>
                      </label>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Téléphone"
                          style={{ width: " 500px;" }}
                        />
                      </div>
                      <label>
                        <h4>Email :</h4>
                      </label>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          style={{ width: " 500px;" }}
                        />
                      </div>
                      <label>
                        <h4>Non d'agent :</h4>
                      </label>
                      <div className="form-group">
                        <select id="pet-select" style={{ width: " 554px" }}>
                          <option value="">
                            s'il vous plaît choisissez un agent pour vous aider
                          </option>
                          <option value="dog">agent1</option>
                          <option value="cat">agent2</option>
                          <option value="hamster">agent3</option>
                        </select>
                      </div>
                      <label>
                        <h4>Message :</h4>
                      </label>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                          style={{ width: " 500px;" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-blue uppercase border_radius"
                        defaultValue="Envoyer"
                      >
                        Envoyer
                      </button>
                    </form>
                  </div> */}
                  <ListConseil />
                  <div
                    className="col-sm6 bottom-40 text-it-p"
                    style={{ marginRight: "37px;" }}
                  >
                    <h2 className="text-uppercase bottom20">Contact Agent</h2>
                    <div className="parag">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras et dui vestibulum, bibendum purus sit amet, vulputate
                      mauris. Ut adipiscing gravida tincidunt. Duis euismod
                      placerat rhoncus. Phasellus mollis imperdiet placerat. Sed
                      ac turpis nisl. Mauris at ante mauris. Aliquam posuere
                      fermentum lorem, a aliquam mauris rutrum a. Curabitur sit
                      amet pretium lectus, nec consequat orci. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Duis et metus in libero sollicitudin
                      venenatis eu sed enim. Nam felis lorem, suscipit ac nisl
                      ac, iaculis dapibus tellus. Cras ante justo, aliquet quis
                      placerat nec, molestie id turpis. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam power nonummy
                      nibh tempor cum soluta nobis eleifend option congue nihil
                      imperdiet doming Lorem ipsum dolor sit amet. consectetuer
                      elit sed diam power nonummy Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Cras et dui vestibulum,
                      bibendum purus sit amet, vulputate mauris. Ut adipiscing
                      gravida tincidunt. Duis euismod placerat rhoncus.
                      Phasellus mollis imperdiet placerat. Sed ac turpis nisl.
                      Mauris at ante mauris. Aliquam posuere fermentum lorem, a
                      aliquam mauris rutrum a. Curabitur sit amet pretium
                      lectus, nec consequat orci. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Duis et metus in libero sollicitudin venenatis
                      eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis
                      dapibus tellus. Cras ante justo, aliquet quis placerat
                      nec, molestie id turpis. Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit, sed diam power nonummy nibh
                      tempor cum soluta nobis eleifend option congue nihil
                      imperdiet doming Lorem ipsum dolor sit amet. consectetuer
                      elit sed diam power nonummy Cras ante justo, aliquet quis
                      placerat nec, molestie id turpis. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam power nonummy
                      nibh tempor cum soluta nobis eleifend option congue nihil
                      imperdiet doming Lorem ipsum dolor sit amet. consectetuer
                      elit sed diam power nonummy
                    </div>
                  </div>

                  <div className="col-sm-12 text-center">
                    <ul className="pager">
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Property Detail End */}
      </div>
    );
  }
}

export default Conseils;
