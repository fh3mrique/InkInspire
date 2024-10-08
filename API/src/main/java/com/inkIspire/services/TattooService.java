package com.inkIspire.services;

import com.inkIspire.domain.dtos.InterestDTO;
import com.inkIspire.domain.dtos.TattooDTO;
import com.inkIspire.domain.entities.Interest;
import com.inkIspire.domain.entities.Tattoo;
import com.inkIspire.domain.repositories.InterestRepository;
import com.inkIspire.domain.repositories.StyleRepository;
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
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TattooService {

    private TattoRepository repository;
    private StyleRepository styleRepository;
    private InterestRepository interestRepository;

    public TattooService(TattoRepository repository, StyleRepository styleRepository, InterestRepository interestRepository) {
        this.repository = repository;
        this.styleRepository = styleRepository;
        this.interestRepository = interestRepository;
    }

    @Transactional(readOnly = true)
    public Page<TattooDTO> findAllPaged(String name, Long styleId, Pageable pageable) {
        Page<Tattoo> tattoos = repository.find(name, (styleId == 0) ? null : styleId, pageable);
        return tattoos.map(TattooDTO::new);
    }

    @Transactional(readOnly = true)
    public TattooDTO findById(Long id) {
        Optional<Tattoo> obj = repository.findById(id);

        Tattoo entity = obj.orElseThrow(() -> new EntityNotFoundExceptions("Entidade não encontrada"));

        return new TattooDTO(entity);
    }

    @Transactional
    public TattooDTO insert(TattooDTO dto) {

        Tattoo entity = new Tattoo();

        copyDtoForEntity(dto, entity);

        entity = repository.save(entity);

        return new TattooDTO(entity);
    }

    @Transactional
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

    @Transactional
    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundExceptions("Id não encontrado");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Violação na integridade do banco");
        }
    }

    public List<Tattoo> getTattoosByArtistId(Long artistId) {
        // Implementando a lógica diretamente no serviço
        List<Tattoo> tattoos = repository.findAll(); // Busca todas as tattoos

        // Filtra as tattoos pelo ID do artista
        return tattoos.stream()
                .filter(tattoo -> tattoo.getArtist().getId().equals(artistId))
                .collect(Collectors.toList());
    }

    @Transactional
    public InterestDTO insertInterest(InterestDTO dto) {
        Tattoo tattoo = repository.findById(dto.getTattooId())
                .orElseThrow(() -> new EntityNotFoundExceptions("Tattoo not found"));

        Interest interest = new Interest();
        interest.setName(dto.getName());
        interest.setContact(dto.getContact());
        interest.setMessage(dto.getMessage());
        interest.setTattoo(tattoo);

        interest = interestRepository.save(interest);
        return new InterestDTO(interest.getId(), interest.getName(), interest.getContact(), interest.getMessage(), tattoo.getId());
    }

    private void copyDtoForEntity(TattooDTO dto, Tattoo entity) {
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setPrice(dto.price());
        entity.setStyle(dto.style());
        entity.setArtUrl(dto.artUrl());
    }
}
