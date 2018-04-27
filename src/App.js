import React, { Component } from 'react';
import { Map, Info } from 'react-store-locator';

import myPin from './myPin';
import mapStyle from './mapStyle.json';
import dealers from './dealers';
import './App.css';
const markerIcon =
  'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_PushPin_Right_Chartreuse.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foundDealers: []
    };

    this.getDealers = this.getDealers.bind(this);
  }

  getDealers(dealers) {
    this.setState({ foundDealers: dealers });
  }

  render() {
    const key = 'AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Store Locator</h1>
        </header>
        <Map
          dealers={dealers}
          mapStyle={mapStyle}
          onChange={this.getDealers}
          googleApiKey={key}
          pin={myPin}
          // googleMapIcon={markerIcon} // uncomment to get the imported image for google map icon
          customIcon={{
            color: '#00FF00',
            borderColor: '#fff',
            path:
              'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0'
          }}
        >
          {(dealer, closeDealer) => {
            return (
              <Info
                show={dealer.show}
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
                  {dealer.name}
                  <div
                    style={{
                      position: 'absolute',
                      top: 3,
                      right: 5,
                      cursor: 'pointer',
                      fontWeight: 800
                    }}
                    onClick={() => closeDealer(dealer.id)}
                  >
                    [x]
                  </div>
                </div>
              </Info>
            );
          }}
        </Map>
        <h2>Dealers In Window</h2>
        {this.state.foundDealers.map(dealer => (
          <div
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
                {dealer.name}
              </h3>
            </div>
            <div>{dealer.distanceFromCenter} miles</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
