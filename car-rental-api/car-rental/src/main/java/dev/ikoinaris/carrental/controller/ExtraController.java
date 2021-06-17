package dev.ikoinaris.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Extra;
import dev.ikoinaris.carrental.repository.ExtraRepository;

@RestController
@RequestMapping("/car-rental")
@CrossOrigin(origins = "http://localhost:4200")
public class ExtraController {

    @Autowired
    private ExtraRepository extraRepository;

    @GetMapping("/extras")
    public List<Extra> getExtras() {
        return extraRepository.findAll();
    }

    @PostMapping("/extras")
    public Extra saveExtra(@RequestBody Extra extra) {
        return extraRepository.save(extra);
    }
    
}
