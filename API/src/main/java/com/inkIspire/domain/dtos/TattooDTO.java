package com.inkIspire.domain.dtos;

import com.inkIspire.domain.entities.Artist;
import com.inkIspire.domain.entities.Interest;
import com.inkIspire.domain.entities.Style;
import com.inkIspire.domain.entities.Tattoo;

import java.math.BigDecimal;
import java.util.Set;

public record TattooDTO(Long id, String name, String description, Style style, BigDecimal price, String artUrl, Artist artist, Set<Interest> interests) {

    public TattooDTO(Tattoo entity){
        this(entity.getId(), entity.getName(), entity.getDescription(), entity.getStyle(), entity.getPrice(), entity.getArtUrl(), entity.getArtist(), entity.getInterests());
    }
}
