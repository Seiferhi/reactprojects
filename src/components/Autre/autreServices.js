import React, { Component } from "react";
import "./Autre.css";

class AutreServices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="AutreServices">
        <div className="form-group -animated">
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
          <input
            type="tel"
            className="form-control"
            placeholder={item.titre}
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
      </div>
    );
  }
}

export default AutreServices;
