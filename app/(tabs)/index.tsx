import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';

export default function SignUpScreen() {
  const [userType, setUserType] = useState<'parent' | 'pediatrician'>('parent');

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/smile2steps-logo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Smile2Steps Sign Up</Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            onPress={() => setUserType('parent')}
            style={[
              styles.toggleButton, 
              userType === 'parent' ? styles.activeToggle : styles.inactiveToggle
            ]}
          >
            <Text style={userType === 'parent' ? styles.activeToggleText : styles.inactiveToggleText}>
              Parent
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setUserType('pediatrician')}
            style={[
              styles.toggleButton, 
              userType === 'pediatrician' ? styles.activeToggle : styles.inactiveToggle
            ]}
          >
            <Text style={userType === 'pediatrician' ? styles.activeToggleText : styles.inactiveToggleText}>
              Pediatrician
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number *</Text>
              <TextInput 
                style={styles.input} 
                placeholder="" 
                keyboardType="phone-pad" 
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput 
                style={styles.input} 
                placeholder="" 
                keyboardType="email-address" 
              />
            </View>
          </View>
          
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>First Name *</Text>
              <TextInput style={styles.input} placeholder="" />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Last Name *</Text>
              <TextInput style={styles.input} placeholder="" />
            </View>
          </View>
          
          {userType === 'parent' ? (
            <>
              <View style={styles.inputRow}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Relationship with Child *</Text>
                  <View style={styles.selectInput}>
                    <TextInput style={styles.input} placeholder="" />
                    <Text style={styles.dropdownIcon}>▼</Text>
                  </View>
                </View>
                
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Address *</Text>
                  <TextInput style={styles.input} placeholder="" />
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={styles.inputRow}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Clinic Name *</Text>
                  <TextInput style={styles.input} placeholder="" />
                </View>
                
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Specialization *</Text>
                  <TextInput style={styles.input} placeholder="" />
                </View>
              </View>
            </>
          )}
          
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password *</Text>
              <TextInput style={styles.input} placeholder="" secureTextEntry />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password *</Text>
              <TextInput style={styles.input} placeholder="" secureTextEntry />
            </View>
          </View>
          
          <TouchableOpacity style={styles.signUpButton} onPress={() => Alert.alert('Signed Up')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          
          <View style={styles.termsContainer}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.link}>Terms & Conditions</Text>
            </Text>
          </View>
          
          <Text style={styles.loginText}>
            Already have an account? Login (
            <Text style={styles.link}>Parent</Text> / 
            <Text style={styles.link}>Pediatrician</Text>)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 600,
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeToggle: {
    backgroundColor: '#4285F4',
  },
  inactiveToggle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveToggleText: {
    color: '#666',
  },
  formContainer: {
    width: '100%',
    maxWidth: 600,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputLabel: {
    marginBottom: 5,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#F0F8FF',
  },
  selectInput: {
    position: 'relative',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
    fontSize: 10,
    color: '#777',
  },
  signUpButton: {
    backgroundColor: '#777',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
  },
  termsText: {
    color: '#333',
  },
  link: {
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
  loginText: {
    textAlign: 'center',
    marginBottom: 20,
  },
});