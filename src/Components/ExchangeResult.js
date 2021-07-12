const ExchangeResult = ({ result, exchangeRate, currency }) => {
    return (
      <>
        <section className="row">
          <div className="col s12 center-align">
              <div id='rate'>
              {result > 0 ? `1 ${currency} = ${exchangeRate.toFixed(2)} PLN` : ``}
              </div>
          </div>
        </section>
  
        <section className="row">
          <div className="col s12 m6 offset-m3 valign-wrapper">
              <div className="input-field col s8 m6">
                  <input 
                    disabled 
                    type="number" 
                    id="input-converted" 
                    placeholder="Result"
                    value={result.toFixed(2)}
                  />
                  <label className="active">To</label>
              </div>
              <div className="input-field col s4">
                  <select className="browser-default">
                      <option value="pln" disabled selected>PLN</option>
                  </select>
              </div>
          </div>
        </section>
      </>
    );
  };
  
  export default ExchangeResult;