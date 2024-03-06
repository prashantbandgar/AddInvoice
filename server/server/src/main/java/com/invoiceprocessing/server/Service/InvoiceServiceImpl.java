package com.invoiceprocessing.server.Service;

import com.invoiceprocessing.server.Dao.InvoiceDao;
import com.invoiceprocessing.server.Model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements InvoiceService{
    @Autowired
    InvoiceDao invoiceDao;
    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;

    }
}

