import random

ACCESSORY_RARITY = {
    'Legendary': [(3, 3)],
    'Relic': [(5, 3)],
    'Ancient': [(6, 3)],
}

ABILITY_STONE_RARITY = {
    'Legendary': (6,),
    'Relic': (6, 10),
}

CHARACTER_CLASS = ['Death Blade',
                   'Shadow Hunter',
                   'Reaper',
                   'Slayer',
                   'Destroyer',
                   'Berserker',
                   'Gunlancer',
                   'Paladin',
                   'Artillerist',
                   'Scouter',
                   'Dead Eye',
                   'Gunslinger',
                   'Sharpshooter',
                   'Bard',
                   'Sorceress',
                   'Arcana',
                   'Artist',
                   'Aeromancer',
                   'Summoner',
                   'Scrapper',
                   'Soulfist',
                   'Striker',
                   'Glaivier',
                   'Wardancer',
                   ]

ENGRAVING_SLOT_POINTS = [9, 12]

ABILITY_LIST = [
    'Grudge',
    'Keen Blunt Weapon',
    'Adrenaline',
    'Raid Captain',
    'Hit Master',
    'Cursed Doll',
    'Ambush Master',
    'Mass Increase',
    'All-out Attack',
    'Super Charge',
    'Barricade',
    'Master Brawler',
    'Awakening',
    'Expert',
    'Heavy Armor',
    'Vital Point',
    'Drops of Ether',
    'Spirit Absorption',
    'Magick Stream',
    'Increased Max MP',
    "Masters's Tenacity",
    'Ether Predator',
    'Stabilized Status',
    'Precision Dagger',
    'Strong Will',
    'Disrespect',
    'Crisis Evasion',
    'MP Regen',
    'Master of Escape',
    'Fortitude',
    'Crushing Fist',
    'Shield Piercing',
    'Divine Protection',
    'Explosive Expert',
    'Enhanced Shield',
    'Necromancy',
    'Preemptive Strike',
    'Broken Bone',
    'Lightning Fury',
    'Contender',
    'Propulsion',
    'Emergency Rescue',
    'Sight Focus',

]

CLASS_ABILITY_LIST = [
    'Surge',
    'Remaining Energy',
    'Demonic Impulse',
    'Perfect Suppression',
    'Predator',
    'Punisher',
    'Mayhem',
    "Berserker's Technique",
    'Igniter',
    'Reflux',
    'Deathblow',
    'Esoteric Flurry',
    'Desperate Salvation',
    'True Courage',
    'Blessed Aura',
    'Judgment',
    'Full Bloom',
    'Recurrence',
    'Peacemaker',
    'Time To Hunt',
    'Barrage',
    'Firepower Enhancement',
    'Lone Knight',
    'Combat Readiness',
    'Master Summoner',
    'Communication Overflow',
    'Rage Hammer',
    'Gravity Training',
    'Lunar Voice',
    'Hunger',
    'Control',
    'Pinnacle',
    'Death Strike',
    'Loyal Companion',
    'Evolutionary Legacy',
    'Arthetinean Skill',
    'Ultimate Skill: Taijutsu',
    'Shock Training',
    'Esoteric Skill Enhancement',
    'Enhanced Weapon',
    'Pistoleer',
    "Empress's Grace",
    'Order of the Emperor',
    'First Intention',
    'Energy Overflow',
    'Robust Spirit',

]


def generate_accessories(num_abilities, ancientCheck):
    accessories = []
    # Se ancientCheck for True, inclui "Ancient" como uma escolha possível.
    # Caso contrário, as escolhas possíveis são apenas "Relic" e "Legendary".
    rarity_choices = ["Relic", "Ancient",
                      "Legendary"] if ancientCheck else ["Relic", "Legendary"]

    if num_abilities == 4:
        rarity_choices = ["Legendary", "Relic", "Ancient"] if ancientCheck else [
            "Relic", 'Legendary']

    if num_abilities == 5:
        rarity_choices = ["Relic", "Ancient"] if ancientCheck else [
            "Relic", 'Legendary']

    if num_abilities == 6:
        rarity_choices = ["Ancient"]

    for _ in range(2):  # Earrings
        rarity = random.choice(rarity_choices)
        accessories.append((rarity, max(ACCESSORY_RARITY[rarity], key=sum)[:2]))  # noqa
    for _ in range(2):  # Rings
        rarity = random.choice(rarity_choices)
        accessories.append((rarity, max(ACCESSORY_RARITY[rarity], key=sum)[:2]))  # noqa
    # Necklace
    rarity = random.choice(rarity_choices)
    accessories.append((rarity, max(ACCESSORY_RARITY[rarity], key=sum)[:2]))
    return accessories


def generate_ability_stone(rarity, abilities, num_abilities, stoneCheck):
    if num_abilities <= 4 and rarity in ["Relic", "Ancient"]:
        stone_rarity = random.choice(["Legendary", "Relic"])
    else:
        stone_rarity = rarity
    if stone_rarity not in ABILITY_STONE_RARITY:
        stone_rarity = 'Legendary'

    stone_points_pairs = [[6, 7], [7, 6], [7, 7]]

    # Priorize o par [7, 7]
    stone_points_pairs.sort(key=lambda x: (x != [7, 7], x))

    # Se o checkbox está marcado, altera stone_points para 9,7 ou 7,9
    if stoneCheck:
        stone_points_pairs = [[9, 7], [7, 9]]

    # Altera os pontos da pedra de habilidade para 7,7 ou mais se o número de habilidades for 6
    if num_abilities == 6:
        stone_points_pairs = [[max(val, 7) for val in pair]
                              for pair in stone_points_pairs]

    ability_indices = random.sample(range(len(abilities)), 2)
    return random.choice(stone_points_pairs), ability_indices


def generate_engraving_slots(num_abilities, engraving12x12Check, engravingclassCheck):
    if num_abilities == 6:
        return [12, 12]

    if engraving12x12Check:
        return [12, 12]
    else:
        if engravingclassCheck:
            return [random.choice(ENGRAVING_SLOT_POINTS)]
        else:
            return [random.choice(ENGRAVING_SLOT_POINTS), random.choice(ENGRAVING_SLOT_POINTS)]


def distribute_points(abilities, class_abilities, points_required, stoneCheck, ancientCheck, engraving12x12Check, engravingclassCheck):
    num_abilities = len(abilities) + len(class_abilities)
    accessories = generate_accessories(num_abilities, ancientCheck)
    ability_stone = generate_ability_stone(
        "Relic", abilities, num_abilities, stoneCheck)
    engraving_slots = generate_engraving_slots(
        num_abilities, engraving12x12Check, engravingclassCheck)

    # Select two abilities for the engraving slots
    engraving_slots_abilities = random.sample(range(num_abilities), 2)

    return (accessories, "Relic", ability_stone, engraving_slots, engraving_slots_abilities)


def generate_result(abilities, class_abilities, character_class, stoneCheck, ancientCheck, engraving12x12Check, engravingclassCheck):
    points_required = 15
    num_abilities = len(abilities) + len(class_abilities)

    # Add a special condition for six abilities
    if num_abilities == 6:
        points_required_sixth = random.randint(5, 10)
    else:
        points_required_sixth = points_required

    while True:
        accessories, ability_stone_rarity, ability_stone_data, engraving_slots, engraving_slots_abilities = distribute_points(
            abilities, class_abilities, points_required, stoneCheck, ancientCheck, engraving12x12Check, engravingclassCheck)

        points_distribution = {
            ability: 0 for ability in abilities + class_abilities}

        accessory_ability_allocation = []

        # Sum accessory points
        for i, accessory in enumerate(accessories):
            accessory_points = accessory[1]
            accessory_ability_indices = random.sample(range(num_abilities), 2)
            accessory_ability_allocation.append(
                (accessory_points, accessory_ability_indices))

            for j, points in enumerate(accessory_points):
                points_distribution[(abilities + class_abilities)
                                    [accessory_ability_indices[j]]] += points

        # Sum Ability Stone points
        ability_stone_points, ability_stone_indices = ability_stone_data
        for i, points in enumerate(ability_stone_points):
            points_distribution[abilities[ability_stone_indices[i]]] += points

        # Sum Engraving Slot points
        for slot, ability_index in zip(engraving_slots, engraving_slots_abilities):
            points_distribution[(abilities + class_abilities)
                                [ability_index]] += slot

        # Check if all abilities have at least 15 points
        if num_abilities == 6:
            # Special condition for six abilities
            if (all(points >= points_required for ability, points in points_distribution.items() if ability != (abilities + class_abilities)[-1])
                    and 5 <= points_distribution[(abilities + class_abilities)[-1]] <= 10):
                break
        else:
            if all(points >= points_required for points in points_distribution.values()):
                break

    # Retorna os resultados
    necklace_points = accessory_ability_allocation[0][0]
    necklace_abilities = [(abilities + class_abilities)[i]
                          for i in accessory_ability_allocation[0][1]]

    earrings1_points = accessory_ability_allocation[1][0]
    earrings1_abilities = [(abilities + class_abilities)[i]
                           for i in accessory_ability_allocation[1][1]]

    earrings2_points = accessory_ability_allocation[2][0]
    earrings2_abilities = [(abilities + class_abilities)[i]
                           for i in accessory_ability_allocation[2][1]]

    rings1_points = accessory_ability_allocation[3][0]
    rings1_abilities = [(abilities + class_abilities)[i]
                        for i in accessory_ability_allocation[3][1]]

    rings2_points = accessory_ability_allocation[4][0]
    rings2_abilities = [(abilities + class_abilities)[i]
                        for i in accessory_ability_allocation[4][1]]

    ability_stone_points = ability_stone_points
    ability_stone_names = [(abilities + class_abilities)[i]
                           for i in ability_stone_indices]

    engraving_slots_points = engraving_slots
    engraving_slot1_abilities = (
        abilities + class_abilities)[engraving_slots_abilities[0]]
    engraving_slot2_abilities = (
        abilities + class_abilities)[engraving_slots_abilities[1]]

    # Retorna os resultados
    return {
        "accessories": accessories,
        "necklace_points": necklace_points,
        "necklace_abilities": necklace_abilities,
        "earrings1_points": earrings1_points,
        "earrings1_abilities": earrings1_abilities,
        "earrings2_points": earrings2_points,
        "earrings2_abilities": earrings2_abilities,
        "rings1_points": rings1_points,
        "rings1_abilities": rings1_abilities,
        "rings2_points": rings2_points,
        "rings2_abilities": rings2_abilities,
        "ability_stone_rarity": ability_stone_rarity,
        "ability_stone_points": ability_stone_points,
        "ability_stone_abilities": ability_stone_names,
        "engraving_slots_points": engraving_slots_points,
        "engraving_slot1_abilities": engraving_slot1_abilities,
        "engraving_slot2_abilities": engraving_slot2_abilities,
        "points_distribution": points_distribution,
        "character_class": character_class,
    }
