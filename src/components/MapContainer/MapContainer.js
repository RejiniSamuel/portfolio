import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const MarkerComponent = ({text}) => <div>{text}</div>;

class NavMap extends Component {
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
      apiKey={'AIzaSyAvbWZVEzlqC4fovNb7ZwSTZIcEPOCaH7o'} 
      defaultCenter={this.props.center} 
      defaultZoom={this.props.zoom}>
      <MarkerComponent lat={-41.25} lng={173.2} text={'Centre'}/>
    </GoogleMapReact>
    </div>)
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAvbWZVEzlqC4fovNb7ZwSTZIcEPOCaH7o')
})(MapContainer);