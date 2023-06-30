import { Modal,StyleSheet, View, Pressable, Text } from "react-native";

export default function ModalMain({modalVisible,setModalVisible,taskActive,setList,list}){

  const changeStatus = ()=>{
    let newArray=[]
    for (const i in list) {
      if(list[i].id===taskActive.id){
        taskActive.completed=!taskActive.completed
        newArray.push(taskActive)
      }else{
        newArray.push(list[i])
      }
    }
    setList(newArray)
  }

  return(
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Text style={styles.modalText}>{taskActive.task}</Text>
                  <Text style={styles.modalText}>{taskActive.completed?"COMPLETADA":"NO COMPLETADA"}</Text>
                  <View style={[styles.botonesStatus]}>
                    {!taskActive.completed ? 
                    <Pressable style={[styles.botones, styles.botonGreen]} onPress={()=>changeStatus()}>
                      <Text style={[styles.botonesEstilos]}>Terminado</Text>
                    </Pressable>
                    :
                    <Pressable style={[styles.botones, styles.botonRed]} onPress={()=>changeStatus()}>
                      <Text style={[styles.botonesEstilos]}>No Terminado</Text>
                    </Pressable>
                    }
                  </View>
                  <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
              </View>
          </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize:20
    },
    botonesStatus:{
      flexDirection:"row",
      gap:10,
      marginBottom:15
    },
    botones:{
      padding:10,
      paddingTop:20,
      paddingBottom:20,
    },
    botonGreen:{
      backgroundColor:"green",
    },
    botonRed:{
      backgroundColor:"red",
    },
    botonesEstilos:{
      fontWeight:"bold",
      fontSize:18
    }
  });
  