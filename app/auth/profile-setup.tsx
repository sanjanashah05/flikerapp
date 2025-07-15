import { View, Text, TouchableOpacity,ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native';

const roles = [
  { id: 'player', title: 'Player', icon: '🏃‍♂️', description: 'I play sports' },
  { id: 'organizer', title: 'Organizer', icon: '📋', description: 'I organize matches & tournaments' },
  { id: 'fan', title: 'Fan', icon: '🎉', description: 'I follow and support teams' },
];

const sports = [
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'football', name: 'Football', icon: '⚽' },
  { id: 'kabaddi', name: 'Kabaddi', icon: '🤼' },
];

export default function ProfileSetupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [favoriteSports, setFavoriteSports] = useState<string[]>([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const toggleSport = (sportId: string) => {
    setFavoriteSports(prev => 
      prev.includes(sportId) 
        ? prev.filter(id => id !== sportId)
        : [...prev, sportId]
    );
  };

  const handleContinue = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }
    if (!selectedRole) {
      Alert.alert('Error', 'Please select your role');
      return;
    }
    // Save profile data and continue to sports selection
    router.replace('/auth/sports-selection');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.subtitle}>Tell us about yourself to get started</Text>
      </View>

      {/* Profile Photo */}
      <View style={styles.photoSection}>
        <TouchableOpacity style={styles.photoContainer} onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Ionicons name="camera-outline" size={32} color="#666" />
              <Text style={styles.photoText}>Add Photo</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor="#666"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Role Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Your Role</Text>
        <View style={styles.roleContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.roleCard,
                selectedRole === role.id && styles.roleCardSelected
              ]}
              onPress={() => setSelectedRole(role.id)}
            >
              <Text style={styles.roleIcon}>{role.icon}</Text>
              <Text style={[
                styles.roleTitle,
                selectedRole === role.id && styles.roleTextSelected
              ]}>
                {role.title}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === role.id && styles.roleTextSelected
              ]}>
                {role.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Favorite Sports (Optional) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Sports (Optional)</Text>
        <View style={styles.sportsContainer}>
          {sports.map((sport) => (
            <TouchableOpacity
              key={sport.id}
              style={[
                styles.sportChip,
                favoriteSports.includes(sport.id) && styles.sportChipSelected
              ]}
              onPress={() => toggleSport(sport.id)}
            >
              <Text style={styles.sportIcon}>{sport.icon}</Text>
              <Text style={[
                styles.sportName,
                favoriteSports.includes(sport.id) && styles.sportNameSelected
              ]}>
                {sport.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1e1e1e',
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#333',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  roleContainer: {
    gap: 12,
  },
  roleCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#333',
  },
  roleCardSelected: {
    borderColor: '#F85F6A',
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
  },
  roleIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 14,
    color: '#999',
  },
  roleTextSelected: {
    color: '#F85F6A',
  },
  sportsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  sportChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  sportChipSelected: {
    backgroundColor: 'rgba(248, 95, 106, 0.1)',
    borderColor: '#F85F6A',
  },
  sportIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  sportName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  sportNameSelected: {
    color: '#F85F6A',
  },
  continueButton: {
    backgroundColor: '#F85F6A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});