import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 12 }}>{title}</Text>
      {children}
    </View>
  );

  const Card = ({ title, subtitle, onPress }: { title: string, subtitle?: string, onPress?: () => void }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#333',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '600' }}>{title}</Text>
      {subtitle && <Text style={{ color: '#bbb' }}>{subtitle}</Text>}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#111' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 28, color: '#fff' }}>My Profile</Text>
        <Ionicons name="person-circle" size={32} color="#fff" />
      </View>

      {/* Profile Section */}
      <Section title="Unified Stats">
        <Card title="Stats Across All Sports" subtitle="View performance in Cricket, Kabaddi, Football & more" />
      </Section>

      <Section title="Achievements & Badges">
        <Card title="🏆 5 Tournament Wins" />
        <Card title="🔥 MVP x3" />
        <Card title="💪 100 Matches Played" />
      </Section>

      <Section title="Teams & Clubs">
        <Card title="Team Alpha" subtitle="Captain - Football" />
        <Card title="Kabaddi Legends" subtitle="Member" />
        <TouchableOpacity
          style={{
            backgroundColor: '#444',
            borderRadius: 16,
            padding: 12,
            marginTop: 8,
          }}
          onPress={() => router.push('/teams')}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>View All Teams</Text>
        </TouchableOpacity>
      </Section>

      {/* Team Management */}
      <Section title="Team Management">
        <Card title="Create or Join a Team" onPress={() => router.push('/create-team')} />
        <Card title="Invite Friends" onPress={() => router.push('/invite')} />
        <Card title="Schedule Matches" onPress={() => router.push('/schedule')} />
      </Section>

      {/* Tournaments & Events */}
      <Section title="Tournaments & Events">
        <Card title="Create a Tournament" onPress={() => router.push('/create-tournament')} />
        <Card title="Live Brackets & Fixtures" onPress={() => router.push('/brackets')} />
        <Card title="Entry Fees & Prize Money" onPress={() => router.push('/prizes')} />
      </Section>
    </ScrollView>
  );
}
