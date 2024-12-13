import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({colorIcon, colorText, mode, onChangeTheme}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={30}
            color={mode ? 'black' : colorIcon}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            paddingLeft: 15,
            color: mode ? 'black' : colorText,
          }}>
          Settings
        </Text>
      </View>
      <TouchableOpacity onPress={onChangeTheme}>
        <Icon
          name="brightness-6"
          size={30}
          color={mode ? '#abb2bf' : 'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
