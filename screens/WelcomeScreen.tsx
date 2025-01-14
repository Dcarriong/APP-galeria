import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/Config';


export default function WelcomeScreen() {


  function cerrar (){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

  return (

    <ImageBackground
       source={{uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/20507.png' }}
       style={ styles.container}
    >
    
      <View style={styles.box}>
     
     <Text style={styles.txt2}>Deseas cerrar sesion?</Text>
     </View>
    
     <Button title='Cerrar' onPress={() => cerrar()}/>
      
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
},
txt2: {
  fontSize: 18, 
    color: '#333', 
    textAlign: 'center'
    
},
box: {
  padding: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    shadowColor: '#000', 
    shadowRadius: 4, 
    width: '50%', 
    alignItems: 'center'
},

})