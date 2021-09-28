package ForMe.Core.repository;

import ForMe.Core.domain.Recipe;
import ForMe.Core.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, String> {
}
