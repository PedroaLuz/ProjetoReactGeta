import React, {Compenent, useState} from 'react';
import { View, Text, Button, StyleSheet, Image, Modal,  SafeAreaView, ScrollView} from 'react-native';

export default function Titans(props){
    
    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpen2, setModalOpen2] = useState(false)
    const [modalOpen3, setModalOpen3] = useState(false)
    const [modalOpen4, setModalOpen4] = useState(false)

    return(

        <View style={styles.screen}>
            
            <SafeAreaView>
                <ScrollView>

                    <View style ={styles.title} >
                        <Text style={styles.text} >AWAKE TITANS</Text> 
                        <Image style ={styles.image} source={require('./assets/God.jpeg')} />
                    </View>
                    <View style ={styles.Button}>
                        <Button title='GODZILLA' color="#292929" onPress={() => setModalOpen(true)}/>
                    </View>
                    



                    <View style ={styles.title} >
                        <Image style ={styles.image} source={require('./assets/mothra.jpg')} />
                    </View>
                    <View style ={styles.Button}>
                        <Button title='MOTHRA' color="#292929" onPress={() => setModalOpen2(true)}/>
                    </View>




                    <View style ={styles.title} >
                        <Image style ={styles.image} source={require('./assets/rodan.jpg')} />
                    </View>
                    <View style ={styles.Button}>
                        <Button title='RODAN' color="#292929" onPress={() => setModalOpen3(true)}/>
                    </View>




                    <View style ={styles.title} >
                        <Image style ={styles.image} source={require('./assets/king.jpeg')} />
                    </View>
                    <View style ={styles.Button}>
                        <Button title='GHIDORAH' color="#292929" onPress={() => setModalOpen4(true)}/>
                    </View>

                    


























                    <Modal visible={modalOpen} animationType='slide'>
                        <View >
                            
                            <View style ={styles.title} >
                                
                                <Text style={styles.text} >GODZILLA</Text> 
                                <Image style ={styles.image2} source={require('./assets/God.jpeg')} />
                                
                            </View>
                            <View style ={styles.details}>
                                <Text style ={styles.detailstext}>Monarch Designation: MONSTER ZERO ONE</Text>
                                <Text style ={styles.detailstext}>Classification: UNKNOWN</Text>
                                <Text style ={styles.detailstext}>Nature: NUCLEAR</Text>
                                <Text style ={styles.detailstext}>Body Height: 601FT</Text>
                                <Text style ={styles.detailstext}>Wingspan: UNKNOWN</Text>
                                <Text style ={styles.detailstext}>Range: UNKNOWN</Text>
                            </View>

                            <View style ={styles.Button2}>
                                <Button title='Voltar ao menu' color="#292929" onPress={() => setModalOpen(false)}/>
                            </View>
                            
                        </View>
                    </Modal>

                    <Modal visible={modalOpen2} animationType='slide'>
                        <View >
                            
                            <View style ={styles.title} >
                                
                                <Text style={styles.text} >MOTHRA</Text> 
                                <Image style ={styles.image2} source={require('./assets/mothra.jpg')} />
                                
                            </View>
                            <View style ={styles.details}>
                                <Text style ={styles.detailstext}>Monarch Designation: MOTHRA</Text>
                                <Text style ={styles.detailstext}>Classification: TITANUS MOSURA</Text>
                                <Text style ={styles.detailstext}>Nature: UNKNOWN</Text>
                                <Text style ={styles.detailstext}>Body Height: 52FT</Text>
                                <Text style ={styles.detailstext}>Wingspan: 803FT</Text>
                                <Text style ={styles.detailstext}>Range: UNKNOWN</Text>
                            </View>

                            <View style ={styles.Button2}>
                                <Button title='Voltar ao menu' color="#292929" onPress={() => setModalOpen2(false)}/>
                            </View>
                            
                        </View>
                    </Modal>

                    <Modal visible={modalOpen3} animationType='slide'>
                        <View >
                            
                            <View style ={styles.title} >
                                
                                <Text style={styles.text} >RODAN</Text> 
                                <Image style ={styles.image2} source={require('./assets/rodan.jpg')} />
                                
                            </View>
                            <View style ={styles.details}>
                                <Text style ={styles.detailstext}>Monarch Designation: RODAN</Text>
                                <Text style ={styles.detailstext}>Classification: TITANUS RODAN</Text>
                                <Text style ={styles.detailstext}>Nature: BIO-VOLCANIC</Text>
                                <Text style ={styles.detailstext}>Body Height: 154FT</Text>
                                <Text style ={styles.detailstext}>Wingspan: 871FT</Text>
                                <Text style ={styles.detailstext}>Behavior: DESTROYER</Text>
                                <Text style ={styles.detailstext}>Range: WORLDWIDE</Text>
                            </View>

                            <View style ={styles.Button2}>
                                <Button title='Voltar ao menu' color="#292929" onPress={() => setModalOpen3(false)}/>
                            </View>
                            
                        </View>
                    </Modal>
                
                    <Modal visible={modalOpen4} animationType='slide'>
                        <View >
                            
                            <View style ={styles.title} >
                                
                                <Text style={styles.text} >RODAN</Text> 
                                <Image style ={styles.image2} source={require('./assets/king.jpeg')} />
                                
                            </View>
                            <View style ={styles.details}>
                                <Text style ={styles.detailstext}>Monarch Designation:  MONSTER ZERO</Text>
                                <Text style ={styles.detailstext}>Classification: UNKNOWN</Text>
                                <Text style ={styles.detailstext}>Nature: BIO-ELECTRICAL</Text>
                                <Text style ={styles.detailstext}>Body Height: 521FT</Text>
                                <Text style ={styles.detailstext}>Wingspan: UNKNOWN</Text>
                                <Text style ={styles.detailstext}>Range: UNKNOWNs</Text>
                            </View>

                            <View style ={styles.Button2}>
                                <Button title='Voltar ao menu' color="#292929" onPress={() => setModalOpen4(false)}/>
                            </View>
                            
                        </View>
                    </Modal>
            

                </ScrollView>
            </SafeAreaView>

        </View>
         
    )

}


const styles = StyleSheet.create({

    screen:{

        backgroundColor: '#191919',
        flex: 1,
        
        
    
    },
    text:{

        marginTop: 20,
        color: "#fff",
        fontSize:30
    

    },
    title:{

        alignItems: 'center',
        backgroundColor: '#191919'

    },

    image:{

        marginTop: 40,
        height: 200,
        width: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    image2:{

        marginTop: 20,
        height: 200,
        width: 400,
        
    },
    Button:{

        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
   
    },
    Button2:{

        marginTop: 40,
        marginLeft: 80,
        marginRight: 80,
        backgroundColor: '#191919'
   
    },
    details:{

        backgroundColor: '#DCDCDC',
        
    },
    detailstext:{
        marginTop: 20,
        color: "#000",
        fontSize:20
    },
   
    
   

})