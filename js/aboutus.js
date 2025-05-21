// Feedback Modal Logic
        const modal = document.getElementById('feedbackModal');
        const btn = document.getElementById('feedbackBtn');
        const closeBtn = document.querySelector('.close-btn');
        const stars = document.querySelectorAll('.star');
        const ratingInput = document.getElementById('rating');
        
        // Open modal
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        
        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Star rating logic
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                ratingInput.value = value;
                
                stars.forEach((s, index) => {
                    if (index < value) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
        
        // Form submission
        document.getElementById('feedbackForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would typically send the data to a server
            alert('Thank you for your feedback!');
            modal.style.display = 'none';
            
            // Reset form
            document.getElementById('feedbackForm').reset();
            stars.forEach(star => star.classList.remove('active'));
            ratingInput.value = '0';
        });