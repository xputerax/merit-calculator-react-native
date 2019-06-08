import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default class CocurricularComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>Markah Ko-kurikulum</Text>
        <TextInput
          defaultValue="0"
          editable={true}
          onChangeText={(val) => this.props.setCocuMark(val)}
          keyboardType="numeric"
        />
      </View>
    );
  }
}