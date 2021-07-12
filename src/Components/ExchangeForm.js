import React, { Component } from 'react';

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
  };

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

  export default ExchangeForm;