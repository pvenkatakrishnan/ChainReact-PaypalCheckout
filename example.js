
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  ListView
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import Content from './content';

import YouTube from 'react-native-youtube';

const { width, height } = Dimensions.get('window');

const Page = (props) => {


  if (props.bodyVideo) {
    console.info('entered video')

    return (
      <View style={[ { width, height }, styles.slide]}>
    
        <View style={styles.content}>
          <Text style={styles.type2header}>
            {props.header}
          </Text>
        <Text style={[styles.footer,{fontSize:20, paddingTop: 5}]}>{props.footer}</Text>
        <YouTube
          ref={(component) => {
            this._youTubePlayer = component;
          }}
          videoId={props.bodyVideo}           // The YouTube video ID
          play={false} 
          //fullscreen={false}                    // control playback of video with true/false
          playsInline={true}               // control whether the video should play in fullscreen or inline
          loop={false}                     // control whether the video should loop when ended

          style={styles.video}
        />
        </View>
        
        
        <TouchableHighlight onPress={props.onHide}>
          <Text style={styles.footer} >Done</Text>
        </TouchableHighlight>
      </View>
      );
  }
  else if (props.bodyImg) {
    console.info('entered image')

    return (
      <View style={[ { width, height }, styles.slide]}>
    
        <View style={styles.content}>
          <Text style={styles.type2header}>
            {props.header}
          </Text>
          <Image source={props.bodyImg} resizeMode="contain" style={styles.video} />
        </View>

        <TouchableHighlight onPress={props.onHide}>
          <Text style={styles.footer} >Done</Text>
        </TouchableHighlight>
      </View>
    );
  } else {
      console.info('entered list')

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      let dataSource = ds.cloneWithRows(props.body);
      return (
        <View style={[ { width, height }, styles.slide]}>
      
          <View style={styles.content}>
            <Text style={styles.type1header}>
              {props.header}
            </Text>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) => <Text style={styles.body}>{`\u2022 ${rowData}`}</Text>}
            />
          </View>

          <TouchableHighlight onPress={props.onHide}>
            <Text style={styles.footer} >Done</Text>
          </TouchableHighlight>
        </View>
      );
  }
  
}

Page.propTypes = {
  i: React.PropTypes.number,
  header: React.PropTypes.string,
  body: React.PropTypes.array,
  bodyImg: React.PropTypes.number,
  bodyVideo: React.PropTypes.string,
  onHide: React.PropTypes.func,
  color: React.PropTypes.string,
  footer: React.PropTypes.string

};



export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      carouselElements: Content,
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  }

  hideModal = () => {
    this.setState({ modalVisible: false });
  }

  renderTitleContent () {
    if(!this.state.modalVisible) {
      return (
          <View style={styles.introcontent}>
            <Text style={styles.introheader}>
              Paypal Checkout with React Native
            </Text>
            <Text style={styles.introsub}>
              Poornima Venkatakrishnan
            </Text>
          </View> 
      )
    }
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.showModal()}>
        <Image source={require('./image/EC2.png')} style={styles.image}>
          {this.renderTitleContent()}
        </Image>
        </TouchableHighlight>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          supportedOrientations={['portrait', 'landscape']}
        >
          <Carousel
            delay={2000}
            style={{ flex: 1 }}
            autoplay={false}
            pageInfo
            currentPage={0}
            onAnimateNextPage={(p) => console.log(p)}
          >
            {
              this.state.carouselElements.map((el, i) =>
                <Page
                  key={i}
                  i={i}
                  color={el.color}
                  header = {el.header}
                  body = {el.body}
                  bodyImg = {el.bodyImg}
                  bodyVideo = {el.bodyVideo}
                  footer = {el.footer}
                  onHide={() => this.hideModal()}
                />)
            }
          </Carousel>
        </Modal>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'stretch'
  },
  image: {
    width,
    height,
    flex:1
  },
  slide: {
    flex: 1
  },
  slideImg : {
    flexDirection: 'row',
    width: 200,
    height: 200,
    marginTop: 10,
    paddingTop: 15,
    marginLeft: 10
  },
  introheader: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    width: 1000,
    height: 100,
    textAlign: 'center'
  },
  introsub: {
    marginTop: 50,
    fontSize: 40,
    color: 'white',
    width: 500,
    height: 50,
    paddingTop: 10
  },
  type1header: {
    marginTop: 200,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  type2header: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  body: {
    paddingTop: 50,
    fontSize: 30,
    color: 'white',
    textAlign: 'left'
  },
  footer: {
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 15
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
      
  },
  introcontent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 300
  },
  video: {
    alignSelf: 'stretch', 
    width: width-60, 
    height:height - 250,
    marginLeft: 30, 
    marginTop: 30
  },
});
