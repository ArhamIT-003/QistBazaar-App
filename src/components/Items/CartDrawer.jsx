import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartCard from "./Card";

export default function CartDrawer() {

    // const cartItems = [
    //     { id: 1, name: 'Item 1', quantity: 23 },
    //     { id: 2, name: 'Item 2', quantity: 45 },
    //     { id: 3, name: 'Item 3', quantity: 67 },
    //     { id: 4, name: 'Item 4', quantity: 12 },
    //     { id: 5, name: 'Item 5', quantity: 89 },
    //     { id: 6, name: 'Item 6', quantity: 34 },
    //     { id: 7, name: 'Item 7', quantity: 56 },
    //     { id: 8, name: 'Item 8', quantity: 78 },
    //     { id: 9, name: 'Item 9', quantity: 90 },
    //     { id: 10, name: 'Item 10', quantity: 11 },
    // ]


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Cart</Text>

            {/* <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartCard item={item}/>}
            /> */}
            <View style={styles.main}>
                <CartCard />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    main: {
        flex: 1,
        justifyContent: "space-between"
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: "#1235a9",
        textAlign: "center",
        paddingVertical: 16,
        color: "#fff",
        textTransform: "uppercase"
    },
    cartItemsContainer: { margin: 10, backgroundColor: "#1235a9", padding: 24, borderRadius: 8 },
    button: { margin: 10, backgroundColor: "#1235a9", padding: 8, borderRadius: 8, justifyContent: "center", alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "normal", fontSize: 18 },
})