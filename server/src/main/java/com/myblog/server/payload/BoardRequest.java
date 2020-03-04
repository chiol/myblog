
package com.myblog.server.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

/**
 * BoardRequest
 */
@Getter
@Setter
public class BoardRequest {

    @NotBlank
    @Size(max = 140)
    private String title;

    @NotBlank
    private String contents;
}