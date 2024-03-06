package com.invoiceprocessing.server.Controller;

import com.invoiceprocessing.server.Service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.invoiceprocessing.server.Model.Invoice;


@RestController
@CrossOrigin
public class InvoiceController {
    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
       return this.invoiceService.addInvoice(invoice);

    }
}
