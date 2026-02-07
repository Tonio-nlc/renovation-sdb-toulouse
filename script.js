// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('a[href^="#"]');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // File Upload Handling
    const fileInput = document.getElementById('photos');
    const fileUploadHint = document.querySelector('.file-upload-hint');

    if (fileInput && fileUploadHint) {
        // Update hint text when files are selected
        fileInput.addEventListener('change', function() {
            const fileCount = this.files.length;

            if (fileCount > 0) {
                const fileNames = Array.from(this.files).map(file => file.name);
                const displayText = fileCount === 1
                    ? `1 photo sélectionnée : ${fileNames[0]}`
                    : `${fileCount} photos sélectionnées`;

                fileUploadHint.innerHTML = `
                    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <p><strong>${displayText}</strong></p>
                    <p class="file-formats">Cliquez pour modifier votre sélection</p>
                `;
                fileUploadHint.style.borderColor = 'var(--success-color)';
                fileUploadHint.style.background = 'rgba(39, 174, 96, 0.05)';
            }
        });

        // Drag and drop functionality
        const fileWrapper = document.querySelector('.file-upload-wrapper');

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            fileWrapper.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            fileWrapper.addEventListener(eventName, () => {
                fileUploadHint.style.borderColor = 'var(--primary-color)';
                fileUploadHint.style.background = 'rgba(30, 58, 95, 0.05)';
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            fileWrapper.addEventListener(eventName, () => {
                if (fileInput.files.length === 0) {
                    fileUploadHint.style.borderColor = 'var(--border-color)';
                    fileUploadHint.style.background = 'var(--bg-light)';
                }
            }, false);
        });

        fileWrapper.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            fileInput.files = files;

            // Trigger change event
            const event = new Event('change', { bubbles: true });
            fileInput.dispatchEvent(event);
        }, false);
    }

    // Form Validation
    const leadForm = document.querySelector('.lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            const photoInput = document.getElementById('photos');
            const photoCount = photoInput.files.length;

            // Check if at least 2 photos are uploaded
            if (photoCount < 2) {
                e.preventDefault();

                // Show error message
                const warningMsg = document.querySelector('.warning-message');
                if (warningMsg) {
                    warningMsg.style.background = '#f8d7da';
                    warningMsg.style.borderColor = '#f5c6cb';
                    warningMsg.style.color = '#721c24';

                    const originalText = warningMsg.innerHTML;
                    warningMsg.innerHTML = `
                        <svg width="20" height="20" fill="currentColor">
                            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>
                        </svg>
                        <strong>Erreur :</strong> Veuillez télécharger au moins 2 photos de votre salle de bain actuelle. ${photoCount === 0 ? 'Aucune photo sélectionnée.' : 'Vous n\'avez sélectionné qu\'une seule photo.'}
                    `;

                    // Scroll to warning
                    warningMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Reset after 5 seconds
                    setTimeout(() => {
                        warningMsg.innerHTML = originalText;
                        warningMsg.style.background = '#fff3cd';
                        warningMsg.style.borderColor = '#ffc107';
                        warningMsg.style.color = '#856404';
                    }, 5000);
                }

                // Highlight the file input
                fileUploadHint.style.borderColor = 'var(--accent-color)';
                fileUploadHint.style.background = 'rgba(231, 76, 60, 0.05)';

                return false;
            }

            // Show loading state on submit button
            const submitBtn = leadForm.querySelector('.btn-submit');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                        <circle cx="10" cy="10" r="8"/>
                    </svg>
                    Envoi en cours...
                `;
            }

            // Form will submit naturally to Formspree
        });

        // Real-time validation feedback
        const requiredFields = leadForm.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (this.value.trim() === '' && this.type !== 'file' && this.type !== 'checkbox') {
                    this.style.borderColor = 'var(--accent-color)';
                } else if (this.checkValidity()) {
                    this.style.borderColor = 'var(--success-color)';
                }
            });

            field.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.style.borderColor = 'var(--success-color)';
                } else {
                    this.style.borderColor = 'var(--border-color)';
                }
            });
        });

        // Phone number formatting (French format)
        const phoneInput = document.getElementById('telephone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '');

                // Allow only numbers, +, -, (, )
                value = value.replace(/[^\d\+\-\(\)]/g, '');

                e.target.value = value;
            });
        }
    }

    // Add animation on scroll for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.gallery-item, .testimonial-card, .stat-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for spinning animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});

// Console message for developers
console.log('%c🛁 Rénovation Salle de Bain - Landing Page', 'color: #1e3a5f; font-size: 16px; font-weight: bold;');
console.log('%cFormspree integration active: https://formspree.io/f/xeezdzlj', 'color: #27ae60; font-size: 12px;');