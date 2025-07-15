import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

const upcomingMatches = [
  {
    id: 1,
    sport: 'Football',
    title: 'Thunder FC vs Lightning United',
    date: 'Tomorrow',
    time: '6:00 PM',
    venue: 'Central Stadium',
    status: 'upcoming',
    image: require('../../assets/feature1.jpg'),
  },
  {
    id: 2,
    sport: 'Cricket',
    title: 'Warriors XI vs Champions',
    date: 'Dec 18',
    time: '2:00 PM',
    venue: 'Sports Complex',
    status: 'upcoming',
    image: require('../../assets/feature2.jpg'),
  },
];

const completedMatches = [
  {
    id: 3,
    sport: 'Basketball',
    title: 'Hoops vs Dunkers',
    date: 'Dec 10',
    time: '8:00 PM',
    venue: 'Indoor Arena',
    status: 'completed',
    result: 'Won 78-65',
    image: require('../../assets/live1.jpg'),
  },
  {
    id: 4,
    sport: 'Football',
    title: 'Thunder FC vs Strikers',
    date: 'Dec 8',
    time: '7:30 PM',
    venue: 'City Ground',
    status: 'completed',
    result: 'Lost 1-2',
    image: require('../../assets/live2.jpg'),
  },
];

export default function MyMatchesScreen() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const renderMatchCard = (match: any) => (
    <View key={match.id} style={styles.matchCard}>
      <Image source={match.image} style={styles.matchImage} />
      <View style={styles.matchInfo}>
        <View style={styles.matchHeader}>
          <Text style={styles.sportTag}>{match.sport}</Text>
          <Text style={[
            styles.statusBadge,
            match.status === 'upcoming' ? styles.upcomingBadge : styles.completedBadge
          ]}>
            {match.status.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.matchTitle}>{match.title}</Text>
        <View style={styles.matchDetails}>
          <Text style={styles.matchDate}>📅 {match.date} • {match.time}</Text>
          <Text style={styles.matchVenue}>📍 {match.venue}</Text>
          {match.result && (
            <Text style={[
              styles.matchResult,
              match.result.includes('Won') ? styles.wonResult : styles.lostResult
            ]}>
              {match.result}
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            {match.status === 'upcoming' ? 'View Details' : 'Match Report'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Matches</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>+ Create Match</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
            Upcoming ({upcomingMatches.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
          onPress={() => setActiveTab('completed')}
        >
          <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
            Completed ({completedMatches.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Match List */}
      <ScrollView style={styles.matchList} showsVerticalScrollIndicator={false}>
        {activeTab === 'upcoming' 
          ? upcomingMatches.map(renderMatchCard)
          : completedMatches.map(renderMatchCard)
        }
        
        {/* Empty State */}
        {((activeTab === 'upcoming' && upcomingMatches.length === 0) ||
          (activeTab === 'completed' && completedMatches.length === 0)) && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              {activeTab === 'upcoming' 
                ? 'No upcoming matches\nCreate your first match!' 
                : 'No completed matches yet\nYour match history will appear here'
              }
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  createButton: {
    backgroundColor: '#F85F6A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  createButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 25,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#F85F6A',
  },
  tabText: {
    color: '#aaa',
    fontWeight: '500',
    fontSize: 14,
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
  matchList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  matchCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  matchImage: {
    width: '100%',
    height: 120,
  },
  matchInfo: {
    padding: 16,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sportTag: {
    color: '#F85F6A',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  statusBadge: {
    fontSize: 10,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    textTransform: 'uppercase',
  },
  upcomingBadge: {
    backgroundColor: 'rgba(248, 95, 106, 0.2)',
    color: '#F85F6A',
  },
  completedBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#aaa',
  },
  matchTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  matchDetails: {
    marginBottom: 16,
  },
  matchDate: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },
  matchVenue: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
  },
  matchResult: {
    fontSize: 14,
    fontWeight: '600',
  },
  wonResult: {
    color: '#4CAF50',
  },
  lostResult: {
    color: '#FF5252',
  },
  actionButton: {
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
    borderColor: '#F85F6A',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#F85F6A',
    fontWeight: '600',
    fontSize: 14,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});