package com.inkIspire.domain.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "tb_tattoo")
public class Tattoo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne
    @JoinColumn(name = "style_id")
    private Style style;
    private BigDecimal price;

    @Column(name = "art_url")
    private String artUrl;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

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
