class Acronym
  def self.abbreviate text
    builder = ""
    text.split(/\W+/).each do |word|
      word.upcase!
      builder += word[0]
    end
    builder
  end
end
