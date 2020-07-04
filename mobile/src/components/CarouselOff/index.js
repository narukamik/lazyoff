import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.7;

export default class SliderOff extends React.Component{
  
  render() {
    return(
      <View style={style.container}>
        <ScrollView 
          pagingEnabled
          centerContent
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.scroll}
        >
          {
            this.props.data.map((item, index) => (
              <TouchableOpacity key={index}>
                <View style={style.image}>
                  <Image source={{uri: 'https://i.pinimg.com/originals/65/bc/2e/65bc2e85d1f322c5afe6980d9db79ac7.png'}} style={style.sticker} />
                  <Text style={[style.textSticker, style.sticker]}>{item.discount}</Text>
                  <Image source={{uri: item.card}} style={style.imageTiny} />
                </View>               
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: { width, height: (height * 0.6) },
  scroll: { width, height: (height * 0.6), alignSelf: 'center' },
  image: { 
    width, 
    height: (height * 0.6), 
    resizeMode: 'cover', 
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
  imageTiny: {
    width: (width * 0.9),
    height: (height * 0.6),
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 12
  },
  sticker: {
    position: 'absolute',
    width: 70, 
    height: 70,
    zIndex: 1,
    left: 24,
    top: 8
  },
  textSticker: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    paddingHorizontal: 8
  }
})
