
        (function() {
            'use strict';
            var forms = document.querySelectorAll('#signupForm');
            Array.prototype.slice.call(forms)
                .forEach(function(form) {
                    form.addEventListener('submit', function(event) {
                        event.preventDefault();
                        event.stopPropagation();

                        if (form.checkValidity()) {
                            var password = document.getElementById('password').value;
                            var confirmPassword = document.getElementById('confirmPassword').value;

                            if (password !== confirmPassword) {
                                document.getElementById('confirmPassword').classList.add('is-invalid');
                            } else {
                                alert('successfull!');
                                form.reset();
                            }
                        }

                        form.classList.add('was-validated');
                    }, false);
                });
        })();
    