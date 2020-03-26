import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { useStyles } from './style'

import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

import Home from '../Home';
import About from '../About';
import Offers from '../Offers';
import TopCourses from "../Top-Courses";
import FAQ from "../FAQ";
import Testimonials from "../Testimonials";
import PageNotFound from '../../Shared/Page-Not-Found';


const Layout = () =>{
    const classes = useStyles();    
    return(
        <div className="wrapper">
            <div className={classes.leftpane}>
                <Navigation/>
            </div>
            <div className={classes.rightPane}>
                <Header/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <div className={classes.wrapper}> 
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/offers' component={Offers} />
                        <Route path='/top-course' component={TopCourses} />
                        <Route path='/faq' component={FAQ} />
                        <Route path='/testimonials' component={Testimonials} />
                        <Route path='*' component={PageNotFound} />
                    </Switch>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;