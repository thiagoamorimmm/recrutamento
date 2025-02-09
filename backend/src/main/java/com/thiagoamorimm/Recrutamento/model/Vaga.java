package com.thiagoamorimm.Recrutamento.model;

import com.thiagoamorimm.Recrutamento.enums.StatusVaga;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Vaga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String titulo;
    private String descricao;
    
    @Enumerated(EnumType.STRING)
    private StatusVaga status;
    
    private LocalDateTime dataCriacao;
    
    // Getters and Setters
}
