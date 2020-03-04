package com.myblog.server.util;

import com.myblog.server.domain.Board;
import com.myblog.server.domain.User;
import com.myblog.server.payload.BoardResponse;
import com.myblog.server.payload.UserSummary;

/**
 * ModelMapper
 */
public class ModelMapper {

    public static BoardResponse mapBoardToBoardResponse(Board board, User user) {
        BoardResponse boardResponse = new BoardResponse();
        boardResponse.setId(board.getId());
        boardResponse.setTitle(board.getTitle());
        boardResponse.setContents(board.getContents());
        boardResponse.setCreationDateTime(board.getCreatedAt());
        UserSummary userSummary = new UserSummary(user.getId(), user.getUsername(), user.getName());
        boardResponse.setCreatedBy(userSummary);
        return boardResponse;
    }

}