import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class TeacherItem extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.item
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row'}}>
          <Image style={styles.img} resizeMode={'contain'} source={this.state.pic} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {this.state.name}
            </Text>
            <Text style={styles.introduction}>
              {this.state.introduction}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
    borderStyle: 'solid'
  },
  img: {
    width: 60,
    height: 60
  },
  introduction: {
    width: 300,
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'justify'
  }
});
