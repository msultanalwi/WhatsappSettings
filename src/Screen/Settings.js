import React, {useState} from 'react';
import {View, Text, ScrollView, Linking, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Name from '../components/Name';
import BodyComponent from '../components/BodyComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = ({warna = '#abb2bf', ukuran = 20}) => {
  const [mode, setMode] = useState(false);

  const change = () => {
    setMode(!mode);
  };

  // const openLink = URL => {
  //   Linking.openURL(URL);
  // };

  return (
    <ScrollView>
      {/* <StatusBar translucent={true} /> */}
      <View style={{flex: 1, backgroundColor: mode ? 'white' : '#282c34'}}>
        // kalau statenya false maka kirinya true : false, dan jika true maka
        true : false
        <Header
          colorIcon={warna}
          colorText={warna}
          mode={mode}
          onChangeTheme={change}
        />
        <Name ukuran={ukuran} warna={warna} mode={mode} />
        <BodyComponent
          iconName="key-outline"
          title="Account"
          text="Security notifications, change number"
          mode={mode}
        />
        <BodyComponent
          iconName="lock-outline"
          title="Privacy"
          mode={mode}
          text="Block Contacts, disappearing messages"
        />
        <BodyComponent
          iconName="alien"
          title="Avatar"
          mode={mode}
          text="Create, edit, profile photo"
        />
        <BodyComponent
          iconName="view-list"
          title="Lists"
          mode={mode}
          text="Manage people and groups"
        />
        <BodyComponent
          iconName="message-text"
          title="Chats"
          mode={mode}
          text="Theme, wallpapers, chat history"
        />
        <BodyComponent
          iconName="bell"
          title="Notifications"
          mode={mode}
          text="Message, group, & call tones"
        />
        <BodyComponent
          iconName="recycle"
          title="Storage and data"
          mode={mode}
          text="Network usage, auto-download"
        />
        <BodyComponent
          iconName="web"
          title="App Language"
          mode={mode}
          text="English (device's language)"
        />
        <BodyComponent
          iconName="help-circle-outline"
          title="Help"
          mode={mode}
          text="Help center, contact us, privacy, policy"
        />
        <BodyComponent
          iconName="account-multiple-plus-outline"
          mode={mode}
          title="Invite a friend"
        />{' '}
        <BodyComponent iconName="update" title="App Updates" mode={mode} />
        <Text style={{fontSize: 16, color: '#abb2bf', padding: 25}}>
          Also from Meta
        </Text>
        <BodyComponent
          iconName="instagram"
          title="Instagram"
          mode={mode}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/alwi_purple/')
          }
        />
        <BodyComponent
          iconName="facebook"
          title="Facebook"
          mode={mode}
          onPress={() =>
            Linking.openURL('https://www.facebook.com/muhammadsultan.alwi.9')
          }
        />
        <BodyComponent
          iconName="twitter"
          title="Twitter"
          mode={mode}
          onPress={() =>
            Linking.openURL(
              'https://x.com/teav_lativa?t=gygYolqXZjGJB5ilaLvfPg&s=09',
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default Settings;
