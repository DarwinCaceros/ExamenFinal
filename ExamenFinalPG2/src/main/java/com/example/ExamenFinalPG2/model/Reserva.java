package com.example.ExamenFinalPG2.model;


import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre_cliente", nullable = false)
    private String nombreCliente;

    @Column(name = "fecha_inicio", nullable = false)
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin", nullable = false)
    private LocalDate fechaFin;

    @Column(name = "tipo_habitacion", nullable = false)
    private String tipoHabitacion;

    public Reserva () {

    }

    public Reserva(String nombreCliente, LocalDate fechaInicio, LocalDate fechFin, String tipoHabitacion) {
                this.nombreCliente = nombreCliente;
                this.fechaInicio = fechaInicio;
                this.fechaFin = fechFin;
                this.tipoHabitacion = tipoHabitacion;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getNombreCliente(){
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente){
        this.nombreCliente = nombreCliente;
    }

    public LocalDate getFechaInicio(){
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio){
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin(){
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin){
        this.fechaFin = fechaFin;
    }

    public String getTipoHabitacion(){
        return tipoHabitacion;
    }

    public void setTipoHabitacion(String tipoHabitacion){
        this.tipoHabitacion = tipoHabitacion;
    }

    @Override
    public String toString() {
        return "Reserva{" +
                "id=" + id +
                ", nombreCliente='" + nombreCliente + '\'' +
                ", fechaInicio=" + fechaInicio +
                ", fechaFin=" + fechaFin +
                ", tipoHabitacion='" + tipoHabitacion + '\'' +
                '}';
    }
    
}
