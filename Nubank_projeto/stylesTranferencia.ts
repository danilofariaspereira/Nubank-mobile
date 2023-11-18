// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    flexDirection:'column',
    justifyContent: 'flex-start',
  },
  login:{
    marginTop:'15%',
    marginLeft:'5%',
    backgroundColor: "#FFF",
  },
  header:{
    backgroundColor: "#9500F6",
    width: "100%",
    height: "6%",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 18,
  },
  input: {
    marginTop: 10,
    width: "100%",
    fontSize: 24,
  }
});
