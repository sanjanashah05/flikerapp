import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateMatchScreen() {
  const router = useRouter();

  const handleSelectSport = (sport: string) => {
    router.push(`/${sport}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ready to create a match?</Text>
      <Text style={styles.subtext}>Choose your sport to continue:</Text>

      {['cricket', 'kabaddi', 'basketball', 'football'].map((sport) => (
        <TouchableOpacity key={sport} style={styles.button} onPress={() => handleSelectSport(sport)}>
          <Text style={styles.buttonText}>{sport.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', padding: 24 },
  header: { fontSize: 22, color: 'white', fontWeight: 'bold', marginBottom: 12 },
  subtext: { fontSize: 14, color: '#aaa', marginBottom: 24 },
  button: {
    backgroundColor: '#F85F6A',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 16 },
});
