from django import template

register = template.Library()


@register.filter
def get_range(value):
    return range(value)


@register.filter
def add_one(value):
    return value + 1


@register.filter
def at_index(List, i):
    return List[int(i)]


@register.filter
def split(value, delimiter):
    return str(value).split(delimiter)


@register.filter
def zip_lists(a, b):
    return zip(a, b)
