import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏏 Fliker</Text>
      <Text style={styles.title}>Welcome to Fliker</Text>
      <Text style={styles.subtitle}>Bringing Every Match to Life!</Text>

      <View style={styles.sportsContainer}>
        <Text style={styles.sport}>Cricket</Text>
        <Text style={styles.sport}>Kabaddi</Text>
        <Text style={styles.sport}>Basketball</Text>
        <Text style={styles.sport}>Football</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b1d40', justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 32, color: 'white', marginBottom: 10 },
  title: { fontSize: 24, color: 'white' },
  subtitle: { fontSize: 16, color: 'white', marginBottom: 40 },
  sportsContainer: { marginBottom: 40, alignItems: 'center' },
  sport: { fontSize: 16, color: '#ccc', marginVertical: 4 },
  button: { backgroundColor: '#f15a29', padding: 14, paddingHorizontal: 32, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16 },
});
