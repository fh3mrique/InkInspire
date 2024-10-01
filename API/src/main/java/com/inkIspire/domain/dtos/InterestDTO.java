package com.inkIspire.domain.dtos;

public class InterestDTO {

    private Long id;
    private String name;
    private String contact;
    private String message;
    private Long tattooId;

    public InterestDTO() {}

    public InterestDTO(Long id, String name, String contact, String message, Long tattooId) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.message = message;
        this.tattooId = tattooId;
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

    public Long getTattooId() {
        return tattooId;
    }

    public void setTattooId(Long tattooId) {
        this.tattooId = tattooId;
    }
}