import { Button, StyleSheet, Text, View, Image, Alert, TouchableNativeFeedback } from 'react-native';

function read(){
  console.log("book read")
}

function clickedTitle(){
  console.log("Book title read")
}

const Books = (props) => {
    return (
        <View style={styles.containerBooks}>
          <TouchableNativeFeedback onPress={()=>clickedTitle()}>
            <Text style={styles.headerFirstBook}>{props.header}</Text>
          </TouchableNativeFeedback>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.bio}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultircies, magna nisl vulputate urna, quis feugiat purus enim id ex. </Text>
            <View style={styles.boxButton}>
                <Text style={styles.isbn}>{props.isbn}</Text>
                <TouchableNativeFeedback onPress={()=>read()}>
                  <Text style={styles.buttons}>READ</Text>
                </TouchableNativeFeedback>
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
  },
  buttons:{
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
  }
});