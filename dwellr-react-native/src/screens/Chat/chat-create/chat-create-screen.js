import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { colors } from '../../../theme';
import { TwilioService } from '../../../services/twilio-service';
import { LoadingOverlay } from '../../../Components/loading-overlay';
import { useApp } from '../../../app-context';

export function ChatCreateScreen() {
  const [channelName, setChannelName] = useState('');
  const [loading, setLoading] = useState(false);
  const { channels, updateChannels } = useApp();

  const onAddChannel = (channel) => {
    const newChannel = TwilioService.getInstance().parseChannel(channel);
    updateChannels(channels.concat(newChannel));
  };

  const onCreateOrJoin = () => {
    setLoading(true);
    TwilioService.getInstance()
      .getChatClient()
      .then((client) =>
        client
          .getChannelByUniqueName(channelName)
          .then((channel) => (channel.channelState.status !== 'joined' ? channel.join() : channel))
          .then(onAddChannel)
          .catch(() =>
            client.createChannel({ uniqueName: channelName, friendlyName: channelName }).then((channel) => {
              onAddChannel(channel);
              channel.join();
            }),
          ),
      )
      .then(() => showMessage(console.log("joined")))
      .catch((err) => showMessage(console.log("error")))
      .finally(() => setLoading(false));
      
  }; 

  return (
    <View style={styles.screen}>
      {/* <Image style={styles.logo} source={images.message} /> */}
      <Text style={styles.titleText}>Enter a Channel Name</Text>
      <TextInput
        value={channelName}
        onChangeText={setChannelName}
        style={styles.input}
        placeholder="Channel Name"
        placeholderTextColor={colors.ghost}
      />
      <TouchableOpacity style={styles.button} onPress={onCreateOrJoin}>
        <Text style={styles.buttonText}>Create Or Join</Text>
      </TouchableOpacity>
      {loading && <LoadingOverlay />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.snow,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: "#47c9ba",
  },
  input: {
    width: 280,
    height: 50,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.eclipse,
    marginTop: 32,
    marginBottom: 16,
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: colors.dwellr,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: colors.white,
  },
});

export default ChatCreateScreen;