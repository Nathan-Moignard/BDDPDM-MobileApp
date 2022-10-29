import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getDrugFromCIP13} from './API/CIP13';

export class ScanScreen extends Component {
  render() {
    return (
      <QRCodeScanner
        reactivate={true}
        showMarker={true}
        onRead={event => {
          console.log(event.data, event.type, event.rawData);

          switch (event.type) {
            case 'CODE_128':
              getDrugFromCIP13(event.data, this.props.navigation);
              break;
            case 'datamatrix':
              console.log(event.data, event.data.search('010'));
              break;
            default:
              console.log(event.type);
              break;
          }
        }}
      />
    );
  }
}
