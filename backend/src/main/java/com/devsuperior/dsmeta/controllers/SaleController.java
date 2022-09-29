package com.devsuperior.dsmeta.controllers;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController// Declarando que este arquivo vai ser um controller
@RequestMapping(value = "/sales")
public class SaleController {

  @Autowired
  private SaleServices service;

  @GetMapping
  public List<Sale> findSales() {
    return service.findSales();
  }
}
