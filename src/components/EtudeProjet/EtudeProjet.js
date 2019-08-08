import React, { Component } from "react";

import ListEtude from "./listEtude";

class EtudeProjet extends Component {
  render() {
    return (
      <div className="EtudeProjet">
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
                          <div className="form-group">
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
                            <textarea
                              className="form-control"
                              placeholder="Proféssion & Description"
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                              defaultValue={""}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-6 bottom40">
                        <h3>Votre Projet</h3>

                        <form className="callus" style={{ paddingTop: "25px" }}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Titre"
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="Budget"
                              className="form-control"
                              placeholder="Phone Number"
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="localitation"
                              className="form-control"
                              placeholder="Email"
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
                              placeholder="Description du projet"
                              style={{
                                backgroundColor: " #ffffff0a",
                                fontSize: "18px",
                                color: "white"
                              }}
                              defaultValue={""}
                            />
                          </div>
                        </form>
                      </div>
                      <ListEtude />
                    </div>

                    <a href="#." className="btn-blue border_radius">
                      Soumettre
                    </a>
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
export default EtudeProjet;
