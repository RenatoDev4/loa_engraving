window.onload = function() {
  var points = document.getElementsByClassName('editablePoint');
  var abilities = document.getElementsByClassName('editableAbility');

  for (var i = 0; i < points.length; i++) {
    var pointValue = points[i].value;
    points[i].style.display = 'none';
    var pointText = document.createElement('span');
    pointText.textContent = pointValue;
    points[i].parentNode.insertBefore(pointText, points[i]);
  }

  for (var i = 0; i < abilities.length; i++) {
    var abilityValue = abilities[i].options[abilities[i].selectedIndex].text;
    abilities[i].style.display = 'none';
    var abilityText = document.createElement('span');
    abilityText.textContent = abilityValue;
    abilities[i].parentNode.insertBefore(abilityText, abilities[i]);
  }

  var abilitiesSum = sumAbilities();
  updatePointsDistribution(abilitiesSum);
}

document.getElementById('editButton').addEventListener('click', function() {
toggleEdit();

  var points = document.getElementsByClassName('editablePoint');
  var abilities = document.getElementsByClassName('editableAbility');

  for (var i = 0; i < points.length; i++) {
    if (points[i].style.display === 'none') {
      if (points[i].previousSibling) {
        var pointText = points[i].previousSibling;
        points[i].parentNode.removeChild(pointText);
      }
      points[i].style.display = 'inline-block';
    } else {
      var pointValue = points[i].value;
      points[i].style.display = 'none';
      var pointText = document.createElement('span');
      pointText.textContent = pointValue;
      points[i].parentNode.insertBefore(pointText, points[i]);
    }
  }

  for (var i = 0; i < abilities.length; i++) {
    if (abilities[i].style.display === 'none') {
      if (abilities[i].previousSibling) {
        var abilityText = abilities[i].previousSibling;
        abilities[i].parentNode.removeChild(abilityText);
      }
      abilities[i].style.display = 'flex'; // Aqui mudamos para flex
    } else {
      var abilityValue = abilities[i].options[abilities[i].selectedIndex].text;
      abilities[i].style.display = 'none';
      var abilityText = document.createElement('span');
      abilityText.textContent = abilityValue;
      abilities[i].parentNode.insertBefore(abilityText, abilities[i]);
    }
  }
    
    // Cria uma lista de habilidades selecionadas
    var selectedAbilities = [];
    for (var i = 0; i < abilities.length; i++) {
      selectedAbilities.push(abilities[i].options[abilities[i].selectedIndex].text);
    }

    for (var i = 0; i < points.length; i++) {
        if (points[i].hasAttribute('readonly')) {
            points[i].removeAttribute('readonly');
        } else {
            points[i].setAttribute('readonly', true);
        }
    }

    
  // Faça uma requisição para a rota '/get_abilities/'
  fetch('/get_abilities/')
      .then(response => response.json())
      .then(data => {
          for (var i = 0; i < abilities.length; i++) {
              if (abilities[i].hasAttribute('disabled')) {
                  abilities[i].removeAttribute('disabled');

                  // Obtenha a habilidade selecionada atualmente
                  var currentSelectedAbility = abilities[i].options[abilities[i].selectedIndex].text;

                  for (var j = 0; j < data.abilities.length; j++) {
                      // Verifica se a habilidade está na lista de habilidades selecionadas
                      // e se é diferente da habilidade selecionada atualmente
                      if (selectedAbilities.includes(data.abilities[j]) && data.abilities[j] !== currentSelectedAbility) {
                        var option = document.createElement('option');
                        option.value = data.abilities[j];
                        option.text = data.abilities[j];
                        abilities[i].add(option);
                      }
                  }
              } else {
                  abilities[i].setAttribute('disabled', true);
                  while (abilities[i].options.length > 1) {
                      abilities[i].remove(1);
                  }
              }
          }
      });
});


// Variável global para armazenar o estado de edição
var isEditMode = false;

function toggleEdit() {
  var editButton = document.getElementById('editButton');

  if (!isEditMode) {
    // Modo de edição
    console.log('Switching to edit mode. Current button text:', editButton.textContent);
    editButton.textContent = 'Salvar Build';
    console.log('Button text updated:', editButton.textContent);
    isEditMode = true;
  } else {
    // Modo de visualização
    console.log('Switching to view mode. Current button text:', editButton.textContent);
    editButton.textContent = 'Editar';
    console.log('Button text updated:', editButton.textContent);
    isEditMode = false;
    updatePointsDistribution(sumAbilities());
  }

  // Atualiza as opções dos campos 'Select'
  updateSelectOptions();

  
}



function updateSelectOptions() {
  var abilities = document.getElementsByClassName('editableAbility');

  for (var i = 0; i < abilities.length; i++) {
    var abilitySelect = abilities[i];
    var selectedAbility = abilitySelect.options[abilitySelect.selectedIndex].text;
    var options = abilitySelect.options;

    // Guarda as habilidades selecionadas
    var selectedOptions = [];
    for (var j = 0; j < options.length; j++) {
      if (options[j].selected) {
        selectedOptions.push(options[j].value);
      }
    }

    // Remove todas as opções
    while (abilitySelect.options.length > 0) {
      abilitySelect.remove(0);
    }

    // Adiciona de volta apenas as habilidades selecionadas
    for (var j = 0; j < selectedOptions.length; j++) {
      var option = document.createElement('option');
      option.value = selectedOptions[j];
      option.text = selectedOptions[j];
      abilitySelect.add(option);
    }

    // Mantém a habilidade atualmente selecionada
    for (var j = 0; j < abilitySelect.options.length; j++) {
      if (abilitySelect.options[j].text === selectedAbility) {
        abilitySelect.selectedIndex = j;
        break;
      }
    }
  }
}

function optionExists(optionText, options) {
  for (var i = 0; i < options.length; i++) {
    if (options[i].text === optionText) {
      return true;
    }
  }
  return false;
}

// Função para habilitar os campos de edição
function enableFields() {
  var points = document.getElementsByClassName('editablePoint');
  var abilities = document.getElementsByClassName('editableAbility');

  for (var i = 0; i < points.length; i++) {
    points[i].removeAttribute('readonly');
    points[i].classList.remove('revertable');
  }

  for (var i = 0; i < abilities.length; i++) {
    abilities[i].removeAttribute('disabled');
  }
}

// Função para desabilitar os campos de edição
function disableFields() {
  var points = document.getElementsByClassName('editablePoint');
  var abilities = document.getElementsByClassName('editableAbility');

  for (var i = 0; i < points.length; i++) {
    points[i].setAttribute('readonly', true);
    points[i].classList.add('revertable');
  }

  for (var i = 0; i < abilities.length; i++) {
    abilities[i].setAttribute('disabled', true);
  }
}

function validateInput(input, minValue, maxValue) {
  var value = input.value; // remove o parseInt
  if (isNaN(value) || value < minValue || value > maxValue || value.length > 2) {
    input.value = ""; // Limpa o campo se o número for inválido
  } else {
    input.value = value; // Atualiza o valor do campo com o número válido
  }
}

// Evento 'blur' para reverter para o valor original quando o campo estiver vazio
var originalValues = []; // Armazena os valores originais
var revertableInputs = document.getElementsByClassName("revertable");
for (var i = 0; i < revertableInputs.length; i++) {
// Armazena o valor original ao carregar a página
originalValues[i] = revertableInputs[i].value;

revertableInputs[i].addEventListener("blur", function () {
  if (this.value === "") {
    var index = Array.prototype.indexOf.call(revertableInputs, this);
    this.value = originalValues[index];
  }
});
}



// Função para obter o valor do cookie CSRF
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

// Obtenha o CSRF token
var csrftoken = getCookie('csrftoken');


// Função para atribuir nível com base nos pontos
function assignLevel(points) {
if (points >= 15) {
    return 3;
} else if (points >= 6) {
    return 2;
} else if (points >= 5) {
    return 1;
} else {
    return 0; // ou você pode retornar qualquer valor padrão para pontos menores que 5
}
}

function updatePointsDistribution(abilitiesSum) {
var pointsDistribution = document.getElementById('pointsDistribution');

// Cria novos elementos li com os pontos atualizados
for (var ability in abilitiesSum) {
  var existingLi = document.querySelector(`#pointsDistribution li img[alt="${ability}"]`);
  if (existingLi) {
    var li = existingLi.parentElement;
    var level = assignLevel(abilitiesSum[ability]);

    // Atualiza o texto do ponto com o nome da habilidade
    var span = li.querySelector('span');
    var abilityName = getAbilityName(ability);
    var levelText = document.createElement('span');
    levelText.textContent = 'Engraving Level ' + level;

    // Define a cor do texto "Engraving Level" com base no nível
    if (level === 3) {
      levelText.style.color = 'orange'; // Nível 3 - laranja
    } else if (level === 2) {
      levelText.style.color = 'purple'; // Nível 2 - roxo
    } else if (level === 1) {
      levelText.style.color = 'darkblue'; // Nível 1 - azul escuro
    }

    // Substitui o conteúdo do ponto com os elementos atualizados
    span.innerHTML = abilityName + ' - '  + abilitiesSum[ability] + ' pontos' + ' - ';
    span.appendChild(levelText);
  }
}
}

// Função auxiliar para obter o nome da habilidade com base no código
function getAbilityName(ability) {
// Mapeie o código da habilidade para o nome correspondente
var abilityNames = {
};

// Verifique se há um nome correspondente na tabela de mapeamento
if (ability in abilityNames) {
  return abilityNames[ability];
}

// Caso contrário, retorne o próprio código de habilidade
return ability;
}

// Função para somar as habilidades
function sumAbilities() {
  var points = document.getElementsByClassName('editablePoint');
  var abilities = document.getElementsByClassName('editableAbility');
  var abilitiesSum = {};

  for (var i = 0; i < points.length; i++) {
    var point = parseInt(points[i].value);
    var ability = abilities[i].options[abilities[i].selectedIndex].text;

    if (abilitiesSum.hasOwnProperty(ability)) {
      abilitiesSum[ability] += point;
    } else {
      abilitiesSum[ability] = point;
    }
  }

  // Retorne o objeto com as habilidades somadas
  return abilitiesSum;
}