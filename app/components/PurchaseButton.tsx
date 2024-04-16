import { View, Button, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles.tsx';
import Icon from './Icon.tsx';

function PurchaseButton({ onPress, data }) {

  return (
    <TouchableOpacity
      style={[styles.button, data.owned ? styles.green : styles.pink]}
      onPress={onPress}
    >
      <Text
        style={styles.text}
        icon={'fa-arrow-right'} >{data.owned ? 'Owned' : 'Purchase'}</Text>
    </TouchableOpacity>
  );
}

export default PurchaseButton;

const styles = {
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 80,
    marginTop: 20,
    borderRadius: 30,
    margin: 10,
  },
  text: {
    fontFamily: 'Asap-Bold',
    color: 'white'
  },
  green: {
    backgroundColor: globalStyles.backgroundBase,
  },
  pink: {
    backgroundColor: globalStyles.hightlightPink,
  },
};
