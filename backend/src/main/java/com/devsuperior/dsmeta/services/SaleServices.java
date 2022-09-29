package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Este é o arquivo responsável por implementar a operação de negócio com vendas

@Service // declarando que este arquivo é o serviçe
public class SaleServices {

  @Autowired//
  private SaleRepository repository;

  public List<Sale> findSales(){
    return repository.findAll();
  }
}
