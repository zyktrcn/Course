import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Video from 'react-native-video'

export default class Welcome extends Component<Props> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 300, height: 400 }}>
          <Image style={styles.logo} source={require('../images/logo.jpeg')} resizeMode={'contain'} />
        </View>
        <Text style={styles.go} onPress={() => { this.props.navigation.navigate('Login') }}>Go</Text>
        <Video
          ref={(ref: Video) => {
              this.video = ref
          }}
          source={require('../images/loading.mp3')}
          repeat={true}
          volume={1.0}
          muted={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 200
  },
  go: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
    backgroundColor: '#841584',
    width: 100,
    height: 50,
    lineHeight: 50,
    textAlign: 'center'
  }
});
