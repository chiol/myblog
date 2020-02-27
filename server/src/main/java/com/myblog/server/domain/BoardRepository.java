package com.myblog.server.domain;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * BoardRepository
 */
@Repository
public interface BoardRepository extends JpaRepository<Board, Long>{

    Optional<Board> findById(String id);
}