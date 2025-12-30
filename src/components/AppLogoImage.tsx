import { View, StyleSheet, Image } from "react-native";

const AppLogoImage = () => {
  return (
    <Image
      source={{uri: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"}}
      style={styles.image}
    ></Image>
  );
};

export default AppLogoImage;

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: 140,
  },
});
