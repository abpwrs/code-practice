class Hamming
  def self.compute(a, b)
    unless a.length == b.length
      raise ArgumentError
    end
    dist=0
    a.each_char.with_index(0) do |char, index|
      if char != b[index]
        dist += 1
      end
    end
    return dist
  end
end