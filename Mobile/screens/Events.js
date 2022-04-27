import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { eventsData } from '../data/events';

const Events = () => {


  return (
    <FlatList
      style={styles.root}
      data={eventsData}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        const Event = item.item;
        let mainContentStyle;
        if (Event.attachment) {
          mainContentStyle = styles.mainContent;
        }
        return (
          <View style={styles.container}>
            <Image source={{ uri: Event.image }} style={styles.avatar} />
            <View style={styles.content}>
              <View style={mainContentStyle}>
                <View style={styles.text}>
                  <Text style={styles.groupName}>{Event.event_name}</Text>
                </View>
                <Text style={styles.attendees}>
                  {Event.attendees} attendees
                </Text>
                <Text style={styles.scanned}>
                  {Event.admitted} scanned
                </Text>
              </View>
            </View>
          </View>
        );
      }} />
  );

}

export default Events

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  attendees: {
    color: "#20B2AA"
  },
  scanned: {
    color: "#4f0000"
    
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969"
  },
  groupName: {
    fontSize: 23,
    color: "#1E90FF"
  },
  groupMembersContent: {
    flexDirection: 'row',
    marginTop: 10
  }
});  