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
import ListeBienRecomande from "../listeBienRecomande/listeBienRecomande";
import axios from "axios";
import ItemList from "../itemList/itemList";
import BienRecherchee from "../BienRecherchee/BienRecherchee";
import BienRecommande from "../bienRecomande/bienRecomande";
class RechercheAvancee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: false,
      ecart: "",
      paginationList: [],
      nbrPages: 0,
      showList: [],
      filtredList: [],
      titre: "", region: "", categorie: "", statut: "", minLit: "",
      salleDeBain: "", surfaceMin: "", surfaceMax: "", prix: "",
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

  filtering = (bienImonilier, recherche) => {
    if (recherche.ecart != "") recherche.ecart = +recherche.ecart;
    else recherche.ecart = 0;
    return (
      (recherche.region ? bienImonilier.region == recherche.region : true) &&
      (recherche.statut ? bienImonilier.statut == recherche.statut : true) &&
      (recherche.categorie ? bienImonilier.categories == recherche.categorie : true) &&
      (recherche.surfaceMin ? bienImonilier.surface >= recherche.surfaceMin : true) &&
      (recherche.surfaceMax ? bienImonilier.surface <= recherche.surfaceMax : true) &&
      (recherche.prix ? (bienImonilier.prix >= Math.abs(+recherche.prix - recherche.ecart) && (bienImonilier.prix <= Math.abs(+recherche.prix + recherche.ecart))) : true)

    )
  }

  search = () => {

    axios
      .get("http://localhost:8080/bienImmobiliers/all")
      .then(res => {
        let result = res.data.filter(el => this.filtering(el, this.state));
        this.setState({
          filtredList: result
        });
        this.setState({
          // Pagination
          // Show only three item
          showList: this.state.filtredList.filter((el, index) => index < 3),
          nbrPages: Math.ceil(this.state.filtredList.length / 3)

        }, () => {
          let pages = [];
          for (let i = 0; i < this.state.nbrPages; i++) {
            pages = [...pages, i];
          }
          this.setState({ paginationList: pages })

        });
        this.setState({ searched: true });


      })
      .catch(err => console.log(err.response.data));

    // Add search to redux store
    // this.props.addSearch(this.state);
  }

  // For pagination
  show = (index) => {
    let result = this.state.filtredList.slice(index, index + 3);
    this.setState({ showList: result });
  }

  render() {
    return (
      <div>
        <div>
          {/* <ul>
          Juste pour les test :
          {
            this.props.listes.map(el => {
              return <li> titre : {el.titre} , region : {el.region} , categorie : {el.categorie} , prix : {el.prix}</li>
            })
          }
        </ul> */}
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
                  <option value="">Toutes Les Régions</option>
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
                  <option value="">Toutes les Catégories</option>
                  <option>Appartement</option>
                  <option>Bureau</option>
                  <option>Local Commerciale</option>
                  <option>Maison</option>
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
                  <option value=""> Statut de bien</option>
                  <option>A Vendre</option>
                  <option>A louer</option>
                </select>
              </div>
              {/* <Statut /> */}
            </div>
            <div className="col-md-6">
              <div className="col-md-3 col-sm-6">
                <div className=" form-group">
                  <select name="minLit"
                    disabled={this.state.categorie != 'Résidence' && this.state.categorie != 'Maison'}
                    value={this.state.minLit}
                    onChange={this.handleInputChange}
                    style={{ width: "100%" }}>
                    <option className="active" value="">Min Lits</option>
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
                    disabled={this.state.categorie != 'Résidence' && this.state.categorie != 'Maison'}
                    name="salleDeBain"
                    style={{ width: "100%" }}
                    value={this.state.salleDeBain}
                    onChange={this.handleInputChange} >
                    <option className="active" value="">Salle de bain</option>
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
              <div className="col-md-4 form-group">
                <input
                  name="prix"
                  style={{ width: "100%" }}
                  type="text"
                  value={this.state.prix}
                  onChange={this.handleInputChange}
                  className="keyword-input"
                  placeholder="Prix"
                />
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select
                    disabled={!this.state.prix}
                    name="ecart"
                    style={{ width: "100%" }}
                    value={this.state.ecart}
                    onChange={this.handleInputChange} >
                    <option className="active" value="0">+/-</option>
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                    <option>500</option>
                    <option>1000</option>
                    <option>10000</option>
                    <option>50000</option>
                    <option>100000</option>
                  </select>
                  {/* <SalleDeBain /> */}
                </div>
              </div>

              {/* <div className="single-query-slider"> */}
              {/* slider */}
              {/* <Horizontal sliderChange={value => this.sliderChange(value)} /> */}
              {/* </div> */}

              <div className="col-md-4 text-right form-group">
                <button type="button" onClick={this.search} className="btn-blue border_radius top15" >
                  Recherche
                </button>
              </div>
            </div>

          </form>

        </div >
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="uppercase">Resultat de recherhce </h2>
                <p className="heading_space"> Nous sommes fiers de vous présenter certaines des meilleures maisons, appartements, bureaux , avec les meilleurs prix.
                {this.state.filtredList.length > 0 ? <h2 className="uppercase text-center">
                    {this.state.filtredList.length} item{this.state.filtredList.length > 1 ? "s" : null} found </h2>
                    : null}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="row">
                {this.state.showList.length > 0 ? this.state.showList.map(el => <BienRecherchee item={el} />) : this.state.searched ?
                  <div className="alert alert-danger text-center">No item found</div> : null
                }
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center top15">
                <ul className="pager">

                  {this.state.paginationList.map(el => {
                    return <li><a onClick={() => this.show(el * 3)}>{el}</a></li>
                  }
                  )}

                </ul>
              </div>
            </div>
          </div>
        </section>

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
