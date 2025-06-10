import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

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
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.sectionTitle}>🏆 Featured Matches</Text>
      {featuredMatches.map((item, i) => (
        <ImageBackground key={i} source={item.image} style={styles.imageCard} imageStyle={{ borderRadius: 12 }}>
          <View style={styles.overlay}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
        </ImageBackground>
      ))}

      <Text style={styles.sectionTitle}>🔴 Live Matches</Text>
      {liveMatches.map((item, i) => (
        <ImageBackground key={i} source={item.image} style={styles.imageCard} imageStyle={{ borderRadius: 12 }}>
          <View style={styles.overlay}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.teams}</Text>
            <Text style={styles.cardSubtitle}>Score: {item.score}</Text>
            <Text style={styles.cardSubtitle}>Time: {item.time}</Text>
            <Text style={[styles.status, { color: '#F85F6A' }]}>{item.status}</Text>
          </View>
        </ImageBackground>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F85F6A',
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
    color: 'white',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#ccc',
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 6,
  },
});
