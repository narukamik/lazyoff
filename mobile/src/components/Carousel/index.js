import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.7;

export default class Slider extends React.Component{
  
  render() {
    return(
      <View style={style.container}>
        <ScrollView 
          centerContent
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.scroll}
        >
          {
            this.props.data.map((item, index) => (
              <TouchableOpacity key={index}>
                <View style={style.image}>
                  <Text style={style.textSlide}>{item.title}</Text>
                  <Text style={style.textTiny}>5/100 restante</Text>
                  <Image source={{uri: item.photo}} style={style.imageTiny} />
                  <View style={style.cost}>
                    <Image source={require('../../assets/profile/coin.png')} style={style.coin} />
                    <Text style={style.textCoins}>{item.value}</Text>
                  </View>
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
  container: { width, height },
  scroll: { width, height, alignSelf: 'center' },
  cost: {
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center'
  },
  coin: {
    width: 20,
    height: 20,
    right: 8
  },
  image: { 
    width: 200, 
    height, 
    resizeMode: 'cover', 
    alignSelf: 'center', 
    marginHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1
  },
  imageTiny: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 12
  },
  textSlide: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textTiny: {
    textAlign: 'center',
    fontSize: 12,
    paddingBottom: 8,
    color: 'silver'
  },
  textCoins: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#906CE2'
  }
})
