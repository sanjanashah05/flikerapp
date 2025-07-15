import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const sports = [
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'football', name: 'Football', icon: '⚽' },
  { id: 'kabaddi', name: 'Kabaddi', icon: '🤼' },
];

const teamTypes = [
  { id: 'professional', name: 'Professional', description: 'Competitive team' },
  { id: 'amateur', name: 'Amateur', description: 'Casual/recreational team' },
  { id: 'school', name: 'School', description: 'Educational institution' },
  { id: 'corporate', name: 'Corporate', description: 'Company team' },
];

export default function CreateTeamScreen() {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [teamLogo, setTeamLogo] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setTeamLogo(result.assets[0].uri);
    }
  };

  const handleCreateTeam = () => {
    if (!teamName || !selectedSport || !selectedType) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Team created successfully!', [
      { text: 'OK', onPress: () => router.push('/teams/manage-team') }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Team</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Team Logo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team Logo</Text>
          <TouchableOpacity style={styles.logoContainer} onPress={pickImage}>
            {teamLogo ? (
              <Image source={{ uri: teamLogo }} style={styles.logoImage} />
            ) : (
              <View style={styles.logoPlaceholder}>
                <Ionicons name="camera-outline" size={32} color="#666" />
                <Text style={styles.logoText}>Add Team Logo</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Basic Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team Information</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Team Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Thunder Warriors"
              placeholderTextColor="#666"
              value={teamName}
              onChangeText={setTeamName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Brief description about your team..."
              placeholderTextColor="#666"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Mumbai, Maharashtra"
              placeholderTextColor="#666"
              value={location}
              onChangeText={setLocation}
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

        {/* Team Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team Type *</Text>
          <View style={styles.typeContainer}>
            {teamTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.typeCard,
                  selectedType === type.id && styles.typeCardSelected
                ]}
                onPress={() => setSelectedType(type.id)}
              >
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
                {selectedType === type.id && (
                  <View style={styles.selectedIndicator}>
                    <Text style={styles.checkmark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contact Email</Text>
            <TextInput
              style={styles.input}
              placeholder="team@example.com"
              placeholderTextColor="#666"
              value={contactEmail}
              onChangeText={setContactEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contact Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="+91 9876543210"
              placeholderTextColor="#666"
              value={contactPhone}
              onChangeText={setContactPhone}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Team Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>👥 Player management system</Text>
            <Text style={styles.featureItem}>📅 Match scheduling</Text>
            <Text style={styles.featureItem}>📊 Team performance analytics</Text>
            <Text style={styles.featureItem}>💬 Team communication</Text>
            <Text style={styles.featureItem}>🏆 Tournament participation</Text>
            <Text style={styles.featureItem}>📱 Invite system for players</Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateTeam}>
          <Text style={styles.createButtonText}>Create Team</Text>
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
  logoContainer: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  logoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1e1e1e',
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#666',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
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