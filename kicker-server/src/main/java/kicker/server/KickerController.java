package kicker.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KickerController {
	@Autowired
	private KickerService service;

	@GetMapping("/endstand")
	public Iterable<Endstand> getEndstaende() {
		return service.getEndstaende();
	}

	@PostMapping("/endstand")
	public Iterable<Endstand> postEndstand(@RequestBody Endstand endstand) {
		service.add(endstand);
		return service.getEndstaende();
	}

	@GetMapping("/rangliste")
	public Iterable<Bewertung> getRangliste() {
		return service.berechneRangliste();
	}
}
