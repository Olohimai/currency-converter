// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseCurrency: 'USD',
        amount: 0,
        targetCurrency: 'EUR',
        conversionRate: 0,
        convertedAmount: 0,
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
    },
});
