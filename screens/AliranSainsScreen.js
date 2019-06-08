import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid } from 'react-native';
import SubjectComponent from '../components/SubjectComponent';
import CocurricularComponent from '../components/CocurricularComponent';
import gradeToMerit from '../common/gradetomerit';

export default class AliranSainsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: {
        'MM': 'A+',
        'MT': 'A+',
        'PHYS': 'A+',
        'CHEM': 'A+',
        'BIO': 'A+',
        'OTH1': 'A+',
        'OTH2': 'A+',
        'OTH3': 'A+'
      },
      coco_mark: 0,
      total_merit: 0
    };
    this.setGrade = this.setGrade.bind(this);
    this.setCocuMark = this.setCocuMark.bind(this);
    this.calculateMerit = this.calculateMerit.bind(this);
  }

  setGrade(subject, grade) {
    let prev_grades = {...this.state.grades};
    prev_grades[subject] = grade;
    this.setState({ grades: prev_grades });
  }

  setCocuMark(mark) {
    // add validation
    this.setState({ cocu_mark: parseFloat(mark) });
  }

  calculateMerit() {
    let grades_merit = {};

    Object.entries(this.state.grades).forEach(([subject, grade]) => {
      let point = gradeToMerit(grade);
      grades_merit[subject] = point;
    });

    // console.log(grades_merit);

    let main_subjects_point_sum = parseFloat(grades_merit.MM) + grades_merit.MT
        + grades_merit.PHYS + grades_merit.CHEM + grades_merit.BIO;
    let other_subjects_point_sum = grades_merit.OTH1 + grades_merit.OTH2 + grades_merit.OTH3;

    let other_subjects_point_sum_part = parseFloat(other_subjects_point_sum) * 30.0 / 54.0;
    let sum_main_other = main_subjects_point_sum + other_subjects_point_sum_part;
    
    let total_academic_points = parseFloat((sum_main_other * 90.0 / 120.0).toFixed(3));
    let total_merit = parseFloat(total_academic_points) + parseFloat(this.state.cocu_mark);

    this.setState({ total_merit });
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <Text>Aliran Sains</Text>

          <SubjectComponent 
            label="Matematik"
            subject="MM"
            setGrade={this.setGrade} />
          <SubjectComponent 
            label="Matematik Tambahan"
            subject="MT"
            setGrade={this.setGrade} />
          <SubjectComponent 
            label="Fizik"
            subject="PHYS"
            setGrade={this.setGrade} />
          <SubjectComponent 
            label="Kimia"
            subject="CHEM"
            setGrade={this.setGrade} />
          <SubjectComponent 
            label="Biologi"
            subject="BIO"
            setGrade={this.setGrade} />

          <SubjectComponent
            label="Lain2"
            subject="OTH1"
            setGrade={this.setGrade} />
          <SubjectComponent
            label="Lain2"
            subject="OTH2"
            setGrade={this.setGrade} />
          <SubjectComponent
            label="Lain2"
            subject="OTH3"
            setGrade={this.setGrade} />

          <CocurricularComponent setCocuMark={this.setCocuMark} />
          <Button onPress={this.calculateMerit} title={'Kira'} />
          {/* disabled={!this.state.kira_button_enabled}  */}
          <Text>Your merit is: {this.state.total_merit}</Text>
        </ScrollView>
      </View>
    );
  }
}