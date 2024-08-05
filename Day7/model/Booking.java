// package com.event.backend.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import java.time.LocalDate;

// @Entity
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;
//     private String name;
//     private String address;
//     private String phone;
//     private String eventType;
//     private LocalDate eventDate;

//     // Default constructor
//     public Booking() {
//     }

//     // Parameterized constructor
//     public Booking(String name, String address, String phone, String eventType, LocalDate eventDate) {
//         this.name = name;
//         this.address = address;
//         this.phone = phone;
//         this.eventType = eventType;
//         this.eventDate = eventDate;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getAddress() {
//         return address;
//     }

//     public void setAddress(String address) {
//         this.address = address;
//     }

//     public String getPhone() {
//         return phone;
//     }

//     public void setPhone(String phone) {
//         this.phone = phone;
//     }

//     public String getEventType() {
//         return eventType;
//     }

//     public void setEventType(String eventType) {
//         this.eventType = eventType;
//     }

//     public LocalDate getEventDate() {
//         return eventDate;
//     }

//     public void setEventDate(LocalDate eventDate) {
//         this.eventDate = eventDate;
//     }
// }



// package com.event.backend.model;

// import jakarta.persistence.*;
// import java.time.LocalDate;

// import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonIgnore;

// @Entity
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;
//     private String name;
//     private String address;
//     private String phone;
//     private String eventType;
//     private LocalDate eventDate;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     @JsonIgnore
//     private User user;

//     @ManyToOne
//     @JoinColumn(name = "company_id")
//     @JsonIgnore
//     private Company company;

//     @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
//     @JsonIgnore
//     private Payment payment;

//     // Default constructor
//     public Booking() {
//     }

//     // Parameterized constructor
//     public Booking(String name, String address, String phone, String eventType, LocalDate eventDate, User user, Company company) {
//         this.name = name;
//         this.address = address;
//         this.phone = phone;
//         this.eventType = eventType;
//         this.eventDate = eventDate;
//         this.user = user;
//         this.company = company;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getAddress() {
//         return address;
//     }

//     public void setAddress(String address) {
//         this.address = address;
//     }

//     public String getPhone() {
//         return phone;
//     }

//     public void setPhone(String phone) {
//         this.phone = phone;
//     }

//     public String getEventType() {
//         return eventType;
//     }

//     public void setEventType(String eventType) {
//         this.eventType = eventType;
//     }

//     public LocalDate getEventDate() {
//         return eventDate;
//     }

//     public void setEventDate(LocalDate eventDate) {
//         this.eventDate = eventDate;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }

//     public Company getCompany() {
//         return company;
//     }

//     public void setCompany(Company company) {
//         this.company = company;
//     }

//     public Payment getPayment() {
//         return payment;
//     }

//     public void setPayment(Payment payment) {
//         this.payment = payment;
//     }
// }



// package com.event.backend.model;

// import jakarta.persistence.*;
// import java.time.LocalDate;
// import com.fasterxml.jackson.annotation.JsonBackReference;

// @Entity
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;
//     private String name;
//     private String address;
//     private String phone;
//     private String eventType;
//     private LocalDate eventDate;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     @JsonBackReference
//     private User user;

//     // Default constructor
//     public Booking() {
//     }

//     // Parameterized constructor
//     public Booking(String name, String address, String phone, String eventType, LocalDate eventDate, User user) {
//         this.name = name;
//         this.address = address;
//         this.phone = phone;
//         this.eventType = eventType;
//         this.eventDate = eventDate;
//         this.user = user;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getAddress() {
//         return address;
//     }

//     public void setAddress(String address) {
//         this.address = address;
//     }

//     public String getPhone() {
//         return phone;
//     }

//     public void setPhone(String phone) {
//         this.phone = phone;
//     }

//     public String getEventType() {
//         return eventType;
//     }

//     public void setEventType(String eventType) {
//         this.eventType = eventType;
//     }

//     public LocalDate getEventDate() {
//         return eventDate;
//     }

//     public void setEventDate(LocalDate eventDate) {
//         this.eventDate = eventDate;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }
// }


// package com.event.backend.model;

// import jakarta.persistence.*;
// import java.time.LocalDate;

// @Entity
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     private String name;
//     private String address;
//     private String phone;
//     private String eventType;
//     private LocalDate eventDate;

//     @ManyToOne
//     @JoinColumn(name = "company_id")
//     private Company company;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     // Default constructor
//     public Booking() {}

//     // Parameterized constructor
//     public Booking(String name, String address, String phone, String eventType, LocalDate eventDate, User user) {
//         this.name = name;
//         this.address = address;
//         this.phone = phone;
//         this.eventType = eventType;
//         this.eventDate = eventDate;
//         this.user = user;
//     }

//     // Getters and Setters
//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getAddress() {
//         return address;
//     }

//     public void setAddress(String address) {
//         this.address = address;
//     }

//     public String getPhone() {
//         return phone;
//     }

//     public void setPhone(String phone) {
//         this.phone = phone;
//     }

//     public String getEventType() {
//         return eventType;
//     }

//     public void setEventType(String eventType) {
//         this.eventType = eventType;
//     }

//     public LocalDate getEventDate() {
//         return eventDate;
//     }

//     public void setEventDate(LocalDate eventDate) {
//         this.eventDate = eventDate;
//     }

//     public Company getCompany() {
//         return company;
//     }

//     public void setCompany(Company company) {
//         this.company = company;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }
// }



package com.event.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String address;
    private String phone;
    private String eventType;
    private LocalDate eventDate;

    @ManyToOne
    @JoinColumn(name = "company_id")
    @JsonManagedReference
    private Company company;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;

    // Default constructor
    public Booking() {}

    // Parameterized constructor
    public Booking(String name, String address, String phone, String eventType, LocalDate eventDate, Company company) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.eventType = eventType;
        this.eventDate = eventDate;
        this.company = company;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
