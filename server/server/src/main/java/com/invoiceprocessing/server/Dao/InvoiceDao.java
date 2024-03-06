package com.invoiceprocessing.server.Dao;

import com.invoiceprocessing.server.Model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {

}
