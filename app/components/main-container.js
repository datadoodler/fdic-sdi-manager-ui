import React, { Component, PropTypes } from 'react';
//import Header from './header';
import Footer from './footer';
import LeftSideMenu from './left-side-menu';
import TopBar from './top-bar/top-bar'
import state  from '../data/initial-state'

class MainContainer extends Component {
    constructor() {
        super(...arguments)
        this.state = state;
    }

    render() {
        return (


            < div id = "wrapper" >

                < TopBar / >

                < LeftSideMenu banks={this.state.banks}/ >

                < div className = "content-page" >

                < div className = "content" >
                ....content {JSON.stringify(this.state.banks[0])}< /div>

                < Footer / >

                < /div>





            < /div>

        )
    }
}

export default MainContainer;
