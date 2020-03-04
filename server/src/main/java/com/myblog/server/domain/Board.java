package com.myblog.server.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


/**
 * Board
 */
@Entity
@Table(name="boards")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Board extends UserDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String contents;

}