package com.myblog.server.payload;

import java.time.Instant;

import lombok.Getter;
import lombok.Setter;

/**
 * BoardResponse
 */
@Getter
@Setter
public class BoardResponse {

    
    private Long id;
    private String title;
    private String contents;
    private UserSummary createdBy;
    private Instant creationDateTime;
}