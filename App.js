import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.header}>Bookshop</Text>
      </View>
      <View>
          <Image 
          style={styles.shoppingImg}
          source={require('../Challange1/assets/shoppingCart/shopping-cart.png')}
          />
          <Text style={styles.shoppingNumber}>1</Text>
      </View>
      <View>
        <Text style={styles.headerFirstBook}>Book title 1</Text>
        <Text style={styles.author}>By Some Random dude</Text>
        <Text style={styles.bio}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</Text>
        <Text style={styles.isbn}>ISBN 978-8-2165-1860-1</Text>
        <Button style={styles.button} title='READ' color='black' />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  containerHeader: {
    marginLeft: 20,
    marginTop: 40,
  },
  shoppingImg: {
    maxWidth: '100%',
    width: 40,
    height: 40,
    marginLeft: 330,
    marginTop: -40,
  },
  shoppingNumber: {
    fontSize: 30,
    marginLeft: 370,
    marginTop: -25,
  },
  //boekenopmaak
  headerFirstBook: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  bio: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  isbn:{
    marginLeft: 20,
    marginTop: 20,
  }




});
