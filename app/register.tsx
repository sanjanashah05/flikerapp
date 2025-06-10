import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Fliker</Text>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started with Fliker</Text>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/choose-sport')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or continue with</Text>

      <TouchableOpacity style={styles.social}><Text>🔵 Continue with Facebook</Text></TouchableOpacity>
      <TouchableOpacity style={styles.social}><Text>🔴 Continue with Google</Text></TouchableOpacity>
      <TouchableOpacity style={styles.social}><Text>⚪ Continue with Apple</Text></TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F85F6A',
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#F85F6A',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    marginVertical: 12,
    color: 'white',
  },
  social: {
    backgroundColor: '#222', // darker for contrast with black background
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: '#F85F6A',
  },
});
