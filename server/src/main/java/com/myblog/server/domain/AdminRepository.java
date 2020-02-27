package com.myblog.server.domain;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * AdminRepository
 */
@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{

    Optional<Admin> findByEmail(String email);
    
}