class Complement
  @substitution_hash = {
      A:'U',
      C:'G',
      G:'C',
      T:'A',
  }
  def self.of_dna dna_strand
    return '' if dna_strand.empty?  # input validation
    str = ""
    dna_strand.upcase.each_char do |char|
      str += @substitution_hash[char.to_ssym]
    end
    str
  end
end