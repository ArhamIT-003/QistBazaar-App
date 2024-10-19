import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import mobile from "../../assets/images/mobile.jpg"
import Icon from "react-native-vector-icons/AntDesign"
export default function CartCard() {
    return (
        <View style={styles.container}>
            {/* IMAGE CONTAINER */}
            <View style={styles.imageContainer}>
                <Image source={mobile} style={styles.image}/>
            </View>
            {/* TEXT CONTAINER */}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Techno Camon 30S </Text>
                <Text style={styles.text}>| 8 GB-256GB</Text>
                <Text style={styles.plan}>PLAN 1</Text>
                <View style={{width: 160, height: 2, backgroundColor: "#ddd"}}></View>
                <View style={styles.qistContainer}>
                    <View style={styles.qist}><Text style={styles.advance}>Advanced:- </Text><Text style={styles.price}>Rs. 34200</Text></View>
                    <View style={styles.qist}><Text style={styles.advance}>Monthly:- </Text><Text style={styles.price}>Rs. 9900 x 3</Text></View>
                </View>
            </View>
            <Pressable style={styles.close}><Icon name={"close"} size={15} color={"#fff"}/></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff", // Keep this dark background
        flexDirection: "row",
        width: "90%",
        margin: "auto",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 10, // Increased gap for better spacing between elements
        marginVertical: 12, // Slightly increased vertical margin
        borderRadius: 12, // Increased border radius for softer edges
        shadowColor: "#000", // Darker shadow color for better contrast
        shadowOffset: {
            height: 4, // Increased height for a more pronounced shadow
            width: 0, // Set width to 0 for a more centered shadow
        },
        shadowOpacity: 0.5, // Lower opacity for a more subtle shadow
        shadowRadius: 10, // Added radius for a softer shadow edge
        elevation: 8, // Adjusted elevation for Android,
        position: "relative",
    },
    
    imageContainer: {
    },
    image: {
        width: 60,
        height: 60
    },
    textContainer: {
        gap: 4,
    },
    text:{
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        letterSpacing: 1,
        lineHeight: 18
    },
    plan: {
        fontSize: 18,
        color: "#1235a9",
        fontWeight: "500"
    },
    qistContainer: {
    },
    qist: {
        flexDirection: "row",
        gap: 8,
        padding: 2,
    },
    advance: {
        color: "#000",
        fontWeight: "700",
        fontSize: 12

    },
    price: {
        color: "green",
        fontWeight: "500",
        fontSize: 12
    },
    close: {
        position: "absolute",
        top:0,
        right: 0,
        width: 20, height: 20,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
})