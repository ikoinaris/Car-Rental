package dev.ikoinaris.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Rental;
import dev.ikoinaris.carrental.repository.RentalRepository;

@RestController
public class RentalController {

    @Autowired
    private RentalRepository rentalRepository;

    @GetMapping("/rentals")
    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }

    @PostMapping("/rentals")
    public Rental saveRental(Rental rental) {
        return rentalRepository.save(rental);
    }
    
}
