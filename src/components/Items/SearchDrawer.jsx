import { DrawerActions, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import CloseIcon from "react-native-vector-icons/AntDesign";

export default function SearchDrawerLayout() {
    const navigation = useNavigation();

    function closeDrawer(){
        navigation.dispatch(DrawerActions.closeDrawer())
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>SEARCH</Text>
            </View>
            <View style={styles.closeContainer}>
                <TouchableOpacity onPress={closeDrawer}>
                    <CloseIcon 
                        name={"close"}
                        size={30}
                        color={"#fff"}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View style={styles.inputContainer}><TextInput style={{color: "#000",padding: 10}} placeholder="Search Something...." placeholderTextColor={"#000"}/></View>
                <TouchableOpacity style={styles.searchBtn}>
                    <CloseIcon 
                        name={"search1"}
                        size={16}
                        color={"#fff"}
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
    },
    headingContainer: {
        backgroundColor: "#1235a9",
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    closeContainer: {
        position: "absolute",
        top: 20,
        right: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    main: {
        flexDirection: "row",
        width: "100%",
        marginLeft: 8,
        marginTop: 10,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#fff",
        marginVertical: 10,
        width:"75%",
    },
    searchBtn: {
        width: "20%",
        backgroundColor: "#1235a9",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
        },

})