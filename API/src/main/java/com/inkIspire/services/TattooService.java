package com.inkIspire.services;

import com.inkIspire.domain.dtos.TattooDTO;
import com.inkIspire.domain.entities.Tattoo;
import com.inkIspire.domain.repositories.TattoRepository;
import com.inkIspire.exceptions.DatabaseException;
import com.inkIspire.exceptions.EntityNotFoundExceptions;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class TattooService {

    private TattoRepository repository;

    public TattooService(TattoRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public Page<TattooDTO> findAllPaged(Pageable pageable) {
        Page<Tattoo> tattoos = repository.findAll(pageable);

        return tattoos.map(tattoo -> new TattooDTO(tattoo));
    }

    @Transactional(readOnly = true)
    public TattooDTO findById(Long id) {
        Optional<Tattoo> obj = repository.findById(id);

        Tattoo entity = obj.orElseThrow(() -> new EntityNotFoundExceptions("Entidade não encontrada"));

        return new TattooDTO(entity);
    }

    @Transactional()
    public TattooDTO insert(TattooDTO dto) {

        Tattoo entity = new Tattoo();

        copyDtoForEntity(dto, entity);

        entity = repository.save(entity);

        return new TattooDTO(entity);
    }

    public TattooDTO update(Long id, TattooDTO tattooDTO) {
        try {
            Tattoo tattoo = repository.getById(id);
            copyDtoForEntity(tattooDTO, tattoo);

            tattoo = repository.save(tattoo);

            return new TattooDTO(tattoo);
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundExceptions("Id não encontrado");
        }
    }

    public void delete(Long id) {

        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundExceptions("Id não encontrado");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Violação na integridade do banco");
        }
    }

    private void copyDtoForEntity(TattooDTO dto, Tattoo entity) {
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setPrice(dto.price());
        entity.setStyle(dto.style());
        entity.setArtUrl(dto.artUrl());
    }

}
