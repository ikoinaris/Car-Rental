package dev.ikoinaris.carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.ikoinaris.carrental.entity.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long>{
    
}
