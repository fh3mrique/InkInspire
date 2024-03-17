package com.inkIspire.api;

import com.inkIspire.domain.dtos.ArtistDTO;
import com.inkIspire.domain.dtos.TattooDTO;
import com.inkIspire.domain.entities.Artist;
import com.inkIspire.services.ArtistService;
import com.inkIspire.services.TattooService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/artist")
public class ArtistResources {

    private ArtistService service;

    public ArtistResources(ArtistService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Page<ArtistDTO>> findAllPaged(Pageable pageable){
        Page<ArtistDTO> listArtistResources = service.findAllPaged(pageable);

        return ResponseEntity.ok().body(listArtistResources);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtistDTO> findById(@PathVariable Long id){
        ArtistDTO artistSigularResource = service.findById(id);

        return  ResponseEntity.ok().body(artistSigularResource);
    }

    @PostMapping
    public ResponseEntity<ArtistDTO> insert(@RequestBody ArtistDTO artistDTO){
        ArtistDTO artistTattoo = service.insert(artistDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(artistDTO.getId()).toUri();

        return ResponseEntity.status(HttpStatus.CREATED).body(artistTattoo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ArtistDTO> update(@PathVariable Long id, @RequestBody ArtistDTO artistDTO ){
        artistDTO = service.update(id, artistDTO);

        return ResponseEntity.ok().body(artistDTO);
    }
}
