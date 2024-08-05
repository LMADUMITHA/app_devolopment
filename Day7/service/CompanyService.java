// package com.event.backend.service;

// import com.event.backend.model.Company;
// import com.event.backend.repository.CompanyRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class CompanyService {

//     @Autowired
//     private CompanyRepository companyRepository;

//     public List<Company> getAllCompanies() {
//         return companyRepository.findAll();
//     }

//     public Company getCompanyById(Long id) {
//         return companyRepository.findById(id).orElse(null);
//     }

//     public Company saveCompany(Company company) {
//         return companyRepository.save(company);
//     }

//     public void deleteCompany(Long id) {
//         companyRepository.deleteById(id);
//     }
// }


package com.event.backend.service;

import com.event.backend.model.Company;
import com.event.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(Long id) {
        return companyRepository.findById(id).orElse(null);
    }

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
