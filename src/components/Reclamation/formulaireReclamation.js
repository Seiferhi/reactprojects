import React, { Component } from "react";
class FormulaireReclamation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;

    return (
      <div className="row">
        <form className="callus clearfix border_radius">
          <div className="single-query form-group">
            <label>{item.titre}</label>
            <input
              type="text"
              className="keyword-input"
              placeholder="Titre de réclamation"
            />
          </div>
          <div className="single-query form-group top10">
            <label>{item.message}</label>
            <textarea
              type="text"
              className="keyword-input"
              placeholder="Message"
              style={{ width: "350px" }}
            />
          </div>
          <button type="Envoyer" className="btn-blue border_radius top15">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default FormulaireReclamation;
