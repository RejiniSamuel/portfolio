import React from "react";
import "./OtherProjectsList.css";
import OtherProjects from "../OtherProjects/OtherProjects";

class OtherProjectsList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.otherprojectslist.map((otherproject, i) => {
          return (
            <OtherProjects key={otherproject.id} otherproject={otherproject} />
          );
        })}
      </div>
    );
  }
}

export default OtherProjectsList;
