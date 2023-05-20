from django.http import JsonResponse
from django.shortcuts import render

from generate_engraving import (ABILITY_LIST, CHARACTER_CLASS,
                                CLASS_ABILITY_LIST, generate_result)


def result(request):
    if request.method == 'POST':
        # Obtém as habilidades selecionadas pelo usuário
        abilities = request.POST.getlist('abilities')
        # Obtém as habilidades de classe selecionadas pelo usuário
        class_abilities = request.POST.getlist('class_abilities')
        # Obtém a classe selecionada pelo usuário
        character_class = request.POST.getlist('character_class')
        # Obtém o estado dos checkboxes
        stoneCheck = request.POST.get('stoneCheck') == 'True'
        ancientCheck = request.POST.get('ancientCheck') == 'True'
        engraving12x12Check = request.POST.get('engraving12x12Check') == 'True'
        engravingclassCheck = request.POST.get('engravingclassCheck') == 'True'
        # Passe as habilidades selecionadas e o objeto request para a função
        result = generate_result(
            abilities, class_abilities, character_class, stoneCheck, ancientCheck, engraving12x12Check, engravingclassCheck)

        # Renderiza o template com o resultado
        return render(request, 'index.html', result)
    else:
        # Obtém a lista de habilidades disponíveis
        abilities = ABILITY_LIST
        # Obtém a lista de habilidades de classe disponíveis
        class_abilities = CLASS_ABILITY_LIST
        # Obtém a lista de classes disponíveis
        character_class = CHARACTER_CLASS
        # Renderiza o template com o formulário
        return render(request, 'form.html', {'abilities': abilities, 'class_abilities': class_abilities, 'character_class': character_class})


def get_abilities(request):
    abilities = ABILITY_LIST
    class_abilities = CLASS_ABILITY_LIST
    all_abilities = abilities + class_abilities
    return JsonResponse({'abilities': all_abilities})
