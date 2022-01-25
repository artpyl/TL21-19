# TL21-19

## Λήψη αρχείων εφαρμογής: 
git clone https://github.com/ntua/TL21-19

## Configuration:
cd TL21-19-master
### Import database:
1. Eγκατάσταση MySql Server και δημιουργία λογαριασμού με όνομα root και κωδικό root.
2. Σύνδεση σε MySql Server και δημιουργία κενού database με όνομα freedomepass:                                                                                                     
cmd:     mysql - u root - p
         (Εισαγωγή κωδικού)                                                                                                                                                         
mysql>   CREATE DATABASE freedomepass;
3. Εντός του φακέλου TL21-19-master/database εκτέλεση στο cmd:                                                                                                                     
mysql -p -u root freedomepass < data-dump.sql

### Εγκατάσταση και εκτέλεση του backend
 cd TL21-19-master/api                                                                                                                                                     
 npm install body-parser, express, path                                                                                                                                                                                                                   
 cd ../backend                                                                                                                                                                   
 npm install express, mysql, json-2-csv                                     
 cd ../api                                                                                                                                                                       
 node ./index.js                                                                                                                                                                   
Επίσκεψη ιστοσελίδας https://localhost:9103/interoperability/api

### Εγκατάσταση και εκτέλεση του cli
 cd TL21-19-master/cli                                                                                                                                                           
 npm install commander, fs, chalk, fast-csv, mysql                                                                                                                               
 npm install -g.                                                                                                                                                                                                                                                                                                                                                   
Εκτέλεση εντολής "se2119" για την εμφάνιση όλων των δυνατών επιλογών.

