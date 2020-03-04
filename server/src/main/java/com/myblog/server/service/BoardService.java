package com.myblog.server.service;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import com.myblog.server.domain.Board;
import com.myblog.server.domain.BoardRepository;
import com.myblog.server.domain.User;
import com.myblog.server.domain.UserRepository;
import com.myblog.server.exception.BadRequestException;
import com.myblog.server.exception.ResourceNotFoundException;
import com.myblog.server.payload.BoardRequest;
import com.myblog.server.payload.BoardResponse;
import com.myblog.server.payload.PagedResponse;
import com.myblog.server.security.UserPrincipal;
import com.myblog.server.util.AppConstants;
import com.myblog.server.util.ModelMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

/**
 * BoardService
 */
@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(BoardService.class);

    public PagedResponse<BoardResponse> getAllBoards(UserPrincipal currentUser, int page, int size) {
        validatePageNumberAndSize(page, size);
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Board> boards = boardRepository.findAll(pageable);
        if (boards.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), boards.getNumber(), boards.getSize(),
                    boards.getTotalElements(), boards.getTotalPages(), boards.isLast());
        }
        Map<Long, User> creatorMap = getBoardCreatorMap(boards.getContent());
        List<BoardResponse> boardResponses = boards.map(board -> {
            return ModelMapper.mapBoardToBoardResponse(board, creatorMap.get(board.getCreatedBy()));
        }).getContent();

        return new PagedResponse<>(boardResponses, boards.getNumber(), boards.getSize(), boards.getTotalElements(),
                boards.getTotalPages(), boards.isLast());

    }

    public PagedResponse<BoardResponse> getBoardsCreatedBy(String username, UserPrincipal currentUser, int page,
            int size) {
        validatePageNumberAndSize(page, size);
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User " + " username " + username));
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Board> boards = boardRepository.findByCreatedBy(user.getId(), pageable);
        if (boards.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), boards.getNumber(), boards.getSize(),
                    boards.getTotalElements(), boards.getTotalPages(), boards.isLast());
        }
        List<BoardResponse> boardResponses = boards.map(board -> {
            return ModelMapper.mapBoardToBoardResponse(board, user);
        }).getContent();
        return new PagedResponse<>(boardResponses, boards.getNumber(), boards.getSize(), boards.getTotalElements(),
                boards.getTotalPages(), boards.isLast());
    }

    
    public BoardResponse getBoardById(Long boardId, UserPrincipal currentUser) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board " + " id " + boardId));
        User creator = userRepository.findById(board.getCreatedBy())
                .orElseThrow(() -> new ResourceNotFoundException("User " + " id " + board.getCreatedBy()));
        return ModelMapper.mapBoardToBoardResponse(board, creator);
        
    }

    public Board createBoard(BoardRequest boardRequest) {
        Board board = new Board();
        board.setTitle(boardRequest.getTitle());
        board.setContents(boardRequest.getContents());

        return boardRepository.save(board);
    }

    Map<Long, User> getBoardCreatorMap(List<Board> boards) {
        List<Long> creatorIds = boards.stream().map(Board::getCreatedBy).distinct().collect(Collectors.toList());
        List<User> creators = userRepository.findByIdIn(creatorIds);
        Map<Long, User> creatorMap = creators.stream().collect(Collectors.toMap(User::getId, Function.identity()));
        return creatorMap;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if (page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }
        if (size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

}