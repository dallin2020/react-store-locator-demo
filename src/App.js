import React, { Component } from 'react';
import { Map, Info } from 'react-store-locator';

import myPin from './myPin';
import mapStyle from './mapStyle.json';
import locations from './locations';
import './App.css';
const markerIcon =
  'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_PushPin_Right_Chartreuse.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foundLocations: []
    };

    this.getLocations = this.getLocations.bind(this);
  }

  getLocations(locations) {
    this.setState({ foundLocations: locations });
  }

  render() {
    const key = 'AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Store Locator</h1>
        </header>
        <Map
          locations={locations}
          mapStyle={mapStyle}
          onChange={this.getLocations}
          googleApiKey={key}
          pin={myPin}
          searchMarker={{
            color: '#00FF00',
            borderColor: '#fff',
            path:
              'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0'
          }}
          centerMarker={{ icon: markerIcon }}
        >
          {(location, closeLocation) => {
            return (
              <Info
                show={location.show}
                style={{
                  height: '30px',
                  backgroundColor: '#696969',
                  width: '120px'
                }}
              >
                <div
                  style={{
                    textAlign: 'left',
                    color: 'white',
                    height: '22px', // Info height - padding - border to show border
                    border: '1px solid white',
                    padding: '3px',
                    fontSize: '12px'
                  }}
                >
                  {location.name}
                  <div
                    style={{
                      position: 'absolute',
                      top: 3,
                      right: 5,
                      cursor: 'pointer',
                      fontWeight: 800
                    }}
                    onClick={() => closeLocation(location.id)}
                  >
                    [x]
                  </div>
                </div>
              </Info>
            );
          }}
        </Map>
        <h2>Locations In Window</h2>
        {this.state.foundLocations.map(location => (
          <div
            key={location.id}
            style={{
              border: '1px solid #444',
              width: '25%',
              display: 'inline-block',
              marginTop: '5px',
              marginRight: '5px',
              padding: '10px',
              color: '#444',
              backgroundColor: '#F1F1F1'
            }}
          >
            <div>
              <h3
                style={{
                  margin: '8px'
                }}
              >
                {location.name}
              </h3>
            </div>
            <div>{location.distanceFromCenter} miles</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
