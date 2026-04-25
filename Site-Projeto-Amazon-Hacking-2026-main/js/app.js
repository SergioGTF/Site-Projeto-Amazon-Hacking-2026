// --- FUNÇÕES DE NAVEGAÇÃO BÁSICA ---
function transicaopaginas(page) {
    window.location.href = page;
}

function login() {
    window.location.href = "home.html";
}

function voltar() {
    window.history.back();
}

// --- FUNÇÕES DE EXIBIÇÃO DO FORMULÁRIO ---
function mostrarFormulario() {
    document.getElementById('area-formulario').style.display = 'block';
    document.getElementById('btn-abrir-form').style.display = 'none';
}

function esconderFormulario() {
    document.getElementById('area-formulario').style.display = 'none';
    document.getElementById('btn-abrir-form').style.display = 'block';
    
    // Limpa todos os campos ao fechar ou cancelar
    document.getElementById('tipo-cultura').value = "";
    document.getElementById('sistema-plantio').value = "";
    document.getElementById('hectares').value = "";
    document.getElementById('quantidade-mudas').value = "";
    document.getElementById('data-plantio').value = "";
    document.getElementById('previsao-colheita').value = "";
    document.getElementById('observacoes').value = "";
}

// --- FUNÇÕES PARA PERSISTÊNCIA (Salvar e Carregar) ---
function salvarCultura() {
    // Captura todos os valores digitados pelo usuário
    const tipo = document.getElementById('tipo-cultura').value;
    const sistema = document.getElementById('sistema-plantio').value;
    const hectares = document.getElementById('hectares').value;
    const mudas = document.getElementById('quantidade-mudas').value;
    const data = document.getElementById('data-plantio').value;
    const previsao = document.getElementById('previsao-colheita').value;
    const obs = document.getElementById('observacoes').value;

    // Validação básica dos campos mais importantes
    if (!tipo || !hectares || !data) {
        alert("Por favor, preencha pelo menos a Espécie, os Hectares e a Data de Plantio.");
        return;
    }

    // Cria um objeto com os dados da nova cultura
    const novaCultura = { tipo, sistema, hectares, mudas, data, previsao, obs };

    // Busca as culturas já salvas no LocalStorage ou cria um array vazio se não houver
    let culturas = JSON.parse(localStorage.getItem('minhasCulturas')) || [];
    
    // Adiciona a nova cultura à lista
    culturas.push(novaCultura);
    
    // Salva a lista atualizada de volta no LocalStorage
    localStorage.setItem('minhasCulturas', JSON.stringify(culturas));

    // Oculta o formulário, limpa os campos e recarrega a lista na tela
    esconderFormulario();
    carregarCulturas();
}

function carregarCulturas() {
    const listaElemento = document.getElementById('lista-culturas');
    
    // Só executa o carregamento se estiver na página que tem a lista
    if (!listaElemento) return;

    // Puxa os dados salvos
    let culturas = JSON.parse(localStorage.getItem('minhasCulturas')) || [];
    
    // Limpa a lista visual antes de renderizar para não duplicar
    listaElemento.innerHTML = ""; 

    // Cria os cartões visuais para cada cultura salva
    culturas.forEach((item) => {
        const card = document.createElement('div');
        card.className = "item-salvo";
        
        // Monta a exibição com os dados
        card.innerHTML = `
            <strong>🌱 ${item.tipo}</strong> <span style="font-size: 12px; color: #3498db; float: right;">${item.sistema || ''}</span><br>
            <small><strong>Área:</strong> ${item.hectares} ha | <strong>Mudas/Sementes:</strong> ${item.mudas || 'N/A'}</small>
            <small><strong>Plantio:</strong> ${item.data}</small>
            <small><strong>Previsão de Colheita:</strong> ${item.previsao || 'Não informada'}</small>
            ${item.obs ? `<small style="margin-top: 5px; color: #95a5a6; display: block;"><em>Obs: ${item.obs}</em></small>` : ''}
        `;
        listaElemento.appendChild(card);
    });
}

// Executa o carregamento automático das culturas ao abrir a página
document.addEventListener("DOMContentLoaded", carregarCulturas);