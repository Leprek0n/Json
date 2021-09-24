package com.example.json.service;

import com.example.json.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User getUserByName(String name);
    void save(User user);
}
