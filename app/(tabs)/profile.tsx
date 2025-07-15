import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ThemeToggle } from '../../components/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={{ paddingBottom: 100 }}>
      
      {/* I. User Profile */}
      <View style={styles.profileHeader}>
        <Image source={require('../../assets/logo.png')} style={styles.avatar} />
        <Text style={[styles.username, { color: colors.text }]}>John Doe</Text>
        <Text style={[styles.tagline, { color: colors.textSecondary }]}>Athlete · All Sports</Text>
      </View>

      {/* Stats for 4 Sports */}
      <View style={styles.statsRow}>
        {['Football', 'Cricket', 'Basketball', 'Kabaddi'].map((sport, index) => (
          <View key={index} style={styles.statBox}>
            <Text style={styles.statValue}>12</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{sport}</Text>
          </View>
        ))}
      </View>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Achievements & Badges */}
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>🏅 Achievements & Badges</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgeRow}>
        {['MVP', 'Captain', 'Fair Play'].map((badge, i) => (
          <View key={i} style={[styles.badge, { backgroundColor: colors.surface }]}>
            <Text style={[styles.badgeText, { color: colors.text }]}>{badge}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Teams Joined */}
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>🧑‍🤝‍🧑 Teams & Clubs</Text>
      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>• Thunder FC (Football)</Text>
        <Text style={[styles.cardTitle, { color: colors.text }]}>• Smashers 11 (Cricket)</Text>
      </View>

      {/* II. Team Management */}
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>🛠️ Team Management</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}><Text style={styles.buttonText}>Create / Join Team</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}><Text style={styles.buttonText}>Invite Friends</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}><Text style={styles.buttonText}>Schedule Match</Text></TouchableOpacity>

      {/* III. Tournaments & Events */}
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>🏆 Tournaments & Events</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}><Text style={styles.buttonText}>Create Tournament</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}><Text style={styles.buttonText}>Manage Fixtures</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}><Text style={styles.buttonText}>Prize Pool & Entry</Text></TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    color: '#F85F6A',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 24,
  },
  badgeRow: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  badgeText: {
    fontSize: 13,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
