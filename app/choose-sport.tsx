import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChooseSport() {
  const router = useRouter();

  const goToTabs = () => router.replace('/(tabs)/home');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Fliker</Text>
      <Text style={styles.title}>Pick a Sport</Text>
      <Text style={styles.subtitle}>Choose a sport to get started with</Text>

      {['Cricket', 'Kabaddi', 'Basketball', 'Football'].map(sport => (
        <TouchableOpacity key={sport} style={styles.card} onPress={goToTabs}>
          <Text style={styles.cardText}>{sport}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.info}>Don’t worry, you can always switch between sports later</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#f15a29', textAlign: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', marginBottom: 24 },
  card: { backgroundColor: '#f6f6f6', padding: 18, marginVertical: 8, borderRadius: 10 },
  cardText: { fontSize: 18 },
  info: { textAlign: 'center', marginTop: 24, color: '#999' },
});
