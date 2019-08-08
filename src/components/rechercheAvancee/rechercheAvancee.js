import React, { Component } from "react";
import Horizontal from "./../sliderRecherche/slider";
import Regions from "./regions";
import "./rechercheAvancee.css";
import Categories from "./categories"
import Statut from "./statut"
import MinLit from "./minLit"
import SalleDeBain from "./salleDeBain"
class RechercheAvancee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handelchange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value }, () =>
      this.props.search(this.state.value)
    );
  };
  render() {
    return (
      <form className="callus">
        <div className="col-md-3 col-sm-6">
          <div className="single-query form-group">
            <input
              type="text"
              className="keyword-input"
              placeholder="Mot clé"
              onChange={this.handelchange}
            />
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-query form-group">
            {/* <div className="intro">
              <select>
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
            </div> */}
            <Regions />
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-query form-group">
            {/* <div className="intro">
              <select>
                <option className="active">Toutes les Catégories</option>
                <option>Appartement</option>
                <option>Bureau</option>
                <option>Local Commerciale</option>
                <option>Maison </option>
                <option>Résidence</option>
                <option>Terre/Terrain</option>
              </select>
            </div> */}
            <Categories/>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-query form-group">
            {/* <div className="intro">
              <select>
                <option> Statut de bien</option>
                <option>Acheter</option>
                <option>Louer </option>
              </select>
            </div> */}
            <Statut/>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" style={{ marginLeft: " -292px" }}>
          <div className="row search-2">
            <div className="col-md-6 col-sm-6">
              <div className="single-query form-group">
                {/* <div className="intro">
                  <select>
                    <option className="active">Min Lits</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div> */}
                <MinLit/>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="single-query form-group">
                {/* <div className="intro">
                  <select>
                    <option className="active">Salle de bain</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div> */}
                <SalleDeBain/>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6"
          style={{ width: "299px", marginLeft: "-4px", marginRight: "-3px" }}
        >
          <div className="row">
            <div className="col-sm-6">
              <div className="single-query form-group">
                <input
                  type="text"
                  className="keyword-input"
                  placeholder="Surface Min(m²)"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-query form-group">
                <input
                  type="text"
                  className="keyword-input"
                  placeholder="Surface Max(m²)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-8">
              <div className="single-query-slider">
                {/* slider */}
                <Horizontal />
              </div>
            </div>
            <div className="col-md-4 text-right form-group">
              <button type="submit" className="btn-blue border_radius top15">
                Recherche
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default RechercheAvancee;
