package dev.ikoinaris.carrental.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.ikoinaris.carrental.entity.Rental;
import dev.ikoinaris.carrental.entity.Vehicle;
import dev.ikoinaris.carrental.repository.RentalRepository;
import dev.ikoinaris.carrental.repository.VehicleRepository;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private RentalRepository rentalRepository;

    private List<Vehicle> findVehicleFromTypeAndGear(String type, String gear) {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicleRepository.findAll().forEach(vehicle -> {
            if (vehicle.getType().equals(type) && vehicle.getGearSystem().equals(gear)){
                vehicles.add(vehicle);
            }
        });
        return vehicles;
    }

    public boolean isVehicleRented(Vehicle vehicle, Date pickUpDate, Date checkOutDate) {
        boolean isRented = false;
        for (Rental rentedVehicle : rentalRepository.findAll()){
            if(rentedVehicle.getId() == vehicle.getId()) {
                if(rentedVehicle.getPickUDate().after(checkOutDate) 
                    || rentedVehicle.getCheckOutDate().before(pickUpDate)) {
                        isRented = true;
                    }
            }
        }
        return isRented;
    }

    public List<Vehicle> getAvailableVehicles(String type, String gear, Date pickUpDate, Date checkOutDate) {
        List<Vehicle> vehicles = findVehicleFromTypeAndGear(type, gear);
        vehicles.forEach(vehicle -> {
            if (isVehicleRented(vehicle, pickUpDate, checkOutDate)){
                vehicles.remove(vehicle);
            }
        });
        return vehicles;
    }
    
}
