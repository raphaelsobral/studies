const faqs = document.querySelectorAll('details');

faqs.forEach(faq => {
    faq.addEventListener('toggle', () => {
        const icon = faq.querySelector('summary img');

        if (faq.open) {
            icon.src = 'assets/images/icon-minus.svg';
        } else {
            icon.src = 'assets/images/icon-plus.svg';
        }
    });
});