package com.inkIspire.services.patterns;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface CrudGenericService<DTO, ID> {

    Page<DTO> findAllPaged(Pageable pageable);

    DTO findById(ID id);

    DTO insert(DTO dto);

    DTO update(ID id, DTO dto);

    void deleteById(ID id);
}
