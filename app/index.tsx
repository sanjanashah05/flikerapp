import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#000000', '#000000']} style={styles.container}>
      {/* Logo and Brand */}
      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/logo.png')} // SPORTIFY logo here
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.brand}>FLIKER</Text>
      </View>

      {/* Hero Image */}
      <Image
        source={require('../assets/logo.png')} // Replace with the footballer image
        style={styles.hero}
        resizeMode="contain"
      />

      {/* Title & Subtitle */}
      <Text style={styles.title}>BRINGING EVERY MATCH TO LIFE</Text>
      <Text style={styles.subtitle}>
        Watch sports live or highlights, read every news from your smartphone.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        onPress={() => router.replace('/login')}
        style={styles.loginButton}
        activeOpacity={0.85}
      > 
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.signupButton}
      onPress={() => router.replace('/register')}
       activeOpacity={0.85}>
        <Text style={styles.signupText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  brand: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  hero: {
    width: width * 0.85,
    height: width * 0.85,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  loginButton: {
    backgroundColor: '#F85F6A',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 40,
    width: '100%',
    marginBottom: 12,
  },
  loginText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 40,
    width: '100%',
  },
  signupText: {
    textAlign: 'center',
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
  },
});
