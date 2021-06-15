package dev.ikoinaris.carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.ikoinaris.carrental.entity.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>{
    
}
