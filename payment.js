document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');
    const paymentInputs = {
        upi: document.getElementById('upi_id'),
        net_banking: document.getElementById('bank'),
        credit_debit: [
            document.getElementById('card_number'),
            document.getElementById('card_name'),
            document.getElementById('card_expiry'),
            document.getElementById('card_cvv')
        ]
    };

    function disableAllInputs() {
        for (let input of Object.values(paymentInputs)) {
            if (Array.isArray(input)) {
                input.forEach(el => el.disabled = true);
            } else {
                input.disabled = true;
            }
        }
    }

    function enableInputs(paymentMethod) {
        if (Array.isArray(paymentInputs[paymentMethod])) {
            paymentInputs[paymentMethod].forEach(el => el.disabled = false);
        } else {
            paymentInputs[paymentMethod].disabled = false;
        }
    }

    paymentForm.addEventListener('change', function(e) {
        if (e.target.name === 'payment_method') {
            disableAllInputs();
            enableInputs(e.target.value);
        }
    });

    disableAllInputs();
});