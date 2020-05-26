*TODO*
[] Instructions for using recipe box (including screen shots or a short video?) in welcome component

[] Add README's!!!

[] Fix filenames to match component names

[] Work on searching 
    [] Include route for searching

[] Alphabetize recipes on home page (and within filtered categories as well)

[] Maybe manage-recipes path should be a child of recipes path? That way, only recipesContainer would have to grab recipes from the Redux store?

*ANNOYING THINGS*
[] How to eliminate the need for an "extra" form in order to logout?

[] How to get rid of warnings which stem from rendering lists from within bootstrap card components?

*CLEAN UP CODE*
[] Presentational/container/stateless components?
[] Rewrite stateless components as functional components

*STRETCH GOALS*
[] Can add another user's recipes to your own recipe box
    - In recipeCard.js, instead of 'null' option (when add note button is not rendered), include an option for adding recipe to your box!
    - In DB, uniqueness validation should be combination of user_id and url (rather than just requiring the url be unique)
    - Or, create a users_recipes join table!

[] Drag and drop into weekly menu!

[] Add confirmation before deleting recipe (react-confirm-alert)

