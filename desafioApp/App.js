import { StyleSheet, Text, View } from 'react-native';
import Bolinha from './components/Bolinha';

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.cabecalho}>
      <View style={styles.esquerda}>
        <View style={styles.EEsquerda}>
          <Bolinha cor="#006494" lado={80} altura='20%' />
          <Bolinha cor="#247ba0" lado={80} altura='20%' />
          <Bolinha cor="#1b98e0" lado={80} altura='20%' />
        </View>
        
        <View style={styles.DEsquerda}>
          <Bolinha cor="#006494" lado={80} altura='20%' />
          <Bolinha cor="#247ba0" lado={80} altura='20%' />
          <Bolinha cor="#1b98e0" lado={80} altura='20%' />
        </View>
        </View>

        <View style={styles.direita}>
          <Bolinha cor="#006494" lado={60} altura='25%' />
          <Bolinha cor="#247ba0" lado={60} altura='35%' />
        </View>
      </View>

      <View style={styles.main}>
        <Bolinha cor="#006494" lado={60} altura='100%' />
        <Bolinha cor="#247ba0" lado={60} altura='100%' />
        <Bolinha cor="#1b98e0" lado={60} altura='100%' />
        <Bolinha cor="#13293d" lado={60} altura='100%' />
      </View>

      <View style={styles.rodape}>
        <Bolinha cor="#006494" lado={60} altura='20%' />
        <Bolinha cor="#247ba0" lado={60} altura='40%' />
        <Bolinha cor="#1b98e0" lado={60} altura='60%' />
        <Bolinha cor="#13293d" lado={60} altura='80%' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e8f1f2',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  cabecalho: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#C0EAEF',
    width: '100%',
  },
  main: {
    flex: 1,
    backgroundColor: '#8DE7F0',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: '100%',
    borderWidth: '1px',
    borderColor: '#ffffff',
  },
  rodape: {
    flex: 1,
    backgroundColor: '#C0EAEF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: '100%',
    borderWidth: '1px',
    borderColor: '#ffffff',
  },
  direita: {
    flex: 1,
    flexDirection:'row',
    borderWidth: '1px',
    borderColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent:'flex-end',
    gap: 15,
    
  },
  esquerda: {
    flex: 1,
    borderWidth: '1px',
    borderColor: '#ffffff',
    flexDirection: 'row'

  },
  EEsquerda: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  DEsquerda: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  }
});
