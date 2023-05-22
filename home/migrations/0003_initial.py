# Generated by Django 4.2.1 on 2023-05-22 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0002_delete_abilitycombination'),
    ]

    operations = [
        migrations.CreateModel(
            name='Build',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accessories', models.TextField()),
                ('necklace_points', models.TextField()),
                ('necklace_abilities', models.TextField()),
                ('earrings1_points', models.TextField()),
                ('earrings1_abilities', models.TextField()),
                ('earrings2_points', models.TextField()),
                ('earrings2_abilities', models.TextField()),
                ('rings1_points', models.TextField()),
                ('rings1_abilities', models.TextField()),
                ('rings2_points', models.TextField()),
                ('rings2_abilities', models.TextField()),
                ('ability_stone_rarity', models.TextField()),
                ('ability_stone_points', models.TextField()),
                ('ability_stone_abilities', models.TextField()),
                ('engraving_slots_points', models.TextField()),
                ('engraving_slot1_abilities', models.TextField()),
                ('engraving_slot2_abilities', models.TextField()),
                ('points_distribution', models.TextField()),
                ('character_class', models.TextField()),
            ],
        ),
    ]