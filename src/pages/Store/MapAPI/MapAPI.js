import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./MapAPI.scss";

class MapAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      currentLat: 0,
      currentLng: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((curent) => {
      this.setState({
        currentLat: curent.coords.latitude,
        currentLng: curent.coords.longitude,
      });
    });
  }

  render() {
    const { mapData } = this.props;
    console.log(mapData);
    const { currentLat, currentLng } = this.state;
    return (
      <div className="MapAPI">
        {currentLat ? (
          <Map
            google={this.props.google}
            zoom={15}
            mapTypeControl={false}
            initialCenter={{ lat: currentLat, lng: currentLng }}
          >
            {mapData.branches ? (
              mapData.branches.map((branch, index) => {
                return (
                  <Marker
                    key={index}
                    position={{ lat: branch.latitude, lng: branch.longitude }}
                    icon={{
                      url:
                        "https://www.baristapaulbassett.co.kr/images/store/mapIcon01.png",
                    }}
                    onClick={this.showInfo}
                  ></Marker>
                );
              })
            ) : (
              <></>
            )}
          </Map>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBeN1pkEeveO6oiQRDDomfmbmFLQeulw4c",
})(MapAPI);
