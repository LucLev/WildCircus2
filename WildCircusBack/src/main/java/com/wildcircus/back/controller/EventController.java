package com.wildcircus.back.controller;

import com.wildcircus.back.entities.Event;
import com.wildcircus.back.entities.EventDTO;
import com.wildcircus.back.repositories.EventRepository;
import com.wildcircus.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;

    //Show all events
    @GetMapping("/event/all")
    public List<Event> index() {
        return eventRepository.findAll();
    }

    //Add one events
    @PostMapping("/event")
    public Event create(@RequestBody EventDTO p_event)throws Exception {
        Event current = new Event();
        current.setDate(p_event.getDate());
        current.setDescription(p_event.getDescription());
        current.setName(p_event.getName());
        current.setIcon(p_event.getIcon());
        current.setUser(userRepository.findById(p_event.getUserId()).get());

        return eventRepository.save(current);
    }

    //Search event
    @GetMapping("/event")
    public List<Event> search(@RequestParam(name = "searchInName", required = false, defaultValue = "") String inName,
                              @RequestParam(name = "searchInDescription" , required = false, defaultValue = "") String inDescription) {
        return eventRepository.findByNameContainingAndDescriptionContaining(inName, inDescription);
    }

    //Delete one event
    @DeleteMapping("/event/{id}")
        public boolean delete(@PathVariable long id) {
            eventRepository.deleteById(id);
            return true;
        }

    //Update one event
    @PutMapping("/event/{id}")
    public Event update(@PathVariable long id, @RequestBody Event event) {
        Event eventToUpdate = eventRepository.findById(id).get();
        if (event.getIcon() != null) {
            eventToUpdate.setIcon(event.getIcon());
        }
        if (event.getName() != null) {
            eventToUpdate.setName(event.getName());
        }
        if (event.getDescription() != null) {
            eventToUpdate.setDescription(event.getDescription());
        }
        if (event.getDate() != null) {
            eventToUpdate.setDate(event.getDate());
        }
        return eventRepository.save(eventToUpdate);
    }

}
