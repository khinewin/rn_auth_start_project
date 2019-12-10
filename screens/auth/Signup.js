import React, {Component} from 'react'
import { StyleSheet,View,Image} from 'react-native'
import {Container,Button, Thumbnail,Item, Toast,  Input, Content, Text, H1, H2, H3, Header, Left, Right, Body, Title} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class Signup extends Component{

    constructor(props){
        super(props)
        this.state=({
            name:'',
            email:'',
            password:'',
            retypePassword:'',
            showError:false,
            error:false,
        })
        /*this.emailRef=React.createRef();
        this.passwordRef=React.createRef();
        this.retypePasswordRef=React.createRef();*/
    }

    doSignup=()=>{
        if(this.state.name.length <=0){
            Toast.show({
                text: 'The name field is required.',
                position:'top',
                type:'danger'
              })
              return;
        }
        if(this.state.email.length <=0){
            Toast.show({
                text: 'The email field is required.',
                position:'top',
                type:'danger'
              })
              return;
        }

        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(mailFormat.test(this.state.email)===false){
            Toast.show({
                text: 'Email format is invalid.',
                position:'top',
                type:'danger'
              })
              return;
        }
        if(this.state.password.length <=0){
            Toast.show({
                text: 'The password field is required.',
                position:'top',
                type:'danger'
              })
              return;
        }
        if(this.state.retypePassword.length <=0){
            Toast.show({
                text: 'The retype password field is required.',
                position:'top',
                type:'danger'
              })
              return;
        }
        if(this.state.password != this.state.retypePasswordRef){
            Toast.show({
                text: 'The password and retype password must match.',
                position:'top',
                type:'danger'
              })
              return;
        }




    }

    render(){
        return(
            
            <Container>
                <View style={styles.logo}>
                    <Image
                    style={styles.logoImage}
                    source={require('../../images/logo.jpg')}
                    ></Image>
                    <Text>
                        Signup new user account.
                    </Text>
                </View>
                <KeyboardAwareScrollView enableOnAndroid={true}>
               
                <Content style={styles.formGroupContainer}>
                    <Item rounded style={styles.formGroup}>
                        <Input 
                        onChangeText={(t)=>this.setState({name:t})}
                        value={this.state.name}
                        returnKeyType="next"
                        onSubmitEditing={()=>this.emailRef._root.focus()}
                        placeholder="Name"/>
                    </Item>
                    <Item rounded style={styles.formGroup}>
                        <Input
                        onChangeText={(t)=>this.setState({email:t})}
                        autoCapitalize="none"
                        value={this.state.email}
                        returnKeyType="next"
                        ref={(i)=>{this.emailRef=i}}
                        keyboardType="email-address"
                        onSubmitEditing={()=>this.passwordRef._root.focus()}
                        placeholder="Email"/>
                    </Item>
                    <Item rounded style={styles.formGroup}>
                        <Input 
                        onChangeText={(t)=>this.setState({password:t})}
                        value={this.state.password}
                        returnKeyType="next"
                        ref={(i)=>{this.passwordRef=i}}
                        secureTextEntry={true}
                        onSubmitEditing={()=>this.retypePasswordRef._root.focus()}
                        placeholder="Password"/>
                    </Item>
                    <Item rounded style={styles.formGroup}>
                        <Input 
                        onChangeText={(t)=>this.setState({retypePassword:t})}
                        value={this.state.retypePassword}
                        returnKeyType="done"
                        ref={(i)=>{this.retypePasswordRef=i}}
                        secureTextEntry={true}
                        onSubmitEditing={()=>this.doSignup()}
                        placeholder="Retype Password"/>
                    </Item>
                    <Button block rounded onPress={()=>this.doSignup()}>
                        <Text>Signup</Text>
                    </Button>

                    <Button transparent  block style={{marginTop: 20}} onPress={()=>this.props.navigation.navigate("Signin")}>
                        <Icon name="sign-in-alt"></Icon>
                        <Text style={{color:"#000"}}>Signin</Text>
                    </Button>


                </Content>
                </KeyboardAwareScrollView>
            </Container>
            
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