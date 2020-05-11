import { Component, OnInit } from '@angular/core';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPdf() {
    const pdfUrl = '../../../../assets/static/pdfs/CV.pdf';
    const pdfName = 'Meluleki-Madlala-CV';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
