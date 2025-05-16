import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Fliker</Text>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue to Fliker</Text>

      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/choose-sport')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or continue with</Text>

      <TouchableOpacity style={styles.social}><Text>🔵 Continue with Facebook</Text></TouchableOpacity>
      <TouchableOpacity style={styles.social}><Text>🔴 Continue with Google</Text></TouchableOpacity>
      <TouchableOpacity style={styles.social}><Text>⚪ Continue with Apple</Text></TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.link}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#f15a29', textAlign: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#f15a29', padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  or: { textAlign: 'center', marginVertical: 12 },
  social: { backgroundColor: '#eee', padding: 12, borderRadius: 6, marginBottom: 8 },
  link: { textAlign: 'center', marginTop: 16, color: '#f15a29' },
});
