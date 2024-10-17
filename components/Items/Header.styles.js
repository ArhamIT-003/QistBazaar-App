import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  wrapper: {
    marginTop: 33,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cartIcon: {
    position: "relative",
    paddingRight: 15
  },
  itemsInCart: {
    position: "absolute",
    left: 12,
    top: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1235a9",
    width: 20,
    height: 20,
    borderRadius: 50
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#3e41ee",
    padding: 8,
    borderRadius: 30,
    position: "relative",
    margin: 16,
    justifyContent: "center",
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    position: "absolute",
    top: -12,
    left: 40,
    fontSize: 14,
    zIndex: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    color: "#1235a9",
    letterSpacing: 3
  },
  input: {
    borderWidth: 0,
    height: 40,
    marginLeft: 36,
    width: 220
  }
});

