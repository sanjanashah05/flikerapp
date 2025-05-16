import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>sanjana</Text>
        <Text style={styles.role}>user</Text>
      </View>

      <View style={styles.stats}>
        <Text>Teams: 0</Text>
        <Text>Matches: 0</Text>
        <Text>Achievements: 0</Text>
      </View>

      {['Account Settings', 'My Teams', 'Achievements', 'Notifications', 'Privacy', 'Help & Support'].map(label => (
        <TouchableOpacity key={label} style={styles.item}>
          <Text>{label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logout}>
        <Text style={{ color: '#f15a29' }}>Sign Out</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Fliker v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1 },
  header: { backgroundColor: '#f15a29', padding: 20, borderRadius: 10, marginBottom: 16 },
  username: { color: '#fff', fontSize: 20 },
  role: { color: '#fff' },
  stats: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  item: { backgroundColor: '#f6f6f6', padding: 16, borderRadius: 8, marginVertical: 4 },
  logout: { alignItems: 'center', padding: 16 },
  footer: { textAlign: 'center', color: '#ccc', marginTop: 20 },
});
