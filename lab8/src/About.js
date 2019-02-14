import React, { Component } from 'react';
import './App.css';


class About extends Component {



    render() {
        return (

            <>
                <h1 class="header-big">About</h1>
                <p>{this.props.text1}</p>
                <p>{this.props.text2}</p>
            </>

        );
    }


}

export default About;



