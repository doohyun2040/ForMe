package ForMe.Core.controller;

import ForMe.Core.domain.User;
import ForMe.Core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

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
    public User login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String pw = body.get("password");

        User user = userService.login(email, pw);
        return user;
    }

//    @PostMapping("/googlelogin")
//    public String googleLogin(@RequestBody Map<String, String> body) {
//        String redirectUrl = userService.googleLogin(body);
//        return "redirect:"+redirectUrl;
//    }

}
