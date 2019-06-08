import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onButton1Press = this.onButton1Press.bind(this);
    this.onButton2Press = this.onButton2Press.bind(this);
  }

  onButton1Press() {
    this.props.navigation.navigate('UniAwam');
  }
  
  onButton2Press() {
    ToastAndroid.show('This feature is not available yet', ToastAndroid.SHORT);
  }
  
  render() {
    return (
      <View>
        <Text style={styles.title}>UPU Merit Calculator</Text>
        <Button style={styles.button}
          onPress={this.onButton1Press}
          title="UNIVERSITI AWAM / POLITEKNIK PREMIER"
        />
        <Button style={styles.button}
          onPress={this.onButton2Press}
          title="POLITEKNIK KONVENSIONAL / METRO / KOLEJ KOMUNITI / ILKA"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black'
  },
  button: {
    fontSize: 10,
  }
});

export default HomeScreen;