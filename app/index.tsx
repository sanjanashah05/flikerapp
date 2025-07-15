import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#000000', '#1a1a1a']} style={styles.container}>
      {/* Custom Logo Design */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <View style={styles.logoInner}>
            <Text style={styles.logoIcon}>⚡</Text>
          </View>
        </View>
        <Text style={styles.brandName}>FLIKER</Text>
        <Text style={styles.tagline}>Bringing Every Match to Life!</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.sportsGrid}>
          <View style={styles.sportIcon}>
            <Text style={styles.sportEmoji}>🏏</Text>
          </View>
          <View style={styles.sportIcon}>
            <Text style={styles.sportEmoji}>🏀</Text>
          </View>
          <View style={styles.sportIcon}>
            <Text style={styles.sportEmoji}>⚽</Text>
          </View>
          <View style={styles.sportIcon}>
            <Text style={styles.sportEmoji}>🤼</Text>
          </View>
        </View>
      </View>

      {/* Title & Description */}
      <View style={styles.textSection}>
        <Text style={styles.title}>Multi-Sport Live Scoring</Text>
        <Text style={styles.subtitle}>
          Real-time updates for Cricket, Basketball, Football & Kabaddi. 
          Create matches, track scores, and manage tournaments all in one place.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        onPress={() => router.replace('/auth/login')}
        style={styles.getStartedButton}
        activeOpacity={0.85}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>

      {/* Features Preview */}
      <View style={styles.featuresPreview}>
        <Text style={styles.featureText}>✨ Live Match Updates</Text>
        <Text style={styles.featureText}>📊 Real-time Statistics</Text>
        <Text style={styles.featureText}>🏆 Tournament Management</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F85F6A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#F85F6A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 28,
    color: 'white',
  },
  brandName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 2,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#F85F6A',
    fontWeight: '600',
    textAlign: 'center',
  },
  heroSection: {
    marginBottom: 40,
  },
  sportsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  sportIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(248, 95, 106, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sportEmoji: {
    fontSize: 24,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: '#F85F6A',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 60,
    marginBottom: 30,
    shadowColor: '#F85F6A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  featuresPreview: {
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
});