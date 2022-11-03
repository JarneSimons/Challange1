import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import Books from './components/Books';

export default function App() {
  return (
    <ScrollView style={styles.container}>
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
        <Books header="The lord of the Rings" author="J.R.R. Tolkien" isbn="ISBN 978-0261103252"></Books>
      </View>
      <View>
        <Books header="Harry Potter and the Philosopher's Stone" author="J.K. Rowling" isbn="ISBN 9780590353427"></Books>
      </View>
      <View>
        <Books header="The Great Gatsby" author="F. Scott Fitzgerald" isbn="ISBN 9780099541530"></Books>
      </View>
      <View>
        <Books header="The Little Prince" author="Antoine de Saint-Exupéry" isbn="ISBN 978-0156012195"></Books>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
