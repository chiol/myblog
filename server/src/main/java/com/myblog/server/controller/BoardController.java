package com.myblog.server.controller;

import java.net.URI;

import javax.validation.Valid;

import com.myblog.server.domain.Board;
import com.myblog.server.domain.BoardRepository;
import com.myblog.server.domain.UserRepository;
import com.myblog.server.payload.ApiResponse;
import com.myblog.server.payload.BoardRequest;
import com.myblog.server.payload.BoardResponse;
import com.myblog.server.payload.PagedResponse;
import com.myblog.server.security.CurrentUser;
import com.myblog.server.security.UserPrincipal;
import com.myblog.server.service.BoardService;
import com.myblog.server.util.AppConstants;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * BoardController
 */
@RestController
@RequestMapping("/api/boards")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BoardService boardService;

    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

    @GetMapping
    public PagedResponse<BoardResponse> getPolls(@CurrentUser UserPrincipal currentUser,
            @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return boardService.getAllBoards(currentUser, page, size);
    }

    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> createBoard(@Valid @RequestBody BoardRequest boardRequest)
    {
        Board board = boardService.createBoard(boardRequest);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{boardId}").buildAndExpand(board.getId())
                .toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "Board Created Successfully"));
    }

    @GetMapping("/{boardId}")
    public BoardResponse getBoardById(@CurrentUser UserPrincipal currentUser, @PathVariable Long boardId) {
        return boardService.getBoardById(boardId, currentUser);
    }

}