package com.inkIspire.api;

import com.inkIspire.domain.dtos.ArtistDTO;
import com.inkIspire.domain.dtos.UserDTO;
import com.inkIspire.domain.dtos.UserInsertDTO;
import com.inkIspire.domain.entities.User;
import com.inkIspire.services.ArtistService;
import com.inkIspire.services.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/users")
public class UserResources {

    private UserService service;

    public UserResources(UserService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Page<UserDTO>> findAllPaged(Pageable pageable){
        Page<UserDTO> listUserResources = service.findAllPaged(pageable);

        return ResponseEntity.ok().body(listUserResources);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id){
        UserDTO userSigularResource = service.findById(id);

        return  ResponseEntity.ok().body(userSigularResource);
    }

    @PostMapping
    public ResponseEntity<UserDTO> insert(@RequestBody UserInsertDTO userDTO){
        UserDTO userTattoo = service.insert(userDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userDTO.getId()).toUri();

        return ResponseEntity.status(HttpStatus.CREATED).body(userTattoo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Long id, @RequestBody UserDTO userDTO ){
        userDTO = service.update(id, userDTO);

        return ResponseEntity.ok().body(userDTO);
    }
}
