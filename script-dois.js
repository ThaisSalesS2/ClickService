document.addEventListener('DOMContentLoaded', () => {
    // === Lógica do Menu Hambúrguer ===
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); // Para a animação do hambúrguer
        });

        // Opcional: Fechar o menu ao clicar em um link (para single-page applications)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
            });
        });
    }

    // === Efeito de rolagem suave (Smooth Scroll) ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll para o elemento, considerando a altura da navbar fixa se houver uma
                const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
                const offsetTop = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Lógica do Carrossel de Avaliações ===
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnProximo = document.querySelector('.btn-proximo');

    if (carrossel && btnAnterior && btnProximo) {
        let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.slide').length;

        function moveToSlide(index) {
            const slideWidth = carrossel.clientWidth;
            carrossel.scrollLeft = slideWidth * index;
            currentIndex = index;
        }

        btnProximo.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                moveToSlide(currentIndex + 1);
            } else {
                moveToSlide(0); // Volta para o primeiro slide se estiver no final
            }
        });

        btnAnterior.addEventListener('click', () => {
            if (currentIndex > 0) {
                moveToSlide(currentIndex - 1);
            } else {
                moveToSlide(totalSlides - 1); // Vai para o último slide se estiver no início
            }
        });
    }


    // === Scroll Reveal (Com verificação para mobile) ===
    if (typeof ScrollReveal !== 'undefined') {
        // Define o breakpoint para mobile (768px é um bom padrão)
        const isMobile = window.innerWidth <= 768; // Defina seu breakpoint aqui

        // Inicializa o ScrollReveal
        const sr = ScrollReveal({
            // Configurações padrão global, se desejar.
            // Por exemplo:
            // reset: true, // Define se os elementos devem re-animar ao rolar para cima
            // distance: '20px',
            // duration: 500,
            // easing: 'ease-in-out',
        });

        if (isMobile) {
            // Se for mobile, desative completamente o ScrollReveal
            // Isso evita atrasos e melhora a performance em dispositivos móveis.
            sr.destroy(); // Isso desabilita todas as animações do ScrollReveal.
            console.log("ScrollReveal desativado para mobile."); // Para depuração
        } else {
            // Se não for mobile (desktop), aplique as animações normalmente

            // Animações para o cabeçalho (Hero Section)
            sr.reveal('.hero__content h1', {
                delay: 200,
                distance: '50px',
                origin: 'top',
                duration: 800
            });
            sr.reveal('.hero__content p', {
                delay: 300,
                distance: '50px',
                origin: 'top',
                duration: 900
            });
            sr.reveal('.cta-button', {
                delay: 400,
                distance: '50px',
                origin: 'bottom',
                duration: 1000
            });

            // Animações específicas para as caixas de serviço (Serviços)
            sr.reveal('.servico-box', { // Use a classe correta do seu HTML, que é .servico-box
                delay: 300,
                distance: '80px',
                origin: 'bottom',
                interval: 150,
                duration: 800
            });
            // Títulos da seção de serviços, se houver
            sr.reveal('#servicos .servicos__titulo', {
                delay: 200,
                distance: '40px',
                origin: 'top',
                duration: 800
            });
            sr.reveal('#servicos .servicos__subtitulo', {
                delay: 300,
                distance: '40px',
                origin: 'top',
                duration: 900
            });


            // Animação para a frase de destaque
            sr.reveal('.frase-destaque', {
                delay: 400,
                distance: '60px',
                origin: 'top',
                duration: 1000
            });

            // Animações para a seção "Sobre Nós"
            sr.reveal('#sobre .sobre-nos__titulo', { // ou .titulo-sobre se for a classe correta
                delay: 200,
                distance: '40px',
                origin: 'left',
                duration: 800
            });
            sr.reveal('#sobre .sobre-nos__subtitulo', { // ou .subtitulo-sobre
                delay: 300,
                distance: '40px',
                origin: 'left',
                duration: 900
            });
            sr.reveal('#sobre .about-content__text', { // ou .sobre-conteudo-principal
                delay: 400,
                distance: '60px',
                origin: 'bottom',
                duration: 1000
            });
            sr.reveal('.contato-frase', {
                delay: 500,
                distance: '40px',
                origin: 'top',
                duration: 900
            });
            sr.reveal('.botao-whatsapp', {
                delay: 600,
                distance: '50px',
                origin: 'bottom',
                duration: 1000
            });

            // Animações para os 3 blocos da seção inferior (Atendimento, Horários, Peças)
            sr.reveal('.secao-inferior .atendimento', {
                delay: 300,
                distance: '50px',
                origin: 'left',
                duration: 800
            });
            sr.reveal('.secao-inferior .horarios', {
                delay: 450,
                distance: '50px',
                origin: 'bottom',
                duration: 800
            });
            sr.reveal('.secao-inferior .pecas', {
                delay: 600,
                distance: '50px',
                origin: 'right',
                duration: 800
            });

            // Animações para a seção "Equipamentos"
            sr.reveal('#equipamentos .equipamentos__titulo', { // ou .equipamentos .titulo
                delay: 200,
                distance: '40px',
                origin: 'top',
                duration: 800
            });
            sr.reveal('#equipamentos .equipamentos__subtitulo', { // ou .equipamentos .subtitulo
                delay: 300,
                distance: '40px',
                origin: 'top',
                duration: 900
            });
            sr.reveal('.equipamentos__item', { // ou .lista-equipamentos .item
                delay: 400,
                distance: '50px',
                origin: 'bottom',
                interval: 100,
                duration: 700
            });

            // Animações para a seção "Carrossel de Clientes" (Avaliacações)
            sr.reveal('#avaliacoes-clientes .avaliacoes__titulo', { // ou .avaliacoes-clientes .titulo
                delay: 200,
                distance: '40px',
                origin: 'top',
                duration: 800
            });
            sr.reveal('#avaliacoes-clientes .avaliacoes__subtitulo', { // ou .avaliacoes-clientes .subtitulo
                delay: 300,
                distance: '40px',
                origin: 'top',
                duration: 900
            });
            sr.reveal('.carousel-container', { // Anima o container inteiro do carrossel
                delay: 400,
                distance: '60px',
                origin: 'bottom',
                duration: 1000
            });

            // Animações para a seção "Fabricantes"
            sr.reveal('#fabricantes .fabricantes__titulo', {
                delay: 200,
                distance: '40px',
                origin: 'top',
                duration: 800
            });
            sr.reveal('#fabricantes .fabricantes__subtitulo', {
                delay: 300,
                distance: '40px',
                origin: 'top',
                duration: 900
            });
            sr.reveal('.fabricantes__item', {
                delay: 400,
                distance: '50px',
                origin: 'bottom',
                interval: 100,
                duration: 700
            });

            // Animações para a seção "Rodapé"
            sr.reveal('.footer-section', {
                delay: 200,
                distance: '50px',
                origin: 'bottom',
                interval: 150,
                duration: 800
            });
            sr.reveal('.footer-bottom p', {
                delay: 400,
                distance: '20px',
                origin: 'bottom',
                duration: 700
            });
        }
    }
});
