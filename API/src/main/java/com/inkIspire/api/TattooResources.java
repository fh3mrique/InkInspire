package com.inkIspire.api;

import com.inkIspire.domain.dtos.TattooDTO;
import com.inkIspire.domain.entities.Tattoo;
import com.inkIspire.services.TattooService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/tattoo")
public class TattooResources {

    private TattooService service;

    public TattooResources(TattooService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Page<TattooDTO>> findAllPaged(
            @RequestParam(value = "name", defaultValue = "") String name,
            @RequestParam(value = "styleId", defaultValue = "0") Long styleId,
            Pageable pageable) {
        Page<TattooDTO> listTattooResources = service.findAllPaged(name.trim(), styleId, pageable);
        return ResponseEntity.ok().body(listTattooResources);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TattooDTO> findById(@PathVariable Long id){
        TattooDTO tattooSigularResource = service.findById(id);

        return  ResponseEntity.ok().body(tattooSigularResource);
    }

    @PostMapping
    public ResponseEntity<TattooDTO> insert(@RequestBody TattooDTO tattooDTO){
        TattooDTO insertTattoo = service.insert(tattooDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tattooDTO.id()).toUri();

        return ResponseEntity.status(HttpStatus.CREATED).body(insertTattoo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TattooDTO> update(@PathVariable Long id, @RequestBody TattooDTO tattooDTO ){
        tattooDTO = service.update(id, tattooDTO);

        return ResponseEntity.ok().body(tattooDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete (@PathVariable Long id){
        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/artist/{artistId}")
    public ResponseEntity<List<Tattoo>> getTattoosByArtistId(@PathVariable Long artistId) {
        List<Tattoo> tattoos = service.getTattoosByArtistId(artistId);
        return ResponseEntity.ok(tattoos);
    }
}
