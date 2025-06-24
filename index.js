
        // Create background particles
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration and delay
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add sparkle effect to candies
        const candies = document.querySelectorAll('.candy');
        setInterval(() => {
            candies.forEach(candy => {
                candy.style.boxShadow = '0 0 0 rgba(255, 255, 255, 0)';
                setTimeout(() => {
                    candy.style.boxShadow = '0 0 10px white';
                }, 100);
                setTimeout(() => {
                    candy.style.boxShadow = '0 0 0 rgba(255, 255, 255, 0)';
                }, 300);
            });
        }, 2000);
        
        // Add hover effect to game cards
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    