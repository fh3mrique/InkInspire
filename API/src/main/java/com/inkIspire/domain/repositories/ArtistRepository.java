package com.inkIspire.domain.repositories;

import com.inkIspire.domain.entities.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
