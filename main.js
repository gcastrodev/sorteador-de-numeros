function generateNumber() {

    const min = Math.ceil( document.querySelector('.primeiroInput').value);
    const max = Math.floor(document.querySelector('.segundoInput').value);

    if (max > min) {

    const result = Math.floor(Math.random() * (max - min + 1) + min);
    alert(result);
    }
    else {
        alert('O valor mínimo deve ser menor que o máximo.');
    }
}