class DaitoshiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="container nav-container">
                    <a href="index.html" class="logo">
                        DAITOSHI <span>WIKI</span>
                    </a>
                    
                    <ul class="nav-menu">
                        <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                        <li class="nav-item"><a href="reglas.html" class="nav-link">Reglas</a></li>
                        <li class="nav-item"><a href="mundo.html" class="nav-link">El Mundo</a></li>
                        <li class="nav-item"><a href="estrategia.html" class="nav-link">Estrategia</a></li>
                        <li class="nav-item"><a href="tablero.html" class="nav-link">Tablero</a></li>
                    </ul>

                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
            </nav>
        `;

        // menu movil
        const hamburger = this.querySelector(".hamburger");
        const navMenu = this.querySelector(".nav-menu");
        const navLinks = this.querySelectorAll(".nav-link");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
}

class DaitoshiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-col">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="index.html">Inicio</a></li>
                                <li><a href="reglas.html">Reglas</a></li>
                                <li><a href="mundo.html">Lore</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Recursos</h4>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=y6skukfV7nY">Descargar Manual PDF</a></li>
                                <li><a href="#">Foro de Jugadores</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Sobre Daitoshi</h4>
                            <p>Un juego de mesa de estrategia económica, gestión de mano y movimiento oculto.</p>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2026 Daitoshi Fan Wiki. Sitio no oficial.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('daitoshi-header', DaitoshiHeader);
customElements.define('daitoshi-footer', DaitoshiFooter);