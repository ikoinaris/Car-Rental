package dev.ikoinaris.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoinaris.carrental.entity.Extra;
import dev.ikoinaris.carrental.repository.ExtraRepository;

@RestController
public class ExtraController {

    @Autowired
    private ExtraRepository extraRepository;

    @GetMapping("/extras")
    public List<Extra> getExtras() {
        return extraRepository.findAll();
    }
    
}
