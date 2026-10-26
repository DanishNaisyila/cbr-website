// Dataset dari artikel (Tabel 2-6). Kunci gejala = "J-Gxxx" (jantung) / "L-Gxxx" (lambung).
var GEJALA_J=[["G001","Dada terasa penuh"],["G002","Detak jantung cepat (tachycardia)"],["G003","Detak jantung lambat (bradycardia)"],["G004","Nyeri pada dada"],["G005","Panas"],["G006","Sesak napas"],["G007","Katup jantung tidak bekerja dengan baik"],["G008","Bunyi jantung abnormal"],["G009","Kebocoran, penyempitan"],["G010","Badan lesu atau lemah"],["G011","Pusing"],["G012","Pingsan (syncope)"],["G013","Katup jantung tanpa lubang"],["G014","Sulit tidur karena gangguan rasa sakit pada daerah perut sebelah atas (ulu hati)"],["G015","Denyut nadi yang lemah dan cepat"]];
var GEJALA_L=[["G001","Mual"],["G002","Muntah"],["G003","Muntah agak asam"],["G004","Muntah darah"],["G005","Panas"],["G006","Sakit perut"],["G007","Buang air besar terus menerus"],["G008","Mulut luka"],["G009","Demam"],["G010","Bibir pecah-pecah"],["G011","Badan lesu atau lemah"],["G012","Perut terasa nyeri, pedih, kembung, dan sesak (sebak) pada bagian atas perut"],["G013","Mulut kering"],["G014","Sering sendawa terutama bila dalam keadaan lapar"],["G015","Sulit tidur karena gangguan rasa sakit pada daerah perut sebelah atas (ulu hati)"],["G016","Bengkak di kedua rahang/pipi"],["G017","Bau nafas tidak sedap"],["G018","Darah dan lendir dalam kotoran"],["G019","Tidak buang air besar lebih dari 3 hari"],["G020","Kehilangan nafsu makan"]];
var GEJALA_NAMA={};
GEJALA_J.forEach(function(g){GEJALA_NAMA["J-"+g[0]]=g[1]});
GEJALA_L.forEach(function(g){GEJALA_NAMA["L-"+g[0]]=g[1]});
function K(t,id,nama,g){return{id:t+"-"+id,tipe:t==="J"?"Jantung":"Lambung",nama:nama,gejala:g.map(function(x){return{kode:t+"-"+x[0],bobot:x[1]}})}}
// bobot null = kosong pada tabel artikel
var KASUS=[
K("J","P001","Gagal Jantung",[["G015",1],["G011",0.6],["G008",0.8]]),
K("J","P002","Heart Valve Disease",[["G013",1],["G009",0.8],["G007",1]]),
K("J","P003","Aritmia",[["G012",1],["G011",0.6],["G006",0.4],["G004",1],["G003",1],["G002",0.4],["G001",0.4]]),
K("J","P004","Perikarditis",[["G008",0.4],["G006",1],["G005",0.4]]),
K("J","P005","Penyakit Jantung Koroner",[["G011",0.4],["G010",0.4]]),
K("L","P001","Gastritis",[["G016",5],["G020",1],["G009",null]]),
K("L","P002","Maag",[["G008",3],["G010",5],["G013",null],["G017",3],["G001",null],["G002",5]]),
K("L","P003","Kanker Lambung",[["G003",null],["G004",1],["G006",1],["G020",3],["G012",5],["G014",5],["G015",5],["G017",1],["G005",1]]),
K("L","P004","Tumor Lambung/Polip Lambung",[["G006",5],["G009",1],["G007",5],["G018",5]]),
K("L","P005","GERD",[["G019",5]])
];
