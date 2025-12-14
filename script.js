const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-track .card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
const cardWidth = cards[0].offsetWidth + 20; // card width + gap

nextBtn.addEventListener('click', () => {
    if (index < cards.length - 1) {
        index++;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});


$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Learner", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Alt + S to submit form
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
        // Alt + C to clear form
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            form.reset();
        }
    });

    // Announce keyboard shortcuts to screen readers
    const shortcutsAnnouncement = document.createElement('div');
    shortcutsAnnouncement.className = 'sr-only';
    shortcutsAnnouncement.setAttribute('role', 'note');
    shortcutsAnnouncement.setAttribute('aria-live', 'polite');
    shortcutsAnnouncement.textContent = 'Keyboard shortcuts available: Alt + S to submit form, Alt + C to clear form';
    document.body.appendChild(shortcutsAnnouncement);
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    // Validation messages
    const errorMessages = {
        name: 'Please enter your full name',
        email: 'Please enter a valid email address',
        subject: 'Please select a subject',
        message: 'Please enter your message'
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Show error message
    function showError(field, message) {
        const errorElement = document.getElementById(`${field}-error`);
        errorElement.textContent = message;
        errorElement.classList.add('visible');

        // Add error state to input
        const input = document.getElementById(field);
        input.setAttribute('aria-invalid', 'true');
    }

    // Clear error message
    function clearError(field) {
        const errorElement = document.getElementById(`${field}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove('visible');

        // Remove error state from input
        const input = document.getElementById(field);
        input.setAttribute('aria-invalid', 'false');
    }

    // Validate individual field
    function validateField(field) {
        const value = form[field].value.trim();
        let isValid = true;

        clearError(field);

        switch (field) {
            case 'name':
                if (!value) {
                    showError(field, errorMessages[field]);
                    isValid = false;
                }
                break;
            case 'email':
                if (!value || !emailRegex.test(value)) {
                    showError(field, errorMessages[field]);
                    isValid = false;
                }
                break;
            case 'subject':
                if (!value) {
                    showError(field, errorMessages[field]);
                    isValid = false;
                }
                break;
            case 'message':
                if (!value) {
                    showError(field, errorMessages[field]);
                    isValid = false;
                }
                break;
        }

        return isValid;
    }

    // Handle form submission
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     // Validate all fields
    //     const fields = ['name', 'email', 'subject', 'message'];
    //     const isValid = fields.every(field => validateField(field));

    //     if (isValid) {
    //         // Simulate form submission
    //         successMessage.classList.add('visible');
    //         form.reset();

    //         // Remove success message after 5 seconds
    //         setTimeout(() => {
    //             successMessage.classList.remove('visible');
    //         }, 5000);
    //     }
    // });

    // // Add blur event listeners for real-time validation
    // ['name', 'email', 'subject', 'message'].forEach(field => {
    //     const input = form[field];
    //     input.addEventListener('blur', () => validateField(field));
    // });
});