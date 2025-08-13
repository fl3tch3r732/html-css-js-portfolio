// Language state
let currentLanguage = 'en';
// Theme state
let currentTheme = 'light';

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleLanguage() {
    // Toggle between English and French
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    
    // Update the language toggler button text
    const langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    });
    
    // Update all text content based on current language
    updatePageLanguage();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

function toggleTheme() {
    // Toggle between light and dark mode
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update the theme toggler button icon
    const themeButtons = document.querySelectorAll('.theme-toggle');
    themeButtons.forEach(button => {
        button.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    });
    
    // Update the document theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', currentTheme);
}

function updatePageLanguage() {
    // Get all elements with data attributes for language
    const elements = document.querySelectorAll('[data-en], [data-fr]');
    
    elements.forEach(element => {
        const englishText = element.getAttribute('data-en');
        const frenchText = element.getAttribute('data-fr');
        
        if (currentLanguage === 'en' && englishText) {
            element.textContent = englishText;
        } else if (currentLanguage === 'fr' && frenchText) {
            element.textContent = frenchText;
        }
    });
}

// Initialize the page with default language and theme
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Update theme toggle button
        const themeButtons = document.querySelectorAll('.theme-toggle');
        themeButtons.forEach(button => {
            button.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        });
    }
    
    updatePageLanguage();
});