import React, {Component} from 'react';


const MarkerComponent = ({text}) => <div>{text}</div>;

const MYAPIKEY = 'AIzaSyAvbWZVEzlqC4fovNb7ZwSTZIcEPOCaH7o';

export default class NavMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }

  static defaultProps = {
    center: {lat: -41.25,lng: 173.2},
    zoom: 11
  }
  render() {
    return (<div id="nav-map" className='google-map'>
    <GoogleMapReact 
      name={map} 
     // apiKey={'MYAPIKEY'} 
     apiKey= {MYAPIKEY}
      defaultCenter={this.props.center} 
      defaultZoom={this.props.zoom}>
      <MarkerComponent lat={-41.25} lng={173.2} text={'Centre'}/>
    </GoogleMapReact>
    </div>)
  }
}