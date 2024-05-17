package com.inkIspire.domain.repositories;

import com.inkIspire.domain.entities.Style;
import com.inkIspire.domain.entities.Tattoo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StyleRepository extends JpaRepository<Style, Long> {

}
