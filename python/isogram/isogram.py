# could do this with a regex
# import re
#
# re.compile(r'(\w).*\1')


def is_isogram(string):
    used = []
    string = string.lower()
    for i in string:
        if i in used:
            return False
        elif i != ' ' and i != '-':
            used.append(i)
    return True