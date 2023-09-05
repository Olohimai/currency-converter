<template>
    <div>
        <input v-model.number="amount" type="number"
           class="input-field" placeholder="Enter amount"  />
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
<style scoped>
.input-field {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    outline: none;
}

.input-field:focus {
    border-color: #3490dc;
    box-shadow: 0 0 0.5rem rgba(52, 144, 220, 0.5);
}
</style>