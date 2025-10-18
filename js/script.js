function filtarLista () {
    // pega o valor digitado
    const inputSearch = document.getElementById('pesquisaInput')
    const filtro = inputSearch.value.toLowerCase();

    // pega todos os itens da lista
    const itens = document.querySelectorAll('li')

    // percorre todos os <li> e mostra ou esconde conforme o filtro
    itens.forEach(li => {
        const texto = li.textContent.toLowerCase();
        li.style.display = texto.includes(filtro) ? '' : 'none';
    } )
    
}

    const inputSearch = document.getElementById('pesquisaInput')
    const posicaoOriginal = inputSearch.offsetTop; // salva a posição original

    window.addEventListener('scroll', () => {
    if (window.scrollY > posicaoOriginal){
        inputSearch.classList.add('fixo')
        
    } else {
        inputSearch.classList.remove('fixo')
    }
})