package ForMe.Core.service;

import ForMe.Core.domain.User;
import ForMe.Core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User createUserInstance(Map<String,String> body) {
        String email = body.get("email");
        String pw = body.get("password");
        String preference = body.get("preference");
        String ingredient = body.get("ingredient");
        String usetime = body.get("usetime");
        String difficulty = body.get("difficulty");
        String country = body.get("country");
        String spicy = body.get("spicy");

        return new User(email,pw,preference,ingredient,usetime,difficulty,country,spicy);
    }

    public User signUp(User user) {
        if(findUser(user.getEmail() ).isEmpty()) {
            System.out.println("user doesnt exist. signing up");
            userRepository.save(user);
            return user;
        } else {
            return null;
        }
    }

    public Optional<User> findUser(String email) {
        return userRepository.findById(email);
    }

    public User googleSignUp(String email) {
        return null;
    }

    public User googleLogin(Map<String,String> body) {



        return null;
    }

    public User login(String email, String pw) {
        Optional<User> user = userRepository.findById(email);
        if(user.isPresent() && user.get().getPassword().equals(pw)) {
            return user.get();
        } else return null;
    }
}
