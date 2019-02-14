import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';
import ContentApp from './ContentApp';
import Catalog from './Catalog';
import About from './About';
import PropTypes from 'prop-types';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <>
            <nav class="navbar">
              <div class="container">
                <ul class="nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/catalog">Catalog</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
              </div>
            </nav>

            <div class="container">
              <Route exact path="/" component={ContentApp} />
              <Route path="/catalog" component={Catalog} />
              <Route text1={this.props.text2} text2={this.props.text2} path="/about" component={About} />
            </div>
          </>
        </Router>

        <footer>
          <div class="container">
            <p>Shop © 2020 <br></br> Designed by Andrzej</p>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
About.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string
};

About.defaultProps = {
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque odio pharetra, rhoncus velit eget,feugiat magna. Integer ac augue aliquam, tempor diam nec, pulvinar velit. Pellentesque et sem a diam fringilla egestas nec vel metus. Etiam ac convallis leo. Vivamus vitae volutpat nisl, mollis hendrerit libero. Vivamus sed lobortis ligula. Suspendisse a nisi erat. Donec mi ante, condimentum nec efficitur non, egestas et lorem. Duis at urna ut mauris fringilla dignissim at in odio. Ut consectetur purus et maximus aliquam. Sed consectetur diam quis accumsan condimentum. Proin porta condimentum velit quis convallis.',
  text2: 'Donec mauris tellus, lobortis id dignissim id, luctus ut purus. Etiam rutrum nibh consectetur purus tincidunt scelerisque. Etiam faucibus volutpat lectus, quis blandit diam consectetur ac. In hac habitasse platea dictumst. Sed rhoncus mattis condimentum. Vivamus sit amet mi volutpat enim tincidunt fringilla. Etiam porttitor dolor eleifend felis consectetur facilisis. Ut pulvinar sollicitudin erat, nec malesuada nunc scelerisque nec. Aliquam vel dolor diam. Cras efficitur dignissim justo, ac tristique tellus pellentesque pharetra. Quisque pharetra lectus molestie, posuere lectus eget, tempor justo.'
};