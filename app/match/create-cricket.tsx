import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const formats = [
  { id: 't10', name: 'T10', overs: 10, description: '10 overs per side' },
  { id: 't20', name: 'T20', overs: 20, description: '20 overs per side' },
  { id: 'odi', name: 'ODI', overs: 50, description: '50 overs per side' },
  { id: 'test', name: 'Test', overs: null, description: 'Unlimited overs' },
];

const tossDecisions = [
  { id: 'bat', name: 'Bat First', icon: '🏏' },
  { id: 'bowl', name: 'Bowl First', icon: '⚾' },
];

export default function CreateCricketMatchScreen() {
  const router = useRouter();
  const [matchName, setMatchName] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [tossWinner, setTossWinner] = useState<string | null>(null);
  const [tossDecision, setTossDecision] = useState<string | null>(null);
  const [venue, setVenue] = useState('');

  const handleCreateMatch = () => {
    if (!matchName || !selectedFormat || !team1Name || !team2Name || !tossWinner || !tossDecision) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Cricket match created successfully!', [
      { text: 'OK', onPress: () => router.push('/match/cricket-scoring') }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏏 Cricket Match Setup</Text>
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
              placeholder="e.g., Local Championship Final"
              placeholderTextColor="#666"
              value={matchName}
              onChangeText={setMatchName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Venue</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Central Cricket Ground"
              placeholderTextColor="#666"
              value={venue}
              onChangeText={setVenue}
            />
          </View>
        </View>

        {/* Format Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Format *</Text>
          <View style={styles.formatGrid}>
            {formats.map((format) => (
              <TouchableOpacity
                key={format.id}
                style={[
                  styles.formatCard,
                  selectedFormat === format.id && styles.formatCardSelected
                ]}
                onPress={() => setSelectedFormat(format.id)}
              >
                <Text style={[
                  styles.formatName,
                  selectedFormat === format.id && styles.formatTextSelected
                ]}>
                  {format.name}
                </Text>
                <Text style={[
                  styles.formatDescription,
                  selectedFormat === format.id && styles.formatDescriptionSelected
                ]}>
                  {format.description}
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
              placeholder="e.g., Mumbai Indians"
              placeholderTextColor="#666"
              value={team1Name}
              onChangeText={setTeam1Name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Team 2 Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Chennai Super Kings"
              placeholderTextColor="#666"
              value={team2Name}
              onChangeText={setTeam2Name}
            />
          </View>
        </View>

        {/* Toss */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Toss Details *</Text>
          
          <Text style={styles.subSectionTitle}>Toss Winner</Text>
          <View style={styles.tossOptions}>
            <TouchableOpacity
              style={[
                styles.tossOption,
                tossWinner === 'team1' && styles.tossOptionSelected
              ]}
              onPress={() => setTossWinner('team1')}
            >
              <Text style={[
                styles.tossOptionText,
                tossWinner === 'team1' && styles.tossOptionTextSelected
              ]}>
                {team1Name || 'Team 1'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.tossOption,
                tossWinner === 'team2' && styles.tossOptionSelected
              ]}
              onPress={() => setTossWinner('team2')}
            >
              <Text style={[
                styles.tossOptionText,
                tossWinner === 'team2' && styles.tossOptionTextSelected
              ]}>
                {team2Name || 'Team 2'}
              </Text>
            </TouchableOpacity>
          </View>

          {tossWinner && (
            <>
              <Text style={styles.subSectionTitle}>Toss Decision</Text>
              <View style={styles.tossDecisionOptions}>
                {tossDecisions.map((decision) => (
                  <TouchableOpacity
                    key={decision.id}
                    style={[
                      styles.decisionOption,
                      tossDecision === decision.id && styles.decisionOptionSelected
                    ]}
                    onPress={() => setTossDecision(decision.id)}
                  >
                    <Text style={styles.decisionIcon}>{decision.icon}</Text>
                    <Text style={[
                      styles.decisionText,
                      tossDecision === decision.id && styles.decisionTextSelected
                    ]}>
                      {decision.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </View>

        {/* Features Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>⚾ Ball-by-ball commentary</Text>
            <Text style={styles.featureItem}>📊 Live player statistics</Text>
            <Text style={styles.featureItem}>🏃‍♂️ Run rate tracking</Text>
            <Text style={styles.featureItem}>📱 Real-time score updates</Text>
            <Text style={styles.featureItem}>🔄 Undo/Redo actions</Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateMatch}>
          <Text style={styles.createButtonText}>Create Cricket Match</Text>
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
  subSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
    marginTop: 16,
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
  formatGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  formatCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
  },
  formatCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  formatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  formatDescription: {
    fontSize: 12,
    color: '#999',
  },
  formatTextSelected: {
    color: '#F85F6A',
  },
  formatDescriptionSelected: {
    color: '#F85F6A',
    opacity: 0.8,
  },
  tossOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  tossOption: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  tossOptionSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  tossOptionText: {
    color: 'white',
    fontWeight: '600',
  },
  tossOptionTextSelected: {
    color: '#F85F6A',
  },
  tossDecisionOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  decisionOption: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  decisionOptionSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  decisionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  decisionText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  decisionTextSelected: {
    color: '#F85F6A',
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