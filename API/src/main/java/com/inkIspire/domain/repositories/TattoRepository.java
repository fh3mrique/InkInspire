package com.inkIspire.domain.repositories;

import com.inkIspire.domain.entities.Style;
import com.inkIspire.domain.entities.Tattoo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TattoRepository extends JpaRepository<Tattoo, Long> {
    /*@Query("SELECT DISTINCT obj FROM Tattoo obj WHERE " +
            "(:style IS NULL OR obj.style = :style) AND " +
            "(LOWER(obj.name) LIKE LOWER(CONCAT('%', :name, '%')))")
    Page<Tattoo> find(@Param("name") String name, @Param("style") Style style, Pageable pageable);*/

    @Query("SELECT DISTINCT obj FROM Tattoo obj WHERE " +
            "(:styleId IS NULL OR obj.style.id = :styleId) AND " +
            "(LOWER(obj.name) LIKE LOWER(CONCAT('%', :name, '%')))")
    Page<Tattoo> find(@Param("name") String name, @Param("styleId") Long styleId, Pageable pageable);
}
