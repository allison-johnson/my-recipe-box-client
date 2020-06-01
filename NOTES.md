*TODO*
[] Host app!!!

[] Work on searching 
    [x] Include route for searching
    [] Make search more functional (i.e., if 'lemon cake' is typed in)
    [] Add search button to navbar that links to '/search' path

[] Alphabetize recipes on home page (and within filtered categories as well)

[] Maybe manage-recipes path should be a child of recipes path? That way, only recipesContainer would have to grab recipes from the Redux store?

*ANNOYING THINGS*
[] How to eliminate the need for an "extra" form in order to logout?

[] How to get rid of warnings which stem from rendering lists from within bootstrap card components?

*STRETCH GOALS*
[] Can add another user's recipes to your own recipe box
    - In recipeCard.js, instead of 'null' option (when add note button is not rendered), include an option for adding recipe to your box!
    - In DB, uniqueness validation should be combination of user_id and url (rather than just requiring the url be unique)
    - Or, create a users_recipes join table!

[] Drag and drop into weekly menu!

[] Add confirmation before deleting recipe (react-confirm-alert)

