import React, { Component } from 'react';
import ExchangeResult from './ExchangeResult';

class ExchangeForm extends Component {
    constructor(props) {
        super(props)

        this.basicState = {
            amount: '',
            inputCurrency: 'EUR',
            finalCurrency: 'PLN',
            result: 0,
            currencies: [],
            exchangeRate: 0,
        };

        this.state = this.basicState
    }

    fetchUrl = `https://api.nbp.pl/api/exchangerates/tables/a/last/`;

    componentDidMount() {
        fetch(this.fetchUrl)
        .then((result) => result.json())
        .then((response) => {
            const currencyTableApi = [];
            let currencyMap = [];
        
            for (const key in response[0].rates) {
            currencyTableApi.push(response[0].rates[key]);
            currencyMap = currencyTableApi.map((curr, index) => ({
                ...curr,
                index,
            }));
            }
            this.setState({ currencies: currencyMap });
        })
        .catch((err) => console.log(err));
    };

    handleSelectCurrency = (e) => {
        this.setState({
        inputCurrency: e.target.value,
        exchangeRate: 0,
        });
    };

    handleExchange = (e) => {
        const { amount, currencies, inputCurrency } = this.state;
        e.preventDefault();

        const exchangeRate = currencies.find((elem) => elem.code === inputCurrency);

        this.setState({
        result: Math.abs(amount) * exchangeRate.mid,
        exchangeRate: exchangeRate.mid,
        });
    };

    render() {
        return (
          <>
            <section className="row">
              <div className="col s12 m6 offset-m3 valign-wrapper">
                <div className="input-field col s8 m6">
                    <input 
                      type="number" 
                      id="input-amount" 
                      placeholder="Amount" 
                      value={this.state.amount}
                      onChange={(e) => this.setState({ amount: e.target.value })}
                      />
                    <label className="active">From</label>
                </div>
                <div className="input-field col s4">
                    <select 
                      className="browser-default" 
                      id="select-currency"
                      value={this.state.inputCurrency}
                      onChange={(e) => this.handleSelectCurrency(e)}
                    >
                      {this.state.currencies.map((curr) => (
                        <option key={curr.index}>{curr.code}</option>
                      ))}
                    </select>
                </div>
              </div>
            </section>
    
            <section className="row">
                <div className="col s12 center-align">
                    <button 
                      className="waves-effect waves-light btn" 
                      id="covert-btn"
                      onClick={this.handleExchange}
                    >
                      convert
                    </button>
                </div>
            </section>
        
          </>
        );
      }
    
  };

  export default ExchangeForm;