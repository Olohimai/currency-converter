import { mount } from '@vue/test-utils';
import CurrencyConverter from '@/components/CurrencyConverter.vue';

// eslint-disable-next-line no-undef
describe('CurrencyConverter.vue', () => {
    // eslint-disable-next-line no-undef
    it('renders correctly', () => {
        const wrapper = mount(CurrencyConverter);
        // eslint-disable-next-line no-undef
        expect(wrapper.element).toMatchSnapshot();
    });

    // eslint-disable-next-line no-undef
    it('converts currency correctly', async () => {
        const wrapper = mount(CurrencyConverter);

        // Modify input and select values
        await wrapper.setData({ amount: 10, baseCurrency: 'USD', targetCurrency: 'EUR' });

        // Simulate a conversion
        await wrapper.vm.convertCurrency();

        // Check if the result is as expected
        // eslint-disable-next-line no-undef
        expect(wrapper.vm.convertedAmount).toBeGreaterThan(0);
    });
});
