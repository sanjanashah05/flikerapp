import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChooseSport() {
  const router = useRouter();

  const handleSelectSport = (route: string) => {
    router.replace(route);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Fliker</Text>
      <Text style={styles.title}>Pick a Sport</Text>
      <Text style={styles.subtitle}>Choose a sport to get started with</Text>

      <TouchableOpacity style={styles.card} onPress={() => handleSelectSport('/cricket')}>
        <Text style={styles.cardText}>Cricket</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleSelectSport('/kabaddi')}>
        <Text style={styles.cardText}>Kabaddi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleSelectSport('/basketball')}>
        <Text style={styles.cardText}>Basketball</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleSelectSport('/football')}>
        <Text style={styles.cardText}>Football</Text>
      </TouchableOpacity>

      <Text style={styles.info}>Don’t worry, you can always switch between sports later</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24, flex: 1,justifyContent: 'center', backgroundColor: 'black',
  },
  logo: {    fontSize: 28 ,fontWeight: 'bold',color: '#F85F6A',   textAlign: 'center',marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: 'white',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 18,
    marginVertical: 8,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: 'white',
  },
  info: {
    textAlign: 'center',
    marginTop: 24,
    color: '#999',
  },
});
