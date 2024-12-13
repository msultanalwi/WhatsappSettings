import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BodyComponent = ({iconName, title, text, mode, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', alignItems: 'center', padding: 25}}>
      <Icon name={iconName} size={30} color="#abb2bf" />
      <View style={{marginLeft: 25}}>
        <Text style={{fontSize: 24, color: mode ? 'black' : 'white'}}>
          {title}
        </Text>
        <Text style={{fontSize: 16, color: '#abb2bf'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BodyComponent;
