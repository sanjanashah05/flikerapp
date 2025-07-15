import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const matchTypes = [
  { id: 'league', name: 'League', description: 'Round-robin format' },
  { id: 'knockout', name: 'Knockout', description: 'Elimination format' },
  { id: 'friendly', name: 'Friendly', description: 'Practice match' },
];

const playerRoles = [
  { id: 'raider', name: 'Raider', icon: '🏃‍♂️', description: 'Attacks opponent half' },
  { id: 'defender', name: 'Defender', icon: '🛡️', description: 'Defends team half' },
  { id: 'allrounder', name: 'All-rounder', icon: '⚡', description: 'Both raid & defend' },
];

const raidOutcomes = [
  { id: 'successful', name: 'Successful Raid', points: '+1', color: '#4CAF50' },
  { id: 'unsuccessful', name: 'Unsuccessful Raid', points: '0', color: '#FF5252' },
  { id: 'bonus', name: 'Bonus Point', points: '+1', color: '#FF9800' },
  { id: 'super', name: 'Super Raid', points: '+3+', color: '#9C27B0' },
  { id: 'allout', name: 'All Out', points: '+2', color: '#F85F6A' },
];

export default function CreateKabaddiMatchScreen() {
  const router = useRouter();
  const [matchName, setMatchName] = useState('');
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [venue, setVenue] = useState('');
  const [selectedMatchType, setSelectedMatchType] = useState<string | null>(null);
  const [halfDuration, setHalfDuration] = useState('20');
  const [playersPerTeam, setPlayersPerTeam] = useState('7');

  const handleCreateMatch = () => {
    if (!matchName || !selectedMatchType || !team1Name || !team2Name) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Kabaddi match created successfully!', [
      { text: 'OK', onPress: () => router.push('/match/kabaddi-scoring') }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🤼 Kabaddi Match Setup</Text>
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
              placeholder="e.g., Pro Kabaddi League Final"
              placeholderTextColor="#666"
              value={matchName}
              onChangeText={setMatchName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Venue</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Thyagaraj Sports Complex"
              placeholderTextColor="#666"
              value={venue}
              onChangeText={setVenue}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.inputLabel}>Half Duration (min)</Text>
              <TextInput
                style={styles.input}
                placeholder="20"
                placeholderTextColor="#666"
                value={halfDuration}
                onChangeText={setHalfDuration}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.inputLabel}>Players per Team</Text>
              <TextInput
                style={styles.input}
                placeholder="7"
                placeholderTextColor="#666"
                value={playersPerTeam}
                onChangeText={setPlayersPerTeam}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Match Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Type *</Text>
          <View style={styles.matchTypeGrid}>
            {matchTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.matchTypeCard,
                  selectedMatchType === type.id && styles.matchTypeCardSelected
                ]}
                onPress={() => setSelectedMatchType(type.id)}
              >
                <Text style={[
                  styles.matchTypeName,
                  selectedMatchType === type.id && styles.matchTypeTextSelected
                ]}>
                  {type.name}
                </Text>
                <Text style={[
                  styles.matchTypeDescription,
                  selectedMatchType === type.id && styles.matchTypeDescriptionSelected
                ]}>
                  {type.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Teams */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Teams</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Team 1 Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Patna Pirates"
              placeholderTextColor="#666"
              value={team1Name}
              onChangeText={setTeam1Name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Team 2 Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Bengaluru Bulls"
              placeholderTextColor="#666"
              value={team2Name}
              onChangeText={setTeam2Name}
            />
          </View>
        </View>

        {/* Player Roles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Player Roles</Text>
          <Text style={styles.sectionSubtitle}>Understanding different player positions</Text>
          
          <View style={styles.rolesContainer}>
            {playerRoles.map((role) => (
              <View key={role.id} style={styles.roleCard}>
                <Text style={styles.roleIcon}>{role.icon}</Text>
                <View style={styles.roleInfo}>
                  <Text style={styles.roleName}>{role.name}</Text>
                  <Text style={styles.roleDescription}>{role.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Raid Outcomes Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scoring System</Text>
          <Text style={styles.sectionSubtitle}>Different raid outcomes and their points</Text>
          
          <View style={styles.outcomesContainer}>
            {raidOutcomes.map((outcome) => (
              <View key={outcome.id} style={styles.outcomeCard}>
                <View style={[styles.outcomeIndicator, { backgroundColor: outcome.color }]} />
                <View style={styles.outcomeInfo}>
                  <Text style={styles.outcomeName}>{outcome.name}</Text>
                  <Text style={[styles.outcomePoints, { color: outcome.color }]}>
                    {outcome.points}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Features Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>🏃‍♂️ Raid outcome tracking</Text>
            <Text style={styles.featureItem}>⏱️ Live match timer</Text>
            <Text style={styles.featureItem}>📊 Player performance stats</Text>
            <Text style={styles.featureItem}>🔄 Substitution management</Text>
            <Text style={styles.featureItem}>🏆 All-out bonus tracking</Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateMatch}>
          <Text style={styles.createButtonText}>Create Kabaddi Match</Text>
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
  row: {
    flexDirection: 'row',
  },
  matchTypeGrid: {
    gap: 12,
  },
  matchTypeCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
  },
  matchTypeCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  matchTypeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  matchTypeDescription: {
    fontSize: 12,
    color: '#999',
  },
  matchTypeTextSelected: {
    color: '#F85F6A',
  },
  matchTypeDescriptionSelected: {
    color: '#F85F6A',
    opacity: 0.8,
  },
  rolesContainer: {
    gap: 12,
  },
  roleCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  roleInfo: {
    flex: 1,
  },
  roleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 14,
    color: '#999',
  },
  outcomesContainer: {
    gap: 8,
  },
  outcomeCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  outcomeIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  outcomeInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outcomeName: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  outcomePoints: {
    fontSize: 14,
    fontWeight: 'bold',
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