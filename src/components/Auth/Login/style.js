import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    wrapper:{
        display:'flex',
        height: '100vh',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5E5E5',
    },

    loginWrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height: '100%',
    },

    boxContainer: {
      backgroundColor: '#FFF',
      borderRadius:10,
      margin:'20px 0',
      padding: '25px 100px',
      height:'80%',
    },

    appLogo:{
        marginBottom:15,
        color:'#3F3D56',
        fontFamily:'Inter-Bold',
        fontSize:12,
    },

    mainText:{
        fontSize:30,
        marginBottom:20,
    },

    secondaryText:{
        fontSize:15,
        color:'#3F3D56',
        maxWidth:'70%',
        marginBottom:20,
    },

    labelInput:{
        fontWeight:'bold',
    },

    input:{
        height: 45
    },
    
    loginInput:{
        display:'block',
        marginTop:5,
        marginBottom:20,
        minWidth:'100%',
        borderRadius:5,
    },

    buttonInput:{
        height:50,
        fontFamily:'Inter-Bold',
    },
    loginText:{
        textAlign:'center',
        padding:'10px 0',
    },
    loginLink:{
        textDecoration:'none',
        fontFamily:'Inter-SemiBold',
    },

    forgotPassword:{
       color:"#AC0026", 
       float:'right',
       marginBottom: 20,
    }
})); 
