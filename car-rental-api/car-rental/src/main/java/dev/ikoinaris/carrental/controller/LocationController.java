package dev.ikoinaris.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Location;
import dev.ikoinaris.carrental.repository.LocationRepository;

@RestController
@RequestMapping("/car-rental")
@CrossOrigin(origins = "http://localhost:4200")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    @GetMapping("/locations")
    public List<Location> getLocations() {
        return locationRepository.findAll();
    }

    @PostMapping("/locations")
    public Location saveLocation(@PathVariable Location location) {
        return locationRepository.save(location);
    }
    
}
