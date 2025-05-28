document.addEventListener('DOMContentLoaded', () => {
    // ... (Seu código existente do menu hamburguer, smooth scroll e Scroll Reveal) ...

    // === Lógica do Carrossel de Avaliações ===
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnProximo = document.querySelector('.btn-proximo');

    let currentIndex = 0; // Começa no primeiro slide

    // Função para mover o carrossel para um slide específico
    function moveToSlide(index) {
        // Calcula a largura do slide visível (que é 100% da largura do carrossel)
        // Isso é crucial para carrosséis com itens de largura variável ou número de itens por slide variável
        const slideWidth = carrossel.clientWidth;
        carrossel.scrollLeft = slideWidth * index;
        currentIndex = index;
    }

    // Event Listener para o botão 'Próximo'
    btnProximo.addEventListener('click', () => {
        // Encontra todos os slides para saber quantos temos
        const totalSlides = document.querySelectorAll('.slide').length;
        if (currentIndex < totalSlides - 1) { // Verifica se não estamos no último slide
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0); // Volta para o primeiro slide se estiver no final
        }
    });

    // Event Listener para o botão 'Anterior'
    btnAnterior.addEventListener('click', () => {
        const totalSlides = document.querySelectorAll('.slide').length;
        if (currentIndex > 0) { // Verifica se não estamos no primeiro slide
            moveToSlide(currentIndex - 1);
        } else {
            moveToSlide(totalSlides - 1); // Vai para o último slide se estiver no início
        }
    });

    // Animação com Scroll Reveal para a seção de Avaliações
    if (typeof ScrollReveal !== 'undefined') {
        // ... (Suas outras configurações de Scroll Reveal, como para o cabeçalho, caixas de serviço, etc.) ...

        ScrollReveal().reveal('#avaliacoes-clientes .titulo', {
            delay: 200,
            distance: '40px',
            origin: 'top',
            duration: 800
        });
        ScrollReveal().reveal('#avaliacoes-clientes .subtitulo', {
            delay: 300,
            distance: '40px',
            origin: 'top',
            duration: 900
        });
        ScrollReveal().reveal('.carrossel-container', { // Anima o container inteiro do carrossel
            delay: 400,
            distance: '60px',
            origin: 'bottom',
            duration: 1000
        });
    }
});
