import React, { Component } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './App.css';
import ExchangeForm from './Components/ExchangeForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="row">
          <div className="col s12">
            <div className="card-panel small amber">
              <div className="center-align white-text">
                <AttachMoneyIcon style={{ fontSize: 90 }}/>
              </div>
              <h3 id='title' className="white-text center-align card-title">CURRENCY EXCHANGE</h3>
          </div>
          </div>
        </section>
        <ExchangeForm />
      </div>
    );
  }
}

export default App;
