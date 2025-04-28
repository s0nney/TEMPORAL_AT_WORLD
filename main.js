document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });

        article.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    function createCircuitElement() {
        const circuit = document.createElement('div');
        circuit.classList.add('random-circuit');

        const size = Math.random() * 2 + 1;
        const isHorizontal = Math.random() > 0.5;

        circuit.style.position = 'fixed';
        circuit.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
        circuit.style.zIndex = '-1';

        if (isHorizontal) {
            circuit.style.height = `${size}px`;
            circuit.style.width = `${Math.random() * 100 + 50}px`;
        } else {
            circuit.style.width = `${size}px`;
            circuit.style.height = `${Math.random() * 100 + 50}px`;
        }

        circuit.style.top = `${Math.random() * 100}vh`;
        circuit.style.left = `${Math.random() * 100}vw`;
        circuit.style.opacity = '0';
        circuit.style.transition = 'opacity 2s';

        document.body.appendChild(circuit);

        setTimeout(() => {
            circuit.style.opacity = '1';

            setTimeout(() => {
                circuit.style.opacity = '0';

                setTimeout(() => {
                    document.body.removeChild(circuit);
                }, 2000);
            }, 4000);
        }, 100);
    }

    setInterval(createCircuitElement, 3000);

    for (let i = 0; i < 5; i++) {
        setTimeout(createCircuitElement, i * 1000);
    }
});