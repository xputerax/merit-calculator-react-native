import React from 'react';
import { View, Text } from 'react-native';
import GradePickerComponent from './GradePickerComponent';

class SubjectComponent extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>{this.props.label}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <GradePickerComponent subject={this.props.subject} setGrade={this.props.setGrade} />
        </View>
      </View>
    );
  }
}

export default SubjectComponent;