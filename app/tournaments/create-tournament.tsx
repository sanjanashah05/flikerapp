import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const tournamentTypes = [
  { id: 'knockout', name: 'Knockout', icon: '🏆', description: 'Single elimination format' },
  { id: 'league', name: 'League', icon: '📊', description: 'Round-robin format' },
  { id: 'group', name: 'Group Stage', icon: '👥', description: 'Groups then knockout' },
];

const sports = [
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'football', name: 'Football', icon: '⚽' },
  { id: 'kabaddi', name: 'Kabaddi', icon: '🤼' },
];

export default function CreateTournamentScreen() {
  const router = useRouter();
  const [tournamentName, setTournamentName] = useState('');
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [maxTeams, setMaxTeams] = useState('8');
  const [entryFee, setEntryFee] = useState('');
  const [prizeMoney, setPrizeMoney] = useState('');
  const [venue, setVenue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTournament = () => {
    if (!tournamentName || !selectedSport || !selectedType || !maxTeams) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Tournament created successfully!', [
      { text: 'OK', onPress: () => router.push('/tournaments/manage-tournament') }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Tournament</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Basic Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tournament Details</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tournament Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Summer Championship 2024"
              placeholderTextColor="#666"
              value={tournamentName}
              onChangeText={setTournamentName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Brief description of the tournament..."
              placeholderTextColor="#666"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Venue</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Central Sports Complex"
              placeholderTextColor="#666"
              value={venue}
              onChangeText={setVenue}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Start Date</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 2024-03-15"
              placeholderTextColor="#666"
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>
        </View>

        {/* Sport Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Sport *</Text>
          <View style={styles.sportsGrid}>
            {sports.map((sport) => (
              <TouchableOpacity
                key={sport.id}
                style={[
                  styles.sportCard,
                  selectedSport === sport.id && styles.sportCardSelected
                ]}
                onPress={() => setSelectedSport(sport.id)}
              >
                <Text style={styles.sportIcon}>{sport.icon}</Text>
                <Text style={[
                  styles.sportName,
                  selectedSport === sport.id && styles.sportTextSelected
                ]}>
                  {sport.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tournament Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tournament Format *</Text>
          <View style={styles.typeContainer}>
            {tournamentTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.typeCard,
                  selectedType === type.id && styles.typeCardSelected
                ]}
                onPress={() => setSelectedType(type.id)}
              >
                <Text style={styles.typeIcon}>{type.icon}</Text>
                <View style={styles.typeInfo}>
                  <Text style={[
                    styles.typeName,
                    selectedType === type.id && styles.typeTextSelected
                  ]}>
                    {type.name}
                  </Text>
                  <Text style={[
                    styles.typeDescription,
                    selectedType === type.id && styles.typeDescriptionSelected
                  ]}>
                    {type.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tournament Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tournament Settings</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Maximum Teams *</Text>
            <TextInput
              style={styles.input}
              placeholder="8"
              placeholderTextColor="#666"
              value={maxTeams}
              onChangeText={setMaxTeams}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.inputLabel}>Entry Fee (₹)</Text>
              <TextInput
                style={styles.input}
                placeholder="500"
                placeholderTextColor="#666"
                value={entryFee}
                onChangeText={setEntryFee}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.inputLabel}>Prize Money (₹)</Text>
              <TextInput
                style={styles.input}
                placeholder="10000"
                placeholderTextColor="#666"
                value={prizeMoney}
                onChangeText={setPrizeMoney}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Tournament Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tournament Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>🏆 Automated bracket generation</Text>
            <Text style={styles.featureItem}>📊 Live match scoring</Text>
            <Text style={styles.featureItem}>📱 Team registration system</Text>
            <Text style={styles.featureItem}>🎯 Real-time leaderboards</Text>
            <Text style={styles.featureItem}>📈 Tournament statistics</Text>
            <Text style={styles.featureItem}>🏅 Winner certificates</Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateTournament}>
          <Text style={styles.createButtonText}>Create Tournament</Text>
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
  },
  sportsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  sportCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
  },
  sportCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  sportIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  sportName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  sportTextSelected: {
    color: '#F85F6A',
  },
  typeContainer: {
    gap: 12,
  },
  typeCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  typeIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  typeInfo: {
    flex: 1,
  },
  typeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  typeDescription: {
    fontSize: 14,
    color: '#999',
  },
  typeTextSelected: {
    color: '#F85F6A',
  },
  typeDescriptionSelected: {
    color: '#F85F6A',
    opacity: 0.8,
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