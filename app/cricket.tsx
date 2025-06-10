import { View, Text, StyleSheet } from 'react-native';

export default function CricketSetup() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏏 Cricket Match Setup</Text>
      <Text style={styles.item}>• Format: T10, T20, ODI, Test</Text>
      <Text style={styles.item}>• Toss Winner & Decision</Text>
      <Text style={styles.item}>• Players & Substitutes</Text>
      <Text style={styles.item}>• Overs & Ball-by-Ball Updates</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', padding: 24 },
  heading: { fontSize: 20, color: '#F85F6A', fontWeight: 'bold', marginBottom: 16 },
  item: { fontSize: 16, color: 'white', marginBottom: 10 },
});
