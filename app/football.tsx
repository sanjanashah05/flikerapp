import { View, Text, StyleSheet } from 'react-native';

export default function FootballSetup() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⚽ Football Match Setup</Text>
      <Text style={styles.item}>• Duration: 45-min halves or custom</Text>
      <Text style={styles.item}>• Goal, Assist, Card Tracking</Text>
      <Text style={styles.item}>• Possession Stats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', padding: 24 },
  heading: { fontSize: 20, color: '#F85F6A', fontWeight: 'bold', marginBottom: 16 },
  item: { fontSize: 16, color: 'white', marginBottom: 10 },
});
