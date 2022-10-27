import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export class HomePage extends Component {
  style = StyleSheet.create({
    cameraButton: {
      width: 150,
    },
  });

  async checkCameraPermissions() {
    return check(PERMISSIONS.ANDROID.CAMERA).then(result1 => {
      if (result1 === RESULTS.GRANTED) {
        return true;
      } else {
        return request(PERMISSIONS.ANDROID.CAMERA).then(result2 => {
          return result2 === RESULTS.GRANTED ? true : false;
        });
      }
    });
  }

  render() {
    return (
      <View>
        <Button
          style={this.style.cameraButton}
          icon="camera"
          mode="contained"
          onPress={() => {
            this.checkCameraPermissions().then(result => {
              if (result === true) {
                this.props.navigation.navigate('ScanScreen');
              }
            });
          }}>
          Press me
        </Button>
      </View>
    );
  }
}
