import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Name = ({ukuran, warna, mode}) => {
  return (
    <View
      style={{
        borderWidth: 0.2,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 70, width: 70, borderRadius: 35}}
          source={require('../image/Apple.jpeg')}
        />
        <View style={{paddingHorizontal: 20}}>
          <Text
            numberOfLines={1}
            style={{fontSize: ukuran, color: mode ? 'black' : warna}}>
            Muhammad Sultan Alwi
          </Text>
          <Text style={{fontSize: ukuran, color: warna}}>Paradoks Solomon</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 80,
        }}>
        <Icon name="qrcode" size={35} color="#23c262" />
        <Icon name="plus-circle-outline" size={35} color="#23c262" />
      </View>
    </View>
  );
};

export default Name;
