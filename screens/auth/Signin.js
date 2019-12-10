import React, {Component} from 'react'
import { StyleSheet,View, Image, Dimensions} from 'react-native'
import {Container,Button, Thumbnail,Item,  Input, Content, Text, H1, H2, H3, Header, Left, Right, Body, Title} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { hide } from 'expo/build/launch/SplashScreen'


export default class Signin extends Component{
    render(){
        return(
            <KeyboardAwareScrollView enableOnAndroid={true}>
            <Container>
                <View style={styles.logo}>
                    <Image
                    style={styles.logoImage}
                    source={require('../../images/logo.jpg')}
                    ></Image>
                    <Text>
                        Signin to contined your session.
                    </Text>
                </View>
               
                <Content style={styles.formGroupContainer}>
                    <Item rounded style={styles.formGroup}>
                        <Input placeholder="Email"/>
                    </Item>
                    <Item rounded style={styles.formGroup}>
                        <Input placeholder="Password"/>
                    </Item>
                    <Button block rounded>
                        <Text>Signin</Text>
                    </Button>

                    <Button transparent  block style={{marginTop: 20}} onPress={()=>this.props.navigation.navigate("Signup")}>
                        <Icon name="user-plus"></Icon>
                        <Text style={{color:"#000"}}>Signup</Text>
                    </Button>


                </Content>
            
            </Container>
            </KeyboardAwareScrollView>
        )
    }
}

const styles=StyleSheet.create({
    logo:{
        marginTop:50,
        justifyContent:'center',
        alignItems: 'center',
    },
    logoImage:{
        width: 300,
        height: 150
    },
    formGroupContainer:{
        marginVertical: 50,
        marginHorizontal: 40
    },
    formGroup:{
        marginBottom: 20
    }
})