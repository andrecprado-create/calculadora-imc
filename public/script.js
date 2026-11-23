const form = document.getElementById('imc-form');
const resultadoSection = document.getElementById('resultado');
const valorImcEl = document.getElementById('valor-imc');
const classificacaoEl = document.getElementById('texto-classificacao');
const erroEl = document.getElementById('erro');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  erroEl.classList.add('hidden');
  resultadoSection.classList.add('hidden');

  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;

  try {
    const response = await fetch('/api/imc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ peso, altura })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.erro || 'Erro ao calcular o IMC.');
    }

    valorImcEl.textContent = data.imc;
    classificacaoEl.textContent = data.classificacao;
    resultadoSection.classList.remove('hidden');
  } catch (error) {
    erroEl.textContent = error.message;
    erroEl.classList.remove('hidden');
  }
});
