import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../../../theme';
import { images } from '../../../../assets';

export function ChatListItem({ channel, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* <Image style={styles.cardIcon} source={images.message} /> */}
      <MaterialIcons name="message" size={35} color='#3eb0a2'/>
      <Text style={styles.cardText}>{channel.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.windsor,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardIcon: {
    height: 44,
    width: 44,
  },
  cardText: {
    fontSize: 16,
    color: colors.dwellr,
    marginLeft: 24,
    marginRight: 8,
  },
});

export default ChatListItem;