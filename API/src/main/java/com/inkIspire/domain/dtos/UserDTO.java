package com.inkIspire.domain.dtos;

import com.inkIspire.domain.entities.User;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UserDTO implements Serializable {
    private Long id;
    private String email;
    private Set<RoleDTO> roles = new HashSet<>();

    public UserDTO(Long id, String email) {
        this.id = id;
        this.email = email;
    }
    public UserDTO(User entity) {
        this.id = entity.getId();
        this.email = entity.getEmail();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<RoleDTO> getRoles() {
        return roles;
    }
}
