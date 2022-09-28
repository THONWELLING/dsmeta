package com.devsuperior.dsmeta.repositories;

import com.devsuperior.dsmeta.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

//Arquivo responsável pelas consultas ao banco de dados
public interface SaleRepository extends JpaRepository<Sale, Long> {

}
