import { View, Text ,TextInput,StyleSheet, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Welcome, sanjana</Text>
      <TextInput placeholder="Search for matches, teams, or players..." style={styles.search} />      <Text style={styles.sectionTitle}>Featured Matches</Text>
      <View style={styles.featuredCard}>
        <Text style={styles.featuredText}>Mumbai Titans vs Delhi Warriors</Text>
        <Text style={styles.liveText}>LIVE - Cricket Premier League</Text>
      </View>

      <Text style={styles.sectionTitle}>Live Matches</Text>
      <View style={styles.matchCard}><Text>🏏 Mumbai vs Delhi – 120/6 vs 95/4</Text></View>
      <View style={styles.matchCard}><Text>🏀 Rockets vs Blazers – 78 vs 82</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  welcome: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  search: { backgroundColor: '#eee', padding: 12, borderRadius: 8, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  featuredCard: { backgroundColor: '#0b1d40', padding: 16, borderRadius: 8, marginBottom: 16 },
  featuredText: { color: '#fff', fontSize: 16 },
  liveText: { color: '#ff5252', fontSize: 12 },
  matchCard: { backgroundColor: '#f6f6f6', padding: 12, borderRadius: 8, marginVertical: 6 },
});
