const dna_to_rna: {[key: string]: string} = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A',
};


const dna: string[] = [
    'A',
    'C',
    'G',
    'T',
];

class Transcriptor {
  toRna(sequence: string) {
    // Your code here
    const seq_list : string[] = sequence.split('');
    if (seq_list.some(character => !dna.includes(character))) {
        throw new Error("Invalid input DNA.");
    }
    return seq_list.map(character => dna_to_rna[character]).join('');
  }
}

export default Transcriptor;
