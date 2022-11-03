import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
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
      <View style={styles.containerBooks}>
        <Text style={styles.headerFirstBook}>Book title 1</Text>
        <Text style={styles.author}>By Some Random dude</Text>
        <Text style={styles.bio}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultircies, magna nisl vulputate urna, quis feugiat purus enim id ex. </Text>
        <View style={styles.boxButton}>
          <Text style={styles.isbn}>ISBN 978-8-2165-1860-1</Text>
          <Button style={styles.button} title='READ' color='black'/>
        </View>
        
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
    marginTop: 20,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 20,
  },
  isbn:{
   
  },
  boxButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginTop: 20,
    marginBottom: 15,
  },
  containerBooks: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginLeft: 20,
    marginRight: 30,
  }




});
