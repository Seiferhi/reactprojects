import React, { Component } from "react";

import Slider from "react-rangeslider";

import "./slider.css"

class Horizontal extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render() {
    const { value } = this.state
    return (
      <div className='slider'>
        <div className="price text-right">

          <div className='value'>
            {value} <span>DT</span></div>


        </div>

        <Slider
          min={100}
          max={100000000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />

      </div>
    )
  }
}

export default Horizontal
