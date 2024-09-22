let currentSlide = 0;

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
        items[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % items.length;
                items[currentSlide].classList.add('active');
                }

                function prevSlide() {
                    const items = document.querySelectorAll('.carousel-item');
                        items[currentSlide].classList.remove('active');
                            currentSlide = (currentSlide - 1 + items.length) % items.length;
                                items[currentSlide].classList.add('active');
                                }

                                function submitLogin() {
                                    const username = document.getElementById('username').value;
                                        const password = document.getElementById('password').value;
                                            console.log('Username:', username);
                                                console.log('Password:', password);
                                                    // Aquí puedes añadir la lógica para procesar el login
                                                    }