package com.inkIspire.domain.entities;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "tb_interest")
public class Interest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String contact;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    private String message;

    @ManyToOne
    @JoinColumn(name = "tattoo_id", nullable = false)
    private Tattoo tattoo;

    @OneToMany(mappedBy = "tattoo", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Interest> interests = new HashSet<>();



    public Interest() {}

    public Interest(Long id, String name, String contact, String message, Tattoo tattoo) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.message = message;
        this.tattoo = tattoo;
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

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Tattoo getTattoo() {
        return tattoo;
    }

    public void setTattoo(Tattoo tattoo) {
        this.tattoo = tattoo;
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
        Interest interest = (Interest) o;
        return Objects.equals(id, interest.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
