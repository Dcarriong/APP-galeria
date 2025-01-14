import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function RegistroScreen() {

  const [correo, setcorreo] = useState('')
      const [contrasenia, setcontrasenia] = useState('')

      function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      }
  return (
    
      <View>
            <Text>LoginScreen</Text>
            <TextInput
            placeholder='Ingresar correo'
            style={styles.input}
            onChangeText={(texto) => setcorreo(texto)}
            />
      
            <TextInput
            placeholder='Ingresar contrasenia'
            style={styles.input}
            onChangeText={(texto) => setcontrasenia(texto)}
            />
            <Button title='Registro' onPress={() => registro()}/>
      
              
          </View>
        )
      }
      
      const styles = StyleSheet.create({
          input: {
              fontSize:35,
              backgroundColor:'#6666',
              borderRadius: 20,
              margin: 10,
              paddingHorizontal: 15
          },
          txt: {
              fontSize: 20,
              color: 'green'
          }
      })
    
    


