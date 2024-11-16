package com.example.ExamenFinalPG2.service;

import com.example.ExamenFinalPG2.model.Reserva;
import com.example.ExamenFinalPG2.repository.ReservaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService {
    private final ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository){
        this.reservaRepository = reservaRepository;
    }

    public Reserva crearReserva(Reserva reserva){
        return reservaRepository.save(reserva);
    }

    public List<Reserva> listarReservas(){
        return reservaRepository.findAll();
    }

    public Reserva actualizarReserva(Reserva reserva){
        return reservaRepository.save(reserva);
    }

    public void eliminarReserva(Integer id){
        reservaRepository.deleteById(id);
    }
}
