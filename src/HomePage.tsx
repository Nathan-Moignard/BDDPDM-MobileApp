import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {CardInfoDrug} from './Components/CardInfoDrug';

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

  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });

  render() {
    return (
      <View style={this.styles.container}>
        {this.props.route.params ? (
          <View>
            <CardInfoDrug
              title="Libellé"
              content={this.props.route.params.Libelle}
            />
            <CardInfoDrug title="CIP7" content={this.props.route.params.CIP7} />
            <CardInfoDrug
              title="CIP13"
              content={this.props.route.params.CIP13}
            />
            <CardInfoDrug
              title="TauxRemboursement"
              content={this.props.route.params.TauxRemboursement}
            />
            <CardInfoDrug
              title="Status Administratif"
              content={this.props.route.params.StatusAdm}
            />
          </View>
        ) : (
          <TouchableOpacity />
        )}
        <FAB
          icon="camera"
          label="Scanner un médicament"
          style={this.styles.fab}
          onPress={() => {
            this.checkCameraPermissions().then(result => {
              if (result === true) {
                this.props.navigation.navigate('ScanScreen');
              }
            });
          }}
        />
      </View>
    );
  }
}
