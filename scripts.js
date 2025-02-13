document.addEventListener("DOMContentLoaded", () => {
    
    const cepInput = document.getElementById("cep");
    const buscarBtn = document.getElementById("buscar");
    const tabelaEnderecos = document.getElementById("tabela-enderecos");
    const mensagemErro = document.getElementById("mensagem-erro");
    
    // recupera endereços já salvos 
    let enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
    let ordemAscendente = true; 
    
    
    atualizarTabela();
    
    // função para buscar um CEP na API
    async function buscarCEP(event) {
        event.preventDefault();
        mensagemErro.textContent = "";
        
        const cep = cepInput.value.trim();
        
        if (!/^\d{8}$/.test(cep)) {
            mensagemErro.textContent = "CEP inválido! Digite apenas 8 números.";
            return;
        }
        
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            
            if (data.erro) {
                mensagemErro.textContent = "CEP não encontrado!";
                return;
            }
            
            if (enderecos.some(end => end.cep === data.cep)) {
                mensagemErro.textContent = "CEP já adicionado!";
                return;
            }
            
            //  cria um novo objeto com as informações do CEP
            const novoEndereco = {
                cep: data.cep,
                rua: data.logradouro || "Não informado",
                bairro: data.bairro || "Não informado",
                cidade: data.localidade,
                estado: data.uf
            };
            
            // salva no armazenamento local
            enderecos.push(novoEndereco);
            localStorage.setItem("enderecos", JSON.stringify(enderecos));
            
            atualizarTabela(); 
            cepInput.value = "";
        } catch (error) {
            mensagemErro.textContent = "Erro ao buscar o CEP. Tente novamente!";
        }
    }
    
    // função para exibir os endereços na tabela
    function atualizarTabela() {
        tabelaEnderecos.innerHTML = "";
        
        enderecos.forEach(endereco => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${endereco.cep}</td>
                <td>${endereco.rua}</td>
                <td>${endereco.bairro}</td>
                <td>${endereco.cidade}</td>
                <td>${endereco.estado}</td>
            `;
            tabelaEnderecos.appendChild(linha);
        });
    }
    
    //  função para ordenar a tabela
    function ordenarTabela(coluna) {
        ordemAscendente = !ordemAscendente;
        
        enderecos.sort((a, b) => {
            const valA = a[coluna].toLowerCase();
            const valB = b[coluna].toLowerCase();
            
            return ordemAscendente ? valA.localeCompare(valB) : valB.localeCompare(valA);
        });
        
        localStorage.setItem("enderecos", JSON.stringify(enderecos));
        atualizarTabela();
    }
    
    
    buscarBtn.addEventListener("click", buscarCEP);
    
    //  permite pressionar enter para buscar
    cepInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            buscarCEP(event);
        }
    });
    
    //  eventos para ordenação
    document.querySelectorAll(".ordenar").forEach(botao => {
        botao.addEventListener("click", () => ordenarTabela(botao.dataset.coluna));
    });
});
