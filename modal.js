document.querySelector('.btn-login').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}
document.getElementById('closeLogin').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

document.querySelector('.btn-register').onclick = function() {
    document.getElementById('registerModal').style.display = 'block';
}
document.getElementById('closeRegister').onclick = function() {
    document.getElementById('registerModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === document.getElementById('loginModal') || event.target === document.getElementById('registerModal')) {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('registerModal').style.display = 'none';
    }
}