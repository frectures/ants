package kicker.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KickerController {
    @Autowired
    private KickerService service;

    @GetMapping("/endstand")
    public List<Endstand> getEndstaende() {
        return service.getEndstaende();
    }

    @PostMapping("/endstand")
    public List<Endstand> postEndstand(@RequestBody Endstand endstand) {
        service.add(endstand);
        return service.getEndstaende();
    }

    @GetMapping("/rangliste")
    public List<Bewertung> getRangliste() {
        return service.berechneRangliste();
    }
}
