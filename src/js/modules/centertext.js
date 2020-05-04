﻿(function(API) {
    API.centeredText = function(txt, y) {
        // Get current font size
        var fontSize = this.internal.getFontSize();

        // Get page width
        var pageWidth = this.internal.pageSize.width;

        // Get the actual text's width
        /* You multiply the unit width of your string by your font size and divide
         * by the internal scale factor. The division is necessary
         * for the case where you use units other than 'pt' in the constructor
         * of jsPDF.
         */
        var txtWidth = (this.getStringUnitWidth(txt) * fontSize) / this.internal.scaleFactor;

        // Calculate text's x coordinate
        var x = (pageWidth - txtWidth) / 2;

        // Draw text at x,y
        this.text(txt, x, y);
    };
})(jsPDF.API);
