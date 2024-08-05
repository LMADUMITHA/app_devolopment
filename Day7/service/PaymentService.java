package com.event.backend.service;

import com.event.backend.model.Payment;
import com.event.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    // Retrieve all payments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // Retrieve a payment by ID
    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    // Create a new payment
    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    // Update an existing payment
    public Payment updatePayment(Long id, Payment payment) {
        if (paymentRepository.existsById(id)) {
            payment.setId(id);
            return paymentRepository.save(payment);
        }
        return null;
    }

    // Delete a payment by ID
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}
