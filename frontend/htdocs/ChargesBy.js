async function getJSONPasses4(op_id,d_f,d_t) {
  const response = await fetch('https://localhost:9103/interoperability/api/ChargesBy/' + op_id + '/' + d_f + '/' + d_t +'?format=json');
  return await response.json();
}


function getPasses4(selector) {
         var op_ID = window.prompt("Enter op_ID");
         var date_from = window.prompt("Enter start date");
         var date_to = window.prompt("Enter end date");


         var list = getJSONPasses4(op_ID,date_from,date_to).then(list => {
         // Getting the all column names
         list = list.PPOList;

// Dimiourgia diagrammatos stilwn

         var dict = {}
         for(i in list) {
           dict[list[i].VisitingOperator] = list[i].PassesCost
         }
         var jsonChart = [];
         for(key in dict) {
           jsonChart.push({ 'x': key, 'value' : dict[key]})
         }
         var json = {
            // chart settings
            "chart": {
              // chart type
              "type": "column",
              // chart data
              "series" : [{"data": jsonChart}],
              // chart container
              "container": "container4"
            }
          };
          var chart = anychart.fromJson(json);
          var title1 = chart.title();
            title1.enabled(true);
            title1.text('Κόστος διελεύσεων ανά λειτουργό');
          document.getElementById('container4').style = "width: 1000px; height: 400px;";
          // draw chart
          chart.background().fill("#e6eff0");
          chart.palette(anychart.palettes.monochrome);
          chart.getSeriesAt(0).name("Charge");
          chart.getSeriesAt(0).tooltip().format('Charge: {%Value}€');
          chart.draw();


//Dimiourgia diagrammatos pitas

          var dict = {}
          for(i in list) {
            dict[list[i].VisitingOperator] = list[i].NumberOfPasses
          }
          var jsonChart = [];
          for(key in dict) {
            jsonChart.push({ 'x': key, 'value' : dict[key]})
          }
          var json = {
             // chart settings
             "chart": {
               // chart type
               "type": "pie",
               // chart data
               "data": jsonChart,
               // chart container
               "container": "visits4"
             }
           };
           var chart = anychart.fromJson(json);
           var title2 = chart.title();
             title2.enabled(true);
             title2.text('Ποσοστό διελεύσεων ανά λειτουργό');
           document.getElementById('visits4').style = "width: 1000px; height: 400px;"
           // draw chart
           chart.background().fill("#e6eff0");
          chart.palette(anychart.palettes.monochrome);
           chart.draw();

// Dimiourgia pinaka

         var cols = Headers4(list, selector);

         // Traversing the JSON data
         for (var i = 0; i < list.length; i++) {
             var row = $('<tr/>');
             for (var colIndex = 0; colIndex < cols.length; colIndex++)
             {
                 var val = list[i][cols[colIndex]];

                 // If there is any key, which is matching
                 // with the column name
                 if (val == null) val = "";
                     row.append($('<td/>').html(val));
             }

             // Adding each row to the table
             $(selector).append(row);
         }
   });
 }
     function Headers4(list, selector) {
         var columns = [];
         var header = $('<tr/>');

         for (var i = 0; i < list.length; i++) {
             var row = list[i];

             for (var k in row) {
                 if ($.inArray(k, columns) == -1) {
                     columns.push(k);

                     // Creating the header
                     header.append($('<th/>').html(k));
                 }
             }
         }
         // Appending the header to the table
         $(selector).append(header);
             return columns;
     }
