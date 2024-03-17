package com.inkIspire.services;

import com.inkIspire.domain.dtos.ArtistDTO;
import com.inkIspire.domain.dtos.TattooDTO;
import com.inkIspire.domain.entities.Artist;
import com.inkIspire.domain.entities.Tattoo;
import com.inkIspire.domain.repositories.ArtistRepository;
import com.inkIspire.domain.repositories.TattoRepository;
import com.inkIspire.exceptions.EntityNotFoundExceptions;
import com.inkIspire.services.patterns.CrudGenericService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ArtistService implements CrudGenericService<ArtistDTO, Long> {

    private ArtistRepository repository;

    private TattoRepository tattoRepository;

    public ArtistService(ArtistRepository repository, TattoRepository tattoRepository) {
        this.repository = repository;
        this.tattoRepository = tattoRepository;
    }
    public Page<ArtistDTO> findAllPaged(Pageable pageable) {

        Page<Artist> artists = repository.findAll(pageable);

        return artists.map(artist -> new ArtistDTO(artist));
    }

    @Override
    public ArtistDTO findById(Long id) {
        Optional<Artist> obj = repository.findById(id);

        Artist entity = obj.orElseThrow(() -> new EntityNotFoundExceptions("Entidade não encontrada"));

        return new ArtistDTO(entity);
    }

    @Override
    public ArtistDTO insert(ArtistDTO artistDTO) {
        Artist entity = new Artist();

        copyDtoForEntity(artistDTO, entity);

        entity = repository.save(entity);

        return new ArtistDTO(entity);
    }

    @Override
    public ArtistDTO update(Long id, ArtistDTO artistDTO) {
        try {
            Artist artist = repository.getById(id);
            copyDtoForEntity(artistDTO, artist);

            artist = repository.save(artist);

            return new ArtistDTO(artist);
        }
        catch (EntityNotFoundException e){
            throw new EntityNotFoundExceptions("Id não encontrado");
        }
    }

    @Override
    public void deleteById(Long aLong) {

    }

    private void copyDtoForEntity (ArtistDTO artistDTO, Artist entity){
        entity.setName(artistDTO.getName());
        entity.setPerfil(artistDTO.getPerfil());
        entity.setContact(artistDTO.getContact());
        entity.setEmail(artistDTO.getEmail());

        entity.getTattoos().clear();

        for (TattooDTO tattooDTO : artistDTO.getTattoos()) {
            Tattoo cat = tattoRepository.getOne(tattooDTO.id());
            entity.getTattoos().add(cat);
        }
    }
}
