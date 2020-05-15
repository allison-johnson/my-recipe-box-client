*QUESTIONS*
[] How to eliminate the need for an "extra" form in order to logout?
[] Before a recipe gets deleted from DB, I delete all of its associated notes (from the DB). Do I have to do anything on the front end to reflect this change?

*TODO*
[] Activate links!

[] Handle errors with login/signup (on front end as well, like Melia's)

[] Should filtering of recipes by user happen on back end or front end?
    - Right now it's on the front end, which seems like a good choice because only one fetch request to the API is required to load all of the recipes when the app is first loaded, as opposed to making a fetch request each time a new filter is desired

[] Database changes
    [x] recipe belongs_to :user
    [x] only load recipes for current user
    [] option of seeing (but not deleting) other users' recipes (and notes?)
        [] 'users' dropdown menu on navbar
        [] no 'manage recipes' option on navbar if you're viewing someone else's recipes
            [] or, 'manage recipes' always liks to your own recipes

[] Spruce up app-info class in recipesContainer
    [] Information about what you can do with the app
    [] Instructions for using recipe box (including screen shots or a short video?)

*CLEAN UP CODE*
[] Presentational/container/stateless components?
[] Rewrite stateless components as functional components

*STRETCH GOALS*
[] Can add another user's recipes to your own recipe box
[] Drag and drop into weekly menu!
[] Add confirmation before deleting recipe (react-confirm-alert)

