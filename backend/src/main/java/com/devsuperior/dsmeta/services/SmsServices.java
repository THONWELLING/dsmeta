package com.devsuperior.dsmeta.services;


import com.devsuperior.dsmeta.entities.Sale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.text.DecimalFormat;


@Service
public class SmsServices {

  @Value("${twilio.sid}")
  private String twilioSid;

  @Value("${twilio.key}")
  private String twilioKey;

  @Value("${twilio.phone.from}")
  private String twilioPhoneFrom;

  @Value("${twilio.phone.to}")
  private String twilioPhoneTo;

  @Autowired
  private SaleRepository saleRepository;

  public void sendSms(Long saleId) {

    Sale sale = saleRepository.findById(saleId).get(); // consultando o banco de dados por id
    String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear(); // pegando a data da venda no banco de dados e formatando

    String msg = "O Vendedor " + sale.getSellerName() + "se destacou  em " + date
        + "com um total de R$ " + new DecimalFormat("#,##0.00").format(sale.getAmount());

    Twilio.init(twilioSid, twilioKey);

    PhoneNumber to = new PhoneNumber(twilioPhoneTo);
    PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

    Message message = Message.creator(to, from, msg).create();

    System.out.println(message.getSid());
  }
}
