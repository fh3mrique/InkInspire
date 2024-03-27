package com.inkIspire.domain.repositories;

import com.inkIspire.domain.entities.Artist;
import com.inkIspire.domain.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
