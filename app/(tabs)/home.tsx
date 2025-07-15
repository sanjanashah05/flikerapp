import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../contexts/ThemeContext';

const featuredMatches = [
  {
    title: 'India vs Pakistan',
    subtitle: 'Cricket · Sun 7PM',
    image: require('../../assets/feature1.jpg'),
  },
  {
    title: 'Lakers vs Heat',
    subtitle: 'Basketball · Sat 9PM',
    image: require('../../assets/feature2.jpg'),
  },
];

const liveMatches = [
  {
    title: 'Real Madrid vs PSG',
    teams: 'RMA vs PSG',
    score: '2 - 1',
    time: '68\'',
    status: 'LIVE',
    image: require('../../assets/live1.jpg'),
  },
  {
    title: 'India vs Australia',
    teams: 'IND vs AUS',
    score: '123/4 (14.2)',
    time: '14m',
    status: 'LIVE',
    image: require('../../assets/live2.jpg'),
  },
];

export default function HomeScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Welcome Header */}
      <View style={styles.welcomeHeader}>
        <Text style={[styles.welcomeText, { color: colors.textSecondary }]}>Welcome back!</Text>
        <Text style={[styles.userName, { color: colors.text }]}>John Doe</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: colors.primary }]}
          onPress={() => router.push('/(tabs)/create-match')}
        >
          <Text style={styles.actionButtonText}>⚡ Create Match</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: colors.surface }]}
          onPress={() => router.push('/(tabs)/explore')}
        >
          <Text style={[styles.actionButtonText, { color: colors.text }]}>🔍 Find Matches</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.primary }]}>🏆 Featured Matches</Text>
      {featuredMatches.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => router.push('/match/live-match')}>
          <ImageBackground source={item.image} style={styles.imageCard} imageStyle={{ borderRadius: 12 }}>
          <View style={styles.overlay}>
            <Text style={[styles.cardTitle, { color: 'white' }]}>{item.title}</Text>
            <Text style={[styles.cardSubtitle, { color: '#ccc' }]}>{item.subtitle}</Text>
          </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}

      <Text style={[styles.sectionTitle, { color: colors.primary }]}>🔴 Live Matches</Text>
      {liveMatches.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => router.push('/match/live-match')}>
          <ImageBackground source={item.image} style={styles.imageCard} imageStyle={{ borderRadius: 12 }}>
          <View style={styles.overlay}>
            <Text style={[styles.cardTitle, { color: 'white' }]}>{item.title}</Text>
            <Text style={[styles.cardSubtitle, { color: '#ccc' }]}>{item.teams}</Text>
            <Text style={[styles.cardSubtitle, { color: '#ccc' }]}>Score: {item.score}</Text>
            <Text style={[styles.cardSubtitle, { color: '#ccc' }]}>Time: {item.time}</Text>
            <Text style={[styles.status, { color: colors.primary }]}>{item.status}</Text>
          </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  welcomeHeader: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 12,
  },
  imageCard: {
    height: 160,
    marginBottom: 16,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 6,
  },
});
