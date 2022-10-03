package com.devsuperior.dsmeta.controllers;

import com.devsuperior.dsmeta.services.SmsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleServices;



@RestController
@RequestMapping(value = "/sales")
public class SaleController {

  @Autowired
  private SaleServices service;

  @Autowired
  private SmsServices smsServices;

  @GetMapping
  public Page<Sale> findSales(
      @RequestParam(value="minDate", defaultValue = "") String minDate,
      @RequestParam(value="maxDate", defaultValue = "") String maxDate,
      Pageable pageable) {
    return service.findSales(minDate, maxDate, pageable);
  }

  @GetMapping("/{id}/notification")
  public void smsNotify(@PathVariable Long id) {

    smsServices.sendSms(id);
  }

}
