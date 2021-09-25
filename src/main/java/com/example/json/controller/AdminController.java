package com.example.json.controller;

import com.example.json.model.User;
import com.example.json.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value="/api/admin", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdminController {
    private final UserService userService;

    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> users() {
        List<User> userList = userService.getAllUsers();
        return userList != null && !userList.isEmpty()
                ?ResponseEntity.ok(userList)
                :ResponseEntity.notFound().build();
    }

    @GetMapping("/userInfo")
    public ResponseEntity<User> principal(Principal principal) {
        return ResponseEntity.ok(userService.getUserByName(principal.getName()));
    }
    @PatchMapping(value="/{id}/{name}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateUserById(@PathVariable Long id, @PathVariable String name, @RequestBody User user ) {
        userService.save(user);
        return ResponseEntity.ok().build();
    }
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }


}
