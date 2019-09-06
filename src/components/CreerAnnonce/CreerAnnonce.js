import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import NavBar from "./navBar";
import TextEditor from "./textEditor"
import GoogleApiWrapper from '../google-map/googleMap';
 import { MDBInput } from 'mdbreact';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import Checkbox from './checkbox';
const BASE_URL = 'http://localhost:8080/';
class CreerAnnonce extends Component {

  constructor() {
    super();
    this.state = {
      titre:"",
      region:"",
      surface:"",
      prix: "",
      nombreEtage: "",
      nombrePiece: "",
      nombreFacade: "",
      nombreSalleDeBain: "",
      statut: "",
      description:"",
      ALaUne: "",
      ValableAPartirDe: "",
      etat: "",
      categories: "",
      options: new Map(),
      images: [],
      imageUrls: [],
      message: ""
     
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
 
  }
 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ options: prevState.options.set(item, isChecked) }));
  }; 
  selectImages = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
    images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
    }
     
    uploadImages = () => {
    const uploaders = this.state.images.map(image => {
    const data = new FormData();
    data.append("image", image, image.name);
     
    // Make an AJAX upload request using Axios
    return axios.post(BASE_URL + 'upload', data)
    .then(response => {
    this.setState({
    imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
    });
    })
    });
     
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
    console.log('done');
    }).catch(err => alert(err.message));
    }

  onSubmit(e) {
    e.preventDefault();

    const bienImmobilier = {
      titre: this.state.titre,
      region: this.state.region,
      surface: this.state.surface,
      prix: this.state.prix,
      nombreEtage: this.state.nombreEtage,
      nombrePiece: this.state.nombrePiece,
      nombreFacade: this.state.nombreFacade,
      nombreSalleDeBain: this.state.nombreSalleDeBain,
      statut: this.state.statut,
      description: this.state.description,
      ALaUne: this.state.ALaUne,
      ValableAPartirDe: this.state.ValableAPartirDe,
      etat: this.state.etat,
      categories: this.state.categories,
      options: this.state.options,
      image: this.state.image
     
      
    };
    console.log(bienImmobilier)

    axios
      .post("http://localhost:8080/bienImmobiliers/add", bienImmobilier)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }


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
             <NavBar/>
            </div>

            <div className="row">
              <div className="col-sm-1 col-md-2" />
              <div className="col-sm-10 col-md-8">
                <h2 className="text-uppercase bottom40">
                  Ajouter votre Propriété
                </h2>
                <form className="callus clearfix border_radius submit_property"onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                        <label>Titre</label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="Entrer le titre de votre bien"
                          name="titre"
                          value={this.state.titre}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
     
                   
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                          <label>Catégories</label>
                              <select 
                               value={this.state.categories}
                               onChange={this.onChange}
                               name="categories"
                               >
                                <option className="active" value="Appartement">Appartement</option>
                                <option className="active" value="Bureau">Bureau</option>
                                <option className="active"value="LocalCommerciale">Local Commerciale</option>
                                <option className="active"value="Maison">Maison </option>
                                <option className="active"value="Terrain">Résidence</option>
                                <option className="active"value="Residence">Terre/Terrain</option>
                                <option className="active"value="Villa">Villa</option>
                              </select>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="single-query form-group bottom20" style={{marginTop: "-8px"}}>
                            <label>region</label>
                            <select 
                             name="region"
                             value={this.state.region}
                             onChange={this.onChange}>
                             <option >Localisation</option>
                                <option>Ariana </option>
                                <option>Beja</option>
                                <option>Ben Arous</option>
                                <option>Bizerte</option>
                                <option>Gabes</option>
                                <option>Gafsa</option>
                                <option>Jendouba</option>
                                <option>Kairouan</option>
                                <option>Kasserine</option>
                                <option>Kebili</option>
                                <option>Kef</option>
                                <option>Mahdia</option>
                                <option>Mannouba</option>
                                <option>Medenine</option>
                                <option>Monastir</option>
                                <option>Nabeul</option>
                                <option>Sfax</option>
                                <option>Sidi Bouzid</option>
                                <option>Siliana</option>
                                <option>Sousse</option>
                                <option>Tataouine</option>
                                <option>Touzeur</option>
                                <option>Tunis</option>
                                <option>Zaghouan</option>
                              </select>
                            </div>
                         </div>

                            <div className="col-md-6">
                            <div className="form-group has-danger">
                              <label className="control-label">
                                Valables A Partir De
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="dd/mm/yyyy"
                                onChange={this.onChange}
                                value={this.state.ValableAPartirDe}
                                name="ValableAPartirDe"
                              />
                            </div>
                          </div>
                        
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                        <label>Prix</label>
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="Entrer le titre de votre bien"
                          name="titre"
                          value={this.state.prix}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
     
                   
                    <div className="col-sm-6">
                      <div className="single-query form-group bottom20"style={{marginTop: "-102px"}}>
                      
                        <label>Statut
                              </label>
                              {/* <div className="intro"> */}
                              <select 
                               value={this.state.categories}
                               onChange={this.onChange}
                               name="categories"
                               >
                                <option className="active" value="A louer">A louer</option>
                                <option className="active" value="A Vendre">A Vendre</option>
                                
                              </select>
                            </div>
                      </div>
                  </div>
                </form>
              
                <div className="row">
                  <div className="col-sm-12" style={{marginTop: "-19px;",
    marginBottom: "23px"}}>
                    <h3 className="bottom15 margin40">
                      Détails de la propriété
                    </h3>
                  </div>
                </div>

            <form className="callus clearfix border_radius submit_property"onSubmit=   {this.onSubmit}>
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
                            name="surface"
                               value={this.state.surface}
            onChange={this.onChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-sm-4">
                      <div className="single-query form-group bottom20">
                        <label>Salle de bains</label>
                        <div className="intro">
                        
                          <select name="nombreSalleDeBain"
                               value={this.state.nombreSalleDeBain}
            onChange={this.onChange}>
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
                        
                          <select  name="nombrePiece"
                               value={this.state.nombrePiece}
            onChange={this.onChange}>
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
                        name="nombreFacade"
                               value={this.state.nombreFacade}
            onChange={this.onChange}
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
                      {/* <form onSubmit={this.onSubmit}
                        id="upload-widget"
                        method="post"
                        action="http://wahabali.com/upload"
                        className="dropzone"
                   
                      > */}
                      <div className="col-sm-12">
<div className="col-sm-4">
<input className="form-control " type="file" 
onChange={this.selectImages} multiple  style={{height: "188px",
  width: "683px"}}/>
</div>
<p className="text-info">{this.state.message}</p>
<br/><br/><br/>
<div className="col-sm-4">
<button className="btn btn-primary" value="Submit" 
onClick={this.uploadImages}>Submit</button>
</div>
</div>

<div className="row col-lg-12">
{ 
this.state.imageUrls.map((url, i) => (
<div className="col-lg-2" key={i}>
<img src={BASE_URL + url} className="img-rounded img-responsive"
alt="not available"/><br/>
</div>
))
}
 </div>
                        <div className="dz-default dz-message">
                          <span>
                            <i className="fa fa-plus-circle" />
                            Cliquez ici pour déposer des fichiers à télécharger
                          </span>
                        </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
                    <div className="col-sm-12">
                      <h3 className="bottom15 margin40"></h3>
                      <br/>

                      {/* <MyUploader /> */}
                      {/* <textarea id="txtEditor" defaultValue={""} />*/}
                    </div> 
                 

                 <div className="col-sm-12">
                      <h3 className="bottom15 margin40">Options</h3>
                      <div className="search-propertie-filters">
                        <div className="container-2">
                          <div className="row">
                            <div className="col-md-8 col-sm-8">
                              <div className="form-group white">
                              
                              <React.Fragment>
        {
          checkboxes.map(item => (
            <label key={item.key} style={{fontSize:"16px"}}>
              
              <Checkbox name={item.name}
               checked={this.state.options.get(item.name)} 
               onChange={this.handleChange} 
              />{item.name}
            </label>
          ))
        }
      </React.Fragment>
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
                    
                    <TextEditor/>
                    
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
                      <div id="single_map" >
                      <GoogleApiWrapper/>
                      </div>
                    </div> 
                    <div className="col-md-4"style={{marginTop: "138px"}}>
                      <button
                        type="submit"
                        className="btn-blue border_radius margin40"onSubmit={this.onSubmit}
                        style={{height:"60px"}}
                      >
                      <Link to="/mesProprietes">
                        Envoyer
                        </Link>
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
