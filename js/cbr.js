// Rumus (Gambar 14 artikel): Nilai = Jml Gejala Cocok / Pembagi
// Pembagi = max(Jml Gejala Kasus, Jml Gejala Dipilih)
function hitungCBR(dipilih){
  var hasil=KASUS.map(function(k){
    var cocok=k.gejala.filter(function(g){return dipilih.indexOf(g.kode)>=0}).map(function(g){return g.kode});
    var jmlKasus=k.gejala.length, jmlDipilih=dipilih.length;
    var pembagi=Math.max(jmlKasus,jmlDipilih);
    return {kasus:k,cocok:cocok,jmlCocok:cocok.length,jmlKasus:jmlKasus,jmlDipilih:jmlDipilih,pembagi:pembagi,nilai:cocok.length/pembagi};
  });
  hasil.sort(function(a,b){return b.nilai-a.nilai});
  var maks=hasil[0].nilai;
  hasil.forEach(function(h){h.teratas=(maks>0&&h.nilai===maks)});
  return hasil;
}
if(typeof module!=="undefined"){module.exports={hitungCBR:hitungCBR}}
