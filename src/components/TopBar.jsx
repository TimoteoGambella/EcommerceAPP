import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TopBar({input,setInput,onAddTask}){
    return(
        <View style = {styles.view2}>
            <TextInput
                placeholder='Ingrese actividad'
                value={input}
                style={styles.input}
                onChangeText={setInput}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onAddTask}
            >
                <Text style={styles.colorButton}>AGREGAR ACTIVIDAD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view2:{
        flex:1,
        padding:20,
        backgroundColor:"lightblue",
        width:"100%",
        alignItems:"center"
    },
    input:{
        padding:15,
        backgroundColor:"yellow",
        color:"red",
        borderBottomColor:"chocolate",
        borderBottomWidth:3,
        marginBottom:10,
        width:300
    },
    button:{
        padding:5,
        backgroundColor:"black",
        width:200,
        display:"flex",
        alignItems:"center"
    },
    colorButton:{
        color:"white"
    }
})