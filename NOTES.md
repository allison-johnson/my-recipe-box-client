*QUESTIONS*
[] How to eliminate the need for an "extra" form in order to logout?
[] Before a recipe gets deleted from DB, I delete all of its associated notes (from the DB). Do I have to do anything on the front end to reflect this change?

*TODO*
[] Handle errors with login/signup (on front end as well, like Melia's)

[] Database changes
    [x] recipe belongs_to :user
    [] only load recipes for current user
    [] option of seeing (but not deleting) other users' recipes (and notes?)
        [] 'users' dropdown menu on navbar
        [] no 'manage recipes' option on navbar if you're viewing someone else's recipes
            [] or, 'manage recipes' always liks to your own recipes

[] Spruce up app-info class in recipesContainer

*CLEAN UP CODE*
[] Presentational/container/stateless components?
[] Rewrite stateless components as functional components

*STRETCH GOALS*
[] Drag and drop into weekly menu!
[] Add confirmation before deleting recipe (react-confirm-alert)

