Babyquiz::Application.routes.draw do
  
  get "levels/b"

  get "levels/c"

  get "levels/d"

  get "levels/e"

  get "levels/f"

  get "levels/g"

  get "levels/h"

  get "levels/i"

  get "levels/j"

  root :to => 'levels#a'

end