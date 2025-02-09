package com.thiagoamorimm.Recrutamento.service;

import com.thiagoamorimm.Recrutamento.model.Candidatura;
import com.thiagoamorimm.Recrutamento.repository.CandidaturaRepository;
import com.thiagoamorimm.Recrutamento.exception.CandidaturaNotFoundException;
import com.thiagoamorimm.Recrutamento.enums.StatusCandidatura;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidaturaService {

    @Autowired
    private CandidaturaRepository candidaturaRepository;

    public List<Candidatura> listarCandidaturas() {
        return candidaturaRepository.findAll();
    }

    public Candidatura criarCandidatura(Candidatura candidatura) {
        candidatura.setStatus(StatusCandidatura.PENDENTE);
        return candidaturaRepository.save(candidatura);
    }

    public Candidatura buscarCandidaturaPorId(Long id) {
        return candidaturaRepository.findById(id)
                .orElseThrow(() -> new CandidaturaNotFoundException("Candidatura não encontrada com o ID: " + id));
    }
}
