import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface PlayerStat {
  name: string;
  position: string;
  points: number;
  performance: string;
}

interface MatchSummaryData {
  sport: string;
  matchName: string;
  finalScore: {
    team1: { name: string; score: number };
    team2: { name: string; score: number };
  };
  duration: string;
  venue: string;
  mvp: PlayerStat;
  topPerformers: PlayerStat[];
  matchEvents: Array<{
    time: string;
    event: string;
    player?: string;
    team: string;
  }>;
}

export default function MatchSummaryScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('summary');

  // Mock data - in real app this would come from props/navigation params
  const matchData: MatchSummaryData = {
    sport: 'Football',
    matchName: 'Premier League Final',
    finalScore: {
      team1: { name: 'Manchester United', score: 3 },
      team2: { name: 'Liverpool FC', score: 2 }
    },
    duration: '90 + 4 min',
    venue: 'Wembley Stadium',
    mvp: {
      name: 'Marcus Rashford',
      position: 'Forward',
      points: 2,
      performance: '2 Goals, 1 Assist'
    },
    topPerformers: [
      { name: 'Marcus Rashford', position: 'Forward', points: 2, performance: '2 Goals, 1 Assist' },
      { name: 'Bruno Fernandes', position: 'Midfielder', points: 1, performance: '1 Goal, 2 Assists' },
      { name: 'Mohamed Salah', position: 'Forward', points: 2, performance: '2 Goals' },
    ],
    matchEvents: [
      { time: '89\'', event: 'Goal', player: 'Marcus Rashford', team: 'Manchester United' },
      { time: '76\'', event: 'Goal', player: 'Mohamed Salah', team: 'Liverpool FC' },
      { time: '65\'', event: 'Yellow Card', player: 'Virgil van Dijk', team: 'Liverpool FC' },
      { time: '45\'', event: 'Goal', player: 'Bruno Fernandes', team: 'Manchester United' },
      { time: '23\'', event: 'Goal', player: 'Mohamed Salah', team: 'Liverpool FC' },
      { time: '12\'', event: 'Goal', player: 'Marcus Rashford', team: 'Manchester United' },
    ]
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `${matchData.matchName} Final Score: ${matchData.finalScore.team1.name} ${matchData.finalScore.team1.score} - ${matchData.finalScore.team2.score} ${matchData.finalScore.team2.name}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleDownload = () => {
    // In real app, this would generate and download PDF/image
    alert('Download functionality will be implemented');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Match Summary</Text>
        <TouchableOpacity onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Final Score */}
      <View style={styles.scoreSection}>
        <Text style={styles.matchTitle}>{matchData.matchName}</Text>
        <View style={styles.finalScore}>
          <View style={styles.teamScore}>
            <Text style={styles.teamName}>{matchData.finalScore.team1.name}</Text>
            <Text style={styles.score}>{matchData.finalScore.team1.score}</Text>
          </View>
          <Text style={styles.vs}>-</Text>
          <View style={styles.teamScore}>
            <Text style={styles.teamName}>{matchData.finalScore.team2.name}</Text>
            <Text style={styles.score}>{matchData.finalScore.team2.score}</Text>
          </View>
        </View>
        <View style={styles.matchInfo}>
          <Text style={styles.matchInfoText}>⚽ {matchData.sport} • {matchData.duration}</Text>
          <Text style={styles.matchInfoText}>📍 {matchData.venue}</Text>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'summary' && styles.activeTab]}
          onPress={() => setActiveTab('summary')}
        >
          <Text style={[styles.tabText, activeTab === 'summary' && styles.activeTabText]}>
            Summary
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'events' && styles.activeTab]}
          onPress={() => setActiveTab('events')}
        >
          <Text style={[styles.tabText, activeTab === 'events' && styles.activeTabText]}>
            Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'stats' && styles.activeTab]}
          onPress={() => setActiveTab('stats')}
        >
          <Text style={[styles.tabText, activeTab === 'stats' && styles.activeTabText]}>
            Stats
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'summary' && (
          <>
            {/* MVP Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🏆 Match MVP</Text>
              <View style={styles.mvpCard}>
                <View style={styles.mvpInfo}>
                  <Text style={styles.mvpName}>{matchData.mvp.name}</Text>
                  <Text style={styles.mvpPosition}>{matchData.mvp.position}</Text>
                  <Text style={styles.mvpPerformance}>{matchData.mvp.performance}</Text>
                </View>
                <View style={styles.mvpBadge}>
                  <Text style={styles.mvpBadgeText}>MVP</Text>
                </View>
              </View>
            </View>

            {/* Top Performers */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>⭐ Top Performers</Text>
              {matchData.topPerformers.map((player, index) => (
                <View key={index} style={styles.performerCard}>
                  <View style={styles.performerRank}>
                    <Text style={styles.rankNumber}>{index + 1}</Text>
                  </View>
                  <View style={styles.performerInfo}>
                    <Text style={styles.performerName}>{player.name}</Text>
                    <Text style={styles.performerPosition}>{player.position}</Text>
                    <Text style={styles.performerStats}>{player.performance}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {activeTab === 'events' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📝 Match Events</Text>
            {matchData.matchEvents.map((event, index) => (
              <View key={index} style={styles.eventItem}>
                <View style={styles.eventTime}>
                  <Text style={styles.eventTimeText}>{event.time}</Text>
                </View>
                <View style={styles.eventIcon}>
                  <Text style={styles.eventIconText}>
                    {event.event === 'Goal' ? '⚽' : event.event === 'Yellow Card' ? '🟨' : '📝'}
                  </Text>
                </View>
                <View style={styles.eventDetails}>
                  <Text style={styles.eventDescription}>{event.event}</Text>
                  {event.player && (
                    <Text style={styles.eventPlayer}>{event.player} • {event.team}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {activeTab === 'stats' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 Match Statistics</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Goals</Text>
                <Text style={styles.statValue}>3 - 2</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Shots on Target</Text>
                <Text style={styles.statValue}>7 - 5</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Possession</Text>
                <Text style={styles.statValue}>58% - 42%</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Corners</Text>
                <Text style={styles.statValue}>6 - 4</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Fouls</Text>
                <Text style={styles.statValue}>12 - 15</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Yellow Cards</Text>
                <Text style={styles.statValue}>2 - 3</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <Ionicons name="download-outline" size={20} color="#F85F6A" />
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-social-outline" size={20} color="white" />
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  scoreSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  finalScore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  teamScore: {
    alignItems: 'center',
    flex: 1,
  },
  teamName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#F85F6A',
  },
  vs: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  matchInfo: {
    alignItems: 'center',
  },
  matchInfoText: {
    color: '#999',
    fontSize: 14,
    marginBottom: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    marginHorizontal: 20,
    marginVertical: 16,
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F85F6A',
    marginBottom: 16,
  },
  mvpCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#F85F6A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mvpInfo: {
    flex: 1,
  },
  mvpName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  mvpPosition: {
    fontSize: 14,
    color: '#F85F6A',
    marginBottom: 8,
  },
  mvpPerformance: {
    fontSize: 14,
    color: '#ccc',
  },
  mvpBadge: {
    backgroundColor: '#F85F6A',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  mvpBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  performerCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  performerRank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F85F6A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rankNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  performerInfo: {
    flex: 1,
  },
  performerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
  },
  performerPosition: {
    fontSize: 12,
    color: '#F85F6A',
    marginBottom: 4,
  },
  performerStats: {
    fontSize: 14,
    color: '#ccc',
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  eventTime: {
    width: 50,
    alignItems: 'center',
  },
  eventTimeText: {
    color: '#F85F6A',
    fontSize: 12,
    fontWeight: 'bold',
  },
  eventIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  eventIconText: {
    fontSize: 16,
  },
  eventDetails: {
    flex: 1,
  },
  eventDescription: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  eventPlayer: {
    color: '#999',
    fontSize: 12,
  },
  statsContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  statLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  statValue: {
    color: '#F85F6A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
    gap: 12,
  },
  downloadButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F85F6A',
  },
  downloadButtonText: {
    color: '#F85F6A',
    marginLeft: 8,
    fontWeight: '600',
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#F85F6A',
    borderRadius: 8,
  },
  shareButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '600',
  },
});