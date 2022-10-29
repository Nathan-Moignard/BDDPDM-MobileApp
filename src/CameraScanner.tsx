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
          switch (event.type) {
            case 'CODE_128':
              getDrugFromCIP13(event.data, this.props.navigation);
              break;
            case 'DATA_MATRIX':
              const CIP13 = event.data.substring(
                event.data.indexOf('010') + 3,
                event.data.indexOf('010') + 3 + 13,
              );
              getDrugFromCIP13(CIP13, this.props.navigation);
              break;
            default:
              console.info(event.data, event.type, event.rawData);
              break;
          }
        }}
      />
    );
  }
}
