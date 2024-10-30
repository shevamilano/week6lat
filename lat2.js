document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const alamat = document.getElementById('alamat');
    const born = document.getElementById('born');
    const posisi = document.getElementById('posisi');
    const noktp = document.getElementById('noktp');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.value.trim() !== '', 'Name cannot be blank');
    });

    alamat.addEventListener('input', () => {
        validateField(alamat, alamat.value.trim() !== '', 'Address cannot be blank');
    });

    born.addEventListener('input', () => {
        validateField(born, born.value.trim() !== '', 'Date of birth cannot be blank');
    });

    posisi.addEventListener('input', () => {
        validateField(posisi, posisi.value.trim() !== '', 'Position cannot be blank');
    });

    noktp.addEventListener('input', () => {
        validateField(noktp, noktp.value.trim() !== '', 'KTP number cannot be blank');
    });

    function checkInputs() {
        let isValid = true;
        
        isValid &= validateField(name, name.value.trim() !== '', 'Name cannot be blank');
        isValid &= validateField(alamat, alamat.value.trim() !== '', 'Address cannot be blank');
        isValid &= validateField(born, born.value.trim() !== '', 'Date of birth cannot be blank');
        isValid &= validateField(posisi, posisi.value.trim() !== '', 'Position cannot be blank');
        isValid &= validateField(noktp, noktp.value.trim() !== '', 'KTP number cannot be blank');

        return isValid;
    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
            return true;
        } else {
            setError(input, errorMessage);
            return false;
        }
    }

    function isAlamat(alamat) {
        return alamat.trim().length >= 5;
    }
    
    function isBorn(born) {
        return /^\d{4}-\d{2}-\d{2}$/.test(born);
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
        let errorDisplay = formControl.querySelector('p');
        if (errorDisplay) errorDisplay.remove();
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        let errorDisplay = formControl.querySelector('p');
        if (!errorDisplay) {
            errorDisplay = document.createElement('p');
            formControl.appendChild(errorDisplay);
        }
        errorDisplay.innerText = message;
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
});
