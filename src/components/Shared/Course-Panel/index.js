import React from 'react';
import {useStyles} from './style';

const CoursePanel = () => {
    const classes = useStyles();
    return(

            <div className={classes.topCoursePanel}>
                <h1 className={classes.courseTitle}>UI Fundamentals</h1>
                <div className={classes.courseInformation}>
                    <div className={classes.profileWrapper}>
                        <img src="/assets/img/png/mentor.png" className={classes.profileImage}/>
                        <div className={classes.profileInfo}>
                            <h4 className={classes.profileName}>Mike Burton</h4>
                            <p className={classes.profileDesc}>UI Designer</p>
                        </div>
                    </div>
                    <div className={classes.courseInfo}>
                        <p className={classes.courseEnrolled}><span style={{color:"#AC0026"}}>137</span> User enrolled</p>
                    </div>
                </div>           
            </div>
  
    )
}

export default CoursePanel;