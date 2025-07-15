import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const quarters = [
  { id: 'q1', name: 'Q1', description: 'First Quarter' },
  { id: 'q2', name: 'Q2', description: 'Second Quarter' },
  { id: 'q3', name: 'Q3', description: 'Third Quarter' },
  { id: 'q4', name: 'Q4', description: 'Fourth Quarter' },
];

const pointTypes = [
  { id: '2p', name: '2-Pointer', icon: '🏀', description: 'Regular field goal' },
  { id: '3p', name: '3-Pointer', icon: '🎯', description: 'Three-point shot' },
  { id: 'ft', name: 'Free Throw', icon: '🎪', description: 'Free throw attempt' },
];

export default function CreateBasketballMatchScreen() {
  const router = useRouter();
  const [matchName, setMatchName] = useState('');
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [venue, setVenue] = useState('');
  const [quarterDuration, setQuarterDuration] = useState('12');
  const [selectedQuarter, setSelectedQuarter] = useState('q1');
  const [shotClockEnabled, setShotClockEnabled] = useState(true);

  const handleCreateMatch = () => {
    if (!matchName || !team1Name || !team2Name) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Basketball match created successfully!', [
      { text: 'OK', onPress: () => router.push('/match/basketball-scoring') }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏀 Basketball Match Setup</Text>
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
              placeholder="e.g., City Championship Final"
              placeholderTextColor="#666"
              value={matchName}
              onChangeText={setMatchName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Venue</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Madison Square Garden"
              placeholderTextColor="#666"
              value={venue}
              onChangeText={setVenue}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Quarter Duration (minutes)</Text>
            <TextInput
              style={styles.input}
              placeholder="12"
              placeholderTextColor="#666"
              value={quarterDuration}
              onChangeText={setQuarterDuration}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Teams */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Teams</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Team 1 Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Lakers"
              placeholderTextColor="#666"
              value={team1Name}
              onChangeText={setTeam1Name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Team 2 Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Warriors"
              placeholderTextColor="#666"
              value={team2Name}
              onChangeText={setTeam2Name}
            />
          </View>
        </View>

        {/* Quarter Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Starting Quarter</Text>
          <View style={styles.quarterGrid}>
            {quarters.map((quarter) => (
              <TouchableOpacity
                key={quarter.id}
                style={[
                  styles.quarterCard,
                  selectedQuarter === quarter.id && styles.quarterCardSelected
                ]}
                onPress={() => setSelectedQuarter(quarter.id)}
              >
                <Text style={[
                  styles.quarterName,
                  selectedQuarter === quarter.id && styles.quarterTextSelected
                ]}>
                  {quarter.name}
                </Text>
                <Text style={[
                  styles.quarterDescription,
                  selectedQuarter === quarter.id && styles.quarterDescriptionSelected
                ]}>
                  {quarter.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Point Types Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scoring System</Text>
          <View style={styles.pointTypesContainer}>
            {pointTypes.map((type) => (
              <View key={type.id} style={styles.pointTypeCard}>
                <Text style={styles.pointTypeIcon}>{type.icon}</Text>
                <Text style={styles.pointTypeName}>{type.name}</Text>
                <Text style={styles.pointTypeDescription}>{type.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Game Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Settings</Text>
          
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => setShotClockEnabled(!shotClockEnabled)}
          >
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Shot Clock</Text>
              <Text style={styles.settingDescription}>24-second shot clock timer</Text>
            </View>
            <View style={[
              styles.toggle,
              shotClockEnabled && styles.toggleActive
            ]}>
              <View style={[
                styles.toggleThumb,
                shotClockEnabled && styles.toggleThumbActive
              ]} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Features Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>🏀 2P/3P/Free throw tracking</Text>
            <Text style={styles.featureItem}>⏱️ Shot clock & game timer</Text>
            <Text style={styles.featureItem}>🚫 Foul tracking system</Text>
            <Text style={styles.featureItem}>📊 Live player statistics</Text>
            <Text style={styles.featureItem}>🔄 Quarter-based scoring</Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateMatch}>
          <Text style={styles.createButtonText}>Create Basketball Match</Text>
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
  quarterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quarterCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
  },
  quarterCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  quarterName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  quarterDescription: {
    fontSize: 12,
    color: '#999',
  },
  quarterTextSelected: {
    color: '#F85F6A',
  },
  quarterDescriptionSelected: {
    color: '#F85F6A',
    opacity: 0.8,
  },
  pointTypesContainer: {
    gap: 12,
  },
  pointTypeCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointTypeIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  pointTypeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 12,
  },
  pointTypeDescription: {
    fontSize: 14,
    color: '#999',
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#999',
  },
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleActive: {
    backgroundColor: '#F85F6A',
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
  },
  toggleThumbActive: {
    alignSelf: 'flex-end',
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