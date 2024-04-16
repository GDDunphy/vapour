import { ScrollView, View } from "react-native";
import StoreCard from "./StoreCard.tsx";

function StoreList() {

  const mockData = [
    {
      title: "Call of Duty: Warzone",
      tags: ["fps", "action", "story", "multiplayer", "action", "story"],
      release_date: "NOV 2019",
      img: 'cod.png'
    },
    {
      title: "Baldurs Gate 3",
      tags: ["rpg", "singleplayer", "story", "rng"],
      release_date: "DEC 2022",
      img: 'bg3.png'
    },
    {
      title: "Call of Duty: Warzone",
      tags: ["fps", "action", "story", "multiplayer"],
      release_date: "NOV 2019",
      img: 'sims.png'
    }];

  let items = mockData.map((datum) => {
    return (<StoreCard data={datum} />);
  });

  return (
    <ScrollView style={styles.list}>
      {items}
    </ScrollView>

  );
}

const styles = {
  list: {
    padding: 15
  }
};

export default StoreList;
