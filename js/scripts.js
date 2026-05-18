// ===============================
// ESPERAR A QUE CARGUE TODO
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // MENU MOVIL
    // ===============================
    function toggleMenu() {
        const menu = document.querySelector(".nav-links");
        if (menu) menu.classList.toggle("active");
    }
    window.toggleMenu = toggleMenu;


    // ===============================
    // NAVBAR DINAMICO
    // ===============================
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    // ===============================
    // SCROLL REVEAL
    // ===============================
    const sections = document.querySelectorAll(".section");

    const reveal = () => {
        const trigger = window.innerHeight * 0.85;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < trigger) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);


    // ===============================
    // SLIDER RESEÑAS
    // ===============================
    let index = 0;
    const reviews = document.querySelectorAll(".review");

    function showReview() {
        if (reviews.length === 0) return;

        reviews.forEach(r => r.classList.remove("active"));

        reviews[index].classList.add("active");

        index++;
        if (index >= reviews.length) index = 0;
    }

    showReview(); // importante iniciar

    setInterval(showReview, 4000);


    // ===============================
    // FAQ
    // ===============================
    window.toggleFAQ = function(element) {
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== element) {
                item.classList.remove("active");
            }
        });

        element.classList.toggle("active");
    };


    // ===============================
    // CERRAR MENU
    // ===============================
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            const menu = document.querySelector(".nav-links");
            if (menu) menu.classList.remove("active");
        });
    });


    // ===============================
    // EFECTO BOTONES
    // ===============================
    document.querySelectorAll(".btn, .btn-outline").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });

});