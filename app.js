// ===== Preceptoría ISP — lógica de la app (Etapa 1) =====

const SEED_STUDENTS = [{"id":"a001","apellido":"Leonhardt","nombre":"Luisana","curso":"1","division":"A","familyEmails":["monicafiguero200@gmail.com"]},{"id":"a002","apellido":"Romero Raggini","nombre":"Milena","curso":"1","division":"A","familyEmails":["franci.romero2170@gmail.com","raquelraggini743@gmail.com"]},{"id":"a003","apellido":"Xu","nombre":"Kevin","curso":"1","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a004","apellido":"Tadeo Balladares","nombre":"Aaron Fabricio","curso":"1","division":"A","familyEmails":["mirellaballadares82@gmail.com","tuliotadeo7@gmail.com"]},{"id":"a005","apellido":"Chilabert Denis","nombre":"Kiara","curso":"2","division":"A","familyEmails":["sandradenis@hotmail.com","victorchilabert@gmail.com"]},{"id":"a006","apellido":"Goumas Menendez","nombre":"Helena","curso":"2","division":"A","familyEmails":["anamenendez999@gmail.com"]},{"id":"a007","apellido":"Leng","nombre":"Yihao","curso":"2","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a008","apellido":"Nastar Ferrugia","nombre":"Ivy","curso":"2","division":"A","familyEmails":["alemferruggia@gmail.com","jonatanstr@gmail.com"]},{"id":"a009","apellido":"Salom","nombre":"Ulises","curso":"2","division":"A","familyEmails":["natacha_levin@yahoo.com","natianaropa@gmail.com","salom.matias@gmail.com"]},{"id":"a010","apellido":"Casanova","nombre":"Camila","curso":"3","division":"A","familyEmails":["federico.gustavo.casanova@gmail.com"]},{"id":"a011","apellido":"Choquehuanca","nombre":"Luciana","curso":"3","division":"A","familyEmails":["ro.cardenas1422@gmail.com"]},{"id":"a012","apellido":"Defranco","nombre":"Enzo","curso":"3","division":"A","familyEmails":["adri.altafini@gmail.com"]},{"id":"a013","apellido":"Gutierrez","nombre":"Morena","curso":"3","division":"A","familyEmails":["guillermina.wilson79@gmail.com","hernandgutierrez@yahoo.com.ar"]},{"id":"a014","apellido":"Huang","nombre":"Sofía","curso":"3","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a015","apellido":"Lin","nombre":"Daiana","curso":"3","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a016","apellido":"Lin","nombre":"Sofía","curso":"3","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a017","apellido":"Molinari Vilar","nombre":"Emma","curso":"3","division":"A","familyEmails":["mariasolvilar@gmail.com "]},{"id":"a018","apellido":"Pan","nombre":"Amy","curso":"3","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a019","apellido":"Suarez","nombre":"Tomas","curso":"3","division":"A","familyEmails":["csuarez@visuar.com.ar","valeriakung@gmail.com"]},{"id":"a020","apellido":"Trigoso Flores","nombre":"Soran Yuriana","curso":"3","division":"A","familyEmails":["carolina.isabel.flores2007@gmail.com","cfloresremax@gmail.com","paolotkd@hotmail.com"]},{"id":"a021","apellido":"Villagra Marino","nombre":"Uma","curso":"3","division":"A","familyEmails":["gaby_marinofuhr@hotmail.com"]},{"id":"a022","apellido":"Yan","nombre":"Tomás","curso":"3","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a023","apellido":"Yu","nombre":"Tony","curso":"3","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a024","apellido":"Calviello","nombre":"Tomás","curso":"4","division":"A","familyEmails":["alecalvielo@gmail.com","fnceramica@hotmail.com"]},{"id":"a025","apellido":"Cella","nombre":"Agustín","curso":"4","division":"A","familyEmails":[" pablo.cella@telfu.com","carofm79@gmail.com"]},{"id":"a026","apellido":"Chen","nombre":"Camila","curso":"4","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a027","apellido":"Chen","nombre":"Daniel","curso":"4","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a028","apellido":"Cohen","nombre":"Juana","curso":"4","division":"A","familyEmails":["alancohen10@hotmail.com","pauladelas@hotmail.com"]},{"id":"a029","apellido":"Ferreira Maciel","nombre":"Lucas","curso":"4","division":"A","familyEmails":["alexisferreira@hotmail.com","senspeluqueria@gmail.com"]},{"id":"a030","apellido":"Flores Vargas","nombre":"M. Gabriela","curso":"4","division":"A","familyEmails":["alfredofloresgutierrez@hotmail.com","zcvf1988@gmail.com"]},{"id":"a031","apellido":"Fucile Tommei","nombre":"Franco","curso":"4","division":"A","familyEmails":["julianfucile@hotmail.com"]},{"id":"a032","apellido":"Fuertes","nombre":"Tobias","curso":"4","division":"A","familyEmails":["facundofuertes@gmail.com","vickabueno@hotmail.com"]},{"id":"a033","apellido":"He","nombre":"William","curso":"4","division":"A","familyEmails":["cursotardenuevosol@gmail.com","hechenwu1984@gmail.com"]},{"id":"a034","apellido":"Jian","nombre":"Elías Valentín","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a035","apellido":"Ledesma","nombre":"Federica","curso":"4","division":"A","familyEmails":["eduledesma@gmail.com","monicajusid@gmail.com"]},{"id":"a036","apellido":"Li","nombre":"Benjamín Tomás","curso":"4","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a037","apellido":"Lin","nombre":"Gabino","curso":"4","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a038","apellido":"Lin","nombre":"Lucas","curso":"4","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a039","apellido":"Lu","nombre":"Joana Luciana","curso":"4","division":"A","familyEmails":["lsj15959061355@gmail.com"]},{"id":"a040","apellido":"Piccirillo","nombre":"Julieta","curso":"4","division":"A","familyEmails":["dra.florenciadse@gmail.com"]},{"id":"a041","apellido":"Romero Zamborlin","nombre":"Paz Maria","curso":"4","division":"A","familyEmails":["carozambor@gmail.com"]},{"id":"a042","apellido":"Sanchez Basauri","nombre":"Leyla","curso":"4","division":"A","familyEmails":["sofiabasauri@gmail.com"]},{"id":"a043","apellido":"Santillan","nombre":"Briana","curso":"4","division":"A","familyEmails":["ezequielsantillan57@gmail.com","rosariososa1983@gmail.com"]},{"id":"a044","apellido":"Tamburrino","nombre":"Gael","curso":"4","division":"A","familyEmails":["cristian.tamburrino@bbva.com","jisilvey12@gmail.com"]},{"id":"a045","apellido":"Wu","nombre":"Ailin","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a046","apellido":"Yan","nombre":"Lance","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a047","apellido":"Yan","nombre":"Sofía","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a048","apellido":"Yang","nombre":"Sofia","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a049","apellido":"Yedid","nombre":"Lucas","curso":"4","division":"A","familyEmails":["lookus.ar@gmail.com","lornaszpigiel@gmail.com"]},{"id":"a050","apellido":"Zeng","nombre":"Luciana","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a051","apellido":"Zheng","nombre":"Ruoxi (Agosto)","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a052","apellido":"Zhou","nombre":"kevin","curso":"4","division":"A","familyEmails":["ax8964@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a053","apellido":"Alvarez","nombre":"Renata","curso":"5","division":"A","familyEmails":["valeriaalonso.71@gmail.com"]},{"id":"a054","apellido":"Blanco","nombre":"Delfina","curso":"5","division":"A","familyEmails":["blancojuane@gmail.com","flor.veron311@gmail.com"]},{"id":"a055","apellido":"Blei","nombre":"Sarah","curso":"5","division":"A","familyEmails":["hadaike@gmail.com","matiasblei@gmail.com"]},{"id":"a056","apellido":"Buono","nombre":"Lucas","curso":"5","division":"A","familyEmails":["genoud28@gmail.com","marcelobuono@hotmail.com"]},{"id":"a057","apellido":"Chen","nombre":"Alex","curso":"5","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a058","apellido":"Chen","nombre":"Ariel","curso":"5","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a059","apellido":"Chen","nombre":"Leandro","curso":"5","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a060","apellido":"Chen","nombre":"Luis Ignacio","curso":"5","division":"A","familyEmails":["chengxinxiang@gmail.com"]},{"id":"a061","apellido":"Chen","nombre":"Senjun","curso":"5","division":"A","familyEmails":["chengxinxiang@gmail.com","cursotardenuevosol@gmail.com"]},{"id":"a062","apellido":"Coria","nombre":"Catalina","curso":"5","division":"A","familyEmails":["coria.jm@gmail.com","victoria.lopezseco@gmail.com"]},{"id":"a063","apellido":"García Olivera","nombre":"Zoe","curso":"5","division":"A","familyEmails":["ariel.bellesi@gmail.com","oliverajandrea@gmail.com"]},{"id":"a064","apellido":"Goumas Menendez","nombre":"Maximo","curso":"5","division":"A","familyEmails":["anamenendez999@gmail.com"]},{"id":"a065","apellido":"Grabow","nombre":"Tiago","curso":"5","division":"A","familyEmails":["alofinoventas@gmail.com","verogrob@gmail.com"]},{"id":"a066","apellido":"He Fuyin","nombre":"Berta","curso":"5","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a067","apellido":"Huang","nombre":"Dafne","curso":"5","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a068","apellido":"Huang","nombre":"Facundo","curso":"5","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a069","apellido":"Huang","nombre":"Leandro","curso":"5","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a070","apellido":"Li","nombre":"Enzo Mariano","curso":"5","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a071","apellido":"Li","nombre":"Tomy","curso":"5","division":"A","familyEmails":["cursotardenuevosol@gmail.com"]},{"id":"a072","apellido":"Lin","nombre":"Mónica","curso":"5","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a073","apellido":"Lisogorsky","nombre":"Alan","curso":"5","division":"A","familyEmails":["eal3@hotmail.com","pupestambulsky@gmail.com"]},{"id":"a074","apellido":"Prigione","nombre":"Franco","curso":"5","division":"A","familyEmails":["alejandroprigione@yahoo.com.ar","arcosdelacosta@gmail.com"]},{"id":"a075","apellido":"Riquelme","nombre":"Milagros","curso":"5","division":"A","familyEmails":["mariadelcgimenez@hotmail.com"]},{"id":"a076","apellido":"Rodrigues","nombre":"Arthur","curso":"5","division":"A","familyEmails":["reginaldo.rodrigues@pirelli.com","rodriguesandrea464@gmail.com "]},{"id":"a077","apellido":"Samper","nombre":"Bruno","curso":"5","division":"A","familyEmails":["gustavosamper@gmail.com","mariacarrano2323@gmail.com"]},{"id":"a078","apellido":"Segovia Castro","nombre":"Catalina E.","curso":"5","division":"A","familyEmails":["flor_esp@hotmail.com"]},{"id":"a079","apellido":"Sevilla","nombre":"Tomás","curso":"5","division":"A","familyEmails":["gasevilla10@gmail.com","romiaraceli@gmail.com"]},{"id":"a080","apellido":"Tacconi Rubio","nombre":"Fermin","curso":"5","division":"A","familyEmails":["clamrubio@gmail.com","nicotacconi@hotmail.com"]},{"id":"a081","apellido":"Valdez Iglesias","nombre":"Mariana","curso":"5","division":"A","familyEmails":["carinaiiglesias@gmail.com","nelsonovaldez@gmail.com"]},{"id":"a082","apellido":"Wang","nombre":"Alejo","curso":"5","division":"A","familyEmails":["funeduchfuneduch@gmail.com"]},{"id":"a083","apellido":"Yacón","nombre":"Camila","curso":"5","division":"A","familyEmails":["emilio.yacon@gmail.com","gabycarbone@gmail.com"]}];

const CURSOS = ['1','2','3','4','5'];

const SEED_SCHEDULE = {"1":{"lunes":[{"hour":1,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":2,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":3,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS"]},{"hour":4,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS"]},{"hour":5,"subject":"Lengua y Literatura","teachers":["MARCELA SABBATIELLO"]},{"hour":6,"subject":"Lengua y Literatura","teachers":["MARCELA SABBATIELLO"]},{"hour":7,"subject":"Lengua y Literatura","teachers":["MARCELA SABBATIELLO"]},{"hour":8,"subject":"Geografía","teachers":["DAIANA BORDON"]}],"martes":[{"hour":1,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":2,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":3,"subject":"Lengua y Literatura","teachers":["MARCELA SABBATIELLO"]},{"hour":4,"subject":"Lengua y Literatura","teachers":["MARCELA SABBATIELLO"]},{"hour":5,"subject":"Ed. Tecnológica","teachers":["DIEGO CHILIUTTI"]},{"hour":6,"subject":"Ed. Tecnológica","teachers":["DIEGO CHILIUTTI"]},{"hour":7,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":8,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]}],"miercoles":[{"hour":1,"subject":"Artes","teachers":["JAZMIN STERLE"]},{"hour":2,"subject":"Artes","teachers":["DIEGO CHILIUTTI"]},{"hour":3,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS"]},{"hour":4,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS"]},{"hour":5,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":6,"subject":"Artes","teachers":["JAZMIN STERLE / DIEGO CHILIUTTI"]},{"hour":7,"subject":"Tutoría","teachers":["MARCELA SABBATIELLO"]}],"jueves":[{"hour":1,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":2,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":3,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":4,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":5,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":6,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":7,"subject":"EDI: Metodo.Estudio","teachers":["MELISA CALERO"]},{"hour":8,"subject":"EDI: Metodo.Estudio","teachers":["MELISA CALERO"]}],"viernes":[{"hour":1,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":2,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":3,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS"]},{"hour":4,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS"]},{"hour":5,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":6,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]}]},"2":{"lunes":[{"hour":1,"subject":"Inglés","teachers":["LAURA KLUGER"]},{"hour":2,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]},{"hour":3,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":4,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":5,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":6,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":7,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]}],"martes":[{"hour":1,"subject":"EDI: Escritura","teachers":["MARCELA SABBATIELLO"]},{"hour":2,"subject":"EDI: Escritura","teachers":["MARCELA SABBATIELLO"]},{"hour":3,"subject":"Ed. Tecnológica","teachers":["DIEGO CHILIUTTI"]},{"hour":4,"subject":"Ed. Tecnológica","teachers":["DIEGO CHILIUTTI"]},{"hour":5,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":6,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":7,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":8,"subject":"Historia","teachers":["CARLA ARAUJO"]}],"miercoles":[{"hour":1,"subject":"Inglés","teachers":["LAURA KLUGER"]},{"hour":2,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]},{"hour":3,"subject":"Artes","teachers":["JAZMIN STERLE"]},{"hour":4,"subject":"Artes","teachers":["JAZMIN STERLE","DIEGO CHILIUTTI"]},{"hour":5,"subject":"Artes","teachers":["DIEGO CHILIUTTI"]},{"hour":6,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":7,"subject":"Tutoría","teachers":["MARIANA PANTOJA"]}],"jueves":[{"hour":1,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":2,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":3,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":4,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":5,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":6,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":7,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":8,"subject":"Matemática","teachers":["MARIANA PANTOJA"]}],"viernes":[{"hour":1,"subject":"Inglés","teachers":["LAURA KLUGER","FLORENCIA DEMINICIS"]},{"hour":2,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]},{"hour":3,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":4,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":5,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":6,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":7,"subject":"Geografía","teachers":["DAIANA BORDON"]}]},"3":{"lunes":[{"hour":1,"subject":"Inglés","teachers":["LAURA KLUGER"]},{"hour":2,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]},{"hour":3,"subject":"Tecnologías Info.","teachers":["NICOLAS RAPISARDA"]},{"hour":4,"subject":"Tecnologías Info.","teachers":["NICOLAS RAPISARDA"]},{"hour":5,"subject":"Economía","teachers":["ALFREDO GAMBINI"]},{"hour":6,"subject":"Economía","teachers":["ALFREDO GAMBINI"]},{"hour":7,"subject":"Economía","teachers":["ALFREDO GAMBINI"]}],"martes":[{"hour":1,"subject":"Int. Cs. Soc. y Hum.","teachers":["GUSTAVO AHUMADA"]},{"hour":2,"subject":"Int. Cs. Soc. y Hum.","teachers":["GUSTAVO AHUMADA"]},{"hour":3,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":4,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":5,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":6,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":7,"subject":"Físico Química","teachers":["CAROLINA DOMINGUEZ"]},{"hour":8,"subject":"Físico Química","teachers":["CAROLINA DOMINGUEZ"]}],"miercoles":[{"hour":1,"subject":"Inglés","teachers":["LAURA KLUGER"]},{"hour":2,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]},{"hour":3,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":4,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":5,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":6,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]}],"jueves":[{"hour":1,"subject":"Int. Cs. Soc. y Hum.","teachers":["GUSTAVO AHUMADA"]},{"hour":2,"subject":"Int. Cs. Soc. y Hum.","teachers":["GUSTAVO AHUMADA"]},{"hour":3,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":4,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":5,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":6,"subject":"Matemática","teachers":["MARIANA PANTOJA"]},{"hour":7,"subject":"Físico Química","teachers":["CAROLINA DOMINGUEZ"]},{"hour":8,"subject":"Físico Química","teachers":["CAROLINA DOMINGUEZ"]}],"viernes":[{"hour":1,"subject":"EDI: Comprehension","teachers":["LAURA KLUGER","FLORENCIA DEMINICIS"]},{"hour":2,"subject":"EDI: Comprehension","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]},{"hour":3,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":4,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":5,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":6,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]},{"hour":7,"subject":"Biología","teachers":["MARIUSKA MARTINEZ"]}]},"4":{"lunes":[{"hour":1,"subject":"Tecnologías Info.","teachers":["NICOLAS RAPISARDA"]},{"hour":2,"subject":"Tecnologías Info.","teachers":["NICOLAS RAPISARDA"]},{"hour":3,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":4,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":5,"subject":"Inglés","teachers":["NANCY CASTILLO","FLORENCIA DEMINICIS"]},{"hour":6,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","LAURA KLUGER"]}],"martes":[{"hour":1,"subject":"Arte","teachers":["DIEGO CHILIUTTI"]},{"hour":2,"subject":"Arte","teachers":["DIEGO CHILIUTTI"]},{"hour":3,"subject":"Fisica","teachers":["CAROLINA DOMINGUEZ"]},{"hour":4,"subject":"Fisica","teachers":["CAROLINA DOMINGUEZ"]},{"hour":5,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":6,"subject":"Historia","teachers":["CARLA ARAUJO"]},{"hour":7,"subject":"Sociología","teachers":["GUSTAVO AHUMADA"]},{"hour":8,"subject":"Sociología","teachers":["GUSTAVO AHUMADA"]}],"miercoles":[{"hour":1,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":2,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":3,"subject":"Psicología","teachers":["FABIAN FERULANO"]},{"hour":4,"subject":"Psicología","teachers":["FABIAN FERULANO"]},{"hour":5,"subject":"Inglés","teachers":["LAURA KLUGER","FLORENCIA DEMINICIS"]},{"hour":6,"subject":"Inglés","teachers":["NANCY CASTILLO"]},{"hour":7,"subject":"Fisica","teachers":["CAROLINA DOMINGUEZ"]}],"jueves":[{"hour":1,"subject":"EDI: Metodologia","teachers":["FABIAN FERULANO"]},{"hour":2,"subject":"EDI: Metodologia","teachers":["FABIAN FERULANO"]},{"hour":3,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":4,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":5,"subject":"Sociología","teachers":["GUSTAVO AHUMADA"]},{"hour":6,"subject":"Antropología Cult.","teachers":["GUSTAVO AHUMADA"]},{"hour":7,"subject":"Geografía","teachers":["DAIANA BORDON"]},{"hour":8,"subject":"Geografía","teachers":["DAIANA BORDON"]}],"viernes":[{"hour":1,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":2,"subject":"Form.Etica y Cdad.","teachers":["ROMINA MARTINEZ"]},{"hour":3,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":4,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":5,"subject":"Antropología Cult.","teachers":["GUSTAVO AHUMADA"]},{"hour":6,"subject":"Antropología Cult.","teachers":["GUSTAVO AHUMADA"]},{"hour":7,"subject":"Psicología","teachers":["FABIAN FERULANO"]}]},"5":{"lunes":[{"hour":1,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":2,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":3,"subject":"Sociedad y Estado","teachers":["ROMINA MARTINEZ"]},{"hour":4,"subject":"Sociedad y Estado","teachers":["ROMINA MARTINEZ"]},{"hour":5,"subject":"Inglés","teachers":["LAURA KLUGER","FLORENCIA DEMINICIS"]},{"hour":6,"subject":"Inglés","teachers":["FLORENCIA DEMINICIS","NANCY CASTILLO"]}],"martes":[{"hour":1,"subject":"Tecno. Info. Orienta","teachers":["NICOLAS RAPISARDA"]},{"hour":2,"subject":"Tecno. Info. Orienta","teachers":["NICOLAS RAPISARDA"]},{"hour":3,"subject":"Proyecto","teachers":["NICOLAS RAPISARDA"]},{"hour":4,"subject":"Proyecto","teachers":["NICOLAS RAPISARDA"]},{"hour":5,"subject":"Historia Cult. Latino.","teachers":["GUSTAVO AHUMADA"]},{"hour":6,"subject":"Historia Cult. Latino.","teachers":["GUSTAVO AHUMADA"]},{"hour":7,"subject":"Sociedad y Estado","teachers":["ROMINA MARTINEZ"]},{"hour":8,"subject":"Sociedad y Estado","teachers":["ROMINA MARTINEZ"]}],"miercoles":[{"hour":1,"subject":"Filosofía","teachers":["FABIAN FERULANO"]},{"hour":2,"subject":"Filosofía","teachers":["FABIAN FERULANO"]},{"hour":3,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":4,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":5,"subject":"Inglés","teachers":["LAURA KLUGER","FLORENCIA DEMINICIS"]},{"hour":6,"subject":"Inglés","teachers":["NANCY CASTILLO"]}],"jueves":[{"hour":1,"subject":"Química","teachers":["ANDREA FERNANDEZ"]},{"hour":2,"subject":"Química","teachers":["ANDREA FERNANDEZ"]},{"hour":3,"subject":"Geo.Amb. y Política","teachers":["DAIANA BORDON"]},{"hour":4,"subject":"Geo.Amb. y Política","teachers":["DAIANA BORDON"]},{"hour":5,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":6,"subject":"Lengua y Literatura","teachers":["PAULA POPRITKIN"]},{"hour":7,"subject":"Historia Orientada","teachers":["GUSTAVO AHUMADA"]},{"hour":8,"subject":"Historia Orientada","teachers":["GUSTAVO AHUMADA"]}],"viernes":[{"hour":1,"subject":"Geo.Amb. y Política","teachers":["DAIANA BORDON"]},{"hour":2,"subject":"Geo.Amb. y Política","teachers":["DAIANA BORDON"]},{"hour":3,"subject":"EDI- Tesina","teachers":["ROMINA MARTINEZ"]},{"hour":4,"subject":"EDI- Tesina","teachers":["ROMINA MARTINEZ"]},{"hour":5,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":6,"subject":"Matemática","teachers":["KARIN CROS"]},{"hour":7,"subject":"Química","teachers":["ANDREA FERNANDEZ"]},{"hour":8,"subject":"Química","teachers":["ANDREA FERNANDEZ"]}]}};

const DIAS = ['lunes','martes','miercoles','jueves','viernes'];
const DIA_LABEL = {lunes:'Lunes',martes:'Martes',miercoles:'Miércoles',jueves:'Jueves',viernes:'Viernes'};
const HOUR_TIME = {1:'7:45',2:'8:25',3:'9:20',4:'10:00',5:'10:55',6:'11:35',7:'12:20',8:'13:00'};

// ---------- Firebase ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
  collection, doc, setDoc as _setDoc, deleteDoc as _deleteDoc, addDoc as _addDoc, onSnapshot, getDoc, writeBatch as _writeBatch,
  query, where, getDocs, getDocsFromCache
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, updatePassword as _updatePassword, signOut as _signOut, setPersistence, browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getMessaging, getToken as _getToken, onMessage, isSupported as messagingIsSupported
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js";

// ---------- Modo de prueba (solo Napo) ----------
// Permite ver la app como la ve un docente, un alumno o una cuenta de solo lectura,
// con los datos reales de esa persona pero SIN GUARDAR NADA: todas las escrituras
// pasan por estas funciones y, en modo prueba, no llegan a Firestore.
let modoPrueba = null; // { rol, nombre }
function avisoPrueba(){ try{ showToast('Vista de prueba: no se guardó nada'); }catch(e){} }
function modoPruebaBloquea(){ if(modoPrueba){ avisoPrueba(); return true; } return false; }
function setDoc(...a){ if(modoPrueba){ avisoPrueba(); return Promise.resolve(); } return _setDoc(...a); }
function deleteDoc(...a){ if(modoPrueba){ avisoPrueba(); return Promise.resolve(); } return _deleteDoc(...a); }
function addDoc(...a){ if(modoPrueba){ avisoPrueba(); return Promise.resolve({ id: 'prueba' }); } return _addDoc(...a); }
function writeBatch(...a){
  if(modoPrueba) return { set(){}, update(){}, delete(){}, commit(){ avisoPrueba(); return Promise.resolve(); } };
  return _writeBatch(...a);
}
function updatePassword(...a){ if(modoPrueba){ avisoPrueba(); return Promise.reject(new Error('modo prueba')); } return _updatePassword(...a); }
function getToken(...a){ if(modoPrueba) return Promise.reject(new Error('modo prueba')); return _getToken(...a); }
// "Salir" en la vista de prueba vuelve a tu usuario (no cierra la sesión de verdad).
function signOut(a){ if(modoPrueba && a === auth){ salirModoPrueba(); return Promise.resolve(); } return _signOut(a); }
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-functions.js";

// Clave pública VAPID para notificaciones push (Firebase Console → Configuración del
// proyecto → Cloud Messaging → Certificados push web → "Generar par de claves").
// Sin esto pegado acá, pedir permiso de notificaciones va a fallar en silencio.
const WEB_PUSH_VAPID_KEY = "BFOUEdifFIrmwE5bwy9bc98MWAAqpLGbbFPMymaWxLR8QYvMMIXkWP2JbbH99rNB6eenzN8Mi-WtoDNxWitAobE";

const firebaseConfig = {
  apiKey: "AIzaSyCJXbMkHj9BHtXI2IqHf6YkMx_2YipMXbc",
  authDomain: "app-isp-f601c.firebaseapp.com",
  projectId: "app-isp-f601c",
  storageBucket: "app-isp-f601c.firebasestorage.app",
  messagingSenderId: "1052109436240",
  appId: "1:1052109436240:web:f5e6a49100db6fb85d6855"
};

// ---------- Google Drive / Sheets (sincronización de faltas a las planillas del colegio) ----------
// La sincronización la hace el servidor (Cloud Function "sincronizarDrive") con la cuenta
// robot del proyecto, así que la app ya no inicia sesión con Google.
const DRIVE_ROOT_FOLDER_ID = "1RdXfK8BOS_Tj4RTT-DCcCGMwHSsqBZGt";

const fbApp = initializeApp(firebaseConfig);
const fbFunctions = getFunctions(fbApp, 'southamerica-east1');
const auth = getAuth(fbApp);
setPersistence(auth, browserLocalPersistence).catch(err=>console.error(err));
// App secundaria: se usa SOLO para crear cuentas de profesor sin cerrar la sesión del admin
// (createUserWithEmailAndPassword inicia sesión automáticamente en la app en la que se llama).
const fbAppSecundaria = initializeApp(firebaseConfig, 'secundaria');
const authSecundaria = getAuth(fbAppSecundaria);
setPersistence(authSecundaria, browserLocalPersistence).catch(err=>console.error(err));
let db;
try{
  // Multi-pestaña: con el manejador de una sola pestaña, si la app quedaba abierta
  // en dos lados (por ej. una pestaña del navegador y la app instalada), la segunda
  // se quedaba SIN copia local y volvía a bajar todo de Firestore cada vez.
  db = initializeFirestore(fbApp, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
}catch(e){
  db = initializeFirestore(fbApp, {});
}

function docId(str){ return String(str).replace(/[\/\s]+/g,'_'); }

// ---------- Local-only storage (per device: session flags, cert photos) ----------
const DB = {
  get(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){ return fallback; }
  },
  set(key, val){
    localStorage.setItem(key, JSON.stringify(val));
  }
};
let certImagesLocal = DB.get('isp_cert_images', {});

// ---------- Tema claro / oscuro ----------
// 'auto' sigue al celular; 'claro' u 'oscuro' lo fijan. Se guarda por dispositivo.
// (index.html aplica lo mismo antes de pintar, para que no parpadee al abrir.)
function getTema(){
  const t = DB.get('isp_tema', 'auto');
  return (t === 'claro' || t === 'oscuro') ? t : 'auto';
}
function aplicarTema(){
  const t = getTema();
  if(t === 'auto') document.documentElement.removeAttribute('data-tema');
  else document.documentElement.setAttribute('data-tema', t);
  const oscuro = t === 'oscuro' || (t === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', oscuro ? '#161B23' : '#1F2A3A');
}
function setTema(t){
  DB.set('isp_tema', t);
  aplicarTema();
}
aplicarTema();

// ---------- In-memory cache (mirrors Firestore in real time) ----------
let cache = {
  attendance: {},      // la vista completa que usa toda la app (histórico + en vivo)
  attendanceLive: {},  // lo que llega en tiempo real (bimestre actual)
  attendanceHist: {},  // lo anterior al bimestre actual, se carga una vez por sesión
  sanciones: {},
  substitutions: {},
  ef: {},
  certificados: [],
  autorizaciones: {},
  teachers: {},
  valoraciones: {},
  notas: {},
  viewers: {},
  driveMapping: {},
  tramites: {},
  entregas: {},
  diasSinClase: {},
  students_auth: {},
  students: {},
  schedule: {},
  pendientes: {},
  entradasEspeciales: {},
  _lastSync: {},
  eventos: {},
  config: { entrada:'07:45', toleranciaMin:15, corteFaltaCompleta:'09:00' }
};

// ---------- Asistencia: en vivo lo reciente, el resto desde la copia local ----------
// La colección de asistencia tiene ~12.000 registros y crece todos los días. Tenerla
// entera "en vivo" hacía que cada arranque con la copia local fría se llevara ~12.000
// lecturas de Firestore (el límite gratis son 50.000 por día). Ahora:
//   · en vivo (onSnapshot) va solo el bimestre actual, que es lo que cambia;
//   · lo anterior sale de la copia local del dispositivo (gratis) y solo se vuelve a
//     pedir al servidor cuando de verdad cambió algo viejo. Para saberlo se usa un
//     número de versión guardado en config/general ("histRev"): cada vez que se toca
//     una fecha anterior al bimestre actual se actualiza, y los demás dispositivos lo
//     ven por el listener de configuración que ya existía (1 documento, no 12.000).
// Toda la app sigue viendo cache.attendance completo, así que ningún cálculo cambia.
let INICIO_VIVO = null;
let histAsistenciaListo = false;
let histRevCargada = null;

function refrescarAttendance(){
  cache.attendance = Object.assign({}, cache.attendanceHist, cache.attendanceLive);
}

// Si se toca una fecha anterior al bimestre actual, el listener en vivo no la ve
// (quedó fuera de su ventana), así que se actualiza la copia en memoria a mano para
// que el cambio se vea en el momento. En Firestore ya se guardó igual.
function tocarHistorico(key, data){
  const id = docId(key);
  const fecha = String(key).split('|')[0];
  if(!INICIO_VIVO || fecha >= INICIO_VIVO) return;
  if(data === null) delete cache.attendanceHist[id];
  else cache.attendanceHist[id] = Object.assign({}, cache.attendanceHist[id], data);
  refrescarAttendance();
  marcarHistoricoCambiado();
  render();
}

// Avisa al resto de los dispositivos (y a este mismo en la próxima sesión) que algo
// anterior al bimestre actual cambió, así vuelven a pedir el histórico una sola vez
// en lugar de estar recargándolo cada tanto por las dudas.
let histRevTimer = null;
function marcarHistoricoCambiado(){
  const rev = Date.now();
  histRevCargada = rev;
  const marca = DB.get('isp_hist_asistencia', null);
  if(marca) DB.set('isp_hist_asistencia', Object.assign({}, marca, { rev }));
  // Justificar un certificado de varios días toca muchas fechas viejas seguidas:
  // se espera a que termine la ráfaga y se escribe la versión una sola vez.
  clearTimeout(histRevTimer);
  histRevTimer = setTimeout(() => {
    setDoc(doc(db,'config','general'), { histRev: histRevCargada }, { merge: true }).catch(()=>{});
  }, 1500);
}

// Después de una carga masiva (importar histórico, sincronizar con Drive, migrar)
// se vuelve a pedir el histórico al servidor para no quedar con datos a medias.
async function recargarHistoricoAsistencia(){
  DB.set('isp_hist_asistencia', null);
  histAsistenciaListo = false;
  render();
  const rev = Date.now();
  setDoc(doc(db,'config','general'), { histRev: rev }, { merge: true }).catch(()=>{});
  try{ await cargarHistoricoAsistencia(rev); }
  catch(e){ histAsistenciaListo = true; render(); }
}

let histCargando = false;
async function cargarHistoricoAsistencia(rev){
  // Candado: el listener de config puede disparar dos veces seguidas (por ejemplo al
  // guardar configuración) y sin esto se pedirían 12.000 registros dos veces.
  if(histCargando) return;
  histCargando = true;
  try{
    await traerHistoricoAsistencia(rev);
  } finally {
    histCargando = false;
  }
}

async function traerHistoricoAsistencia(rev){
  // A propósito SIN filtro de fecha: los registros que se importaron en su momento
  // se guardaron sin el campo 'fecha' (la fecha iba solo en el ID del documento), y
  // una consulta por rango los dejaría afuera, borrando de la app meses de historia.
  // Trayendo la colección entera no se puede perder ninguno; lo del bimestre actual
  // que venga repetido lo pisa igual la versión en vivo, que es la más fresca.
  const q = query(collection(db,'attendance'));
  const marca = DB.get('isp_hist_asistencia', null);
  // La copia local sirve si se armó con la misma versión del histórico que la de ahora.
  const vigente = marca && marca.rev === rev;

  let snap = null;
  if(vigente){
    try{
      const local = await getDocsFromCache(q);
      // Y además tiene que traer aproximadamente lo mismo que la última vez que se
      // pidió al servidor: si el navegador la limpió a medias, se rehace.
      if(local.size >= Math.floor((marca.cantidad || 0) * 0.9)) snap = local;
    }catch(e){ /* sin copia local utilizable: se pide al servidor abajo */ }
  }
  if(!snap){
    snap = await getDocs(q);
    DB.set('isp_hist_asistencia', { rev, cantidad: snap.size });
  }
  histRevCargada = rev;

  const hist = {};
  snap.forEach(d => {
    const r = d.data();
    // Lo que el listener en vivo ya cubre no se guarda acá: si no, al borrar una
    // marca del bimestre actual volvería a aparecer desde esta copia vieja.
    if(r.fecha && r.fecha >= INICIO_VIVO) return;
    hist[d.id] = r;
  });
  cache.attendanceHist = hist;
  refrescarAttendance();
  histAsistenciaListo = true;
  render();
}

let listenersIniciados = false;
function startListeners(){
  // Se llama desde las dos ramas de onAuthStateChanged; si se enganchara dos veces
  // quedarían listeners duplicados y Firestore cobraría las lecturas dos veces.
  if(listenersIniciados) return;
  listenersIniciados = true;
  INICIO_VIVO = bimestreActual().from;

  onSnapshot(query(collection(db,'attendance'), where('fecha','>=', INICIO_VIVO)), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.attendanceLive = next;
    refrescarAttendance();
    cache._lastSync.attendance = Date.now();
    render();
  });

  // El histórico no se dispara acá: se carga desde el listener de config/general, que
  // es el que trae la versión (histRev) con la que hay que compararlo.

  onSnapshot(collection(db,'sanciones'), snap => {
    const byStudent = {};
    snap.forEach(d => {
      const data = d.data();
      if(!byStudent[data.studentId]) byStudent[data.studentId] = [];
      byStudent[data.studentId].push({ id: d.id, fecha: data.fecha, motivo: data.motivo, createdAt: data.createdAt||0 });
    });
    Object.keys(byStudent).forEach(sid => {
      byStudent[sid].sort((a,b)=>a.createdAt-b.createdAt);
      byStudent[sid].forEach((item,idx)=>{ item.folio = idx+1; });
    });
    cache.sanciones = byStudent;
    cache._lastSync.sanciones = Date.now();
    render();
  });

  onSnapshot(collection(db,'substitutions'), snap => {
    const next = {};
    snap.forEach(d => {
      const data = d.data();
      if(!next[data.subKey]) next[data.subKey] = {};
      next[data.subKey][data.teacher] = { suplente: data.suplente };
    });
    cache.substitutions = next;
    cache._lastSync.substitutions = Date.now();
    render();
  });

  onSnapshot(collection(db,'ef'), snap => {
    const next = {};
    snap.forEach(d => {
      const data = d.data();
      // Ojo: hay que conservar driveSynced. Antes se guardaba solo el tipo y por eso
      // los registros de Ed. Física figuraban siempre "pendientes" de pasar a Drive,
      // aunque se hubieran sincronizado o marcado como ya sincronizados.
      next[`${data.date}|${data.studentId}`] = { tipo: data.tipo || 'falta', driveSynced: data.driveSynced === true };
    });
    cache.ef = next;
    cache._lastSync.ef = Date.now();
    render();
  });

  onSnapshot(collection(db,'certificados'), snap => {
    const next = [];
    snap.forEach(d => {
      const data = d.data();
      next.push({ id: d.id, studentId: data.studentId, from: data.from, to: data.to, createdAt: data.createdAt||0, fileDataUrl: certImagesLocal[d.id] || null });
    });
    next.sort((a,b)=> a.createdAt - b.createdAt);
    cache.certificados = next;
    cache._lastSync.certificados = Date.now();
    render();
  });

  onSnapshot(collection(db,'autorizaciones'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.autorizaciones = next;
    cache._lastSync.autorizaciones = Date.now();
    render();
  });

  onSnapshot(collection(db,'teachers'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ uid: d.id }, d.data()); });
    cache.teachers = next;
    cache._lastSync.teachers = Date.now();
    render();
  });

  onSnapshot(collection(db,'valoraciones'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.valoraciones = next;
    cache._lastSync.valoraciones = Date.now();
    render();
  });

  onSnapshot(collection(db,'notas'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.notas = next;
    cache._lastSync.notas = Date.now();
    render();
  });

  onSnapshot(collection(db,'entradasEspeciales'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.entradasEspeciales = next;
    cache._lastSync.entradasEspeciales = Date.now();
    render();
  });

  onSnapshot(collection(db,'viewers'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ uid: d.id }, d.data()); });
    cache.viewers = next;
    cache._lastSync.viewers = Date.now();
    render();
  });

  onSnapshot(collection(db,'driveMapping'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.driveMapping = next;
    cache._lastSync.driveMapping = Date.now();
    render();
  });

  onSnapshot(collection(db,'tramites'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ id: d.id }, d.data()); });
    cache.tramites = next;
    cache._lastSync.tramites = Date.now();
    render();
  });

  onSnapshot(collection(db,'entregas'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.entregas = next;
    cache._lastSync.entregas = Date.now();
    render();
  });

  onSnapshot(collection(db,'diasSinClase'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.diasSinClase = next;
    cache._lastSync.diasSinClase = Date.now();
    render();
  });

  onSnapshot(collection(db,'students_auth'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ uid: d.id }, d.data()); });
    cache.students_auth = next;
    cache._lastSync.students_auth = Date.now();
    render();
  });

  onSnapshot(collection(db,'students'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ id: d.id }, d.data()); });
    cache.students = next;
    cache._lastSync.students = Date.now();
    render();
  });

  // Pendientes del preceptor: solo los baja la cuenta de administración (los
  // profesores, cuentas de lectura y alumnos ni siquiera se suscriben).
  if(userRole === 'admin'){
    onSnapshot(collection(db,'pendientes'), snap => {
      const next = {};
      snap.forEach(d => { next[d.id] = Object.assign({ id: d.id }, d.data()); });
      cache.pendientes = next;
      render();
    });
  }

  onSnapshot(collection(db,'schedule'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.schedule = next;
    cache._lastSync.schedule = Date.now();
    render();
  });

  onSnapshot(collection(db,'eventos'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ id: d.id }, d.data()); });
    cache.eventos = next;
    cache._lastSync.eventos = Date.now();
    render();
  });

  const configRef = doc(db,'config','general');
  onSnapshot(configRef, d => {
    if(d.exists()){
      cache.config = d.data();
      cache._lastSync.config = Date.now();
      aplicarConfigDinamica(cache.config);
    }
    render();
    // Primera carga del histórico, y recarga solo si la versión que llega es MÁS
    // NUEVA que la cargada (así el eco de nuestra propia escritura, o un snapshot
    // viejo que llega tarde, no dispara una recarga completa al pedo).
    const rev = (d.exists() && d.data().histRev) || 0;
    if(!histAsistenciaListo || rev > (histRevCargada || 0)){
      cargarHistoricoAsistencia(rev).catch(err => {
        console.error('No se pudo cargar el histórico de asistencia', err);
        histAsistenciaListo = true; // para no dejar el aviso colgado en pantalla
        showToast('No pude cargar el histórico de asistencia. Los totales de bimestres anteriores pueden quedar incompletos.', 'error');
        render();
      });
    }
  });
  getDoc(configRef).then(d => {
    if(!d.exists()) setDoc(configRef, cache.config).catch(()=>{});
  }).catch(()=>{});
}

function aplicarConfigDinamica(cfg){
  if(cfg.bimestres && cfg.bimestres.length === 4) BIMESTRES = cfg.bimestres;
  if(cfg.feriados) FERIADOS_2026 = new Set(cfg.feriados);
  if(typeof cfg.umbralAlerta === 'number') UMBRAL_ALERTA = cfg.umbralAlerta;
  if(typeof cfg.umbralSCP === 'number') UMBRAL_SCP = cfg.umbralSCP;
  if(cfg.horaTiempos) HORA_TIEMPOS = cfg.horaTiempos;
  if(cfg.efHorario) EF_HORARIO = cfg.efHorario;
}

// Mientras no se corrió la migración (botón en Configuración), se sigue usando la
// lista fija SEED_STUDENTS como antes. Una vez migrada, la base real es la colección
// 'students' de Firestore (se puede agregar/quitar alumnos desde la app sin redeploy).
// Los alumnos dados de baja (activo:false) quedan ocultos acá pero su historial de
// asistencia no se toca.
function getStudents(){
  if(Object.keys(cache.students).length){
    return Object.values(cache.students).filter(s => s.activo !== false);
  }
  return SEED_STUDENTS;
}
function getStudentsDeBaja(){
  return Object.values(cache.students).filter(s => s.activo === false);
}
async function migrarAlumnosAFirestore(){
  if(Object.keys(cache.students).length){
    if(!(await customConfirm('Los alumnos ya están migrados a la base de datos. ¿Volver a correr la migración igual? (no debería hacer falta, y no borra ni duplica a los que ya están)'))) return;
  } else {
    if(!(await customConfirm('Esto copia la lista actual de alumnos a la base de datos para que puedas agregar y dar de baja alumnos desde la app. Se hace una sola vez. ¿Continuar?'))) return;
  }
  try{
    await Promise.all(SEED_STUDENTS.map(s => setDoc(doc(db,'students', s.id), {
      apellido: s.apellido, nombre: s.nombre, curso: s.curso, division: s.division||'A',
      familyEmails: s.familyEmails||[], activo: true
    }, { merge: true })));
    await customAlert('Listo, ya podés agregar y dar de baja alumnos desde "Alumnos" en Configuración.');
  }catch(err){ showSaveError(err); }
}
function nuevoStudentId(){
  return 'alu_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
}
async function agregarAlumno(){
  const apellido = await customPrompt('Apellido del alumno:', '');
  if(apellido === null || !apellido.trim()) return;
  const nombre = await customPrompt('Nombre del alumno:', '');
  if(nombre === null || !nombre.trim()) return;
  const curso = await customPrompt('Curso (1 a 5):', '');
  if(curso === null || !CURSOS.includes(curso.trim())) { await customAlert('Curso inválido, tiene que ser 1, 2, 3, 4 o 5.'); return; }
  const mailsTxt = await customPrompt('Mails de la familia, separados por coma (opcional):', '');
  const familyEmails = (mailsTxt||'').split(',').map(e=>e.trim()).filter(Boolean);
  const id = nuevoStudentId();
  try{
    await setDoc(doc(db,'students', id), {
      apellido: apellido.trim(), nombre: nombre.trim(), curso: curso.trim(), division: 'A',
      familyEmails, activo: true
    });
    showToast('Alumno agregado');
  }catch(err){ showSaveError(err); }
}
async function editarAlumno(id){
  const s = cache.students[id];
  if(!s) return;
  const apellido = await customPrompt('Apellido:', s.apellido);
  if(apellido === null || !apellido.trim()) return;
  const nombre = await customPrompt('Nombre:', s.nombre);
  if(nombre === null || !nombre.trim()) return;
  const curso = await customPrompt('Curso (1 a 5):', s.curso);
  if(curso === null || !CURSOS.includes(curso.trim())) { await customAlert('Curso inválido.'); return; }
  const mailsTxt = await customPrompt('Mails de la familia, separados por coma:', (s.familyEmails||[]).join(', '));
  const familyEmails = (mailsTxt||'').split(',').map(e=>e.trim()).filter(Boolean);
  try{
    await setDoc(doc(db,'students', id), {
      apellido: apellido.trim(), nombre: nombre.trim(), curso: curso.trim(), division: s.division||'A',
      familyEmails
    }, { merge: true });
    showToast('Datos actualizados');
  }catch(err){ showSaveError(err); }
}
async function darDeBajaAlumno(id){
  const s = cache.students[id];
  if(!s) return;
  if(!(await customConfirm(`¿Dar de baja a ${s.nombre} ${s.apellido}? No va a aparecer más en los cursos ni en las listas, pero su historial de asistencia y sanciones se conserva. Lo podés reactivar cuando quieras.`, {peligro:true, textoSi:'Dar de baja'}))) return;
  setDoc(doc(db,'students', id), { activo: false }, { merge: true }).catch(err=>showSaveError(err));
}
async function reactivarAlumno(id){
  const s = cache.students[id];
  if(!s) return;
  if(!(await customConfirm(`¿Reactivar a ${s.nombre} ${s.apellido}?`))) return;
  setDoc(doc(db,'students', id), { activo: true }, { merge: true }).catch(err=>showSaveError(err));
}

// ---------- Horario de materias (editable) ----------
// Igual que con los alumnos: mientras no se corrió la migración, se sigue usando
// SEED_SCHEDULE (fijo en el código) tal cual estaba. Una vez migrado, la fuente real
// es la colección 'schedule' de Firestore (un documento por curso, con el horario de
// cada día adentro), así se puede editar sin pedir un redeploy de la app.
function getSchedule(){
  if(Object.keys(cache.schedule).length){
    const merged = {};
    CURSOS.forEach(c => { merged[c] = (cache.schedule[c] && cache.schedule[c].dias) || {}; });
    return merged;
  }
  return SEED_SCHEDULE;
}
async function migrarHorarioAFirestore(){
  if(Object.keys(cache.schedule).length){
    if(!(await customConfirm('El horario ya está migrado a la base de datos. ¿Volver a correr la migración igual? (no debería hacer falta)'))) return;
  } else {
    if(!(await customConfirm('Esto copia el horario actual de materias a la base de datos para que lo puedas editar vos mismo desde la app. Se hace una sola vez y no cambia nada de lo que ya está cargado. ¿Continuar?'))) return;
  }
  try{
    await Promise.all(CURSOS.map(c => setDoc(doc(db,'schedule', c), { dias: SEED_SCHEDULE[c] || {} }, { merge: true })));
    await customAlert('Listo, ya podés editar el horario desde "Horario de materias" en Configuración.');
  }catch(err){ showSaveError(err); }
}
async function guardarHorarioDia(curso, dia, entradas){
  // entradas: [{hour, subject, teachersTxt}], se guardan solo las horas con materia cargada
  const limpio = entradas
    .filter(e => e.subject && e.subject.trim())
    .map(e => ({
      hour: e.hour,
      subject: e.subject.trim(),
      teachers: e.teachersTxt.split(',').map(t=>t.trim().toUpperCase()).filter(Boolean)
    }));
  try{
    await setDoc(doc(db,'schedule', curso), { dias: { [dia]: limpio } }, { merge: true });
    showToast('Horario guardado');
  }catch(err){ showSaveError(err); }
}
function getConfig(){ return cache.config; }
function getPasswordGenerica(){ return (cache.config && cache.config.passwordGenerica) || '123456'; }
function getAttendance(){ return cache.attendance; }
function getEF(){ return cache.ef; }

// ---------- Bimestres 2026 ----------
let BIMESTRES = [
  { n: 1, from: '2026-03-02', to: '2026-05-07' },
  { n: 2, from: '2026-05-08', to: '2026-07-17' },
  { n: 3, from: '2026-08-03', to: '2026-10-02' },
  { n: 4, from: '2026-10-05', to: '2026-12-03' },
];
// Feriados y días sin clase 2026, según el almanaque oficial del colegio
let FERIADOS_2026 = new Set([
  '2026-03-23', // día no laborable turístico (puente)
  '2026-03-24', // Día Nacional de la Memoria
  '2026-04-02', // Malvinas + Jueves Santo
  '2026-04-03', // Viernes Santo
  '2026-05-01', // Día del Trabajador
  '2026-05-25', // Revolución de Mayo
  '2026-06-15', // Paso a la Inmortalidad del Gral. Güemes
  '2026-07-09', // Día de la Independencia
  '2026-07-10', // día no laborable turístico (puente)
  '2026-08-17', // Paso a la Inmortalidad del Gral. San Martín
  '2026-09-11', // Día del Maestro (sin clases en el colegio)
  '2026-09-21', // Día del Estudiante (sin clases en el colegio)
  '2026-10-12', // Día del Respeto a la Diversidad Cultural
  '2026-11-23', // Día de la Soberanía Nacional
]);
function bimestreDe(fechaISO){
  return BIMESTRES.find(b => fechaISO >= b.from && fechaISO <= b.to) || null;
}
function bimestreActual(){
  return bimestreDe(todayISO()) || BIMESTRES[BIMESTRES.length-1];
}

// ---------- Motor de faltas por materia ----------
function subjectsForDay(curso, diaKey){
  const entries = (getSchedule()[curso] && getSchedule()[curso][diaKey]) || [];
  return [...new Set(entries.map(e => e.subject))];
}
function eachDateInRange(fromISO, toISO){
  const out = [];
  let d = new Date(fromISO+'T00:00:00');
  const end = new Date(toISO+'T00:00:00');
  while(d<=end){
    const iso = d.toISOString().slice(0,10);
    if(!FERIADOS_2026.has(iso)) out.push(iso);
    d.setDate(d.getDate()+1);
  }
  return out;
}
function diaKeyFor(dateISO){
  const map = {1:'lunes',2:'martes',3:'miercoles',4:'jueves',5:'viernes'};
  return map[new Date(dateISO+'T00:00:00').getDay()] || null;
}

// ---------- Retiros anticipados ----------
// Un retiro solo vale si el alumno estuvo ese día (P, T o TJ). Suma media falta al
// total ponderado del bimestre y cuenta como falta en cada materia que no terminó de
// cursar (se fue antes de que esa hora terminara) — el espejo de la llegada tarde, que
// cuenta las materias que ya habían empezado cuando llegó.
function tieneRetiro(rec){
  return !!(rec && rec.retiro && rec.retiro.hora && rec.estado !== 'A' && rec.estado !== 'J');
}
function pesoRetiro(rec){ return tieneRetiro(rec) ? 0.5 : 0; }
function horaPerdidaPorRetiro(rec, hour){
  const t = HORA_TIEMPOS[hour];
  return tieneRetiro(rec) && !!t && minutesOf(rec.retiro.hora) < minutesOf(t[1]);
}
function efPerdidaPorRetiro(rec, curso){
  const b = EF_HORARIO.find(x => x.cursos.includes(curso));
  return tieneRetiro(rec) && !!b && minutesOf(rec.retiro.hora) < minutesOf(b.fin);
}

// ¿Esa hora no se dictó porque faltó el/la docente? Solo si faltan TODOS los docentes del
// bloque (en Inglés por niveles o Artes en pareja, si falta uno la clase igual se dio) y
// ninguno tiene suplente cargado (con suplente la clase se dictó).
const _cacheBloques = {};
function horaSinDocente(fecha, curso, diaKey, hour){
  const porFecha = cache.substitutions;
  const k = `${curso}|${diaKey}`;
  const sched = (getSchedule()[curso] && getSchedule()[curso][diaKey]) || [];
  if(!_cacheBloques[k] || _cacheBloques[k].src !== sched) _cacheBloques[k] = { src: sched, blocks: buildBlocks(sched) };
  const b = _cacheBloques[k].blocks.find(x => hour >= x.startHour && hour <= x.endHour);
  if(!b || !b.teachers.length) return false;
  const rec = porFecha[`${fecha}|${curso}|${diaKey}|${b.startHour}`];
  if(!rec) return false;
  return b.teachers.every(t => rec[t] && !(rec[t].suplente || '').trim());
}

function computeMateriaStats(studentId, bim){
  const student = getStudents().find(s => s.id === studentId);
  const curso = student.curso;
  const dates = eachDateInRange(bim.from, bim.to);
  const stats = {};
  const att = getAttendance();
  const efCountedDates = new Set();

  dates.forEach(iso => {
    if(getDiaSinClase(iso, curso)) return; // VCF, paro, etc.: no hubo clase, no cuenta ni suma
    const diaKey = diaKeyFor(iso);
    if(!diaKey) return;
    const subjects = subjectsForDay(curso, diaKey);
    const rec = att[`${iso}|${studentId}`];
    const isFullAbsence = rec && (rec.estado==='A' || rec.estado==='J') && !rec.exencion && !rec.llegoTarde;
    // Tarde justificada (TJ, alumno con autorización) no suma al total de faltas, pero
    // las materias que ya habían empezado cuando llegó sí cuentan como falta en esa materia.
    const isParcial = rec && rec.hora && (rec.estado==='T' || rec.estado==='TJ' || (rec.estado==='A' && rec.llegoTarde && !rec.exencion));
    const isRetiro = tieneRetiro(rec);

    subjects.forEach(subj => {
      // Las horas en que faltó el/la docente no cuentan: ni como clase ni como falta.
      const entries = (getSchedule()[curso][diaKey]||[]).filter(e => e.subject === subj && !horaSinDocente(iso, curso, diaKey, e.hour));
      if(!entries.length) return;
      if(!stats[subj]) stats[subj] = { faltas:0, total:0 };
      stats[subj].total++;
      if(isFullAbsence){
        stats[subj].faltas++;
      } else if(isParcial || isRetiro){
        const perdida = entries.some(e => {
          const startTime = HOUR_TIME[e.hour];
          const porLlegada = isParcial && startTime && minutesOf(startTime) < minutesOf(rec.hora);
          return porLlegada || horaPerdidaPorRetiro(rec, e.hour);
        });
        if(perdida) stats[subj].faltas++;
      }
    });

    // Educación Física: martes y jueves, fuera de la grilla horaria común a todos los cursos
    if(diaKey === 'martes' || diaKey === 'jueves'){
      if(!stats['ED FIS']) stats['ED FIS'] = { faltas:0, total:0 };
      stats['ED FIS'].total++;
      if(isFullAbsence || efPerdidaPorRetiro(rec, curso)){
        stats['ED FIS'].faltas++;
        efCountedDates.add(iso);
      }
    }
  });

  Object.entries(getEF()).forEach(([key, val]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== studentId || fecha < bim.from || fecha > bim.to) return;
    if(val.tipo === 'falta' && !efCountedDates.has(fecha) && stats['ED FIS']){
      stats['ED FIS'].faltas++;
    }
  });

  return stats;
}

function computeAbsenceWeights(range){
  const r = range || bimestreActual();
  const att = getAttendance();
  const weights = {};
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(r && (fecha < r.from || fecha > r.to)) return;
    if(rec.exencion) return; // VDE u otra exención: no suma
    let w = 0;
    if(rec.estado === 'A' || rec.estado === 'J') w = 1; // justificada sigue sumando, el certificado queda como respaldo
    else if(rec.estado === 'T') w = 0.5;
    w += pesoRetiro(rec);
    if(w>0) weights[sid] = (weights[sid]||0) + w;
  });
  Object.entries(getEF()).forEach(([key, val]) => {
    const [fecha, sid] = key.split('|');
    if(r && (fecha < r.from || fecha > r.to)) return;
    if(val && val.tipo === 'falta') weights[sid] = (weights[sid]||0) + 0.5;
    // SAF: permiso autorizado, no suma
  });
  return weights;
}

function computeFechaAlerta(studentId, range){
  const r = range || bimestreActual();
  const att = getAttendance();
  const eventos = [];
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== studentId) return;
    if(r && (fecha < r.from || fecha > r.to)) return;
    if(rec.exencion) return;
    let w = 0;
    if(rec.estado === 'A' || rec.estado === 'J') w = 1;
    else if(rec.estado === 'T') w = 0.5;
    w += pesoRetiro(rec);
    if(w>0) eventos.push({ fecha, w });
  });
  Object.entries(getEF()).forEach(([key, val]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== studentId) return;
    if(r && (fecha < r.from || fecha > r.to)) return;
    if(val && val.tipo === 'falta') eventos.push({ fecha, w: 0.5 });
  });
  eventos.sort((a,b)=> a.fecha.localeCompare(b.fecha));
  let acumulado = 0;
  for(const ev of eventos){
    acumulado += ev.w;
    if(acumulado >= UMBRAL_ALERTA) return ev.fecha;
  }
  return null;
}


// Peso de un registro de asistencia en el total de faltas (mismo criterio en toda la app):
// ausente o justificada 1, tarde 0,5, tarde justificada nada, retiro anticipado +0,5.
function pesoAsistencia(rec){
  if(!rec || rec.exencion) return 0;
  let w = 0;
  if(rec.estado === 'A' || rec.estado === 'J') w = 1;
  else if(rec.estado === 'T') w = 0.5;
  return w + pesoRetiro(rec);
}

// Cuántas faltas más puede tener en una materia antes de quedar debajo del 85% anual.
// El total cuenta todas las clases del año (también las que faltan dar), así que el
// número es "si de acá a diciembre no falta más que esto, no queda SCP".
// Negativo = ya se pasó (está en SCP) por esa cantidad.
const CERCA_SCP = 2;
function faltasRestantes(st){
  if(!st || !st.total) return null;
  return Math.floor((1 - UMBRAL_SCP) * st.total + 1e-9) - st.faltas;
}
function textoRestantes(r){
  if(r === null) return '';
  if(r > 1) return `le quedan ${r} faltas`;
  if(r === 1) return 'le queda 1 falta';
  if(r === 0) return 'no puede faltar más';
  return `se pasó por ${-r} ${-r === 1 ? 'falta' : 'faltas'}`;
}

function todayISO(){
  return localISODate(new Date());
}
function localISODate(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function maxFechaSeleccionable(){
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return localISODate(d);
}
function nowHHMM(){
  const d = new Date();
  return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
}
const DOW = ['dom','lun','mar','mié','jue','vie','sáb'];
const DOW_FULL = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const MONTHS = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];

function fmtDateStamp(){
  const d = new Date();
  return { dow: DOW[d.getDay()].toUpperCase(), dom: d.getDate(), mon: MONTHS[d.getMonth()] };
}
function fmtDateLong(fechaISO){
  const d = fechaISO ? new Date(fechaISO+'T00:00:00') : new Date();
  return `${DOW_FULL[d.getDay()]} ${d.getDate()} de ${['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'][d.getMonth()]}`;
}

// ---------- Attendance logic ----------
function minutesOf(hhmm){
  const [h,m] = hhmm.split(':').map(Number);
  return h*60+m;
}

function getAutorizaciones(){ return cache.autorizaciones || {}; }

function getEntradaEspecial(fecha, curso){
  return cache.entradasEspeciales[docId(`${fecha}_${curso}`)] || null;
}
async function definirEntradaEspecial(fecha, curso){
  const actual = getEntradaEspecial(fecha, curso);
  const horaTope = await customPrompt(`Entrada especial para ${curso}° A el ${fecha}.\n\nHasta qué hora entran sin que cuente tarde/ausente (HH:MM):`, actual ? actual.horaTope : '09:20');
  if(!horaTope) return;
  if(!/^\d{2}:\d{2}$/.test(horaTope)){ await customAlert('Formato inválido. Usá HH:MM.'); return; }
  const motivo = await customPrompt('Motivo (para tu registro, opcional):', actual ? actual.motivo : '');
  setDoc(doc(db,'entradasEspeciales', docId(`${fecha}_${curso}`)), { fecha, curso, horaTope, motivo: motivo||'', autor: getUsuario() })
    .catch(err=>showSaveError(err));
}
async function borrarEntradaEspecial(fecha, curso){
  if(!(await customConfirm('¿Sacar la entrada especial de este curso para este día?'))) return;
  deleteDoc(doc(db,'entradasEspeciales', docId(`${fecha}_${curso}`))).catch(err=>showSaveError(err));
}

function getDiaSinClase(fecha, curso){
  return cache.diasSinClase[docId(`${fecha}_${curso}`)] || null;
}
async function definirDiaSinClase(fecha, curso){
  const actual = getDiaSinClase(fecha, curso);
  const motivo = await customPrompt(`Marcar ${curso}° A el ${fecha} como día sin clase (ej: VCF, paro).\n\nMotivo:`, actual ? actual.motivo : 'VCF');
  if(motivo === null || !motivo.trim()) return;
  setDoc(doc(db,'diasSinClase', docId(`${fecha}_${curso}`)), { fecha, curso, motivo: motivo.trim(), autor: getUsuario() })
    .catch(err=>showSaveError(err));
}
async function borrarDiaSinClase(fecha, curso){
  if(!(await customConfirm('¿Sacar la marca de "día sin clase" de este curso para este día?'))) return;
  deleteDoc(doc(db,'diasSinClase', docId(`${fecha}_${curso}`))).catch(err=>showSaveError(err));
}

function estadoParaHora(hora, cfg, studentId, curso, fecha, esManual){
  // La "entrada especial" da margen cuando se marca con el botón P usando la
  // hora real del reloj (puede ser que la demora sea del preceptor, no del
  // alumno). Pero si la hora se escribió a mano con el relojito (esManual),
  // es la hora real de llegada de ESE alumno, así que se evalúa con las
  // reglas normales — si no, un alumno que llegó tarde de verdad podría
  // quedar como "Presente" solo por caer dentro del margen de la especial.
  const especial = (!esManual && curso && fecha) ? getEntradaEspecial(fecha, curso) : null;
  if(especial && minutesOf(hora) <= minutesOf(especial.horaTope)){
    return { estado: 'P', hora };
  }
  const auth = getAutorizaciones()[studentId];
  if(auth && auth.activa && minutesOf(hora) <= minutesOf(auth.horaTope)){
    return { estado: 'TJ', hora };
  }
  if(minutesOf(hora) > minutesOf(cfg.corteFaltaCompleta)){
    return { estado: 'A', hora, llegoTarde: true };
  }
  if(minutesOf(hora) > (minutesOf(cfg.entrada) + cfg.toleranciaMin)){
    return { estado: 'T', hora };
  }
  return { estado: 'P', hora };
}

let selectedFecha = todayISO();
let ultimaAccionPulso = null;

function animateCounts(){
  document.querySelectorAll('.count-num').forEach(el => {
    const target = Number(el.dataset.target) || 0;
    const dur = 450;
    const t0 = performance.now();
    function paso(now){
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if(p < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  });
}

function writeAttendance(key, data){
  const [fechaK, studentIdK] = key.split('|');
  const payload = Object.assign({ autor: getUsuario(), studentId: studentIdK, fecha: fechaK }, data);
  // Al corregir la hora de llegada (o cualquier otro cambio que no hable del retiro),
  // el retiro que ya estaba cargado se conserva. Si pasa a ausente, se descarta solo.
  const prev = cache.attendance[key];
  if(!('retiro' in data) && prev && prev.retiro && data.estado !== 'A' && data.estado !== 'J'){
    payload.retiro = prev.retiro;
  }
  setDoc(doc(db,'attendance',docId(key)), payload).catch(err=>showSaveError(err));
  tocarHistorico(key, payload);
}

async function editarRetiro(studentId, fecha){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const rec = cache.attendance[key];
  if(rec && (rec.estado === 'A' || rec.estado === 'J')){
    await customAlert('Está marcado ausente ese día. Para cargar un retiro primero tiene que figurar como presente.');
    return;
  }
  const actual = rec && rec.retiro ? rec.retiro : null;
  const sugerida = actual ? actual.hora : (fecha === todayISO() ? nowHHMM() : '');
  const hora = await customPrompt(
    actual ? 'Hora del retiro (HH:MM). Dejá vacío para sacar el retiro:' : 'Hora del retiro (HH:MM):',
    sugerida
  );
  if(hora === null) return;
  const h = hora.trim();
  if(!h){
    if(actual) writeAttendance(key, Object.assign({}, rec, { retiro: null }));
    return;
  }
  if(!/^\d{1,2}:\d{2}$/.test(h)){ await customAlert('Formato inválido. Usá HH:MM, por ejemplo 11:30.'); return; }
  const horaNorm = h.padStart(5, '0');
  const motivo = await customPrompt('Motivo (opcional):', actual ? (actual.motivo || '') : '');
  if(motivo === null) return;
  // Si no tenía nada cargado, estuvo presente: se marca P sin hora (no se usa la hora
  // actual para no dejarlo como "tarde" por cargar el retiro a media mañana).
  const base = rec ? Object.assign({}, rec) : { estado: 'P', hora: null };
  writeAttendance(key, Object.assign(base, { retiro: { hora: horaNorm, motivo: motivo.trim() } }));
  showToast('Retiro cargado');
}

function markPresente(studentId, fecha, curso){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const rec = cache.attendance[key];
  if(rec && (rec.estado==='P' || rec.estado==='T' || rec.estado==='TJ')){
    deleteDoc(doc(db,'attendance',docId(key))).catch(err=>showSaveError(err));
    tocarHistorico(key, null);
    return;
  }
  ultimaAccionPulso = { studentId };
  const cfg = getConfig();
  if(fecha === todayISO()){
    writeAttendance(key, estadoParaHora(nowHHMM(), cfg, studentId, curso, fecha));
  } else {
    writeAttendance(key, { estado: 'P', hora: null });
  }
}
function markAusente(studentId, fecha){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const rec = cache.attendance[key];
  // "J" (ausente justificada, viene de un certificado) se trata igual que "A"
  // para el toggle: tocar de nuevo el botón lo desmarca del todo, en vez de
  // pisarlo con un "A" sin justificar y perder la justificación.
  if(rec && (rec.estado==='A' || rec.estado==='J')){
    deleteDoc(doc(db,'attendance',docId(key))).catch(err=>showSaveError(err));
    tocarHistorico(key, null);
    return;
  }
  ultimaAccionPulso = { studentId };
  writeAttendance(key, { estado: 'A', hora: null });
}

async function marcarTodosPresentes(){
  const students = getStudents().filter(s => s.curso === selectedCurso);
  const sinMarcar = students.filter(s => !cache.attendance[`${selectedFecha}|${s.id}`]);
  if(!sinMarcar.length){ await customAlert('Ya está todo marcado para este curso en este día.'); return; }
  const n = sinMarcar.length;
  if(!(await customConfirm(`Se va a marcar como Presente a ${n} alumno${n>1?'s':''} que todavía no tenían nada cargado hoy. Los que ya tienen Ausente, Tarde u otra marca no se tocan. ¿Confirmás?`))) return;
  const cfg = getConfig();
  const esHoy = selectedFecha === todayISO();
  sinMarcar.forEach(s => {
    const key = `${selectedFecha}|${s.id}`;
    writeAttendance(key, esHoy ? estadoParaHora(nowHHMM(), cfg, s.id, selectedCurso, selectedFecha) : { estado: 'P', hora: null });
  });
  showToast(`${n} alumno${n>1?'s':''} marcado${n>1?'s':''} presente${n>1?'s':''}`);
}

async function marcarExencion(studentId, fecha){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const rec = cache.attendance[key];
  if(!rec || rec.estado !== 'A') return;
  const actual = rec.exencion || '';
  const valor = await customPrompt('¿Exención? (ej: VDE). Dejar vacío para que cuente como falta normal:', actual);
  if(valor === null) return;
  const nuevo = Object.assign({}, rec);
  if(valor.trim()) nuevo.exencion = valor.trim().toUpperCase();
  else delete nuevo.exencion;
  writeAttendance(key, nuevo);
}
async function editHora(studentId, fecha, curso){
  fecha = fecha || selectedFecha;
  const cfg = getConfig();
  const key = `${fecha}|${studentId}`;
  const current = cache.attendance[key] && cache.attendance[key].hora ? cache.attendance[key].hora : cfg.entrada;
  const nueva = await customPrompt('Hora de llegada (HH:MM):', current, 'time');
  if(!nueva) return;
  if(!/^\d{2}:\d{2}$/.test(nueva)){ await customAlert('Formato inválido. Usá HH:MM.'); return; }
  writeAttendance(key, estadoParaHora(nueva, cfg, studentId, curso, fecha, true));
}

async function toggleEF(studentId, fecha){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const current = cache.ef[key] ? cache.ef[key].tipo : null;
  const ref = doc(db,'ef', docId(`${fecha}_${studentId}`));
  if(current === null){
    setDoc(ref, { date: fecha, studentId, tipo: 'falta', autor: getUsuario() }).catch(err=>showSaveError(err));
  } else if(current === 'falta'){
    const b = bimestreDe(fecha) || bimestreActual();
    const used = countSAFenBimestre(studentId, b);
    if(used >= 1 && !(await customConfirm('Esta alumna ya usó su SAF de este bimestre. ¿Marcar igual?'))){
      deleteDoc(ref).catch(()=>{});
      return;
    }
    setDoc(ref, { date: fecha, studentId, tipo: 'saf', autor: getUsuario() }).catch(err=>showSaveError(err));
  } else {
    deleteDoc(ref).catch(err=>showSaveError(err));
  }
}

// Autorización de tardanza: horario hasta el que entra sin tardanza (queda TJ) y motivo.
// Se puede agregar, editar (horario y/o motivo, sin cerrarla) o cerrar.
async function pedirDatosAutorizacion(actual){
  const horaTope = await customPrompt('Entra sin tardanza hasta (HH:MM):', actual ? actual.horaTope : '09:00');
  if(horaTope === null) return null;
  const h = horaTope.trim();
  if(!/^\d{1,2}:\d{2}$/.test(h)){ await customAlert('Formato inválido. Usá HH:MM, por ejemplo 09:30.'); return null; }
  const motivo = await customPrompt('Motivo (ej: Médico, Deportivo, Transporte). Puede quedar vacío:', actual ? (actual.motivo || '') : '');
  if(motivo === null) return null;
  return { horaTope: h.padStart(5, '0'), motivo: motivo.trim() };
}
async function agregarAutorizacion(studentId){
  if(modoPruebaBloquea()) return;
  const datos = await pedirDatosAutorizacion(null);
  if(!datos) return;
  setDoc(doc(db,'autorizaciones',studentId), Object.assign(datos, { activa:true, desde: todayISO(), autor: getUsuario() }))
    .catch(err=>showSaveError(err));
}
async function editarAutorizacion(studentId){
  if(modoPruebaBloquea()) return;
  const auth = getAutorizaciones()[studentId];
  if(!auth) return agregarAutorizacion(studentId);
  const datos = await pedirDatosAutorizacion(auth);
  if(!datos) return;
  setDoc(doc(db,'autorizaciones',studentId), Object.assign({}, auth, datos, { modificada: todayISO(), autor: getUsuario() }))
    .catch(err=>showSaveError(err));
}
async function cerrarAutorizacion(studentId){
  if(modoPruebaBloquea()) return;
  const auth = getAutorizaciones()[studentId];
  if(!auth) return;
  if(await customConfirm(`¿Cerrar la autorización (hasta ${auth.horaTope})? Desde mañana las llegadas tarde vuelven a contar normal.`, { textoSi: 'Cerrar', peligro: true })){
    setDoc(doc(db,'autorizaciones',studentId), Object.assign({}, auth, { activa:false, hasta: todayISO() }))
      .catch(err=>showSaveError(err));
  }
}

// ---------- Horarios y suplencias ----------

let HORA_TIEMPOS = {
  1: ['07:45','08:25'], 2: ['08:25','09:05'],
  3: ['09:20','10:00'], 4: ['10:00','10:40'],
  5: ['10:55','11:35'], 6: ['11:35','12:15'],
  7: ['12:20','13:00'], 8: ['13:00','13:40'],
};
let EF_HORARIO = [
  { cursos: ['1','2','3'], inicio: '14:20', fin: '15:20' },
  { cursos: ['4','5'], inicio: '15:25', fin: '16:25' },
];

function horaBlockLabel(startHour, endHour){
  const t1 = HORA_TIEMPOS[startHour];
  const t2 = HORA_TIEMPOS[endHour];
  const horaTexto = startHour === endHour ? `${startHour}ª hs` : `${startHour}-${endHour}ª hs`;
  const tiempoTexto = (t1 && t2) ? `${t1[0]} a ${t2[1]}` : '';
  return { horaTexto, tiempoTexto };
}

function buildBlocks(dayEntries){
  const blocks = [];
  dayEntries.forEach(entry => {
    const key = entry.subject + '|' + entry.teachers.join(',');
    const last = blocks[blocks.length-1];
    if(last && last.key === key && entry.hour === last.endHour + 1){
      last.endHour = entry.hour;
    } else {
      blocks.push({ startHour: entry.hour, endHour: entry.hour, subject: entry.subject, teachers: entry.teachers, key });
    }
  });
  return blocks;
}

function todayDiaKey(){
  const idx = new Date().getDay(); // 0=domingo
  const map = {1:'lunes',2:'martes',3:'miercoles',4:'jueves',5:'viernes'};
  return map[idx] || 'lunes';
}

let selectedDia = todayDiaKey();

function getSubstitutions(){ return cache.substitutions; }
async function toggleSuplencia(subKey, teacherName){
  const existing = cache.substitutions[subKey] && cache.substitutions[subKey][teacherName];
  const ref = doc(db,'substitutions', docId(`${subKey}__${teacherName}`));
  if(existing){
    deleteDoc(ref).catch(err=>showSaveError(err));
    // Si se destoggle la primera hora, también se sacan las horas posteriores que se
    // habían marcado solas por la cascada (nunca las que el preceptor cargó aparte).
    const [fechaDel, , diaDel, startHourDelStr] = subKey.split('|');
    if(Number(startHourDelStr) === 1){
      CURSOS.forEach(curso2 => {
        const dayEntries2 = (getSchedule()[curso2] && getSchedule()[curso2][diaDel]) || [];
        buildBlocks(dayEntries2).forEach(b2 => {
          if(b2.startHour <= 1) return;
          if(!b2.teachers.includes(teacherName)) return;
          const subKey2 = `${fechaDel}|${curso2}|${diaDel}|${b2.startHour}`;
          const rec2 = cache.substitutions[subKey2] && cache.substitutions[subKey2][teacherName];
          if(rec2 && rec2.cascada){
            deleteDoc(doc(db,'substitutions', docId(`${subKey2}__${teacherName}`))).catch(err=>showSaveError(err));
          }
        });
      });
    }
    return;
  }
  const suplente = await customPrompt(`${teacherName} — marcar ausente.\n\nNombre del suplente (dejar vacío si no hay):`, '');
  if(suplente === null) return;
  setDoc(ref, { subKey, teacher: teacherName, suplente: suplente.trim(), autor: getUsuario() }).catch(err=>showSaveError(err));

  // Si es la primera hora del día y no hay suplente, ofrece entrada especial para ese curso
  const [fecha, curso, dia, startHourStr] = subKey.split('|');
  const startHour = Number(startHourStr);
  if(startHour === 1 && !suplente.trim()){
    const horaTope = await customPrompt(`Como falta el/la profesor/a de la primera hora, ¿los alumnos de ${curso}° A pueden entrar más tarde hoy? Hasta qué hora (HH:MM), o dejar vacío si no corresponde:`, '');
    if(horaTope && /^\d{2}:\d{2}$/.test(horaTope)){
      setDoc(doc(db,'entradasEspeciales', docId(`${fecha}_${curso}`)), { fecha, curso, horaTope, motivo: `Ausencia de ${teacherName}`, autor: getUsuario() })
        .catch(err=>showSaveError(err));
    }
  }

  // Cascada: si falta desde la primera hora, se asume que falta todo el día y se marca
  // ausente automáticamente en el resto de sus horas de esa jornada (en cualquier curso),
  // sin pisar ninguna hora que ya tenga una suplencia cargada aparte.
  if(startHour === 1){
    CURSOS.forEach(curso2 => {
      const dayEntries2 = (getSchedule()[curso2] && getSchedule()[curso2][dia]) || [];
      buildBlocks(dayEntries2).forEach(b2 => {
        if(b2.startHour <= startHour) return;
        if(!b2.teachers.includes(teacherName)) return;
        const subKey2 = `${fecha}|${curso2}|${dia}|${b2.startHour}`;
        if(cache.substitutions[subKey2] && cache.substitutions[subKey2][teacherName]) return;
        setDoc(doc(db,'substitutions', docId(`${subKey2}__${teacherName}`)), {
          subKey: subKey2, teacher: teacherName, suplente: suplente.trim(), autor: getUsuario(), cascada: true
        }).catch(err=>showSaveError(err));
      });
    });
  }
}

function renderHorarios(){
  const dayEntries = (getSchedule()[selectedCurso] && getSchedule()[selectedCurso][selectedDia]) || [];
  const blocks = buildBlocks(dayEntries);
  const subs = getSubstitutions();
  const dateKey = todayISO();

  const rows = blocks.map(b => {
    const { horaTexto, tiempoTexto } = horaBlockLabel(b.startHour, b.endHour);
    const subKey = `${dateKey}|${selectedCurso}|${selectedDia}|${b.startHour}`;
    const isShared = b.teachers.length > 1;

    const teacherRows = b.teachers.map(t => {
      const state = subs[subKey] && subs[subKey][t];
      const nameClass = state ? 'ausente' : '';
      const label = state
        ? (state.suplente ? `Suplente: ${state.suplente}` : 'Ausente · sin suplente')
        : t;
      return `<div class="teacher-line ${nameClass}" data-subkey="${subKey}" data-teacher="${t}">
        <span>${label}</span>
        <span class="chevron">${icon('chevron')}</span>
      </div>`;
    }).join('');

    return `
      <div class="hour-block ${isShared?'shared':''}">
        <div class="hour-head">
          <span class="hour-label">${horaTexto}</span>
          <div class="hour-info">
            <p class="subject">${b.subject}</p>
            ${tiempoTexto ? `<p class="hour-time-wide">${tiempoTexto}</p>` : ''}
            ${isShared ? '<p class="submeta">Grupo compartido</p>' : ''}
          </div>
        </div>
        <div class="teacher-list">${teacherRows}</div>
      </div>`;
  }).join('');

  const efBloque = (selectedDia === 'martes' || selectedDia === 'jueves')
    ? EF_HORARIO.find(b => b.cursos.includes(selectedCurso))
    : null;
  const efRow = efBloque ? `
    <div class="hour-block">
      <div class="hour-head">
        <span class="hour-label">Ed. Física</span>
        <div class="hour-info">
          <p class="subject">Educación Física</p>
          <p class="hour-time-wide">${efBloque.inicio} a ${efBloque.fin}</p>
        </div>
      </div>
    </div>` : '';

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Horarios y suplencias</h1>
    </div>
    <div class="course-picker">
      ${cursoBtns(CURSOS)}
      ${pillBtnRow('dia', DIAS.map(d => ({value:d, label:DIA_LABEL[d].slice(0,3)})), selectedDia)}
    </div>
    ${(blocks.length || efRow) ? `<div class="hour-list">${rows}${efRow}</div>` : `<div class="empty-state"><h2>Sin clases</h2><p>No hay horario cargado para este día.</p></div>`}
    <button class="btn-secondary" id="ausentismoBtn" style="width:100%;margin-top:16px;">Ver ausentismo docente</button>
  `;

  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  attachPillBtns('dia', (d) => { selectedDia = d; render(); });
  document.querySelectorAll('.teacher-line').forEach(el => {
    el.addEventListener('click', () => toggleSuplencia(el.dataset.subkey, el.dataset.teacher));
  });
  document.getElementById('ausentismoBtn').addEventListener('click', () => navigate('ausentismoDocente'));
}

function renderAusentismoDocente(){
  // Se cuenta por DÍA, no por cada hora/curso marcado: si un profesor da clase en
  // varios cursos el mismo día y falta, es 1 sola ausencia (aunque haya varios
  // registros de suplencia ese día, uno por curso/hora — incluida la cascada
  // automática del resto de sus horas). Para que se pueda verificar a simple vista,
  // se muestran también las fechas concretas de cada uno (tocando "ver fechas").
  const diasPorProfesor = {};
  Object.entries(cache.substitutions).forEach(([subKey, porProfesor]) => {
    const fecha = subKey.split('|')[0];
    Object.keys(porProfesor).forEach(nombre => {
      if(!diasPorProfesor[nombre]) diasPorProfesor[nombre] = new Set();
      diasPorProfesor[nombre].add(fecha);
    });
  });
  const lista = Object.entries(diasPorProfesor)
    .map(([nombre, fechas]) => [nombre, [...fechas].sort().reverse()])
    .sort((a,b)=> b[1].length-a[1].length);
  const rows = lista.map(([nombre, fechas]) => `
    <div class="sancion-item">
      <p class="folio">${nombre}</p>
      <p class="motivo">${fechas.length} ${fechas.length===1?'día de ausencia registrado':'días de ausencia registrados'}</p>
      <details style="margin-top:4px;">
        <summary style="font-size:11.5px;color:var(--ink-soft);cursor:pointer;">Ver fechas</summary>
        <p style="font-size:12px;color:var(--ink-soft);margin-top:4px;">${fechas.map(f=>fmtDateShort(f)).join(' · ')}</p>
      </details>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Ausentismo docente</h1>
    </div>
    <p class="info-note" style="margin-top:0;">${icon('info')}Cuenta los días que marcaste a cada profesor/a como ausente en "Horarios y suplencias" (un día cuenta una sola vez, aunque dicte en varios cursos), desde que empezaste a usar la app. Tocá "Ver fechas" para revisar cuáles son.</p>
    ${lista.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Todavía no marcaste ninguna ausencia docente.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('horarios'));
}

// ---------- Rendering ----------
const $app = document.getElementById('main');
let currentRoute = 'home';
let selectedCurso = '1';

function renderStudentHorario(){
  const curso = currentStudentAuth.curso;
  window.__studentDia = window.__studentDia || diaKeyFor(todayISO()) || 'lunes';
  const dayEntries = (getSchedule()[curso] && getSchedule()[curso][window.__studentDia]) || [];
  const blocks = buildBlocks(dayEntries);
  const subs = getSubstitutions();
  const dateKey = todayISO();

  const rows = blocks.map(b => {
    const { horaTexto, tiempoTexto } = horaBlockLabel(b.startHour, b.endHour);
    const subKey = `${dateKey}|${curso}|${window.__studentDia}|${b.startHour}`;
    const isShared = b.teachers.length > 1;
    const teacherRows = b.teachers.map(t => {
      const state = subs[subKey] && subs[subKey][t];
      const label = state ? (state.suplente ? `Suplente: ${state.suplente}` : 'Ausente · sin suplente') : t;
      return `<div class="teacher-line" style="cursor:default;"><span>${label}</span></div>`;
    }).join('');
    return `
      <div class="hour-block ${isShared?'shared':''}">
        <div class="hour-head">
          <span class="hour-label">${horaTexto}</span>
          <div class="hour-info">
            <p class="subject">${b.subject}</p>
            ${tiempoTexto ? `<p class="hour-time-wide">${tiempoTexto}</p>` : ''}
            ${isShared ? '<p class="submeta">Grupo compartido</p>' : ''}
          </div>
        </div>
        <div class="teacher-list">${teacherRows}</div>
      </div>`;
  }).join('');

  const efBloque = (window.__studentDia === 'martes' || window.__studentDia === 'jueves')
    ? EF_HORARIO.find(b => b.cursos.includes(curso))
    : null;
  const efRow = efBloque ? `
    <div class="hour-block">
      <div class="hour-head">
        <span class="hour-label">Ed. Física</span>
        <div class="hour-info">
          <p class="subject">Educación Física</p>
          <p class="hour-time-wide">${efBloque.inicio} a ${efBloque.fin}</p>
        </div>
      </div>
    </div>` : '';

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Mi horario</h1>
    </div>
    <div class="course-picker">
      ${pillBtnRow('diaAlumno', DIAS.map(d => ({value:d, label:DIA_LABEL[d].slice(0,3)})), window.__studentDia)}
    </div>
    ${(blocks.length || efRow) ? `<div class="hour-list">${rows}${efRow}</div>` : `<div class="empty-state"><h2>Sin clases</h2><p>No hay horario cargado para este día.</p></div>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('studentHome'));
  attachPillBtns('diaAlumno', (d) => { window.__studentDia = d; render(); });
}

function icon(name){
  const icons = {
    money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v.01M18 14v.01"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M20.8 8.6c0-3-2.2-5.1-5-5.1-1.6 0-3.1.8-3.8 2.1-.7-1.3-2.2-2.1-3.8-2.1-2.8 0-5 2.1-5 5.1 0 5.6 8.8 10.4 8.8 10.4s8.8-4.8 8.8-10.4z"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/><path d="M9 11h6M9 15h4"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3l10 18H2L12 3z"/><path d="M12 10v4M12 17h.01"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1"/><circle cx="10" cy="7" r="3.2"/><path d="M22 20v-1a3.5 3.5 0 00-2.5-3.36M16 3.6a3.5 3.5 0 010 6.8"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M9 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M15 19l-7-7 7-7"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    salida: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4"/><path d="M10 16l-4-4 4-4"/><path d="M6 12h10"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="14.5" cy="5" r="1.8"/><path d="M9 21l2-5 3 1 3 5M6 14l3-3 2-4 4 2 3-1M9 12L7 9"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  };
  return icons[name] || '';
}

let navHistory = [];
// Foto de cada pantalla que se dejó atrás (va a la par de navHistory). Se usa para
// mostrarla de fondo mientras se desliza con el dedo para volver.
let navFotos = [];
function fotoPantalla(){
  if(!$app || !$app.firstElementChild) return null;
  const rect = $app.getBoundingClientRect();
  const f = $app.cloneNode(true);
  f.removeAttribute('id');
  f.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
  f.classList.remove('fade-in', 'slide-adelante', 'slide-atras', 'arrastrando', 'volviendo-lugar');
  // Al volver, la pantalla aparece desde arriba de todo: la foto también.
  return { nodo: f, top: rect.top + window.scrollY };
}

// Sombra del encabezado fijo solo cuando ya quedó pegado arriba (al scrollear).
window.addEventListener('scroll', () => {
  const el = document.querySelector('.sticky-head');
  if(el) el.classList.toggle('pegado', window.scrollY > 4);
}, { passive: true });

// Animación que corresponde al próximo render: 'adelante' (entrar a una pantalla),
// 'atras' (volver) o 'tab' (cambiar de pestaña abajo). Los renders que no cambian de
// pantalla (llega un dato nuevo, se toca un botón) no animan nada.
let pendingTransicion = null;
let primerRenderHecho = false;

function navigate(route, params, transicion){
  if(currentRoute !== route) pendingTransicion = transicion || 'adelante';
  // Al entrar a asistencia diaria desde otro lado, siempre arranca en el día real de hoy
  // (evita quedarse pegado en una fecha vieja si la app quedó abierta de un día para el otro)
  if(route === 'asistencia' && currentRoute !== 'asistencia'){
    selectedFecha = todayISO();
  }
  if(currentRoute && currentRoute !== route){
    navHistory.push(currentRoute);
    navFotos.push(fotoPantalla());
    // Solo se guardan las fotos de las últimas pantallas (para no gastar memoria).
    if(navFotos.length > 6) navFotos[navFotos.length - 7] = null;
    lastFocusedInput = null; // al cambiar de pantalla, que no reaparezca el teclado de la anterior
  }
  currentRoute = route;
  if(params && params.curso) selectedCurso = params.curso;
  render();
  window.scrollTo(0,0);
}

function goBack(fallback){
  pendingTransicion = 'atras';
  const prev = navHistory.pop();
  navFotos.pop();
  currentRoute = prev || fallback || 'home';
  lastFocusedInput = null;
  render();
  window.scrollTo(0,0);
}

function customConfirm(msg, opciones){
  opciones = opciones || {};
  const textoSi = opciones.textoSi || 'Confirmar';
  const peligro = opciones.peligro || false;
  return new Promise(resolve => {
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('modalExtra').innerHTML = '';
    document.getElementById('modalBtns').innerHTML = `
      <button class="btn-secondary" id="modalCancelBtn">Cancelar</button>
      <button class="btn-primary" id="modalOkBtn" style="${peligro?'background:var(--stamp);':''}">${textoSi}</button>
    `;
    function cerrar(resultado){
      overlay.classList.remove('show');
      document.getElementById('modalOkBtn').removeEventListener('click', onOk);
      document.getElementById('modalCancelBtn').removeEventListener('click', onCancel);
      resolve(resultado);
    }
    function onOk(){ cerrar(true); }
    function onCancel(){ cerrar(false); }
    document.getElementById('modalOkBtn').addEventListener('click', onOk);
    document.getElementById('modalCancelBtn').addEventListener('click', onCancel);
    overlay.classList.add('show');
  });
}

function customAlert(msg){
  return new Promise(resolve => {
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('modalExtra').innerHTML = '';
    document.getElementById('modalBtns').innerHTML = `<button class="btn-primary" id="modalOkBtn">Entendido</button>`;
    function cerrar(){
      overlay.classList.remove('show');
      document.getElementById('modalOkBtn').removeEventListener('click', onOk);
      resolve();
    }
    function onOk(){ cerrar(); }
    document.getElementById('modalOkBtn').addEventListener('click', onOk);
    overlay.classList.add('show');
  });
}

function customPrompt(msg, valorInicial, inputType){
  return new Promise(resolve => {
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalMsg').textContent = msg;
    const esHora = inputType === 'time';
    // Para horas usamos un input de texto con teclado numérico (no el <input type="time">
    // nativo: en iOS ese widget ignora el estilo del modal y se ve roto/gigante). Con
    // inputmode="numeric" sale el teclado de números, y el ":" se inserta solo.
    document.getElementById('modalExtra').innerHTML = esHora
      ? `<input type="text" inputmode="numeric" maxlength="5" placeholder="07:45" id="modalInput" value="${valorInicial||''}" style="margin-bottom:14px;text-align:center;letter-spacing:1px;">`
      : `<input type="text" id="modalInput" value="${valorInicial||''}" style="margin-bottom:14px;">`;
    document.getElementById('modalBtns').innerHTML = `
      <button class="btn-secondary" id="modalCancelBtn">Cancelar</button>
      <button class="btn-primary" id="modalOkBtn">Aceptar</button>
    `;
    const input = document.getElementById('modalInput');
    function onHoraInput(){
      let digits = input.value.replace(/\D/g,'').slice(0,4);
      if(digits.length >= 3) input.value = digits.slice(0,2) + ':' + digits.slice(2);
      else input.value = digits;
    }
    if(esHora) input.addEventListener('input', onHoraInput);
    function cerrar(resultado){
      overlay.classList.remove('show');
      document.getElementById('modalOkBtn').removeEventListener('click', onOk);
      document.getElementById('modalCancelBtn').removeEventListener('click', onCancel);
      input.removeEventListener('keydown', onKey);
      if(esHora) input.removeEventListener('input', onHoraInput);
      resolve(resultado);
    }
    function onOk(){ cerrar(input.value.trim()); }
    function onCancel(){ cerrar(null); }
    function onKey(e){ if(e.key === 'Enter') onOk(); }
    document.getElementById('modalOkBtn').addEventListener('click', onOk);
    document.getElementById('modalCancelBtn').addEventListener('click', onCancel);
    input.addEventListener('keydown', onKey);
    overlay.classList.add('show');
    setTimeout(() => input.focus(), 50);
  });
}

function showToast(msg, tipo){
  const t = document.getElementById('toast');
  const esError = tipo === 'error';
  t.innerHTML = `${icon(esError?'alert':'check')}<span>${msg}</span>`;
  t.className = 'toast show' + (esError ? ' error' : '');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), esError ? 4000 : 1800);
}

// Aviso visible cuando un guardado falla (en vez de fallar en silencio en la consola).
function showSaveError(err){
  console.error(err);
  showToast('No se pudo guardar. Revisá tu conexión e intentá de nuevo.', 'error');
}

// ---------- Indicador de conexión ----------
let isOnline = navigator.onLine;
function updateOnlineBanner(){
  const b = document.getElementById('offlineBanner');
  if(!b) return;
  if(isOnline) b.classList.remove('show'); else b.classList.add('show');
}
window.addEventListener('online', () => { isOnline = true; updateOnlineBanner(); showToast('Conexión recuperada'); });
window.addEventListener('offline', () => { isOnline = false; updateOnlineBanner(); showToast('Sin conexión. Los cambios se guardarán cuando vuelva internet.', 'error'); });

// ---------- Notificaciones push (agenda: nuevo evento, 1 semana, 1 día) ----------
let messagingInstance = null;

async function initMessagingForegroundHandler(){
  try{
    if(!(await messagingIsSupported())) return;
    if(!messagingInstance) messagingInstance = getMessaging(fbApp);
    onMessage(messagingInstance, (payload) => {
      const titulo = (payload.notification && payload.notification.title) || (payload.data && payload.data.titulo) || 'Instituto Superior Porteño';
      const cuerpo = (payload.notification && payload.notification.body) || (payload.data && payload.data.cuerpo) || '';
      showToast(`${titulo}${cuerpo ? ' — '+cuerpo : ''}`);
    });
  }catch(e){ console.error(e); }
}

async function activarNotificaciones(mostrarErrores){
  if(userRole !== 'admin' && userRole !== 'teacher' && userRole !== 'student') return;
  if(userRole === 'teacher' && !currentTeacher) return;
  if(userRole === 'student' && !currentStudentAuth) return;
  if(!('Notification' in window) || !('serviceWorker' in navigator)){
    if(mostrarErrores) await customAlert('Este navegador no soporta notificaciones.');
    return;
  }
  if(Notification.permission === 'denied'){
    if(mostrarErrores) await customAlert('Tenés las notificaciones bloqueadas para esta app en el navegador. Para activarlas, habilitalas manualmente desde la configuración del sitio.');
    return;
  }
  try{
    const soportado = await messagingIsSupported();
    if(!soportado){
      if(mostrarErrores) await customAlert('Este navegador no soporta notificaciones push.');
      return;
    }
    const permiso = await Notification.requestPermission();
    if(permiso !== 'granted') return;
    if(!messagingInstance) messagingInstance = getMessaging(fbApp);
    const reg = await navigator.serviceWorker.ready;
    const token = await getToken(messagingInstance, { vapidKey: WEB_PUSH_VAPID_KEY, serviceWorkerRegistration: reg });
    if(!token) return;
    const uid = userRole === 'student' ? currentStudentAuth.uid : (userRole === 'teacher' ? currentTeacher.uid : auth.currentUser.uid);
    const datosRol = userRole === 'student'
      ? { curso: currentStudentAuth.curso, studentId: currentStudentAuth.studentId }
      : userRole === 'teacher'
        ? { cursos: currentTeacher.cursos||[], materias: currentTeacher.materias||[] }
        : {};
    await setDoc(doc(db,'fcmTokens', uid), Object.assign({ token, role: userRole, updatedAt: Date.now() }, datosRol));
    if(mostrarErrores){ showToast('Notificaciones activadas'); render(); }
  }catch(err){ if(mostrarErrores) showSaveError(err); else console.error(err); }
}

function notifStatusBannerHtml(){
  if(!('Notification' in window) || !('serviceWorker' in navigator)) return '';
  if(Notification.permission === 'denied'){
    return `<div class="aviso-banner">${icon('alert')}<span>Tenés las notificaciones bloqueadas para esta app en el navegador. Activalas manualmente para recibir avisos.</span></div>`;
  }
  if(Notification.permission === 'granted') return '';
  const texto = userRole==='admin'
    ? 'Activá las notificaciones para enterarte al instante si un alumno entra en alerta por faltas, además de los avisos de la agenda.'
    : userRole==='teacher'
      ? 'Activá las notificaciones para que te avisemos si se te vence cargar valoraciones o notas, además de los avisos de la agenda.'
      : 'Activá las notificaciones para enterarte de exámenes, TPs y otros eventos aunque no tengas la app abierta.';
  return `<div class="aviso-banner nuevo" style="flex-direction:column;align-items:stretch;">
    <div style="display:flex;gap:8px;">${icon('calendar')}<span>${texto}</span></div>
    <button class="btn-primary" id="activarNotifBtn" style="margin-top:8px;">Activar notificaciones</button>
  </div>`;
}

function renderHome(){
  const students = getStudents();
  const att = getAttendance();
  const today = todayISO();
  if(selectedFecha < today) selectedFecha = today;
  let presentCount = 0, totalMarked = 0;
  students.forEach(s => {
    const rec = att[`${today}|${s.id}`];
    if(rec){ totalMarked++; if(rec.estado !== 'A') presentCount++; }
  });

  // Alert: students with >=5 weighted absences (tardanza=0.5, falta completa=1, Ed. Física=0.5)
  const weights = computeAbsenceWeights();
  const alertCount = Object.values(weights).filter(c => c >= UMBRAL_ALERTA).length;

  const stamp = fmtDateStamp();
  const horaActual = new Date().getHours();
  const saludo = horaActual < 12 ? 'Buen día' : (horaActual < 20 ? 'Buenas tardes' : 'Buenas noches');

  $app.innerHTML = `
    <div class="greeting-row">
      <div>
        <p class="hi">${saludo}</p>
        <p class="name">${getUsuario()}</p>
      </div>
      <div class="stamp">
        <div class="dow">${stamp.dow}</div>
        <div class="dom">${stamp.dom}</div>
        <div class="mon">${stamp.mon}</div>
      </div>
    </div>

    <div class="stat-grid" style="${Object.keys(getTramites()).length ? 'grid-template-columns:1fr 1fr 1fr;' : ''}">
      <div class="stat-card" id="cardAsistenciaHoy" style="cursor:pointer;">
        <p class="label">Asistencia hoy</p>
        <p class="value"><span class="count-num" data-target="${presentCount}">0</span><span class="sub"> / ${totalMarked || 0}</span></p>
      </div>
      <div class="stat-card ${alertCount>0?'alert':''}" id="cardAlertas" style="cursor:pointer;">
        <p class="label">Alumnos en alerta</p>
        <p class="value"><span class="count-num" data-target="${alertCount}">0</span></p>
      </div>
      ${(() => {
        const tramites = Object.values(getTramites());
        if(!tramites.length) return '';
        let pend = 0;
        tramites.forEach(t => {
          const students = getStudents().filter(s => t.cursos.includes(s.curso));
          students.forEach(s => t.items.forEach(it => {
            const e = getEntrega(t.id, s.id, it.key);
            if(!e || (!e.entregado && !e.exento)) pend++;
          }));
        });
        return `<div class="stat-card ${pend>0?'alert':''}" id="cardTramites" style="cursor:pointer;">
          <p class="label">Entregas pendientes</p>
          <p class="value"><span class="count-num" data-target="${pend}">0</span></p>
        </div>`;
      })()}
    </div>

    </div>

    ${(() => {
      const hoy = todayISO();
      const en5dias = new Date(); en5dias.setDate(en5dias.getDate()+5);
      const limite = localISODate(en5dias);
      const proximos = Object.values(getTramites()).filter(t => {
        if(!t.fechaLimite || t.fechaLimite < hoy || t.fechaLimite > limite) return false;
        const students = getStudents().filter(s => t.cursos.includes(s.curso));
        return students.some(s => t.items.some(it => { const e = getEntrega(t.id, s.id, it.key); return !e || (!e.entregado && !e.exento); }));
      });
      if(!proximos.length) return '';
      return `<div class="alert-banner" style="background:var(--gold-bg);border-left-color:var(--gold);">
        <p class="alert-text" style="color:var(--gold);">${proximos.map(t => `"${t.nombre}" vence el ${fmtDateShort(t.fechaLimite)} y todavía hay pendientes`).join('<br>')}</p>
      </div>`;
    })()}

    ${notifStatusBannerHtml()}

    <div class="module-grid">
      ${moduleTile('clipboard','Asistencia diaria','asistencia')}
      ${moduleTile('alert','Sanciones','sanciones')}
      ${moduleTile('file','Justificativos','justificativos')}
      ${moduleTile('money','Entregas y trámites','tramites')}
      ${moduleTile('calendar','Horarios y suplencias','horarios')}
      ${moduleTile('calendar','Calendario del ciclo','calendarioCiclo')}
      ${moduleTile('clipboard','Agenda','agenda')}
      ${moduleTile('users','Familias','familias')}
      ${moduleTile('chart','Resumen del alumno','resumen')}
      ${moduleTile('chart','Vista por curso','vistaCurso')}
      ${moduleTile('chart','Vista general','vistaGeneral')}
      ${moduleTile('file','Valoraciones','valoraciones')}
      ${moduleTile('check','Notas','notas')}
      ${getUsuario()==='Napo' ? moduleTile('bell','Pendientes','pendientes', Object.values(cache.pendientes).filter(p=>!p.notificado).length) : ''}
    </div>
  `;
  attachModuleHandlers();
  if(document.getElementById('activarNotifBtn')){
    document.getElementById('activarNotifBtn').addEventListener('click', () => activarNotificaciones(true));
  }
  document.getElementById('cardAsistenciaHoy').addEventListener('click', () => navigate('detalleAsistenciaHoy'));
  document.getElementById('cardAlertas').addEventListener('click', () => navigate('detalleAlertas'));
  if(document.getElementById('cardTramites')){
    document.getElementById('cardTramites').addEventListener('click', () => navigate('tramites'));
  }
  animateCounts();
}

async function cerrarSesionAdmin(){
  if(!(await customConfirm('¿Cerrar sesión? Vas a tener que volver a ingresar el mail y la contraseña.'))) return;
  localStorage.removeItem('isp_usuario');
  signOut(auth);
}

function renderDetalleAsistenciaHoy(){
  const students = getStudents();
  const att = getAttendance();
  const today = todayISO();
  const ausentes = students.filter(s => {
    const rec = att[`${today}|${s.id}`];
    return rec && rec.estado === 'A';
  }).sort((a,b)=> Number(a.curso)-Number(b.curso) || a.apellido.localeCompare(b.apellido));

  const rows = ausentes.map(s => `
    <div class="sancion-item">
      <p class="folio"><span class="curso-chip c${s.curso}">${s.curso}°</span> ${s.apellido}, ${s.nombre}</p>
      ${(att[`${today}|${s.id}`].exencion) ? `<p class="motivo">Exenta (${att[`${today}|${s.id}`].exencion})</p>` : ''}
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Ausentes hoy</h1>
    </div>
    <p class="date-label">${fmtDateLong()}</p>
    ${ausentes.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Nadie marcado como ausente todavía.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
}

function renderDetalleAlertas(){
  const students = getStudents();
  const weights = computeAbsenceWeights();
  const bim = bimestreActual();
  const alertados = students.filter(s => (weights[s.id]||0) >= UMBRAL_ALERTA)
    .map(s => Object.assign({}, s, { fechaAlerta: computeFechaAlerta(s.id, bim) }))
    .sort((a,b)=> (Number(a.curso)-Number(b.curso)) || ((weights[b.id]||0)-(weights[a.id]||0)));

  const rows = alertados.map(s => `
      <div class="sancion-item">
        <p class="folio"><span class="curso-chip c${s.curso}">${s.curso}°</span> ${s.apellido}, ${s.nombre}</p>
        <p class="motivo">En alerta desde el ${s.fechaAlerta ? fmtDateShort(s.fechaAlerta) : '—'}</p>
        <p class="motivo">${weights[s.id]} faltas del bimestre</p>
      </div>
    `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Alumnos en alerta</h1>
    </div>
    <p class="date-label">${bim.n}° bimestre · 5 o más faltas · por curso</p>
    ${alertados.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Nadie llegó a 5 faltas este bimestre.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
}

// ---------- Importar histórico ----------
async function ejecutarImportacion(data){
  const ops = [];
  (data.attendance||[]).forEach(ev => {
    // Ojo: fecha y studentId tienen que ir SIEMPRE como campos, no solo dentro del
    // ID del documento, porque las consultas por rango de fechas (la app y la
    // revisión diaria de faltas) filtran por el campo 'fecha'.
    const payload = { estado: ev.estado, hora: ev.hora || null, fecha: ev.fecha, studentId: ev.studentId, autor: 'Importación histórica' };
    if(ev.exencion) payload.exencion = ev.exencion;
    ops.push({ type:'set', ref: doc(db,'attendance', docId(`${ev.fecha}|${ev.studentId}`)), data: payload });
  });
  (data.ef||[]).forEach(ev => {
    ops.push({ type:'set', ref: doc(db,'ef', docId(`${ev.fecha}_${ev.studentId}`)), data: { date: ev.fecha, studentId: ev.studentId, tipo: ev.tipo, autor: 'Importación histórica' } });
  });
  (data.autorizaciones||[]).forEach(a => {
    ops.push({ type:'set', ref: doc(db,'autorizaciones', a.studentId), data: { motivo: a.motivo, horaTope: a.horaTope, activa: a.activa, desde: a.desde, autor: 'Importación histórica' } });
  });
  (data.sanciones||[]).forEach((s, idx) => {
    const createdAt = new Date(s.fecha+'T12:00:00').getTime() + idx;
    ops.push({ type:'set', ref: doc(collection(db,'sanciones')), data: { studentId: s.studentId, fecha: s.fecha, motivo: s.motivo, createdAt, autor: 'Importación histórica' } });
  });
  (data.valoraciones||[]).forEach(v => {
    const key = docId(`${v.studentId}_${v.bimestre}_${slugify(v.materia)}`);
    ops.push({ type:'set', ref: doc(db,'valoraciones', key), data: {
      studentId: v.studentId, curso: v.curso, materia: v.materia, bimestre: v.bimestre,
      participa: v.participa||'', cumpleTareas: v.cumpleTareas||'', calidad: v.calidad||'',
      comportamiento: v.comportamiento||'', objetivos: v.objetivos||'', proyeccion: v.proyeccion||'',
      observaciones: v.observaciones||'', autor: 'Importación histórica', updatedAt: Date.now()
    }});
  });
  (data.deletes||[]).forEach(del => {
    ops.push({ type:'delete', ref: doc(db, del.collection, docId(del.key)) });
  });
  for(let i=0;i<ops.length;i+=450){
    const batch = writeBatch(db);
    ops.slice(i,i+450).forEach(op => {
      if(op.type==='delete') batch.delete(op.ref);
      else batch.set(op.ref, op.data);
    });
    await batch.commit();
  }
  // Se acaban de escribir registros de fechas viejas: el listener en vivo no los ve,
  // así que se vuelve a pedir el histórico para que queden a la vista enseguida.
  await recargarHistoricoAsistencia();
  return ops.length;
}

function renderImportar(){
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Importar histórico</h1>
    </div>
    <p class="info-note" style="margin-top:0;margin-bottom:14px;">${icon('info')}Subí el archivo historial_import.json una sola vez. Si lo hacés dos veces no duplica nada — pisa los mismos registros con los mismos datos.</p>
    <input type="file" accept="application/json" id="importFile">
    <div id="importPreview" style="margin-top:14px;"></div>
    <button class="btn-primary" id="importBtn" style="display:none;margin-top:14px;">Confirmar importación</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  let pendingData = null;
  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try{
        pendingData = JSON.parse(reader.result);
        document.getElementById('importPreview').innerHTML =
          `<p style="font-size:13px;">Se van a cargar <b>${(pendingData.attendance||[]).length}</b> registros de asistencia, <b>${(pendingData.ef||[]).length}</b> de Educación Física, <b>${(pendingData.autorizaciones||[]).length}</b> autorizaciones de tardanza, <b>${(pendingData.sanciones||[]).length}</b> apercibimientos, <b>${(pendingData.valoraciones||[]).length}</b> valoraciones pedagógicas, y se van a borrar <b>${(pendingData.deletes||[]).length}</b> registros viejos incorrectos.</p>`;
        document.getElementById('importBtn').style.display = 'block';
      }catch(err){
        document.getElementById('importPreview').innerHTML = `<p style="font-size:13px;color:var(--stamp);">Archivo inválido.</p>`;
      }
    };
    reader.readAsText(file);
  });
  document.getElementById('importBtn').addEventListener('click', async () => {
    const btn = document.getElementById('importBtn');
    btn.textContent = 'Importando…';
    btn.disabled = true;
    try{
      const n = await ejecutarImportacion(pendingData);
      showToast(`Importación completa — ${n} registros`);
      navigate('home');
    }catch(err){
      console.error(err);
      await customAlert('Hubo un error importando: ' + err.message);
      btn.textContent = 'Confirmar importación';
      btn.disabled = false;
    }
  });
}

function moduleRow(iconName, title, desc, route, disabled){
  return `<div class="module-row ${disabled?'disabled':''}" data-route="${disabled?'':route}">
    <span class="icon-chip">${icon(iconName)}</span>
    <div class="txt">
      <p class="title">${title}</p>
      <p class="desc">${desc}</p>
    </div>
    ${disabled ? '<span class="badge-soon">Próximamente</span>' : `<span class="chevron">${icon('chevron')}</span>`}
  </div>`;
}
// Acceso del inicio en formato grilla (2 columnas, ícono grande arriba).
function moduleTile(iconName, title, route, badge){
  return `<button type="button" class="module-tile" data-route="${route}">
    <span class="icon-chip">${icon(iconName)}</span>
    <span class="tile-title">${title}</span>
    ${badge ? `<span class="tile-badge">${badge}</span>` : ''}
  </button>`;
}
function attachModuleHandlers(){
  const rows = document.querySelectorAll('.module-row:not(.disabled), .module-tile');
  rows.forEach(r => {
    r.addEventListener('click', () => navigate(r.dataset.route));
  });
}

function renderAsistencia(){
  const soloLectura = userRole === 'teacher';
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const att = getAttendance();
  const today = todayISO();
  const cfg = getConfig();
  const esPasado = selectedFecha < today;
  const diaKey = diaKeyFor(selectedFecha);
  const esDiaEF = diaKey === 'martes' || diaKey === 'jueves';

  const rows = students.map(s => {
    const key = `${selectedFecha}|${s.id}`;
    const rec = att[key];
    const estado = rec ? rec.estado : null;
    let metaHtml;
    if(estado === 'P'){
      metaHtml = `<p class="meta p" data-edit="${s.id}">${icon('clock')} ${rec.hora}</p>`;
    } else if(estado === 'T'){
      metaHtml = `<p class="meta t" data-edit="${s.id}">${icon('clock')} ${rec.hora} · tarde</p>`;
    } else if(estado === 'TJ'){
      metaHtml = `<p class="meta j" data-edit="${s.id}">${icon('clock')} ${rec.hora} · tarde justificada</p>`;
    } else if(estado === 'A'){
      if(rec.exencion){
        metaHtml = `<p class="meta j" data-exent="${s.id}">Exenta (${rec.exencion}) · no cuenta</p>`;
      } else if(rec.llegoTarde){
        metaHtml = `<p class="meta" data-exent="${s.id}">Ausente · llegó ${rec.hora} (pasó las ${cfg.corteFaltaCompleta})</p>`;
      } else {
        metaHtml = `<p class="meta meta-tap" data-exent="${s.id}">Ausente</p>`;
      }
    } else if(estado === 'J'){
      metaHtml = `<p class="meta j">Ausente · justificada</p>`;
    } else if(esPasado){
      metaHtml = `<p class="meta p">Presente (sin marcar explícitamente)</p>`;
    } else {
      metaHtml = '<p class="meta">Sin marcar</p>';
    }
    if(tieneRetiro(rec)){
      const txt = `Se retiró ${rec.retiro.hora}${rec.retiro.motivo ? ' · ' + escapeHtml(rec.retiro.motivo) : ''}`;
      metaHtml += `<p class="meta retiro-meta" data-retiro="${s.id}">${icon('salida')} ${txt}</p>`;
    } else if(estado === 'P' || estado === 'T' || estado === 'TJ' || (!estado && esPasado)){
      // Enlace chiquito para cargar un retiro, sin sumar otro botón a la fila.
      metaHtml += `<p class="meta"><span class="retiro-link" data-retiro="${s.id}">${icon('salida')} retiro</span></p>`;
    }
    if(soloLectura) metaHtml = metaHtml.replace(/ data-edit="/g, ' data-noop="').replace(/ data-exent="/g, ' data-noop2="').replace(/ data-retiro="/g, ' data-noop3="');

    let efHtml = '';
    if(esDiaEF){
      const efRec = getEF()[key];
      const ausenteCompleto = estado === 'A' && !rec.exencion && !rec.llegoTarde;
      if(ausenteCompleto){
        efHtml = `<button class="state-btn" style="width:auto;padding:0 10px;opacity:0.5;" disabled>EF incl.</button>`;
      } else {
        const tipo = efRec ? efRec.tipo : null;
        const cls = tipo==='falta' ? 'on-a' : (tipo==='saf' ? 'on-saf' : '');
        const label = tipo==='falta' ? 'EF falta' : (tipo==='saf' ? 'EF SAF' : 'EF');
        efHtml = soloLectura
          ? `<span class="state-btn ${cls}" style="width:auto;padding:0 10px;opacity:${tipo?1:0.4};">${label}</span>`
          : `<button class="state-btn ${cls}" style="width:auto;padding:0 10px;" data-ef="${s.id}">${label}</button>`;
      }
    }

    if(soloLectura){
      return `
      <div class="student-card">
        <div class="row">
          ${avatarAlumno(s)}
          <div style="flex:1">
            <span class="name">${s.apellido}, ${s.nombre}</span>
            ${metaHtml}
          </div>
          ${efHtml}
        </div>
      </div>`;
    }

    return `
      <div class="student-card">
        <div class="row">
          ${avatarAlumno(s)}
          <div style="flex:1">
            <span class="name">${s.apellido}, ${s.nombre}</span>
            ${metaHtml}
          </div>
          <div class="btn-group">
            <button class="state-btn ${estado==='P'||estado==='T'||estado==='TJ'?'on-p':''} ${ultimaAccionPulso && ultimaAccionPulso.studentId===s.id && (estado==='P'||estado==='T'||estado==='TJ') ? 'pulse' : ''}" data-p="${s.id}">P</button>
            <button class="state-btn ${estado==='A'||estado==='J'?'on-a':''} ${ultimaAccionPulso && ultimaAccionPulso.studentId===s.id && (estado==='A'||estado==='J') ? 'pulse' : ''}" data-a="${s.id}">A</button>
            ${efHtml}
            <button class="state-btn hora-btn" data-edit="${s.id}" title="Editar hora de llegada">${icon('clock')}</button>
          </div>
        </div>
      </div>`;
  }).join('');
  ultimaAccionPulso = null;

  $app.innerHTML = `
    <div class="sticky-head">
      <div class="appbar" style="padding:0 0 10px;">
        <button class="back-btn" id="backBtn">${icon('back')}</button>
        <h1>Asistencia diaria</h1>
      </div>
      <div class="course-picker">
        ${cursoBtns(soloLectura ? cursosDisponibles() : CURSOS)}
        <input type="date" id="fechaSelect" value="${selectedFecha}" max="${maxFechaSeleccionable()}">
      </div>
      <p class="date-label" style="margin-bottom:${(!soloLectura && students.length) ? '8px' : '0'};">${fmtDateLong(selectedFecha)} · entrada ${cfg.entrada}, tolerancia ${cfg.toleranciaMin} min</p>
      ${(!soloLectura && students.length) ? `<button class="btn-secondary" id="marcarTodosBtn" style="width:100%;">Marcar todos presentes</button>` : ''}
    </div>
    <div style="height:12px"></div>
    ${(() => {
      const especial = getEntradaEspecial(selectedFecha, selectedCurso);
      if(especial){
        return `<div class="alert-banner" style="background:var(--sage-bg);margin-bottom:14px;border-left-color:var(--sage);">
          <p class="alert-text" style="color:var(--sage);">Entrada especial hoy: hasta las ${especial.horaTope}${especial.motivo?' · '+especial.motivo:''}</p>
          ${soloLectura ? '' : `<div style="display:flex;gap:8px;margin-top:8px;">
            <button class="btn-secondary" id="editarEspecialBtn" style="flex:1;font-size:12px;padding:6px;">Editar</button>
            <button class="btn-secondary" id="borrarEspecialBtn" style="flex:1;font-size:12px;padding:6px;color:var(--stamp);">Sacar</button>
          </div>`}
        </div>`;
      }
      return soloLectura ? '' : `<p style="text-align:right;margin:-8px 0 10px;"><a href="#" id="entradaEspecialLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">+ Entrada especial para este curso hoy</a></p>`;
    })()}
    ${(() => {
      const sinClase = getDiaSinClase(selectedFecha, selectedCurso);
      if(sinClase){
        return `<div class="alert-banner" style="background:var(--gold-bg);margin-bottom:14px;border-left-color:var(--gold);">
          <p class="alert-text" style="color:var(--gold);">Sin clase hoy para este curso · ${sinClase.motivo} — no suma faltas ni afecta el % por materia.</p>
          ${soloLectura ? '' : `<div style="display:flex;gap:8px;margin-top:8px;">
            <button class="btn-secondary" id="editarSinClaseBtn" style="flex:1;font-size:12px;padding:6px;">Editar</button>
            <button class="btn-secondary" id="borrarSinClaseBtn" style="flex:1;font-size:12px;padding:6px;color:var(--stamp);">Sacar</button>
          </div>`}
        </div>`;
      }
      return soloLectura ? '' : `<p style="text-align:right;margin:-8px 0 14px;"><a href="#" id="sinClaseLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">+ Día sin clase para este curso (VCF, paro...)</a></p>`;
    })()}
    ${students.length ? rows : `<div class="empty-state"><h2>Sin alumnos</h2><p>Este curso no tiene alumnos cargados.</p></div>`}
    <div style="height:16px"></div>
  `;

  document.getElementById('backBtn').addEventListener('click', () => goBack(soloLectura ? 'teacherHome' : 'home'));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.getElementById('fechaSelect').addEventListener('change', (e) => { selectedFecha = e.target.value; render(); });
  if(!soloLectura){
    document.querySelectorAll('[data-p]').forEach(b => b.addEventListener('click', (e) => markPresente(e.target.dataset.p, selectedFecha, selectedCurso)));
    document.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', (e) => markAusente(e.target.dataset.a, selectedFecha)));
    document.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', (e) => editHora(e.currentTarget.dataset.edit, selectedFecha, selectedCurso)));
    document.querySelectorAll('[data-exent]').forEach(b => b.addEventListener('click', (e) => marcarExencion(e.currentTarget.dataset.exent, selectedFecha)));
    document.querySelectorAll('[data-ef]').forEach(b => b.addEventListener('click', (e) => toggleEF(e.currentTarget.dataset.ef, selectedFecha)));
    document.querySelectorAll('[data-retiro]').forEach(b => b.addEventListener('click', (e) => editarRetiro(e.currentTarget.dataset.retiro, selectedFecha)));
  }
  if(document.getElementById('entradaEspecialLink')){
    document.getElementById('entradaEspecialLink').addEventListener('click', (e) => { e.preventDefault(); definirEntradaEspecial(selectedFecha, selectedCurso); });
  }
  if(document.getElementById('editarEspecialBtn')){
    document.getElementById('editarEspecialBtn').addEventListener('click', () => definirEntradaEspecial(selectedFecha, selectedCurso));
  }
  if(document.getElementById('borrarEspecialBtn')){
    document.getElementById('borrarEspecialBtn').addEventListener('click', () => borrarEntradaEspecial(selectedFecha, selectedCurso));
  }
  if(document.getElementById('marcarTodosBtn')){
    document.getElementById('marcarTodosBtn').addEventListener('click', marcarTodosPresentes);
  }
  if(document.getElementById('sinClaseLink')){
    document.getElementById('sinClaseLink').addEventListener('click', (e) => { e.preventDefault(); definirDiaSinClase(selectedFecha, selectedCurso); });
  }
  if(document.getElementById('editarSinClaseBtn')){
    document.getElementById('editarSinClaseBtn').addEventListener('click', () => definirDiaSinClase(selectedFecha, selectedCurso));
  }
  if(document.getElementById('borrarSinClaseBtn')){
    document.getElementById('borrarSinClaseBtn').addEventListener('click', () => borrarDiaSinClase(selectedFecha, selectedCurso));
  }
}

// ---------- Sanciones e incidentes ----------
function getSanciones(){ return cache.sanciones; }
function sancionCount(studentId){
  const s = getSanciones()[studentId];
  return s ? s.length : 0;
}
let selectedStudentId = null;

function ordinal(n){
  return `${n}°`;
}

function cursoBtns(cursosArr){
  return `<div class="curso-btn-row">${cursosArr.map(c => `<button type="button" class="curso-pick-btn c${c} ${c===selectedCurso?'active':''}" data-curso-pick="${c}">${c}°</button>`).join('')}</div>`;
}
function attachCursoBtns(onPick){
  document.querySelectorAll('[data-curso-pick]').forEach(b => {
    b.addEventListener('click', () => onPick(b.dataset.cursoPick));
  });
}

function pillBtnRow(group, options, selectedVal, colorClassFn){
  return `<div class="pill-btn-row">${options.map(o => {
    const active = String(o.value)===String(selectedVal);
    const cls = colorClassFn ? colorClassFn(o.value) : '';
    return `<button type="button" class="pill-btn ${cls} ${active?'active':''}" data-pill-group="${group}" data-pill-value="${o.value}">${o.label}</button>`;
  }).join('')}</div>`;
}
function attachPillBtns(group, onPick){
  document.querySelectorAll(`[data-pill-group="${group}"]`).forEach(b => {
    b.addEventListener('click', () => onPick(b.dataset.pillValue));
  });
}
function bimColorClass(n){
  return { '1':'c1','2':'c2','3':'c3','4':'c4' }[String(n)] || '';
}

function cursosDisponibles(){
  return userRole === 'teacher' ? (currentTeacher.cursos||[]) : CURSOS;
}
function resolverMateriaYCursos(){
  let cursosOpciones, materia;
  if(userRole === 'teacher'){
    materia = materiaActual(selectedCurso);
    cursosOpciones = cursosParaMateria(materia);
    if(!cursosOpciones.includes(selectedCurso)) selectedCurso = cursosOpciones[0];
  } else {
    cursosOpciones = CURSOS;
    if(!cursosOpciones.includes(selectedCurso)) selectedCurso = cursosOpciones[0];
    materia = materiaActual(selectedCurso);
  }
  return { materia, cursosOpciones };
}
function homeRoute(){
  if(userRole === 'teacher') return 'teacherHome';
  if(userRole === 'viewer') return 'viewerHome';
  if(userRole === 'student') return 'studentHome';
  return 'home';
}

function renderSancionesLista(){
  const cursos = cursosDisponibles();
  if(!cursos.includes(selectedCurso)) selectedCurso = cursos[0];
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const sanciones = getSanciones();

  const rows = students.map(s => {
    const count = (sanciones[s.id]||[]).length;
    return `<div class="module-row" data-student="${s.id}">
      ${avatarAlumno(s)}
      <div class="txt">
        <p class="title">${s.apellido}, ${s.nombre}</p>
        ${count>0 ? `<p class="desc">${count} apercibimiento${count>1?'s':''}${count>=5?' · corresponde evaluar suspensión':''}</p>` : `<p class="desc">Sin registros</p>`}
      </div>
      ${count>=5 ? `<span class="badge-soon" style="background:var(--stamp-bg);color:var(--stamp);">${count}</span>` : (count>0 ? `<span class="badge-soon">${count}</span>` : '')}
      <span class="chevron">${icon('chevron')}</span>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Sanciones e incidentes</h1>
    </div>
    <div class="course-picker">
      ${cursoBtns(cursos)}
    </div>
    <div class="module-list">${rows}</div>
  `;

  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('sancionDetalle'); });
  });
}

async function borrarApercibimiento(id){
  if(!(await customConfirm('¿Borrar este apercibimiento? No se puede deshacer.', {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'sanciones',id)).catch(err=>showSaveError(err));
}

async function agregarApercibimiento(){
  const textarea = document.getElementById('motivoInput');
  const fechaInput = document.getElementById('fechaApercibimiento');
  const motivo = textarea.value.trim();
  const fecha = fechaInput.value || todayISO();
  if(!motivo){ await customAlert('Describí lo que pasó antes de guardar.'); return; }
  const student = getStudents().find(s => s.id === selectedStudentId);
  const payload = { studentId: selectedStudentId, fecha, motivo, createdAt: new Date(fecha+'T12:00:00').getTime(),
    autor: userRole==='teacher' ? currentTeacher.nombre : getUsuario(), curso: student.curso };
  if(userRole==='teacher') payload.materia = (currentTeacher.materias||[])[0] || '';
  addDoc(collection(db,'sanciones'), payload).catch(err=>showSaveError(err));
  showToast('Apercibimiento guardado');
}

function renderSancionDetalle(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const historial = (getSanciones()[selectedStudentId] || []).slice().reverse();
  const count = historial.length;

  const historialHtml = historial.map(h => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <p class="folio">${ordinal(h.folio)} · ${h.fecha}</p>
          <p class="motivo">${h.motivo}</p>
        </div>
        <button class="borrar-btn" data-borrar="${h.id}">${icon('trash')}</button>
      </div>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>

    ${count>=5 ? `
      <div class="alert-banner">
        <div class="alert-head">
          <p class="alert-title">${ordinal(count)} apercibimiento</p>
          <span class="alert-num">${count}</span>
        </div>
        <p class="alert-text">Corresponde evaluar suspensión. La decisión final queda a criterio de dirección.</p>
      </div>
    ` : ''}

    <p class="section-label">Historial</p>
    ${historial.length ? `<div class="sancion-list">${historialHtml}</div>` : `<p class="empty-inline">Sin registros todavía.</p>`}

    <p class="section-label" style="margin-top:16px;">Nuevo apercibimiento</p>
    <div style="margin-bottom:10px;">
      <label style="font-size:12.5px;color:var(--ink-soft);display:block;margin-bottom:4px;">Fecha</label>
      <input type="date" id="fechaApercibimiento" value="${todayISO()}" max="${todayISO()}">
    </div>
    <textarea id="motivoInput" rows="3" placeholder="Describí lo que pasó..."></textarea>
    <button class="btn-primary" style="margin-top:10px;" id="guardarBtn">Guardar apercibimiento</button>
  `;

  document.getElementById('backBtn').addEventListener('click', () => goBack('sanciones'));
  document.getElementById('guardarBtn').addEventListener('click', agregarApercibimiento);
  document.querySelectorAll('[data-borrar]').forEach(b => b.addEventListener('click', (e) => borrarApercibimiento(e.currentTarget.dataset.borrar)));
}

// ---------- Justificativos médicos ----------
function getCertificados(){ return cache.certificados; }
let pendingFileDataUrl = null;

function dateRange(fromISO, toISO){
  const out = [];
  let d = new Date(fromISO + 'T00:00:00');
  const end = new Date(toISO + 'T00:00:00');
  while(d <= end){
    out.push(d.toISOString().slice(0,10));
    d.setDate(d.getDate()+1);
  }
  return out;
}

// Circulito con las iniciales del alumno, del color de su curso.
function avatarAlumno(s){
  const ini = ((s.apellido || '').trim().charAt(0) + (s.nombre || '').trim().charAt(0)).toUpperCase();
  return `<span class="avatar-ini c${s.curso}" aria-hidden="true">${escapeHtml(ini)}</span>`;
}
function escapeHtml(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function fmtDateShort(iso){
  const d = new Date(iso + 'T00:00:00');
  return `${DOW_FULL[d.getDay()].slice(0,3)} ${d.getDate()}/${d.getMonth()+1}`;
}

function renderJustificativosLista(){
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const rows = students.map(s => `<div class="module-row" data-student="${s.id}">
      ${avatarAlumno(s)}
      <div class="txt">
        <p class="title">${s.apellido}, ${s.nombre}</p>
        <p class="desc">Cargar certificado</p>
      </div>
      <span class="chevron">${icon('chevron')}</span>
    </div>`).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Justificativos médicos</h1>
    </div>
    <div class="course-picker">
      ${cursoBtns(CURSOS)}
    </div>
    <div class="module-list">${rows}</div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; pendingFileDataUrl = null; navigate('justificativoAlumno'); });
  });
}

function updatePreview(){
  const from = document.getElementById('fechaDesde').value;
  const to = document.getElementById('fechaHasta').value;
  const box = document.getElementById('previewBox');
  if(!from || !to || from > to){
    box.innerHTML = `<p style="font-size:12px;color:var(--ink-soft);">Elegí un rango de fechas válido.</p>`;
    return;
  }
  const student = getStudents().find(s => s.id === selectedStudentId);
  const att = getAttendance();
  const days = dateRange(from, to);
  let count = 0;
  const rows = days.map(iso => {
    const esDiaDeClase = diaKeyFor(iso) && !FERIADOS_2026.has(iso) && !getDiaSinClase(iso, student.curso);
    const rec = att[`${iso}|${selectedStudentId}`];
    let estadoTxt, esJustificable = false;
    if(!esDiaDeClase){
      estadoTxt = 'no hay clase';
    } else if(!rec){
      // No hay nada cargado todavía para ese día (por ejemplo, se cargó el
      // certificado antes de tomar asistencia): se justifica igual, no se
      // pierde por no tener una "Ausente" previa.
      estadoTxt = 'Sin asistencia cargada → Justificada'; esJustificable = true;
    } else if(rec.estado === 'A'){
      estadoTxt = 'Ausente → Justificada'; esJustificable = true;
    } else {
      const nombres = { P:'Presente', T:'Tarde', TJ:'Tarde justificada', J:'Justificada' };
      estadoTxt = `Ya cargado como ${nombres[rec.estado] || rec.estado} (no se modifica)`;
    }
    if(esJustificable) count++;
    return `<div class="preview-row">
      <span>${fmtDateShort(iso)}</span>
      <span class="${esJustificable?'yes':'no'}">${estadoTxt}</span>
    </div>`;
  }).join('');
  box.innerHTML = `
    <p class="preview-title">${count>0 ? `Se van a justificar ${count} día${count>1?'s':''}` : 'No hay días para justificar en ese rango'}</p>
    ${rows}
  `;
}

async function guardarJustificativo(){
  const from = document.getElementById('fechaDesde').value;
  const to = document.getElementById('fechaHasta').value;
  if(!from || !to || from > to){ await customAlert('Elegí un rango de fechas válido.'); return; }

  const student = getStudents().find(s => s.id === selectedStudentId);
  const days = dateRange(from, to);
  let count = 0;
  days.forEach(iso => {
    // Si no hay clase ese día (fin de semana, feriado o "día sin clase" del
    // curso), no hay nada que justificar.
    if(!diaKeyFor(iso) || FERIADOS_2026.has(iso) || getDiaSinClase(iso, student.curso)) return;
    const key = `${iso}|${selectedStudentId}`;
    const rec = cache.attendance[key];
    if(!rec){
      // Antes esto se salteaba en silencio si todavía no se había cargado
      // asistencia ese día (por ejemplo, certificado cargado por adelantado),
      // y el día quedaba sin justificar. Ahora se crea directamente como
      // justificada.
      writeAttendance(key, { estado: 'J', hora: null });
      count++;
    } else if(rec.estado === 'A'){
      writeAttendance(key, Object.assign({}, rec, { estado: 'J' }));
      count++;
    }
    // Si ya había una marca real distinta de "Ausente" (Presente, Tarde, etc.)
    // no se pisa, para no borrar algo que el preceptor cargó a mano.
  });

  addDoc(collection(db,'certificados'), { studentId: selectedStudentId, from, to, createdAt: Date.now(), autor: getUsuario() })
    .then(ref => {
      if(pendingFileDataUrl){
        certImagesLocal[ref.id] = pendingFileDataUrl;
        DB.set('isp_cert_images', certImagesLocal);
      }
    })
    .catch(err=>showSaveError(err));

  showToast(count>0 ? `Justificativo guardado — ${count} día${count>1?'s':''} justificado${count>1?'s':''}` : 'Justificativo guardado');
  navigate('justificativos');
}

function renderJustificativoAlumno(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const today = todayISO();

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>

    <p class="section-label">Certificado</p>
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <label class="btn-secondary">
        <input type="file" accept="image/*" capture="environment" id="fileCamera" style="display:none;">
        Sacar foto
      </label>
      <label class="btn-secondary">
        <input type="file" accept="image/*,application/pdf" id="fileAttach" style="display:none;">
        Adjuntar archivo
      </label>
    </div>
    <p id="fileStatus" style="font-size:12px;color:var(--ink-soft);margin:-10px 0 16px;">Sin adjunto todavía</p>

    <p class="section-label">Rango que cubre</p>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
      <input type="date" id="fechaDesde" value="${today}">
      <span style="font-size:12px;color:var(--ink-soft);">al</span>
      <input type="date" id="fechaHasta" value="${today}">
    </div>

    <div id="previewBox" class="preview-box"></div>

    <button class="btn-primary" style="margin-top:16px;" id="guardarJustBtn">Guardar justificativo</button>
  `;

  document.getElementById('backBtn').addEventListener('click', () => goBack('justificativos'));
  document.getElementById('fechaDesde').addEventListener('change', updatePreview);
  document.getElementById('fechaHasta').addEventListener('change', updatePreview);
  document.getElementById('guardarJustBtn').addEventListener('click', guardarJustificativo);

  function handleFile(e){
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingFileDataUrl = reader.result;
      document.getElementById('fileStatus').textContent = `Adjuntado: ${file.name}`;
    };
    reader.readAsDataURL(file);
  }
  document.getElementById('fileCamera').addEventListener('change', handleFile);
  document.getElementById('fileAttach').addEventListener('change', handleFile);

  updatePreview();
}

let UMBRAL_ALERTA = 5;
let UMBRAL_SCP = 0.85;
const APP_START_TIME = Date.now();

let lastFocusedInput = null;
let skipFadeNext = false;
// OJO: tiene que ir en fase de "captura" (el "true" del final), no de burbujeo.
// Los inputs de búsqueda de cada pantalla (ej. "filtroResumen") llaman a render()
// en su propio listener de 'input', lo que reconstruye toda la pantalla (y destruye
// el input) ANTES de que este listener llegara a correr si fuera en burbujeo —
// guardando siempre la posición del cursor de la letra ANTERIOR, no la actual. Eso
// era lo que hacía que, al escribir rápido, el cursor saltara al principio y se
// hiciera imposible escribir. En captura, este listener corre primero (antes de que
// el input de cada pantalla dispare el render), y guarda la posición correcta.
document.addEventListener('input', (e) => {
  if(e.target && e.target.id && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')){
    lastFocusedInput = { id: e.target.id, start: e.target.selectionStart, end: e.target.selectionEnd };
    skipFadeNext = true;
  }
}, true);

// ---------- Transición tipo iOS y gesto para volver ----------
// Antes de dibujar la pantalla nueva se hace una copia de la actual y se la pone fija
// en el mismo lugar, para que se vea deslizarse (hacia la izquierda al avanzar, hacia
// la derecha al volver) mientras entra la nueva. Se borra sola al terminar.
let arrastreDesdePx = 0;
let entradaDesde = null; // desde dónde entra la pantalla al soltar el gesto de volver
const movimientoReducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function crearPantallaSaliente(transicion){
  if(movimientoReducido || !$app || !$app.firstElementChild) return;
  document.querySelectorAll('.pantalla-saliente').forEach(el => el.remove());
  const rect = $app.getBoundingClientRect();
  const f = $app.cloneNode(true);
  f.removeAttribute('id');
  f.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
  f.classList.remove('fade-in', 'slide-adelante', 'slide-atras', 'arrastrando', 'volviendo-lugar');
  f.classList.add('pantalla-saliente', transicion === 'atras' ? 'saliente-atras' : 'saliente-adelante');
  f.setAttribute('aria-hidden', 'true');
  // Si se estaba arrastrando con el dedo, el rect ya incluye ese corrimiento: se descuenta
  // porque la animación arranca justo desde ahí (--desde).
  f.style.cssText = `position:fixed;top:${rect.top}px;left:${rect.left - arrastreDesdePx}px;width:${rect.width}px;margin:0;`;
  f.style.setProperty('--desde', arrastreDesdePx + 'px');
  document.body.appendChild(f);
  const quitar = () => f.remove();
  f.addEventListener('animationend', quitar, { once: true });
  setTimeout(quitar, 800);
}

// Arrastrar hacia la derecha desde cualquier parte de la pantalla vuelve atrás, como en
// el iPhone. Solo funciona en pantallas que tienen flecha de volver (usa ese mismo botón,
// así vuelve exactamente a donde volvería la flecha) y no se activa sobre campos de texto,
// listas que se desplazan de costado, o con un cartel abierto.
(function gestoVolver(){
  let x0 = 0, y0 = 0, t0 = 0, activo = false, decidido = false, horizontal = false, back = null, fondo = null, ancho = 1;
  // La pantalla anterior aparece de fondo y va entrando de a poco mientras se arrastra.
  function ponerFondo(){
    quitarFondos();
    const foto = navHistory.length ? navFotos[navFotos.length - 1] : null;
    if(!foto || movimientoReducido) return;
    const rect = $app.getBoundingClientRect();
    ancho = rect.width || window.innerWidth || 1;
    fondo = foto.nodo.cloneNode(true);
    fondo.classList.add('pantalla-fondo');
    fondo.setAttribute('aria-hidden', 'true');
    fondo.style.cssText = `position:fixed;top:${foto.top}px;left:${rect.left}px;width:${rect.width}px;margin:0;`;
    moverFondo(0);
    document.body.appendChild(fondo);
  }
  function moverFondo(p){
    if(!fondo) return;
    fondo.style.transform = `translateX(${(-30 * (1 - p)).toFixed(2)}%)`;
    fondo.style.opacity = (0.6 + 0.4 * p).toFixed(3);
  }
  function quitarFondos(){
    document.querySelectorAll('.pantalla-fondo').forEach(el => el.remove());
    fondo = null;
  }
  function puedeEmpezar(target){
    const modal = document.getElementById('modalOverlay');
    if(modal && modal.classList.contains('show')) return false;
    back = document.getElementById('backBtn');
    if(!back || !$app || !target || !target.closest) return false;
    if(!$app.contains(target)) return false;
    if(target.closest('input, textarea, select, [contenteditable="true"], .no-swipe')) return false;
    for(let el = target; el && el !== $app; el = el.parentElement){
      if(el.scrollWidth > el.clientWidth + 2){
        const ox = getComputedStyle(el).overflowX;
        if(ox === 'auto' || ox === 'scroll') return false;
      }
    }
    return true;
  }
  document.addEventListener('touchstart', (e) => {
    activo = false;
    if(e.touches.length !== 1 || !puedeEmpezar(e.target)) return;
    activo = true; decidido = false; horizontal = false;
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now();
  }, { passive: true });
  document.addEventListener('touchmove', (e) => {
    if(!activo) return;
    const dx = e.touches[0].clientX - x0, dy = e.touches[0].clientY - y0;
    if(!decidido){
      if(Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      decidido = true;
      horizontal = dx > 0 && Math.abs(dx) > Math.abs(dy) * 1.3;
      if(!horizontal){ activo = false; return; }
      $app.classList.remove('volviendo-lugar');
      $app.classList.add('arrastrando');
      ponerFondo();
    }
    e.preventDefault(); // mientras se arrastra de costado, que la pantalla no scrollee
    if(!$app.classList.contains('arrastrando')) $app.classList.add('arrastrando');
    $app.style.transform = `translateX(${Math.max(0, dx)}px)`;
    moverFondo(Math.min(1, Math.max(0, dx) / ancho));
  }, { passive: false });
  function terminar(e){
    if(!activo || !horizontal){ activo = false; return; }
    activo = false;
    const dx = Math.max(0, (e.changedTouches[0] ? e.changedTouches[0].clientX : x0) - x0);
    const velocidad = dx / Math.max(1, Date.now() - t0); // px por ms
    if(dx > 90 || (dx > 35 && velocidad > 0.5)){
      arrastreDesdePx = dx;
      // La pantalla real arranca justo donde estaba la de fondo, así no hay salto.
      const p = Math.min(1, dx / ancho);
      entradaDesde = fondo ? { x: -30 * (1 - p), op: 0.6 + 0.4 * p } : null;
      back.click();
      arrastreDesdePx = 0;
      entradaDesde = null;
      quitarFondos();
      $app.style.transform = '';
      $app.classList.remove('arrastrando');
    } else {
      // No llegó: vuelve suave a su lugar.
      $app.classList.add('volviendo-lugar');
      $app.style.transform = '';
      const f = fondo;
      if(f){ f.classList.add('volviendo-lugar'); moverFondo(0); }
      fondo = null;
      setTimeout(() => { $app.classList.remove('arrastrando', 'volviendo-lugar'); if(f) f.remove(); }, 260);
    }
  }
  document.addEventListener('touchend', terminar, { passive: true });
  document.addEventListener('touchcancel', terminar, { passive: true });
})();

function render(){
  // Todavía no sabemos con qué rol entrar (Firestore está confirmando si es
  // profesor/lectura/alumno). No dibujamos nada todavía: dejamos la pantalla
  // de carga puesta para no mostrar una pantalla equivocada por un instante.
  if(!authResolved) return;
  const hb = document.getElementById('histBanner');
  if(hb) hb.classList.toggle('show', !histAsistenciaListo);
  if((pendingTransicion === 'adelante' || pendingTransicion === 'atras') && primerRenderHecho) crearPantallaSaliente(pendingTransicion);
  if($app){ $app.style.transform = ''; $app.classList.remove('arrastrando', 'volviendo-lugar'); }
  renderInner();
  franjaPrueba();
  const transicion = pendingTransicion;
  pendingTransicion = null;
  let clase = null;
  if(transicion === 'adelante') clase = 'slide-adelante';
  else if(transicion === 'atras') clase = 'slide-atras';
  else if(transicion === 'tab' || !primerRenderHecho) clase = 'fade-in';
  // skipFadeNext solo frena el fundido de un render "en el lugar" (por ejemplo al
  // escribir en un buscador); un cambio de pantalla siempre anima.
  if($app && clase && (transicion || !skipFadeNext)){
    $app.classList.remove('fade-in', 'slide-adelante', 'slide-atras');
    if(transicion === 'atras' && entradaDesde){
      $app.style.setProperty('--entra-x', entradaDesde.x.toFixed(2) + '%');
      $app.style.setProperty('--entra-op', entradaDesde.op.toFixed(3));
    } else {
      $app.style.removeProperty('--entra-x');
      $app.style.removeProperty('--entra-op');
    }
    void $app.offsetWidth; // reinicia la animación
    $app.classList.add(clase);
  }
  primerRenderHecho = true;
  skipFadeNext = false;
  const sh = document.querySelector('.sticky-head');
  if(sh) sh.classList.toggle('pegado', window.scrollY > 4);
  if(lastFocusedInput){
    const el = document.getElementById(lastFocusedInput.id);
    if(el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')){
      el.focus();
      if(typeof lastFocusedInput.start === 'number'){
        try{ el.setSelectionRange(lastFocusedInput.start, lastFocusedInput.end); }catch(err){}
      }
    }
  }
  const loading = document.getElementById('loadingScreen');
  if(loading && !loading.classList.contains('hidden')){
    const faltan = 3000 - (Date.now() - APP_START_TIME);
    setTimeout(() => loading.classList.add('hidden'), Math.max(0, faltan));
  }
}

function renderInner(){
  const RUTAS_SOLO_NAPO = ['profesores','profesorNuevo','profesorEditar','lectura','conexionDrive','importar','alumnosCuentas','pendientes','pruebaDocente','pruebaAlumno','pruebaLectura'];
  if(RUTAS_SOLO_NAPO.includes(currentRoute) && (userRole!=='admin' || getUsuario()!=='Napo')){
    currentRoute = userRole==='admin' ? 'home' : homeRoute();
  }
  if(currentRoute === 'bienvenida'){ currentRoute = 'profesorLogin'; }
  if(currentRoute === 'quien'){ renderQuien(); renderTabbar(); return; }
  if(currentRoute === 'profesorLogin'){ renderProfesorLogin(); renderTabbar(); return; }
  if(currentRoute === 'profesorSinAcceso'){ renderProfesorSinAcceso(); renderTabbar(); return; }
  if(currentRoute === 'home') renderHome();
  else if(currentRoute === 'asistencia') renderAsistencia();
  else if(currentRoute === 'horarios') renderHorarios();
  else if(currentRoute === 'sanciones') renderSancionesLista();
  else if(currentRoute === 'sancionDetalle') renderSancionDetalle();
  else if(currentRoute === 'justificativos') renderJustificativosLista();
  else if(currentRoute === 'justificativoAlumno') renderJustificativoAlumno();
  else if(currentRoute === 'familias') renderFamiliasLista();
  else if(currentRoute === 'familiaAlumno') renderFamiliaAlumno();
  else if(currentRoute === 'resumen') renderResumenLista();
  else if(currentRoute === 'resumenAlumno') renderResumenAlumno();
  else if(currentRoute === 'detalleFaltasAlumno') renderDetalleFaltasAlumno();
  else if(currentRoute === 'compararBimestres') renderCompararBimestres();
  else if(currentRoute === 'ausentismoDocente') renderAusentismoDocente();
  else if(currentRoute === 'resumenValoraciones') renderResumenValoraciones();
  else if(currentRoute === 'resumenNotas') renderResumenNotas();
  else if(currentRoute === 'importar') renderImportar();
  else if(currentRoute === 'detalleAsistenciaHoy') renderDetalleAsistenciaHoy();
  else if(currentRoute === 'detalleAlertas') renderDetalleAlertas();
  else if(currentRoute === 'profesores') renderProfesores();
  else if(currentRoute === 'profesorNuevo') renderProfesorNuevo();
  else if(currentRoute === 'profesorEditar') renderProfesorEditar();
  else if(currentRoute === 'teacherHome') renderTeacherHome();
  else if(currentRoute === 'viewerHome') renderViewerHome();
  else if(currentRoute === 'lectura') renderLectura();
  else if(currentRoute === 'alumnosCuentas') renderAlumnosCuentas();
  else if(currentRoute === 'studentHome') renderStudentHome();
  else if(currentRoute === 'studentProfesores') renderStudentProfesores();
  else if(currentRoute === 'studentHorario') renderStudentHorario();
  else if(currentRoute === 'vistaCurso') renderVistaCurso();
  else if(currentRoute === 'vistaCursoMateria') renderVistaCursoMateria();
  else if(currentRoute === 'vistaCursoAlerta') renderVistaCursoAlerta();
  else if(currentRoute === 'vistaCursoSCP') renderVistaCursoSCP();
  else if(currentRoute === 'vistaCursoCerca') renderVistaCursoCerca();
  else if(currentRoute === 'pruebaDocente' || currentRoute === 'pruebaAlumno' || currentRoute === 'pruebaLectura') renderPruebaElegir();
  else if(currentRoute === 'conexionDrive') renderConexionDrive();
  else if(currentRoute === 'valoraciones') renderValoracionesLista();
  else if(currentRoute === 'valoracionAlumno') renderValoracionAlumno();
  else if(currentRoute === 'notas') renderNotasLista();
  else if(currentRoute === 'config') renderConfig();
  else if(currentRoute === 'alumnos') renderAlumnos();
  else if(currentRoute === 'horarioEditar') renderHorarioEditar();
  else if(currentRoute === 'entradasEspeciales') renderEntradasEspeciales();
  else if(currentRoute === 'pendientes') renderPendientes();
  else if(currentRoute === 'sincronizacion') renderSincronizacion();
  else if(currentRoute === 'configAvanzada') renderConfigAvanzada();
  else if(currentRoute === 'calendarioCiclo') renderCalendarioCiclo();
  else if(currentRoute === 'auditoria') renderAuditoria();
  else if(currentRoute === 'tramites') renderTramites();
  else if(currentRoute === 'tramiteNuevo') renderTramiteNuevo();
  else if(currentRoute === 'tramiteDetalle') renderTramiteDetalle();
  else if(currentRoute === 'tramiteImprimir') renderTramiteImprimir();
  else if(currentRoute === 'vistaGeneral') renderVistaGeneral();
  else if(currentRoute === 'agenda') renderAgenda();
  else if(currentRoute === 'agendaNuevo') renderAgendaNuevo();
  else if(currentRoute === 'agendaDetalle') renderAgendaDetalle();
  else if(currentRoute === 'studentAgenda') renderStudentAgenda();
  renderTabbar();
}

// ---------- Familias ----------
const TEMPLATES = {
  ausencia: {
    label: 'Aviso de inasistencia',
    subject: () => 'Ausencia',
    body: () => `Estimada familia,

Nos ponemos en contacto debido a la ausencia de su hijo/a. Queremos asegurarnos que se encuentre bien de salud.

Cordial saludo`
  },
  apercibimiento1: {
    label: '1er apercibimiento',
    subject: (s) => `Apertura de folio de apercibimiento - ${s.apellido.toUpperCase()}, ${s.nombre.toUpperCase()}`,
    body: (s, last) => `Estimada familia,
Ha sido necesario abrir una ficha de apercibimientos y/o sanciones bajo el n° de folio ${last ? String(last.folio).padStart(2,'0') : '__'} a su hijo/a ${s.nombre} el día ${last ? fmtDateShort(last.fecha) : '__'} durante la hora de [materia].

Copio motivo de la docente: "${last ? last.motivo : '[motivo]'}"

Quedan Notificados

Cordial saludo,
Napoleón`
  },
  apercibimientoN: {
    label: 'Siguientes apercibimientos',
    subject: (s, last) => `${last ? ordinal(last.folio) : 'N°'} apercibimiento - ${s.apellido.toUpperCase()}, ${s.nombre.toUpperCase()}`,
    body: (s, last) => `Estimada familia,
Nos contactamos para ponerlos en conocimiento que ${last ? fmtDateShort(last.fecha) : '__'}, el alumno ${s.nombre} ha sido apercibido en clase de [materia].

Copio motivo del docente: "${last ? last.motivo : '[motivo]'}"

Quedan notificados.

Cordial saludo,
Napoleón`
  },
  cincoInasistencias: {
    label: 'Al superar 5 inasistencias',
    subject: () => 'SEGUIMIENTO INSTITUCIONAL DE LA ASISTENCIA',
    body: () => `Estimada familia
Por este medio le informamos que su hijo/a ha superado las 5 inasistencias permitidas durante un bimestre.
Les solicitamos se acerquen a la escuela para firmar el acta de compromiso de seguimiento institucional de la inasistencia, para poder elevarlo al sector que corresponda.
Saludos,`
  }
};

function renderFamiliasLista(){
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const rows = students.map(s => `<div class="module-row" data-student="${s.id}">
      ${avatarAlumno(s)}
      <div class="txt">
        <p class="title">${s.apellido}, ${s.nombre}</p>
        <p class="desc">${s.familyEmails.length} contacto${s.familyEmails.length!==1?'s':''} de familia</p>
      </div>
      <span class="chevron">${icon('chevron')}</span>
    </div>`).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Familias</h1>
    </div>
    <div class="course-picker">
      ${cursoBtns(CURSOS)}
    </div>
    <div class="module-list">${rows}</div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('familiaAlumno'); });
  });
}

function abrirMail(templateKey){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const historial = getSanciones()[selectedStudentId] || [];
  const last = historial[historial.length - 1];
  const tpl = TEMPLATES[templateKey];
  const to = student.familyEmails.join(',');
  const subject = encodeURIComponent(tpl.subject(student, last));
  const body = encodeURIComponent(tpl.body(student, last));
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

function abrirMailLibre(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const to = student.familyEmails.join(',');
  window.location.href = `mailto:${to}`;
}

function renderFamiliaAlumno(){
  const student = getStudents().find(s => s.id === selectedStudentId);

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>

    <div class="config-card">
      <p class="k">Familia</p>
      ${student.familyEmails.map(e => `<p class="v" style="font-size:13px;font-weight:400;">${e}</p>`).join('')}
    </div>

    <p class="section-label">Enviar mail</p>
    <div class="module-list" style="margin-bottom:14px;">
      <div class="module-row" data-tpl="ausencia">
        <span class="icon-chip">${icon('file')}</span>
        <div class="txt"><p class="title">Aviso de inasistencia</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>
      <div class="module-row" data-tpl="apercibimiento1">
        <span class="icon-chip">${icon('file')}</span>
        <div class="txt"><p class="title">1er apercibimiento</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>
      <div class="module-row" data-tpl="apercibimientoN">
        <span class="icon-chip">${icon('file')}</span>
        <div class="txt"><p class="title">Siguientes apercibimientos</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>
      <div class="module-row" data-tpl="cincoInasistencias">
        <span class="icon-chip">${icon('file')}</span>
        <div class="txt"><p class="title">Seguimiento por inasistencias</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>
      <div class="module-row" id="mailLibreBtn">
        <span class="icon-chip">${icon('users')}</span>
        <div class="txt"><p class="title">Mensaje libre</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>
    </div>

    <p class="info-note">${icon('info')}Tocando una plantilla se abre tu mail con el texto ya armado. Los apercibimientos completan folio, fecha y motivo con el último registro cargado — revisá "[materia]" antes de enviar, ese dato lo completás vos.</p>
  `;

  document.getElementById('backBtn').addEventListener('click', () => goBack('familias'));
  document.querySelectorAll('[data-tpl]').forEach(el => {
    el.addEventListener('click', () => abrirMail(el.dataset.tpl));
  });
  document.getElementById('mailLibreBtn').addEventListener('click', abrirMailLibre);
}

// ---------- Resumen del alumno ----------
function renderResumenLista(){
  const cursos = cursosDisponibles();
  if(!cursos.includes(selectedCurso)) selectedCurso = cursos[0];
  const filtro = (window.__resumenFiltro||'').toLowerCase();
  // Con texto en el buscador, se busca en TODO el colegio (no hace falta elegir el
  // curso primero); vacío el buscador, se vuelve a navegar curso por curso como antes.
  const buscandoGlobal = filtro.length >= 2;
  let students = buscandoGlobal
    ? getStudents().filter(s => `${s.apellido} ${s.nombre}`.toLowerCase().includes(filtro))
    : getStudents().filter(s => s.curso === selectedCurso);
  students = students.sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const weights = computeAbsenceWeights();
  const rows = students.map(s => {
    const w = weights[s.id] || 0;
    return `<div class="module-row" data-student="${s.id}">
      ${avatarAlumno(s)}
      <div class="txt">
        <p class="title">${s.apellido}, ${s.nombre}${buscandoGlobal ? ` <span style="font-weight:400;color:var(--ink-soft);">· ${s.curso}° A</span>` : ''}</p>
        <p class="desc">${w} falta${w!==1?'s':''} en el bimestre</p>
      </div>
      ${w>=UMBRAL_ALERTA ? `<span class="badge-soon" style="background:var(--stamp-bg);color:var(--stamp);">${w}</span>` : ''}
      <span class="chevron">${icon('chevron')}</span>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Resumen del alumno</h1>
    </div>
    <div class="course-picker" style="${buscandoGlobal?'opacity:0.4;pointer-events:none;':''}">
      ${cursoBtns(cursos)}
    </div>
    <input type="text" id="filtroResumen" placeholder="Buscar alumno en todo el colegio..." style="margin-bottom:12px;" value="${window.__resumenFiltro||''}">
    ${students.length ? `<div class="module-list">${rows}</div>` : `<p class="empty-inline">Nadie coincide con esa búsqueda.</p>`}
    ${userRole==='admin' ? `<button class="btn-secondary" id="boletinesOficialesCursoBtn" style="width:100%;margin-top:14px;">${icon('file')} Descargar boletines oficiales del curso (PDF)</button>
    <button class="btn-secondary" id="boletinesOficialesTodosBtn" style="width:100%;margin-top:8px;">${icon('file')} Descargar boletines oficiales de TODO el colegio (PDF)</button>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.getElementById('filtroResumen').addEventListener('input', (e) => { window.__resumenFiltro = e.target.value; render(); });
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('resumenAlumno'); });
  });
  if(document.getElementById('boletinesOficialesCursoBtn')){
    document.getElementById('boletinesOficialesCursoBtn').addEventListener('click', () => generarBoletinesCurso(selectedCurso));
  }
  if(document.getElementById('boletinesOficialesTodosBtn')){
    document.getElementById('boletinesOficialesTodosBtn').addEventListener('click', async () => {
      const ok = await customConfirm('Esto genera un PDF con el boletín de cada alumno del colegio (puede tardar unos segundos). ¿Confirmás?');
      if(ok) generarBoletinesTodos();
    });
  }
}

let selectedBimestreN = null;

function subjectsAfectadasEnDia(studentId, iso){
  const student = getStudents().find(s=>s.id===studentId);
  const curso = student.curso;
  const diaKey = diaKeyFor(iso);
  if(!diaKey) return [];
  const rec = getAttendance()[`${iso}|${studentId}`];
  if(!rec || rec.exencion) return [];
  const subjects = subjectsForDay(curso, diaKey);
  const isFullAbsence = (rec.estado==='A'||rec.estado==='J') && !rec.llegoTarde;
  const isParcial = rec.hora && (rec.estado==='T' || rec.estado==='TJ' || (rec.estado==='A' && rec.llegoTarde));
  const isRetiro = tieneRetiro(rec);
  let affected = [];
  const dictadas = (subj) => (getSchedule()[curso][diaKey]||[]).filter(e => e.subject===subj && !horaSinDocente(iso, curso, diaKey, e.hour));
  if(isFullAbsence){
    affected = subjects.filter(subj => dictadas(subj).length);
  } else if(isParcial || isRetiro){
    affected = subjects.filter(subj => {
      const entries = dictadas(subj);
      return entries.some(e => {
        const st = HOUR_TIME[e.hour];
        const porLlegada = isParcial && st && minutesOf(st) < minutesOf(rec.hora);
        return porLlegada || horaPerdidaPorRetiro(rec, e.hour);
      });
    });
  }
  if(diaKey==='martes' || diaKey==='jueves'){
    if(isFullAbsence || efPerdidaPorRetiro(rec, curso)){
      affected.push('ED FIS');
    } else {
      const ef = getEF()[`${iso}|${studentId}`];
      if(ef && ef.tipo==='falta') affected.push('ED FIS');
    }
  }
  return affected;
}

let selectedTramiteId = null;

function statsDeBimestre(studentId, bim){
  const att = getAttendance();
  let presentes=0, tardes=0, ausentes=0, justificadas=0;
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== studentId || fecha < bim.from || fecha > bim.to || rec.exencion) return;
    if(rec.estado==='P') presentes++;
    else if(rec.estado==='T') tardes++;
    else if(rec.estado==='A') ausentes++;
    else if(rec.estado==='J') justificadas++;
  });
  const weights = computeAbsenceWeights(bim);
  return { presentes, tardes, ausentes, justificadas, ponderadas: weights[studentId] || 0 };
}

function renderCompararBimestres(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  window.__compA = window.__compA || 1;
  window.__compB = window.__compB || 3;
  const bimA = BIMESTRES.find(b => b.n === window.__compA);
  const bimB = BIMESTRES.find(b => b.n === window.__compB);
  const statsA = statsDeBimestre(selectedStudentId, bimA);
  const statsB = statsDeBimestre(selectedStudentId, bimB);

  const filas = [
    ['Presentes', statsA.presentes, statsB.presentes],
    ['Tardes', statsA.tardes, statsB.tardes],
    ['Ausentes', statsA.ausentes, statsB.ausentes],
    ['Justificadas', statsA.justificadas, statsB.justificadas],
    ['Faltas ponderadas', statsA.ponderadas, statsB.ponderadas],
  ];
  const rows = filas.map(([label, a, b]) => {
    const dif = b - a;
    const flecha = dif > 0 ? `<span style="color:var(--stamp);">▲ +${dif}</span>` : (dif < 0 ? `<span style="color:var(--sage);">▼ ${dif}</span>` : '—');
    return `<tr><td>${label}</td><td style="text-align:center;">${a}</td><td style="text-align:center;">${b}</td><td style="text-align:center;">${flecha}</td></tr>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>
    <p class="section-label">Bimestre A</p>
    <div class="course-picker">${pillBtnRow('compA', BIMESTRES.map(b => ({value:b.n, label:b.n+'° bim.'})), window.__compA, bimColorClass)}</div>
    <p class="section-label">Bimestre B</p>
    <div class="course-picker">${pillBtnRow('compB', BIMESTRES.map(b => ({value:b.n, label:b.n+'° bim.'})), window.__compB, bimColorClass)}</div>
    <div class="config-card" style="margin-top:16px;">
      <table class="boletin-table">
        <tr><th></th><th style="text-align:center;">${window.__compA}° bim.</th><th style="text-align:center;">${window.__compB}° bim.</th><th style="text-align:center;">Cambio</th></tr>
        ${rows}
      </table>
    </div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('resumenAlumno'));
  attachPillBtns('compA', (v) => { window.__compA = Number(v); render(); });
  attachPillBtns('compB', (v) => { window.__compB = Number(v); render(); });
}

function renderDetalleFaltasAlumno(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const bim = selectedBimestreN === 0
    ? { n:0, from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to }
    : (selectedBimestreN ? BIMESTRES.find(b => b.n === selectedBimestreN) : bimestreActual());
  const att = getAttendance();
  const efMap = getEF();

  const dias = [];
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== selectedStudentId || fecha < bim.from || fecha > bim.to || rec.exencion) return;
    let w = 0;
    if(rec.estado==='A' || rec.estado==='J') w = 1;
    else if(rec.estado==='T') w = 0.5;
    w += pesoRetiro(rec);
    if(w>0) dias.push({ fecha, w, tipo: rec.estado, retiro: tieneRetiro(rec) ? rec.retiro.hora : null });
    // Tarde justificada: no suma, pero se muestra si le hizo perder materias.
    else if(rec.estado==='TJ' && subjectsAfectadasEnDia(selectedStudentId, fecha).length) dias.push({ fecha, w: 0, tipo: 'TJ', hora: rec.hora });
  });
  Object.entries(efMap).forEach(([key,val]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== selectedStudentId || fecha < bim.from || fecha > bim.to) return;
    if(val.tipo === 'falta' && !dias.find(d=>d.fecha===fecha)){
      dias.push({ fecha, w:0.5, tipo:'EF' });
    }
  });
  dias.sort((a,b)=> a.fecha.localeCompare(b.fecha));

  const rows = dias.map(d => {
    const materias = subjectsAfectadasEnDia(selectedStudentId, d.fecha);
    const materiasTxt = (materias.length ? materias.join(', ') : (d.tipo==='EF' ? 'Ed. Física' : '—'))
      + (d.retiro ? ` · se retiró ${d.retiro}` : '')
      + (d.tipo === 'TJ' ? ` · tarde justificada${d.hora ? ' ('+d.hora+')' : ''}, no suma` : '');
    return `<div class="dia-falta-row">
      <span class="dia-falta-fecha">${fmtDateShort(d.fecha)}</span>
      <span class="dia-falta-peso">${d.w}</span>
      <span class="dia-falta-materias">${materiasTxt}</span>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>
    <p class="date-label">${bim.n===0 ? 'Total del año' : bim.n+'° bimestre'} · ${dias.reduce((a,d)=>a+d.w,0)} faltas</p>
    ${rows ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Sin faltas en este período.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('resumenAlumno'));
}

function renderResumenAlumno(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const bim = selectedBimestreN === 0
    ? { n:0, from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to }
    : (selectedBimestreN ? BIMESTRES.find(b => b.n === selectedBimestreN) : bimestreActual());
  const att = getAttendance();

  let presentes=0, tardes=0, ausentes=0, justificadas=0, exentas=0;
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== selectedStudentId || fecha < bim.from || fecha > bim.to) return;
    if(rec.exencion) exentas++;
    else if(rec.estado==='P') presentes++;
    else if(rec.estado==='T') tardes++;
    else if(rec.estado==='A') ausentes++;
    else if(rec.estado==='J') justificadas++;
  });
  let efFaltas=0, efSaf=0;
  Object.entries(getEF()).forEach(([key,val]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== selectedStudentId || fecha < bim.from || fecha > bim.to) return;
    if(val.tipo==='falta') efFaltas++; else if(val.tipo==='saf') efSaf++;
  });

  const weights = computeAbsenceWeights(bim);
  const weight = weights[selectedStudentId] || 0;

  const anioCompleto = { from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to };
  const materias = computeMateriaStats(selectedStudentId, anioCompleto);
  const materiaRows = Object.entries(materias).sort((a,b)=>a[0].localeCompare(b[0])).map(([subj, s]) => {
    const pct = s.total>0 ? (1 - s.faltas/s.total) : 1;
    const pctDisplay = Math.round(pct*1000)/10;
    const scp = pct < UMBRAL_SCP;
    const resta = faltasRestantes(s);
    const cerca = !scp && resta !== null && resta <= CERCA_SCP;
    return `<div class="materia-row ${scp?'scp':''} ${cerca?'cerca':''}">
      <span class="materia-name">${subj}${resta !== null ? `<span class="materia-resta">${textoRestantes(resta)}</span>` : ''}</span>
      <span class="materia-detail">${s.faltas}/${s.total}</span>
      <span class="materia-pct">${pctDisplay}%${scp?' · SCP':''}</span>
    </div>`;
  }).join('');

  const sanciones = (getSanciones()[selectedStudentId] || []).slice().reverse();
  const certs = getCertificados().filter(c => c.studentId === selectedStudentId).slice().reverse();

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>

    <div class="course-picker">
      ${pillBtnRow('bim', [...BIMESTRES.map(b => ({value:b.n, label:b.n+'°'})), {value:0, label:'Año'}], bim.n, bimColorClass)}
    </div>

    <div class="stat-grid">
      <div class="stat-card ${weight>=UMBRAL_ALERTA?'alert':''}" id="cardFaltasBim" style="cursor:pointer;">
        <p class="label">${bim.n===0 ? 'Faltas del año' : 'Faltas del bimestre'}</p>
        <p class="value">${weight}</p>
      </div>
      <div class="stat-card">
        <p class="label">Apercibimientos (total)</p>
        <p class="value">${sanciones.length}</p>
      </div>
    </div>

    <button class="btn-secondary" id="compararBimBtn" style="width:100%;margin-bottom:6px;"><span class="btn-icon-fix">${icon('chart')}</span> Comparar bimestres</button>

    <p class="section-label">Detalle de asistencia (${bim.n===0?'año completo':'este bimestre'})</p>
    <div class="config-card" style="display:flex;flex-wrap:wrap;gap:14px;">
      <div><p class="k">Presentes</p><p class="v">${presentes}</p></div>
      <div><p class="k">Tardes</p><p class="v">${tardes}</p></div>
      <div><p class="k">Ausentes</p><p class="v">${ausentes}</p></div>
      <div><p class="k">Justificadas</p><p class="v">${justificadas}</p></div>
      <div><p class="k">Exentas</p><p class="v">${exentas}</p></div>
      <div><p class="k">Ed. Física (falta)</p><p class="v">${efFaltas}</p></div>
      <div><p class="k">SAF usados</p><p class="v">${efSaf}</p></div>
    </div>

    <p class="section-label" style="margin-top:16px;">Faltas por materia (ciclo lectivo completo)</p>
    <div class="sancion-list">${materiaRows || '<p style="font-size:13px;color:var(--ink-soft);padding:12px;">Sin datos para este período.</p>'}</div>
    <p class="info-note">${icon('info')}SCP = por debajo del 85% de asistencia anual en esa materia (recupera en el PIA). "Le quedan" cuenta todas las clases del año, también las que faltan dar.</p>

    <p class="section-label" style="margin-top:16px;">Apercibimientos</p>
    ${sanciones.length ? `<div class="sancion-list">${sanciones.map(h => `
      <div class="sancion-item"><p class="folio">${ordinal(h.folio)} · ${h.fecha}</p><p class="motivo">${h.motivo}</p></div>
    `).join('')}</div>` : `<p class="empty-inline">Sin registros.</p>`}

    <p class="section-label" style="margin-top:16px;">Certificados entregados</p>
    ${certs.length ? `<div class="sancion-list">${certs.map(c => `
      <div class="sancion-item">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <p class="folio">${fmtDateShort(c.from)} al ${fmtDateShort(c.to)}</p>
          ${(userRole!=='viewer' && userRole!=='student') ? `<button class="borrar-btn" data-borrar-cert="${c.id}">${icon('trash')}</button>` : ''}
        </div>
      </div>
    `).join('')}</div>` : `<p class="empty-inline">Sin certificados cargados.</p>`}

    <p class="section-label" style="margin-top:16px;">Autorización de tardanza</p>
    ${(() => {
      const auth = getAutorizaciones()[selectedStudentId];
      const puede = userRole!=='viewer' && userRole!=='student';
      if(auth && auth.activa){
        return `<div class="config-card">
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            <div><p class="k">Entra sin tardanza hasta</p><p class="v">${escapeHtml(auth.horaTope)}</p></div>
            <div style="flex:1;min-width:120px;"><p class="k">Motivo</p><p class="v">${auth.motivo ? escapeHtml(auth.motivo) : '<span style="color:var(--ink-soft);font-weight:400;">Sin motivo</span>'}</p></div>
          </div>
          <p class="k" style="margin-top:8px;">Activa desde el ${auth.desde ? fmtDateShort(auth.desde) : '—'}${auth.modificada ? ' · modificada el ' + fmtDateShort(auth.modificada) : ''}</p>
        </div>
        ${puede ? `<div style="display:flex;gap:8px;margin-top:8px;">
          <button class="btn-secondary" id="authEditarBtn" style="flex:1;">Editar horario o motivo</button>
          <button class="btn-secondary" id="authCerrarBtn" style="flex:0 0 auto;">Cerrar</button>
        </div>` : ''}`;
      }
      return `<p class="empty-inline">Sin autorización activa.</p>
        ${puede ? `<button class="btn-secondary" id="authAgregarBtn" style="width:100%;margin-top:8px;">Agregar autorización</button>` : ''}`;
    })()}

    ${userRole!=='student' ? `
    <p class="section-label" style="margin-top:16px;">Docencia</p>
    <div class="module-list">
      ${userRole!=='viewer' ? `<div class="module-row" id="verValoracionesBtn">
        <div class="txt"><p class="title">Valoraciones pedagógicas</p><p class="desc">1er y 3er bimestre, por materia</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>` : ''}
      <div class="module-row" id="verNotasBtn">
        <div class="txt"><p class="title">Notas</p><p class="desc">1er y 2do cuatrimestre</p></div>
        <span class="chevron">${icon('chevron')}</span>
      </div>
    </div>
    ` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => {
    selectedBimestreN = null;
    goBack(userRole==='student' ? 'studentHome' : 'resumen');
  });
  attachPillBtns('bim', (v) => { selectedBimestreN = Number(v); render(); });
  document.getElementById('cardFaltasBim').addEventListener('click', () => navigate('detalleFaltasAlumno'));
  document.getElementById('compararBimBtn').addEventListener('click', () => navigate('compararBimestres'));
  if(document.getElementById('authAgregarBtn')) document.getElementById('authAgregarBtn').addEventListener('click', () => agregarAutorizacion(selectedStudentId));
  if(document.getElementById('authEditarBtn')) document.getElementById('authEditarBtn').addEventListener('click', () => editarAutorizacion(selectedStudentId));
  if(document.getElementById('authCerrarBtn')) document.getElementById('authCerrarBtn').addEventListener('click', () => cerrarAutorizacion(selectedStudentId));
  if(document.getElementById('verValoracionesBtn')){
    document.getElementById('verValoracionesBtn').addEventListener('click', () => navigate('resumenValoraciones'));
  }
  if(document.getElementById('verNotasBtn')){
    document.getElementById('verNotasBtn').addEventListener('click', () => navigate('resumenNotas'));
  }
  document.querySelectorAll('[data-borrar-cert]').forEach(b => {
    b.addEventListener('click', () => borrarCertificado(b.dataset.borrarCert));
  });
}

async function borrarCertificado(id){
  if(!(await customConfirm('¿Borrar este certificado de la lista? No se puede deshacer. Esto no cambia la asistencia ya justificada, solo saca el registro del certificado.', {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'certificados',id)).catch(err=>showSaveError(err));
  if(certImagesLocal[id]){ delete certImagesLocal[id]; DB.set('isp_cert_images', certImagesLocal); }
}

function renderResumenValoraciones(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  window.__resumenValBim = window.__resumenValBim || 1;
  const bim = window.__resumenValBim;

  const propias = Object.values(cache.valoraciones).filter(v => v.studentId === selectedStudentId && v.bimestre === bim)
    .sort((a,b)=> a.materia.localeCompare(b.materia));

  const rows = propias.map(v => `
    <div class="sancion-item">
      <p class="folio">${v.materia}</p>
      <p class="motivo">Participa: ${v.participa||'—'} · Tareas: ${v.cumpleTareas||'—'} · Calidad: ${v.calidad||'—'} · Comportamiento: ${v.comportamiento||'—'} · Objetivos: ${v.objetivos||'—'}</p>
      ${v.proyeccion ? `<p class="motivo" style="margin-top:4px;font-style:italic;">"${v.proyeccion}"</p>` : ''}
      ${v.observaciones ? `<p class="motivo" style="margin-top:4px;">${v.observaciones}</p>` : ''}
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>
    <div class="course-picker">
      ${pillBtnRow('bimResVal', [{value:1,label:'1° bimestre'},{value:3,label:'3° bimestre'}], bim, bimColorClass)}
    </div>
    ${rows ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Sin valoraciones cargadas para este bimestre.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('resumenAlumno'));
  attachPillBtns('bimResVal', (v) => { window.__resumenValBim = Number(v); render(); });
}

function renderResumenNotas(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const propias = Object.values(cache.notas).filter(n => n.studentId === selectedStudentId);
  const materias = [...new Set(propias.map(n => n.materia))].sort();

  const n1s = propias.filter(n => n.cuatrimestre===1).map(n=>n.nota);
  const n2s = propias.filter(n => n.cuatrimestre===2).map(n=>n.nota);
  const promedio = (arr) => arr.length ? Math.round((arr.reduce((a,b)=>a+b,0)/arr.length)*100)/100 : null;
  const prom1 = promedio(n1s);
  const prom2 = promedio(n2s);
  const promAnual = promedio([...n1s, ...n2s]);

  const rows = materias.map(m => {
    const n1 = propias.find(n => n.materia===m && n.cuatrimestre===1);
    const n2 = propias.find(n => n.materia===m && n.cuatrimestre===2);
    return `<div class="nota-row">
      <span class="nota-materia">${m}</span>
      <span class="nota-valor ${n1 && n1.nota<6?'baja':''}">${n1 ? n1.nota : '—'}</span>
      <span class="nota-valor ${n2 && n2.nota<6?'baja':''}">${n2 ? n2.nota : '—'}</span>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>
    <div class="stat-grid" style="grid-template-columns:1fr 1fr 1fr;">
      <div class="stat-card"><p class="label">1° cuatri.</p><p class="value">${prom1 ?? '—'}</p></div>
      <div class="stat-card"><p class="label">2° cuatri.</p><p class="value">${prom2 ?? '—'}</p></div>
      <div class="stat-card"><p class="label">Anual</p><p class="value">${promAnual ?? '—'}</p></div>
    </div>
    <div class="nota-row nota-head">
      <span class="nota-materia">Materia</span>
      <span class="nota-valor">1° cuatri.</span>
      <span class="nota-valor">2° cuatri.</span>
    </div>
    ${materias.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Sin notas cargadas todavía.</p>`}
    ${userRole==='admin' ? `<button class="btn-secondary" id="descargarBoletinBtn" style="width:100%;margin-top:14px;"><span class="btn-icon-fix">${icon('file')}</span> Descargar boletín oficial (PDF)</button>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(userRole==='student' ? 'studentHome' : 'resumenAlumno'));
  if(document.getElementById('descargarBoletinBtn')){
    document.getElementById('descargarBoletinBtn').addEventListener('click', () => generarBoletinOficialPDF(selectedStudentId));
  }
}

// ---------- Educación Física ----------
function countSAFenBimestre(studentId, bim){
  let count = 0;
  Object.entries(getEF()).forEach(([key, val]) => {
    const [fecha, sid] = key.split('|');
    if(sid === studentId && val.tipo === 'saf' && fecha >= bim.from && fecha <= bim.to) count++;
  });
  return count;
}

// ---------- Cuenta desactivada / sin acceso ----------
function renderProfesorSinAcceso(){
  $app.innerHTML = `
    <div style="padding-top:80px;text-align:center;">
      <p style="font-size:14px;color:var(--ink-soft);max-width:260px;margin:0 auto 16px;">Tu cuenta no tiene acceso activo. Consultá con la preceptoría.</p>
      <button class="btn-primary" style="max-width:200px;margin:0 auto;" id="salirBtn">Salir</button>
    </div>
  `;
  document.getElementById('salirBtn').addEventListener('click', () => signOut(auth));
}

// ---------- Panel de administración de profesores ----------
async function crearProfesor(){
  const nombre = document.getElementById('nuevoProfNombre').value.trim();
  const email = document.getElementById('nuevoProfEmail').value.trim();
  const pass = document.getElementById('nuevoProfPass').value;
  const materiasSeleccionadas = Array.from(document.querySelectorAll('.materia-check:checked')).map(c => c.value);
  const cursosSeleccionados = Array.from(document.querySelectorAll('.curso-check:checked')).map(c => c.value);
  const errEl = document.getElementById('nuevoProfError');
  errEl.textContent = '';

  if(!nombre || !email || !pass || cursosSeleccionados.length===0){
    errEl.textContent = 'Completá nombre, mail, contraseña y al menos un curso.';
    return;
  }
  if(pass.length < 6){
    errEl.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    return;
  }

  // Si vino de elegir un profesor conocido y los checkboxes no se tocaron después, usamos el cruce preciso materia-curso del horario.
  // Si no, asumimos que cada materia tildada aplica a todos los cursos tildados.
  let asignaciones;
  const precisa = window.__asignacionesConocidas;
  const coincideMaterias = precisa && precisa.materias.length===materiasSeleccionadas.length && precisa.materias.every(m=>materiasSeleccionadas.includes(m));
  const coincideCursos = precisa && precisa.cursos.length===cursosSeleccionados.length && precisa.cursos.every(c=>cursosSeleccionados.includes(c));
  if(precisa && coincideMaterias && coincideCursos){
    asignaciones = precisa.asignaciones;
  } else {
    asignaciones = materiasSeleccionadas.map(m => ({ materia: m, cursos: cursosSeleccionados }));
  }

  const btn = document.getElementById('crearProfBtn');
  btn.textContent = 'Creando…';
  btn.disabled = true;
  try{
    const cred = await createUserWithEmailAndPassword(authSecundaria, email, pass);
    const uid = cred.user.uid;
    await setDoc(doc(db,'teachers',uid), {
      nombre, email, materias: materiasSeleccionadas, cursos: cursosSeleccionados, asignaciones, activo: true, creadoPor: getUsuario()
    });
    await signOut(authSecundaria);
    showToast('Profesor/a creado');
    navigate('profesores');
  }catch(err){
    console.error(err);
    errEl.textContent = err.code === 'auth/email-already-in-use' ? 'Ese mail ya tiene una cuenta.' : 'No se pudo crear la cuenta.';
    btn.textContent = 'Crear cuenta';
    btn.disabled = false;
  }
}

function toggleActivoProfesor(uid, activo){
  setDoc(doc(db,'teachers',uid), { activo: !activo }, { merge: true }).catch(err=>showSaveError(err));
}

async function guardarEdicionProfesor(uid){
  const materias = Array.from(document.querySelectorAll('.materia-check-edit:checked')).map(c => c.value);
  const cursos = Array.from(document.querySelectorAll('.curso-check-edit:checked')).map(c => c.value);
  if(cursos.length===0){ await customAlert('Elegí al menos un curso.'); return; }
  const asignaciones = materias.map(m => ({ materia: m, cursos }));
  setDoc(doc(db,'teachers',uid), { materias, cursos, asignaciones }, { merge: true }).catch(err=>showSaveError(err));
  showToast('Datos actualizados');
  navigate('profesores');
}

async function recalcularDesdeHorario(uid){
  const t = cache.teachers[uid];
  const conocido = profesoresConocidos()[t.nombre];
  if(!conocido){ await customAlert('Este nombre no aparece tal cual en el horario, no lo puedo recalcular solo.'); return; }
  setDoc(doc(db,'teachers',uid), { materias: conocido.materias, cursos: conocido.cursos, asignaciones: conocido.asignaciones }, { merge: true })
    .catch(err=>showSaveError(err));
  showToast('Recalculado desde el horario');
  navigate('profesores');
}

function renderProfesorEditar(){
  const t = cache.teachers[selectedProfesorUid];
  if(!t){ navigate('profesores'); return; }
  const materias = materiasDisponibles();
  const conocido = profesoresConocidos()[t.nombre];
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${t.nombre}</h1>
    </div>
    ${conocido ? `
      <div class="config-card" style="margin-bottom:16px;">
        <p class="v" style="font-size:13px;margin-bottom:8px;">Este nombre coincide con el horario cargado — se puede recalcular la asignación exacta (qué materia da en qué curso) con un toque.</p>
        <button class="btn-secondary" id="recalcularBtn" style="width:100%;">Recalcular desde el horario</button>
      </div>
    ` : ''}
    <p class="section-label">Materias</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px;">
      ${materias.map(m => `<label class="curso-check-label"><input type="checkbox" class="materia-check-edit" value="${m}" ${(t.materias||[]).includes(m)?'checked':''}> ${m}</label>`).join('')}
    </div>
    <p class="section-label">Cursos a cargo</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px;">
      ${CURSOS.map(c => `<label class="curso-check-label"><input type="checkbox" class="curso-check-edit" value="${c}" ${(t.cursos||[]).includes(c)?'checked':''}> <span class="curso-dot c${c}"></span>${c}° A</label>`).join('')}
    </div>
    <p class="info-note" style="margin-top:0;margin-bottom:10px;">${icon('info')}Guardar cambios acá asume que todas las materias tildadas aplican a todos los cursos tildados. Si da distintas materias en distintos cursos, usá "Recalcular desde el horario" en vez de esto.</p>
    <button class="btn-primary" id="guardarEdicionBtn">Guardar cambios</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('profesores'));
  document.getElementById('guardarEdicionBtn').addEventListener('click', () => guardarEdicionProfesor(selectedProfesorUid));
  if(document.getElementById('recalcularBtn')){
    document.getElementById('recalcularBtn').addEventListener('click', () => recalcularDesdeHorario(selectedProfesorUid));
  }
}

let selectedProfesorUid = null;

async function borrarProfesor(uid, nombre){
  if(!(await customConfirm(`¿Borrar la cuenta de ${nombre}? No se puede deshacer. El mail y contraseña quedan sin efecto (no van a poder entrar más), pero si querés reusar ese mail para otra cuenta después, avisame.`, {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'teachers',uid)).then(() => showToast('Profesor/a borrado')).catch(err=>showSaveError(err));
}

function renderProfesores(){
  const teachers = Object.values(cache.teachers).sort((a,b)=> (a.nombre||'').localeCompare(b.nombre||''));
  const filtro = (window.__profesorFiltro||'').toLowerCase();
  const visibles = filtro ? teachers.filter(t => (t.nombre||'').toLowerCase().includes(filtro)) : teachers;

  const rows = visibles.map(t => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <p class="folio"><span class="status-dot ${t.activo===false?'off':'on'}"></span>${t.nombre} ${t.activo===false ? '· inactivo' : ''}</p>
          <p class="motivo">${t.email} · ${(t.materias||[]).join(', ') || 'sin materia'}</p>
          <p class="motivo" style="margin-top:5px;">${(t.cursos||[]).sort().map(c=>`<span class="curso-chip c${c}">${c}°</span>`).join(' ') || 'sin curso'}</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
          <button class="btn-chip" data-editar="${t.uid}">Editar</button>
          <button class="btn-chip" data-toggle="${t.uid}" data-activo="${t.activo!==false}">${t.activo===false ? 'Reactivar' : 'Dar de baja'}</button>
          <button class="btn-chip danger" data-borrar="${t.uid}" data-nombre="${t.nombre}">Borrar</button>
        </div>
      </div>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Profesores</h1>
    </div>

    <button class="btn-primary" id="irNuevoBtn" style="margin-bottom:16px;">+ Agregar profesor</button>

    <input type="text" id="filtroProfesor" placeholder="Buscar por nombre..." style="margin-bottom:12px;" value="${window.__profesorFiltro||''}">

    <p class="section-label">Cuentas existentes (${visibles.length})</p>
    ${visibles.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">${teachers.length ? 'Nadie coincide con esa búsqueda.' : 'Todavía no hay profesores cargados.'}</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  document.getElementById('irNuevoBtn').addEventListener('click', () => navigate('profesorNuevo'));
  document.getElementById('filtroProfesor').addEventListener('input', (e) => { window.__profesorFiltro = e.target.value; render(); });
  document.querySelectorAll('[data-toggle]').forEach(b => {
    b.addEventListener('click', () => toggleActivoProfesor(b.dataset.toggle, b.dataset.activo === 'true'));
  });
  document.querySelectorAll('[data-editar]').forEach(b => {
    b.addEventListener('click', () => { selectedProfesorUid = b.dataset.editar; navigate('profesorEditar'); });
  });
  document.querySelectorAll('[data-borrar]').forEach(b => {
    b.addEventListener('click', () => borrarProfesor(b.dataset.borrar, b.dataset.nombre));
  });
}

// ---------- Conexión con Drive (vía servidor) ----------
function normalizeNombre(s){
  return String(s).trim().toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z ,]/g,' ').replace(/\s+/g,' ').trim();
}

function cursoDesdeNombreCarpeta(nombre){
  const n = nombre.toLowerCase();
  if(n.includes('1er') || n.includes('1ro') || n.includes('1°')) return '1';
  if(n.includes('2do') || n.includes('2°')) return '2';
  if(n.includes('3er') || n.includes('3ro') || n.includes('3°')) return '3';
  if(n.includes('4to') || n.includes('4°')) return '4';
  if(n.includes('5to') || n.includes('5°')) return '5';
  return null;
}

const CORRECCIONES_APELLIDO = { 'choquehuaca': 'choquehuanca' };

function emparejarAlumno(nombreArchivo, curso){
  const nn = normalizeNombre(nombreArchivo.replace(/\.xlsx$/i,''));
  const partes = nn.split(',');
  let ap = (partes[0]||'').trim();
  ap = CORRECCIONES_APELLIDO[ap] || ap;
  const nom = (partes[1]||'').trim();
  const nomPrimero = nom.split(' ')[0] || '';
  const candidatos = getStudents().filter(s => s.curso === curso && normalizeNombre(s.apellido).split(' ')[0] === ap.split(' ')[0]);
  if(candidatos.length === 0) return null;
  const conNombre = candidatos.filter(s => nomPrimero && normalizeNombre(s.nombre).split(' ').includes(nomPrimero));
  return (conNombre[0] || candidatos[0]);
}

// Llama a la Cloud Function. Puede tardar varios minutos si hay mucho pendiente.
async function llamarDrive(datos){
  const fn = httpsCallable(fbFunctions, 'sincronizarDrive', { timeout: 540000 });
  const r = await fn(datos);
  return r.data;
}

// Traduce los errores de Google a algo que se entienda y diga qué hacer.
function explicarErrorDrive(msg){
  msg = String(msg || '');
  if(msg.startsWith('API_DESHABILITADA')){
    return 'Falta activar las APIs de Google Sheets y Google Drive en el proyecto (se hace una sola vez). Abrí los dos enlaces de abajo y tocá "Habilitar" en cada uno.';
  }
  if(msg.startsWith('SIN_ACCESO')){
    return 'La cuenta robot todavía no ve la carpeta. Revisá que esté compartida con la dirección de arriba como Editor.';
  }
  return msg;
}

// Filas que va a generar cada registro (mismo criterio que el servidor), solo para
// contar lo pendiente: presente no se escribe, tarde + retiro son dos filas.
function filasPlanilla(rec){
  let n = 0;
  if(rec.exencion || rec.estado === 'A' || rec.estado === 'J' || rec.estado === 'T' || rec.estado === 'TJ') n++;
  if(tieneRetiro(rec)) n++;
  return n;
}

function registrosPendientesDeSync(){
  const asistencia = [];
  let filas = 0;
  Object.entries(cache.attendance).forEach(([id, rec]) => {
    if(rec.driveSynced) return;
    const studentId = rec.studentId || id.split('|')[1];
    if(!cache.driveMapping[studentId]) return;
    const n = filasPlanilla(rec);
    if(!n) return;
    asistencia.push(id);
    filas += n;
  });
  const ef = [];
  Object.entries(cache.ef).forEach(([key, rec]) => {
    if(rec.driveSynced) return;
    const [fecha, studentId] = key.split('|');
    if(!cache.driveMapping[studentId]) return;
    if(rec.tipo !== 'falta' && rec.tipo !== 'saf') return;
    ef.push(docId(`${fecha}_${studentId}`));
    filas++;
  });
  return { asistencia, ef, filas };
}

async function marcarTodoComoYaSincronizado(){
  if(!(await customConfirm('Esto marca todas las faltas/tardanzas ya cargadas hasta ahora como "ya reflejadas en Drive" (porque ya las tenés a mano en el Excel), para que la sincronización de acá en más solo mande lo nuevo. ¿Confirmás?'))) return;
  const estadoEl = document.getElementById('syncEstado');
  const pendientesAtt = Object.entries(cache.attendance).filter(([key, rec]) => !rec.driveSynced);
  const pendientesEfRaw = Object.entries(cache.ef).filter(([key, rec]) => !rec.driveSynced);
  const total = pendientesAtt.length + pendientesEfRaw.length;
  if(total === 0){ if(estadoEl) estadoEl.textContent = 'Ya estaba todo marcado.'; return; }
  let hechos = 0;
  try{
    for(let i=0; i<pendientesAtt.length; i+=450){
      const lote = pendientesAtt.slice(i, i+450);
      const batch = writeBatch(db);
      lote.forEach(([key]) => { batch.set(doc(db,'attendance',docId(key)), { driveSynced: true }, { merge: true }); });
      await batch.commit();
      hechos += lote.length;
      if(estadoEl) estadoEl.textContent = `Marcando... ${hechos}/${total}`;
    }
    for(let i=0; i<pendientesEfRaw.length; i+=450){
      const lote = pendientesEfRaw.slice(i, i+450);
      const batch = writeBatch(db);
      lote.forEach(([key]) => {
        const [fecha, studentId] = key.split('|');
        batch.set(doc(db,'ef', docId(`${fecha}_${studentId}`)), { driveSynced: true }, { merge: true });
      });
      await batch.commit();
      hechos += lote.length;
      if(estadoEl) estadoEl.textContent = `Marcando... ${hechos}/${total}`;
    }
    if(estadoEl) estadoEl.textContent = `Listo: ${hechos} registros marcados como ya sincronizados.`;
    showToast('Todo marcado como ya sincronizado');
    await recargarHistoricoAsistencia(); // se tocaron fechas viejas, fuera del listener en vivo
    render();
  }catch(err){
    console.error(err);
    if(estadoEl) estadoEl.textContent = `Se cortó en el registro ${hechos}/${total} por un error: ${err.message||err}. Tocá el botón de nuevo para seguir con el resto.`;
  }
}

let driveInfo = { email: null, acceso: null, error: null, subcarpetas: 0, cargando: false };
let driveMapeoPendiente = null;
let driveTrabajando = false;

async function cargarEstadoDrive(probarCarpeta){
  driveInfo.cargando = true; render();
  try{
    const r = await llamarDrive({ accion: 'estado', carpetaId: probarCarpeta ? DRIVE_ROOT_FOLDER_ID : undefined });
    driveInfo.email = r.email || driveInfo.email;
    if(probarCarpeta){
      driveInfo.acceso = !!r.acceso;
      driveInfo.error = r.acceso ? null : explicarErrorDrive(r.error);
      driveInfo.errorCrudo = r.acceso ? null : String(r.error || '');
      driveInfo.subcarpetas = r.subcarpetas || 0;
    }
  }catch(err){
    driveInfo.error = 'No se pudo hablar con el servidor: ' + (err.message || err);
  }
  driveInfo.cargando = false; render();
}

async function emparejarPlanillasDrive(){
  if(driveTrabajando) return;
  driveTrabajando = true;
  const estado = document.getElementById('emparejarEstado');
  if(estado) estado.textContent = 'Buscando planillas en Drive...';
  try{
    const r = await llamarDrive({ accion: 'listar', carpetaId: DRIVE_ROOT_FOLDER_ID });
    const mapeo = {}; const sinMatch = []; let total = 0; let carpetasCurso = 0;
    r.carpetas.forEach(c => {
      const curso = cursoDesdeNombreCarpeta(c.name);
      if(!curso) return;
      carpetasCurso++;
      c.archivos.forEach(a => {
        total++;
        const alumno = emparejarAlumno(a.name, curso);
        if(alumno) mapeo[alumno.id] = { spreadsheetId: a.id, nombreArchivo: a.name, curso };
        else sinMatch.push(`${c.name} / ${a.name}`);
      });
    });
    driveMapeoPendiente = { mapeo, sinMatch, total, carpetasCurso };
  }catch(err){
    driveMapeoPendiente = null;
    if(estado) estado.textContent = explicarErrorDrive(err.message);
    driveTrabajando = false;
    return;
  }
  driveTrabajando = false;
  render();
}

function guardarMapeoDrive(){
  if(!driveMapeoPendiente) return;
  const ops = Object.entries(driveMapeoPendiente.mapeo).map(([studentId, info]) => setDoc(doc(db,'driveMapping', studentId), info));
  Promise.all(ops).then(() => { showToast('Emparejamiento guardado'); driveMapeoPendiente = null; render(); }).catch(err=>showSaveError(err));
}

async function filaDePruebaDrive(){
  const sid = document.getElementById('alumnoPruebaSelect').value;
  const info = cache.driveMapping[sid];
  const estado = document.getElementById('pruebaEstado');
  if(!info){ estado.textContent = 'Ese alumno no tiene planilla emparejada.'; return; }
  estado.textContent = 'Escribiendo...';
  try{
    const r = await llamarDrive({ accion: 'prueba', spreadsheetId: info.spreadsheetId });
    estado.textContent = `Listo: quedó en la fila ${r.fila} de la planilla de ese alumno. Revisala en Drive y después borrá esa fila a mano.`;
  }catch(err){
    estado.textContent = explicarErrorDrive(err.message);
  }
}

async function sincronizarAhoraDrive(){
  if(driveTrabajando) return;
  const { asistencia, ef, filas } = registrosPendientesDeSync();
  const estado = document.getElementById('syncEstado');
  if(!asistencia.length && !ef.length){ if(estado) estado.textContent = 'No hay nada pendiente para pasar a Drive.'; return; }
  if(!(await customConfirm(`Se van a agregar ${filas} fila${filas!==1?'s':''} en las planillas de Drive. Puede tardar un par de minutos; podés seguir usando la app mientras tanto. ¿Sincronizar?`, { textoSi: 'Sincronizar' }))) return;
  driveTrabajando = true;
  render();
  try{
    const r = await llamarDrive({ accion: 'sincronizar', asistencia, ef });
    // Lo de fechas viejas no lo ve el listener en vivo: se actualiza la copia local.
    (r.sincronizados.asistencia || []).forEach(id => tocarHistorico(id, { driveSynced: true }));
    let msg = `Listo: ${r.filas} fila${r.filas!==1?'s':''} en las planillas de ${r.alumnos} alumno${r.alumnos!==1?'s':''}.`;
    if(r.errores && r.errores.length){
      msg += ` ${r.errores.length} con problema: ` + r.errores.slice(0,3).map(e => `${e.archivo || e.studentId} (${explicarErrorDrive(e.mensaje)})`).join('; ');
    }
    driveTrabajando = false;
    render();
    await customAlert(msg);
  }catch(err){
    driveTrabajando = false;
    render();
    await customAlert('No se pudo sincronizar: ' + explicarErrorDrive(err.message) + ' Lo que no se llegó a pasar queda pendiente para la próxima vez.');
  }
}

function renderConexionDrive(){
  if(driveInfo.email === null && !driveInfo.cargando) setTimeout(() => cargarEstadoDrive(true), 0);
  const mapeados = Object.keys(cache.driveMapping || {}).length;
  const pend = registrosPendientesDeSync();
  const enlacesApi = `
    <p style="font-size:12.5px;margin:8px 0 0;line-height:1.7;">
      <a href="https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=app-isp-f601c" target="_blank" rel="noopener">Activar Google Sheets API</a><br>
      <a href="https://console.cloud.google.com/apis/library/drive.googleapis.com?project=app-isp-f601c" target="_blank" rel="noopener">Activar Google Drive API</a>
    </p>`;
  const estadoAcceso = driveInfo.cargando
    ? `<p class="drive-estado">Comprobando…</p>`
    : (driveInfo.acceso === true
        ? `<p class="drive-estado ok">${icon('check')} La cuenta robot ve la carpeta (${driveInfo.subcarpetas} subcarpetas).</p>`
        : (driveInfo.error ? `<p class="drive-estado error">${escapeHtml(driveInfo.error)}</p>${(driveInfo.errorCrudo||'').startsWith('API_DESHABILITADA') ? enlacesApi : ''}` : ''));

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Conexión con Drive</h1>
    </div>
    <p class="info-note" style="margin-top:0;">${icon('info')}Las faltas se pasan a las planillas desde el servidor de la app: no hace falta iniciar sesión con Google ni tener la app abierta mientras sincroniza.</p>

    <p class="section-label">1 · Compartir la carpeta (una sola vez)</p>
    <div class="config-card">
      <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 8px;">En Drive, abrí la carpeta de las planillas de los alumnos, tocá <b>Compartir</b> y agregá esta dirección como <b>Editor</b> (sin enviar notificación):</p>
      <div class="drive-email">
        <span id="robotEmail">${driveInfo.email ? escapeHtml(driveInfo.email) : 'cargando…'}</span>
        ${driveInfo.email ? `<button class="btn-chip" id="copiarEmailBtn">Copiar</button>` : ''}
      </div>
      <button class="btn-secondary" id="probarAccesoBtn" style="width:100%;margin-top:10px;">Comprobar acceso</button>
      ${estadoAcceso}
    </div>

    <p class="section-label" style="margin-top:20px;">2 · Emparejar planillas con alumnos</p>
    <div class="config-card">
      <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 8px;">${mapeados} alumno${mapeados!==1?'s':''} con planilla emparejada. Volvé a hacerlo cuando agregues alumnos o planillas nuevas.</p>
      <button class="btn-secondary" id="emparejarBtn" style="width:100%;">Buscar y emparejar planillas</button>
      <p id="emparejarEstado" style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;line-height:1.5;">${driveMapeoPendiente ? `Encontré ${driveMapeoPendiente.total} planillas en ${driveMapeoPendiente.carpetasCurso} carpetas de curso.<br>Emparejadas: <b>${Object.keys(driveMapeoPendiente.mapeo).length}</b> · Sin emparejar: <b>${driveMapeoPendiente.sinMatch.length}</b>${driveMapeoPendiente.sinMatch.length ? '<br>' + driveMapeoPendiente.sinMatch.slice(0,15).map(x=>'· '+escapeHtml(x)).join('<br>') : ''}` : ''}</p>
      ${driveMapeoPendiente ? `<button class="btn-primary" id="guardarMapeoBtn" style="width:100%;margin-top:8px;">Guardar emparejamiento</button>` : ''}
    </div>

    ${mapeados ? `
    <p class="section-label" style="margin-top:20px;">3 · Probar con un alumno</p>
    <div class="config-card">
      <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 8px;">Escribe una fila marcada como PRUEBA en la planilla de un solo alumno, para que confirmes que queda en el lugar correcto.</p>
      <select id="alumnoPruebaSelect" style="margin-bottom:10px;">
        ${getStudents().filter(s => cache.driveMapping[s.id]).sort((a,b)=>a.apellido.localeCompare(b.apellido)).map(s => `<option value="${s.id}">${s.curso}° · ${s.apellido}, ${s.nombre}</option>`).join('')}
      </select>
      <button class="btn-secondary" id="probarEscrituraBtn" style="width:100%;">Escribir fila de prueba</button>
      <p id="pruebaEstado" style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;"></p>
    </div>

    <p class="section-label" style="margin-top:20px;">4 · Sincronizar</p>
    <div class="config-card">
      <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 10px;">Pendiente: <b>${pend.filas}</b> fila${pend.filas!==1?'s':''} (faltas, tardanzas, retiros y Ed. Física que todavía no están en las planillas).</p>
      <button class="btn-primary" id="sincronizarBtn" style="width:100%;" ${driveTrabajando ? 'disabled' : ''}>${driveTrabajando ? 'Sincronizando… puede tardar unos minutos' : 'Sincronizar ahora'}</button>
      <p id="syncEstado" style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;"></p>
      <details style="margin-top:6px;">
        <summary style="font-size:12px;color:var(--ink-soft);cursor:pointer;">¿Ya lo tenés cargado a mano en las planillas?</summary>
        <p style="font-size:12px;color:var(--ink-soft);margin:8px 0;">Si lo pendiente ya lo pasaste vos a mano, marcalo como sincronizado para que no se duplique.</p>
        <button class="btn-secondary" id="marcarSyncBtn" style="width:100%;">Marcar todo lo actual como ya sincronizado</button>
      </details>
    </div>
    ` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  document.getElementById('probarAccesoBtn').addEventListener('click', () => cargarEstadoDrive(true));
  if(document.getElementById('copiarEmailBtn')){
    document.getElementById('copiarEmailBtn').addEventListener('click', async () => {
      try{ await navigator.clipboard.writeText(driveInfo.email); showToast('Dirección copiada'); }
      catch(e){ await customAlert(driveInfo.email); }
    });
  }
  document.getElementById('emparejarBtn').addEventListener('click', emparejarPlanillasDrive);
  if(document.getElementById('guardarMapeoBtn')) document.getElementById('guardarMapeoBtn').addEventListener('click', guardarMapeoDrive);
  if(document.getElementById('probarEscrituraBtn')) document.getElementById('probarEscrituraBtn').addEventListener('click', filaDePruebaDrive);
  if(document.getElementById('sincronizarBtn')) document.getElementById('sincronizarBtn').addEventListener('click', sincronizarAhoraDrive);
  if(document.getElementById('marcarSyncBtn')) document.getElementById('marcarSyncBtn').addEventListener('click', marcarTodoComoYaSincronizado);
}

function renderProfesorNuevo(){
  const conocidos = profesoresConocidos();
  const materias = materiasDisponibles();
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Nuevo profesor</h1>
    </div>
    <div class="field-row">
      <label>Profesor/a</label>
      <select id="profesorConocidoSelect">
        <option value="">-- Elegir de la lista o cargar abajo --</option>
        ${Object.keys(conocidos).sort().map(n => `<option value="${n}">${n}</option>`).join('')}
      </select>
    </div>
    <div class="field-row"><label>Nombre</label><input id="nuevoProfNombre" type="text"></div>
    <div class="field-row"><label>Mail</label><input id="nuevoProfEmail" type="email"></div>
    <div class="field-row"><label>Contraseña</label><input id="nuevoProfPass" type="text" placeholder="mínimo 6 caracteres"></div>
    <p style="font-size:12.5px;color:var(--ink-soft);margin:10px 0 6px;">Materias</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;">
      ${materias.map(m => `<label class="curso-check-label"><input type="checkbox" class="materia-check" value="${m}"> ${m}</label>`).join('')}
    </div>
    <p style="font-size:12.5px;color:var(--ink-soft);margin:10px 0 6px;">Cursos a cargo</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;">
      ${CURSOS.map(c => `<label class="curso-check-label"><input type="checkbox" class="curso-check" value="${c}"> <span class="curso-dot c${c}"></span>${c}° A</label>`).join('')}
    </div>
    <p style="font-size:11.5px;color:var(--ink-soft);margin:-8px 0 12px;">Si elegís un/a profesor/a de la lista, las materias y cursos se marcan solos según el horario — revisalos y ajustá si hace falta.</p>
    <p id="nuevoProfError" style="font-size:12px;color:var(--stamp);min-height:16px;margin:0 0 8px;"></p>
    <button class="btn-primary" id="crearProfBtn">Crear cuenta</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('profesores'));
  document.getElementById('crearProfBtn').addEventListener('click', crearProfesor);
  document.getElementById('profesorConocidoSelect').addEventListener('change', (e) => {
    const nombre = e.target.value;
    if(!nombre) return;
    document.getElementById('nuevoProfNombre').value = nombre;
    const datos = conocidos[nombre];
    window.__asignacionesConocidas = datos;
    document.querySelectorAll('.materia-check').forEach(c => { c.checked = datos.materias.includes(c.value); });
    document.querySelectorAll('.curso-check').forEach(c => { c.checked = datos.cursos.includes(c.value); });
  });
}

// ---------- Home del profesor ----------
async function cambiarPasswordProfesor(){
  if(modoPruebaBloquea()) return;
  const nueva = await customPrompt('Nueva contraseña (mínimo 6 caracteres):');
  if(!nueva) return;
  if(nueva.length < 6){ await customAlert('Debe tener al menos 6 caracteres.'); return; }
  updatePassword(auth.currentUser, nueva)
    .then(() => showToast('Contraseña actualizada'))
    .catch(() => customAlert('No se pudo cambiar. Puede que necesites volver a iniciar sesión y probar de nuevo.'));
}

function renderTeacherHome(){
  const stamp = fmtDateStamp();
  $app.innerHTML = `
    <div class="greeting-row">
      <div>
        <p class="hi">Hola</p>
        <p class="name">${currentTeacher.nombre}</p>
      </div>
      <div class="stamp">
        <div class="dow">${stamp.dow}</div>
        <div class="dom">${stamp.dom}</div>
        <div class="mon">${stamp.mon}</div>
      </div>
    </div>

    ${notifStatusBannerHtml()}

    <div class="module-list">
      ${moduleRow('clipboard','Asistencia diaria','Solo consulta, por curso', 'asistencia')}
      ${moduleRow('alert','Sanciones e incidentes','Registro por alumno', 'sanciones')}
      ${moduleRow('file','Valoraciones pedagógicas','Bimestral, por materia', 'valoraciones')}
      ${moduleRow('chart','Notas','Cuatrimestral, escala 1 a 10', 'notas')}
      ${moduleRow('users','Resumen del alumno','Faltas, apercibimientos y certificados', 'resumen')}
      ${moduleRow('calendar','Agenda','Exámenes, recuperatorios, TPs y más', 'agenda')}
    </div>

    <p style="text-align:center;margin-top:18px;">
      <a href="#" id="cambiarPassLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Cambiar contraseña</a>
      &nbsp;·&nbsp;
      <a href="#" id="salirProfLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Salir</a>
    </p>
  `;
  document.querySelectorAll('.module-row').forEach(r => r.addEventListener('click', () => navigate(r.dataset.route)));
  document.getElementById('cambiarPassLink').addEventListener('click', (e) => { e.preventDefault(); cambiarPasswordProfesor(); });
  document.getElementById('salirProfLink').addEventListener('click', (e) => { e.preventDefault(); signOut(auth); });
  if(document.getElementById('activarNotifBtn')){
    document.getElementById('activarNotifBtn').addEventListener('click', () => activarNotificaciones(true));
  }
}

function renderStudentHome(){
  const stamp = fmtDateStamp();
  const avisos = agendaAvisosPendientes();
  $app.innerHTML = `
    <div class="greeting-row">
      <div>
        <p class="hi">Hola</p>
        <p class="name">${(currentStudentAuth.nombre.split(',')[1]||currentStudentAuth.nombre).trim()}</p>
      </div>
      <div class="stamp">
        <div class="dow">${stamp.dow}</div>
        <div class="dom">${stamp.dom}</div>
        <div class="mon">${stamp.mon}</div>
      </div>
    </div>

    ${avisosBannerHtml(avisos)}
    ${notifStatusBannerHtml()}

    <div class="module-list big">
      ${moduleRow('clipboard','Mis faltas','Bimestre, materias y detalle día por día', 'studentFaltas')}
      ${moduleRow('chart','Mis notas','1er y 2do cuatrimestre', 'studentNotas')}
      ${moduleRow('calendar','Mi horario','Materias y profesores por día', 'studentHorario')}
      ${moduleRow('calendar','Mi agenda','Exámenes, recuperatorios, TPs y más', 'studentAgenda')}
      ${moduleRow('users','Mis profesores','Materia y mail de contacto', 'studentProfesores')}
    </div>

    <p style="text-align:center;margin-top:18px;">
      <a href="#" id="cambiarPassLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Cambiar contraseña</a>
      &nbsp;·&nbsp;
      <a href="#" id="salirProfLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Salir</a>
    </p>
  `;
  marcarAvisosVistos(avisos);
  if(document.getElementById('activarNotifBtn')){
    document.getElementById('activarNotifBtn').addEventListener('click', () => activarNotificaciones(true));
  }
  document.querySelectorAll('.module-row').forEach(r => r.addEventListener('click', () => {
    selectedStudentId = currentStudentAuth.studentId;
    if(r.dataset.route === 'studentFaltas') navigate('resumenAlumno');
    else if(r.dataset.route === 'studentNotas') navigate('resumenNotas');
    else navigate(r.dataset.route);
  }));
  document.getElementById('cambiarPassLink').addEventListener('click', (e) => { e.preventDefault(); cambiarPasswordProfesor(); });
  document.getElementById('salirProfLink').addEventListener('click', (e) => { e.preventDefault(); signOut(auth); });
}

function renderStudentProfesores(){
  const curso = currentStudentAuth.curso;
  const profesores = Object.values(cache.teachers).filter(t => (t.cursos||[]).includes(curso) && t.activo!==false)
    .sort((a,b)=> (a.nombre||'').localeCompare(b.nombre||''));

  const rows = profesores.map(t => `
    <div class="sancion-item">
      <p class="folio">${t.nombre}</p>
      <p class="motivo">${(t.materias||[]).join(', ') || 'sin materia'}</p>
      <p class="motivo" style="margin-top:2px;"><a href="mailto:${t.email}" style="color:var(--ink);text-decoration:underline;">${t.email}</a></p>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Mis profesores</h1>
    </div>
    ${profesores.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Todavía no hay profesores cargados para tu curso.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('studentHome'));
}

function renderViewerHome(){
  const stamp = fmtDateStamp();
  $app.innerHTML = `
    <div class="greeting-row">
      <div>
        <p class="hi">Hola</p>
        <p class="name">${currentViewer.nombre}</p>
      </div>
      <div class="stamp">
        <div class="dow">${stamp.dow}</div>
        <div class="dom">${stamp.dom}</div>
        <div class="mon">${stamp.mon}</div>
      </div>
    </div>

    <div class="module-list big">
      ${moduleRow('users','Resumen del alumno','Faltas, apercibimientos, valoraciones y notas', 'resumen')}
      ${moduleRow('chart','Vista por curso','Alertas y riesgo de SCP de un vistazo', 'vistaCurso')}
      ${moduleRow('chart','Vista general del colegio','Los 5 cursos comparados', 'vistaGeneral')}
      ${moduleRow('clipboard','Asistencia de hoy','Quiénes están ausentes', 'detalleAsistenciaHoy')}
      ${moduleRow('alert','Alumnos en alerta','5 o más faltas este bimestre', 'detalleAlertas')}
    </div>

    <p class="info-note">${icon('info')}Acceso de solo lectura — no podés cargar ni modificar nada desde acá.</p>

    <p style="text-align:center;margin-top:18px;">
      <a href="#" id="cambiarPassLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Cambiar contraseña</a>
      &nbsp;·&nbsp;
      <a href="#" id="salirProfLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Salir</a>
    </p>
  `;
  document.querySelectorAll('.module-row').forEach(r => r.addEventListener('click', () => navigate(r.dataset.route)));
  document.getElementById('cambiarPassLink').addEventListener('click', (e) => { e.preventDefault(); cambiarPasswordProfesor(); });
  document.getElementById('salirProfLink').addEventListener('click', (e) => { e.preventDefault(); signOut(auth); });
}

// ---------- Panel de administración de accesos de lectura ----------
async function crearViewer(){
  const nombre = document.getElementById('nuevoViewerNombre').value.trim();
  const email = document.getElementById('nuevoViewerEmail').value.trim();
  const pass = document.getElementById('nuevoViewerPass').value;
  const errEl = document.getElementById('nuevoViewerError');
  errEl.textContent = '';
  if(!nombre || !email || !pass){ errEl.textContent = 'Completá nombre, mail y contraseña.'; return; }
  if(pass.length < 6){ errEl.textContent = 'La contraseña debe tener al menos 6 caracteres.'; return; }
  const btn = document.getElementById('crearViewerBtn');
  btn.textContent = 'Creando…';
  btn.disabled = true;
  try{
    const cred = await createUserWithEmailAndPassword(authSecundaria, email, pass);
    await setDoc(doc(db,'viewers',cred.user.uid), { nombre, email, activo: true, creadoPor: getUsuario() });
    await signOut(authSecundaria);
    showToast('Acceso de lectura creado');
    navigate('lectura');
  }catch(err){
    console.error(err);
    errEl.textContent = err.code === 'auth/email-already-in-use' ? 'Ese mail ya tiene una cuenta.' : 'No se pudo crear la cuenta.';
    btn.textContent = 'Crear cuenta';
    btn.disabled = false;
  }
}
function toggleActivoViewer(uid, activo){
  setDoc(doc(db,'viewers',uid), { activo: !activo }, { merge: true }).catch(err=>showSaveError(err));
}
async function borrarViewer(uid, nombre){
  if(!(await customConfirm(`¿Borrar el acceso de ${nombre}? No se puede deshacer.`, {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'viewers',uid)).then(() => showToast('Acceso borrado')).catch(err=>showSaveError(err));
}

async function crearAlumnoCuenta(){
  const studentId = document.getElementById('nuevoAlumnoSelect').value;
  const email = document.getElementById('nuevoAlumnoEmail').value.trim();
  const pass = document.getElementById('nuevoAlumnoPass').value;
  const errEl = document.getElementById('nuevoAlumnoError');
  errEl.textContent = '';
  if(!studentId){ errEl.textContent = 'Elegí un alumno de la lista.'; return; }
  if(!email || !pass){ errEl.textContent = 'Completá mail y contraseña.'; return; }
  if(pass.length < 6){ errEl.textContent = 'La contraseña debe tener al menos 6 caracteres.'; return; }
  const yaExiste = Object.values(cache.students_auth).some(a => a.studentId === studentId);
  if(yaExiste){ errEl.textContent = 'Este alumno ya tiene una cuenta creada.'; return; }
  const student = getStudents().find(s => s.id === studentId);
  const btn = document.getElementById('crearAlumnoBtn');
  btn.textContent = 'Creando…';
  btn.disabled = true;
  try{
    const cred = await createUserWithEmailAndPassword(authSecundaria, email, pass);
    await setDoc(doc(db,'students_auth',cred.user.uid), { studentId, nombre: `${student.apellido}, ${student.nombre}`, curso: student.curso, email, activo: true, creadoPor: getUsuario() });
    await signOut(authSecundaria);
    showToast('Cuenta de alumno creada');
    navigate('alumnosCuentas');
  }catch(err){
    console.error(err);
    errEl.textContent = err.code === 'auth/email-already-in-use' ? 'Ese mail ya tiene una cuenta.' : 'No se pudo crear la cuenta.';
    btn.textContent = 'Crear cuenta';
    btn.disabled = false;
  }
}
function toggleActivoAlumnoCuenta(uid, activo){
  setDoc(doc(db,'students_auth',uid), { activo: !activo }, { merge: true }).catch(err=>showSaveError(err));
}
async function borrarAlumnoCuenta(uid, nombre){
  if(!(await customConfirm(`¿Borrar la cuenta de ${nombre}? No se puede deshacer.`, {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'students_auth',uid)).then(() => showToast('Cuenta borrada')).catch(err=>showSaveError(err));
}

async function crearCuentasMasivo(){
  const pendientes = window.__cargaMasivaPendiente || [];
  if(pendientes.length === 0) return;
  if(!(await customConfirm(`Se van a crear ${pendientes.length} cuentas con la contraseña genérica. ¿Confirmás?`))) return;
  const estadoEl = document.getElementById('masivoEstado');
  let ok = 0, error = 0;
  for(const a of pendientes){
    try{
      const cred = await createUserWithEmailAndPassword(authSecundaria, a.email, getPasswordGenerica());
      await setDoc(doc(db,'students_auth',cred.user.uid), { studentId: a.studentId, nombre: a.nombre, curso: a.curso, email: a.email, activo: true, creadoPor: getUsuario() });
      await signOut(authSecundaria);
      ok++;
    }catch(err){
      console.error(a.email, err);
      error++;
    }
    if(estadoEl) estadoEl.textContent = `Creando... ${ok+error}/${pendientes.length} (${error} con error)`;
  }
  if(estadoEl) estadoEl.textContent = `Listo: ${ok} cuentas creadas${error?`, ${error} con error (revisá la consola, probablemente mails repetidos)`:''}.`;
  window.__cargaMasivaPendiente = null;
  showToast('Carga masiva terminada');
}

function renderAlumnosCuentas(){
  const cuentas = Object.values(cache.students_auth).sort((a,b)=> (a.nombre||'').localeCompare(b.nombre||''));
  const filtro = (window.__alumnoFiltro||'').toLowerCase();
  const visibles = filtro ? cuentas.filter(a => (a.nombre||'').toLowerCase().includes(filtro)) : cuentas;
  const conCuenta = new Set(cuentas.map(a => a.studentId));
  const disponibles = getStudents().filter(s => !conCuenta.has(s.id)).sort((a,b)=> Number(a.curso)-Number(b.curso) || a.apellido.localeCompare(b.apellido));

  const rows = visibles.map(a => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <p class="folio"><span class="status-dot ${a.activo===false?'off':'on'}"></span><span class="curso-chip c${a.curso}">${a.curso}°</span> ${a.nombre} ${a.activo===false ? '· inactivo' : ''}</p>
          <p class="motivo">${a.email}</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
          <button class="btn-chip" data-toggle="${a.uid}" data-activo="${a.activo!==false}">${a.activo===false ? 'Reactivar' : 'Dar de baja'}</button>
          <button class="btn-chip danger" data-borrar="${a.uid}" data-nombre="${a.nombre}">Borrar</button>
        </div>
      </div>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Cuentas de alumnos</h1>
    </div>
    <input type="text" id="filtroAlumnoCuenta" placeholder="Buscar por nombre..." style="margin-bottom:12px;" value="${window.__alumnoFiltro||''}">
    <p class="section-label">Cuentas existentes (${visibles.length} de ${cuentas.length})</p>
    ${visibles.length ? `<div class="sancion-list" style="margin-bottom:18px;">${rows}</div>` : `<p style="font-size:13px;color:var(--ink-soft);margin-bottom:18px;">${cuentas.length ? 'Nadie coincide con esa búsqueda.' : 'Todavía no hay cuentas de alumnos.'}</p>`}

    <p class="section-label">Carga masiva</p>
    <div class="config-card" style="margin-bottom:18px;">
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Subí el archivo de alumnos emparejados con su mail (JSON), y creá todas esas cuentas de una vez con la contraseña genérica <b>${getPasswordGenerica()}</b> (cada alumno la puede cambiar después; se edita en Configuración).</p>
      <input type="file" id="cargaMasivaInput" accept="application/json" style="margin-bottom:10px;">
      <p id="masivoPreview" style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;"></p>
      <button class="btn-primary" id="crearMasivoBtn" style="width:100%;display:none;">Crear todas las cuentas</button>
      <p id="masivoEstado" style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;"></p>
    </div>

    <p class="section-label">Nueva cuenta (una por una)</p>
    <div class="field-row">
      <label>Alumno/a</label>
      <select id="nuevoAlumnoSelect">
        <option value="">-- Elegir --</option>
        ${disponibles.map(s => `<option value="${s.id}">${s.curso}° A · ${s.apellido}, ${s.nombre}</option>`).join('')}
      </select>
    </div>
    <div class="field-row"><label>Mail</label><input id="nuevoAlumnoEmail" type="email"></div>
    <div class="field-row"><label>Contraseña</label><input id="nuevoAlumnoPass" type="text" placeholder="mínimo 6 caracteres"></div>
    <p id="nuevoAlumnoError" style="font-size:12px;color:var(--stamp);min-height:16px;margin:0 0 8px;"></p>
    <button class="btn-primary" id="crearAlumnoBtn">Crear cuenta</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  document.getElementById('filtroAlumnoCuenta').addEventListener('input', (e) => { window.__alumnoFiltro = e.target.value; render(); });
  document.getElementById('crearAlumnoBtn').addEventListener('click', crearAlumnoCuenta);
  document.getElementById('cargaMasivaInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const data = JSON.parse(reader.result);
        const lista = data.alumnos || [];
        const conCuentaYa = new Set(Object.values(cache.students_auth).map(a => a.studentId));
        const pendientes = lista.filter(a => !conCuentaYa.has(a.studentId)).map(a => {
          const st = getStudents().find(s => s.id === a.studentId);
          return Object.assign({}, a, { curso: st ? st.curso : null });
        });
        const yaTenian = lista.length - pendientes.length;
        window.__cargaMasivaPendiente = pendientes;
        document.getElementById('masivoPreview').textContent = `${lista.length} en el archivo · ${pendientes.length} para crear · ${yaTenian} ya tenían cuenta (se omiten).`;
        document.getElementById('crearMasivoBtn').style.display = pendientes.length ? 'block' : 'none';
      }catch(err){
        document.getElementById('masivoPreview').textContent = 'No pude leer ese archivo, revisá que sea el JSON correcto.';
      }
    };
    reader.readAsText(file);
  });
  document.getElementById('crearMasivoBtn').addEventListener('click', crearCuentasMasivo);
  document.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => toggleActivoAlumnoCuenta(b.dataset.toggle, b.dataset.activo === 'true')));
  document.querySelectorAll('[data-borrar]').forEach(b => b.addEventListener('click', () => borrarAlumnoCuenta(b.dataset.borrar, b.dataset.nombre)));
}

function renderLectura(){
  const viewers = Object.values(cache.viewers).sort((a,b)=> (a.nombre||'').localeCompare(b.nombre||''));
  const rows = viewers.map(v => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <p class="folio"><span class="status-dot ${v.activo===false?'off':'on'}"></span>${v.nombre} ${v.activo===false ? '· inactivo' : ''}</p>
          <p class="motivo">${v.email}</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
          <button class="btn-chip" data-toggle="${v.uid}" data-activo="${v.activo!==false}">${v.activo===false ? 'Reactivar' : 'Dar de baja'}</button>
          <button class="btn-chip danger" data-borrar="${v.uid}" data-nombre="${v.nombre}">Borrar</button>
        </div>
      </div>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Acceso de lectura</h1>
    </div>
    <p class="section-label">Cuentas existentes</p>
    ${viewers.length ? `<div class="sancion-list" style="margin-bottom:18px;">${rows}</div>` : `<p style="font-size:13px;color:var(--ink-soft);margin-bottom:18px;">Todavía no hay cuentas de lectura.</p>`}

    <p class="section-label">Nueva cuenta</p>
    <div class="field-row"><label>Nombre</label><input id="nuevoViewerNombre" type="text"></div>
    <div class="field-row"><label>Mail</label><input id="nuevoViewerEmail" type="email"></div>
    <div class="field-row"><label>Contraseña</label><input id="nuevoViewerPass" type="text" placeholder="mínimo 6 caracteres"></div>
    <p id="nuevoViewerError" style="font-size:12px;color:var(--stamp);min-height:16px;margin:0 0 8px;"></p>
    <button class="btn-primary" id="crearViewerBtn">Crear cuenta</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  document.getElementById('crearViewerBtn').addEventListener('click', crearViewer);
  document.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => toggleActivoViewer(b.dataset.toggle, b.dataset.activo === 'true')));
  document.querySelectorAll('[data-borrar]').forEach(b => b.addEventListener('click', () => borrarViewer(b.dataset.borrar, b.dataset.nombre)));
}

// ---------- Valoraciones pedagógicas bimestrales ----------
const OPCIONES_VALORACION = {
  participa: ['Activamente','A veces','Casi nunca'],
  cumpleTareas: ['Siempre','A veces','Nunca'],
  calidad: ['Excelente','Bueno','Regular','Malo'],
  comportamiento: ['Excelente','Bueno','Regular','Malo'],
  objetivos: ['Avanzadas','Suficientes','Insuficientes'],
  proyeccion: [
    'que de seguir así, aprobará el cuatrimestre y la asignatura.',
    'que necesita un esfuerzo extra para aprobar el cuatrimestre y la asignatura.',
    'que, de seguir como hasta ahora, no aprobará la asignatura y deberá rendir en diciembre/febrero.'
  ]
};

function materiasDisponibles(){
  if(userRole === 'teacher') return currentTeacher.materias || [];
  const set = new Set();
  Object.values(getSchedule()).forEach(days => {
    Object.values(days).forEach(entries => entries.forEach(e => set.add(e.subject)));
  });
  return [...set].sort();
}

function profesoresConocidos(){
  const map = {};
  Object.entries(getSchedule()).forEach(([curso, days]) => {
    Object.values(days).forEach(entries => {
      entries.forEach(e => {
        (e.teachers||[]).forEach(nombre => {
          const key = nombre.trim();
          if(!map[key]) map[key] = {};
          if(!map[key][e.subject]) map[key][e.subject] = new Set();
          map[key][e.subject].add(curso);
        });
      });
    });
  });
  const out = {};
  Object.entries(map).forEach(([nombre, porMateria]) => {
    const asignaciones = Object.entries(porMateria).map(([materia, cursosSet]) => ({ materia, cursos: [...cursosSet].sort() }));
    asignaciones.sort((a,b)=> a.materia.localeCompare(b.materia));
    const materias = asignaciones.map(a => a.materia);
    const cursosUnion = [...new Set(asignaciones.flatMap(a => a.cursos))].sort();
    out[nombre] = { asignaciones, materias, cursos: cursosUnion };
  });
  return out;
}
function cursosParaMateria(materia){
  if(userRole !== 'teacher') return CURSOS;
  const asig = (currentTeacher.asignaciones||[]).find(a => a.materia === materia);
  return asig ? asig.cursos : (currentTeacher.cursos||[]);
}
function materiaActual(curso){
  const opciones = materiasParaSeleccion(curso);
  if(!window.__materiaSel || !opciones.includes(window.__materiaSel)){
    window.__materiaSel = opciones[0] || '';
  }
  return window.__materiaSel;
}
function materiasDeCurso(curso){
  const set = new Set();
  const days = getSchedule()[curso] || {};
  Object.values(days).forEach(entries => entries.forEach(e => set.add(e.subject)));
  return [...set].sort();
}
function materiasParaSeleccion(curso){
  if(userRole === 'teacher') return currentTeacher.materias || [];
  return materiasDeCurso(curso);
}

function renderValoracionesLista(){
  const { materia, cursosOpciones: cursos } = resolverMateriaYCursos();
  const bimActual = (bimestreActual().n===1 || bimestreActual().n===3) ? bimestreActual().n : 1;
  window.__valBim = window.__valBim || bimActual;
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const opcionesMateria = materiasParaSeleccion(selectedCurso);
  const materiaPicker = opcionesMateria.length > 1
    ? `<select id="materiaSelect">${opcionesMateria.map(m => `<option value="${m}" ${m===materia?'selected':''}>${m}</option>`).join('')}</select>`
    : '';

  const rows = students.map(s => {
    const key = docId(`${s.id}_${window.__valBim}_${slugify(materia)}`);
    const existe = !!cache.valoraciones[key];
    return `<div class="module-row" data-student="${s.id}">
      ${avatarAlumno(s)}
      <div class="txt">
        <p class="title">${s.apellido}, ${s.nombre}</p>
        <p class="desc">${existe ? 'Cargada' : 'Sin cargar'}</p>
      </div>
      <span class="chevron">${icon('chevron')}</span>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Valoraciones${materia ? ' — '+materia : ''}</h1>
    </div>
    ${materiaPicker ? `<div class="course-picker">${materiaPicker}</div>` : ''}
    <div class="course-picker">
      ${cursoBtns(cursos)}
      ${pillBtnRow('bimVal', [{value:1,label:'1° bim.'},{value:3,label:'3° bim.'}], window.__valBim, bimColorClass)}
    </div>
    <div class="module-list">${rows}</div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  attachPillBtns('bimVal', (v) => { window.__valBim = Number(v); render(); });
  if(document.getElementById('materiaSelect')){
    document.getElementById('materiaSelect').addEventListener('change', (e) => { window.__materiaSel = e.target.value; render(); });
  }
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('valoracionAlumno'); });
  });
}

function guardarValoracion(){
  const materia = materiaActual(selectedCurso);
  const bim = window.__valBim;
  const student = getStudents().find(s => s.id === selectedStudentId);
  const data = {
    studentId: selectedStudentId, curso: student.curso, materia, bimestre: bim,
    participa: document.getElementById('valParticipa').value,
    cumpleTareas: document.getElementById('valCumple').value,
    calidad: document.getElementById('valCalidad').value,
    comportamiento: document.getElementById('valComportamiento').value,
    objetivos: document.getElementById('valObjetivos').value,
    proyeccion: document.getElementById('valProyeccion').value,
    observaciones: document.getElementById('valObservaciones').value.trim(),
    autor: userRole==='teacher' ? currentTeacher.nombre : getUsuario(), updatedAt: Date.now()
  };
  const key = docId(`${selectedStudentId}_${bim}_${slugify(materia)}`);
  setDoc(doc(db,'valoraciones',key), data).catch(err=>showSaveError(err));
  showToast('Valoración guardada');
  navigate('valoraciones');
}

function renderValoracionAlumno(){
  const student = getStudents().find(s => s.id === selectedStudentId);
  const materia = materiaActual(selectedCurso);
  const bim = window.__valBim;
  const key = docId(`${selectedStudentId}_${bim}_${slugify(materia)}`);
  const existente = cache.valoraciones[key] || {};

  function selectHtml(id, opciones, valorActual){
    return `<select id="${id}" style="margin-bottom:12px;">
      <option value="">Elegir...</option>
      ${opciones.map(o => `<option value="${o}" ${o===valorActual?'selected':''}>${o}</option>`).join('')}
    </select>`;
  }

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>
    <p class="date-label">${materia} · ${bim}° bimestre</p>

    <label style="font-size:12.5px;color:var(--ink-soft);">¿Participa en las clases?</label>
    ${selectHtml('valParticipa', OPCIONES_VALORACION.participa, existente.participa)}

    <label style="font-size:12.5px;color:var(--ink-soft);">¿Cumple con las tareas?</label>
    ${selectHtml('valCumple', OPCIONES_VALORACION.cumpleTareas, existente.cumpleTareas)}

    <label style="font-size:12.5px;color:var(--ink-soft);">La calidad de sus trabajos es</label>
    ${selectHtml('valCalidad', OPCIONES_VALORACION.calidad, existente.calidad)}

    <label style="font-size:12.5px;color:var(--ink-soft);">Su comportamiento en clase es</label>
    ${selectHtml('valComportamiento', OPCIONES_VALORACION.comportamiento, existente.comportamiento)}

    <label style="font-size:12.5px;color:var(--ink-soft);">Objetivos de aprendizaje alcanzados</label>
    ${selectHtml('valObjetivos', OPCIONES_VALORACION.objetivos, existente.objetivos)}

    <label style="font-size:12.5px;color:var(--ink-soft);">En función de lo trabajado hasta ahora, podría decir...</label>
    ${selectHtml('valProyeccion', OPCIONES_VALORACION.proyeccion, existente.proyeccion)}

    <label style="font-size:12.5px;color:var(--ink-soft);">Observaciones generales (opcional)</label>
    <textarea id="valObservaciones" rows="3" style="margin-bottom:12px;">${existente.observaciones||''}</textarea>

    <button class="btn-primary" id="guardarValBtn">Guardar valoración</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('valoraciones'));
  document.getElementById('guardarValBtn').addEventListener('click', guardarValoracion);
}

// ---------- Notas cuatrimestrales ----------
const MATERIAS_BOLETIN = {
  '1': ['Matemática','Lengua y Literatura','Inglés','Educación Física','Biología','Historia','Geografía','Form.Etica y Cdad.','Ed. Tecnológica','Artes','EDI: Metodo.Estudio'],
  '2': ['Matemática','Lengua y Literatura','Inglés','Educación Física','Biología','Historia','Geografía','Form.Etica y Cdad.','Ed. Tecnológica','Artes','EDI: Escritura'],
  '3': ['Matemática','Lengua y Literatura','Inglés','Educación Física','Biología','Historia','Geografía','Form.Etica y Cdad.','Tecnologías Info.','Economía','Físico Química','EDI: Comprehension','Int. Cs. Soc. y Hum.'],
  '4': ['Matemática','Lengua y Literatura','Inglés','Educación Física','Arte','Historia','Geografía','Form.Etica y Cdad.','Tecnologías Info.','Fisica','EDI: Metodologia','Psicología','Antropología Cult.','Sociología'],
  '5': ['Matemática','Lengua y Literatura','Inglés','Educación Física','Filosofía','Química','EDI- Tesina','Geo.Amb. y Política','Sociedad y Estado','Historia Cult. Latino.','Proyecto','Historia Orientada','Tecno. Info. Orienta'],
};

function dibujarBoletinEnDoc(doc, studentId, copia){
  const student = getStudents().find(s => s.id === studentId);
  const pageW = 210, marginX = 18;
  const usableW = pageW - marginX*2;
  let y = 18;

  // Recuadro del encabezado
  const boxTop = y;
  doc.setFont('times','italic'); doc.setFontSize(19);
  doc.text('Instituto Superior Porteño    A-80', pageW/2, y+7, { align:'center' });
  doc.setLineWidth(0.4);
  doc.line(marginX+2, y+11, pageW-marginX-2, y+11);
  doc.setFont('helvetica','normal'); doc.setFontSize(9.5);
  doc.text('Distrito Escolar N° 10', pageW/2, y+17, { align:'center' });
  doc.text('INCORPORADO A LA ENSEÑANZA OFICIAL', pageW/2, y+22, { align:'center' });
  doc.text('NIVEL MEDIO', pageW/2, y+27, { align:'center' });

  const infoY = y+32;
  doc.line(marginX, infoY, pageW-marginX, infoY);
  doc.setFontSize(9.5);
  doc.text('Alumno/a:', marginX+3, infoY+7);
  doc.text(`${student.apellido}, ${student.nombre}`.toUpperCase(), marginX+22, infoY+7);
  doc.text('Curso escolar: 2026', pageW-marginX-3, infoY+7, { align:'right' });
  doc.text('Curso:', marginX+3, infoY+13);
  doc.text(`S-${student.curso}.A`, marginX+22, infoY+13);
  const boxBottom = infoY+17;
  doc.setLineWidth(0.5);
  doc.rect(marginX, boxTop, usableW, boxBottom-boxTop);

  y = boxBottom + 8;
  doc.setFont('helvetica','bold'); doc.setFontSize(13);
  doc.text('BOLETIN DE CALIFICACIONES', pageW/2, y, { align:'center' });
  y += 8;

  // Tabla
  const colX = [marginX, marginX+65, marginX+65+27, marginX+65+27+27, marginX+65+27+27+24, pageW-marginX];

  doc.setFillColor(201,201,201);
  doc.setLineWidth(0.3);
  const headH1 = 5, headH2 = 9;
  doc.rect(colX[0], y, usableW, headH1+headH2, 'FD');
  doc.line(colX[1], y+headH1, colX[4], y+headH1);
  for(let i=1;i<5;i++) doc.line(colX[i], y+ (i===1?0:headH1), colX[i], y+headH1+headH2);
  doc.setFont('helvetica','bold'); doc.setFontSize(8);
  doc.text('ASIGNATURAS', (colX[0]+colX[1])/2, y+headH1+headH2/2+3, { align:'center' });
  doc.text('PERÍODOS', (colX[1]+colX[4])/2, y+headH1/2+1.5, { align:'center' });
  const subLabels = ['PRIMER\nCUATRIMESTRE','SEGUNDO\nCUATRIMESTRE','FINAL','SITUACIÓN'];
  for(let i=0;i<4;i++){
    const cx = (colX[i+1]+colX[i+2])/2;
    const lines = subLabels[i].split('\n');
    lines.forEach((l,li) => doc.text(l, cx, y+headH1+4+li*3.4, { align:'center' }));
  }
  y += headH1+headH2;

  const notas = Object.values(cache.notas).filter(n => n.studentId === studentId);
  const materias = MATERIAS_BOLETIN[student.curso] || materiasDeCurso(student.curso);
  const weights = computeAbsenceWeights({ from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to });
  const inasistencias = weights[studentId] || 0;
  const apercibimientos = (getSanciones()[studentId] || []).length;

  const filas = materias.map(m => [m, notas.find(n=>n.materia===m && n.cuatrimestre===1)]);
  filas.push(['INASISTENCIAS', { nota: inasistencias.toFixed(2) }]);
  filas.push(['APERCIBIMIENTOS', { nota: apercibimientos.toFixed(2) }]);
  filas.push(['SANCIONES', { nota: '0.00' }]);

  doc.setFont('helvetica','bold'); doc.setFontSize(8.5);
  filas.forEach(([nombre, n]) => {
    const wrapped = doc.splitTextToSize(nombre, 60);
    const rowH = Math.max(7, 3 + wrapped.length*3.6);
    if(y + rowH > 270){ doc.addPage(); y = 20; }
    doc.setLineWidth(0.3);
    doc.rect(colX[0], y, usableW, rowH);
    for(let i=1;i<5;i++) doc.line(colX[i], y, colX[i], y+rowH);
    doc.setFont('helvetica','bold'); doc.setFontSize(8.5);
    wrapped.forEach((l,li) => doc.text(l, colX[0]+2, y+4+li*3.6));
    doc.setFont('helvetica','normal'); doc.setFontSize(9);
    if(n) doc.text(String(n.nota), (colX[1]+colX[2])/2, y+rowH/2+1.2, { align:'center' });
    y += rowH;
  });

  const finalY = y;
  let firmaY = finalY + 20;
  if(firmaY > 260){ doc.addPage(); firmaY = 30; }
  doc.setFont('helvetica','normal'); doc.setFontSize(8.5);
  doc.text(`Fecha de Emision: ${fmtDateShort(todayISO())}`, marginX, firmaY);
  doc.line(marginX+70, firmaY-1, marginX+150, firmaY-1);
  doc.text('Firma del Padre / Madre / Tutor', marginX+110, firmaY+3, { align:'center' });

  doc.setFontSize(8.5);
  doc.text('Montañeses  1936', marginX, 285);
  doc.text('(C1428AQD) Ciudad Autónoma de Buenos Aires', pageW/2+10, 285, { align:'center' });
  doc.setFontSize(8);
  doc.text(`Copia para el ${copia}`, pageW-8, 265, { align:'center', angle: 90 });
}

function generarBoletinOficialPDF(studentId){
  const student = getStudents().find(s => s.id === studentId);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  dibujarBoletinEnDoc(doc, studentId, 'Alumno');
  doc.addPage();
  dibujarBoletinEnDoc(doc, studentId, 'Colegio');
  doc.save(`Boletin_${student.apellido}_${student.nombre}_${student.curso}A.pdf`);
}

function generarBoletinesCurso(curso){
  const students = getStudents().filter(s => s.curso === curso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  if(!students.length){ customAlert('Este curso no tiene alumnos cargados.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  students.forEach((s, i) => {
    if(i > 0) doc.addPage();
    dibujarBoletinEnDoc(doc, s.id, 'Alumno');
    doc.addPage();
    dibujarBoletinEnDoc(doc, s.id, 'Colegio');
  });
  doc.save(`Boletines_${curso}A_${todayISO()}.pdf`);
}

function generarBoletinesTodos(){
  const students = getStudents().sort((a,b)=> Number(a.curso)-Number(b.curso) || a.apellido.localeCompare(b.apellido));
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  students.forEach((s, i) => {
    if(i > 0) doc.addPage();
    dibujarBoletinEnDoc(doc, s.id, 'Alumno');
    doc.addPage();
    dibujarBoletinEnDoc(doc, s.id, 'Colegio');
  });
  doc.save(`Boletines_ISP_${todayISO()}.pdf`);
}

function exportarNotasCurso(curso){
  const students = getStudents().filter(s => s.curso === curso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const materiasCurso = materiasDeCurso(curso);
  const filas = students.map(s => {
    const fila = { Apellido: s.apellido, Nombre: s.nombre };
    materiasCurso.forEach(m => {
      const n1 = Object.values(cache.notas).find(n => n.studentId===s.id && n.materia===m && n.cuatrimestre===1);
      const n2 = Object.values(cache.notas).find(n => n.studentId===s.id && n.materia===m && n.cuatrimestre===2);
      fila[`${m} (1°)`] = n1 ? n1.nota : '';
      fila[`${m} (2°)`] = n2 ? n2.nota : '';
    });
    return fila;
  });
  const ws = XLSX.utils.json_to_sheet(filas);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, `${curso}° A`);
  XLSX.writeFile(wb, `Notas_${curso}A_${todayISO()}.xlsx`);
}

function renderNotasLista(){
  const { materia, cursosOpciones: cursos } = resolverMateriaYCursos();
  window.__notaCuatri = window.__notaCuatri || 1;
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const opcionesMateria = materiasParaSeleccion(selectedCurso);
  const materiaPicker = opcionesMateria.length > 1
    ? `<select id="materiaSelect">${opcionesMateria.map(m => `<option value="${m}" ${m===materia?'selected':''}>${m}</option>`).join('')}</select>`
    : '';

  const rows = students.map(s => {
    const key = docId(`${s.id}_${window.__notaCuatri}_${slugify(materia)}`);
    const nota = cache.notas[key] ? cache.notas[key].nota : '';
    return `<div class="student-card">
      <div class="row" style="align-items:center;">
        <span class="name" style="flex:1;">${s.apellido}, ${s.nombre}</span>
        <input type="number" min="1" max="10" step="0.5" style="width:64px;text-align:center;" data-nota="${s.id}" value="${nota}">
      </div>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Notas${materia ? ' — '+materia : ''}</h1>
    </div>
    ${materiaPicker ? `<div class="course-picker">${materiaPicker}</div>` : ''}
    <div class="course-picker">
      ${cursoBtns(cursos)}
      ${pillBtnRow('cuatri', [{value:1,label:'1° cuatri.'},{value:2,label:'2° cuatri.'}], window.__notaCuatri)}
    </div>
    ${rows}
    <p class="info-note">${icon('info')}Se guarda solo al salir del campo (tocá afuera después de escribir la nota).</p>
    ${userRole==='admin' ? `<button class="btn-secondary" id="exportarNotasBtn" style="width:100%;margin-top:14px;">${icon('file')} Exportar notas de ${selectedCurso}° A a Excel</button>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  attachPillBtns('cuatri', (v) => { window.__notaCuatri = Number(v); render(); });
  if(document.getElementById('exportarNotasBtn')){
    document.getElementById('exportarNotasBtn').addEventListener('click', () => exportarNotasCurso(selectedCurso));
  }
  if(document.getElementById('materiaSelect')){
    document.getElementById('materiaSelect').addEventListener('change', (e) => { window.__materiaSel = e.target.value; render(); });
  }
  document.querySelectorAll('[data-nota]').forEach(inp => {
    inp.addEventListener('change', async (e) => {
      const sid = e.target.dataset.nota;
      const val = parseFloat(e.target.value);
      if(isNaN(val) || val < 1 || val > 10){ await customAlert('La nota debe estar entre 1 y 10.'); return; }
      const student = getStudents().find(s => s.id === sid);
      const key = docId(`${sid}_${window.__notaCuatri}_${slugify(materia)}`);
      setDoc(doc(db,'notas',key), { studentId: sid, curso: student.curso, materia, cuatrimestre: window.__notaCuatri, nota: val, autor: userRole==='teacher' ? currentTeacher.nombre : getUsuario(), updatedAt: Date.now() })
        .then(() => showToast('Nota guardada'))
        .catch(err=>showSaveError(err));
    });
  });
}

// ---------- Vista rápida por curso ----------
let selectedMateriaRiesgo = null;

function exportarVistaGeneral(){
  const porCurso = CURSOS.map(c => Object.assign({ curso: c }, computeVistaCurso(c)));
  const filas = porCurso.map(c => ({ Curso: c.curso+'°A', Alumnos: c.total, 'En alerta': c.enAlerta, 'Riesgo SCP': c.conSCP }));
  const ws = XLSX.utils.json_to_sheet(filas);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Vista general');
  XLSX.writeFile(wb, `Vista_general_ISP_${todayISO()}.xlsx`);
}

// % de asistencia del bimestre actual, por curso (mismo criterio de "peso" que el
// resto de la app: falta=1 día, tarde=0.5, EF falta=0.5, exención no suma).
function computeAsistenciaPctPorCurso(){
  const bim = bimestreActual();
  const diasHabiles = eachDateInRange(bim.from, bim.to).filter(d => diaKeyFor(d)).length;
  const weights = computeAbsenceWeights(bim);
  return CURSOS.map(c => {
    const students = getStudents().filter(s => s.curso === c);
    const totalPosible = students.length * diasHabiles;
    const totalPeso = students.reduce((sum,s) => sum + (weights[s.id]||0), 0);
    const pct = totalPosible ? Math.round((1 - totalPeso/totalPosible)*1000)/10 : 100;
    return { label: c+'°', promedio: pct };
  });
}

function renderVistaGeneral(){
  const porCurso = CURSOS.map(c => Object.assign({ curso: c }, computeVistaCurso(c)));
  const totalAlumnos = porCurso.reduce((s,c)=>s+c.total, 0);
  const totalAlerta = porCurso.reduce((s,c)=>s+c.enAlerta, 0);
  const totalSCP = porCurso.reduce((s,c)=>s+c.conSCP, 0);

  const rows = porCurso.map(c => `
    <div class="module-row" data-curso="${c.curso}">
      <div class="txt">
        <p class="title">${c.curso}° A</p>
        <p class="desc">${c.total} alumnos</p>
      </div>
      <span class="curso-chip c${c.curso}" style="margin-right:6px;">${c.enAlerta} alerta</span>
      <span class="badge-soon" style="background:var(--stamp-bg);color:var(--stamp);">${c.conSCP} SCP</span>
      <span class="chevron">${icon('chevron')}</span>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar no-print" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Vista general del colegio</h1>
    </div>
    <div class="stat-grid" style="grid-template-columns:1fr 1fr 1fr;">
      <div class="stat-card"><p class="label">Alumnos</p><p class="value">${totalAlumnos}</p></div>
      <div class="stat-card ${totalAlerta>0?'alert':''}"><p class="label">En alerta</p><p class="value">${totalAlerta}</p></div>
      <div class="stat-card ${totalSCP>0?'alert':''}"><p class="label">Riesgo SCP</p><p class="value">${totalSCP}</p></div>
    </div>
    <p class="section-label">Asistencia del bimestre, por curso</p>
    <div class="config-card" style="margin-bottom:16px;">${svgTendencia(computeAsistenciaPctPorCurso(), { suffix:'%', escalaFija:[0,100], colorPorValor: (v) => v < Math.round(UMBRAL_SCP*100) ? 'var(--stamp)' : 'var(--sage)' })}</div>

    <p class="section-label">Por curso</p>
    <div class="module-list">${rows}</div>
    ${userRole==='admin' ? `<button class="btn-secondary no-print" id="exportarGeneralBtn" style="width:100%;margin-top:14px;">${icon('file')} Exportar a Excel</button>
    <button class="btn-secondary no-print" id="imprimirGeneralBtn" style="width:100%;margin-top:8px;">Imprimir / Guardar como PDF</button>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  document.querySelectorAll('[data-curso]').forEach(el => {
    el.addEventListener('click', () => { selectedCurso = el.dataset.curso; navigate('vistaCurso'); });
  });
  if(document.getElementById('exportarGeneralBtn')){
    document.getElementById('exportarGeneralBtn').addEventListener('click', exportarVistaGeneral);
  }
  if(document.getElementById('imprimirGeneralBtn')){
    document.getElementById('imprimirGeneralBtn').addEventListener('click', () => window.print());
  }
}

function computeVistaCurso(curso){
  const students = getStudents().filter(s => s.curso === curso);
  const weights = computeAbsenceWeights();
  const anioCompleto = { from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to };

  const alertaList = [];
  const porMateria = {}; // materia -> [ {id,nombre,pct} ]
  const scpMap = {}; // studentId -> [ {materia,pct} ]
  const cercaMap = {}; // studentId -> [ {materia,resta} ] (todavía no SCP, pero le quedan pocas)

  students.forEach(s => {
    const w = weights[s.id] || 0;
    if(w >= UMBRAL_ALERTA) alertaList.push({ id: s.id, nombre: `${s.apellido}, ${s.nombre}`, valor: w, fechaAlerta: computeFechaAlerta(s.id, bimestreActual()) });
    const stats = computeMateriaStats(s.id, anioCompleto);
    Object.entries(stats).forEach(([materia, st]) => {
      const pct = st.total>0 ? (1 - st.faltas/st.total) : 1;
      if(pct < UMBRAL_SCP){
        const pctR = Math.round(pct*1000)/10;
        if(!porMateria[materia]) porMateria[materia] = [];
        porMateria[materia].push({ id: s.id, nombre: `${s.apellido}, ${s.nombre}`, pct: pctR });
        if(!scpMap[s.id]) scpMap[s.id] = { id: s.id, nombre: `${s.apellido}, ${s.nombre}`, materias: [] };
        scpMap[s.id].materias.push({ materia, pct: pctR });
      } else {
        const resta = faltasRestantes(st);
        if(resta !== null && resta <= CERCA_SCP){
          if(!cercaMap[s.id]) cercaMap[s.id] = { id: s.id, nombre: `${s.apellido}, ${s.nombre}`, materias: [] };
          cercaMap[s.id].materias.push({ materia, resta });
        }
      }
    });
  });

  alertaList.sort((a,b)=> b.valor - a.valor);
  const scpList = Object.values(scpMap).sort((a,b)=> a.nombre.localeCompare(b.nombre));
  const cercaList = Object.values(cercaMap).map(c => {
    c.materias.sort((a,b)=> a.resta - b.resta);
    c.minimo = c.materias[0].resta;
    return c;
  }).sort((a,b)=> a.minimo - b.minimo || a.nombre.localeCompare(b.nombre));

  return { total: students.length, enAlerta: alertaList.length, conSCP: scpList.length, alertaList, scpList, cercaList, porMateria };
}

function descargarRespaldoCompleto(){
  const wb = XLSX.utils.book_new();
  const students = getStudents();
  const nombreDe = (id) => { const s = students.find(x=>x.id===id); return s ? `${s.apellido}, ${s.nombre}` : id; };

  const hojaAsistencia = Object.entries(cache.attendance).map(([key, r]) => {
    const [fecha, sid] = key.split('|');
    return { Fecha: fecha, Alumno: nombreDe(sid), Estado: r.estado, Hora: r.hora||'', Exencion: r.exencion||'', Autor: r.autor||'' };
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hojaAsistencia), 'Asistencia');

  const hojaNotas = Object.values(cache.notas).map(n => ({
    Alumno: nombreDe(n.studentId), Curso: n.curso+'°A', Materia: n.materia, Cuatrimestre: n.cuatrimestre, Nota: n.nota, Autor: n.autor||''
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hojaNotas), 'Notas');

  const hojaSanciones = [];
  Object.entries(getSanciones()).forEach(([sid, lista]) => {
    lista.forEach(s => hojaSanciones.push({ Alumno: nombreDe(sid), Fecha: s.fecha, Motivo: s.motivo, Autor: s.autor||'' }));
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hojaSanciones), 'Sanciones');

  const hojaTramites = [];
  Object.values(getTramites()).forEach(t => {
    getStudents().filter(s => t.cursos.includes(s.curso)).forEach(s => {
      t.items.forEach(it => {
        const e = getEntrega(t.id, s.id, it.key);
        hojaTramites.push({ Tramite: t.nombre, Alumno: `${s.apellido}, ${s.nombre}`, Curso: s.curso+'°A', Item: it.label, Estado: e ? (e.entregado?'Entregado':(e.exento?'Exento':'')) : 'Pendiente' });
      });
    });
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hojaTramites), 'Tramites');

  const hojaCertificados = cache.certificados.map(c => {
    const s = students.find(x=>x.id===c.studentId);
    return { Alumno: nombreDe(c.studentId), Curso: s ? `${s.curso}°A` : '', Desde: c.from, Hasta: c.to };
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hojaCertificados), 'Certificados');

  XLSX.writeFile(wb, `Respaldo_ISP_${todayISO()}.xlsx`);
}

// ---------- Respaldos por separado (Configuración) ----------
function descargarSancionesExcel(){
  const students = getStudents();
  const nombreDe = (id) => { const s = students.find(x=>x.id===id); return s ? `${s.apellido}, ${s.nombre}` : id; };
  const cursoDe = (id) => { const s = students.find(x=>x.id===id); return s ? `${s.curso}°A` : ''; };
  const filas = [];
  Object.entries(getSanciones()).forEach(([sid, lista]) => {
    lista.forEach(s => filas.push({ Alumno: nombreDe(sid), Curso: cursoDe(sid), Folio: s.folio, Fecha: s.fecha, Motivo: s.motivo, Autor: s.autor||'' }));
  });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(filas), 'Sanciones');
  XLSX.writeFile(wb, `Sanciones_ISP_${todayISO()}.xlsx`);
}
function descargarCertificadosExcel(){
  const students = getStudents();
  const nombreDe = (id) => { const s = students.find(x=>x.id===id); return s ? `${s.apellido}, ${s.nombre}` : id; };
  const cursoDe = (id) => { const s = students.find(x=>x.id===id); return s ? `${s.curso}°A` : ''; };
  const filas = cache.certificados.map(c => ({ Alumno: nombreDe(c.studentId), Curso: cursoDe(c.studentId), Desde: c.from, Hasta: c.to }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(filas), 'Certificados');
  XLSX.writeFile(wb, `Certificados_ISP_${todayISO()}.xlsx`);
}
function descargarTramitesExcel(){
  const filas = [];
  Object.values(getTramites()).forEach(t => {
    getStudents().filter(s => t.cursos.includes(s.curso)).forEach(s => {
      t.items.forEach(it => {
        const e = getEntrega(t.id, s.id, it.key);
        filas.push({ Tramite: t.nombre, Alumno: `${s.apellido}, ${s.nombre}`, Curso: s.curso+'°A', Item: it.label, Estado: e ? (e.entregado?'Entregado':(e.exento?'Exento':'')) : 'Pendiente' });
      });
    });
  });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(filas), 'Tramites');
  XLSX.writeFile(wb, `Tramites_ISP_${todayISO()}.xlsx`);
}

function exportarAsistenciaCurso(curso){
  const bim = bimestreActual();
  const students = getStudents().filter(s => s.curso === curso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const att = getAttendance();
  const weights = computeAbsenceWeights(bim);
  const filas = students.map(s => {
    let presentes=0, tardes=0, ausentes=0, justificadas=0;
    Object.entries(att).forEach(([key, rec]) => {
      const [fecha, sid] = key.split('|');
      if(sid !== s.id || fecha < bim.from || fecha > bim.to || rec.exencion) return;
      if(rec.estado==='P') presentes++;
      else if(rec.estado==='T') tardes++;
      else if(rec.estado==='A') ausentes++;
      else if(rec.estado==='J') justificadas++;
    });
    return {
      'Apellido': s.apellido, 'Nombre': s.nombre, 'Curso': `${curso}° A`,
      'Presentes': presentes, 'Tardes': tardes, 'Ausentes': ausentes, 'Justificadas': justificadas,
      'Faltas ponderadas (bimestre actual)': weights[s.id] || 0
    };
  });
  const ws = XLSX.utils.json_to_sheet(filas);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, `${curso}° A`);
  XLSX.writeFile(wb, `Asistencia_${curso}A_bim${bim.n}_${todayISO()}.xlsx`);
}

// ---------- Reportes mensuales (formato planilla oficial del colegio) ----------
const MESES_NOMBRE = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

// Meses del ciclo lectivo (marzo en adelante) que ya arrancaron, para elegir en el selector.
function mesesConDatos(){
  const hoy = todayISO();
  const anioMes = hoy.slice(0,7);
  const anio = Number(hoy.slice(0,4));
  const out = [];
  for(let m=3; m<=12; m++){
    const iso = `${anio}-${String(m).padStart(2,'0')}`;
    if(iso > anioMes) break;
    out.push({ value: iso, label: `${MESES_NOMBRE[m-1]} ${anio}` });
  }
  return out.length ? out : [{ value: anioMes, label: `${MESES_NOMBRE[Number(hoy.slice(5,7))-1]} ${anio}` }];
}

// Rango real del mes: si es el mes en curso, corta en el día de hoy (no tiene sentido
// pedir días que todavía no pasaron).
function rangoDelMes(mesISO){
  const [anio, mes] = mesISO.split('-').map(Number);
  const from = `${mesISO}-01`;
  const ultimoDia = new Date(anio, mes, 0).getDate();
  const hoy = todayISO();
  let to = `${mesISO}-${String(ultimoDia).padStart(2,'0')}`;
  if(to > hoy) to = hoy;
  return { from, to };
}

// Días hábiles de un curso puntual en un mes: de lunes a viernes, sin feriados generales
// ni días marcados como "sin clase" para ese curso.
function diasHabilesDelMes(curso, mesISO){
  const { from, to } = rangoDelMes(mesISO);
  const out = [];
  let d = new Date(from+'T00:00:00');
  const end = new Date(to+'T00:00:00');
  while(d <= end){
    const iso = d.toISOString().slice(0,10);
    const dow = d.getDay();
    if(dow !== 0 && dow !== 6 && !FERIADOS_2026.has(iso) && !getDiaSinClase(iso, curso)) out.push(iso);
    d.setDate(d.getDate()+1);
  }
  return out;
}

// Traduce el estado interno de un alumno en una fecha al código de una sola letra que
// se usa en la planilla oficial (P/A/T). Sin ningún registro en un día ya pasado se toma
// como Presente, igual criterio que en la pantalla de Asistencia diaria.
function codigoOficialDelDia(fecha, studentId){
  const rec = cache.attendance[`${fecha}|${studentId}`];
  if(!rec) return 'P';
  if(rec.estado === 'TJ') return 'T';
  if(rec.estado === 'J') return 'A';
  return rec.estado || 'P';
}

// Planilla día por día, con el mismo criterio que la planilla oficial en papel del
// colegio (una fila por alumno, una columna por día, códigos P/A/T). A diferencia de
// la de papel, los feriados y días sin clase directamente no aparecen como columna
// (en vez del truco de escribir el nombre del feriado en letras verticales): quedan
// listados aparte, al pie, para que se entienda por qué no están.
function exportarPlanillaOficialCurso(curso, mesISO){
  const students = getStudents().filter(s => s.curso === curso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const dias = diasHabilesDelMes(curso, mesISO);
  const [anio, mesN] = mesISO.split('-').map(Number);
  const nombreMes = MESES_NOMBRE[mesN-1];

  if(!dias.length){
    showToast('No hay días hábiles en ese mes todavía.', 'error');
    return;
  }

  let totalPosible = 0, totalPeso = 0;
  const filas = students.map((s, idx) => {
    let ausencias = 0, tardes = 0;
    const codigos = dias.map(f => {
      const c = codigoOficialDelDia(f, s.id);
      if(c === 'A') ausencias++;
      else if(c === 'T') tardes++;
      return c;
    });
    totalPosible += dias.length;
    totalPeso += ausencias + tardes*0.5;
    const pct = dias.length ? (100 - (ausencias + tardes*0.5) / dias.length * 100) : 100;
    return { n: idx+1, nombre: `${s.apellido}, ${s.nombre}`, codigos, ausencias, tardes, pct };
  });
  const pctGeneral = totalPosible ? (100 - totalPeso/totalPosible*100) : 100;
  const totalesPorDia = dias.map((_, j) => filas.reduce((acc,f)=> acc + (f.codigos[j]==='A' ? 1 : 0), 0));

  const headerFechas = dias.map(f => {
    const d = new Date(f+'T00:00:00');
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`;
  });

  const aoa = [];
  aoa.push([`${curso}° AÑO ${anio}`]);
  aoa.push([]);
  aoa.push([nombreMes.toUpperCase()]);
  aoa.push([`Porcentaje de asistencia del mes: ${pctGeneral.toFixed(2).replace('.',',')}%`]);
  aoa.push([]);
  aoa.push(['Nº','Apellidos y Nombres', ...headerFechas, 'Ausencias','Tardes','% Asistencia']);
  filas.forEach(f => aoa.push([f.n, f.nombre, ...f.codigos, f.ausencias, f.tardes, `${f.pct.toFixed(1).replace('.',',')}%`]));
  aoa.push(['','Faltas totales del día', ...totalesPorDia]);
  aoa.push([]);
  aoa.push(['Referencias: P = Presente · A = Ausente · T = Tarde']);

  const excluidos = [];
  { const { from, to } = rangoDelMes(mesISO);
    let d = new Date(from+'T00:00:00'); const end = new Date(to+'T00:00:00');
    while(d <= end){
      const iso = d.toISOString().slice(0,10); const dow = d.getDay();
      if(dow!==0 && dow!==6){
        if(FERIADOS_2026.has(iso)) excluidos.push(iso+' (feriado)');
        else{ const sc = getDiaSinClase(iso, curso); if(sc) excluidos.push(`${iso} (sin clase: ${sc.motivo})`); }
      }
      d.setDate(d.getDate()+1);
    }
  }
  if(excluidos.length) aoa.push([`Días sin clase este mes (no figuran en la planilla): ${excluidos.join(' · ')}`]);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{wch:4},{wch:26}, ...headerFechas.map(()=>({wch:6})), {wch:10},{wch:8},{wch:12}];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, `${curso}° A ${nombreMes.slice(0,3)}`);
  XLSX.writeFile(wb, `Planilla_Oficial_${curso}A_${mesISO}.xlsx`);
}

// Resumen simple por mes (uno por alumno, sin el detalle día por día).
function exportarResumenMensualCurso(curso, mesISO){
  const students = getStudents().filter(s => s.curso === curso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const dias = diasHabilesDelMes(curso, mesISO);
  const [anio, mesN] = mesISO.split('-').map(Number);
  const nombreMes = MESES_NOMBRE[mesN-1];
  if(!dias.length){
    showToast('No hay días hábiles en ese mes todavía.', 'error');
    return;
  }
  const filas = students.map(s => {
    let ausencias=0, tardes=0, justificadas=0;
    dias.forEach(f => {
      const rec = cache.attendance[`${f}|${s.id}`];
      if(!rec) return;
      if(rec.estado==='A' && rec.exencion) justificadas++;
      else if(rec.estado==='A') ausencias++;
      else if(rec.estado==='J') justificadas++;
      else if(rec.estado==='T') tardes++;
    });
    const pct = dias.length ? 100 - ((ausencias + tardes*0.5)/dias.length*100) : 100;
    return {
      'Apellido': s.apellido, 'Nombre': s.nombre, 'Curso': `${curso}° A`,
      'Ausencias': ausencias, 'Tardes': tardes, 'Justificadas': justificadas,
      '% Asistencia': `${pct.toFixed(1).replace('.',',')}%`
    };
  });
  const ws = XLSX.utils.json_to_sheet(filas);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, `${curso}° A`);
  XLSX.writeFile(wb, `Resumen_${curso}A_${nombreMes}_${anio}.xlsx`);
}

function computeTendenciaCurso(curso){
  const students = getStudents().filter(s => s.curso === curso);
  return BIMESTRES.map(bim => {
    const weights = computeAbsenceWeights(bim);
    const total = students.reduce((sum, s) => sum + (weights[s.id]||0), 0);
    const promedio = students.length ? Math.round((total / students.length)*10)/10 : 0;
    return { label: bim.n+'°', promedio };
  });
}

function computeTendenciaDiaSemana(curso){
  const students = getStudents().filter(s => s.curso === curso);
  const att = getAttendance();
  const porDia = { lunes:0, martes:0, miercoles:0, jueves:0, viernes:0 };
  const idsCurso = new Set(students.map(s=>s.id));
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(!idsCurso.has(sid)) return;
    const dia = diaKeyFor(fecha);
    if(!dia || !(dia in porDia)) return;
    porDia[dia] += pesoAsistencia(rec);
  });
  Object.entries(getEF()).forEach(([key, val]) => {
    const [fecha, sid] = key.split('|');
    const dia = diaKeyFor(fecha);
    if(idsCurso.has(sid) && dia && val && val.tipo === 'falta') porDia[dia] += 0.5;
  });
  const labels = { lunes:'Lun', martes:'Mar', miercoles:'Mié', jueves:'Jue', viernes:'Vie' };
  return Object.entries(porDia).map(([dia, total]) => ({
    label: labels[dia], promedio: students.length ? Math.round((total/students.length)*100)/100 : 0
  }));
}

// Faltas de todo el curso, semana por semana (las últimas 8 semanas con clases).
function computeTendenciaSemanal(curso){
  const ids = new Set(getStudents().filter(s => s.curso === curso).map(s => s.id));
  const lunesDe = (iso) => {
    const d = new Date(iso + 'T00:00:00');
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return localISODate(d);
  };
  const hoy = todayISO();
  const semanas = [];
  let lunes = lunesDe(hoy);
  for(let i = 0; i < 30 && semanas.length < 8; i++){
    const d = new Date(lunes + 'T00:00:00'); d.setDate(d.getDate() + 4);
    const viernes = localISODate(d);
    const huboClase = bimestreDe(lunes) || bimestreDe(viernes);
    const diasHabiles = eachDateInRange(lunes, viernes < hoy ? viernes : hoy).filter(x => diaKeyFor(x) && !getDiaSinClase(x, curso));
    if(huboClase && diasHabiles.length) semanas.unshift({ lunes, viernes, total: 0 });
    const ant = new Date(lunes + 'T00:00:00'); ant.setDate(ant.getDate() - 7);
    lunes = localISODate(ant);
  }
  if(!semanas.length) return [];
  const desde = semanas[0].lunes;
  const sumar = (fecha, w) => {
    if(!w || fecha < desde) return;
    const sem = semanas.find(x => fecha >= x.lunes && fecha <= x.viernes);
    if(sem) sem.total += w;
  };
  Object.entries(getAttendance()).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(ids.has(sid)) sumar(fecha, pesoAsistencia(rec));
  });
  Object.entries(getEF()).forEach(([key, val]) => {
    const [fecha, sid] = key.split('|');
    if(ids.has(sid) && val && val.tipo === 'falta') sumar(fecha, 0.5);
  });
  return semanas.map(x => {
    const [, m, d] = x.lunes.split('-');
    return { label: `${Number(d)}/${Number(m)}`, promedio: Math.round(x.total * 10) / 10 };
  });
}

function svgTendencia(datos, opts){
  const suffix = (opts && opts.suffix) || '';
  const escalaFija = opts && opts.escalaFija; // ej: [0,100] para que las barras de % se comparen bien entre sí
  const w = 320, h = 160, padL = 20, padB = 26, padT = 28;
  const max = escalaFija ? escalaFija[1] : Math.max(1, ...datos.map(d=>d.promedio));
  const min = escalaFija ? escalaFija[0] : 0;
  const barW = (w - padL - 10) / datos.length;
  const bars = datos.map((d, i) => {
    const barH = Math.max(4, ((d.promedio - min) / (max - min)) * (h - padT - padB));
    const x = padL + i*barW + barW*0.2;
    const y = h - padB - barH;
    const color = (opts && opts.colorPorValor) ? opts.colorPorValor(d.promedio) : 'var(--sage)';
    return `<rect x="${x}" y="${y}" width="${barW*0.6}" height="${barH}" rx="3" fill="${color}"/>
      <text x="${x+barW*0.3}" y="${h-padB+18}" text-anchor="middle" font-size="${datos.length > 6 ? 10.5 : 12}" fill="var(--ink-soft)">${d.label}</text>
      <text x="${x+barW*0.3}" y="${y-9}" text-anchor="middle" font-family="'Source Serif 4',serif" font-size="${datos.length > 6 ? 13 : 16}" font-weight="700" fill="${'var(--ink)'}">${d.promedio}${suffix}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto;display:block;">
    <line x1="${padL}" y1="${h-padB}" x2="${w-5}" y2="${h-padB}" stroke="var(--border)"/>
    ${bars}
  </svg>`;
}

function renderVistaCurso(){
  const cursos = cursosDisponibles();
  if(!cursos.includes(selectedCurso)) selectedCurso = cursos[0];
  const v = computeVistaCurso(selectedCurso);

  const materiaRows = Object.entries(v.porMateria).sort((a,b)=> b[1].length - a[1].length).map(([materia, alumnos]) => `
    <div class="module-row" data-materia="${materia}">
      <div class="txt"><p class="title">${materia}</p></div>
      <span class="badge-soon" style="background:var(--stamp-bg);color:var(--stamp);">${alumnos.length}</span>
      <span class="chevron">${icon('chevron')}</span>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Vista por curso</h1>
    </div>
    <div class="course-picker">
      ${cursoBtns(cursos)}
    </div>

    <div class="stat-grid">
      <div class="stat-card ${v.enAlerta>0?'alert':''}" id="cardAlertaCurso" style="cursor:pointer;">
        <p class="label">En alerta (bimestre)</p>
        <p class="value">${v.enAlerta}<span class="sub"> / ${v.total}</span></p>
      </div>
      <div class="stat-card ${v.conSCP>0?'alert':''}" id="cardSCPCurso" style="cursor:pointer;">
        <p class="label">Con riesgo de SCP</p>
        <p class="value">${v.conSCP}<span class="sub"> / ${v.total}</span></p>
      </div>
    </div>
    <div class="module-list" style="margin-bottom:14px;">
      <div class="module-row" id="cardCercaCurso">
        <div class="txt">
          <p class="title">Cerca del SCP</p>
          <p class="desc">Les quedan ${CERCA_SCP} faltas o menos en alguna materia</p>
        </div>
        <span class="badge-soon" style="${v.cercaList.length ? 'background:var(--gold-bg);color:var(--gold);' : ''}">${v.cercaList.length}</span>
        <span class="chevron">${icon('chevron')}</span>
      </div>
    </div>

    ${userRole!=='student' ? `
    <div class="field-row" style="margin-bottom:10px;">
      <select id="mesOficialSelect">${mesesConDatos().map((m,i,arr)=>`<option value="${m.value}" ${i===arr.length-1?'selected':''}>${m.label}</option>`).join('')}</select>
    </div>
    <button class="btn-secondary" id="exportarOficialBtn" style="width:100%;margin-bottom:10px;"><span class="btn-icon-fix">${icon('file')}</span> Exportar planilla oficial del mes (día por día)</button>
    <button class="btn-secondary" id="exportarResumenMesBtn" style="width:100%;margin-bottom:10px;"><span class="btn-icon-fix">${icon('file')}</span> Exportar resumen del mes</button>
    <button class="btn-secondary" id="exportarBtn" style="width:100%;margin-bottom:10px;"><span class="btn-icon-fix">${icon('file')}</span> Exportar asistencia a Excel (bimestre)</button>
    ${userRole==='admin' ? `<button class="btn-secondary" id="exportarPIABtn" style="width:100%;margin-bottom:16px;"><span class="btn-icon-fix">${icon('file')}</span> Planilla del PIA (todos los cursos)</button>` : '<div style="height:6px;"></div>'}` : ''}

    ${(() => { const sem = computeTendenciaSemanal(selectedCurso); return sem.length ? `
    <p class="section-label">Faltas del curso, semana por semana</p>
    <div class="config-card" style="margin-bottom:16px;">${svgTendencia(sem)}</div>` : ''; })()}

    <p class="section-label">Faltas promedio por alumno, por bimestre</p>
    <div class="config-card" style="margin-bottom:16px;">${svgTendencia(computeTendenciaCurso(selectedCurso))}</div>

    <p class="section-label">Faltas ponderadas por alumno, por día de la semana (ciclo lectivo)</p>
    <div class="config-card" style="margin-bottom:16px;">${svgTendencia(computeTendenciaDiaSemana(selectedCurso))}</div>

    <p class="section-label">Por materia (bajo 85% anual)</p>
    ${materiaRows ? `<div class="module-list">${materiaRows}</div>` : `<p class="empty-inline">Ninguna materia tiene alumnos por debajo del 85% en este curso.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.getElementById('cardAlertaCurso').addEventListener('click', () => navigate('vistaCursoAlerta'));
  document.getElementById('cardSCPCurso').addEventListener('click', () => navigate('vistaCursoSCP'));
  document.getElementById('cardCercaCurso').addEventListener('click', () => navigate('vistaCursoCerca'));
  if(document.getElementById('exportarPIABtn')) document.getElementById('exportarPIABtn').addEventListener('click', exportarPlanillaPIA);
  if(document.getElementById('exportarBtn')){
    document.getElementById('exportarBtn').addEventListener('click', () => exportarAsistenciaCurso(selectedCurso));
  }
  if(document.getElementById('exportarOficialBtn')){
    document.getElementById('exportarOficialBtn').addEventListener('click', () => exportarPlanillaOficialCurso(selectedCurso, document.getElementById('mesOficialSelect').value));
  }
  if(document.getElementById('exportarResumenMesBtn')){
    document.getElementById('exportarResumenMesBtn').addEventListener('click', () => exportarResumenMensualCurso(selectedCurso, document.getElementById('mesOficialSelect').value));
  }
  document.querySelectorAll('[data-materia]').forEach(el => {
    el.addEventListener('click', () => { selectedMateriaRiesgo = el.dataset.materia; navigate('vistaCursoMateria'); });
  });
}

function renderVistaCursoMateria(){
  const v = computeVistaCurso(selectedCurso);
  const alumnos = (v.porMateria[selectedMateriaRiesgo]||[]).sort((a,b)=> a.pct - b.pct);

  const rows = alumnos.map(a => `
    <div class="module-row" data-student="${a.id}">
      <div class="txt"><p class="title">${a.nombre}</p></div>
      <span class="badge-soon" style="background:var(--stamp-bg);color:var(--stamp);">${a.pct}%</span>
      <span class="chevron">${icon('chevron')}</span>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${selectedMateriaRiesgo}</h1>
    </div>
    <p class="date-label">${selectedCurso}° A · debajo del 85% anual</p>
    <div class="module-list">${rows}</div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('vistaCurso'));
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('resumenAlumno'); });
  });
}

function renderVistaCursoAlerta(){
  const v = computeVistaCurso(selectedCurso);
  const rows = v.alertaList.map(a => `
    <div class="module-row" data-student="${a.id}">
      <div class="txt">
        <p class="title">${a.nombre}</p>
        <p class="desc">Desde el ${a.fechaAlerta ? fmtDateShort(a.fechaAlerta) : '—'}</p>
      </div>
      <span class="badge-soon" style="background:var(--stamp-bg);color:var(--stamp);">${a.valor}</span>
      <span class="chevron">${icon('chevron')}</span>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>En alerta</h1>
    </div>
    <p class="date-label">${selectedCurso}° A · 5 o más faltas</p>
    ${rows ? `<div class="module-list">${rows}</div>` : `<p class="empty-inline">Nadie en alerta en este curso.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('vistaCurso'));
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('resumenAlumno'); });
  });
}

function renderVistaCursoSCP(){
  const v = computeVistaCurso(selectedCurso);
  const rows = v.scpList.map(a => `
    <div class="module-row" data-student="${a.id}">
      <div class="txt">
        <p class="title">${a.nombre}</p>
        <p class="desc">${a.materias.map(m=>`${m.materia} (${m.pct}%)`).join(', ')}</p>
      </div>
      <span class="chevron">${icon('chevron')}</span>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Riesgo de SCP</h1>
    </div>
    <p class="date-label">${selectedCurso}° A · debajo del 85% anual en al menos una materia</p>
    ${rows ? `<div class="module-list">${rows}</div>` : `<p class="empty-inline">Nadie en riesgo en este curso.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('vistaCurso'));
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('resumenAlumno'); });
  });
}

// Planilla del PIA: una pestaña por curso, una fila por alumno con las materias en las
// que queda SCP (debajo del 85% anual). Antes de diciembre es una proyección: las clases
// que faltan dar se cuentan como presentes.
function exportarPlanillaPIA(){
  const anio = { from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to };
  const wb = XLSX.utils.book_new();
  let totalAlumnos = 0;
  CURSOS.forEach(curso => {
    const alumnos = getStudents().filter(s => s.curso === curso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
    const filas = [];
    alumnos.forEach(s => {
      const stats = computeMateriaStats(s.id, anio);
      const scp = Object.entries(stats)
        .map(([materia, st]) => ({ materia, st, pct: st.total ? 1 - st.faltas/st.total : 1 }))
        .filter(x => x.pct < UMBRAL_SCP)
        .sort((a,b)=> a.materia.localeCompare(b.materia));
      if(!scp.length) return;
      totalAlumnos++;
      filas.push({
        'Alumno': `${s.apellido}, ${s.nombre}`,
        'Cantidad de materias': scp.length,
        'Materias a recuperar (asistencia anual)': scp.map(x => `${x.materia} (${Math.round(x.pct*1000)/10}% · ${x.st.faltas}/${x.st.total})`).join('; '),
      });
    });
    const hoja = filas.length ? XLSX.utils.json_to_sheet(filas) : XLSX.utils.aoa_to_sheet([['Ningún alumno de este curso queda en SCP.']]);
    if(filas.length) hoja['!cols'] = [{ wch: 30 }, { wch: 12 }, { wch: 90 }];
    XLSX.utils.book_append_sheet(wb, hoja, `${curso}° A`);
  });
  const hoy = todayISO();
  XLSX.writeFile(wb, `PIA_${hoy}.xlsx`);
  const fin = BIMESTRES[BIMESTRES.length-1].to;
  showToast(`Planilla del PIA descargada (${totalAlumnos} ${totalAlumnos===1?'alumno':'alumnos'})${hoy < fin ? ' · proyección al día de hoy' : ''}`);
}

// Elegir a quién simular en el modo de prueba.
function renderPruebaElegir(){
  const tipo = currentRoute === 'pruebaDocente' ? 'teacher' : currentRoute === 'pruebaAlumno' ? 'student' : 'viewer';
  let lista = '';
  let extra = '';
  if(tipo === 'teacher'){
    const ts = Object.values(cache.teachers).filter(t => t.activo !== false).sort((a,b)=> (a.nombre||'').localeCompare(b.nombre||''));
    lista = ts.map(t => `<div class="module-row" data-prueba="${t.uid}">
      <div class="txt"><p class="title">${escapeHtml(t.nombre || t.email || t.uid)}</p><p class="desc">${(t.cursos||[]).map(c=>c+'°').join(', ') || 'Sin cursos'} · ${(t.materias||[]).join(', ') || 'Sin materias'}</p></div>
      <span class="chevron">${icon('chevron')}</span></div>`).join('');
  } else if(tipo === 'student'){
    extra = `<div class="course-picker">${cursoBtns(CURSOS)}</div>`;
    const conCuenta = new Set(Object.values(cache.students_auth || {}).map(a => a.studentId));
    lista = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido)).map(s => `<div class="module-row" data-prueba="${s.id}">
      ${avatarAlumno(s)}
      <div class="txt"><p class="title">${escapeHtml(s.apellido)}, ${escapeHtml(s.nombre)}</p>${conCuenta.has(s.id) ? '' : '<p class="desc">Todavía sin cuenta (se ve igual)</p>'}</div>
      <span class="chevron">${icon('chevron')}</span></div>`).join('');
  } else {
    const vs = Object.values(cache.viewers).filter(v => v.activo !== false).sort((a,b)=> (a.nombre||'').localeCompare(b.nombre||''));
    lista = vs.map(v => `<div class="module-row" data-prueba="${v.uid}">
      <div class="txt"><p class="title">${escapeHtml(v.nombre || v.email || v.uid)}</p>${v.email ? `<p class="desc">${escapeHtml(v.email)}</p>` : ''}</div>
      <span class="chevron">${icon('chevron')}</span></div>`).join('');
  }
  const titulo = tipo === 'teacher' ? 'Ver como docente' : tipo === 'student' ? 'Ver como alumno' : 'Ver como solo lectura';
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${titulo}</h1>
    </div>
    <p class="info-note" style="margin-top:0;">${icon('info')}Vas a ver la app como la ve esa persona, con sus datos reales. No se guarda nada de lo que toques. Para volver, tocá "Salir" en la franja de arriba.</p>
    ${extra}
    ${lista ? `<div class="module-list">${lista}</div>` : `<p class="empty-inline">No hay cuentas para elegir.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  if(tipo === 'student') attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.querySelectorAll('[data-prueba]').forEach(el => el.addEventListener('click', () => entrarModoPrueba(tipo, el.dataset.prueba)));
}

function entrarModoPrueba(rol, id){
  if(userRole !== 'admin') return;
  let nombre = '';
  if(rol === 'teacher'){
    const t = cache.teachers[id]; if(!t) return;
    currentTeacher = Object.assign({ cursos: [], materias: [] }, t, { uid: id });
    nombre = t.nombre || t.email || 'Docente';
  } else if(rol === 'student'){
    const s = getStudents().find(x => x.id === id); if(!s) return;
    const cuenta = Object.values(cache.students_auth || {}).find(a => a.studentId === id);
    currentStudentAuth = Object.assign({ uid: 'prueba', email: '' }, cuenta || {}, { studentId: s.id, curso: s.curso, nombre: (cuenta && cuenta.nombre) || `${s.nombre} ${s.apellido}` });
    nombre = `${s.apellido}, ${s.nombre}`;
  } else {
    const v = cache.viewers[id]; if(!v) return;
    currentViewer = Object.assign({}, v, { uid: id });
    nombre = v.nombre || v.email || 'Solo lectura';
  }
  modoPrueba = { rol, nombre };
  userRole = rol;
  navHistory = []; navFotos = [];
  currentRoute = homeRoute();
  render();
  window.scrollTo(0, 0);
}

function salirModoPrueba(){
  if(!modoPrueba) return;
  modoPrueba = null;
  userRole = 'admin';
  currentTeacher = null; currentStudentAuth = null; currentViewer = null;
  navHistory = []; navFotos = [];
  currentRoute = 'config';
  render();
  window.scrollTo(0, 0);
}

function franjaPrueba(){
  if(!modoPrueba) return;
  const rolTxt = modoPrueba.rol === 'teacher' ? 'Docente' : modoPrueba.rol === 'student' ? 'Alumno' : 'Solo lectura';
  $app.insertAdjacentHTML('afterbegin', `<div class="franja-prueba"><span><b>Vista de prueba</b> · ${rolTxt}: ${escapeHtml(modoPrueba.nombre)}</span><button type="button" id="salirPruebaBtn">Salir</button></div>`);
  const b = document.getElementById('salirPruebaBtn');
  if(b) b.addEventListener('click', salirModoPrueba);
}

function renderVistaCursoCerca(){
  const v = computeVistaCurso(selectedCurso);
  const rows = v.cercaList.map(a => `
    <div class="module-row" data-student="${a.id}">
      ${avatarAlumno(getStudents().find(s => s.id === a.id) || { nombre: a.nombre, apellido: '' })}
      <div class="txt">
        <p class="title">${a.nombre}</p>
        <p class="desc">${a.materias.map(m => `${m.materia}: ${textoRestantes(m.resta)}`).join(' · ')}</p>
      </div>
      <span class="chevron">${icon('chevron')}</span>
    </div>
  `).join('');
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Cerca del SCP</h1>
    </div>
    <p class="date-label">${selectedCurso}° A · todavía no están en SCP, pero les quedan pocas faltas</p>
    ${rows ? `<div class="module-list">${rows}</div>` : `<p class="empty-inline">Nadie está cerca del SCP en este curso.</p>`}
    <p class="info-note">${icon('info')}Cuenta todas las clases del año, también las que faltan dar: si no falta más que eso hasta diciembre, no queda SCP en esa materia.</p>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('vistaCurso'));
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('resumenAlumno'); });
  });
}

function renderTabbar(){
  const tb = document.getElementById('tabbar');
  if(!userRole){ tb.innerHTML = ''; return; }
  if(userRole === 'teacher'){
    tb.innerHTML = `
      <button class="tab ${currentRoute==='teacherHome'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
      <button class="tab ${currentRoute==='sanciones'||currentRoute==='sancionDetalle'?'active':''}" id="tabSanciones">${icon('alert')}<span>Sanciones</span></button>
      <button class="tab ${currentRoute==='resumen'||currentRoute==='resumenAlumno'?'active':''}" id="tabResumen">${icon('chart')}<span>Resumen</span></button>
      <button class="tab ${currentRoute==='agenda'||currentRoute==='agendaNuevo'||currentRoute==='agendaDetalle'?'active':''}" id="tabAgenda">${icon('calendar')}<span>Agenda</span></button>
    `;
    document.getElementById('tabHome').addEventListener('click', () => navigate('teacherHome', null, 'tab'));
    document.getElementById('tabSanciones').addEventListener('click', () => navigate('sanciones', null, 'tab'));
    document.getElementById('tabResumen').addEventListener('click', () => navigate('resumen', null, 'tab'));
    document.getElementById('tabAgenda').addEventListener('click', () => navigate('agenda', null, 'tab'));
    return;
  }
  if(userRole === 'viewer'){
    tb.innerHTML = `
      <button class="tab ${currentRoute==='viewerHome'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
      <button class="tab ${currentRoute==='resumen'||currentRoute==='resumenAlumno'?'active':''}" id="tabResumen">${icon('users')}<span>Resumen</span></button>
      <button class="tab ${currentRoute==='detalleAlertas'?'active':''}" id="tabAlertas">${icon('alert')}<span>Alertas</span></button>
    `;
    document.getElementById('tabHome').addEventListener('click', () => navigate('viewerHome', null, 'tab'));
    document.getElementById('tabResumen').addEventListener('click', () => navigate('resumen', null, 'tab'));
    document.getElementById('tabAlertas').addEventListener('click', () => navigate('detalleAlertas', null, 'tab'));
    return;
  }
  if(userRole === 'student'){
    tb.innerHTML = `
      <button class="tab ${currentRoute==='studentHome'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
      <button class="tab ${currentRoute==='resumenAlumno'||currentRoute==='detalleFaltasAlumno'||currentRoute==='resumenNotas'?'active':''}" id="tabMio">${icon('chart')}<span>Mis datos</span></button>
      <button class="tab ${currentRoute==='studentAgenda'?'active':''}" id="tabAgenda">${icon('calendar')}<span>Agenda</span></button>
      <button class="tab ${currentRoute==='studentProfesores'?'active':''}" id="tabProfes">${icon('users')}<span>Profesores</span></button>
    `;
    document.getElementById('tabHome').addEventListener('click', () => navigate('studentHome', null, 'tab'));
    document.getElementById('tabMio').addEventListener('click', () => { selectedStudentId = currentStudentAuth.studentId; navigate('resumenAlumno', null, 'tab'); });
    document.getElementById('tabAgenda').addEventListener('click', () => navigate('studentAgenda', null, 'tab'));
    document.getElementById('tabProfes').addEventListener('click', () => navigate('studentProfesores', null, 'tab'));
    return;
  }
  tb.innerHTML = `
    <button class="tab ${currentRoute==='home'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
    <button class="tab ${currentRoute==='asistencia'?'active':''}" id="tabAsist">${icon('clipboard')}<span>Asistencia</span></button>
    <button class="tab ${currentRoute==='horarios'?'active':''}" id="tabHorarios">${icon('calendar')}<span>Horarios</span></button>
    <button class="tab ${currentRoute==='agenda'||currentRoute==='agendaNuevo'||currentRoute==='agendaDetalle'?'active':''}" id="tabAgenda">${icon('clipboard')}<span>Agenda</span></button>
    <button class="tab ${currentRoute==='config'?'active':''}" id="tabConfig">${icon('gear')}<span>Config</span></button>
  `;
  document.getElementById('tabHome').addEventListener('click', () => navigate('home', null, 'tab'));
  document.getElementById('tabAsist').addEventListener('click', () => navigate('asistencia', null, 'tab'));
  document.getElementById('tabHorarios').addEventListener('click', () => navigate('horarios', null, 'tab'));
  document.getElementById('tabAgenda').addEventListener('click', () => navigate('agenda', null, 'tab'));
  document.getElementById('tabConfig').addEventListener('click', () => navigate('config', null, 'tab'));
}

// ---------- Identidad (PIN + Napo/Vicky) ----------
async function guardarConfigGeneral(){
  const entrada = document.getElementById('cfgEntrada').value;
  const tolerancia = Number(document.getElementById('cfgTolerancia').value);
  const corte = document.getElementById('cfgCorte').value;
  if(!/^\d{2}:\d{2}$/.test(entrada) || !/^\d{2}:\d{2}$/.test(corte) || isNaN(tolerancia)){
    await customAlert('Revisá los formatos: horas como HH:MM, tolerancia en minutos.');
    return;
  }
  const datos = { entrada, toleranciaMin: tolerancia, corteFaltaCompleta: corte };
  const passEl = document.getElementById('cfgPasswordGenerica');
  if(passEl){
    const pass = passEl.value.trim();
    if(pass.length < 6){ await customAlert('La contraseña genérica tiene que tener al menos 6 caracteres.'); return; }
    datos.passwordGenerica = pass;
  }
  // merge:true para no pisar lo cargado en "Feriados, bimestres, horarios y umbrales"
  setDoc(doc(db,'config','general'), datos, { merge: true })
    .then(() => showToast('Configuración guardada'))
    .catch(err=>showSaveError(err));
}

async function migrarStudentIdEnAsistencia(){
  const pendientes = Object.entries(cache.attendance).filter(([key, rec]) => !rec.studentId);
  if(pendientes.length === 0){ showToast('Ya está todo migrado'); return; }
  if(!(await customConfirm(`Se van a actualizar ${pendientes.length} registros viejos de asistencia. ¿Confirmás?`))) return;
  const estadoEl = document.getElementById('migracionEstado');
  let hechos = 0;
  for(let i=0; i<pendientes.length; i+=450){
    const lote = pendientes.slice(i, i+450);
    const batch = writeBatch(db);
    lote.forEach(([key]) => {
      const [fecha, studentId] = key.split('|');
      batch.set(doc(db,'attendance',docId(key)), { studentId, fecha }, { merge: true });
    });
    await batch.commit();
    hechos += lote.length;
    if(estadoEl) estadoEl.textContent = `Migrando... ${hechos}/${pendientes.length}`;
  }
  if(estadoEl) estadoEl.textContent = `Listo, ${hechos} registros actualizados.`;
  showToast('Migración terminada');
  await recargarHistoricoAsistencia(); // la mayoría son fechas viejas
}

function renderCalendarioCiclo(){
  const feriados = [...FERIADOS_2026].sort();
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Calendario del ciclo</h1>
    </div>
    <p class="section-label">Bimestres</p>
    <div class="sancion-list" style="margin-bottom:18px;">
      ${BIMESTRES.map(b => `
        <div class="sancion-item">
          <p class="folio"><span class="curso-dot c${b.n}"></span>${b.n}° bimestre</p>
          <p class="motivo">${fmtDateLong(b.from)} al ${fmtDateLong(b.to)}</p>
        </div>
      `).join('')}
    </div>
    <p class="section-label">Feriados y días sin clase (${feriados.length})</p>
    <div class="sancion-list">
      ${feriados.map(f => `<div class="sancion-item"><p class="folio">${fmtDateLong(f)}</p></div>`).join('')}
    </div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
}

function renderAuditoria(){
  const eventos = [];
  (getSanciones() ? Object.values(getSanciones()).flat() : []).forEach(s => {
    eventos.push({ ts: s.createdAt||0, autor: s.autor||'—', accion: 'Apercibimiento', detalle: s.motivo, fecha: s.fecha });
  });
  getCertificados().forEach(c => {
    eventos.push({ ts: c.createdAt||0, autor: c.autor||'—', accion: 'Certificado médico', detalle: `${fmtDateShort(c.from)} al ${fmtDateShort(c.to)}`, fecha: null });
  });
  Object.values(cache.valoraciones).forEach(v => {
    eventos.push({ ts: v.updatedAt||0, autor: v.autor||'—', accion: 'Valoración pedagógica', detalle: `${v.materia} · bim ${v.bimestre}`, fecha: null });
  });
  Object.values(cache.notas).forEach(n => {
    eventos.push({ ts: n.updatedAt||0, autor: n.autor||'—', accion: 'Nota', detalle: `${n.materia} · cuatri ${n.cuatrimestre} · ${n.nota}`, fecha: null });
  });
  eventos.sort((a,b)=> b.ts - a.ts);

  const filtro = window.__auditoriaAutor || '';
  const autores = [...new Set(eventos.map(e=>e.autor))].sort();
  const visibles = (filtro ? eventos.filter(e=>e.autor===filtro) : eventos).slice(0, 200);

  const rows = visibles.map(e => `
    <div class="sancion-item">
      <p class="folio">${e.accion} · ${e.autor}</p>
      <p class="motivo">${e.detalle}${e.ts ? ' · ' + new Date(e.ts).toLocaleString('es-AR') : ''}</p>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Registro de actividad</h1>
    </div>
    <div class="field-row">
      <label>Filtrar por autor</label>
      <select id="autorSelect">
        <option value="">Todos</option>
        ${autores.map(a => `<option value="${a}" ${a===filtro?'selected':''}>${a}</option>`).join('')}
      </select>
    </div>
    <p class="info-note">${icon('info')}Muestra apercibimientos, certificados, valoraciones y notas (lo único que guarda fecha y hora de carga). Asistencia diaria no queda registrada acá.</p>
    ${visibles.length ? `<div class="sancion-list">${rows}</div>` : `<p class="empty-inline">Sin actividad registrada todavía.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  document.getElementById('autorSelect').addEventListener('change', (e) => { window.__auditoriaAutor = e.target.value; render(); });
}

// ---------- Entregas y trámites ----------
function getEventos(){ return cache.eventos; }
function eventosDeCurso(curso){
  return Object.values(getEventos()).filter(e => e.curso === curso).sort((a,b)=> a.fecha.localeCompare(b.fecha));
}
function diasHasta(fechaISO){
  const hoy = new Date(todayISO()+'T00:00:00');
  const f = new Date(fechaISO+'T00:00:00');
  return Math.round((f - hoy) / 86400000);
}
function fmtDiasHasta(dias){
  if(dias < 0) return `Hace ${Math.abs(dias)} día${Math.abs(dias)!==1?'s':''}`;
  if(dias === 0) return 'Hoy';
  if(dias === 1) return 'Mañana';
  return `En ${dias} días`;
}
const EVENTO_TIPOS = { examen:'Examen', recuperatorio:'Recuperatorio', tp:'Entrega de TP', otro:'Otro' };
function eventoIcon(tipo){
  return tipo==='examen' ? 'file' : tipo==='recuperatorio' ? 'clock' : tipo==='tp' ? 'clipboard' : 'calendar';
}
// Arma el título solo a partir del tipo y la materia (no hace falta escribirlo a mano,
// salvo que sea "Otro"). Ej: tipo=examen, materia=Matemática -> "Examen de Matemática".
function tituloAutomatico(tipo, materia){
  const label = EVENTO_TIPOS[tipo] || 'Evento';
  return materia ? `${label} de ${materia}` : label;
}

function getTramites(){ return cache.tramites; }
function entregaKey(tramiteId, studentId, itemKey){ return docId(`${tramiteId}_${studentId}_${itemKey}`); }
function getEntrega(tramiteId, studentId, itemKey){ return cache.entregas[entregaKey(tramiteId, studentId, itemKey)]; }

async function toggleEntrega(tramiteId, studentId, itemKey){
  const key = entregaKey(tramiteId, studentId, itemKey);
  const actual = cache.entregas[key];
  const ref = doc(db,'entregas',key);
  if(!actual){
    setDoc(ref, { entregado: true, fecha: todayISO(), autor: getUsuario() }).catch(err=>showSaveError(err));
  } else if(actual.entregado){
    setDoc(ref, { exento: true, entregado: false, fecha: todayISO(), autor: getUsuario() }).catch(err=>showSaveError(err));
  } else {
    deleteDoc(ref).catch(err=>showSaveError(err));
  }
}

async function crearTramite(){
  const nombre = document.getElementById('tramiteNombre').value.trim();
  const itemsRaw = document.getElementById('tramiteItems').value.trim();
  const fechaLimite = document.getElementById('tramiteFecha').value;
  const cursos = Array.from(document.querySelectorAll('.tramite-curso:checked')).map(c => c.value);
  const errEl = document.getElementById('tramiteError');
  errEl.textContent = '';
  if(!nombre || !itemsRaw || cursos.length===0){
    errEl.textContent = 'Completá nombre, al menos un ítem a entregar, y un curso.';
    return;
  }
  const items = itemsRaw.split(',').map(s=>s.trim()).filter(Boolean).map(label => ({ key: slugify(label), label }));
  await addDoc(collection(db,'tramites'), { nombre, items, cursos, fechaLimite: fechaLimite||null, autor: getUsuario(), createdAt: Date.now() });
  showToast('Trámite creado');
  navigate('tramites');
}

async function borrarTramite(id, nombre){
  if(!(await customConfirm(`¿Borrar "${nombre}" y todo lo registrado ahí? No se puede deshacer.`, {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'tramites',id)).then(() => showToast('Trámite borrado')).catch(err=>showSaveError(err));
}

function renderTramites(){
  const tramites = Object.values(getTramites()).sort((a,b)=> (b.createdAt||0)-(a.createdAt||0));
  const rows = tramites.map(t => {
    const students = getStudents().filter(s => t.cursos.includes(s.curso));
    let pendientes = 0, total = 0;
    students.forEach(s => {
      t.items.forEach(it => {
        total++;
        const e = getEntrega(t.id, s.id, it.key);
        if(!e || (!e.entregado && !e.exento)) pendientes++;
      });
    });
    const hechos = total - pendientes;
    const pct = total ? Math.round((hechos/total)*100) : 0;
    const tipoIcon = t.items.some(i => /dinero|plata|pago/i.test(i.label)) ? 'money'
      : t.items.some(i => /ficha|apto|m[eé]dic/i.test(i.label)) ? 'heart'
      : 'file';
    return `
    <div class="tramite-card" data-tramite="${t.id}">
      <div class="module-row" style="border-bottom:none;padding:14px 15px 8px;">
        <span class="icon-chip">${icon(tipoIcon)}</span>
        <div class="txt">
          <p class="title">${t.nombre}</p>
          <p class="desc">${t.cursos.map(c=>c+'°A').join(', ')} · ${t.items.map(i=>i.label).join(' + ')}${t.fechaLimite?' · hasta '+fmtDateShort(t.fechaLimite):''}</p>
        </div>
        <span class="badge-soon" style="background:${pendientes>0?'var(--stamp-bg)':'var(--sage-bg)'};color:${pendientes>0?'var(--stamp)':'var(--sage)'};">${pendientes} pend.</span>
        <span class="chevron">${icon('chevron')}</span>
      </div>
      <div class="progress-row ${pct===100?'complete-row':''}">
        <div class="progress-bar"><div class="progress-fill ${pct===100?'complete':''}" style="width:${pct}%;"></div></div>
        <span class="progress-label">${hechos}/${total}</span>
      </div>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Entregas y trámites</h1>
    </div>
    <p class="info-note" style="margin-top:0;">${icon('info')}Para cualquier cosa que los alumnos te tengan que entregar (autorizaciones, dinero, fichas médicas, aptos...) y quieras llevar el control de quién ya te la dio.</p>
    <button class="btn-primary" id="nuevoTramiteBtn" style="width:100%;margin-bottom:16px;">+ Nuevo trámite</button>
    <p class="section-label">Activos</p>
    ${tramites.length ? `<div class="module-list">${rows}</div>` : `<p class="empty-inline">Todavía no armaste ningún trámite.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  document.getElementById('nuevoTramiteBtn').addEventListener('click', () => navigate('tramiteNuevo'));
  document.querySelectorAll('[data-tramite]').forEach(el => {
    el.addEventListener('click', () => { selectedTramiteId = el.dataset.tramite; navigate('tramiteDetalle'); });
  });
}

function renderTramiteNuevo(){
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Nuevo trámite</h1>
    </div>
    <div class="field-row"><label>Nombre</label><input id="tramiteNombre" type="text" placeholder="Ej: Salida Museo del Holocausto"></div>
    <div class="field-row"><label>Qué entregan</label><input id="tramiteItems" type="text" placeholder="Ej: Autorización, Dinero"></div>
    <p style="font-size:11.5px;color:var(--ink-soft);margin:-8px 0 12px;">Separá con comas si son varias cosas distintas (ej: autorización y dinero por separado).</p>
    <div class="field-row"><label>Fecha límite (opcional)</label><input id="tramiteFecha" type="date"></div>
    <p style="font-size:12.5px;color:var(--ink-soft);margin:10px 0 6px;">Cursos que participan</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px;">
      ${CURSOS.map(c => `<label class="curso-check-label"><input type="checkbox" class="tramite-curso" value="${c}"> <span class="curso-dot c${c}"></span>${c}° A</label>`).join('')}
    </div>
    <p id="tramiteError" style="font-size:12px;color:var(--stamp);min-height:16px;margin:0 0 8px;"></p>
    <button class="btn-primary" id="crearTramiteBtn" style="width:100%;">Crear trámite</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('tramites'));
  document.getElementById('crearTramiteBtn').addEventListener('click', crearTramite);
}

async function importarEntregasMasivo(tramiteId, data){
  const alumnos = data.alumnos || [];
  const ops = [];
  alumnos.forEach(a => {
    Object.entries(a.items||{}).forEach(([itemKey, estado]) => {
      const key = entregaKey(tramiteId, a.studentId, itemKey);
      if(estado === 'entregado') ops.push(setDoc(doc(db,'entregas',key), { entregado: true, fecha: todayISO(), autor: getUsuario() }));
      else if(estado === 'exento') ops.push(setDoc(doc(db,'entregas',key), { exento: true, entregado: false, fecha: todayISO(), autor: getUsuario() }));
    });
  });
  await Promise.all(ops);
  showToast(`${ops.length} registros importados`);
  render();
}

function renderTramiteImprimir(){
  const t = getTramites()[selectedTramiteId];
  if(!t){ navigate('tramites'); return; }
  const students = getStudents().filter(s => t.cursos.includes(s.curso)).sort((a,b)=> Number(a.curso)-Number(b.curso) || a.apellido.localeCompare(b.apellido));

  const rows = students.map(s => {
    const celdas = t.items.map(it => {
      const e = getEntrega(t.id, s.id, it.key);
      const txt = e && e.entregado ? '✓' : (e && e.exento ? 'Exento' : '—');
      return `<td style="text-align:center;">${txt}</td>`;
    }).join('');
    return `<tr><td>${s.curso}°A</td><td>${s.apellido}, ${s.nombre}</td>${celdas}</tr>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar no-print" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Imprimir lista</h1>
    </div>
    <button class="btn-primary no-print" id="imprimirBtn" style="width:100%;margin-bottom:16px;">Imprimir / Guardar como PDF</button>
    <div class="boletin-sheet">
      <div class="boletin-head">
        <img src="icon-192.png" alt="ISP">
        <div>
          <p class="boletin-title">Instituto Superior Porteño</p>
          <p class="boletin-sub">${t.nombre}${t.fechaLimite?' · hasta '+fmtDateShort(t.fechaLimite):''}</p>
        </div>
      </div>
      <table class="boletin-table">
        <tr><th>Curso</th><th>Alumno</th>${t.items.map(i=>`<th>${i.label}</th>`).join('')}</tr>
        ${rows}
      </table>
      <p class="boletin-footer">Generado el ${fmtDateLong(todayISO())}</p>
    </div>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('tramiteDetalle'));
  document.getElementById('imprimirBtn').addEventListener('click', () => window.print());
}

function renderTramiteDetalle(){
  const t = getTramites()[selectedTramiteId];
  if(!t){ navigate('tramites'); return; }
  const cursos = t.cursos;
  if(!cursos.includes(selectedCurso)) selectedCurso = cursos[0];
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));

  const rows = students.map(s => {
    const itemBtns = t.items.map(it => {
      const e = getEntrega(t.id, s.id, it.key);
      const cls = e && e.entregado ? 'on-p' : (e && e.exento ? 'on-saf' : '');
      const label = e && e.entregado ? `${it.label} ✓` : (e && e.exento ? `${it.label} (exento)` : it.label);
      return `<button class="state-btn ${cls}" style="width:auto;padding:0 10px;flex:1;" data-item="${it.key}" data-student="${s.id}">${label}</button>`;
    }).join('');
    return `
      <div class="student-card">
        <div class="row">
          <span class="name" style="flex:1;">${s.apellido}, ${s.nombre}</span>
        </div>
        <div class="btn-group" style="width:100%;margin-top:6px;">${itemBtns}</div>
      </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${t.nombre}</h1>
    </div>
    <div class="course-picker">${cursoBtns(cursos)}</div>
    <p class="date-label">${t.fechaLimite ? 'Hasta el '+fmtDateShort(t.fechaLimite) : 'Sin fecha límite'} · tocá un botón para marcar entregado, tocá de nuevo para exento, y una tercera vez para sacarlo</p>
    ${students.length ? `<div>${rows}</div>` : `<p class="empty-inline">Este curso no tiene alumnos cargados.</p>`}
    <button class="btn-secondary no-print" id="imprimirTramiteBtn" style="width:100%;margin-top:16px;">${icon('file')} Ver lista para imprimir / PDF</button>
    <p class="section-label" style="margin-top:18px;">Carga masiva (opcional)</p>
    <input type="file" id="tramiteImportInput" accept="application/json" style="margin-bottom:10px;">
    <button class="btn-secondary" id="borrarTramiteBtn" style="width:100%;margin-top:6px;color:var(--stamp);">Borrar este trámite</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('tramites'));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.querySelectorAll('[data-item]').forEach(b => {
    b.addEventListener('click', () => toggleEntrega(t.id, b.dataset.student, b.dataset.item));
  });
  document.getElementById('borrarTramiteBtn').addEventListener('click', () => borrarTramite(t.id, t.nombre));
  document.getElementById('imprimirTramiteBtn').addEventListener('click', () => navigate('tramiteImprimir'));
  document.getElementById('tramiteImportInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try{ importarEntregasMasivo(t.id, JSON.parse(reader.result)); }
      catch(err){ customAlert('No pude leer ese archivo.'); }
    };
    reader.readAsText(file);
  });
}

async function importarNotasMasivo(data){
  const notas = data.notas || [];
  if(!notas.length){ await customAlert('El archivo no tiene notas para importar.'); return; }
  const confirmado = await customConfirm(`Esto borra TODAS las notas actuales cargadas en la app y las reemplaza por las ${notas.length} de este archivo. ¿Confirmás?`, { peligro: true, textoSi: 'Borrar y reemplazar' });
  if(!confirmado) return;

  const estadoEl = document.getElementById('notasImportEstado');
  const existentes = Object.keys(cache.notas);
  let hechos = 0;
  const total = existentes.length + notas.length;

  for(let i=0; i<existentes.length; i+=450){
    const lote = existentes.slice(i, i+450);
    const batch = writeBatch(db);
    lote.forEach(key => batch.delete(doc(db,'notas',key)));
    await batch.commit();
    hechos += lote.length;
    if(estadoEl) estadoEl.textContent = `Borrando notas viejas... ${hechos}/${total}`;
  }
  for(let i=0; i<notas.length; i+=450){
    const lote = notas.slice(i, i+450);
    const batch = writeBatch(db);
    lote.forEach(n => {
      const key = docId(`${n.studentId}_${n.cuatrimestre}_${slugify(n.materia)}`);
      batch.set(doc(db,'notas',key), { studentId: n.studentId, curso: n.curso, materia: n.materia, cuatrimestre: n.cuatrimestre, nota: n.nota, autor: getUsuario(), updatedAt: Date.now() });
    });
    await batch.commit();
    hechos += lote.length;
    if(estadoEl) estadoEl.textContent = `Cargando notas nuevas... ${hechos}/${total}`;
  }
  if(estadoEl) estadoEl.textContent = `Listo: ${notas.length} notas cargadas.`;
  showToast('Notas importadas');
  render();
}

async function guardarConfigAvanzada(){
  const feriadosRaw = document.getElementById('cfgFeriados').value.trim();
  const feriados = feriadosRaw.split(/[\n,]/).map(s=>s.trim()).filter(Boolean);
  const malFormados = feriados.filter(f => !/^\d{4}-\d{2}-\d{2}$/.test(f));
  if(malFormados.length){ await customAlert('Estas fechas no tienen el formato AAAA-MM-DD: ' + malFormados.join(', ')); return; }

  const bimestres = [1,2,3,4].map(n => ({
    n, from: document.getElementById(`bimFrom${n}`).value, to: document.getElementById(`bimTo${n}`).value
  }));
  if(bimestres.some(b => !b.from || !b.to)){ await customAlert('Completá las 4 fechas de inicio y fin de bimestre.'); return; }

  const umbralAlerta = Number(document.getElementById('cfgUmbralAlerta').value);
  const umbralSCPpct = Number(document.getElementById('cfgUmbralSCP').value);
  if(isNaN(umbralAlerta) || isNaN(umbralSCPpct)){ await customAlert('Revisá los umbrales, tienen que ser números.'); return; }

  const horaTiempos = {};
  for(let h=1; h<=8; h++){
    horaTiempos[h] = [document.getElementById(`horaIni${h}`).value, document.getElementById(`horaFin${h}`).value];
  }
  const efHorario = EF_HORARIO.map((b,i) => ({
    cursos: b.cursos, inicio: document.getElementById(`efIni${i}`).value, fin: document.getElementById(`efFin${i}`).value
  }));

  await setDoc(doc(db,'config','general'), {
    feriados, bimestres, umbralAlerta, umbralSCP: umbralSCPpct/100, horaTiempos, efHorario
  }, { merge: true });
  showToast('Configuración guardada');
  navigate('config');
}

function parseFeriadosTextarea(){
  const el = document.getElementById('cfgFeriados');
  const raw = el ? el.value : [...FERIADOS_2026].join('\n');
  return new Set(raw.split(/[\n,]/).map(s=>s.trim()).filter(f=>/^\d{4}-\d{2}-\d{2}$/.test(f)));
}
function escribirFeriadosTextarea(set){
  const el = document.getElementById('cfgFeriados');
  if(el) el.value = [...set].sort().join('\n');
}
function etiquetaMesFeriados(mesISO){
  const [a,m] = mesISO.split('-').map(Number);
  return `${MESES_NOMBRE[m-1]} ${a}`;
}
function generarCeldasCalendarioFeriados(mesISO, set){
  const [anio, mes] = mesISO.split('-').map(Number);
  const primerDia = new Date(anio, mes-1, 1);
  const ultimoDia = new Date(anio, mes, 0).getDate();
  const offsetLunes = (primerDia.getDay()+6)%7; // 0 = lunes
  let celdas = '';
  for(let i=0;i<offsetLunes;i++) celdas += `<div></div>`;
  for(let d=1; d<=ultimoDia; d++){
    const iso = `${mesISO}-${String(d).padStart(2,'0')}`;
    const dow = new Date(anio, mes-1, d).getDay();
    const esFinde = dow===0||dow===6;
    const marcado = set.has(iso);
    const bg = marcado ? 'var(--stamp)' : (esFinde ? 'var(--paper-2)' : 'var(--card)');
    const color = marcado ? '#fff' : 'var(--ink)';
    celdas += `<button type="button" data-cal-dia="${iso}" style="aspect-ratio:1;border:1px solid var(--border);border-radius:8px;background:${bg};color:${color};font-size:12.5px;cursor:pointer;">${d}</button>`;
  }
  return celdas;
}
function pintarCalendarioFeriados(){
  const cont = document.getElementById('feriadosCalendario');
  if(!cont) return;
  const mesISO = window.__feriadosCalMes;
  const set = parseFeriadosTextarea();
  cont.innerHTML = generarCeldasCalendarioFeriados(mesISO, set);
  const label = document.getElementById('feriadosCalMesLabel');
  if(label) label.textContent = etiquetaMesFeriados(mesISO);
  document.querySelectorAll('[data-cal-dia]').forEach(b => {
    b.addEventListener('click', () => {
      const iso = b.dataset.calDia;
      const set2 = parseFeriadosTextarea();
      if(set2.has(iso)) set2.delete(iso); else set2.add(iso);
      escribirFeriadosTextarea(set2);
      pintarCalendarioFeriados();
    });
  });
}
function cambiarMesFeriados(delta){
  let [a,m] = window.__feriadosCalMes.split('-').map(Number);
  m += delta;
  if(m<1){m=12;a--;} if(m>12){m=1;a++;}
  const nuevo = `${a}-${String(m).padStart(2,'0')}`;
  if(nuevo < '2026-01' || nuevo > '2026-12') return; // acompaña el ciclo lectivo 2026
  window.__feriadosCalMes = nuevo;
  pintarCalendarioFeriados();
}

function renderConfigAvanzada(){
  const feriadosTexto = [...FERIADOS_2026].sort().join('\n');
  const hoyMes = todayISO().slice(0,7);
  window.__feriadosCalMes = window.__feriadosCalMes || (hoyMes >= '2026-01' && hoyMes <= '2026-12' ? hoyMes : '2026-03');
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Configuración avanzada</h1>
    </div>

    <p class="section-label">Bimestres del ciclo lectivo</p>
    <div class="config-card">
      ${BIMESTRES.map(b => `
        <p style="font-size:12.5px;font-weight:600;margin:${b.n>1?'14px':'0'} 0 6px;">${b.n}° bimestre</p>
        <div class="field-row"><label>Desde</label><input id="bimFrom${b.n}" type="date" value="${b.from}"></div>
        <div class="field-row"><label>Hasta</label><input id="bimTo${b.n}" type="date" value="${b.to}"></div>
      `).join('')}
    </div>

    <p class="section-label" style="margin-top:20px;">Feriados y días sin clase</p>
    <div class="config-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <button type="button" class="btn-chip" id="feriadosMesAnterior">${icon('back')}</button>
        <p style="font-size:13px;font-weight:600;" id="feriadosCalMesLabel">${etiquetaMesFeriados(window.__feriadosCalMes)}</p>
        <button type="button" class="btn-chip" id="feriadosMesSiguiente" style="transform:scaleX(-1);">${icon('back')}</button>
      </div>
      <div id="feriadosCalendario" style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;">
        ${generarCeldasCalendarioFeriados(window.__feriadosCalMes, new Set(FERIADOS_2026))}
      </div>
      <p style="font-size:11.5px;color:var(--ink-soft);margin:10px 0 0;">Tocá un día para marcarlo/desmarcarlo como feriado o día sin clase. Se usan para no contar esos días como clase en el % de asistencia por materia.</p>
      <details style="margin-top:12px;">
        <summary style="font-size:12px;color:var(--ink-soft);cursor:pointer;">Editar como lista de texto</summary>
        <textarea id="cfgFeriados" rows="6" placeholder="Una fecha por línea, formato AAAA-MM-DD" style="margin-top:8px;">${feriadosTexto}</textarea>
      </details>
    </div>

    <p class="section-label" style="margin-top:20px;">Umbrales</p>
    <div class="config-card">
      <div class="field-row"><label>Faltas para "alerta"</label><input id="cfgUmbralAlerta" type="number" value="${UMBRAL_ALERTA}"></div>
      <div class="field-row"><label>% mínimo (SCP)</label><input id="cfgUmbralSCP" type="number" value="${Math.round(UMBRAL_SCP*100)}"></div>
      <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 0 0;">Por debajo de ese % anual en una materia, se marca como riesgo de SCP.</p>
    </div>

    <p class="section-label" style="margin-top:20px;">Horarios de las horas de clase</p>
    <div class="config-card">
      ${[1,2,3,4,5,6,7,8].map(h => `
        <div class="field-row"><label>${h}ª hora</label>
          <input id="horaIni${h}" type="time" value="${HORA_TIEMPOS[h][0]}" style="flex:1;">
          <input id="horaFin${h}" type="time" value="${HORA_TIEMPOS[h][1]}" style="flex:1;">
        </div>
      `).join('')}
      <p style="font-size:12.5px;font-weight:600;margin:14px 0 6px;">Educación Física (martes y jueves)</p>
      ${EF_HORARIO.map((b,i) => `
        <div class="field-row"><label>${b.cursos.map(c=>c+'°').join('/')}</label>
          <input id="efIni${i}" type="time" value="${b.inicio}" style="flex:1;">
          <input id="efFin${i}" type="time" value="${b.fin}" style="flex:1;">
        </div>
      `).join('')}
    </div>

    <button class="btn-primary" id="guardarAvanzadaBtn" style="width:100%;margin:18px 0 30px;">Guardar todo</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  document.getElementById('guardarAvanzadaBtn').addEventListener('click', guardarConfigAvanzada);
  document.getElementById('feriadosMesAnterior').addEventListener('click', () => cambiarMesFeriados(-1));
  document.getElementById('feriadosMesSiguiente').addEventListener('click', () => cambiarMesFeriados(1));
  pintarCalendarioFeriados();
}

function renderAlumnos(){
  const migrado = Object.keys(cache.students).length > 0;
  const filtro = (window.__alumnosFiltro||'').toLowerCase();
  const activos = getStudents().filter(s => !filtro || `${s.apellido} ${s.nombre}`.toLowerCase().includes(filtro))
    .sort((a,b)=> Number(a.curso)-Number(b.curso) || a.apellido.localeCompare(b.apellido));
  const bajas = migrado ? getStudentsDeBaja().sort((a,b)=> a.apellido.localeCompare(b.apellido)) : [];

  const filaAlumno = (s, esBaja) => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <p class="folio"><span class="curso-chip c${s.curso}">${s.curso}°</span> ${s.apellido}, ${s.nombre}</p>
          ${s.familyEmails && s.familyEmails.length ? `<p class="motivo">${s.familyEmails.join(', ')}</p>` : ''}
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
          ${esBaja
            ? `<button class="btn-chip" data-reactivar="${s.id}">Reactivar</button>`
            : `<button class="btn-chip" data-editar="${s.id}">Editar</button>
               <button class="btn-chip danger" data-baja="${s.id}">Dar de baja</button>`}
        </div>
      </div>
    </div>`;

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Alumnos</h1>
    </div>

    ${!migrado ? `
    <div class="config-card" style="margin-bottom:18px;">
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Antes de poder agregar o dar de baja alumnos desde acá, hay que migrar la lista actual a la base de datos (se hace una sola vez y no cambia nada de lo que ya está cargado).</p>
      <button class="btn-primary" id="migrarAlumnosBtn" style="width:100%;">Migrar alumnos</button>
    </div>
    ` : `
    <button class="btn-primary" id="agregarAlumnoBtn" style="width:100%;margin-bottom:14px;">Agregar alumno</button>
    <input type="text" id="filtroAlumnos" placeholder="Buscar por nombre..." style="margin-bottom:12px;" value="${window.__alumnosFiltro||''}">
    `}

    <p class="section-label">Alumnos activos (${activos.length})</p>
    ${activos.length ? `<div class="sancion-list" style="margin-bottom:18px;">${activos.map(s=>filaAlumno(s,false)).join('')}</div>` : `<p style="font-size:13px;color:var(--ink-soft);margin-bottom:18px;">Nadie coincide con esa búsqueda.</p>`}

    ${bajas.length ? `
    <p class="section-label">Dados de baja (${bajas.length})</p>
    <div class="sancion-list" style="margin-bottom:18px;">${bajas.map(s=>filaAlumno(s,true)).join('')}</div>
    ` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  if(document.getElementById('migrarAlumnosBtn')){
    document.getElementById('migrarAlumnosBtn').addEventListener('click', migrarAlumnosAFirestore);
  }
  if(document.getElementById('agregarAlumnoBtn')){
    document.getElementById('agregarAlumnoBtn').addEventListener('click', () => agregarAlumno().then(render));
  }
  if(document.getElementById('filtroAlumnos')){
    document.getElementById('filtroAlumnos').addEventListener('input', (e) => { window.__alumnosFiltro = e.target.value; render(); });
  }
  document.querySelectorAll('[data-editar]').forEach(b => {
    b.addEventListener('click', () => editarAlumno(b.dataset.editar).then(render));
  });
  document.querySelectorAll('[data-baja]').forEach(b => {
    b.addEventListener('click', () => darDeBajaAlumno(b.dataset.baja));
  });
  document.querySelectorAll('[data-reactivar]').forEach(b => {
    b.addEventListener('click', () => reactivarAlumno(b.dataset.reactivar));
  });
}

function renderHorarioEditar(){
  const migrado = Object.keys(cache.schedule).length > 0;
  const schedule = getSchedule();
  const dayEntries = (schedule[selectedCurso] && schedule[selectedCurso][selectedDia]) || [];
  const porHora = {};
  dayEntries.forEach(e => { porHora[e.hour] = e; });

  const filas = [1,2,3,4,5,6,7,8].map(h => {
    const e = porHora[h];
    return `
      <div class="field-row">
        <label>${h}ª hora</label>
        <input type="text" class="horaMateria" data-hour="${h}" placeholder="Materia" value="${e ? e.subject : ''}" style="flex:2;">
        <input type="text" class="horaProfesor" data-hour="${h}" placeholder="Profesor/a (coma si hay más de uno)" value="${e ? e.teachers.join(', ') : ''}" style="flex:2;">
      </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Horario de materias</h1>
    </div>
    ${!migrado ? `
    <div class="config-card" style="margin-bottom:18px;">
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Antes de poder editar el horario desde acá, hay que migrarlo a la base de datos (se hace una sola vez y no cambia nada de lo que ya está cargado).</p>
      <button class="btn-primary" id="migrarHorarioBtn" style="width:100%;">Migrar horario</button>
    </div>
    ` : `
    <div class="course-picker">
      ${cursoBtns(CURSOS)}
      ${pillBtnRow('diaEdit', DIAS.map(d => ({value:d, label:DIA_LABEL[d].slice(0,3)})), selectedDia)}
    </div>
    <div class="config-card" style="margin-top:14px;">
      <p style="font-size:11.5px;color:var(--ink-soft);margin-bottom:10px;">Dejá "Materia" vacía en las horas que ese día no tiene clase para este curso.</p>
      ${filas}
    </div>
    <button class="btn-primary" id="guardarHorarioBtn" style="width:100%;margin:16px 0 30px;">Guardar ${selectedCurso}° A — ${DIA_LABEL[selectedDia]}</button>
    `}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  if(document.getElementById('migrarHorarioBtn')){
    document.getElementById('migrarHorarioBtn').addEventListener('click', migrarHorarioAFirestore);
  }
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  attachPillBtns('diaEdit', (d) => { selectedDia = d; render(); });
  if(document.getElementById('guardarHorarioBtn')){
    document.getElementById('guardarHorarioBtn').addEventListener('click', () => {
      const entradas = [1,2,3,4,5,6,7,8].map(h => ({
        hour: h,
        subject: document.querySelector(`.horaMateria[data-hour="${h}"]`).value,
        teachersTxt: document.querySelector(`.horaProfesor[data-hour="${h}"]`).value
      }));
      guardarHorarioDia(selectedCurso, selectedDia, entradas);
    });
  }
}

const ETIQUETA_SYNC = {
  attendance: 'Asistencia', sanciones: 'Sanciones', substitutions: 'Suplencias',
  ef: 'Ed. Física', certificados: 'Certificados', autorizaciones: 'Autorizaciones (TJ)',
  teachers: 'Cuentas de profesores', valoraciones: 'Valoraciones', notas: 'Notas',
  entradasEspeciales: 'Entradas especiales', viewers: 'Cuentas de lectura',
  driveMapping: 'Vínculos con Drive', tramites: 'Trámites', entregas: 'Entregas de trámites',
  diasSinClase: 'Días sin clase', students_auth: 'Cuentas de alumnos', students: 'Alumnos',
  schedule: 'Horario de materias', eventos: 'Agenda', config: 'Configuración general'
};
function tiempoRelativo(ms){
  if(!ms) return 'nunca (todavía no llegó nada)';
  const seg = Math.round((Date.now()-ms)/1000);
  if(seg < 5) return 'recién';
  if(seg < 60) return `hace ${seg} seg`;
  const min = Math.round(seg/60);
  if(min < 60) return `hace ${min} min`;
  const hs = Math.round(min/60);
  if(hs < 24) return `hace ${hs} h`;
  return `hace ${Math.round(hs/24)} días`;
}
function renderSincronizacion(){
  const filas = Object.entries(ETIQUETA_SYNC).map(([key,label]) => {
    const ms = cache._lastSync[key];
    const ok = ms && (Date.now()-ms) < 5*60*1000;
    return `
      <div class="sancion-item">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <p class="folio"><span class="status-dot ${ms?'on':'off'}"></span>${label}</p>
          <p style="font-size:12.5px;color:${ms?'var(--ink-soft)':'var(--stamp)'};">${tiempoRelativo(ms)}</p>
        </div>
      </div>`;
  }).join('');
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Última sincronización</h1>
    </div>
    <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:14px;">Cuándo se actualizó por última vez cada parte de la app en este celular/compu (se refresca solo con cada cambio que llega). Si algo quedó en "nunca" o hace mucho rato con el celular conectado a internet, probablemente convenga cerrar y volver a abrir la app.</p>
    <div class="sancion-list">${filas}</div>
    <button class="btn-secondary" id="refrescarSyncBtn" style="width:100%;margin-top:16px;">Actualizar esta pantalla</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  document.getElementById('refrescarSyncBtn').addEventListener('click', render);
}

function renderEntradasEspeciales(){
  const lista = Object.values(cache.entradasEspeciales)
    .sort((a,b)=> b.fecha.localeCompare(a.fecha) || a.curso.localeCompare(b.curso));

  const rows = lista.map(e => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <p class="folio"><span class="curso-chip c${e.curso}">${e.curso}°</span> ${fmtDateShort(e.fecha)} · hasta las ${e.horaTope}</p>
          ${e.motivo ? `<p class="motivo">${e.motivo}</p>` : ''}
        </div>
        <button class="btn-chip danger" data-borrar-ee="${e.fecha}|${e.curso}">Borrar</button>
      </div>
    </div>`).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Entradas especiales</h1>
    </div>
    <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:14px;">Todas las entradas especiales cargadas (desde "Horarios y suplencias" o al marcar un profesor ausente la primera hora). Se pueden borrar si se cargaron por error.</p>
    ${lista.length ? `<div class="sancion-list">${rows}</div>` : `<p style="font-size:13px;color:var(--ink-soft);">No hay ninguna cargada.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('config'));
  document.querySelectorAll('[data-borrar-ee]').forEach(b => {
    b.addEventListener('click', () => {
      const [fecha, curso] = b.dataset.borrarEe.split('|');
      borrarEntradaEspecial(fecha, curso);
    });
  });
}

// ---------- Pendientes del preceptor (solo Napo) ----------
// Recordatorios personales: se cargan hoy y llegan como notificación a las 8:00 del
// siguiente día de clase (si se cargan un viernes, llegan el lunes). El aviso lo manda
// la tarea programada de las 8:00 que ya existía, así que no agrega costo.
function proximoDiaDeClase(desdeISO){
  const d = new Date(desdeISO + 'T12:00:00');
  for(let i = 0; i < 14; i++){
    d.setDate(d.getDate() + 1);
    const iso = localISODate(d);
    const dow = d.getDay();
    if(dow !== 0 && dow !== 6 && !FERIADOS_2026.has(iso)) return iso;
  }
  d.setDate(d.getDate() + 1);
  return localISODate(d);
}

async function agregarPendiente(){
  const input = document.getElementById('nuevoPendiente');
  const texto = (input && input.value || '').trim();
  if(!texto){ if(input) input.focus(); return; }
  const fecha = proximoDiaDeClase(todayISO());
  try{
    await addDoc(collection(db,'pendientes'), { texto, fecha, notificado: false, creadoEn: Date.now(), usuario: getUsuario() });
    if(input) input.value = '';
    showToast(`Te llega el ${fmtDateShort(fecha)} a las 8:00`);
  }catch(err){ showSaveError(err); }
}

async function borrarPendiente(id){
  if(!(await customConfirm('¿Borrar este pendiente?', { peligro: true, textoSi: 'Borrar' }))) return;
  deleteDoc(doc(db,'pendientes', id)).catch(err => showSaveError(err));
}

function renderPendientes(){
  const todos = Object.values(cache.pendientes);
  const porLlegar = todos.filter(p => !p.notificado).sort((a,b) => a.fecha.localeCompare(b.fecha) || a.creadoEn - b.creadoEn);
  const enviados = todos.filter(p => p.notificado).sort((a,b) => b.fecha.localeCompare(a.fecha)).slice(0, 15);
  const fila = (p) => `
    <div class="sancion-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;">
          <p class="folio" style="white-space:normal;">${escapeHtml(p.texto)}</p>
          <p class="motivo">${p.notificado ? 'Enviado el' : 'Te llega el'} ${fmtDateShort(p.fecha)}${p.notificado ? '' : ' a las 8:00'}</p>
        </div>
        <button class="borrar-btn" data-borrar-pend="${p.id}">${icon('trash')}</button>
      </div>
    </div>`;

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Pendientes</h1>
    </div>
    <p class="info-note" style="margin-top:0;">${icon('bell')}Lo que anotes acá te llega como notificación a las 8:00 del próximo día de clase. Solo lo ves vos.</p>
    <div class="config-card" style="margin-bottom:18px;">
      <textarea id="nuevoPendiente" rows="2" placeholder="Ej: llamar a la familia de Pérez por las faltas"></textarea>
      <button class="btn-primary" id="agregarPendienteBtn" style="width:100%;margin-top:10px;">Agregar · llega el ${fmtDateShort(proximoDiaDeClase(todayISO()))}</button>
    </div>
    <p class="section-label">Por llegar (${porLlegar.length})</p>
    ${porLlegar.length ? `<div class="sancion-list" style="margin-bottom:18px;">${porLlegar.map(fila).join('')}</div>` : `<p class="empty-inline" style="margin-bottom:18px;">No tenés pendientes cargados.</p>`}
    ${enviados.length ? `<p class="section-label">Ya enviados</p><div class="sancion-list">${enviados.map(fila).join('')}</div>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  document.getElementById('agregarPendienteBtn').addEventListener('click', agregarPendiente);
  document.querySelectorAll('[data-borrar-pend]').forEach(b => b.addEventListener('click', () => borrarPendiente(b.dataset.borrarPend)));
}

function renderConfig(){
  const cfg = getConfig();
  const esNapo = getUsuario()==='Napo';
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <h1>Configuración</h1>
    </div>

    <p class="section-label">Tu cuenta</p>
    <div class="config-card">
      <p class="v" style="margin-bottom:10px;">Estás como <b>${getUsuario()}</b>.</p>
      <div style="display:flex;gap:8px;">
        <button class="btn-secondary" id="cambiarUsuarioBtn" style="flex:1;">Cambiar usuario</button>
        <button class="btn-secondary" id="cerrarSesionBtn" style="flex:1;color:var(--stamp);">Cerrar sesión</button>
      </div>
    </div>

    <p class="section-label" style="margin-top:20px;">Apariencia</p>
    <div class="config-card">
      ${pillBtnRow('tema', [{value:'auto',label:'Automático'},{value:'claro',label:'Claro'},{value:'oscuro',label:'Oscuro'}], getTema())}
      <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 0 0;">"Automático" sigue lo que tenga configurado el celular. Se guarda en este dispositivo.</p>
    </div>

    ${esNapo ? `
    <p class="section-label" style="margin-top:20px;">Horarios de entrada (todo el colegio)</p>
    <div class="config-card">
      <div class="field-row"><label>Entrada</label><input id="cfgEntrada" type="text" value="${cfg.entrada}" placeholder="07:45"></div>
      <div class="field-row"><label>Tolerancia (min)</label><input id="cfgTolerancia" type="number" value="${cfg.toleranciaMin}"></div>
      <div class="field-row"><label>Corte falta completa</label><input id="cfgCorte" type="text" value="${cfg.corteFaltaCompleta}" placeholder="09:00"></div>
      <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 0 12px;">Después de la hora de "corte", una llegada ya cuenta como falta completa en vez de tardanza.</p>
      <div class="field-row"><label>Contraseña genérica alumnos</label><input id="cfgPasswordGenerica" type="text" value="${getPasswordGenerica()}" placeholder="mínimo 6 caracteres"></div>
      <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 0 12px;">Es la contraseña con la que se crean las cuentas de alumnos en la carga masiva (en "Cuentas de alumnos"). Cada alumno la puede cambiar después por su cuenta.</p>
      <button class="btn-primary" id="guardarConfigBtn" style="width:100%;">Guardar</button>
    </div>

    <p class="section-label" style="margin-top:20px;">Personas y cuentas</p>
    <div class="module-list">
      ${moduleRow('users','Alumnos','Agregar, editar o dar de baja', 'alumnos')}
      ${moduleRow('users','Cuentas de alumnos','Accesos de los alumnos a la app', 'alumnosCuentas')}
      ${moduleRow('users','Profesores','Cuentas y materias de cada profesor', 'profesores')}
      ${moduleRow('users','Cuentas de solo lectura','Directivos y otros accesos de consulta', 'lectura')}
    </div>

    <p class="section-label" style="margin-top:20px;">Colegio</p>
    <div class="module-list">
      ${moduleRow('calendar','Horario de materias','Qué materia y profesor va en cada hora', 'horarioEditar')}
      ${moduleRow('clock','Entradas especiales','Las cargadas, para revisar o borrar', 'entradasEspeciales')}
      ${moduleRow('calendar','Feriados, bimestres y umbrales','Calendario, horas de clase y alertas', 'configAvanzada')}
    </div>

    <p class="section-label" style="margin-top:20px;">Datos</p>
    <div class="module-list">
      ${moduleRow('file','Conexión con Drive','Emparejar y sincronizar faltas con Excel', 'conexionDrive')}
      ${moduleRow('file','Importar histórico','Cargar asistencia y datos desde archivo', 'importar')}
      ${moduleRow('clock','Última sincronización','Cuándo se actualizó cada parte de la app', 'sincronizacion')}
      ${moduleRow('clipboard','Registro de actividad','Quién cambió qué y cuándo', 'auditoria')}
    </div>
    <div class="config-card" style="margin-top:10px;">
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Importar notas desde un archivo (reemplaza TODAS las notas actuales).</p>
      <input type="file" id="notasImportInput" accept="application/json" style="margin-bottom:10px;">
      <p id="notasImportEstado" style="font-size:12px;color:var(--ink-soft);"></p>
    </div>
    <div class="config-card" style="margin-top:10px;">
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Actualiza los registros viejos de asistencia para que tengan el dato del alumno guardado correctamente (necesario para el acceso de alumnos).</p>
      <button class="btn-secondary" id="migrarBtn" style="width:100%;">Actualizar registros viejos</button>
      <p id="migracionEstado" style="font-size:12px;color:var(--ink-soft);margin-top:8px;"></p>
    </div>

    <p class="section-label" style="margin-top:20px;">Modo de prueba</p>
    <div class="module-list">
      ${moduleRow('users','Ver como docente','Elegí un profesor y mirá la app como la ve', 'pruebaDocente')}
      ${moduleRow('users','Ver como alumno','Elegí un alumno y mirá la app como la ve', 'pruebaAlumno')}
      ${moduleRow('users','Ver como solo lectura','Directivos y otras cuentas de consulta', 'pruebaLectura')}
    </div>
    <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 2px 0;">Se ven los datos reales de esa persona, pero no se guarda nada de lo que toques.</p>

    <p class="section-label" style="margin-top:20px;">Respaldos</p>
    <button class="btn-secondary" id="irRespaldoBtn" style="width:100%;">Respaldo completo (Excel)</button>
    <div style="display:flex;gap:8px;margin-top:10px;">
      <button class="btn-secondary" id="irRespaldoSancionesBtn" style="flex:1;">Sanciones</button>
      <button class="btn-secondary" id="irRespaldoCertificadosBtn" style="flex:1;">Certificados</button>
      <button class="btn-secondary" id="irRespaldoTramitesBtn" style="flex:1;">Trámites</button>
    </div>
    ` : ''}

    <p class="section-label" style="margin-top:20px;">Acerca de</p>
    <div class="config-card">
      <p class="v">Instituto Superior Porteño</p>
      <p style="font-size:12px;color:var(--ink-soft);margin-top:4px;">App de preceptoría</p>
    </div>
  `;
  document.getElementById('cambiarUsuarioBtn').addEventListener('click', () => {
    localStorage.removeItem('isp_usuario');
    currentRoute = 'quien';
    render();
  });
  document.getElementById('cerrarSesionBtn').addEventListener('click', cerrarSesionAdmin);
  attachPillBtns('tema', (v) => { setTema(v); render(); });
  attachModuleHandlers();
  if(document.getElementById('guardarConfigBtn')){
    document.getElementById('guardarConfigBtn').addEventListener('click', guardarConfigGeneral);
  }
  if(document.getElementById('migrarBtn')){
    document.getElementById('migrarBtn').addEventListener('click', migrarStudentIdEnAsistencia);
  }
  if(document.getElementById('irAlumnosBtn')){
    document.getElementById('irAlumnosBtn').addEventListener('click', () => navigate('alumnos'));
  }
  if(document.getElementById('irProfesoresCfgBtn')){
    document.getElementById('irProfesoresCfgBtn').addEventListener('click', () => navigate('profesores'));
  }
  if(document.getElementById('irViewersBtn')){
    document.getElementById('irViewersBtn').addEventListener('click', () => navigate('lectura'));
  }
  if(document.getElementById('irHorarioEditarBtn')){
    document.getElementById('irHorarioEditarBtn').addEventListener('click', () => navigate('horarioEditar'));
  }
  if(document.getElementById('irEntradasEspecialesBtn')){
    document.getElementById('irEntradasEspecialesBtn').addEventListener('click', () => navigate('entradasEspeciales'));
  }
  if(document.getElementById('irSincronizacionBtn')){
    document.getElementById('irSincronizacionBtn').addEventListener('click', () => navigate('sincronizacion'));
  }
  if(document.getElementById('irAuditoriaBtn')){
    document.getElementById('irAuditoriaBtn').addEventListener('click', () => navigate('auditoria'));
  }
  if(document.getElementById('irAvanzadaBtn')){
    document.getElementById('irAvanzadaBtn').addEventListener('click', () => navigate('configAvanzada'));
  }
  if(document.getElementById('irRespaldoBtn')){
    document.getElementById('irRespaldoBtn').addEventListener('click', descargarRespaldoCompleto);
  }
  if(document.getElementById('irRespaldoSancionesBtn')){
    document.getElementById('irRespaldoSancionesBtn').addEventListener('click', descargarSancionesExcel);
  }
  if(document.getElementById('irRespaldoCertificadosBtn')){
    document.getElementById('irRespaldoCertificadosBtn').addEventListener('click', descargarCertificadosExcel);
  }
  if(document.getElementById('irRespaldoTramitesBtn')){
    document.getElementById('irRespaldoTramitesBtn').addEventListener('click', descargarTramitesExcel);
  }
  if(document.getElementById('notasImportInput')){
    document.getElementById('notasImportInput').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try{ importarNotasMasivo(JSON.parse(reader.result)); }
        catch(err){ customAlert('No pude leer ese archivo.'); }
      };
      reader.readAsText(file);
    });
  }
}

function getUsuario(){ return localStorage.getItem('isp_usuario') || ''; }
// Se pone en true recién cuando onAuthStateChanged determinó con qué rol entrar
// (admin/profesor/lectura/alumno). Antes de eso, render() no dibuja nada para
// evitar que se vea por un instante la pantalla equivocada (por ej. la del
// administrador) mientras Firestore todavía está confirmando el rol real.
let authResolved = false;
let userRole = null; // 'admin' | 'teacher' | 'viewer' | 'student'
let currentTeacher = null; // datos del profesor logueado
let currentViewer = null; // datos de la cuenta de solo lectura logueada
let currentStudentAuth = null; // datos de la cuenta de alumno logueada (uid, studentId, nombre, curso, email)

function slugify(s){ return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-'); }

function renderProfesorLogin(){
  $app.innerHTML = `
    <div style="padding-top:44px;text-align:center;">
      <img src="icon-192.png" alt="ISP" style="width:60px;height:60px;object-fit:contain;margin:0 auto 14px;display:block;">
      <h1 style="font-size:17px;margin:0 0 20px;">Instituto Superior Porteño</h1>
      <div style="max-width:280px;margin:0 auto;border:1px solid var(--border);border-radius:14px;padding:26px 22px;background:var(--card);box-shadow:0 1px 2px rgba(31,42,58,0.05), 0 8px 20px rgba(31,42,58,0.06);text-align:left;">
        <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 16px;text-align:center;">Ingresá con tu mail y contraseña</p>
        <label style="font-size:12.5px;color:var(--ink-soft);display:block;margin-bottom:4px;">Mail</label>
        <input id="profEmail" type="email" style="width:100%;margin-bottom:12px;" autocomplete="username">
        <label style="font-size:12.5px;color:var(--ink-soft);display:block;margin-bottom:4px;">Contraseña</label>
        <input id="profPass" type="password" style="width:100%;margin-bottom:6px;" autocomplete="current-password">
        <p id="profError" style="font-size:12px;color:var(--stamp);min-height:16px;margin:0 0 10px;"></p>
        <button class="btn-primary" id="profLoginBtn" style="width:100%;">Ingresar</button>
      </div>
    </div>
  `;
  document.getElementById('profLoginBtn').addEventListener('click', () => {
    const email = document.getElementById('profEmail').value.trim();
    const pass = document.getElementById('profPass').value;
    const errEl = document.getElementById('profError');
    errEl.textContent = '';
    const btn = document.getElementById('profLoginBtn');
    btn.disabled = true;
    btn.textContent = 'Ingresando…';
    const loading = document.getElementById('loadingScreen');
    if(loading) loading.classList.remove('hidden');
    signInWithEmailAndPassword(auth, email, pass).catch(err => {
      errEl.textContent = 'Mail o contraseña incorrectos.';
      console.error(err);
      btn.disabled = false;
      btn.textContent = 'Ingresar';
      if(loading) loading.classList.add('hidden');
    });
  });
}

function renderQuien(){
  $app.innerHTML = `
    <div style="padding-top:60px;text-align:center;">
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 20px;">¿Quién sos?</p>
      <div style="display:flex;flex-direction:column;gap:12px;max-width:220px;margin:0 auto;">
        <button class="btn-primary" data-user="Napo">Napo</button>
        <button class="btn-primary" data-user="Vicky" style="background:var(--stamp);">Vicky</button>
      </div>
    </div>
  `;
  document.querySelectorAll('[data-user]').forEach(b => {
    b.addEventListener('click', () => {
      localStorage.setItem('isp_usuario', b.dataset.user);
      navigate('home');
    });
  });
}

// ---------- Agenda (fechas importantes por curso y materia) ----------
let selectedEventoId = null;

function cursosAgendaDisponibles(){
  return userRole === 'teacher' ? (currentTeacher.cursos||[]) : CURSOS;
}

const MESES_CORTOS = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];

// Tarjeta compartida entre la agenda del preceptor/profesor y la del alumno.
function filaAgenda(e, clickeable){
  const d = new Date(e.fecha+'T12:00:00');
  const dias = diasHasta(e.fecha);
  const urgente = dias <= 1;
  return `<div class="agenda-item" ${clickeable ? `data-evento="${e.id}"` : ''}>
    <div class="agenda-date ${e.tipo}"><p class="dom">${d.getDate()}</p><p class="mon">${MESES_CORTOS[d.getMonth()]}</p></div>
    <div class="txt" style="flex:1;min-width:0;">
      <p class="title">${e.titulo}</p>
      <p class="agenda-materia">${e.materia || 'Todas las materias'}${e.detalle ? ' · '+e.detalle : ''}</p>
    </div>
    <span class="badge-dias ${urgente?'urgente':''}">${fmtDiasHasta(dias)}</span>
  </div>`;
}

function renderAgenda(){
  const cursos = cursosAgendaDisponibles();
  if(!cursos.includes(selectedCurso)) selectedCurso = cursos[0];
  const todos = eventosDeCurso(selectedCurso);
  const proximos = todos.filter(e => diasHasta(e.fecha) >= 0);
  const pasados = todos.filter(e => diasHasta(e.fecha) < 0).reverse();

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Agenda</h1>
    </div>
    <div class="course-picker">${cursoBtns(cursos)}</div>
    <button class="btn-primary" id="nuevoEventoBtn" style="width:100%;margin:4px 0 16px;">+ Nuevo evento</button>
    <p class="section-label">Próximos</p>
    ${proximos.length ? proximos.map(e=>filaAgenda(e,true)).join('') : `<p class="empty-inline">No hay eventos próximos para este curso.</p>`}
    ${pasados.length ? `<p class="section-label" style="margin-top:18px;">Pasados</p>${pasados.map(e=>filaAgenda(e,true)).join('')}` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.getElementById('nuevoEventoBtn').addEventListener('click', () => navigate('agendaNuevo'));
  document.querySelectorAll('[data-evento]').forEach(el => {
    el.addEventListener('click', () => { selectedEventoId = el.dataset.evento; navigate('agendaDetalle'); });
  });
}

function renderAgendaNuevo(){
  const cursos = cursosAgendaDisponibles();
  if(!cursos.includes(selectedCurso)) selectedCurso = cursos[0];
  const materiasOpciones = userRole === 'teacher' ? (currentTeacher.materias||[]) : materiasDeCurso(selectedCurso);

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Nuevo evento</h1>
    </div>
    <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 6px;">Curso</p>
    <div class="course-picker" style="margin-bottom:14px;">${cursoBtns(cursos)}</div>
    <div class="field-row"><label>Tipo</label>
      <select id="eventoTipo">${Object.entries(EVENTO_TIPOS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select>
    </div>
    <div class="field-row"><label>Materia</label>
      <select id="eventoMateria">
        <option value="">Todas las materias</option>
        ${materiasOpciones.map(m => `<option value="${m}">${m}</option>`).join('')}
      </select>
    </div>
    <div class="field-row" id="eventoTituloRow" style="display:none;"><label>Título</label><input id="eventoTitulo" type="text" placeholder="Ej: Excursión al museo"></div>
    <div class="field-row"><label>Fecha</label><input id="eventoFecha" type="date" value="${todayISO()}"></div>
    <div class="field-row"><label>Detalle (opcional)</label><textarea id="eventoDetalle" rows="3" placeholder="Info adicional para los alumnos"></textarea></div>
    <p id="eventoError" style="font-size:12px;color:var(--stamp);min-height:16px;margin:0 0 8px;"></p>
    <button class="btn-primary" id="crearEventoBtn" style="width:100%;">Crear evento</button>
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('agenda'));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.getElementById('eventoTipo').addEventListener('change', (e) => {
    document.getElementById('eventoTituloRow').style.display = e.target.value === 'otro' ? 'flex' : 'none';
  });
  document.getElementById('crearEventoBtn').addEventListener('click', crearEvento);
}

async function crearEvento(){
  const tipo = document.getElementById('eventoTipo').value;
  const materia = document.getElementById('eventoMateria').value;
  const fecha = document.getElementById('eventoFecha').value;
  const detalle = document.getElementById('eventoDetalle').value.trim();
  const errEl = document.getElementById('eventoError');
  errEl.textContent = '';
  let titulo;
  if(tipo === 'otro'){
    titulo = document.getElementById('eventoTitulo').value.trim();
    if(!titulo){ errEl.textContent = 'Escribí un título para el evento.'; return; }
  } else {
    titulo = tituloAutomatico(tipo, materia);
  }
  if(!fecha){ errEl.textContent = 'Elegí una fecha.'; return; }
  const payload = {
    curso: selectedCurso, materia, titulo, tipo, fecha, detalle,
    autor: userRole==='teacher' ? currentTeacher.nombre : getUsuario(),
    autorUid: userRole==='teacher' ? currentTeacher.uid : 'admin',
    createdAt: Date.now()
  };
  try{
    await addDoc(collection(db,'eventos'), payload);
    showToast('Evento agregado a la agenda');
    navigate('agenda');
  }catch(err){ showSaveError(err); }
}

function renderAgendaDetalle(){
  const e = getEventos()[selectedEventoId];
  if(!e){ navigate('agenda'); return; }
  const puedeBorrar = userRole === 'admin' || (userRole === 'teacher' && e.autorUid === currentTeacher.uid);

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${e.titulo}</h1>
    </div>
    <div class="config-card">
      <p class="k">Curso</p><p class="v">${e.curso}° A</p>
      <p class="k">Materia</p><p class="v">${e.materia || 'Todas las materias'}</p>
      <p class="k">Tipo</p><p class="v">${EVENTO_TIPOS[e.tipo] || 'Otro'}</p>
      <p class="k">Fecha</p><p class="v">${fmtDateLong(e.fecha)} · ${fmtDiasHasta(diasHasta(e.fecha))}</p>
      ${e.detalle ? `<p class="k">Detalle</p><p class="v">${e.detalle}</p>` : ''}
      <p class="k">Cargado por</p><p class="v">${e.autor||'—'}</p>
    </div>
    ${puedeBorrar ? `<button class="btn-secondary" id="borrarEventoBtn" style="width:100%;margin-top:16px;color:var(--stamp);">Borrar evento</button>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('agenda'));
  if(puedeBorrar){
    document.getElementById('borrarEventoBtn').addEventListener('click', async () => {
      if(!(await customConfirm('¿Borrar este evento de la agenda? No se puede deshacer.', {peligro:true, textoSi:'Borrar'}))) return;
      deleteDoc(doc(db,'eventos',e.id)).then(() => { showToast('Evento borrado'); navigate('agenda'); }).catch(err=>showSaveError(err));
    });
  }
}

// ---------- Agenda del alumno + avisos (sin backend de push: se muestran al abrir la app) ----------
function agendaAvisosKey(){ return 'isp_agenda_avisos_'+(currentStudentAuth ? currentStudentAuth.studentId : ''); }
function agendaAvisosPendientes(){
  if(userRole !== 'student') return [];
  const vistos = DB.get(agendaAvisosKey(), {});
  const eventos = eventosDeCurso(currentStudentAuth.curso);
  const avisos = [];
  eventos.forEach(e => {
    const v = vistos[e.id] || {};
    const dias = diasHasta(e.fecha);
    if(!v.nuevo && (Date.now() - (e.createdAt||0)) < 5*86400000 && dias >= 0){
      avisos.push({ id: e.id, stage: 'nuevo', texto: `Nuevo evento: "${e.titulo}" — ${fmtDateShort(e.fecha)}` });
    } else if(!v.sem && dias <= 7 && dias > 1){
      avisos.push({ id: e.id, stage: 'sem', texto: `En una semana: "${e.titulo}" — ${fmtDateShort(e.fecha)}` });
    } else if(!v.dia && dias <= 1 && dias >= 0){
      avisos.push({ id: e.id, stage: 'dia', texto: `${dias===0?'Hoy':'Mañana'}: "${e.titulo}" — ${fmtDateShort(e.fecha)}` });
    }
  });
  return avisos;
}
function marcarAvisosVistos(avisos){
  if(!avisos.length) return;
  const vistos = DB.get(agendaAvisosKey(), {});
  avisos.forEach(a => { vistos[a.id] = Object.assign({}, vistos[a.id], { [a.stage]: true }); });
  DB.set(agendaAvisosKey(), vistos);
}
function avisosBannerHtml(avisos){
  if(!avisos.length) return '';
  return avisos.map(a => `<div class="aviso-banner ${a.stage==='nuevo'?'nuevo':''}">${icon(a.stage==='nuevo'?'calendar':'alert')}<span>${a.texto}</span></div>`).join('');
}

function renderStudentAgenda(){
  const eventos = eventosDeCurso(currentStudentAuth.curso).filter(e => diasHasta(e.fecha) >= 0);
  const pasados = eventosDeCurso(currentStudentAuth.curso).filter(e => diasHasta(e.fecha) < 0).reverse();

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Mi agenda</h1>
    </div>
    <p class="section-label">Próximos</p>
    ${eventos.length ? eventos.map(e=>filaAgenda(e,false)).join('') : `<p class="empty-inline">No hay eventos próximos cargados para tu curso.</p>`}
    ${pasados.length ? `<p class="section-label" style="margin-top:18px;">Pasados</p>${pasados.map(e=>filaAgenda(e,false)).join('')}` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('studentHome'));
}

// ---------- Init ----------
updateOnlineBanner();
// Resguardo: si por algún motivo tarda de más en cargar, sacamos la pantalla de carga igual.
setTimeout(() => {
  const loading = document.getElementById('loadingScreen');
  if(loading) loading.classList.add('hidden');
}, 4000);

const ADMIN_EMAIL = 'preceptores.isp@gmail.com';

onAuthStateChanged(auth, async (user) => {
  if(user && !user.isAnonymous && user.email === ADMIN_EMAIL){
    userRole = 'admin';
    currentTeacher = null;
    startListeners();
    currentRoute = getUsuario() ? 'home' : 'quien';
    authResolved = true;
    initMessagingForegroundHandler();
    if('Notification' in window && Notification.permission === 'granted') activarNotificaciones(false);
    render();
  } else if(user && !user.isAnonymous){
    startListeners();
    try{
      const tdoc = await getDoc(doc(db,'teachers',user.uid));
      if(tdoc.exists() && tdoc.data().activo !== false){
        userRole = 'teacher';
        currentTeacher = Object.assign({ uid: user.uid }, tdoc.data());
        currentRoute = 'teacherHome';
        initMessagingForegroundHandler();
        if('Notification' in window && Notification.permission === 'granted') activarNotificaciones(false);
      } else {
        const vdoc = await getDoc(doc(db,'viewers',user.uid));
        if(vdoc.exists() && vdoc.data().activo !== false){
          userRole = 'viewer';
          currentViewer = Object.assign({ uid: user.uid }, vdoc.data());
          currentRoute = 'viewerHome';
        } else {
          const adoc = await getDoc(doc(db,'students_auth',user.uid));
          if(adoc.exists() && adoc.data().activo !== false){
            userRole = 'student';
            currentStudentAuth = Object.assign({ uid: user.uid }, adoc.data());
            currentRoute = 'studentHome';
            initMessagingForegroundHandler();
            if('Notification' in window && Notification.permission === 'granted') activarNotificaciones(false);
          } else {
            userRole = null;
            currentTeacher = null;
            currentRoute = 'profesorSinAcceso';
          }
        }
      }
    }catch(e){
      userRole = null;
      currentTeacher = null;
      currentRoute = 'profesorSinAcceso';
    }
    authResolved = true;
    render();
  } else {
    userRole = null;
    currentTeacher = null;
    authResolved = true;
    currentRoute = 'profesorLogin';
    render();
  }
});

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then(reg => {
      reg.update();
    }).catch(()=>{});
  });
}
