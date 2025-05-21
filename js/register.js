
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const gender = document.querySelector('input[name="gender"]:checked');
            const password = document.getElementById('password').value;
            const repassword = document.getElementById('repassword').value;
            const terms = document.getElementById('terms').checked;
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate gender
            if (!gender) {
                document.getElementById('gender-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate password
            if (password.length < 8) {
                document.getElementById('password-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate repassword
            if (password !== repassword) {
                document.getElementById('repassword-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate terms
            if (!terms) {
                document.getElementById('terms-error').style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, proceed with registration
            if (isValid) {
                alert('Pendaftaran berhasil!');
                // Here you would typically send the data to your server
                // window.location.href = 'index.html';
            }
        });