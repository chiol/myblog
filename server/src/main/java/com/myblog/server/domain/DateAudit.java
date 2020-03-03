package com.myblog.server.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;
import lombok.Setter;

/**
 * DataAudit
 */
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
    value = {"createAt", "updateAt"},
    allowGetters = true
)
@Getter
@Setter
public abstract class DateAudit implements Serializable{

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Instant createAt;
    
    @LastModifiedDate
    @Column(nullable = false)
    private Instant UpdateAt;
    
}