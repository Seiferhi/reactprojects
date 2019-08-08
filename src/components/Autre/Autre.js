import React, { Component } from "react";
import "./Autre.css";
import ListeAutre from "./listeAutre";

class Autre extends Component {
  render() {
    return (
      <div className="Autre">
        {/*Fullscreen*/}
        <section className="fullscreen">
          <div className="container">
            <div className="row">
              <div className="fullscreen_inner centered">
                <div className="col-sm-12" style={{ marginTop: "390px" }}>
                  <div className="text-center">
                    <div className="row">
                      <div className="col-sm-6 bottom40">
                        <h3>Informations Perssonnelles</h3>
                        <form className="callus" style={{ paddingTop: "25px" }}>
                          <ListeAutre />
                          {/* <div className="form-group -animated">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nom & prénom "
                              style={{
                                backgroundColor: "#ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="adress"
                              className="form-control"
                              placeholder="Adrresse Email"
                              style={{
                                backgroundColor: "#ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Téléphone "
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Titre de Sevice demandé "
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Description"
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                              defaultValue={""}
                            />
                          </div> */}
                        </form>
                        <a
                          href="#."
                          className="btn-blue border_radius"
                          style={{ marginRight: "613px", width: "590px" }}
                        >
                          Soumettre
                        </a>
                      </div>
                      <div className="col-sm-6 bottom40">
                        <h3>A propos ce service</h3>

                        <div className="paragraph">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras et dui vestibulum, bibendum purus sit amet,
                          vulputate mauris. Ut adipiscing gravida tincidunt.
                          Duis euismod placerat rhoncus. Phasellus mollis
                          imperdiet placerat. Sed ac turpis nisl. Mauris at ante
                          mauris. Aliquam posuere fermentum lorem, a aliquam
                          mauris rutrum a. Curabitur sit amet pretium lectus,
                          nec consequat orci. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos. Duis et metus in libero sollicitudin
                          venenatis eu sed enim. Nam felis lorem, suscipit ac
                          nisl ac, iaculis dapibus tellus. Cras ante justo,
                          aliquet quis placerat nec, molestie id turpis. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam power nonummy nibh tempor cum soluta nobis
                          eleifend option congue nihil imperdiet doming Lorem
                          ipsum dolor sit amet. consectetuer elit sed diam power
                          nonummy Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras et dui vestibulum, bibendum
                          aliquet quis placerat nec, molestie id turpis. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam power nonummy nibh tempor cum soluta nobis
                          eleifend option congue nihil imperdiet doming Lorem
                          ipsum dolor sit amet. consectetuer elit sed diam power
                          nonummy Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras et dui vestibulum,
                          bibendumaliquet quis placerat nec, molestie id turpis.
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam power nonummy nibh tempor cum soluta
                          nobis eleifend option congue nihil imperdiet doming
                          Lorem ipsum dolor sit amet. consectetuer elit sed diam
                          power nonummy Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras et dui vestibulum, bibendum
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Autre;
