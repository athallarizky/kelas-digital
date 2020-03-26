import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    topCourseNavigation:{
        width: '70%',
        display: 'flex',
        justifyContent:'space-between',
    },

    navButton:{
        width: '80px',
    },

    topCourseIllustration: {
        width:'80%',
    },

    topCoursePanel: {
        width:'70%',
        display:'flex',
        justifyContent:'flex-end',
        flexDirection:'column',

        backgroundImage: `url("/assets/img/png/top.png")`,
        height: '60vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        backgroundColor: 'lightgreen',
        marginBottom: 30,
        padding: 10,
    },

    courseTitle:{
        color: '#FFF',
        fontFamily: 'Inter-Bold',
        fontSize: 40,
    },

    courseInformation:{
        display:'flex',
        alignItems:'center',
    },

    profileWrapper:{
        display: 'flex',
    },

    profileImage:{
        width:50
    },

    profileInfo:{
        padding:10,
    },

    profileName:{
        fontFamily: 'Inter-SemiBold',
        color: '#FFF'
    },

    profileDesc: {
        fontSize: 10,
        color: '#333'
    },

    courseEnrolled:{
        color:'#FFF',
        fontFamily:'Inter-Regular',
        padding: 10,
    }
}))