package com.wildcircus.back.repositories;

import com.wildcircus.back.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByNameContainingAndDescriptionContaining(String inName, String inDescription);
}
