*QUESTIONS*
[] How to eliminate the need for an "extra" form in order to logout?

[] How to get rid of warnings which stem from rendering lists from within bootstrap card components?

[] Nested routing for viewing another user's recipes:
    [] Should not be happening at the level of App, but that's the only place the Route seems to catch!
    [] *Problem with that is that someone can access another user's recipes by typing in the URL directly, even if they're not logged in* --> this is why routes should be nested in RecipesContainer, which checks whether the user is logged in!
    [] Should I be able to delete all references of the "selectedUser" from the Redux store now?

[] Same for categories ... it shouldn't be a top level route!
    [] It should actually be even FURTHER nested under RecipeCards, because ideally: /recipes/users/2/categories/1
    

*TODO*
[] Add README's!!!

[] Clean up Redux store (viewingRecipesOf/changeViewingRecipesOf/selectedUser)

[] Alphabetize recipes on home page (and within filtered categories as well)

[] Work on searching

[] Fix logout button 

[x] Get rid of all warnings!
    [] Ask about warning stemming from NavBar...

[] Spruce up app-info class in recipesContainer
    [x] Information about what you can do with the app
    [] Instructions for using recipe box (including screen shots or a short video?)

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

