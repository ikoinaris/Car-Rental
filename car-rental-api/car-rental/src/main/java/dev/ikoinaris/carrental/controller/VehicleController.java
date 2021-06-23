package dev.ikoinaris.carrental.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Vehicle;
import dev.ikoinaris.carrental.repository.VehicleRepository;
import dev.ikoinaris.carrental.service.VehicleService;

@RestController
@RequestMapping("/car-rental")
@CrossOrigin(origins = "http://localhost:4200")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    @GetMapping("/available-cars")
    public List<Vehicle> getAvailableVehicles(@RequestBody String type, 
                                            @RequestBody String gear, 
                                            @RequestBody Date pickUpDate, 
                                            @RequestBody Date checkOutDate) {
        return vehicleService.getAvailableVehicles(type, gear, pickUpDate, checkOutDate);
    }

    @PostMapping("/vehicles")
    public Vehicle saveVehicle(@PathVariable Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }
    
}
