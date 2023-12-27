document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const pricingTable = document.querySelector('.pricing-table');

    toggleCheckbox.addEventListener('change', function () {
        if (toggleCheckbox.checked) {
            // Switch to yearly pricing
            updatePricing('yearly');
        } else {
            // Switch to monthly pricing
            updatePricing('monthly');
        }
    });

    // Initial setup
    updatePricing('monthly');

    function updatePricing(interval) {
        // Clear existing pricing options
        pricingTable.innerHTML = '';

        // Add your pricing options dynamically based on the interval (monthly/yearly)
        const pricingOption1 = createPricingOption('Basic', interval, 10);
        const pricingOption2 = createPricingOption('Standard', interval, 20);
        const pricingOption3 = createPricingOption('Premium', interval, 30);

        pricingTable.appendChild(pricingOption1);
        pricingTable.appendChild(pricingOption2);
        pricingTable.appendChild(pricingOption3);
    }

    function createPricingOption(name, interval, price) {
        const option = document.createElement('div');
        option.classList.add('pricing-option');
        option.innerHTML = `
            <h2>${name}</h2>
            <p class="price">$${price}/${interval}</p>
            <button class="buy-button">Buy Now</button>
        `;
        return option;
    }
});