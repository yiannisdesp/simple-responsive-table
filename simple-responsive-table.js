;(function($){

    /**
     * A simple jQuery plugin which automatically adjusts an html table
     * in order to comply with the following css:
     * 
    @media screen and (max-width: 600px) {
        table {
            border: 0;
            thead {
                border: none;
                clip: rect(0 0 0 0);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }
            tr {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .625em;
            }
            td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;
                &::before {
                    content: attr(data-label);
                    float: left;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                &:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
    */

    $.fn.simpleResponsiveTable = function(options){

        // defaults   
        var _settings = $.extend({
            table: 'table', // the table element, can be a css selector or an element
            stripStyleAttribute: true, // helpful when the table comes from an editor like tinymce
            labelAttribute: 'data-label', // the attribute used in css styles on small devices
            fillBlankCells: '' // set this content to blank cells in order to maintain paddings
        }, options );

        var $table, labels, th, i; 
        // iterate and reformat each matched element
        return this.each(function() {

            $table = $(this).children(_settings.table);

            // strip any style attributes
            if ( _settings.stripStyleAttribute ) {
                $table.removeAttr('style');
                $table.find('tr, td, th, thead, tfoot').removeAttr('style');
            }

            // read and gather the heading labels
            labels = [];
            if ( $table.find('thead').length > 0 ) {

                th = $table.children('thead').children('th').length > 0 ? 'th' : 'tr';
                $table.children('thead').children(th).children('td').each(function(){
                    labels.push( $(this).text() );
                });

            } else {

                th = $table.children('th').length > 0 ? 'th' : 'tr';
                $table.find(th + ':nth-child(1)').children('td').each(function(){
                    labels.push( $(this).text() );
                });

            }

            // add the attribute required by css (e.g. data-label)
            if ( $table.find('tbody').length > 0 ) {

                $table.find('tbody').children('tr').each(function(){
                    i = 0;
                    $(this).children('td').each(function(){

                        $(this).attr(_settings.labelAttribute, labels[i]);

                        // fill the blank cells
                        if ( $(this).text().length === 0 ) {;
                            $(this).html( _settings.fillBlankCells );
                        }

                        i++;

                    });
                });

            } else {

                $table.find('tr:nth-child(2)').each(function(){
                    i = 0;
                    $(this).children('td').each(function(){

                        $(this).attr(_settings.labelAttribute, labels[i]);

                        // fill the blank cells
                        if ( $(this).text().length === 0 ) {;
                            $(this).html( _settings.fillBlankCells );
                        }
                        
                        i++;
                    });
                });

            }
            
        });
        
    };

})(jQuery);