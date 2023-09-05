<template>
    <div class="relative">
        <select v-model="selectedCurrency"
            class="custom-select">
            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        value: String,
    },
    data() {
        return {
            selectedCurrency: this.value,
            currencies: [],
        };
    },
    watch: {
        selectedCurrency() {
            this.$emit('input', this.selectedCurrency);
        },
    },
    mounted() {
        this.fetchCurrencies();
    },
    methods: {
        async fetchCurrencies() {
            try {
                const response = await axios.get('http://www.floatrates.com/daily/currencies.json');
                this.currencies = Object.keys(response.data);
            } catch (error) {
                console.error('Fetch error:', error); 
            }
        },
    },
};
</script>
<style scoped>
.custom-select {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    padding-right: 2rem; 
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    outline: none;
    appearance: none; 
    background: transparent url('arrow-icon.png') no-repeat right center; 
    background-size: 1.5rem; 
}

.custom-select:focus {
    border-color: #3490dc;
    box-shadow: 0 0 0.5rem rgba(52, 144, 220, 0.5);
}</style>