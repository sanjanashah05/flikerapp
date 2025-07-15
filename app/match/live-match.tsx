import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface MatchEvent {
  id: string;
  time: string;
  type: 'goal' | 'card' | 'substitution' | 'other';
  description: string;
  player?: string;
  team: 'home' | 'away';
}

export default function LiveMatchScreen() {
  const router = useRouter();
  const [isLive, setIsLive] = useState(true);
  const [matchTime, setMatchTime] = useState('68\'');
  const [homeScore, setHomeScore] = useState(2);
  const [awayScore, setAwayScore] = useState(1);
  
  const [events, setEvents] = useState<MatchEvent[]>([
    {
      id: '1',
      time: '65\'',
      type: 'goal',
      description: 'Goal scored!',
      player: 'Messi',
      team: 'home'
    },
    {
      id: '2',
      time: '45\'',
      type: 'card',
      description: 'Yellow card',
      player: 'Ronaldo',
      team: 'away'
    },
    {
      id: '3',
      time: '23\'',
      type: 'goal',
      description: 'Goal scored!',
      player: 'Neymar',
      team: 'away'
    },
  ]);

  const handleShare = () => {
    Alert.alert('Share Match', 'Share functionality will be implemented');
  };

  const handleComment = () => {
    Alert.alert('Comments', 'Live comments feature will be implemented');
  };

  const addGoal = (team: 'home' | 'away') => {
    if (team === 'home') {
      setHomeScore(prev => prev + 1);
    } else {
      setAwayScore(prev => prev + 1);
    }
    
    const newEvent: MatchEvent = {
      id: Date.now().toString(),
      time: matchTime,
      type: 'goal',
      description: 'Goal scored!',
      player: team === 'home' ? 'Player A' : 'Player B',
      team
    };
    
    setEvents(prev => [newEvent, ...prev]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Live Match</Text>
        <TouchableOpacity onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Live Status */}
      {isLive && (
        <View style={styles.liveIndicator}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>LIVE</Text>
          <Text style={styles.matchTime}>{matchTime}</Text>
        </View>
      )}

      {/* Scoreboard */}
      <View style={styles.scoreboard}>
        <View style={styles.teamSection}>
          <Text style={styles.teamName}>Real Madrid</Text>
          <Text style={styles.score}>{homeScore}</Text>
        </View>
        
        <View style={styles.vsSection}>
          <Text style={styles.vsText}>VS</Text>
        </View>
        
        <View style={styles.teamSection}>
          <Text style={styles.teamName}>PSG</Text>
          <Text style={styles.score}>{awayScore}</Text>
        </View>
      </View>

      {/* Match Info */}
      <View style={styles.matchInfo}>
        <Text style={styles.matchInfoText}>⚽ Football • Champions League</Text>
        <Text style={styles.matchInfoText}>📍 Santiago Bernabéu Stadium</Text>
      </View>

      {/* Quick Actions for Scoring (Demo) */}
      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => addGoal('home')}
        >
          <Text style={styles.actionButtonText}>+1 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => addGoal('away')}
        >
          <Text style={styles.actionButtonText}>+1 Away</Text>
        </TouchableOpacity>
      </View>

      {/* Match Events Timeline */}
      <View style={styles.eventsSection}>
        <Text style={styles.sectionTitle}>Match Events</Text>
        <ScrollView style={styles.eventsList} showsVerticalScrollIndicator={false}>
          {events.map((event) => (
            <View key={event.id} style={styles.eventItem}>
              <View style={styles.eventTime}>
                <Text style={styles.eventTimeText}>{event.time}</Text>
              </View>
              <View style={[
                styles.eventIcon,
                event.type === 'goal' && styles.goalIcon,
                event.type === 'card' && styles.cardIcon
              ]}>
                <Text style={styles.eventIconText}>
                  {event.type === 'goal' ? '⚽' : event.type === 'card' ? '🟨' : '📝'}
                </Text>
              </View>
              <View style={styles.eventDetails}>
                <Text style={styles.eventDescription}>{event.description}</Text>
                {event.player && (
                  <Text style={styles.eventPlayer}>{event.player}</Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.commentButton} onPress={handleComment}>
          <Ionicons name="chatbubble-outline" size={20} color="#F85F6A" />
          <Text style={styles.commentButtonText}>Comments</Text>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F85F6A',
    marginRight: 8,
  },
  liveText: {
    color: '#F85F6A',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 12,
  },
  matchTime: {
    color: '#F85F6A',
    fontSize: 14,
    fontWeight: '600',
  },
  scoreboard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  teamSection: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  score: {
    color: '#F85F6A',
    fontSize: 48,
    fontWeight: 'bold',
  },
  vsSection: {
    paddingHorizontal: 20,
  },
  vsText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchInfo: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  matchInfoText: {
    color: '#999',
    fontSize: 14,
    marginBottom: 4,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#F85F6A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  eventsSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  eventsList: {
    flex: 1,
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
  goalIcon: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },
  cardIcon: {
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
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
  bottomActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
    gap: 12,
  },
  commentButton: {
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
  commentButtonText: {
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