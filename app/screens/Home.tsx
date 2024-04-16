import { View, Text } from 'react-native';
import StoreList from "../components/StoreList.tsx";


function Home() {

  return (
    <View style={styles.background}>
      <StoreList />
    </View>

  );
}

export default Home;

const styles = {
  background: {
    backgroundColor: "#11464d",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}
