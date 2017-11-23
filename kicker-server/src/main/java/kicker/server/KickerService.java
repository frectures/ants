package kicker.server;

import static java.util.stream.Collectors.toList;

import java.util.Comparator;
import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service
public class KickerService {
	private final EndstandRepository repository;

	public KickerService(EndstandRepository repository) {
		this.repository = repository;
		repository.save(new Endstand("Freddy", "Jason", 5, 6));
		repository.save(new Endstand("Gösta", "Christopher", 6, 3));
	}

	public Iterable<Endstand> getEndstaende() {
		return repository.findAll();
	}

	public void add(Endstand endstand) {
		repository.save(endstand);
	}

	public Iterable<Bewertung> berechneRangliste() {
		HashMap<String, Integer> tore = new HashMap<>();
		for (Endstand endstand : repository.findAll()) {
			tore.merge(endstand.getSpieler1(), +endstand.torDifferenz(), Integer::sum);
			tore.merge(endstand.getSpieler2(), -endstand.torDifferenz(), Integer::sum);
		}
		return tore.entrySet().stream().map(Bewertung::new).sorted(absteigend).collect(toList());
	}

	private static final Comparator<Bewertung> absteigend = Comparator.comparing(Bewertung::getPunkte).reversed()
			.thenComparing(Bewertung::getSpieler);
}
