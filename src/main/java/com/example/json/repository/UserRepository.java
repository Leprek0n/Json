package com.example.json.repository;

import com.example.json.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select user from User user join fetch user.roles where user.name= :name")
    User getUserByName(@Param("name")String name);
    @Query("select distinct u from User u join fetch u.roles")
    List<User> getAllUsers();
}
