import random

ACCESSORY_RARITY = {
    'Legendary': [(2, 3), (3, 3)],
    'Relic': [(4, 3), (5, 3)],
    'Ancient': [(4, 3), (5, 3), (6, 3)],
}

ABILITY_STONE_RARITY = {
    'Legendary': (6,),
    'Relic': (6, 10),
}

ENGRAVING_SLOT_POINTS = [9, 12]

ABILITY_LIST = [
    'Grudge',
    'Cursed Doll',
    'Hit Master',
    'Adrenaline',
    'Demonic Impulse',
]


def generate_accessories():
    accessories = []
    for _ in range(2):  # Earrings
        rarity = random.choice(["Relic", "Ancient"])
        accessories.append((rarity, max(ACCESSORY_RARITY[rarity], key=sum)[:2]))  # noqa
    for _ in range(2):  # Rings
        rarity = random.choice(["Relic", "Ancient"])
        accessories.append((rarity, max(ACCESSORY_RARITY[rarity], key=sum)[:2]))  # noqa
    # Necklace
    rarity = random.choice(["Relic", "Ancient"])
    accessories.append((rarity, max(ACCESSORY_RARITY[rarity], key=sum)[:2]))
    return accessories


def generate_ability_stone(rarity):
    stone_rarity = rarity
    if rarity not in ABILITY_STONE_RARITY:
        stone_rarity = 'Legendary'
    stone_points = []
    if stone_rarity == 'Legendary':
        stone_points = [6, 6, 7, 7]
    else:
        stone_points = [6, 6, 7, 7, 9, 7]

    ability_indices = random.sample(range(len(ABILITY_LIST)), 2)
    return random.sample(stone_points, 2), ability_indices


def generate_engraving_slots():
    return [random.choice(ENGRAVING_SLOT_POINTS), random.choice(ENGRAVING_SLOT_POINTS)]  # noqa


def distribute_points(points_required, num_abilities):
    accessories = generate_accessories()
    ability_stone = generate_ability_stone("Relic")
    engraving_slots = generate_engraving_slots()

    return (accessories, "Relic", ability_stone, engraving_slots)


def main():
    points_required = 15
    num_abilities = len(ABILITY_LIST)

    while True:
        accessories, ability_stone_rarity, ability_stone_data, engraving_slots = distribute_points(  # noqa
            points_required, num_abilities)

        points_distribution = {ability: 0 for ability in ABILITY_LIST}

        accessory_ability_allocation = []

        # Sum accessory points
        for accessory in accessories:
            accessory_points = accessory[1]
            accessory_ability_indices = random.sample(range(num_abilities), 2)
            accessory_ability_allocation.append(
                (accessory_points, accessory_ability_indices))

            for i, points in enumerate(accessory_points):
                points_distribution[ABILITY_LIST[accessory_ability_indices[i]]] += points  # noqa

        # Sum Ability Stone points
        ability_stone_points, ability_stone_indices = ability_stone_data
        for i, points in enumerate(ability_stone_points):
            points_distribution[ABILITY_LIST[ability_stone_indices[i]]] += points  # noqa

        # Sum Engraving Slot points
        for slot, ability_index in zip(engraving_slots, ability_stone_indices):
            points_distribution[ABILITY_LIST[ability_index]] += slot

        # Check if all abilities have at least 15 points
        if all(points >= points_required for points in points_distribution.values()):  # noqa
            break

    # Print results
    print("Accessories:")
    print()
    for accessory, ability_points_indices in zip(accessories, accessory_ability_allocation):  # noqa
        accessory_points, ability_indices = ability_points_indices
        ability_names = [ABILITY_LIST[i] for i in ability_indices]
        accessory_info = f"{accessory[0]}: {accessory[1]} - "
        accessory_info += ", ".join([f"{points} {ability}" for points,
                                    ability in zip(accessory_points, ability_names)])  # noqa
        print(accessory_info)
    print('----------------------')

    print("\nAbility Stone ({}):".format(ability_stone_rarity))
    ability_stone_points, ability_stone_indices = ability_stone_data
    ability_stone_names = [ABILITY_LIST[i] for i in ability_stone_indices]
    ability_stone_info = ", ".join([f"{points} {ability}" for points,
                                    ability in zip(ability_stone_points, ability_stone_names)])  # noqa
    print(ability_stone_info)
    print('----------------------')

    print("\nEngraving Slots:")
    for slot, ability_index in zip(engraving_slots, ability_stone_indices):
        ability_name = ABILITY_LIST[ability_index]
        slot_info = f"{slot} {ability_name}"
        print(slot_info)
    print('----------------------')

    print("\nPoints Distribution:")
    for ability, points in points_distribution.items():
        print("{}: {}".format(ability, points))


if __name__ == "__main__":
    main()
