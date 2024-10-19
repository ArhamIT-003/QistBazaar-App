import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CartDrawer() {

    const cartItems = [
        { id: '1', name: 'Item 1', quantity: 2 },
        { id: '2', name: 'Item 2', quantity: 1 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cartItemsContainer}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#fff" }}>{item.name} (x{item.quantity})</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fff",
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
    cartItemsContainer:{ margin: 10, backgroundColor: "#1235a9", padding: 24, borderRadius: 8 },
    button: { margin: 10, backgroundColor: "#1235a9", padding: 8, borderRadius: 8, justifyContent: "center", alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "normal", fontSize: 18 },
})