import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BugerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <BurgerBuilder ingredients= {this.state.ingredients} />
      </Layout>
      </div>
    );
  }
}

export default App;
