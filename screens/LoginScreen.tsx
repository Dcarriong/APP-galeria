import { Alert, Button, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen( {navigation} : any) {

    const [correo, setcorreo] = useState('')
    const [contrasenia, setcontrasenia] = useState('')
    const [ver, setver] = useState(false)

    const limpiar = () => {
      setcorreo('')
      setcontrasenia('')
    }

    const [correoReestablecer, setcorreoReestablecer] = useState('')

    function login(){
        signInWithEmailAndPassword(auth, correo, contrasenia)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('Welcome')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    let titulo
    let mensaje

    switch(errorCode) {
      case 'auth/wrong-password':
        titulo = 'Error en la contrasenia'
        mensaje = 'Verifique la contrasenia'
        break;

        case 'auth/user-not-found':
          titulo = 'Usuario no encontrado'
          mensaje= 'Verificar el email ingresado'
          break;

          case 'auth/invalid-email':
            titulo = 'Email invalido'
            mensaje= 'Verificar el correo ingresado'
            break;

            default:
              titulo = 'ERROR'
              mensaje = 'Verificar credenciales'
              break;
    }


    Alert.alert(titulo, mensaje)

    limpiar();
  });

 
    }

    function reestablecer (){
      sendPasswordResetEmail(auth, correoReestablecer)
  .then(() => {
    // Password reset email sent!
    // ..
    Alert.alert('Mensaje', 'Se ha enviado un mensaje a su correo')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    Alert.alert(errorCode, errorMessage)

    
  });
    }


  return (
    <View>
      
      <ImageBackground
             source={{uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/20245.jpg' }}
             style={ styles.container4}
          >         
            
          </ImageBackground>
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
      <Button title='Login' onPress={() => login()} />

        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={[styles.txt, styles.txt2]}>Crear una cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setver(!ver)}>
          <Text style={styles.txt}>Olvidaste la contrasenia. Da clic aqui</Text>
        </TouchableOpacity>

        <Modal visible = {ver} transparent={true}>
          <View style={styles.container2}>
            <View style={styles.container3}>
                <TextInput
                placeholder='Ingresar correo'
                style={styles.input}
                onChangeText={(texto)=> setcorreoReestablecer(texto)}
                />
                <Button title='Enviar' onPress={() => reestablecer}/>
                <Button title='Cerrar' onPress={() => setver(!ver)} color={'red'}/>
                </View>
          </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      fontSize: 18, 
      color: '#333',  
      backgroundColor: '#f0f0f0',  
      borderRadius: 12, 
      margin: 10, 
      paddingHorizontal: 15, 
      paddingVertical: 10, 
      borderWidth: 1,  
      borderColor: '#ccc',  
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 4,  
      width: '90%',  
      alignSelf: 'center', 
    },
    txt: {
      fontSize: 16, 
      color: '#007BFF', 
      textDecorationLine: 'underline', 
      textAlign: 'center', 
      marginVertical: 10, 
      lineHeight: 22, 
      fontWeight: '500', 
      letterSpacing: 0.5, 
    },
    txt2: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    container2: {
      backgroundColor: 'rgba(24, 75, 126, 0.61)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    container3:{
      backgroundColor: 'white',
      width: '90%',
      height: 200,
      borderRadius:20,
      padding:10
    },
    container4: {
      flex:1,
    justifyContent: 'center',
    alignItems: 'center'
    }
})