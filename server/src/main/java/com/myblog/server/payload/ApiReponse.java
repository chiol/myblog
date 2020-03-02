package com.myblog.server.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ApiReponse {
    private Boolean success;
    private String message;

}
