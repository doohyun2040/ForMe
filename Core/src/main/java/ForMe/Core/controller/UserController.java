package ForMe.Core.controller;

import ForMe.Core.domain.Recipe;
import ForMe.Core.domain.User;
import ForMe.Core.service.RecipeService;
import ForMe.Core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:19006")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RecipeService recipeService;

    @PostMapping("/signup")
    public User signUp(@RequestBody Map<String, String> body) {
        User user = userService.createUserInstance(body);

        System.out.println(user);
        User result = userService.signUp(user);
        if(result==null){
            return null;
        } else return result;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body, HttpServletRequest request) {
        String email = body.get("email");
        String pw = body.get("password");

        User user = userService.login(email, pw);
        List<Recipe> recipeList = recipeService.findAllRecipe();

        Map<String, Object> returnMap = new HashMap<>();

        returnMap.put("user", user);
        returnMap.put("recipe", recipeList);
//        HttpSession session = request.getSession();
//        session.setAttribute("email", user.getEmail());
//        session.setAttribute("preference", user.getPreference());
//
////        rttr.addFlashAttribute();

        return returnMap;
    }

//    @PostMapping("/googlelogin")
//    public String googleLogin(@RequestBody Map<String, String> body) {
//        String redirectUrl = userService.googleLogin(body);
//        return "redirect:"+redirectUrl;
//    }

}
