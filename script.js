/**
 * Lógica de interatividade - Big Burgs do João
 */

document.addEventListener('DOMContentLoaded', () => {

    // Animação de Scroll (Revelação Dinâmica) usando Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Opcional: Descomente para animar apenas uma vez
            }
        });
    }, {
        root: null,
        threshold: 0.2, // Dispara quando 20% do elemento aparece na tela
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
