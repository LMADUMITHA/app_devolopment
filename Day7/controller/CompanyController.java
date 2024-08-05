package com.event.backend.controller;

import com.event.backend.model.Company;
import com.event.backend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/{id}")
    public Company getCompanyById(@PathVariable Long id) {
        return companyService.getCompanyById(id);
    }

    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }

    @PutMapping("/{id}")
    public Company updateCompany(@PathVariable Long id, @RequestBody Company company) {
        Company existingCompany = companyService.getCompanyById(id);
        if (existingCompany != null) {
            existingCompany.setName(company.getName());
            existingCompany.setDescription(company.getDescription());
            existingCompany.setImage(company.getImage());
            existingCompany.setPrice(company.getPrice());
            existingCompany.setRating(company.getRating());
            return companyService.saveCompany(existingCompany);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable Long id) {
        companyService.deleteCompany(id);
    }
}

