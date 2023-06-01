package kicker.server;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Endstand {
    @Id
    @GeneratedValue
    private Long id;

    private String spieler1;
    private String spieler2;
    private int tore1;
    private int tore2;

    protected Endstand() {
        // required by JPA/Hibernate
    }

    public Endstand(String spieler1, String spieler2, int tore1, int tore2) {
        this.spieler1 = spieler1;
        this.spieler2 = spieler2;
        this.tore1 = tore1;
        this.tore2 = tore2;
    }

    public int torDifferenz() {
        return tore1 - tore2;
    }

    // BOILERPLATE

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpieler1() {
        return spieler1;
    }

    public void setSpieler1(String spieler1) {
        this.spieler1 = spieler1;
    }

    public String getSpieler2() {
        return spieler2;
    }

    public void setSpieler2(String spieler2) {
        this.spieler2 = spieler2;
    }

    public int getTore1() {
        return tore1;
    }

    public void setTore1(int tore1) {
        this.tore1 = tore1;
    }

    public int getTore2() {
        return tore2;
    }

    public void setTore2(int tore2) {
        this.tore2 = tore2;
    }
}
