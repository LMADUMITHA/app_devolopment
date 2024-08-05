// package com.event.backend.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class User {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;
//     private String username;
//     private String email;
//     private String password;

//     // Default constructor
//     public User() {
//     }

//     // Parameterized constructor
//     public User(String username, String email, String password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getUsername() {
//         return username;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }
// }





// package com.event.backend.model;

// import jakarta.persistence.*;
// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonIgnore;

// @Entity
// public class User {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;
//     private String username;
//     private String email;
//     private String password;

//     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//     @JsonIgnore
//     private List<Booking> bookings;

//     // Default constructor
//     public User() {
//     }

//     // Parameterized constructor
//     public User(String username, String email, String password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getUsername() {
//         return username;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public List<Booking> getBookings() {
//         return bookings;
//     }

//     public void setBookings(List<Booking> bookings) {
//         this.bookings = bookings;
//     }
// }





// package com.event.backend.model;

// import jakarta.persistence.*;
// import java.util.List;
// import com.fasterxml.jackson.annotation.JsonManagedReference;

// @Entity
// public class User {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;
//     private String username;
//     private String email;
//     private String password;

//     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//     @JsonManagedReference
//     private List<Booking> bookings;

//     // Default constructor
//     public User() {
//     }

//     // Parameterized constructor
//     public User(String username, String email, String password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getUsername() {
//         return username;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public List<Booking> getBookings() {
//         return bookings;
//     }

//     public void setBookings(List<Booking> bookings) {
//         this.bookings = bookings;
//     }
// }



package com.event.backend.model;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String email;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Booking> bookings;


    // Default constructor, parameterized constructor, getters and setters
    public User() {}

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
