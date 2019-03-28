import React from "react";
import "./OtherProjects.css";

class OtherProjects extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.props.otherproject.projurl}>
            {" "}
            <img src={this.props.otherproject.imgurl} alt="" />
          </a>
        </div>
        {/*  <h2>{this.props.otherproject.projname}</h2> */}
        <div>
          <div>{/* <p>{this.props.otherproject.projDesc}</p> */}</div>
        </div>
      </div>
    );
  }
}

export default OtherProjects;
