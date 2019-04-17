def is_pangram(sentence):
    sentence = sentence.lower()
    used = []
    for character in sentence:
        if character.isalpha():
            if character not in used:
                used.append(character)
    return True if len(used) == 26 else False