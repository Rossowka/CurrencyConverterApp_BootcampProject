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

  export default ExchangeForm;