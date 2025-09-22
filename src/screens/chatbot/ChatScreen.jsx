import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello, I’m MoodBot! 👋 I’m your personal assistant. How can I help you?', time: new Date() },
    { type: 'user', text: 'Book me a visit.', time: new Date() },
    { type: 'user', text: 'I can’t believe this is happening! Everything is falling apart, and I feel so overwhelmed! F*** this world and everyone!', time: new Date() },
    { type: 'bot', text: 'Show me other options', time: new Date() },
    { type: 'bot', text: 'Shinomiya, Let\'s work on coping strategies. You\'re not alone in this journey. I\'m with you ALL THE WAY THROUGH!! 💯😊😄', time: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);
  const scrollViewRef = useRef();

  const sendMessage = async () => {
    if (input.trim() === '' && !image) return;
    const newMsg = { type: 'user', text: input, image, time: new Date() };
    setMessages([...messages, newMsg]);
    setInput('');
    setImage(null);
    setTimeout(() => {
      setMessages(msgs => ([...msgs, { type: 'bot', text: 'I received your message!', time: new Date() }]));
    }, 1000);
  };

  const pickImage = async () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (!response.didCancel && !response.errorCode && response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>🤖</Text>
          </View>
          <View>
            <Text style={styles.botName}>MoodBot</Text>
            <Text style={styles.status}>Always active</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerMenu}><Text style={{fontSize:18, color:'#b7b7b7'}}>⋮</Text></TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView
        contentContainerStyle={styles.chatContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, idx) => (
          <View key={idx} style={[styles.messageRow, msg.type === 'user' ? styles.rightRow : styles.leftRow]}>
            {msg.type === 'bot' && (
              <View style={styles.avatarCircleSmall}><Text style={styles.avatarIconSmall}>🤖</Text></View>
            )}
            <View style={[styles.bubble, msg.type === 'user' ? styles.userBubble : styles.botBubble]}>
              <Text style={styles.timeTextBubble}>{msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
              {msg.image && (
                <Image source={{ uri: msg.image }} style={styles.chatImage} />
              )}
              {msg.text ? (
                <Text style={msg.type === 'bot' ? styles.botText : styles.userText}>{msg.text}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.inputIconBtn} onPress={pickImage}>
          <Text style={{ fontSize: 22 }}>�</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          placeholderTextColor="#b7b7b7"
        />
        <TouchableOpacity style={styles.inputIconBtn} onPress={sendMessage}>
          <Text style={{ fontSize: 22, color: '#40916c' }}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b4332',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#2d6a4f',
    borderBottomWidth: 1,
    borderBottomColor: '#52b788',
  },
  botName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  status: {
    fontSize: 14,
    color: '#d8f3dc',
    marginTop: 4,
  },
  chatContainer: {
    padding: 20,
  },
  botBubble: {
    backgroundColor: '#40916c',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  botText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 22,
  },
  userBubble: {
    backgroundColor: '#d8f3dc',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  userText: {
    color: '#1b4332',
    fontSize: 16,
    lineHeight: 22,
  },
  chatContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  leftRow: {
    justifyContent: 'flex-start',
  },
  rightRow: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    borderRadius: 18,
    padding: 14,
    paddingTop: 22,
    position: 'relative',
  },
  botBubble: {
    backgroundColor: '#f5f5f5',
    marginLeft: 6,
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#2d6a4f',
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  botText: {
    color: '#222',
    fontSize: 15,
    lineHeight: 22,
  },
  userText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  timeTextBubble: {
    position: 'absolute',
    right: 12,
    top: 6,
    fontSize: 11,
    color: '#b7b7b7',
  },
  chatImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#222',
    marginHorizontal: 8,
  },
  inputIconBtn: {
    padding: 6,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarIcon: {
    fontSize: 22,
  },
  avatarCircleSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  avatarIconSmall: {
    fontSize: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerMenu: {
    padding: 8,
  },
  botName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  status: {
    fontSize: 13,
    color: '#52b788',
    marginTop: 2,
  },
});
