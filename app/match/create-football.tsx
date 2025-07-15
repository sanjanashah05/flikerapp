import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const matchDurations = [
  { id: 'standard', name: 'Standard', duration: '90', description: '45 min halves + stoppage' },
  { id: 'youth', name: 'Youth', duration: '80', description: '40 min halves' },
  { id: 'custom', name: 'Custom', duration: 'custom', description: 'Set your own duration' },
];

const trackingOptions = [
  { id: 'goals', name: 'Goals', icon: '⚽', enabled: true },
  { id: 'assists', name: 'Assists', icon: '🎯', enabled: true },
  { id: 'cards', name: 'Cards', icon: '🟨', enabled: true },
  { id: 'possession', name: 'Possession', icon: '📊', enabled: false },
  { id: 'corners', name: 'Corners', icon: '🚩', enabled: false },
  { id: 'fouls', name: 'Fouls', icon: '🚫', enabled: false },
];

export default function CreateFootballMatchScreen() {
  const router = useRouter();
  const [matchName, setMatchName] = useState('');
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [venue, setVenue] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('standard');
  const [customDuration, setCustomDuration] = useState('');
  const [trackingSettings, setTrackingSettings] = useState(trackingOptions);

  const toggleTracking = (id: string) => {
    setTrackingSettings(prev => 
      prev.map(item => 
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const handleCreateMatch = () => {
    if (!matchName || !team1Name || !team2Name) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    if (selectedDuration === 'custom' && !customDuration) {
      Alert.alert('Error', 'Please enter custom match duration');
      return;
    }
    
    Alert.alert('Success', 'Football match created successfully!', [
      { text: 'OK', onPress: () => router.push('/match/football-scoring') }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>⚽ Football Match Setup</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Match Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Details</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Match Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Premier League Final"
              placeholderTextColor="#666"
              value={matchName}
              onChangeText={setMatchName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Venue</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Wembley Stadium"
              placeholderTextColor="#666"
              value={venue}
              onChangeText={setVenue}
            />
          </View>
        </View>

        {/* Teams */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Teams</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Home Team *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Manchester United"
              placeholderTextColor="#666"
              value={team1Name}
              onChangeText={setTeam1Name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Away Team *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Liverpool FC"
              placeholderTextColor="#666"
              value={team2Name}
              onChangeText={setTeam2Name}
            />
          </View>
        </View>

        {/* Match Duration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Duration</Text>
          <View style={styles.durationGrid}>
            {matchDurations.map((duration) => (
              <TouchableOpacity
                key={duration.id}
                style={[
                  styles.durationCard,
                  selectedDuration === duration.id && styles.durationCardSelected
                ]}
                onPress={() => setSelectedDuration(duration.id)}
              >
                <Text style={[
                  styles.durationName,
                  selectedDuration === duration.id && styles.durationTextSelected
                ]}>
                  {duration.name}
                </Text>
                <Text style={[
                  styles.durationTime,
                  selectedDuration === duration.id && styles.durationTextSelected
                ]}>
                  {duration.duration === 'custom' ? 'Custom' : `${duration.duration} min`}
                </Text>
                <Text style={[
                  styles.durationDescription,
                  selectedDuration === duration.id && styles.durationDescriptionSelected
                ]}>
                  {duration.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {selectedDuration === 'custom' && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Custom Duration (minutes)</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., 60"
                placeholderTextColor="#666"
                value={customDuration}
                onChangeText={setCustomDuration}
                keyboardType="numeric"
              />
            </View>
          )}
        </View>

        {/* Tracking Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Tracking</Text>
          <Text style={styles.sectionSubtitle}>Select what you want to track during the match</Text>
          
          <View style={styles.trackingContainer}>
            {trackingSettings.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.trackingItem,
                  item.enabled && styles.trackingItemEnabled
                ]}
                onPress={() => toggleTracking(item.id)}
              >
                <Text style={styles.trackingIcon}>{item.icon}</Text>
                <Text style={[
                  styles.trackingName,
                  item.enabled && styles.trackingNameEnabled
                ]}>
                  {item.name}
                </Text>
                <View style={[
                  styles.trackingToggle,
                  item.enabled && styles.trackingToggleActive
                ]}>
                  {item.enabled && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Formation Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formation Setup</Text>
          <View style={styles.formationPreview}>
            <Text style={styles.formationText}>⚽ Default: 4-4-2 Formation</Text>
            <Text style={styles.formationSubtext}>You can adjust formations during the match</Text>
          </View>
        </View>

        {/* Features Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>⚽ Goal & assist tracking</Text>
            <Text style={styles.featureItem}>🟨 Yellow & red card system</Text>
            <Text style={styles.featureItem}>⏱️ Match timer with stoppage time</Text>
            <Text style={styles.featureItem}>🔄 Substitution management</Text>
            <Text style={styles.featureItem}>📊 Live match statistics</Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateMatch}>
          <Text style={styles.createButtonText}>Create Football Match</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F85F6A',
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  durationGrid: {
    gap: 12,
    marginBottom: 16,
  },
  durationCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
  },
  durationCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  durationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  durationTime: {
    fontSize: 14,
    color: '#F85F6A',
    fontWeight: '600',
    marginBottom: 4,
  },
  durationDescription: {
    fontSize: 12,
    color: '#999',
  },
  durationTextSelected: {
    color: '#F85F6A',
  },
  durationDescriptionSelected: {
    color: '#F85F6A',
    opacity: 0.8,
  },
  trackingContainer: {
    gap: 12,
  },
  trackingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  trackingItemEnabled: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  trackingIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  trackingName: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    fontWeight: '600',
  },
  trackingNameEnabled: {
    color: '#F85F6A',
  },
  trackingToggle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackingToggleActive: {
    backgroundColor: '#F85F6A',
    borderColor: '#F85F6A',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  formationPreview: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  formationText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginBottom: 4,
  },
  formationSubtext: {
    fontSize: 14,
    color: '#999',
  },
  featuresList: {
    gap: 8,
  },
  featureItem: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  createButton: {
    backgroundColor: '#F85F6A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});