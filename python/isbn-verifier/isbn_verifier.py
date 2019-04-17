def verify(isbn):
    try:
        arr = convert_to_array(isbn)
    except Exception as e:
        print(e)
        return False

    sum = 0
    mult = 10
    for elem in arr:
        sum += (mult * elem)
        mult -= 1
    return sum % 11 == 0


def convert_to_array(isbn):
    arr = []
    for c in isbn[:-1]:
        if c != '-':
            arr.append(ord(c) - 48)
    if isbn[-1] == 'X':
        arr.append(10)
    else:
        arr.append(ord(isbn[-1]) - 48)
    if len(arr) != 10:
        raise Exception("incorrect length")
    else:
        return arr