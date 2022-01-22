async function getJSONPasses(s_id,d_f,d_t) {
  const response = await fetch('https://localhost:9103/interoperability/api/PassesPerStation/' + s_id + '/' + d_f + '/' + d_t +'?format=json');
  return await response.json();
}


function getPasses(selector) {
         var stationID = window.prompt("Enter stationID");
         var date_from = window.prompt("Enter start date");
         var date_to = window.prompt("Enter end date");


         var list = getJSONPasses(stationID,date_from,date_to).then(list => {
         // Getting the all column names
         list = list.PassesList;

// Dimiourgia diagrammatos stilwn

         var dict = {}
         for(i in list) {
           if (!dict[list[i].TagProvider]) {
           dict[list[i].TagProvider] = 1;
         }
           else dict[list[i].TagProvider] += 1;
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
              "container": "container"
            }
          };
          var chart = anychart.fromJson(json);
          document.getElementById('container').style = "width: 1000px; height: 400px;";
          // draw chart
          var title1 = chart.title();
            title1.enabled(true);
            title1.text('Αριθμός διελεύσεων από σταθμό ' + stationID + ' ανά TagProvider');
          chart.background().fill("#e6eff0");
          chart.palette(anychart.palettes.monochrome);
          chart.getSeriesAt(0).name("Number of Passes");
          chart.draw();

//Dimiourgia diagrammatos pitas

          var dict = {}
          for(i in list) {
            if (!dict[list[i].PassType]) {
            dict[list[i].PassType] = 1;
          }
            else dict[list[i].PassType] += 1;
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
               "container": "visits"
             }
           };
           var chart = anychart.fromJson(json);
           document.getElementById('visits').style = "width: 1000px; height: 400px;"
           // draw chart
           var title2 = chart.title();
             title2.enabled(true);
             title2.text("Ποσοστό home / visitor διελεύσεων");
           chart.background().fill("#e6eff0");
          chart.palette(anychart.palettes.monochrome);
           chart.draw();

// Dimiourgia pinaka

         var cols = Headers(list, selector);

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
     function Headers(list, selector) {
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
