def to_rna(dna_strand):
    convert = {
        'A': 'U',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }

    result = ''

    for elem in dna_strand:
        result += convert[elem]

    return result