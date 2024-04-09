package batch.backend.json.batch.Services;

import batch.backend.json.batch.Model.User;
import batch.backend.json.batch.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> saveMultipleUsers(List<User> users) {
        List<User> res = userRepository.saveAll(users);
        return res;

    }

    @Override
    public List<User> getUsersByIds(List<Long> userIds) {
        List<User> res = userRepository.findAllById(userIds);
        return res;
    }
}
