package com.myblog.server.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@JsonIgnoreProperties(
        value = {"createdBy","updateBy"},
        allowGetters = true
)
@Getter
@Setter
public class UserDateAudit extends DateAudit {

    @CreatedBy
    @Column(updatable = false)
    private Long createBy;

    @LastModifiedBy
    private Long updateBy;
}
