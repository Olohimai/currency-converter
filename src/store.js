import { createStore } from 'vuex';

const apiUrl = 'http://www.floatrates.com/daily/usd.json';  

export default createStore({
    state: {
        baseCurrency: 'USD',
        amount: 0,
        targetCurrency: 'EUR',
        conversionRate: 0,
        convertedAmount: 0,
        currencies: [],  
    },
    mutations: {
        updateAmount(state, amount) {
            state.amount = amount;
        },
        updateBaseCurrency(state, currency) {
            state.baseCurrency = currency;
        },
        updateTargetCurrency(state, currency) {
            state.targetCurrency = currency;
        },
        updateConversionRate(state, rate) {
            state.conversionRate = rate;
        },
        updateConvertedAmount(state, amount) {
            state.convertedAmount = amount;
        },
        updateCurrencies(state, currencies) {
            state.currencies = currencies;
        },
    },
    actions: {
        async fetchConversionRate({ commit, state }) {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data[state.targetCurrency]) {
                    const conversionRate = data[state.targetCurrency].rate;
                    commit('updateConversionRate', conversionRate);
                    commit('updateConvertedAmount', state.amount * conversionRate);
                } else {
                    console.error('Invalid target currency:', state.targetCurrency);
                }
 
                const currencies = Object.keys(data);
                commit('updateCurrencies', currencies);
            } catch (error) {
                console.error(error);
            }
        },
    },

});
