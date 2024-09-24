document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Para obter os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
  
    // Para obter a div da mensagem
    const messageDiv = document.getElementById('message');
  
    // Para validar o formulário
    if (campoB > campoA) {
        messageDiv.textContent = 'Validado com sucesso!';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Inválido! Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message error';
    }
  });