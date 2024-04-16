import storage from '@react-native-firebase/storage';
import { useEffect, useState } from "react";
import {Image} from "react-native";

function DisplayImage({file}) {
  const [imageUrl, setImageUrl] = useState(undefined);

  useEffect(() => {
    console.log('use effect runs')
    storage()
      .ref(file)
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
      .catch((e) => console.log('Errors while downloading => ', e));
  }, [file]);

  return (
    <Image style={styles.image} source={{uri: imageUrl}} />
  );
}

const styles = {
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10
  }
}

export default DisplayImage

