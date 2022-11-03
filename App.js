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
  }



});
