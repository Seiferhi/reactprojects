import React, { Component } from "react";

class LoginItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="agent-p-form">
        <form action="#" className="callus clearfix">
          <div className="single-query form-group col-sm-12">
            <input
              type="text"
              className="keyword-input"
              placeholder="username"
            />
          </div>
          <div className="single-query form-group  col-sm-12">
            <input
              type="text"
              className="keyword-input"
              placeholder="Email Address"
            />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-6">
                <div className="search-form-group white form-group text-left">
                  <div className="check-box-2">
                    <i>
                      <input type="checkbox" name="check-box" />
                    </i>
                  </div>
                  <span>Remember Me</span>
                </div>
              </div>
              <div className="col-sm-6 text-right">
                <a href="#" className="lost-pass">
                  Lost your password?
                </a>
              </div>
            </div>
          </div>
          <div className=" col-sm-12">
            <input
              type="submit"
              defaultValue="submit now"
              className="btn-slide border_radius"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginItem;
