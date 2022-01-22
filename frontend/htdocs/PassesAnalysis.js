async function getJSONPasses2(op1_id,op2_id,d_f,d_t) {
  const response = await fetch('https://localhost:9103/interoperability/api/PassesAnalysis/' + op1_id + '/' + op2_id + '/' + d_f + '/' + d_t +'?format=json');
  return await response.json();
}


function getPasses2(selector) {
         var op1_ID = window.prompt("Enter op1_ID");
         var op2_ID = window.prompt("Enter op2_ID");
         var date_from = window.prompt("Enter start date");
         var date_to = window.prompt("Enter end date");


         var list = getJSONPasses2(op1_ID, op2_ID, date_from, date_to).then(list => {
         // Getting the all column names
         list = list.PassesList;

// Dimiourgia diagrammatos stilwn

         var dict = {}
         var dict2 = {}
         for(i in list) {
           if (!dict[list[i].StationID]) {
           dict[list[i].StationID] = 1;
           dict2[list[i].StationID] = list[i].Charge;
         }
           else {
             dict[list[i].StationID] += 1;
             dict2[list[i].StationID] += list[i].Charge;
           }
         }
         var jsonChart = [];
         var jsonChart2 = [];
         for(key in dict) {
           jsonChart.push({ 'x': key, 'value' : dict[key]})
           jsonChart2.push({ 'x': key, 'value' : dict2[key]})
         }

         var json = {
            // chart settings
            "chart": {
              // chart type
              "type": "column",
              // chart data
              "series" : [{"data": jsonChart}, {"data": jsonChart2}],
              // chart container
              "container": "container2"
            }
          };
          var chart = anychart.fromJson(json);
          var title1 = chart.title();
            title1.enabled(true);
            title1.text("Αριθμός διελεύσεων και κόστος ανά σταθμό");
          document.getElementById('container2').style = "width: 1000px; height: 400px;";
          // draw chart
          chart.background().fill("#e6eff0");
          chart.palette(anychart.palettes.monochrome);
          chart.barGroupsPadding(0.3);
          chart.interactivity().hoverMode('single');
          chart.legend().enabled(true);
          chart.legend().position("bottom");
          chart.getSeriesAt(0).name("Number of Passes");
          chart.getSeriesAt(1).name("Charge");
          chart.getSeriesAt(0).xPointPosition(0.35);
          chart.getSeriesAt(1).xPointPosition(0.65);
          chart.getSeriesAt(1).tooltip().format('Charge: {%Value}€');

          //chart.tooltip().format('${%Value}{groupsSeparator: }');
          chart.draw();

//Dimiourgia diagrammatos pitas

          var dict = {}
          for(i in list) {
            if (!dict[list[i].StationID]) {
            dict[list[i].StationID] = 1;
          }
            else dict[list[i].StationID] += 1;
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
               "container": "chart2"
             }
           };
           var chart = anychart.fromJson(json);
           document.getElementById('chart2').style = "width: 1000px; height: 400px;"
           // draw chart
           var title2 = chart.title();
            title2.enabled(true);
            title2.text("Ποσοστό συνολικών διελεύσεων ανά σταθμό");
           chart.innerRadius('40%');
           chart.labels().position('outside');
           chart.background().fill("#e6eff0");
          chart.palette(anychart.palettes.monochrome);
           chart.draw();

// Dimiourgia pinaka

         var cols = Headers2(list, selector);

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
     function Headers2(list, selector) {
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
