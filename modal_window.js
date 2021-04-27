const modalBtn = document.querySelectorAll('[data-modal]'),
    modalOpen = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

function displayNone () {
    modalOpen.style.display = 'none';
    document.body.style.overflow = 'scroll';
}

function showModal () {
    modalOpen.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearTimeout(showTime)
}

function openModal (btn) {
    btn.forEach((item) => {
        item.addEventListener('click', showModal)
    })
}

function closeModal (closeBtn) {
    closeBtn.addEventListener('click', displayNone)
}

function closeWithClickBack (back) {
    back.addEventListener('click', (e) => {
        if (e.target === back) {
            displayNone()
        }
    })
}

function closeWithEsc () {
    document.addEventListener('keydown', (e) =>{
        if (e.code === "Escape") {
            displayNone()
        }
    })
}

openModal(modalBtn);
closeModal(modalCloseBtn);
closeWithClickBack(modalOpen);
closeWithEsc();

const showTime = setTimeout(showModal, 5000)

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        window.removeEventListener('scroll',showModalByScroll);
    }
}
window.addEventListener('scroll',showModalByScroll)