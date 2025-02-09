package com.thiagoamorimm.Recrutamento.controller;

import com.thiagoamorimm.Recrutamento.dto.VagaDTO;
import com.thiagoamorimm.Recrutamento.model.Vaga;
import com.thiagoamorimm.Recrutamento.service.VagaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vagas")
public class VagaController {
    
    private final VagaService vagaService;
    
    public VagaController(VagaService vagaService) {
        this.vagaService = vagaService;
    }
    
    @PostMapping
    public ResponseEntity<Vaga> criarVaga(@RequestBody VagaDTO vagaDTO) {
        return ResponseEntity.ok(vagaService.criarVaga(vagaDTO));
    }
}
