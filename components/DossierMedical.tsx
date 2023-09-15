import * as React from 'react';
import { Modal, View, ScrollView, StyleSheet,Text, TextInput, Pressable, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function DossierMedical() {
  // our useState
  const [modalVisible, setModalVisible] = React.useState(false); 
  const [getName, setName] = React.useState('');
  const [getSurname, setSurname] = React.useState('');
  const [getResidence, setResidence] = React.useState('');
  const [getAge, setAge] = React.useState('0');
  const [getGender, setGender] = React.useState('');

  // our variable for the section list
  const DATA= [
    {
      title: getName + ' '+ getSurname,
      data: ['Residence : '+ getResidence, 'Gender : '+getGender,'Age : '+getAge]
    }
  ]

  const Add = () => {
    DATA.push({
      title: getName + ' '+ getSurname,
      data: ['Residence : '+ getResidence, 'Gender : '+getGender,'Age : '+getAge]
    });
    setModalVisible(!modalVisible);
  }
  
  return(
    
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Modal transparent={true} visible={modalVisible} onRequestClose={ ()=>setModalVisible(!modalVisible)} >
          <View style={styles.contain}>
            <View>
              <Text style={styles.subtitle}>Create your health book</Text>
            </View>
            <View style={styles.subcontain}>
              <TextInput style={styles.enterText} placeholder='Name' onChangeText={setName}></TextInput>
              <TextInput style={styles.enterText} placeholder='Surname' onChangeText={setSurname}></TextInput>
              <TextInput style={styles.enterText} placeholder='Place of residence' onChangeText={setResidence}></TextInput>
              <TextInput style={styles.enterText} placeholder='age' keyboardType='numeric' onChangeText={setAge}></TextInput>
              <TextInput style={styles.enterText} placeholder='gender' onChangeText={setGender}></TextInput>
              <Pressable style={styles.btnSubmit} onPress={Add}>
                <Text style={styles.btnText}>ADD</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable onPress={()=> setModalVisible(true)} style={styles.btnSubmit}>
          <Text style={styles.btnText}>Create your health book</Text>
        </Pressable>
        
      </View>
      <SectionList
          style={styles.sectioList}
          sections={DATA}
          keyExtractor={ (item,index) => item+index }
          renderItem={ ({item}) => ( <View style={styles.itemSection}>
                                      <Text style={styles.title}> {item}</Text>
                                    </View> )}
          renderSectionHeader={({section: {title} })=> (
            <View style={styles.headerSection}>
              <Text> {title} </Text>
            </View> 
          )}
          stickySectionHeadersEnabled></SectionList>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      marginVertical: 2,
      
    },
    contain:{
      flex: 1,
  
    },
    subcontain:{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: 12,
      
  
    },
    subtitle:{
      color: '#000000',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
      
      
    },
    enterText:{
      color: "#000",
      fontSize: 15,
      margin: 9,
      borderColor: "#000",
      borderRadius: 2,
      borderWidth: 2,
    },
    btnSubmit:{
      backgroundColor:"#0000FF",
      borderTopEndRadius: 8,
      borderTopLeftRadius: 8,
      borderBottomRightRadius: 8,
      borderBottomEndRadius: 8,
      borderBottomLeftRadius: 8,
      padding: 8,
      margin:6,
      
    },
    btnText:{
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
      textTransform: 'uppercase',
    },
    // stlye the sectionList
    sectioList: {
      marginHorizontal: 4,
    },
    itemSection: {
      backgroundColor: '#b0b0b0',
      color: '#fff',
      padding: 10,
      marginVertical: 4,
    },
    headerSection:{
      backgroundColor: '#4a4a4a',
      padding: 10,
      marginVertical: 4,
    },
    header: {
      fontSize: 24,
      color: '#fff',
    },
    title: {
      fontSize: 16,
    },
});
  