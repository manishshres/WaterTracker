import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import WaterDrop from './components/WaterDrop';

const App = () => {
  const goal = 12;
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const handlePress = () => {
    setCount(count + 1);
    if (count >= goal) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <LinearGradient colors={['#192f6a', '#799FCB']} style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Congratulation! 🥳</Text>
            <Text style={styles.modalBody}>
              Keep up the good work! You've completed your today's water intake
              goal!
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Okay!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.content}>
        <WaterDrop height={100} width={100} />
        <Text style={styles.text}>
          You drank {count} glasses of water today!
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>➕</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  modalView: {
    marginTop: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalHeader: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 25,
    textAlign: 'center',
  },

  buttonClose: {
    backgroundColor: '#2196F3',
    color: 'white',
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    fontWeight: 'bold',
    marginTop: 8,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
