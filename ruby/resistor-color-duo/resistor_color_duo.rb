class ResistorColorDuo
  @color_hash = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
  }

  def self.value(list_of_colors)
    sum =0
    l = list_of_colors.length - 1
    list_of_colors.each_with_index do |color, index|
      sum += @color_hash[color.to_sym] * (10**(l-index))
    end
    sum
  end
end