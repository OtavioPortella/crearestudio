function enviarParaGoogleForms() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Substitua 'YOUR_FORM_ID' pelo ID do seu formulário do Google Forms
    var formId = '1FAIpQLSeT39s9kWF0v8YEZ2oJCZr5EQVC65QGL-xznftf21zluEj4RA';
    var apiUrl = 'https://docs.google.com/forms/d/e/' + formId + '/formResponse';

    // Construa a URL com os parâmetros do formulário
    var url = apiUrl + '?entry.123=' + nome + '&entry.456=' + email;

    // Crie uma nova janela para abrir a URL e enviar os dados
    window.open(url);

    // Você também pode usar XMLHttpRequest para enviar dados sem abrir uma nova janela
    // Certifique-se de lidar com CORS se o seu formulário estiver em um domínio diferente
  }