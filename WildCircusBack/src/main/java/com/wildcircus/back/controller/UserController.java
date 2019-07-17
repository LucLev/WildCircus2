package com.wildcircus.back.controller;

import com.wildcircus.back.entities.User;
import com.wildcircus.back.entities.UserDTO;
import com.wildcircus.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Show all Users
    @GetMapping("/user/all")
    public List<User> index() {
        return userRepository.findAll();
    }

    // Add one user
    @PostMapping("/user")
    public User create(@RequestBody UserDTO p_user) throws Exception {
        User current = new User();
        current.setEmail(p_user.getEmail());
        current.setUsername(p_user.getUsername());
        current.setPassword(p_user.getPassword());
        current.setProfilepicture(p_user.getProfilepicture());
        current.setIntroduction(p_user.getIntroduction());
        current.setIsArtist(p_user.getIsArtist());

        return userRepository.save(current);
    }

    // Search user
    @GetMapping("/user")
    public List<User> search(@RequestParam(name = "searchInLogin", required = false, defaultValue = "") String inLogin,
            @RequestParam(name = "searchInEmail", required = false, defaultValue = "") String inEmail) {
        return userRepository.findByUsernameContainingAndEmail(inLogin, inEmail);
    }

    // Delete one user
    @DeleteMapping("user/{id}")
    public boolean delete(@PathVariable long id) {
        userRepository.deleteById(id);
        return true;
    }

    // Update one user
    @PutMapping("/user/{id}")
    public User update(@PathVariable long id, @RequestBody User user) {
        // Get the user
        User userToUpdate = userRepository.findById(id).get();
        if (user.getUsername() != null) {
            userToUpdate.setUsername(user.getUsername());
        }
        if (user.getPassword() != null) {
            userToUpdate.setPassword(user.getPassword());
        }
        if (user.getEmail() != null) {
            userToUpdate.setEmail(user.getEmail());
        }
        return userRepository.save(userToUpdate);
    }
}
