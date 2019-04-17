import string
from collections import Counter


def word_count(phrase):
    phrase = phrase.lower()
    for punc in string.punctuation:
        if punc != '\'':
            phrase = phrase.replace(punc, ' ')

    # remove single quotes
    phrase = phrase.replace(' \'', ' ')
    phrase = phrase.replace('\' ', ' ')
    words = phrase.split()
    return dict(Counter(words))