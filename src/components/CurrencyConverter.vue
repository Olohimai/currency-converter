<template>
    <div>
        <h1>Currency Converter</h1>

        <label for="baseCurrency">Base Currency:</label>
        <select v-model="baseCurrency" @change="fetchConversionRate">
            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>

        <label for="amount">Amount:</label>
        <input type="number" v-model="amount" @input="convert" />

        <label for="targetCurrency">Target Currency:</label>
        <select v-model="targetCurrency" @change="convert">
            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>

        <p>Converted Amount: {{ convertedAmount.toFixed(2) }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseCurrency: 'USD',
            amount: 0,
            targetCurrency: 'EUR',
        };
    },
    computed: {
        convertedAmount() {
            return this.amount * this.$store.state.conversionRate;
        },
        currencies() {
            return this.$store.state.currencies;
        },
    },
    methods: {
        convert() {
            this.$store.commit('updateAmount', this.amount);
            this.$store.commit('updateBaseCurrency', this.baseCurrency);
            this.$store.commit('updateTargetCurrency', this.targetCurrency);
            this.$store.dispatch('fetchConversionRate');
        },
        fetchConversionRate() {
            this.$store.dispatch('fetchConversionRate');
        },
    },
    mounted() {
        this.fetchConversionRate();
    },
};
</script>
