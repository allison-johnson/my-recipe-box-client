*TODO*
[] How to eliminate the need for an "extra" form in order to logout?

[] How to get rid of warnings which stem from rendering lists from within bootstrap card components?

[] Set different default routes for logged in and logged out (i.e., welcomeLoggedOut and welcomeLoggedIn)

[] Too many props getting passed down from App? Clean that up ... props should only get passed down 1-2 levels!
    - Maybe App doesn't even need to get recipes from the store since RecipesContainer is only using allRecipes, which it grabbed from the store itself?

[] Combine '/' and '/recipes' into one path in App, since they do the same thing? (i.e., path='/')
    
[] Add README's!!!

[] Clean up Redux store (viewingRecipesOf/changeViewingRecipesOf/selectedUser)

[] Alphabetize recipes on home page (and within filtered categories as well)

[] Work on searching (and maybe sorting?)

[] Fix logout button 

[] Spruce up app-info class in recipesContainer
    [x] Information about what you can do with the app
    [] Instructions for using recipe box (including screen shots or a short video?)

[] Fix filenames to match component names

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

