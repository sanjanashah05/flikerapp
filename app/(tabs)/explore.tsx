import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const sports = ['🔥 Trending', 'Football', 'Basketball', 'Cricket', 'Kabaddi'];

const matches = [
  {
    sport: 'Football',
    title: 'Portugal vs Switzerland',
    time: '8:30 PM · Wed 12/16',
    image: require('../../assets/live1.jpg'),
  },
  {
    sport: 'Basketball',
    title: 'Suns vs Celtics',
    time: '9:00 PM · Today',
    image: require('../../assets/live2.jpg'),
  },
  {
    sport: 'Cricket',
    title: 'India vs Australia',
    time: '6:00 PM · Tomorrow',
    image: require('../../assets/feature1.jpg'),
  },
];
export default function ExploreScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('🔥 Trending');

  const filteredMatches = matches.filter(match =>
    (selectedSport === '🔥 Trending' || match.sport === selectedSport) &&
    match.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Search Bar */}
      <TextInput
        placeholder="Search team, sport or venue"
        placeholderTextColor={colors.textSecondary}
        style={[styles.search, { backgroundColor: colors.surface, color: colors.text }]}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Horizontal filter row (not full scroll container!) */}
      <View style={{ height: 42, marginBottom: 16 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sports.map(sport => (
            <TouchableOpacity
              key={sport}
              onPress={() => setSelectedSport(sport)}
              style={[
                styles.filterButton,
                { backgroundColor: colors.surface },
                selectedSport === sport && { backgroundColor: colors.primary },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: colors.text },
                  selectedSport === sport && { color: 'white', fontWeight: 'bold' },
                ]}
              >
                {sport}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Match List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {filteredMatches.map((match, i) => (
          <View key={i} style={[styles.card, { backgroundColor: colors.surface }]}>
            <Image source={match.image} style={styles.cardImage} />
            <View style={styles.cardOverlay}>
              <Text style={[styles.cardTitle, { color: 'white' }]}>{match.title}</Text>
              <Text style={[styles.cardSubtitle, { color: '#ccc' }]}>{match.time}</Text>
              <Text style={[styles.cardSport, { color: colors.primary }]}>{match.sport}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  search: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  filterRow: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  filterButton: {
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 20,
  marginRight: 10,
  flexShrink: 1,  // ✅ prevent it from expanding too much
},

  filterText: {
    fontSize: 14,
  },
  card: {
    marginBottom: 20,
    borderRadius: 14,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 13,
  },
  cardSport: {
    fontSize: 13,
    marginTop: 4,
  },
});
