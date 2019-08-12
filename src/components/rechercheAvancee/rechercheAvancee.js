import React, { Component } from "react";
import { connect } from "react-redux"
import Horizontal from "./../sliderRecherche/slider";
import Regions from "./regions";
import "./rechercheAvancee.css";
import Categories from "./categories"
import Statut from "./statut"
import MinLit from "./minLit"
import SalleDeBain from "./salleDeBain"
import store from "../../store/index";
class RechercheAvancee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: '', region: '', categorie: '', statut: '', minLit: '',
      salleDeBain: '', surfaceMin: '', surfaceMax: '', prix: 100
    }
  }

  sliderChange(value) {
    this.setState({ prix: value });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  search = () => {
    console.log(this.state);
    // Add search to redux store
    this.props.addSearch(this.state);
  }

  render() {
    return (
      <div>
        <ul>
          Juste pour les test :
          {
            this.props.listes.map(el => {
              return <li> titre : {el.titre} , region : {el.region} , categorie : {el.categorie} , prix : {el.prix}</li>
            })
          }
        </ul>
        <form className="callus col-xs-12" onSubmit={e => { e.preventDefault(); }}  >
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <input
                style={{ width: "100%" }}
                type="text"
                className="keyword-input"
                placeholder="Mot clé"
                name="titre"
                value={this.state.titre}
                onChange={this.handleInputChange} />

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <select name="region"
                value={this.state.region}
                onChange={this.handleInputChange}
                style={{ width: "100%" }}>
                <option>Toutes Les Régions</option>
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
            {/* <Regions /> */}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <select
                style={{ width: "100%" }}
                name="categorie" value={this.state.categorie}
                onChange={this.handleInputChange} >
                <option>Toutes les Catégories</option>
                <option>Appartement</option>
                <option>Bureau</option>
                <option>Local Commerciale</option>
                <option>Maison </option>
                <option>Résidence</option>
                <option>Terre/Terrain</option>
              </select>
              {/* <Categories /> */}
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <select name="statut"
                value={this.state.statut}
                onChange={this.handleInputChange}
                style={{ width: "100%" }}>
                <option> Statut de bien</option>
                <option>Acheter</option>
                <option>Louer </option>
              </select>
            </div>
            {/* <Statut /> */}
          </div>
          <div className="col-md-6">
            <div className="col-md-3 col-sm-6">
              <div className=" form-group">
                <select name="minLit"
                  value={this.state.minLit}
                  onChange={this.handleInputChange}
                  style={{ width: "100%" }}>
                  <option className="active">Min Lits</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              {/* <MinLit /> */}
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <select
                  name="salleDeBain"
                  style={{ width: "100%" }}
                  value={this.state.salleDeBain}
                  onChange={this.handleInputChange} >
                  <option className="active">Salle de bain</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
                {/* <SalleDeBain /> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className=" form-group">
                <input
                  style={{ width: "100%" }}
                  type="text"
                  name="surfaceMin"
                  value={this.state.surfaceMin}
                  onChange={this.handleInputChange}
                  className="keyword-input"
                  placeholder="Surface Min(m²)"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">


              <div className=" form-group">
                <input
                  name="surfaceMax"
                  style={{ width: "100%" }}
                  type="text"
                  value={this.state.surfaceMax}
                  onChange={this.handleInputChange}
                  className="keyword-input"
                  placeholder="Surface Max(m²)"
                />
              </div>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="col-md-8">
              <div className="single-query-slider">
                {/* slider */}
                <Horizontal sliderChange={value => this.sliderChange(value)} />
              </div>
            </div>
            <div className="col-md-4 text-right form-group">
              <button type="button" onClick={this.search} className="btn-blue border_radius top15" >
                Recherche
                </button>
            </div>
          </div>

        </form>
      </div >

    );
  }
};


const mapStateToProps = (state) => {
  return { listes: state.recherche.listes };
};

const mapDispatchToProps = (dispatch) => {
  return { addSearch: (search) => dispatch({ type: 'ADD_SEARCH', payload: search }) }
};

export default connect(mapStateToProps, mapDispatchToProps)(RechercheAvancee);
