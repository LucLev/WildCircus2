package com.wildcircus.back.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String profilepicture;
    private String introduction;
    private Boolean isArtist;
    private String email;
    private String role;
    private String linkedin;
    private String facebook;
    private String twitter;
    private String instagram;

    @JsonBackReference(value = "user-event")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "user")
    private List<Event> events = new ArrayList<>();

    public List<Event> getEvents() {
        return events;
    }

    public void addEvents(Event event) {
        this.events.add(event);
        event.setUser(this);
    }

    /*
     * @JsonBackReference(value="user-role")
     * 
     * @ManyToOne(fetch = FetchType.LAZY)
     * 
     * @JoinColumn(name = "role_id") private Role role;
     * 
     * public Role getRole() { return role; }
     * 
     * public void setRole(Role role) { this.role = role; }
     */

    public User() {
    }

    public User(Long id, String username, String password, String profilepicture, String introduction, Boolean isArtist,
            String email, String role, String linkedin, String facebook, String twitter, String instagram,
            List<Event> events) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.profilepicture = profilepicture;
        this.introduction = introduction;
        this.isArtist = isArtist;
        this.email = email;
        this.role = role;
        this.linkedin = linkedin;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
        this.events = events;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfilepicture() {
        return this.profilepicture;
    }

    public void setProfilepicture(String profilepicture) {
        this.profilepicture = profilepicture;
    }

    public String getIntroduction() {
        return this.introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Boolean isIsArtist() {
        return this.isArtist;
    }

    public Boolean getIsArtist() {
        return this.isArtist;
    }

    public void setIsArtist(Boolean isArtist) {
        this.isArtist = isArtist;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getLinkedin() {
        return this.linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getFacebook() {
        return this.facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getTwitter() {
        return this.twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getInstagram() {
        return this.instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

}
