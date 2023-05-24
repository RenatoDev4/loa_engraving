document.addEventListener('DOMContentLoaded', (event) => {
    
    let form = document.getElementById('abilitiesForm');
    let characterClasses = document.querySelectorAll('.character_classes .abilityCheckbox');
    let abilities = document.querySelectorAll('.abilities .abilityCheckbox');
    let classAbilities = document.querySelectorAll('.class_abilities .abilityCheckbox');

    form.addEventListener('submit', function(e) {
    
        let checkedCharacterClassCount = Array.from(characterClasses).filter(checkbox => checkbox.checked).length;
        let checkedAbilitiesCount = Array.from(abilities).filter(checkbox => checkbox.checked).length;
        let checkedClassAbilitiesCount = Array.from(classAbilities).filter(checkbox => checkbox.checked).length;

        let totalCheckedCount = checkedAbilitiesCount + checkedClassAbilitiesCount;
   
        if (checkedCharacterClassCount !== 1 || totalCheckedCount < 4 || totalCheckedCount > 6 || checkedAbilitiesCount > 5 || checkedClassAbilitiesCount > 2) {
            e.preventDefault();
            alert('Por favor, siga as regras: \n\n - Selecione apenas uma classe para o seu personagem.\n - Selecione no máximo 5 habilidades de combat.\n - Selecione no máximo 2 habilidade de classe.\n - Selecione entre 4 e 6 habilidades no total.\n');
        }
    });
});