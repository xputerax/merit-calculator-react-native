import React from 'react';
import { Text, View, Button } from 'react-native';

export default class UniAwamScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onButton1Press = this.onButton1Press.bind(this);
    this.onButton2Press = this.onButton1Press.bind(this);
  }

  onButton1Press() {
    this.props.navigation.navigate('AliranSains');
  }

  onButton2Press() {
    this.props.navigation.navigate('AliranSastera');
  }

  render() {
    return (
      <View>
        <Text>Pilih Aliran</Text>
        <Button onPress={this.onButton1Press} title="Aliran Sains" />
        <Button onPress={this.onButton2Press} title="Aliran Sastera" />
      </View>
    );
  }
}