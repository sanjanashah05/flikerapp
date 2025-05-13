import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
        <TouchableOpacity onPress={() => navigateTo('../profile')}>
          <Ionicons name="person-circle-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#ccc" />
        <TextInput placeholder="Search" placeholderTextColor="#aaa" style={styles.searchInput} />
      </View>

      {/* Live Scores Section */}
      <Text style={styles.sectionTitle}>Live Scores</Text>
      <View style={styles.grid}>
        {[
          { title: 'Cricket, Kabaddi, Football', path: '/scores' },
          { title: 'Player Stats, Team Management', path: '/stats' },
          { title: 'Scorekeeping, Stats Analysis', path: '/analysis' },
          { title: 'Live Action, Excitement', path: '/live' },
        ].map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.gridItem}
            onPress={() => navigateTo(item.path)}
          >
            <Text style={styles.gridItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Get Started Section */}
      <Text style={styles.sectionSubTitle}>Get Started</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigateTo('/explore')}>
        <Text style={styles.cardTitle}>Join the Fun!</Text>
        <Text style={styles.cardSub}>Start Exploring Now!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigateTo('/team')}>
        <Text style={styles.cardTitle}>Create Your Team</Text>
        <Text style={styles.cardSub}>Lead to Victory!</Text>
      </TouchableOpacity>

      {/* Discover More Section */}
      <Text style={styles.sectionSubTitle}>Discover More</Text>
      <TouchableOpacity style={styles.discoverCard} onPress={() => navigateTo('/players')}>
        <View>
          <Text style={styles.cardTitle}>Explore Player Stats</Text>
          <Text style={styles.cardSub}>Track Team Progress</Text>
        </View>
        <Text style={styles.discoverAction}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
    backgroundColor: '#111',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
  },
  searchBar: {
    backgroundColor: '#222',
    borderRadius: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gridItem: {
    backgroundColor: '#333',
    borderRadius: 16,
    padding: 16,
    width: '47%',
    marginBottom: 12,
  },
  gridItemText: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 16,
    marginVertical: 8,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '600',
  },
  cardSub: {
    color: '#bbb',
  },
  discoverCard: {
    backgroundColor: '#555',
    borderRadius: 20,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discoverAction: {
    color: '#fff',
  }, 
});
