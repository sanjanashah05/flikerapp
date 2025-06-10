import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      
      {/* I. User Profile */}
      <View style={styles.profileHeader}>
        <Image source={require('../../assets/logo.png')} style={styles.avatar} />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.tagline}>Athlete · All Sports</Text>
      </View>

      {/* Stats for 4 Sports */}
      <View style={styles.statsRow}>
        {['Football', 'Cricket', 'Basketball', 'Kabaddi'].map((sport, index) => (
          <View key={index} style={styles.statBox}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>{sport}</Text>
          </View>
        ))}
      </View>

      {/* Achievements & Badges */}
      <Text style={styles.sectionTitle}>🏅 Achievements & Badges</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgeRow}>
        {['MVP', 'Captain', 'Fair Play'].map((badge, i) => (
          <View key={i} style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Teams Joined */}
      <Text style={styles.sectionTitle}>🧑‍🤝‍🧑 Teams & Clubs</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>• Thunder FC (Football)</Text>
        <Text style={styles.cardTitle}>• Smashers 11 (Cricket)</Text>
      </View>

      {/* II. Team Management */}
      <Text style={styles.sectionTitle}>🛠️ Team Management</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Create / Join Team</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Invite Friends</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Schedule Match</Text></TouchableOpacity>

      {/* III. Tournaments & Events */}
      <Text style={styles.sectionTitle}>🏆 Tournaments & Events</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Create Tournament</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Manage Fixtures</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Prize Pool & Entry</Text></TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    color: 'white',
  },
  tagline: {
    fontSize: 14,
    color: '#ccc',
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
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#F85F6A',
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
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#F85F6A',
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
