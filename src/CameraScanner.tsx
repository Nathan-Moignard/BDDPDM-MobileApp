'use strict';

import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

export class ScanScreen extends Component {
  render() {
    return <QRCodeScanner onRead={console.log} />;
  }
}
