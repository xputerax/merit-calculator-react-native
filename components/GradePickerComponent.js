import React from 'react';
import { Picker } from 'react-native';

export default class GradePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_grade: 'A+'
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(val) {
    this.setState({ selected_grade: val });
    this.props.setGrade(this.props.subject, val)
  }

  render() {
    return (
      <Picker onValueChange={this.handleValueChange} selectedValue={this.state.selected_grade}>
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="C+" value="C+" />
        <Picker.Item label="C" value="C" />
        <Picker.Item label="D" value="D" />
        <Picker.Item label="E" value="E" />
        <Picker.Item label="G" value="G" />
      </Picker>
    )
  }
}