async function getJSONPasses3(op1_id,op2_id,d_f,d_t) {
  const response = await fetch('https://localhost:9103/interoperability/api/PassesCost/' + op1_id + '/' + op2_id + '/' + d_f + '/' + d_t +'?format=json');
  return await response.json();
}


function getPasses3(selector) {
  var op1_ID = window.prompt("Enter op1_ID");
  var op2_ID = window.prompt("Enter op2_ID");
  var date_from = window.prompt("Enter start date");
  var date_to = window.prompt("Enter end date");

         var list = getJSONPasses3(op1_ID,op2_ID,date_from,date_to).then(list => {
         // Getting the all column names
         list =[list];


// Dimiourgia pinaka

         var cols = Headers3(list, selector);

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
     function Headers3(list, selector) {
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
