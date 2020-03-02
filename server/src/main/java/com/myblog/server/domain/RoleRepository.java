package com.myblog.server.domain;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * RoleRepository
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

    Optional<Role> findByName(RoleName roleName);
}