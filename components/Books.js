import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';

const Books = (props) => {
    return (
        <View style={styles.containerBooks}>
            <Text style={styles.headerFirstBook}>Book title 1</Text>
            <Text style={styles.author}>By Some Random dude</Text>
            <Text style={styles.bio}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultircies, magna nisl vulputate urna, quis feugiat purus enim id ex. </Text>
            <View style={styles.boxButton}>
                <Text style={styles.isbn}>ISBN 978-8-2165-1860-1</Text>
                <Button style={styles.button} title='READ' color='black'/>
            </View>
        
      </View>
    );
}

export default Books;

const styles = StyleSheet.create ({
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