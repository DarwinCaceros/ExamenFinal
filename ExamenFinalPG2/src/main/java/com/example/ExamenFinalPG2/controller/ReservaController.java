package com.example.ExamenFinalPG2.controller;

import com.example.ExamenFinalPG2.model.Reserva;
import com.example.ExamenFinalPG2.service.ReservaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")

public class ReservaController {
    private final ReservaService reservaService;
    
    public ReservaController(ReservaService reservaService){
        this.reservaService = reservaService;
    }

    @PostMapping
        public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva reserva){
            return ResponseEntity.ok(reservaService.crearReserva(reserva));
        }

    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(){
        return ResponseEntity.ok(reservaService.listarReservas());
    }    

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> actualizarReserva(@PathVariable Integer id, @RequestBody Reserva reserva){
        reserva.setId(id);
        return ResponseEntity.ok(reservaService.actualizarReserva(reserva));
    }    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarReserva(@PathVariable Integer id){
        reservaService.eliminarReserva(id);
        return ResponseEntity.noContent().build();
    }
    
}
