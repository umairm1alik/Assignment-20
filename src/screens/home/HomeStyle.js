import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container: {
        backgroundColor: "#29C5F6",
        flex:1,
        paddingHorizontal: 20,
        borderColor: "#FFFFFF",
        borderWidth: 10,
        borderRadius: 20

    },
    innerContainer:{
        flex:1,
        padding: 20,
        
    },
    birthdayView:{
        marginTop: 40
    },
    homeText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    birthdate:{
        fontSize: 15,
        
    },
    countdownWrapper:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 40
    },
    countdownBox:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: 70,
        height: 70,
        borderRadius:5,
        paddingHorizontal: 5
    },
    countdownBoxText:{
        color: "#29C5F6",
        fontSize: 15,
        fontWeight: "700"
    },
    wishBox:{
        alignItems: "center",
        marginTop: 40
    },
    wishText:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold"
    }
})