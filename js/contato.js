
async function enviarForm() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (nome == null) alert("Insira um nome");
    if (email == null) alert("Insira um email");
    if (message == null) alert("Insira uma mensagem");

    try {
        await emailjs.send('service_tgy4r2d', 'template_7hv9xh8', { to_name: nome, message, from_email: email });
        alert('email enviado!');
    } catch (error) {
        console.error(error);
        alert('Erro ao enviar email');
    }

}