package com.inkIspire.domain.repositories;

import com.inkIspire.domain.entities.Artist;
import com.inkIspire.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
