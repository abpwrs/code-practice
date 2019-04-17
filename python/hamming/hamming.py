def distance(strand_a, strand_b):
    dist = 0

    if len(strand_b) != len(strand_a):
        raise ValueError("Strand lengths must be the same")

    for i in range(len(strand_a)):
        if strand_a[i] != strand_b[i]:
            dist += 1
    return dist