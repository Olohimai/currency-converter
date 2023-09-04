import { createStore } from 'vuex';

const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Update with your desired base currency

export default createStore({
    state: {
        baseCurrency: 'USD',
        amount: 0,
        targetCurrency: 'EUR',
        conversionRate: 0,
        convertedAmount: 0,
        currencies: [], // List of available currencies
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
                const response = await fetch(apiUrl); // Use the updated apiUrl
                const data = await response.json();
                const currencies = Object.keys(data.rates); // Get all available currencies
                commit('updateCurrencies', currencies); // Update the list of currencies in the store
                const conversionRate = data.rates[state.targetCurrency];
                commit('updateConversionRate', conversionRate);
                commit('updateConvertedAmount', state.amount * conversionRate);
            } catch (error) {
                console.error(error);
            }
        },
    },
});
