package ForMe.Core.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Recipe {
    @Id
    private String id;

    @Column
    private String name;

    @Column
    private String ingredients;

    @Column
    private String steps;

    public Recipe(String id, String name, String ingredients, String steps) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.steps = steps;
    }

}
