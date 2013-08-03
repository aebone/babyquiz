class LevelsController < ApplicationController

  def start
  end

  def a
  end

  def b
    @scorea = params[:scorea]
  end

  def c
    @scoreb = params[:scoreb]
    @totalscore = params[:totalscore]
  end

  def d
    @scorec = params[:scorec]
    @totalscore = params[:totalscore]
  end

  def e
    @scored = params[:scored]
    @totalscore = params[:totalscore]
  end

  def f
    @scoree = params[:scoree]
    @totalscore = params[:totalscore]
  end

  def g
    @scoref = params[:scoref]
    @totalscore = params[:totalscore]
  end

  def h
    @scoreg = params[:scoreg]
    @totalscore = params[:totalscore]
  end

  def i
    @scoreh = params[:scoreh]
    @totalscore = params[:totalscore]
  end

  def j
    @scorei = params[:scorei]
    @totalscore = params[:totalscore]
  end
end