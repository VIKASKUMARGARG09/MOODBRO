import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Svg, Circle } from 'react-native-svg'; // Using react-native-svg for the background circles

const MyConversation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Upper Section */}
        <View style={styles.upperContainer}>
          {/* Background decorative circles */}
          <View style={styles.bgCirclesContainer} pointerEvents="none">
            <View style={[styles.circle, styles.circleOne]} />
            <View style={[styles.circle, styles.circleTwo]} />
            <View style={[styles.circle, styles.circleThree]} />
            <View style={[styles.circle, styles.circleFour]} />
          </View>

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My Conversations</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Basic</Text>
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.statsContainer}>
            <Text style={styles.totalConversations}>1571</Text>
            <Text style={styles.totalConversationsLabel}>Total Conversations</Text>
            <View style={styles.subStatsContainer}>
              <View style={styles.subStat}>
                <Feather name="link-2" size={20} color="#FFFFFF" style={{ opacity: 0.8 }} />
                <Text style={styles.subStatValue}>32</Text>
                <Text style={styles.subStatLabel}>Left this month</Text>
              </View>
              <View style={styles.subStat}>
                <Ionicons name="stats-chart" size={20} color="#FFFFFF" style={{ opacity: 0.8 }} />
                <Text style={styles.subStatValue}>Slow</Text>
                <Text style={styles.subStatLabel}>Response & Support</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons (overlapping) */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="options-outline" size={24} color="#2A5350" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButtonCenter}
            onPress={() => navigation.navigate('ChatScreen')}
          >
            <AntDesign name="plus" size={32} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="settings-outline" size={24} color="#2A5350" />
          </TouchableOpacity>
        </View>

        {/* Lower Section */}
        {/* <View style={styles.lowerContainer}>
          <View style={styles.upgradeCard}>
            {/* The illustration can be an SVG or a PNG Image */}
            {/* <View style={styles.illustrationPlaceholder} />
            <View style={styles.upgradeInfo}>
              <Text style={styles.upgradeTitle}>Upgrade to Pro!</Text>
              <View style={styles.featureItem}>
                <Ionicons name="checkmark-circle" size={18} color="#2A5350" />
                <Text style={styles.featureText}>24/7 Live & Fast Support</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons name="checkmark-circle" size={18} color="#2A5350" />
                <Text style={styles.featureText}>Unlimited Conversations</Text>
              </View>
              <TouchableOpacity
                style={styles.goProButton}
                onPress={() => navigation.navigate('ConversationStartScreen')}
              >
                <Text style={styles.goProButtonText}>Go Pro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2A5350',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  upperContainer: {
    backgroundColor: '#2A5350',
    paddingHorizontal: 20,
    paddingBottom: 60, // Space for the overlapping buttons
    overflow: 'hidden',
  },
  bgCirclesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 200,
  },
  circleOne: { width: 300, height: 300, top: -100, right: -100 },
  circleTwo: { width: 150, height: 150, top: 100, left: -50 },
  circleThree: { width: 200, height: 200, top: 20, left: 100 },
  circleFour: { width: 100, height: 100, top: 250, right: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  totalConversations: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },
  totalConversationsLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginTop: -10,
  },
  subStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  subStat: {
    alignItems: 'center',
    flex: 1,
  },
  subStatValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subStatLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    marginTop: 2,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: -35, // Pulls the buttons up to overlap
    zIndex: 1,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionButtonCenter: {
    backgroundColor: '#2A5350',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 3,
    borderColor: '#F5F5F5'
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50, // Space for the buttons and some breathing room
    paddingHorizontal: 20,
  },
  upgradeCard: {
    backgroundColor: '#E6F0EF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  illustrationPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#C8DCDA', // Placeholder color
    borderRadius: 40,
    marginRight: 20,
    // Replace this with an <Image /> component for your actual illustration
  },
  upgradeInfo: {
    flex: 1,
  },
  upgradeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A5350',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333333',
  },
  goProButton: {
    backgroundColor: '#2A5350',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 15,
    alignItems: 'center',
  },
  goProButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MyConversation;