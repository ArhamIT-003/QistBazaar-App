import { DrawerActions, useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Pressable, View, Text, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
function NavItemsFunction({ item }) {
    return (
        <View style={styles.itemsContainer}>
            <Text style={styles.items}>{item.name}</Text>
        </View>
    )
}
export default function HomeDrawer() {
    const navItems = [
        { id: "1", name: "Home", link: "Home" },
        { id: "2", name: "Shop", link: "Home" },
        { id: "3", name: "Contact Us", link: "Home" },
        { id: "4", name: "Visit Us", link: "Home" },
        { id: "5", name: "Payment Gateway", link: "Home" },
        { id: "6", name: "Musawamah Agreement", link: "Home" },
        { id: "7", name: "Refund & Returns Policy", link: "Home" },
        { id: "8", name: "Track Your Order", link: "Home" },
        { id: "9", name: "Privacy Policy", link: "Home" },
        { id: "10", name: "Terms & Conditions", link: "Home" },

    ];


    const navigation = useNavigation();


    function closer(){
        navigation.getParent("HomeDrawer").
        console.log(navigation.getParent("HomeDrawer").dispatch(DrawerActions.closeDrawer()))
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.mainBtn}>
                <Text style={styles.mainBtnText}>Main Menu</Text>
                <Pressable
                    style={{ position: "absolute", right: 6 }}
                    onPress={closer}
                    android_ripple={{ color: "#ddd" }}
                >
                    <Icon name={"close"} size={24} color={"#fff"} />
                </Pressable>
            </View>
            <FlatList
                data={navItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NavItemsFunction item={item} />}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    mainBtn: {
        backgroundColor: "#1235a9",
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: "center",
        position: "relative",
    },
    mainBtnText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "600"
    },
    icon: {
        position: "absolute",
        right: 6
    },
    itemsContainer: {
        backgroundColor: "#fff"
    },
    items: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderTopWidth: 1,
        color: "#000",
        borderTopColor: "#000",
        fontSize: 16,
        fontWeight: "500"
    },
})