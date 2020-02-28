package com.myblog.server.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.myblog.server.domain.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * AdminPrincipal
 */
@Getter
@Setter
@AllArgsConstructor
public class UserPrincipal implements UserDetails {

    private Long id;
    private String name;
    private String username;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());

        return new UserPrincipal(user.getId(), user.getName(), user.getUsername(), user.getEmail(), user.getPassword(),
                authorities);

    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        UserPrincipal that = (UserPrincipal) obj;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        // TODO Auto-generated method stub
        return Objects.hash(id);
    }
    
}