let paginaMinhaLista = document.getElementById('pagina_minha_lista');
let paginaNovoItem = document.getElementById('pagina_novo_item');
let navMinhaLista = document.getElementById('nav_minha_lista');
let navNovoItem = document.getElementById('nav_novo_item');
let navPrincipal = document.getElementById('nav_principal');

navPrincipal.addEventListener('click', function() {
  navMinhaLista.classList.remove('pagina_ativa');
  navNovoItem.classList.remove('pagina_ativa');
  paginaMinhaLista.style.display = 'none';
  paginaNovoItem.style.display = 'none';
});

navMinhaLista.addEventListener('click', function() {
  navMinhaLista.classList.add('pagina_ativa');
  navNovoItem.classList.remove('pagina_ativa');
  paginaMinhaLista.style.display = 'flex';
  paginaNovoItem.style.display = 'none';
});

navNovoItem.addEventListener('click', function() {
  navNovoItem.classList.add('pagina_ativa');
  navMinhaLista.classList.remove('pagina_ativa');
  paginaMinhaLista.style.display = 'none';
  paginaNovoItem.style.display = 'flex';
});

function criah2(texto="") {
  let h2 = document.createElement('h2')
  h2.innerText=texto;
  return h2;
}

function criaTabela(itensPrimeiraCol=[""], itensSegundaCol=[""]) {
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  let trCabecalho = document.createElement('tr');
  let thSerial = document.createElement('th');
  thSerial.innerText = 'Serial';
  let thNome = document.createElement('th');
  thNome.innerText = 'Nome';
  trCabecalho.append(thSerial);
  trCabecalho.append(thNome);
  tbody.append(trCabecalho);
  for(let i=0; i<itensPrimeiraCol.length; i++) {
    let tr = document.createElement('tr');
    let tdSerial = document.createElement('td');
    tdSerial.innerText = itensPrimeiraCol[i];
    let tdNome = document.createElement('td');
    tdNome.innerText = itensSegundaCol[i];
    tr.append(tdSerial);
    tr.append(tdNome);
    tbody.append(tr);
  }
  table.append(tbody);
  return table;
}

function criaFormulario() {
  let form = document.createElement('form');
  form.action = '';
  form.method = 'post';
  let labelSerial = document.createElement('label');
  labelSerial.for = 'serial_peca';
  labelSerial.innerText = 'Serial:';
  let inputSerial = document.createElement('input');
  inputSerial.type = 'number';
  inputSerial.id = 'serial_peca';
  let labelNome = document.createElement('label');
  labelNome.for = 'serial_nome';
  labelNome.innerText = 'Nome:';
  let inputNome = document.createElement('input');
  inputNome.type = 'text';
  inputNome.id = 'serial_nome';
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Enviar';
  form.append(labelSerial);
  form.append(inputSerial);
  form.append(labelNome);
  form.append(inputNome);
  form.append(submit);
  return form;
}

function efetuarCadastro(event) {
  event.preventDefault();

  // Verifica se os campos estão preenchidos
  const inputSerial = document.querySelector('input[type="number"]');
  const inputTexto = document.querySelector('input[type="text"]');
  const msg = document.createElement('p');
  if(!inputSerial.value || !inputTexto.value) {
    msg.innerText = 'Campos obrigatórios não preenchidos';
    msg.style.color = 'red';
    msg.style.fontFamily = 'Montserrat';
    inputSerial.parentElement.append(msg);
    inputSerial.focus();
  } else {
    let valueSerial = inputSerial.value;
    let valueTexto = inputTexto.value;
    msg.innerText = 'Cadastro efetuado com sucesso';
    msg.style.color = 'green';
    msg.style.fontFamily = 'Montserrat';
    inputSerial.parentElement.append(msg);
    inputSerial.value = '';
    inputTexto.value = '';

    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    const tdSerial = document.createElement('td');
    const tdNome = document.createElement('td');
    tdSerial.innerText = valueSerial;
    tdNome.innerText = valueTexto;
    tr.append(tdSerial);
    tr.append(tdNome);
    tbody.append(tr);
  }

  // Remove a mensagem após 2 segundos
  setTimeout(() => {
    msg.remove();
  }, 2000);

}

paginaMinhaLista.append(criah2('Minha Lista'));
paginaMinhaLista.append(criaTabela(['1','2','3'], ['A', 'B', 'C']));
paginaNovoItem.append(criah2('Novo Item'));
paginaNovoItem.append(criaFormulario());

let submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click', efetuarCadastro);
