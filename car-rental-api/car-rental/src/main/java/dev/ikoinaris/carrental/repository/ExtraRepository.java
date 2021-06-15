package dev.ikoinaris.carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.ikoinaris.carrental.entity.Extra;

@Repository
public interface ExtraRepository extends JpaRepository<Extra, Long>{
    
}
