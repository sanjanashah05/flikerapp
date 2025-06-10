import { View, Text, StyleSheet } from 'react-native';

export default function BasketballSetup() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏀 Basketball Match Setup</Text>
      <Text style={styles.item}>• Quarter Selection (Q1–Q4)</Text>
      <Text style={styles.item}>• Point Types (2P, 3P, Free Throw)</Text>
      <Text style={styles.item}>• Foul Tracking</Text>
      <Text style={styles.item}>• Shot Clock & Timer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', padding: 24 },
  heading: { fontSize: 20, color: '#F85F6A', fontWeight: 'bold', marginBottom: 16 },
  item: { fontSize: 16, color: 'white', marginBottom: 10 },
});
