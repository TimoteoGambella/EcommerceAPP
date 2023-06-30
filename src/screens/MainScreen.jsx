import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity,FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import RenderTask from '../components/ListTasks'
import ModalMain from '../components/ModalMain'
import TopBar from '../components/TopBar'


const MainScreen = ({taskList}) => {

    const [list,setList]=useState(taskList)
    const [input,setInput]=useState("")
    const [taskActive,setTaskActive]=useState({})

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

            <TopBar input={input} setInput={setInput} onAddTask={onAddTask}/>

            <RenderTask list={list} setTaskActive={setTaskActive} setModalVisible={setModalVisible}/>

            <ModalMain modalVisible={modalVisible} setModalVisible={setModalVisible} taskActive={taskActive} setList={setList} list={list}/>
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