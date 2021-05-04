import React from 'react';

import '../../css/currency.scss';

const CurrencyApp = () => {

    const [countries, setCountries] = React.useState(null);
    const [baseRate, setBaseRate] = React.useState(1);
    const [baseValue, setBaseValue] = React.useState(1);
    const [baseTarget, setBaseTarget] = React.useState((baseRate * baseValue).toFixed(4));
    const [baseCountry, setBaseCountry] = React.useState('');
    const [targetCountry, setTargetCountry] = React.useState('');

    function convertCurrency(event) {
        const currentValue = event.target.value;
        if(event.target.getAttribute('id') ===  'baseCurrency') {
            setBaseValue(currentValue);
            setBaseTarget( (currentValue * baseRate).toFixed(4) );
        } else {
            setBaseTarget(currentValue);
            setBaseValue( (currentValue / baseRate).toFixed(4) );
        }
    }

    React.useEffect(() => {
        if(baseCountry && targetCountry){
            fetchCurrencyRate();
        }
    }, [baseCountry,targetCountry])

    React.useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/192abebbb323e2a170b250da/codes')
        .then(response => response.json())
        .then(response => {
            setCountries(response.supported_codes.map( (item,index) => 
                <option key={index} value={item[0]}>{item[1]}</option>
            ));
            setBaseCountry('USD');
            setTargetCountry('INR');
        });
    },[])

    function fetchCurrencyRate() {
        fetch(`https://v6.exchangerate-api.com/v6/192abebbb323e2a170b250da/pair/${baseCountry}/${targetCountry}`)
        .then(response => response.json())
        .then(data => {
           setBaseRate(data.conversion_rate);
           setBaseValue(1);
           setBaseTarget(data.conversion_rate)
        }).catch(err => {
            console.error(err);
        });
    }

    function handleCountryChange(event) {
        const currentValue = event.target.value;
        if(event.target.getAttribute('id') ===  'baseCountry') {
            setBaseCountry(currentValue);
        } else {
            setTargetCountry(currentValue);
        }
    }

    if(!baseCountry && !targetCountry) {
        return <div className="currency-loader lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
    }

    return(
        <div className="wrapper">
            <div className="currency-app">
                <form className="form" autoComplete="off">
                    <div className="controls-row">
                        <input type="text" id="baseCurrency" name="location" value={baseValue} onChange={convertCurrency} required="" />
                        <select id="baseCountry" onChange={handleCountryChange} value={baseCountry}>
                            {countries ? countries : null}
                        </select>
                    </div>
                    <div className="controls-row">
                        <input type="text" id="targetCurrency" name="location"  value={baseTarget} onChange={convertCurrency} required="" />
                        <select id="targetCountry" onChange={handleCountryChange} value={targetCountry}>
                            {countries ? countries : null}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CurrencyApp;