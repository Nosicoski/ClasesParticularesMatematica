document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
      })
    })
  
    // Form Validation
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        // Only prevent default if we're not using a real email service
        // If using formsubmit.co or similar, let the form submit naturally
  
        const name = document.getElementById("name").value
        const lastname = document.getElementById("lastname").value
        const email = document.getElementById("email").value
        const days = document.getElementById("days").value
        const topics = document.getElementById("topics").value
        const message = document.getElementById("message").value
  
        if (!name || !lastname || !email || !days || !topics || !message) {
          e.preventDefault()
          alert("Por favor completa todos los campos requeridos.")
          return false
        }
  
        // If we're not using a real email service, show a success message
        // and prevent the form from submitting
        if (contactForm.getAttribute("action").includes("your-email@example.com")) {
          e.preventDefault()
          alert("¡Gracias por tu mensaje! Te responderé a la brevedad.")
          contactForm.reset()
        }
  
        // If using a real email service like formsubmit.co, the form will submit naturally
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  