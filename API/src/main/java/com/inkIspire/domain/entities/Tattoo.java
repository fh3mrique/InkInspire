package com.inkIspire.domain.entities;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "tb_tattoo")
public class Tattoo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne
    @JoinColumn(name = "style_id")
    private Style style;
    @NotNull
    private BigDecimal price;

    @Column(name = "art_url")
    private String artUrl;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;


    @OneToMany(mappedBy = "tattoo", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Interest> interests = new HashSet<>();

    public Tattoo() {

    }

    public Tattoo(Long id, String name, String description, Style style, BigDecimal price, String artUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.style = style;
        this.price = price;
        this.artUrl = artUrl;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getArtUrl() {
        return artUrl;
    }

    public void setArtUrl(String artUrl) {
        this.artUrl = artUrl;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Set<Interest> getInterests() {
        return interests;
    }

    public void setInterests(Set<Interest> interests) {
        this.interests = interests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tattoo tatoo = (Tattoo) o;
        return Objects.equals(id, tatoo.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
