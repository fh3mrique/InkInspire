package com.inkIspire.api;

import com.inkIspire.domain.entities.Style;
import com.inkIspire.domain.repositories.StyleRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/styles")
public class StyleResources {

    private StyleRepository repository;

    public StyleResources(StyleRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<Style>> findAll() {
        List<Style> stylesResources = repository.findAll();

        return ResponseEntity.ok().body(stylesResources);
    }
}
