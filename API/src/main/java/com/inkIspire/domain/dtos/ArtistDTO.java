package com.inkIspire.domain.dtos;

import com.inkIspire.domain.entities.Artist;
import com.inkIspire.domain.entities.Tattoo;

import java.util.HashSet;
import java.util.Set;

public class ArtistDTO {
    private Long id;
    private String name;
    private String perfil;
    private String contact;
    private String email;

    private Set<TattooDTO> tattoos = new HashSet<>();

    public ArtistDTO(){

    }

    public ArtistDTO(Artist entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.perfil = entity.getPerfil();
        this.contact = entity.getContact();
        this.email = entity.getEmail();
    }

    //Construtor que adiciona varias categorias ao produto
    public ArtistDTO (Artist entity, Set<Tattoo> portifolio) {
        this(entity);
        portifolio.forEach(tattoo -> this.tattoos.add(new TattooDTO(tattoo)));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<TattooDTO> getTattoos() {
        return tattoos;
    }

    public void setTattoos(Set<TattooDTO> tattoos) {
        this.tattoos = tattoos;
    }
}
