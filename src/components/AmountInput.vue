<!-- src/components/AmountInput.vue -->
<template>
    <div>
        <input v-model.number="amount" type="number"
            class="block w-full px-4 py-2 rounded border shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter amount" />
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
    },
    computed: {
        amount: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
