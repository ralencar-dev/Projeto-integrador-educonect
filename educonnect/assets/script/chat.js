function askQuestion(question) {
    addMessage(question, 'user');
  
    let response = getResponse(question);
    setTimeout(() => {
      addMessage(response, 'bot');
    }, 1000);
  }
  
  function addMessage(message, sender) {
    const chatContent = document.getElementById('chatContent');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(`${sender}-message`);
    messageElement.innerHTML = `<p>${message}</p>`;
  
    chatContent.appendChild(messageElement);
  
    chatContent.scrollTop = chatContent.scrollHeight;
  }
  
  function getResponse(question) {
    const responses = {
      'Qual a minha nota em Matemática?': 'Sua nota em Matemática é 8.5.',
      'Quais são minhas próximas provas?': 'Sua próxima prova será de História, no dia 15 de dezembro.',
      'Quando começam as minhas férias?': 'As suas férias começam no dia 20 de dezembro.',
      'Como está minha média geral?': 'Sua média geral está em 7.8.',
      'Qual o horário da minha próxima aula?': 'Sua próxima aula é de Química, às 14:00h.',
    };
    
    return responses[question] || "Desculpe, não entendi a sua pergunta.";
  }
  