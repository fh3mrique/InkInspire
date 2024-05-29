package com.inkIspire.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_artist")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String name;

    @NotNull
    private String photo;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    private String perfil;
    @NotBlank
    private String contact;

    @Email
    @NotNull
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "artist")
    private Set<Tattoo> tattoos = new HashSet<>();

    public Artist() {

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

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
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

    public Set<Tattoo> getTattoos() {
        return tattoos;
    }

    public void setTattoos(Set<Tattoo> tattoos) {
        this.tattoos = tattoos;
    }
}
