import unittest

from home.generate_engraving import \
    generate_result  # Importe a função generate_result do seu módulo


class TestAbilityDistribution(unittest.TestCase):
    def test_ability_distribution(self):
        for _ in range(1000):
            result = generate_result()

            # Pontos distribuídos
            distributed_points_sum = 0

            # Soma os pontos dos acessórios
            for points in result["accessory_points"]:
                distributed_points_sum += sum([int(point)
                                              for point in points.split(", ")])

            # Soma os pontos da pedra de habilidade
            distributed_points_sum += sum([int(point)
                                          for point in result["ability_stone_points"].split(", ")])

            # Soma os pontos dos slots de gravação
            distributed_points_sum += sum([int(point)
                                          for point in result["engraving_slots_points"]])

            # Pontos das habilidades
            ability_points_sum = sum(result["points_distribution"].values())

            self.assertEqual(ability_points_sum, distributed_points_sum)


if __name__ == '__main__':
    unittest.main()
