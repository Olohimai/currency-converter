<template>
  <div class="currency-converter-container">
  <div class="currency-converter">
    <h1>Currency Converter</h1>

    <div class="input-group">
      <label for="baseCurrency">Base Currency:</label>
      <select v-model="baseCurrency" @change="fetchConversionRate" class="custom-select">
        <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
      </select>
    </div>

    <div class="input-group">
      <label for="amount">Amount:</label>
      <input type="number" v-model="amount" @input="convert" class="custom-input" />
    </div>

    <div class="input-group">
      <label for="targetCurrency">Target Currency:</label>
      <select v-model="targetCurrency" @change="convert" class="custom-select">
        <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
      </select>
    </div>

    <p class="result">Converted Amount: {{ convertedAmount.toFixed(2) }}</p>
  </div>
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

<style scoped>
.currency-converter-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-height: 100vh;  
}
.currency-converter {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.custom-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.custom-select:focus {
  outline: none;
  border-color: #3490dc;
  box-shadow: 0 0 10px rgba(52, 144, 220, 0.5);
}

.custom-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffff;
  margin-right: 1px;
}

.result {
  font-size: 18px;
  font-weight: bold;
}
</style>


