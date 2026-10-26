(function(){
  var p=location.pathname.split('/').pop()||'index.html';
  var alur=['identitas.html','gejala.html','hasil.html'];
  var menu=[['index.html','Beranda'],['identitas.html','Diagnosis'],['dataset.html','Dataset']];
  var aktif=alur.indexOf(p)>=0?'identitas.html':p;

  var main=document.querySelector('main');
  if(main&&!main.id)main.id='konten';
  if(main)main.setAttribute('tabindex','-1');

  var skip=document.createElement('a');
  skip.className='skip';skip.href='#konten';skip.textContent='Lewati ke konten utama';
  document.body.insertBefore(skip,document.body.firstChild);

  var logo='<svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="36" rx="10" fill="#0d5c61"/><path d="M5 19h6l3-7 5 14 4-10 2 3h6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var n=menu.map(function(x){return '<li><a href="'+x[0]+'"'+(x[0]===aktif?' aria-current="page"':'')+'>'+x[1]+'</a></li>'}).join('');
  var h=document.getElementById('header');
  h.className='site-header';
  h.innerHTML='<div class="bar-inner"><a class="brand" href="index.html">'+logo+'<span>Sistem Pakar CBR<small>Penyakit lambung &amp; jantung</small></span></a>'+
    '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu-utama">Menu</button>'+
    '<nav class="site-nav" id="menu-utama" aria-label="Navigasi utama"><ul class="nav-list">'+n+'</ul></nav></div>';
  var tg=h.querySelector('.nav-toggle'),nv=h.querySelector('.site-nav');
  tg.addEventListener('click',function(){var o=nv.classList.toggle('open');tg.setAttribute('aria-expanded',o)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nv.classList.contains('open')){nv.classList.remove('open');tg.setAttribute('aria-expanded','false');tg.focus()}});

  var st=document.getElementById('stepper');
  if(st){
    var i=alur.indexOf(p),lbl=['Identitas','Gejala','Hasil'];
    st.className='stepper';st.setAttribute('aria-label','Tahapan diagnosis');
    st.innerHTML=lbl.map(function(t,k){
      var c=k<i?'done':(k===i?'now':'');
      return '<li class="'+c+'"'+(k===i?' aria-current="step"':'')+'><span class="n" aria-hidden="true">'+(k<i?'&#10003;':k+1)+'</span><span>'+t+(k<i?'<span class="sr-only"> (selesai)</span>':'')+'</span></li>'}).join('');
  }

  var f=document.getElementById('footer');
  f.className='site-footer';
  f.innerHTML='<div class="inner"><p>Berdasarkan: Abdurrahman dkk., SISFO Vol 8 No 1 (2024).</p><p>Hanya alat bantu, bukan pengganti dokter.</p></div>';
})();
