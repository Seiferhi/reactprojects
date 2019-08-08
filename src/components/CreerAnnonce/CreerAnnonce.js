import React, { Component } from "react";

class CreerAnnonce extends Component {
  render() {
    return (
      <div className="CreerAnnonce">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase">Propriétés favorites </h1>
                <p>
                  Serving you since 1999. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit.
                </p>
                <ol className="breadcrumb text-center">
                  <li>
                    <a href="#">Acceuil</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li className="active">Ma Propriété</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* My Properties  */}
        <section id="property" className="padding listing1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="f-p-links margin_bottom">
                  <li>
                    <a href="profile.html">
                      <i className="icon-icons230" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="my_properties.html">
                      <i className="icon-icons215" /> Ma Propriété
                    </a>
                  </li>
                  <li>
                    <a href="submit_property.html" className="active">
                      <i className="icon-icons215" /> Soumettre la propriété
                    </a>
                  </li>
                  <li>
                    <a href="favorite_properties.html">
                      <i className="icon-icons43" /> Propriétés favorites{" "}
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="icon-lock-open3" />
                      Déconnexion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1 col-md-2" />
              <div className="col-sm-10 col-md-8">
                <h2 className="text-uppercase bottom40">
                  Ajouter votre Propriété
                </h2>
                <form className="callus clearfix border_radius submit_property">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                        <label>Titre</label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="Entrer le titre de votre bien"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                        <label>Localisation</label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="Enter la localisation de votre bien"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="single-query bottom20">
                        <label>Statut</label>
                        <div className="intro">
                          <select>
                            <option className="active">A vendre</option>

                            <option>A louer </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                        <label>Prix</label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="23,000"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="margin40 bottom15">
                      {" "}
                      Photos de la Propriété{" "}
                      <i
                        className="fa fa-info-circle help"
                        data-toggle="tooltip"
                        title="add images to upload for property!"
                      />
                    </h3>
                    <div className="file_uploader bottom20">
                      <form
                        id="upload-widget"
                        method="post"
                        action="http://wahabali.com/upload"
                        className="dropzone"
                      >
                        <div className="dz-default dz-message">
                          <span>
                            <i className="fa fa-plus-circle" />
                            Cliquez ici pour déposer des fichiers à télécharger
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="bottom15 margin40">
                      Détails de la propriété
                    </h3>
                  </div>
                </div>
                <form className="callus clearfix border_radius submit_property">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-query form-group bottom20">
                        <label>Surface</label>
                        <div className="intro">
                          <input
                            type="text"
                            className="keyword-input"
                            placeholder="Surface (m²)"
                            style={{ paddingTop: "2px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-query form-group bottom20">
                        <label>Salle de bains</label>
                        <div className="intro">
                          <select>
                            <option className="active">
                              Nombre de salle de bains
                            </option>
                            <option>1</option>
                            <option>2 </option>
                            <option>3</option>
                            <option>4 ou +</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-query  form-group bottom20">
                        <label>Chambres</label>
                        <div className="intro">
                          <select>
                            <option className="active">
                              Nombre des piéces
                            </option>
                            <option>1</option>
                            <option>2 </option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6 ou +</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-query form-group bottom20">
                        <label>Garges</label>
                        <div className="intro">
                          <select>
                            <option className="active">Nombre de Garges</option>
                            <option>0</option>
                            <option>1 </option>
                            <option>2 ou +</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-query form-group  bottom20">
                        <label>Etage</label>
                        <div className="intro">
                          <select>
                            <option className="active">
                              Nombre des étages
                            </option>
                            <option>1</option>
                            <option>2 </option>
                            <option>3 ou plus</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div
                        className="single-query form-group bottom20"
                        style={{ marginTop: "-102px" }}
                      >
                        <label>Façade</label>
                        <div className="intro">
                          <select>
                            <option className="active">Nombre de Façade</option>
                            <option>1</option>
                            <option>2 </option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h3 className="bottom15 margin40">
                        Déscription de la propriété{" "}
                      </h3>
                      <textarea id="txtEditor" defaultValue={""} />
                    </div>

                    <div className="col-sm-12">
                      <h3 className="bottom15 margin40">Options</h3>
                      <div className="search-propertie-filters">
                        <div className="container-2">
                          <div className="row">
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>Piscine</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>Jardin</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>Interphone</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>Parabole / TV</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>Accès internet</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span> Vue de mer</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span> Terrasses</span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>cameras de surveillance </span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>chauffage </span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>climatisation </span>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="search-form-group white">
                                <input type="checkbox" name="check-box" />
                                <span>Balcon</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h3 className="bottom15 margin40">
                        Vidéo de Présentation
                      </h3>
                      <div className="single-query form-group bottom15">
                        <label>URL Vidéos ou Youtube </label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="https://vimeo.com/"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h3 className="bottom15 margin40">Placez sur la carte</h3>
                      <div className="single-query form-group bottom15">
                        <label> Addresse de la propriété</label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="Enter La Localisation"
                        />
                      </div>
                      <div id="single_map" />
                    </div>
                    <div className="col-md-4">
                      <button
                        type="submit"
                        className="btn-blue border_radius margin40"
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-1 col-md-2" />
              <div className="col-sm-4" />
            </div>
          </div>
        </section>
        {/* My Properties End */}
      </div>
    );
  }
}

export default CreerAnnonce;
