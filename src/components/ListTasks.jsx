import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'

export default function RenderTask({list,setTaskActive,setModalVisible}){
    return(
        <View style = {styles.view3}>
            <FlatList 
                data={list}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>{
                    return(
                        <Pressable onPress={()=>{
                            setTaskActive(item)
                            setModalVisible(true)
                        }}>
                            <View>
                                <Text style={item.completed?styles.taskActive:styles.task}>{item.task}</Text>
                            </View>
                        </Pressable>
                    )
                }}
                keyExtractor={item=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view3:{
        flex:4,
        backgroundColor:"green",
        width:"100%",
        alignItems:"center",
    },
    task:{
        padding:10,
        margin:5,
        fontSize:25,
        width:250,
        backgroundColor:"beige",
    },
    taskActive:{
        padding:10, 
        margin:5,
        fontSize:25,
        width:250,
        backgroundColor:"grey",
    }
})