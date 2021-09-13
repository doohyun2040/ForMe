package ForMe.Core.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class User {

    @Id
    private String email;

    @Column
    private String password;

    @Column
    private String preference;

    @Column
    private String ingredient;

    @Column
    private String usetime;

    @Column
    private String difficulty;

    @Column
    private String country;

    @Column
    private String spicy;

    public User() {

    }

    public User(String email, String password, String preference, String ingredient, String usetime, String difficulty, String country, String spicy) {
        this.email = email;
        this.password = password;
        this.preference = preference;
        this.ingredient = ingredient;
        this.usetime = usetime;
        this.difficulty = difficulty;
        this.country = country;
        this.spicy = spicy;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPreference() {
        return preference;
    }

    public void setPreference(String preference) {
        this.preference = preference;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    public String getUsetime() {
        return usetime;
    }

    public void setUsetime(String usetime) {
        this.usetime = usetime;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getSpicy() {
        return spicy;
    }

    public void setSpicy(String spicy) {
        this.spicy = spicy;
    }
}
