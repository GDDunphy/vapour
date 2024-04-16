import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles.tsx";
import Icon from "./Icon.tsx";
import generateIconsFromTags from "../services/generateIconsFromTags.js";
import DisplayImage from "./DisplayImage.tsx";
import PurchaseButton from "./PurchaseButton.tsx";

function StoreCard({ data }) {

//   todo
//    receive


  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {data.title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <DisplayImage file={data.img} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.title}>
            {data.release_date}
          </Text>

        </View>
        <View style={styles.tagsContainer}>
          {generateIconsFromTags(data.tags).map((i) => {
            return <View style={{ padding: 5 }}>
              <Icon color="white" size={18} icon={i}></Icon>
            </View>;
          })}
        </View>
        <View style={styles.ratingsContainer}>
          <View>
            <Icon size={14} color={"white"} icon={"fa-star"} />
            <Text>{data.rating}</Text>
          </View>
          <View style={styles.divider}/>
          <View>
            <Icon size={14} color={"white"} icon={"fa-star"} />
            <Text>{data.rating}</Text>
          </View>
        </View>
        <View style={styles.buyContainer}>
          <PurchaseButton data={data} />
        </View>
      </View>
    </View>
  );

}

const styles = {
    card: {
      width: "100%",
      height: 200,
      display: "flex",
      flexDirection: "row",
      padding: 5,
      backgroundColor: globalStyles.backgroundBase,
      borderRadius: 20,
      marginBottom: 10
    },
    divider: {
      width: 1,
      height: 30,
      backgroundColor: 'white'
    },
    leftContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: 5,
      width: "70%"
    },
    rightContainer: {
      height: "100%",
      display: "flex",
      padding: 5,
      width: "30%"
    },
    titleContainer: {
      height: "20%",
      display: "flex",
      justifyContent: "center",
      paddingLeft: 10,
      width: "100%"
    },
    dateContainer: {
      height: "20%",
      display: "flex",
      alignItemsL: "flex-end",
      justifyContent: "center",
      paddingRight: 10,
      textAlign: "right",
      width: "100%"
    },
    title: {
      fontFamily: "Asap-Regular",
      fontSize: 16,
      color: "white"
    },
    imageAndTagsContainer: {
      height: "80%",
      display: "flex",
      flexDirection: "row",
      padding: 5,
      width: "100%"
    },
    imageContainer: {
      height: "80%",
      display: "flex",
      padding: 5,
      width: "100%"
    },
    tagsContainer: {
      height: "30%",
      flexDirection: "row",
      flexWrap: "wrap",
      display: "flex",
      width: "100%"
    },
    ratingsContainer: {
      height: "30%",
      flexDirection: "row",
      display: "flex",
      width: "100%"
    },
    buyContainer: {
      height: "20%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: "100%"
    }
  }
;

export default StoreCard;
