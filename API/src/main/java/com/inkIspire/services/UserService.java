package com.inkIspire.services;

import com.inkIspire.domain.dtos.RoleDTO;

import com.inkIspire.domain.dtos.UserDTO;
import com.inkIspire.domain.dtos.UserInsertDTO;
import com.inkIspire.domain.entities.Role;

import com.inkIspire.domain.entities.User;
import com.inkIspire.domain.repositories.RoleRepository;
import com.inkIspire.domain.repositories.UserRepository;
import com.inkIspire.exceptions.EntityNotFoundExceptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    private UserRepository repository;
    private RoleRepository roleRepository;

    private BCryptPasswordEncoder passwordEncoder;

    private static Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(UserRepository repository, RoleRepository roleRepository, BCryptPasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(readOnly = true)
    public Page<UserDTO> findAllPaged(Pageable pageable) {
        Page<User> users = repository.findAll(pageable);

        return users.map(user -> new UserDTO(user));
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id) {
        Optional<User> obj = repository.findById(id);

        User entity = obj.orElseThrow(() -> new EntityNotFoundExceptions("Entidade não encontrada"));

        return new UserDTO(entity);
    }

    @Transactional()
    public UserDTO insert(UserInsertDTO dto) {

        User entity = new User();

        copyDtoForEntity(dto, entity);
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));

        entity = repository.save(entity);

        return new UserDTO(entity);
    }

    public UserDTO update(Long id, UserDTO userDTO) {
        try {
            User user = repository.getById(id);
            copyDtoForEntity(userDTO, user);

            user = repository.save(user);

            return new UserDTO(user);
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundExceptions("Id não encontrado");
        }
    }

    private void copyDtoForEntity(UserDTO dto, User entity) {
        entity.setEmail(dto.getEmail());

        entity.getRoles().clear();

        for (RoleDTO roleDTO : dto.getRoles()) {
            Role role = roleRepository.getById(roleDTO.getId());
            entity.getRoles().add(role);
        }

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByEmail(username);

        if (user == null){
            logger.error("User not found" + username);
            throw new UsernameNotFoundException("Email not found");
        }
        logger.info("User found");
        return user;
    }
}
