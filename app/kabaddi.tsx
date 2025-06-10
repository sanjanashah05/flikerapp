import { View, Text, StyleSheet } from 'react-native';

export default function KabaddiSetup() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🤼 Kabaddi Match Setup</Text>
      <Text style={styles.item}>• Match Type: League, Knockout</Text>
      <Text style={styles.item}>• Players by Role</Text>
      <Text style={styles.item}>• Raid Outcome Types</Text>
      <Text style={styles.item}>• Live Timer & Scores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', padding: 24 },
  heading: { fontSize: 20, color: '#F85F6A', fontWeight: 'bold', marginBottom: 16 },
  item: { fontSize: 16, color: 'white', marginBottom: 10 },
});
