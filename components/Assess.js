import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Assess extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      finish: false,
      radioGroup: [
        '1、教师授课能力',
        '2、教师教风台风',
        '3、课程互动情况',
        '4、课程数字资源',
        '5、课程售后支持',
        '6、课程内容安排',
        '7、课程现场效果',
        '8、课程授课计划',
        '9、课程作业安排',
        '10、课程综合评价'
      ],
      radioSelection: [
        '优秀',
        '一般',
        '较差'
      ],
      radioSelected: []
    }
  }
  static navigationOptions = {
    tarBarLabel: '课程评价',
    headerTitle: '课程评价'
  }
  onSelect(index, val) {
    const { radioSelected } = this.state
    radioSelected[index] = parseInt(val)
    this.setState({
      radioSelected
    })
  }
  finish() {
    if (this.state.radioSelected.length < 10) {
      alert('请完成所有评价项目')
      return
    }
    this.setState({
      finish: true
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ paddingLeft: 20, paddingRight: 20}}>
          {
            this.state.radioGroup.map((item, index) => {
              if (this.state.finish) {
                return (
                  <View>
                    <Text style={styles.title}>{item}</Text>
                    <Text>{this.state.radioSelection[this.state.radioSelected[index]]}</Text>
                  </View>
                )
              } else {
                return (
                  <View>
                    <Text style={styles.title}>{item}</Text>
                    <RadioGroup style={styles.group} onSelect={ (select, val) => { this.onSelect(index, val) } }>
                      {
                        this.state.radioSelection.map((item, selected) => {
                          return (
                            <RadioButton value={selected}>
                              <Text>{item}</Text>
                            </RadioButton>
                          )
                        })
                      }
                    </RadioGroup>
                  </View>
                )
              }
            })
          }

          {
            this.state.finish ? (null) : (
              <View style={styles.finish}>
                <Text style={styles.btn} onPress={ () => { this.finish() }}>完成</Text>
              </View>
            )
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  finish: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  btn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#841584',
    width: 80,
    height: 40,
    lineHeight: 40,
    textAlign: 'center'
  }
});
