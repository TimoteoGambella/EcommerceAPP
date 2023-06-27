import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity,FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import RenderTask from '../components/ListTasks'
import ModalMain from '../components/ModalMain'


const MainScreen = ({taskList}) => {

    const [list,setList]=useState(taskList)
    const [input,setInput]=useState("")

    const [modalVisible, setModalVisible] = useState(false);

    const onAddTask=()=>{
        setList([...list,{
            id: list.length + 1,
            task: input,
            completed:false
        }])
    }

    return (
        <View style = {styles.container}>
            <Text>MainScreen</Text>
            <View style = {styles.view1}></View>

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
                    <Text style={styles.colorButton}>HOLISSSS</Text>
                </TouchableOpacity>
            </View>

            <RenderTask list={list}/>

            <Pressable
                style={[styles.buttonModal, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
            <ModalMain modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view1:{
        flex:1,
        backgroundColor:"red",
        width:"100%",
    },
    view2:{
        flex:3,
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
    },
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
        buttonOpen: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})