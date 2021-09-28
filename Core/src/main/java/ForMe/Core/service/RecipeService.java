package ForMe.Core.service;

import ForMe.Core.domain.Recipe;
import ForMe.Core.domain.User;
import ForMe.Core.repository.RecipeRepository;
import ForMe.Core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> findAllRecipe() {
        return recipeRepository.findAll();
    }

    public List<Recipe> findRecipeByPreference(String preferences) {
        String[] preference = preferences.split(",");
        List<Recipe> recipes = findAllRecipe();
        List<Recipe> returnRecipes = new ArrayList<Recipe>();

        for (Recipe recipe : recipes) {
            for (String s : preference) {
                if(recipe.getIngredients().contains(s) && !returnRecipes.contains(recipe)) {
                    returnRecipes.add(recipe);
                }
            }
        }
        return returnRecipes;
    }

    public String findRecipeName(String id) {
        List<Recipe> recipeList = findAllRecipe();

        for (Recipe recipe : recipeList) {
            if(recipe.getId().equals(id)) {
                return recipe.getName();
            }
        }

        return null;
    }

}
