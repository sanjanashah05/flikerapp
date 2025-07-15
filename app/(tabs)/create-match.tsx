import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../contexts/ThemeContext';

export default function CreateMatchScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  const handleSelectSport = (sport: string) => {
    router.push(`/match/create-${sport}`);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Create New Match</Text>
        <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
          Choose your sport and start scoring live matches
        </Text>
      </View>

      {/* Sports Selection */}
      <View style={styles.sportsContainer}>
        {[
          { id: 'cricket', name: 'Cricket', icon: '🏏', description: 'T10, T20, ODI, Test formats' },
          { id: 'basketball', name: 'Basketball', icon: '🏀', description: 'Quarter-based scoring' },
          { id: 'football', name: 'Football', icon: '⚽', description: 'Goals, assists, cards' },
          { id: 'kabaddi', name: 'Kabaddi', icon: '🤼', description: 'Raid-based scoring' },
        ].map((sport) => (
          <TouchableOpacity 
            key={sport.id} 
            style={[styles.sportCard, { backgroundColor: colors.surface }]} 
            onPress={() => handleSelectSport(sport.id)}
          >
            <Text style={styles.sportIcon}>{sport.icon}</Text>
            <View style={styles.sportInfo}>
              <Text style={[styles.sportName, { color: colors.text }]}>{sport.name}</Text>
              <Text style={[styles.sportDescription, { color: colors.textSecondary }]}>
                {sport.description}
              </Text>
            </View>
            <View style={[styles.arrowIcon, { backgroundColor: colors.primary }]}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Quick Tips */}
      <View style={styles.tipsSection}>
        <Text style={[styles.tipsTitle, { color: colors.primary }]}>💡 Quick Tips</Text>
        <Text style={[styles.tipText, { color: colors.textSecondary }]}>
          • Set up teams and players before starting
        </Text>
        <Text style={[styles.tipText, { color: colors.textSecondary }]}>
          • Enable live updates for real-time scoring
        </Text>
        <Text style={[styles.tipText, { color: colors.textSecondary }]}>
          • Share match links with spectators
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 8,
  },
  headerSubtitle: { 
    fontSize: 16, 
    lineHeight: 22,
  },
  sportsContainer: {
    gap: 16,
    marginBottom: 30,
  },
  sportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  sportIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  sportInfo: {
    flex: 1,
  },
  sportName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sportDescription: {
    fontSize: 14,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsSection: {
    backgroundColor: 'rgba(248, 95, 106, 0.05)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(248, 95, 106, 0.2)',
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 20,
  },
});
