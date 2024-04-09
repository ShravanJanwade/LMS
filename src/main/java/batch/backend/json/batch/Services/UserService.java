package batch.backend.json.batch.Services;

import batch.backend.json.batch.Model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(Long id);

    User saveUser(User user);

    void deleteUser(Long id);

    List<User> saveMultipleUsers(List<User> users);

    List<User> getUsersByIds(List<Long> userIds);
}
