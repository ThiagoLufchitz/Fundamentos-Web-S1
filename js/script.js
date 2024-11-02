function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}
