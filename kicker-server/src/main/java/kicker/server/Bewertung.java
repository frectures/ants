package kicker.server;

import java.util.Map;

public class Bewertung {
    private final String spieler;
    private final int punkte;

    public Bewertung(String spieler, int punkte) {
        this.spieler = spieler;
        this.punkte = punkte;
    }

    public Bewertung(Map.Entry<String, Integer> entry) {
        this.spieler = entry.getKey();
        this.punkte = entry.getValue();
    }

    // BOILERPLATE

    public String getSpieler() {
        return spieler;
    }

    public int getPunkte() {
        return punkte;
    }
}
