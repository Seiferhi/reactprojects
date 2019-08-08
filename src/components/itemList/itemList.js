import React, { Component } from "react";
import { connect } from "react-redux";

import Itembien from "./../itemBien/ItemBien";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { liste } = this.props;
    return (
      <div>
        {liste.map((el, index) => (
          <Itembien key={index} item={el} />
        ))}
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     myListe: state.reducerhome
//   };
// };

export default ItemList;
