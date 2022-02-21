export function notify(msg) {
    let box = document.getElementById('errorBox');
    box.querySelector('span').textContent = msg;
    box.style.display = 'block'

    setTimeout(() => box.style.display = 'none', 3000);
}