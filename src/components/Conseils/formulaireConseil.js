import React, { Component } from "react";
import "./Conseils.css";
class FormulaireConseil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="col-sm-6 bottom40">
        <h2 className="text-uppercase bottom20">Contact Agent</h2>
        <form className="callus">
          <label>
            <h4>{item.nom}</h4>
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
            <h4>{item.tel}</h4>
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
            <h4>{item.email}</h4>
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
            <h4>{item.agent}</h4>
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
            <h4>{item.message}</h4>
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
      </div>
    );
  }
}

export default FormulaireConseil;
