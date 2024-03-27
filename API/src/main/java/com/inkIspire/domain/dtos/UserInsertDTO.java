package com.inkIspire.domain.dtos;

import com.inkIspire.domain.entities.User;

public class UserInsertDTO extends UserDTO {

    private String password;
    public UserInsertDTO(Long id, String email) {
        super(id, email);
    }

    public UserInsertDTO(User entity) {
        super(entity);
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
