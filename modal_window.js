const modalBtn = document.querySelectorAll('[data-modal]'),
    modalOpen = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

function openModal (btn) {
    btn.forEach((item) => {
        item.addEventListener('click', () => {
            modalOpen.style.display = 'block';
            document.body.style.overflow = 'hidden';
        })
    })
}

function closeModal (closeBtn) {
    closeBtn.addEventListener('click', () =>{
        modalOpen.style.display = 'none';
        document.body.style.overflow = 'scroll';
    })
}

function closeWithClickBack (back) {
    back.addEventListener('click', (e) => {
        if (e.target === back) {
            back.style.display = 'none';
            document.body.style.overflow = 'scroll';
        }
    })
}

function closeWithEsc () {
    document.addEventListener('keydown', (e) =>{
        if (e.code === "Escape") {
            modalOpen.style.display = 'none';
            document.body.style.overflow = 'scroll';
        }
    })
}

openModal(modalBtn);
closeModal(modalCloseBtn);
closeWithClickBack(modalOpen);
closeWithEsc();