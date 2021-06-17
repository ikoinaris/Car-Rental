package dev.ikoinaris.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Vehicle;
import dev.ikoinaris.carrental.repository.VehicleRepository;

@RestController
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }
    
}
