package com.myblog.server.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * BoardRepository
 */
@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    Optional<Board> findById(String boardId);
}