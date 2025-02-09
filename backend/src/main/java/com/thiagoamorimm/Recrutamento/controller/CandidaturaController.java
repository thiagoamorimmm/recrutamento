package com.thiagoamorimm.Recrutamento.controller;

import com.thiagoamorimm.Recrutamento.model.Candidatura;
import com.thiagoamorimm.Recrutamento.service.CandidaturaService;
import com.thiagoamorimm.Recrutamento.dto.CandidaturaDTO;
import com.thiagoamorimm.Recrutamento.exception.CandidaturaNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidaturas")
public class CandidaturaController {

    @Autowired
    private CandidaturaService candidaturaService;

    @GetMapping
    public List<Candidatura> listarCandidaturas() {
        return candidaturaService.listarCandidaturas();
    }

    @PostMapping
    public Candidatura criarCandidatura(@RequestBody CandidaturaDTO candidaturaDTO) {
        Candidatura candidatura = new Candidatura();
        candidatura.setNomeCandidato(candidaturaDTO.getNomeCandidato());
        candidatura.setEmail(candidaturaDTO.getEmail());
        candidatura.setTelefone(candidaturaDTO.getTelefone());
        candidatura.setDataCandidatura(candidaturaDTO.getDataCandidatura());
        return candidaturaService.criarCandidatura(candidatura);
    }

    @GetMapping("/{id}")
    public Candidatura buscarCandidaturaPorId(@PathVariable Long id) {
        return candidaturaService.buscarCandidaturaPorId(id);
    }
}
