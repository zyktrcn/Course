import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Button, ScrollView} from 'react-native';

export default class CourseDetail extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.navigation.state.params.course
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.img} source={this.state.pic} resizeMode={'contain'} />
            <View style={styles.course}>
              <Text style={styles.title}>{this.state.name}</Text>
              <View style={styles.introduction}>
                {
                  this.state.target.map((item) => {
                    return (<Text>{item}</Text>)
                  })
                }
              </View>
            </View>
          </View>
          <View style={styles.plan}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>课程规划</Text>
            {
              this.state.plan.map((item, index) => {
                if (index === 0 || index % 2 === 0) {
                  return (<Text style={{ fontWeight: 'bold', marginTop: 3 }}> {item} </Text>)
                } else {
                  return (<Text style={{ marginTop: 3, marginLeft: 10 }}> {item} </Text>)
                }
              })
            }
          </View>
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
  img: {
    width: 100,
    height: 100
  },
  course: {
    marginLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  introduction: {
    width: 250,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'justify',
    marginTop: 5
  },
  plan: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 14,
    lineHeight: 21
  }
});
