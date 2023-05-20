from django import forms


class ItemForm(forms.Form):
    necklace_rarity = forms.CharField(max_length=100)
    necklace_points = forms.CharField(max_length=100)
    earrings1_rarity = forms.CharField(max_length=100)
    earrings1_points = forms.CharField(max_length=100)
    earrings2_rarity = forms.CharField(max_length=100)
    earrings2_points = forms.CharField(max_length=100)
    rings1_rarity = forms.CharField(max_length=100)
    rings1_points = forms.CharField(max_length=100)
    rings2_rarity = forms.CharField(max_length=100)
    rings2_points = forms.CharField(max_length=100)
    ability_stone_rarity = forms.CharField(max_length=100)
    ability_stone_points = forms.CharField(max_length=100)
    engraving_slot1_points = forms.CharField(max_length=100)
    engraving_slot2_points = forms.CharField(max_length=100)
    points_distribution = forms.CharField(
        widget=forms.Textarea(attrs={'readonly': 'readonly'}))
