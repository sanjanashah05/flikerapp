import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const sports = [
  {
    id: 'cricket',
    name: 'Cricket',
    icon: '🏏',
    description: 'T10, T20, ODI, Test formats',
    features: ['Ball-by-ball updates', 'Overs tracking', 'Player statistics'],
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: '🏀',
    description: 'Quarter-based scoring system',
    features: ['2P/3P/Free throws', 'Foul tracking', 'Shot clock'],
  },
  {
    id: 'football',
    name: 'Football',
    icon: '⚽',
    description: 'Goals, assists, and cards',
    features: ['Match duration', 'Player stats', 'Possession tracking'],
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    icon: '🤼',
    description: 'Raid-based scoring',
    features: ['Raid outcomes', 'Live timer', 'Player roles'],
  },
];

export default function SportsSelectionScreen() {
  const router = useRouter();
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const handleSportSelect = (sportId: string) => {
    setSelectedSport(sportId);
  };

  const handleContinue = () => {
    if (selectedSport) {
      // Navigate to the specific sport screen or main app
      router.replace('/(tabs)/home');
    } else {
      // If no sport selected, go to main app anyway
      router.replace('/(tabs)/home');
    }
  };

  const handleSkip = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoIcon}>⚡</Text>
          </View>
          <Text style={styles.brandName}>FLIKER</Text>
        </View>
        <Text style={styles.title}>Choose Your Sport</Text>
        <Text style={styles.subtitle}>
          Select a sport to get started with, or explore all sports later
        </Text>
      </View>

      {/* Sports Grid */}
      <ScrollView style={styles.sportsContainer} showsVerticalScrollIndicator={false}>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport.id}
            style={[
              styles.sportCard,
              selectedSport === sport.id && styles.sportCardSelected
            ]}
            onPress={() => handleSportSelect(sport.id)}
          >
            <View style={styles.sportHeader}>
              <Text style={styles.sportIcon}>{sport.icon}</Text>
              <View style={styles.sportInfo}>
                <Text style={[
                  styles.sportName,
                  selectedSport === sport.id && styles.sportTextSelected
                ]}>
                  {sport.name}
                </Text>
                <Text style={[
                  styles.sportDescription,
                  selectedSport === sport.id && styles.sportDescriptionSelected
                ]}>
                  {sport.description}
                </Text>
              </View>
              {selectedSport === sport.id && (
                <View style={styles.selectedIndicator}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              )}
            </View>
            
            <View style={styles.featuresContainer}>
              {sport.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.featureBullet}>•</Text>
                  <Text style={[
                    styles.featureText,
                    selectedSport === sport.id && styles.featureTextSelected
                  ]}>
                    {feature}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>
            {selectedSport ? 'Get Started' : 'Explore All Sports'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip for now</Text>
        </TouchableOpacity>
      </View>

      {/* Info Text */}
      <Text style={styles.infoText}>
        Don't worry, you can always switch between sports later
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F85F6A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoIcon: {
    fontSize: 20,
    color: 'white',
  },
  brandName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
  },
  sportsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  sportCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#333',
  },
  sportCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.05)',
  },
  sportHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  sportIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  sportInfo: {
    flex: 1,
  },
  sportName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  sportDescription: {
    fontSize: 14,
    color: '#999',
  },
  sportTextSelected: {
    color: '#F85F6A',
  },
  sportDescriptionSelected: {
    color: '#F85F6A',
    opacity: 0.8,
  },
  selectedIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F85F6A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  featuresContainer: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureBullet: {
    color: '#F85F6A',
    fontSize: 16,
    marginRight: 8,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 14,
    color: '#ccc',
  },
  featureTextSelected: {
    color: '#F85F6A',
    opacity: 0.9,
  },
  actionContainer: {
    gap: 12,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#F85F6A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  skipButton: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  skipButtonText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});