class HighScores
  def initialize(scores)
    @scores = scores
  end

  # get the whole array
  attr_reader :scores

  # get the three maximal scores
  def personal_top_three
    @scores.max(3)
  end

  # get the highest score
  def personal_best
    @scores.max
  end

  # get last element
  def latest
    @scores.last
  end
end
