package com.myblog.server.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * UserSummary
 */
@Getter
@Setter
@AllArgsConstructor
public class UserSummary {

    private Long id;
    private String username;
    private String name;
}