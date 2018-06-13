import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BudgetBuilder from './containers/BudgetBuilder/BudgetBuilder';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BudgetBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
