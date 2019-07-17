package com.wildcircus.back.repositories;

import com.wildcircus.back.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUsernameContainingAndEmail(String inUsername, String inEmail);
    User findByUsername(String username);


}

