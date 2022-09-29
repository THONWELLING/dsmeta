package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;


//Este é o arquivo responsável por implementar a operação de negócio com vendas

@Service // declarando que este arquivo é o serviçe
public class SaleServices {

  @Autowired//
  private SaleRepository repository;

  public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable){
    /*determinando uma variavel para controlar o caso de uma data não ser apresentada(Se tentarmos acessar a rota sem
    passar nenhuma data vai dar erro interno do servidor para que isso não ocorra precisamos setar uma data no nosso
    caso vai ser a data atual )*/
    LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

    LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);// ternário se minDate for vazia pege a data atual menos 365dias
    LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate); // ternário se a data estiver vazia uze "today"

    return repository.findSales(min, max, pageable);
  }
}
