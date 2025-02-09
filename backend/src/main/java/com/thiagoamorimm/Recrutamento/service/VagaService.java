package com.thiagoamorimm.Recrutamento.service;

import com.thiagoamorimm.Recrutamento.dto.VagaDTO;
import com.thiagoamorimm.Recrutamento.model.Vaga;
import com.thiagoamorimm.Recrutamento.repository.VagaRepository;
import org.springframework.stereotype.Service;

@Service
public class VagaService {
    
    private final VagaRepository vagaRepository;
    
    public VagaService(VagaRepository vagaRepository) {
        this.vagaRepository = vagaRepository;
    }
    
    public Vaga criarVaga(VagaDTO vagaDTO) {
        Vaga vaga = new Vaga();
        vaga.setTitulo(vagaDTO.getTitulo());
        vaga.setDescricao(vagaDTO.getDescricao());
        vaga.setStatus(vagaDTO.getStatus());
        vaga.setDataCriacao(LocalDateTime.now());
        return vagaRepository.save(vaga);
    }
}
