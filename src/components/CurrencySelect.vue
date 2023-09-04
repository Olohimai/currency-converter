<!-- src/components/CurrencySelect.vue -->
<template>
    <div class="relative">
        <select v-model="selectedCurrency"
            class="block w-full px-4 py-2 pr-8 rounded border shadow-sm focus:outline-none focus:ring focus:border-blue-300">
            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
    },
    computed: {
        selectedCurrency: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit('input', newValue);
            },
        },
        currencies() {
            // Return the list of available currencies
            return ['USD', 'EUR', 'GBP']; // Example list
        },
    },
};
</script>
