package com.inkIspire.domain.repositories;

import com.inkIspire.domain.entities.Tattoo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TattoRepository extends JpaRepository<Tattoo, Long> {
}
