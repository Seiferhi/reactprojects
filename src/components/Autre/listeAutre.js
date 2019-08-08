import React, { Component } from "react";
import AutreServices from "./autreServices";

var myList = [
  {
    nom: "Nom & prénom ",
    email: "Adrresse Email",
    tel: "Téléphone ",
    titre: "Titre de Sevice demandé ",
    description: "Description"
  }
];
class ListeAutre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <AutreServices key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListeAutre;
