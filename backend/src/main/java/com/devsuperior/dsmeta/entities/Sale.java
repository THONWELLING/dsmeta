package com.devsuperior.dsmeta.entities;

import javax.persistence.*;
import java.time.LocalDate;


@Entity // mostra que este arquivo é uma entidade
@Table(name = "tb_sales") // edita o nome da tabela no banco de dados
public class Sale {
  @Id//setando a primaryKey
  @GeneratedValue(strategy = GenerationType.IDENTITY)//Definindo id como incremental
  private Long id;
  private String sellerName;
  private Integer visited;
  private Integer deals;
  private double amount;
  private LocalDate date;

  public Sale(Long id, String sellerName, Integer visited, Integer deals,
              double amount, LocalDate date) {
    this.id = id;
    this.sellerName = sellerName;
    this.visited = visited;
    this.deals = deals;
    this.amount = amount;
    this.date = date;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getSellerName() {
    return sellerName;
  }

  public void setSellerName(String sellerName) {
    this.sellerName = sellerName;
  }

  public Integer getVisited() {
    return visited;
  }

  public void setVisited(Integer visited) {
    this.visited = visited;
  }

  public Integer getDeals() {
    return deals;
  }

  public void setDeals(Integer deals) {
    this.deals = deals;
  }

  public double getAmount() {
    return amount;
  }

  public void setAmount(double amount) {
    this.amount = amount;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }
}
