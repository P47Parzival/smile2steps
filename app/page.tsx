import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function SignUpScreen() {
  const [userType, setUserType] = useState<'parent' | 'pediatrician'>('parent');

  const renderCommonFields = () => (
    <>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Phone Number *" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="First Name *" />
        <TextInput style={styles.input} placeholder="Last Name *" />
      </View>
    </>
  );

  const renderParentForm = () => (
    <>
      {renderCommonFields()}
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Relationship with Child *" />
        <TextInput style={styles.input} placeholder="Address *" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Password *" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password *" secureTextEntry />
      </View>
    </>
  );

  const renderPediatricianForm = () => (
    <>
      {renderCommonFields()}
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Clinic Name *" />
        <TextInput style={styles.input} placeholder="Specialization *" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Password *" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password *" secureTextEntry />
      </View>
    </>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Smile2Steps Sign Up</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => setUserType('parent')}
          style={[styles.toggleButton, userType === 'parent' && styles.activeButton]}
        >
          <Text style={userType === 'parent' ? styles.activeText : styles.inactiveText}>Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUserType('pediatrician')}
          style={[styles.toggleButton, userType === 'pediatrician' && styles.activeButton]}
        >
          <Text style={userType === 'pediatrician' ? styles.activeText : styles.inactiveText}>Pediatrician</Text>
        </TouchableOpacity>
      </View>

      {userType === 'parent' ? renderParentForm() : renderPediatricianForm()}

      <TouchableOpacity style={styles.signUpButton} onPress={() => Alert.alert('Signed Up')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        <Text>I agree to the </Text>
        <Text style={styles.link}>Terms & Conditions</Text>
      </Text>

      <Text style={styles.loginLink}>
        Already have an account? Login (<Text style={styles.link}>Parent</Text> / <Text style={styles.link}>Pediatrician</Text>)
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#3b82f6',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f0f8ff',
  },
  signUpButton: {
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  terms: {
    marginTop: 15,
  },
  link: {
    color: '#6a0dad',
    textDecorationLine: 'underline',
  },
  loginLink: {
    marginTop: 10,
    color: '#000',
  },
});
