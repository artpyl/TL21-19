const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function resetvehicles (req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "art",
        password: "password",
        database: "freedomepass",
        multipleStatements: true
    });

    con.connect(function(err){
        if (err) throw err;
        console.log("connected");
        let myquery = "DELETE FROM vehicles; INSERT INTO `vehicles` VALUES      ('AT19HLV57173','OO14E0167','OO','2004','olympia_odos'),('AY38OQF67603','OO01A7197','OO','2020','olympia_odos'),('BI87HYL81972','MR98F8272','MR','2020','moreas'),('BK77KNV91142','OO67L7721','OO','2007','olympia_odos'),('BM25PHF40639','AO19M3646','AO','2018','aodos'),('BY85QGR11636','GF64H7689','GF','2018','gefyra'),('BZ76ROL87339','AO94O1451','AO','2017','aodos'),('CK97FAU13897','GF85Z5553','GF','2007','gefyra'),('CM15YCB60994','EG87N4472','EG','2005','egnatia'),('CP56DAO45598','GF96B8067','GF','2017','gefyra'),('CR31GMR97972','EG56V3913','EG','2000','egnatia'),('DO24BCW15511','KO87M8492','KO','2009','kentriki_odos'),('DP11ENT03275','AO11L5271','AO','2008','aodos'),('DV04FQL29609','AO87S8322','AO','2010','aodos'),('DW44ZOO26361','EG74B6896','EG','2009','egnatia'),('EC02LZC49528','EG23G6966','EG','2001','egnatia'),('ED51EWW52190','KO38E3788','KO','2017','kentriki_odos'),('EE22TMX10817','OO29X6651','OO','2001','olympia_odos'),('EG95RTB75032','NE91T5473','NE','2013','nea_odos'),('EM54HQI58682','OO58I4183','OO','2008','olympia_odos'),('EN26OAB52983','GF51E2190','GF','2002','gefyra'),('EV77EDV52985','NE31Q7933','NE','2001','nea_odos'),('EZ65FLV39493','MR55V8401','MR','2012','moreas'),('FL13UMN92207','KO37T8485','KO','2006','kentriki_odos'),('FY47TUN40300','NE43B7275','NE','2002','nea_odos'),('HA82SCK64299','MR30M7731','MR','2001','moreas'),('HE38BQH01623','MR72G8045','MR','2016','moreas'),('HR53SRO94328','MR93N1400','MR','2004','moreas'),('HT62RDI04611','AO69I5108','AO','2000','aodos'),('HW75BKT77773','KO82C5500','KO','2016','kentriki_odos'),('IA29IQS63679','NE83K9493','NE','2010','nea_odos'),('IC95TLY24827','OO65G9691','OO','2020','olympia_odos'),('IN99SEN20660','EG47U1656','EG','2014','egnatia'),('IO09FGE68100','GF87C4626','GF','2015','gefyra'),('IW53OQE31439','EG05B7264','EG','2014','egnatia'),('IX01MVL33676','KO57Z7727','KO','2001','kentriki_odos'),('IZ65WAT29135','MR39O1247','MR','2002','moreas'),('JD78PQD35395','EG13U6715','EG','2002','egnatia'),('JE65QJK64802','GF48M7092','GF','2002','gefyra'),('JF94VYA88954','OO49W8536','OO','2000','olympia_odos'),('JO50FSF60755','KO95P1306','KO','2011','kentriki_odos'),('JV67MTI17124','NE61X5911','NE','2000','nea_odos'),('KB55KTM48860','KO72G8546','KO','2009','kentriki_odos'),('KF48RSD79865','MR56E8319','MR','2012','moreas'),('KW50MJG67260','GF84U4130','GF','2016','gefyra'),('LC72NRN52084','OO85U6024','OO','2001','olympia_odos'),('LG64ARC91224','AO27P4628','AO','2019','aodos'),('LM86GYO69819','GF61W4412','GF','2010','gefyra'),('MA30QLI76818','GF94Q2036','GF','2019','gefyra'),('MP14WFM40909','GF62J1185','GF','2008','gefyra'),('MQ65WJJ60020','KO53F1683','KO','2009','kentriki_odos'),('MU06LHX94338','EG87C3789','EG','2016','egnatia'),('MX39VOS38645','AO12K0807','AO','2018','aodos'),('NO82BAX82566','NE74M6592','NE','2000','nea_odos'),('NY14GZR94632','NE66B0405','NE','2011','nea_odos'),('NZ35XLQ89678','NE71H2256','NE','2015','nea_odos'),('OC94ASJ72024','AO19H6549','AO','2002','aodos'),('OY94SZK34436','NE97X0282','NE','2007','nea_odos'),('PD45WOT56494','NE55G3669','NE','2010','nea_odos'),('PE73VJU23485','AO18S3731','AO','2010','aodos'),('PF04UCA93312','GF84T8932','GF','2007','gefyra'),('PM58XHX45588','NE66N5124','NE','2006','nea_odos'),('QH15HWX24570','MR36J6829','MR','2009','moreas'),('QN12NTR81378','GF26N8608','GF','2003','gefyra'),('QN23UHH39091','MR58R4385','MR','2014','moreas'),('QO68DIC93032','MR26E3126','MR','2016','moreas'),('QO77TFN61853','KO80I5938','KO','2004','kentriki_odos'),('QP02SYE47964','NE74M0871','NE','2010','nea_odos'),('QR03XCJ37459','OO43C8099','OO','2014','olympia_odos'),('QU94IGC75528','EG52J0268','EG','2003','egnatia'),('QW79CHL42244','KO64Z6868','KO','2006','kentriki_odos'),('QX75YWC61835','OO20E8329','OO','2019','olympia_odos'),('RK48BOP88344','OO41Q9202','OO','2016','olympia_odos'),('RR73DWB65452','AO13W1028','AO','2017','aodos'),('RR98KQE80731','MR06V9056','MR','2020','moreas'),('RV87TIY76692','KO69R5975','KO','2001','kentriki_odos'),('SL09NOT64494','GF17K5976','GF','2005','gefyra'),('SU00RDZ36214','AO31K4646','AO','2014','aodos'),('SY96JDQ97089','AO88V0724','AO','2004','aodos'),('TE24LCO18661','EG36L0177','EG','2009','egnatia'),('TV81MAQ99005','EG00X1873','EG','2000','egnatia'),('TZ48CCW54765','EG79G1284','EG','2015','egnatia'),('UA13YTK28483','MR57I0349','MR','2020','moreas'),('UF84JOS00561','GF26E1328','GF','2020','gefyra'),('UO75YNW62238','KO75W9528','KO','2003','kentriki_odos'),('UP28MBM38391','NE09V3603','NE','2010','nea_odos'),('VJ92OYV94295','OO59B1482','OO','2000','olympia_odos'),('VL67TFO75321','EG76E0993','EG','2007','egnatia'),('VX68BAR38623','NE80E5551','NE','2005','nea_odos'),('WG11QVY31890','OO68H9901','OO','2006','olympia_odos'),('WU78BMX13511','GF52G9102','GF','2008','gefyra'),('WY00MLL63827','KO44J2006','KO','2000','kentriki_odos'),('XE59BZM26378','EG47I2811','EG','2020','egnatia'),('XF28DGK65250','GF52T0389','GF','2021','gefyra'),('XV40HUQ04740','OO26V4144','OO','2001','olympia_odos'),('XV91YMP27722','MR63V2295','MR','2012','moreas'),('YH66OKD41942','KO58G5356','KO','2019','kentriki_odos'),('YL27IFD65117','AO49I8807','AO','2006','aodos'),('YX66XYW62640','GF85R2347','GF','2014','gefyra'),('ZY93PCY41868','KO91P5387','KO','2006','kentriki_odos')"
        con.query(myquery, function (err, result, fields){
            if (err) {
              return res.send(JSON.stringify({"status":"failed"}));
            }
            res.send(JSON.stringify({"status":"OK"}));
        });
        con.end(function(err) {
            if (err) {
            return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
        });
    });
}
router.post('/admin/resetvehicles', resetvehicles);
module.exports = router;
