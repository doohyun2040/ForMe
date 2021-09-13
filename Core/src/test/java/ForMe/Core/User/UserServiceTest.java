package ForMe.Core.User;

import ForMe.Core.AppConfig;
import ForMe.Core.domain.User;
import ForMe.Core.service.UserService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;

public class UserServiceTest {

    @Test
    @DisplayName("회원가입 테스트")
    void UserServiceTest() {
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

        UserService userService = ac.getBean(UserService.class);
        ArrayList<String> preference = new ArrayList<String>(Arrays.asList("test","test2"));
        ArrayList<String> ingredient = new ArrayList<String>(Arrays.asList("pork","beef"));
        ArrayList<Integer> usetime = new ArrayList<Integer>(Arrays.asList(1,3));
        ArrayList<Integer> difficulty = new ArrayList<Integer>(Arrays.asList(1,2));
        ArrayList<Integer> country = new ArrayList<Integer>(Arrays.asList(1,0,1,0,0));
        ArrayList<Integer> spicy = new ArrayList<Integer>(Arrays.asList(1,5));

        User user = new User("test1", "1234", preference, ingredient, usetime, difficulty, country, spicy);

        User result = userService.signUp(user);

        Assertions.assertThat(result).isEqualTo(user);
    }
}
