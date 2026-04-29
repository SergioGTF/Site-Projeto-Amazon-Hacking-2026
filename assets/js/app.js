function ir(pagina) {
  window.location.href = pagina;
}

function voltar() {
  window.history.back();
}

function toast(msg, tipo = 'info') {
  const cores = { sucesso: '#0ea84b', erro: '#e53935', info: '#5c6bc0' };
  const el = document.createElement('div');
  el.textContent = msg;
  Object.assign(el.style, {
    position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
    background: cores[tipo] || cores.info, color: '#fff', padding: '11px 22px',
    borderRadius: '100px', fontSize: '14px', fontWeight: '600',
    boxShadow: '0 6px 20px rgba(0,0,0,.25)', zIndex: '9999',
    transition: 'opacity .4s', whiteSpace: 'nowrap',
  });
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; }, 2200);
  setTimeout(() => el.remove(), 2700);
}

function salvarCultura(dados) {
  const lista = JSON.parse(localStorage.getItem('culturas') || '[]');
  lista.push({ ...dados, id: Date.now() });
  localStorage.setItem('culturas', JSON.stringify(lista));
}

function salvarEstoque(dados) {
  const lista = JSON.parse(localStorage.getItem('estoque') || '[]');
  lista.push({ ...dados, id: Date.now() });
  localStorage.setItem('estoque', JSON.stringify(lista));
}

function getCulturas() {
  return JSON.parse(localStorage.getItem('culturas') || '[]');
}

function getEstoque() {
  return JSON.parse(localStorage.getItem('estoque') || '[]');
}
