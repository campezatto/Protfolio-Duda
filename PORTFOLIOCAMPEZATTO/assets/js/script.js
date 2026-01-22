let btnclose = document.getElementById("drawer-open");
let btnopen = document.getElementById("icon");
let drawer = document.getElementById("drawer");


btnclose.addEventListener("click", fechadrawer)

function fechadrawer() {
    drawer.classList.remove("open")
    console.log(" aaa")
    btnopen.classList.remove("icon")

}

btnopen.addEventListener("click", abrirdrawer)

function abrirdrawer() {
    drawer.classList.add("open")
    btnopen.classList.add("icon")

}


function toggleTheme() {
    const body = document.body;
    const checkbox = document.querySelector("#check");

    if (checkbox.checked) {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    } else {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    }
}

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[current].classList.add("active");
}

// Carrossel de Projetos
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        items.forEach(item => {
            item.classList.remove('active', 'prev');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        items[index].classList.add('active');
        dots[index].classList.add('active');
        
        const prevIndex = index === 0 ? items.length - 1 : index - 1;
        items[prevIndex].classList.add('prev');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = currentSlide === 0 ? items.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    showSlide(0);
});

// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    emailjs.init('iGqaU9w8KJqE-QDXZ');
    
    const form = document.getElementById('formm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('sub');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        const templateParams = {
            from_name: document.getElementById('f01').value + ' ' + document.getElementById('f03').value,
            from_email: document.getElementById('f04').value,
            phone: document.getElementById('f02').value,
            message: document.getElementById('f05').value,
            to_email: 'campezatto.duda@gmail.com'
        };
        
        emailjs.send('service_portfolio', 'template_contact', templateParams)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            })
            .catch(function(error) {
                alert('Erro ao enviar mensagem: ' + error.text);
            })
            .finally(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
});
// Formulário sem redirecionamento
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('sub');
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        
        fetch('https://formspree.io/f/xpzvgqko', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                throw new Error('Erro');
            }
        })
        .catch(() => {
            alert('Erro ao enviar. Tente novamente.');
        })
        .finally(() => {
            submitBtn.textContent = 'Enviar';
            submitBtn.disabled = false;
        });
    });
});
// Carrossel de Artes
document.addEventListener('DOMContentLoaded', function() {
    const carouselArtes = document.getElementById('carousel-artes');
    const itemsArtes = document.querySelectorAll('.carousel-item-artes');
    const prevBtnArtes = document.querySelector('.prev-btn-artes');
    const nextBtnArtes = document.querySelector('.next-btn-artes');
    
    let currentSlideArtes = 0;
    
    function showSlideArtes(index) {
        itemsArtes.forEach(item => {
            item.classList.remove('active');
        });
        
        itemsArtes[index].classList.add('active');
    }
    
    function nextSlideArtes() {
        currentSlideArtes = (currentSlideArtes + 1) % itemsArtes.length;
        showSlideArtes(currentSlideArtes);
    }
    
    function prevSlideArtes() {
        currentSlideArtes = currentSlideArtes === 0 ? itemsArtes.length - 1 : currentSlideArtes - 1;
        showSlideArtes(currentSlideArtes);
    }
    
    if (nextBtnArtes) nextBtnArtes.addEventListener('click', nextSlideArtes);
    if (prevBtnArtes) prevBtnArtes.addEventListener('click', prevSlideArtes);
    
    showSlideArtes(0);
});

// Carrossel Mobile de Projetos
document.addEventListener('DOMContentLoaded', function() {
    const mobileCarousel = document.querySelector('.mobile-carousel');
    if (!mobileCarousel) return;
    
    const slides = mobileCarousel.querySelectorAll('.carousel-slide');
    const prevBtn = mobileCarousel.querySelector('.nav-btn.prev');
    const nextBtn = mobileCarousel.querySelector('.nav-btn.next');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    showSlide(0);
});

// Carrossel Mobile de Artes
document.addEventListener('DOMContentLoaded', function() {
    const mobileCarouselArtes = document.querySelector('.mobile-carousel-artes');
    if (!mobileCarouselArtes) return;
    
    const slidesArtes = mobileCarouselArtes.querySelectorAll('.carousel-slide');
    const prevBtnArtes = mobileCarouselArtes.querySelector('.nav-btn.prev');
    const nextBtnArtes = mobileCarouselArtes.querySelector('.nav-btn.next');
    
    let currentSlideArtes = 0;
    
    function showSlideArtes(index) {
        slidesArtes.forEach(slide => slide.classList.remove('active'));
        slidesArtes[index].classList.add('active');
    }
    
    function nextSlideArtes() {
        currentSlideArtes = (currentSlideArtes + 1) % slidesArtes.length;
        showSlideArtes(currentSlideArtes);
    }
    
    function prevSlideArtes() {
        currentSlideArtes = currentSlideArtes === 0 ? slidesArtes.length - 1 : currentSlideArtes - 1;
        showSlideArtes(currentSlideArtes);
    }
    
    if (nextBtnArtes) nextBtnArtes.addEventListener('click', nextSlideArtes);
    if (prevBtnArtes) prevBtnArtes.addEventListener('click', prevSlideArtes);
    
    showSlideArtes(0);
});