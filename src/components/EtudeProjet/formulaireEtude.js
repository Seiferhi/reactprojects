import React, { Component } from "react";
import "./EtudeProjet.css";
class FormulaireEtude extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <dir>
        <form className="callus" style={{ paddingTop: "25px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={item.nom}
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
              placeholder={item.email}
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
              placeholder={item.tel}
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
              placeholder={item.profession}
              style={{
                backgroundColor: " #ffffff0a",
                fontSize: "18px",
                color: "white"
              }}
              defaultValue={""}
            />
          </div>
        </form>

        <div className="col-sm-6 bottom40">
          <h3>Votre Projet</h3>

          <form className="callus" style={{ paddingTop: "25px" }}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder={item.tire}
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
                placeholder={item.Budget}
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
                placeholder={item.localitation}
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
                placeholder={item.description}
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
      </dir>
    );
  }
}

export default FormulaireEtude;
