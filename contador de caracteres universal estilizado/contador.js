const countBtn = document.querySelector('#count-btn');
const textArea = document.querySelector('#text-area');

countBtn.addEventListener('click', () => {
  const text = textArea.value.trim();

  // Verifica se o campo de texto está vazio
  if (text === '') {
    alert('Digite um texto para contar as palavras e caracteres.');
    return;
  }
  
  const wordsArray = text.split(/\s+/);
  
  // Conta a quantidade de palavras e caracteres
  const wordsCount = wordsArray.length;
  const charactersCount = text.length;
  
  // Exibe os resultados na tela
  const countResults = document.querySelector('#count-results');
  countResults.innerHTML = `O texto contém <span class="text-light">${wordsCount}</span> palavras e <span class="text-light">${charactersCount}</span> caracteres.`;
});

// Limpa os resultados quando o campo de texto é modificado
textArea.addEventListener('input', () => {
  const countResults = document.querySelector('#count-results');
  countResults.innerHTML = '';
})