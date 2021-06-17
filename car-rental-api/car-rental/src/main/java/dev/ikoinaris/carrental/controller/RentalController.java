package dev.ikoinaris.carrental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Rental;
import dev.ikoinaris.carrental.repository.RentalRepository;

@RestController
public class RentalController {

    @Autowired
    private RentalRepository rentalRepository;

    @PostMapping("/rentals")
    public Rental saveRental(Rental rental) {
        return rentalRepository.save(rental);
    }
    
}
