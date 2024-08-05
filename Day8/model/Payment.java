// package com.event.backend.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class Payment {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String companyName;
//     private Double eventAmount;
//     private String creditCardNumber;
//     private String expirationDate;
//     private String cvv;
//     private String billingAddress;

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getCompanyName() {
//         return companyName;
//     }

//     public void setCompanyName(String companyName) {
//         this.companyName = companyName;
//     }

//     public Double getEventAmount() {
//         return eventAmount;
//     }

//     public void setEventAmount(Double eventAmount) {
//         this.eventAmount = eventAmount;
//     }

//     public String getCreditCardNumber() {
//         return creditCardNumber;
//     }

//     public void setCreditCardNumber(String creditCardNumber) {
//         this.creditCardNumber = creditCardNumber;
//     }

//     public String getExpirationDate() {
//         return expirationDate;
//     }

//     public void setExpirationDate(String expirationDate) {
//         this.expirationDate = expirationDate;
//     }

//     public String getCvv() {
//         return cvv;
//     }

//     public void setCvv(String cvv) {
//         this.cvv = cvv;
//     }

//     public String getBillingAddress() {
//         return billingAddress;
//     }

//     public void setBillingAddress(String billingAddress) {
//         this.billingAddress = billingAddress;
//     }
// }






package com.event.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String companyName;
    private Double eventAmount;
    private String creditCardNumber;
    private String expirationDate;
    private String cvv;
    private String billingAddress;

    @OneToOne
    @JoinColumn(name = "booking_id")
    @JsonIgnore
    private Booking booking;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Double getEventAmount() {
        return eventAmount;
    }

    public void setEventAmount(Double eventAmount) {
        this.eventAmount = eventAmount;
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
