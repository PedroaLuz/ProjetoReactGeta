import React, {Compenent} from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function Main(props){
    
    return(
        <View style ={styles.screen}>

            <View style ={styles.title} >
                <Image style ={styles.image} source={require('./assets/init.png')} />
            </View>
           <View style ={styles.Button}>
               
               <Button
                    onPress={() => { props.navigation.navigate('Titans')}}
                    title="Entrar"
                    color="#292929"
                />

            </View>
            
            
        </View>
        
    )
   

}

const styles = StyleSheet.create({

    screen:{

        backgroundColor: '#191919',
        flex: 1,
        justifyContent: 'center'
        
    
    },

    title:{

        alignItems: 'center'

    },

    image:{

        height: 350,
        width: 350,
        marginBottom: 40

    },

    Button:{

        marginLeft: 60,
        marginRight: 60,
    }

})