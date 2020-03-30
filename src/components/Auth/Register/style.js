import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    wrapper:{
        display:'flex',
        height: '100vh',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5E5E5',
    },

    boxContainer: {
      backgroundColor: '#FFF',
      borderRadius:10,
      margin:'20px 0',
      width:'400px',
      padding: '25px 100px',
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
    
    registerInput:{
        display:'block',
        marginTop:5,
        marginBottom:20,
        minWidth:'100%',
        border:'2px solid #FF2858',
        borderRadius:5,
    },

    buttonInput:{
        height:50,
        fontFamily:'Inter-Bold',
    },
    loginText:{
        textAlign:'center',
        padding:'20px 0',
    },
    loginLink:{
        textDecoration:'none',
        fontFamily:'Inter-SemiBold',
    }
})); 
