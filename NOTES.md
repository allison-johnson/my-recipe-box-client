*QUESTIONS*
[] How to eliminate the need for an "extra" form in order to logout?

[] How to get rid of warnings which stem from rendering lists from within bootstrap card components?

[] Should filtering of recipes by user happen on back end or front end?
    - Right now it's on the front end, which seems like a good choice because only one fetch request to the API is required to load all of the recipes when the app is first loaded, as opposed to making a fetch request each time a new filter is desired

*TODO*
[] Remove uniqueness from recipe_url validation?

[] Replace user id with user email in header (or, add first name to user?)

[] Handle errors with login/signup (on front end as well, like Melia's)

[] Get rid of all warnings!

[] Spruce up app-info class in recipesContainer
    [] Information about what you can do with the app
    [] Instructions for using recipe box (including screen shots or a short video?)

*CLEAN UP CODE*
[] Presentational/container/stateless components?
[] Rewrite stateless components as functional components

*STRETCH GOALS*
[] Can add another user's recipes to your own recipe box
    - In recipeCard.js, instead of 'null' option (when add note button is not rendered), include an option for adding recipe to your box!
[] Drag and drop into weekly menu!
[] Add confirmation before deleting recipe (react-confirm-alert)

