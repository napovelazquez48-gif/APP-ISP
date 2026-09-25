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
  initializeFirestore, persistentLocalCache, persistentSingleTabManager,
  collection, doc, setDoc, deleteDoc, addDoc, onSnapshot, getDoc, writeBatch
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, updatePassword, signOut, setPersistence, browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJXbMkHj9BHtXI2IqHf6YkMx_2YipMXbc",
  authDomain: "app-isp-f601c.firebaseapp.com",
  projectId: "app-isp-f601c",
  storageBucket: "app-isp-f601c.firebasestorage.app",
  messagingSenderId: "1052109436240",
  appId: "1:1052109436240:web:f5e6a49100db6fb85d6855"
};

// ---------- Google Drive / Sheets (sincronización de faltas a los Excel del colegio) ----------
const GOOGLE_CLIENT_ID = "847063469157-7o02cri2bhusekpo2qicqtini48u0vbr.apps.googleusercontent.com";
const GOOGLE_SCOPES = "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets";
const DRIVE_ROOT_FOLDER_ID = "1RdXfK8BOS_Tj4RTT-DCcCGMwHSsqBZGt";

let gapiListo = false;
let gisListo = false;
let googleTokenClient = null;
let driveConectado = false;

const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
setPersistence(auth, browserLocalPersistence).catch(err=>console.error(err));
// App secundaria: se usa SOLO para crear cuentas de profesor sin cerrar la sesión del admin
// (createUserWithEmailAndPassword inicia sesión automáticamente en la app en la que se llama).
const fbAppSecundaria = initializeApp(firebaseConfig, 'secundaria');
const authSecundaria = getAuth(fbAppSecundaria);
setPersistence(authSecundaria, browserLocalPersistence).catch(err=>console.error(err));
let db;
try{
  db = initializeFirestore(fbApp, { localCache: persistentLocalCache({ tabManager: persistentSingleTabManager() }) });
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

// ---------- In-memory cache (mirrors Firestore in real time) ----------
let cache = {
  attendance: {},
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
  entradasEspeciales: {},
  config: { entrada:'07:45', toleranciaMin:15, corteFaltaCompleta:'09:00' }
};

function startListeners(){
  onSnapshot(collection(db,'attendance'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.attendance = next;
    render();
  });

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
    render();
  });

  onSnapshot(collection(db,'ef'), snap => {
    const next = {};
    snap.forEach(d => {
      const data = d.data();
      next[`${data.date}|${data.studentId}`] = { tipo: data.tipo || 'falta' };
    });
    cache.ef = next;
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
    render();
  });

  onSnapshot(collection(db,'autorizaciones'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.autorizaciones = next;
    render();
  });

  onSnapshot(collection(db,'teachers'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ uid: d.id }, d.data()); });
    cache.teachers = next;
    render();
  });

  onSnapshot(collection(db,'valoraciones'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.valoraciones = next;
    render();
  });

  onSnapshot(collection(db,'notas'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.notas = next;
    render();
  });

  onSnapshot(collection(db,'entradasEspeciales'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.entradasEspeciales = next;
    render();
  });

  onSnapshot(collection(db,'viewers'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ uid: d.id }, d.data()); });
    cache.viewers = next;
    render();
  });

  onSnapshot(collection(db,'driveMapping'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.driveMapping = next;
    render();
  });

  onSnapshot(collection(db,'tramites'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ id: d.id }, d.data()); });
    cache.tramites = next;
    render();
  });

  onSnapshot(collection(db,'entregas'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.entregas = next;
    render();
  });

  onSnapshot(collection(db,'diasSinClase'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = d.data(); });
    cache.diasSinClase = next;
    render();
  });

  onSnapshot(collection(db,'students_auth'), snap => {
    const next = {};
    snap.forEach(d => { next[d.id] = Object.assign({ uid: d.id }, d.data()); });
    cache.students_auth = next;
    render();
  });

  const configRef = doc(db,'config','general');
  onSnapshot(configRef, d => {
    if(d.exists()){
      cache.config = d.data();
      aplicarConfigDinamica(cache.config);
    }
    render();
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

function getStudents(){ return SEED_STUDENTS; }
function getConfig(){ return cache.config; }
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
  const entries = (SEED_SCHEDULE[curso] && SEED_SCHEDULE[curso][diaKey]) || [];
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
    const isParcial = rec && rec.hora && (rec.estado==='T' || (rec.estado==='A' && rec.llegoTarde && !rec.exencion));

    subjects.forEach(subj => {
      if(!stats[subj]) stats[subj] = { faltas:0, total:0 };
      stats[subj].total++;
      if(isFullAbsence){
        stats[subj].faltas++;
      } else if(isParcial){
        const entries = SEED_SCHEDULE[curso][diaKey].filter(e => e.subject === subj);
        const perdida = entries.some(e => {
          const startTime = HOUR_TIME[e.hour];
          return startTime && minutesOf(startTime) < minutesOf(rec.hora);
        });
        if(perdida) stats[subj].faltas++;
      }
    });

    // Educación Física: martes y jueves, fuera de la grilla horaria común a todos los cursos
    if(diaKey === 'martes' || diaKey === 'jueves'){
      if(!stats['ED FIS']) stats['ED FIS'] = { faltas:0, total:0 };
      stats['ED FIS'].total++;
      if(isFullAbsence){
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
    .catch(err=>console.error(err));
}
async function borrarEntradaEspecial(fecha, curso){
  if(!(await customConfirm('¿Sacar la entrada especial de este curso para este día?'))) return;
  deleteDoc(doc(db,'entradasEspeciales', docId(`${fecha}_${curso}`))).catch(err=>console.error(err));
}

function getDiaSinClase(fecha, curso){
  return cache.diasSinClase[docId(`${fecha}_${curso}`)] || null;
}
async function definirDiaSinClase(fecha, curso){
  const actual = getDiaSinClase(fecha, curso);
  const motivo = await customPrompt(`Marcar ${curso}° A el ${fecha} como día sin clase (ej: VCF, paro).\n\nMotivo:`, actual ? actual.motivo : 'VCF');
  if(motivo === null || !motivo.trim()) return;
  setDoc(doc(db,'diasSinClase', docId(`${fecha}_${curso}`)), { fecha, curso, motivo: motivo.trim(), autor: getUsuario() })
    .catch(err=>console.error(err));
}
async function borrarDiaSinClase(fecha, curso){
  if(!(await customConfirm('¿Sacar la marca de "día sin clase" de este curso para este día?'))) return;
  deleteDoc(doc(db,'diasSinClase', docId(`${fecha}_${curso}`))).catch(err=>console.error(err));
}

function estadoParaHora(hora, cfg, studentId, curso, fecha){
  const especial = (curso && fecha) ? getEntradaEspecial(fecha, curso) : null;
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
  setDoc(doc(db,'attendance',docId(key)), Object.assign({ autor: getUsuario(), studentId: studentIdK, fecha: fechaK }, data)).catch(err=>console.error(err));
}

function markPresente(studentId, fecha, curso){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const rec = cache.attendance[key];
  if(rec && (rec.estado==='P' || rec.estado==='T' || rec.estado==='TJ')){
    deleteDoc(doc(db,'attendance',docId(key))).catch(err=>console.error(err));
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
  if(rec && rec.estado==='A'){
    deleteDoc(doc(db,'attendance',docId(key))).catch(err=>console.error(err));
    return;
  }
  ultimaAccionPulso = { studentId };
  writeAttendance(key, { estado: 'A', hora: null });
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
  const nueva = await customPrompt('Hora de llegada (HH:MM):', current);
  if(!nueva) return;
  if(!/^\d{2}:\d{2}$/.test(nueva)){ await customAlert('Formato inválido. Usá HH:MM.'); return; }
  writeAttendance(key, estadoParaHora(nueva, cfg, studentId, curso, fecha));
}

async function toggleEF(studentId, fecha){
  fecha = fecha || selectedFecha;
  const key = `${fecha}|${studentId}`;
  const current = cache.ef[key] ? cache.ef[key].tipo : null;
  const ref = doc(db,'ef', docId(`${fecha}_${studentId}`));
  if(current === null){
    setDoc(ref, { date: fecha, studentId, tipo: 'falta', autor: getUsuario() }).catch(err=>console.error(err));
  } else if(current === 'falta'){
    const b = bimestreDe(fecha) || bimestreActual();
    const used = countSAFenBimestre(studentId, b);
    if(used >= 1 && !(await customConfirm('Esta alumna ya usó su SAF de este bimestre. ¿Marcar igual?'))){
      deleteDoc(ref).catch(()=>{});
      return;
    }
    setDoc(ref, { date: fecha, studentId, tipo: 'saf', autor: getUsuario() }).catch(err=>console.error(err));
  } else {
    deleteDoc(ref).catch(err=>console.error(err));
  }
}

async function gestionarAutorizacion(studentId){
  const auth = getAutorizaciones()[studentId];
  if(auth && auth.activa){
    if(await customConfirm(`Autorización activa: hasta ${auth.horaTope} (${auth.motivo}).\n\n¿Cerrarla?`)){
      setDoc(doc(db,'autorizaciones',studentId), Object.assign({}, auth, { activa:false }));
    }
    return;
  }
  const motivo = await customPrompt('Motivo de la autorización (ej: Médico, Deportivo):', '');
  if(motivo === null || !motivo.trim()) return;
  const horaTope = await customPrompt('Entra sin tardanza hasta (HH:MM):', '09:00');
  if(!horaTope || !/^\d{2}:\d{2}$/.test(horaTope)){ await customAlert('Formato inválido.'); return; }
  setDoc(doc(db,'autorizaciones',studentId), { motivo: motivo.trim(), horaTope, activa:true, desde: todayISO(), autor: getUsuario() });
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
    deleteDoc(ref).catch(err=>console.error(err));
    return;
  }
  const suplente = await customPrompt(`${teacherName} — marcar ausente.\n\nNombre del suplente (dejar vacío si no hay):`, '');
  if(suplente === null) return;
  setDoc(ref, { subKey, teacher: teacherName, suplente: suplente.trim(), autor: getUsuario() }).catch(err=>console.error(err));

  // Si es la primera hora del día y no hay suplente, ofrece entrada especial para ese curso
  const [fecha, curso, , startHourStr] = subKey.split('|');
  if(Number(startHourStr) === 1 && !suplente.trim()){
    const horaTope = await customPrompt(`Como falta el/la profesor/a de la primera hora, ¿los alumnos de ${curso}° A pueden entrar más tarde hoy? Hasta qué hora (HH:MM), o dejar vacío si no corresponde:`, '');
    if(horaTope && /^\d{2}:\d{2}$/.test(horaTope)){
      setDoc(doc(db,'entradasEspeciales', docId(`${fecha}_${curso}`)), { fecha, curso, horaTope, motivo: `Ausencia de ${teacherName}`, autor: getUsuario() })
        .catch(err=>console.error(err));
    }
  }
}

function renderHorarios(){
  const dayEntries = (SEED_SCHEDULE[selectedCurso] && SEED_SCHEDULE[selectedCurso][selectedDia]) || [];
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
  const conteo = {};
  Object.values(cache.substitutions).forEach(porProfesor => {
    Object.keys(porProfesor).forEach(nombre => {
      conteo[nombre] = (conteo[nombre]||0) + 1;
    });
  });
  const lista = Object.entries(conteo).sort((a,b)=> b[1]-a[1]);
  const rows = lista.map(([nombre, veces]) => `
    <div class="sancion-item">
      <p class="folio">${nombre}</p>
      <p class="motivo">${veces} ${veces===1?'ausencia registrada':'ausencias registradas'}</p>
    </div>
  `).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Ausentismo docente</h1>
    </div>
    <p class="info-note" style="margin-top:0;">${icon('info')}Cuenta las veces que marcaste a cada profesor/a como ausente en "Horarios y suplencias", desde que empezaste a usar la app.</p>
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
  const dayEntries = (SEED_SCHEDULE[curso] && SEED_SCHEDULE[curso][window.__studentDia]) || [];
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
    run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="14.5" cy="5" r="1.8"/><path d="M9 21l2-5 3 1 3 5M6 14l3-3 2-4 4 2 3-1M9 12L7 9"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  };
  return icons[name] || '';
}

let navHistory = [];

function navigate(route, params){
  // Al entrar a asistencia diaria desde otro lado, siempre arranca en el día real de hoy
  // (evita quedarse pegado en una fecha vieja si la app quedó abierta de un día para el otro)
  if(route === 'asistencia' && currentRoute !== 'asistencia'){
    selectedFecha = todayISO();
  }
  if(currentRoute && currentRoute !== route) navHistory.push(currentRoute);
  currentRoute = route;
  if(params && params.curso) selectedCurso = params.curso;
  render();
  window.scrollTo(0,0);
}

function goBack(fallback){
  const prev = navHistory.pop();
  currentRoute = prev || fallback || 'home';
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

function customPrompt(msg, valorInicial){
  return new Promise(resolve => {
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('modalExtra').innerHTML = `<input type="text" id="modalInput" value="${valorInicial||''}" style="margin-bottom:14px;">`;
    document.getElementById('modalBtns').innerHTML = `
      <button class="btn-secondary" id="modalCancelBtn">Cancelar</button>
      <button class="btn-primary" id="modalOkBtn">Aceptar</button>
    `;
    const input = document.getElementById('modalInput');
    function cerrar(resultado){
      overlay.classList.remove('show');
      document.getElementById('modalOkBtn').removeEventListener('click', onOk);
      document.getElementById('modalCancelBtn').removeEventListener('click', onCancel);
      input.removeEventListener('keydown', onKey);
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

function showToast(msg){
  const t = document.getElementById('toast');
  t.innerHTML = `${icon('check')}<span>${msg}</span>`;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 1800);
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

    <div class="module-list">
      ${moduleRow('clipboard','Asistencia diaria','Presente, ausente, tardanza', 'asistencia')}
      ${moduleRow('alert','Sanciones e incidentes','Registro por alumno', 'sanciones')}
      ${moduleRow('file','Justificativos médicos','Certificados y fechas', 'justificativos')}
      ${moduleRow('file','Entregas y trámites','Autorizaciones, plata, fichas médicas, aptos...', 'tramites')}
      ${moduleRow('calendar','Horarios y suplencias','Grilla por curso y división', 'horarios')}
      ${moduleRow('calendar','Calendario del ciclo','Bimestres y feriados', 'calendarioCiclo')}
      ${moduleRow('users','Familias','Contacto de padres y tutores', 'familias')}
      ${moduleRow('chart','Resumen del alumno','Faltas, apercibimientos y certificados', 'resumen')}
      ${moduleRow('chart','Vista por curso','Alertas y riesgo de SCP de un vistazo', 'vistaCurso')}
      ${moduleRow('chart','Vista general del colegio','Los 5 cursos comparados', 'vistaGeneral')}
      ${moduleRow('file','Valoraciones pedagógicas','Bimestral, por materia', 'valoraciones')}
      ${moduleRow('chart','Notas','Cuatrimestral, escala 1 a 10', 'notas')}
    </div>

    ${getUsuario()==='Napo' ? `
    <p class="section-label" style="margin-top:22px;">Administración</p>
    <div class="module-list">
      ${moduleRow('users','Profesores','Altas y bajas de cuentas de profesor', 'profesores')}
      ${moduleRow('users','Cuentas de alumnos','Faltas, notas y contacto de profesores', 'alumnosCuentas')}
      ${moduleRow('users','Acceso de lectura','Rectoría, psicopedagogía, secretaría', 'lectura')}
      ${moduleRow('calendar','Conexión con Drive','Emparejar y sincronizar faltas con Excel', 'conexionDrive')}
    </div>
    <p style="text-align:center;margin-top:18px;">
      <a href="#" id="cambiarUsuarioLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Cambiar usuario</a>
      &nbsp;·&nbsp;
      <a href="#" id="importarLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Importar histórico</a>
    </p>
    ` : `
    <p style="text-align:center;margin-top:18px;">
      <a href="#" id="cambiarUsuarioLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Cambiar usuario</a>
    </p>
    `}
  `;
  attachModuleHandlers();
  document.getElementById('cardAsistenciaHoy').addEventListener('click', () => navigate('detalleAsistenciaHoy'));
  document.getElementById('cardAlertas').addEventListener('click', () => navigate('detalleAlertas'));
  if(document.getElementById('cardTramites')){
    document.getElementById('cardTramites').addEventListener('click', () => navigate('tramites'));
  }
  animateCounts();
  if(document.getElementById('importarLink')){
    document.getElementById('importarLink').addEventListener('click', (e) => { e.preventDefault(); navigate('importar'); });
  }
  if(document.getElementById('cambiarUsuarioLink')){
    document.getElementById('cambiarUsuarioLink').addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('isp_usuario');
      currentRoute = 'quien';
      render();
    });
  }
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
    const payload = { estado: ev.estado, hora: ev.hora || null, autor: 'Importación histórica' };
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
function attachModuleHandlers(){
  const rows = document.querySelectorAll('.module-row:not(.disabled)');
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
    if(soloLectura) metaHtml = metaHtml.replace(' data-edit="', ' data-noop="').replace(' data-exent="', ' data-noop2="');

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
          <div style="flex:1">
            <span class="name">${s.apellido}, ${s.nombre}</span>
            ${metaHtml}
          </div>
          <div class="btn-group">
            <button class="state-btn ${estado==='P'||estado==='T'||estado==='TJ'?'on-p':''} ${ultimaAccionPulso && ultimaAccionPulso.studentId===s.id && (estado==='P'||estado==='T'||estado==='TJ') ? 'pulse' : ''}" data-p="${s.id}">P</button>
            <button class="state-btn ${estado==='A'?'on-a':''} ${ultimaAccionPulso && ultimaAccionPulso.studentId===s.id && estado==='A' ? 'pulse' : ''}" data-a="${s.id}">A</button>
            ${efHtml}
            <button class="state-btn hora-btn" data-edit="${s.id}" title="Editar hora de llegada">${icon('clock')}</button>
          </div>
        </div>
      </div>`;
  }).join('');
  ultimaAccionPulso = null;

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Asistencia diaria</h1>
    </div>
    <div class="course-picker">
      ${cursoBtns(soloLectura ? cursosDisponibles() : CURSOS)}
      <input type="date" id="fechaSelect" value="${selectedFecha}" max="${maxFechaSeleccionable()}">
    </div>
    <p class="date-label">${fmtDateLong(selectedFecha)} · entrada ${cfg.entrada}, tolerancia ${cfg.toleranciaMin} min</p>
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
  deleteDoc(doc(db,'sanciones',id)).catch(err=>console.error(err));
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
  addDoc(collection(db,'sanciones'), payload).catch(err=>console.error(err));
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

function fmtDateShort(iso){
  const d = new Date(iso + 'T00:00:00');
  return `${DOW_FULL[d.getDay()].slice(0,3)} ${d.getDate()}/${d.getMonth()+1}`;
}

function renderJustificativosLista(){
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  const rows = students.map(s => `<div class="module-row" data-student="${s.id}">
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
  const att = getAttendance();
  const days = dateRange(from, to);
  let count = 0;
  const rows = days.map(iso => {
    const rec = att[`${iso}|${selectedStudentId}`];
    const isAusente = rec && rec.estado === 'A';
    if(isAusente) count++;
    return `<div class="preview-row">
      <span>${fmtDateShort(iso)}</span>
      <span class="${isAusente?'yes':'no'}">${isAusente ? 'Ausente → Justificada' : 'sin falta cargada'}</span>
    </div>`;
  }).join('');
  box.innerHTML = `
    <p class="preview-title">${count>0 ? `Se van a justificar ${count} falta${count>1?'s':''}` : 'No hay faltas para justificar en ese rango'}</p>
    ${rows}
  `;
}

async function guardarJustificativo(){
  const from = document.getElementById('fechaDesde').value;
  const to = document.getElementById('fechaHasta').value;
  if(!from || !to || from > to){ await customAlert('Elegí un rango de fechas válido.'); return; }

  const days = dateRange(from, to);
  let count = 0;
  days.forEach(iso => {
    const key = `${iso}|${selectedStudentId}`;
    const rec = cache.attendance[key];
    if(rec && rec.estado === 'A'){
      writeAttendance(key, Object.assign({}, rec, { estado: 'J' }));
      count++;
    }
  });

  addDoc(collection(db,'certificados'), { studentId: selectedStudentId, from, to, createdAt: Date.now(), autor: getUsuario() })
    .then(ref => {
      if(pendingFileDataUrl){
        certImagesLocal[ref.id] = pendingFileDataUrl;
        DB.set('isp_cert_images', certImagesLocal);
      }
    })
    .catch(err=>console.error(err));

  showToast(count>0 ? `Justificativo guardado — ${count} falta${count>1?'s':''} justificada${count>1?'s':''}` : 'Justificativo guardado');
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
document.addEventListener('input', (e) => {
  if(e.target && e.target.id && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')){
    lastFocusedInput = { id: e.target.id, start: e.target.selectionStart, end: e.target.selectionEnd };
  }
});

function render(){
  renderInner();
  if($app){
    $app.classList.remove('fade-in');
    void $app.offsetWidth; // reinicia la animación en cada pantalla
    $app.classList.add('fade-in');
  }
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
  const RUTAS_SOLO_NAPO = ['profesores','profesorNuevo','profesorEditar','lectura','conexionDrive','importar','alumnosCuentas'];
  if(userRole==='admin' && getUsuario()!=='Napo' && RUTAS_SOLO_NAPO.includes(currentRoute)){
    currentRoute = 'home';
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
  else if(currentRoute === 'boletinAlumno') renderBoletinAlumno();
  else if(currentRoute === 'boletinCurso') renderBoletinCurso();
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
  else if(currentRoute === 'conexionDrive') renderConexionDrive();
  else if(currentRoute === 'valoraciones') renderValoracionesLista();
  else if(currentRoute === 'valoracionAlumno') renderValoracionAlumno();
  else if(currentRoute === 'notas') renderNotasLista();
  else if(currentRoute === 'config') renderConfig();
  else if(currentRoute === 'configAvanzada') renderConfigAvanzada();
  else if(currentRoute === 'calendarioCiclo') renderCalendarioCiclo();
  else if(currentRoute === 'auditoria') renderAuditoria();
  else if(currentRoute === 'tramites') renderTramites();
  else if(currentRoute === 'tramiteNuevo') renderTramiteNuevo();
  else if(currentRoute === 'tramiteDetalle') renderTramiteDetalle();
  else if(currentRoute === 'tramiteImprimir') renderTramiteImprimir();
  else if(currentRoute === 'vistaGeneral') renderVistaGeneral();
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
  let students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  if(filtro) students = students.filter(s => `${s.apellido} ${s.nombre}`.toLowerCase().includes(filtro));
  const weights = computeAbsenceWeights();
  const rows = students.map(s => {
    const w = weights[s.id] || 0;
    return `<div class="module-row" data-student="${s.id}">
      <div class="txt">
        <p class="title">${s.apellido}, ${s.nombre}</p>
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
    <div class="course-picker">
      ${cursoBtns(cursos)}
    </div>
    <input type="text" id="filtroResumen" placeholder="Buscar por nombre..." style="margin-bottom:12px;" value="${window.__resumenFiltro||''}">
    ${students.length ? `<div class="module-list">${rows}</div>` : `<p class="empty-inline">Nadie coincide con esa búsqueda.</p>`}
    ${userRole==='admin' ? `<button class="btn-secondary" id="boletinesCursoBtn" style="width:100%;margin-top:14px;">${icon('file')} Ver boletines de todo el curso para imprimir</button>` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(homeRoute()));
  attachCursoBtns((c) => { selectedCurso = c; render(); });
  document.getElementById('filtroResumen').addEventListener('input', (e) => { window.__resumenFiltro = e.target.value; render(); });
  document.querySelectorAll('[data-student]').forEach(el => {
    el.addEventListener('click', () => { selectedStudentId = el.dataset.student; navigate('resumenAlumno'); });
  });
  if(document.getElementById('boletinesCursoBtn')){
    document.getElementById('boletinesCursoBtn').addEventListener('click', () => navigate('boletinCurso'));
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
  const isParcial = rec.hora && (rec.estado==='T' || (rec.estado==='A' && rec.llegoTarde));
  let affected = [];
  if(isFullAbsence){
    affected = subjects.slice();
  } else if(isParcial){
    affected = subjects.filter(subj => {
      const entries = SEED_SCHEDULE[curso][diaKey].filter(e=>e.subject===subj);
      return entries.some(e => { const st=HOUR_TIME[e.hour]; return st && minutesOf(st)<minutesOf(rec.hora); });
    });
  }
  if(diaKey==='martes' || diaKey==='jueves'){
    if(isFullAbsence){
      affected.push('ED FIS');
    } else {
      const ef = getEF()[`${iso}|${studentId}`];
      if(ef && ef.tipo==='falta') affected.push('ED FIS');
    }
  }
  return affected;
}

let selectedBimestreBoletin = 0;
let selectedTramiteId = null;

function boletinSheetHTML(studentId, bimN){
  const student = getStudents().find(s => s.id === studentId);
  const bim = bimN === 0
    ? { n:0, from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to }
    : BIMESTRES.find(b => b.n === bimN);
  const att = getAttendance();
  let presentes=0, tardes=0, ausentes=0, justificadas=0;
  Object.entries(att).forEach(([key, rec]) => {
    const [fecha, sid] = key.split('|');
    if(sid !== studentId || fecha < bim.from || fecha > bim.to) return;
    if(rec.exencion) return;
    else if(rec.estado==='P') presentes++;
    else if(rec.estado==='T') tardes++;
    else if(rec.estado==='A') ausentes++;
    else if(rec.estado==='J') justificadas++;
  });
  const weights = computeAbsenceWeights(bim);
  const weight = weights[studentId] || 0;

  const anioCompleto = { from: BIMESTRES[0].from, to: BIMESTRES[BIMESTRES.length-1].to };
  const materias = computeMateriaStats(studentId, anioCompleto);
  const materiaRows = Object.entries(materias).sort((a,b)=>a[0].localeCompare(b[0])).map(([subj, s]) => {
    const pct = s.total>0 ? Math.round((1 - s.faltas/s.total)*1000)/10 : 100;
    return `<tr><td>${subj}</td><td style="text-align:center;">${s.faltas}/${s.total}</td><td style="text-align:center;">${pct}%${pct<UMBRAL_SCP*100?' · SCP':''}</td></tr>`;
  }).join('');

  const notas = Object.values(cache.notas).filter(n => n.studentId === studentId);
  const notaMaterias = [...new Set(notas.map(n=>n.materia))].sort();
  const notaRows = notaMaterias.map(m => {
    const n1 = notas.find(n=>n.materia===m && n.cuatrimestre===1);
    const n2 = notas.find(n=>n.materia===m && n.cuatrimestre===2);
    return `<tr><td>${m}</td><td style="text-align:center;">${n1?n1.nota:'—'}</td><td style="text-align:center;">${n2?n2.nota:'—'}</td></tr>`;
  }).join('');

  const sanciones = (getSanciones()[studentId] || []).slice().reverse();

  return `
    <div class="boletin-sheet">
      <div class="boletin-head">
        <img src="icon-192.png" alt="ISP">
        <div>
          <p class="boletin-title">Instituto Superior Porteño</p>
          <p class="boletin-sub">Boletín · ${bim.n===0?'Ciclo lectivo 2026':bim.n+'° bimestre 2026'}</p>
        </div>
      </div>
      <p class="boletin-alumno">${student.apellido}, ${student.nombre} — ${student.curso}° A</p>

      <p class="boletin-section">Asistencia</p>
      <table class="boletin-table">
        <tr><td>Presentes</td><td>${presentes}</td><td>Tardes</td><td>${tardes}</td></tr>
        <tr><td>Ausentes</td><td>${ausentes}</td><td>Justificadas</td><td>${justificadas}</td></tr>
        <tr><td colspan="3"><b>Faltas ponderadas del período</b></td><td><b>${weight}</b></td></tr>
      </table>

      <p class="boletin-section">Asistencia por materia (ciclo lectivo)</p>
      <table class="boletin-table"><tr><th>Materia</th><th>Faltas</th><th>%</th></tr>${materiaRows || '<tr><td colspan="3">Sin datos</td></tr>'}</table>

      <p class="boletin-section">Notas</p>
      <table class="boletin-table"><tr><th>Materia</th><th>1° cuatri.</th><th>2° cuatri.</th></tr>${notaRows || '<tr><td colspan="3">Sin notas cargadas</td></tr>'}</table>

      <p class="boletin-section">Apercibimientos</p>
      ${sanciones.length ? `<table class="boletin-table">${sanciones.map(h=>`<tr><td>${ordinal(h.folio)}</td><td>${h.fecha}</td><td>${h.motivo}</td></tr>`).join('')}</table>` : '<p style="font-size:12px;">Sin registros.</p>'}

      <p class="boletin-footer">Generado el ${fmtDateLong(todayISO())}</p>
    </div>`;
}

function renderBoletinAlumno(){
  const bimN = selectedBimestreBoletin || 0;
  $app.innerHTML = `
    <div class="appbar no-print" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Boletín</h1>
    </div>
    <div class="course-picker no-print">
      ${pillBtnRow('bimBoletin', [...BIMESTRES.map(b => ({value:b.n, label:b.n+'°'})), {value:0, label:'Año'}], bimN, bimColorClass)}
    </div>
    <button class="btn-primary no-print" id="imprimirBtn" style="width:100%;margin-bottom:16px;">Imprimir / Guardar como PDF</button>
    ${boletinSheetHTML(selectedStudentId, bimN)}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('resumenAlumno'));
  document.getElementById('imprimirBtn').addEventListener('click', () => window.print());
  attachPillBtns('bimBoletin', (v) => { selectedBimestreBoletin = Number(v); render(); });
}

function renderBoletinCurso(){
  const bimN = window.__boletinCursoBim || 0;
  const students = getStudents().filter(s => s.curso === selectedCurso).sort((a,b)=> a.apellido.localeCompare(b.apellido));
  $app.innerHTML = `
    <div class="appbar no-print" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Boletines de ${selectedCurso}° A</h1>
    </div>
    <div class="course-picker no-print">
      ${pillBtnRow('bimBoletinCurso', [...BIMESTRES.map(b => ({value:b.n, label:b.n+'°'})), {value:0, label:'Año'}], bimN, bimColorClass)}
    </div>
    <button class="btn-primary no-print" id="imprimirBtn" style="width:100%;margin-bottom:16px;">Imprimir / Guardar como PDF (${students.length} boletines)</button>
    ${students.map(s => `<div class="boletin-page">${boletinSheetHTML(s.id, bimN)}</div>`).join('')}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('resumen'));
  document.getElementById('imprimirBtn').addEventListener('click', () => window.print());
  attachPillBtns('bimBoletinCurso', (v) => { window.__boletinCursoBim = Number(v); render(); });
}

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
    if(w>0) dias.push({ fecha, w, tipo: rec.estado });
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
    const materiasTxt = materias.length ? materias.join(', ') : (d.tipo==='EF' ? 'Ed. Física' : '—');
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
    return `<div class="materia-row ${scp?'scp':''}">
      <span class="materia-name">${subj}</span>
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

    ${userRole!=='student' ? `<button class="btn-secondary" id="verBoletinBtn" style="width:100%;margin-bottom:6px;"><span class="btn-icon-fix">${icon('file')}</span> Ver boletín para imprimir / PDF</button>` : ''}
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
    <p class="info-note">${icon('info')}SCP = por debajo del 85% de asistencia anual en esa materia (recupera en el PIA).</p>

    <p class="section-label" style="margin-top:16px;">Apercibimientos</p>
    ${sanciones.length ? `<div class="sancion-list">${sanciones.map(h => `
      <div class="sancion-item"><p class="folio">${ordinal(h.folio)} · ${h.fecha}</p><p class="motivo">${h.motivo}</p></div>
    `).join('')}</div>` : `<p class="empty-inline">Sin registros.</p>`}

    <p class="section-label" style="margin-top:16px;">Certificados entregados</p>
    ${certs.length ? `<div class="sancion-list">${certs.map(c => `
      <div class="sancion-item"><p class="folio">${fmtDateShort(c.from)} al ${fmtDateShort(c.to)}</p></div>
    `).join('')}</div>` : `<p class="empty-inline">Sin certificados cargados.</p>`}

    <p class="section-label" style="margin-top:16px;">Autorización de tardanza</p>
    ${(() => {
      const auth = getAutorizaciones()[selectedStudentId];
      if(auth && auth.activa){
        return `<div class="config-card"><p class="v">Hasta ${auth.horaTope} · ${auth.motivo}</p><p class="k">Desde ${auth.desde}</p></div>`;
      }
      return `<p class="empty-inline">Sin autorización activa.</p>`;
    })()}
    ${(userRole!=='viewer' && userRole!=='student') ? `<button class="btn-secondary" id="authBtn" style="width:100%;margin-top:8px;">${(getAutorizaciones()[selectedStudentId]||{}).activa ? 'Cerrar autorización' : 'Agregar autorización'}</button>` : ''}

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
  if(document.getElementById('verBoletinBtn')){
    document.getElementById('verBoletinBtn').addEventListener('click', () => { selectedBimestreBoletin = bim.n; navigate('boletinAlumno'); });
  }
  document.getElementById('compararBimBtn').addEventListener('click', () => navigate('compararBimestres'));
  if(document.getElementById('authBtn')){
    document.getElementById('authBtn').addEventListener('click', () => gestionarAutorizacion(selectedStudentId));
  }
  if(document.getElementById('verValoracionesBtn')){
    document.getElementById('verValoracionesBtn').addEventListener('click', () => navigate('resumenValoraciones'));
  }
  if(document.getElementById('verNotasBtn')){
    document.getElementById('verNotasBtn').addEventListener('click', () => navigate('resumenNotas'));
  }
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

  const rows = materias.map(m => {
    const n1 = propias.find(n => n.materia===m && n.cuatrimestre===1);
    const n2 = propias.find(n => n.materia===m && n.cuatrimestre===2);
    return `<div class="materia-row">
      <span class="materia-name">${m}</span>
      <span class="materia-detail">${n1 ? n1.nota : '—'}</span>
      <span class="materia-pct">${n2 ? n2.nota : '—'}</span>
    </div>`;
  }).join('');

  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>${student.apellido}, ${student.nombre}</h1>
    </div>
    <div class="materia-row" style="font-weight:600;color:var(--ink-soft);font-size:11.5px;border-bottom:1px solid var(--border);">
      <span class="materia-name">Materia</span>
      <span class="materia-detail">1° cuatri.</span>
      <span class="materia-pct">2° cuatri.</span>
    </div>
    ${materias.length ? `<div class="sancion-list">${rows}</div>` : `<p style="font-size:13px;color:var(--ink-soft);margin-top:10px;">Sin notas cargadas todavía.</p>`}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack(userRole==='student' ? 'studentHome' : 'resumenAlumno'));
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
  setDoc(doc(db,'teachers',uid), { activo: !activo }, { merge: true }).catch(err=>console.error(err));
}

async function guardarEdicionProfesor(uid){
  const materias = Array.from(document.querySelectorAll('.materia-check-edit:checked')).map(c => c.value);
  const cursos = Array.from(document.querySelectorAll('.curso-check-edit:checked')).map(c => c.value);
  if(cursos.length===0){ await customAlert('Elegí al menos un curso.'); return; }
  const asignaciones = materias.map(m => ({ materia: m, cursos }));
  setDoc(doc(db,'teachers',uid), { materias, cursos, asignaciones }, { merge: true }).catch(err=>console.error(err));
  showToast('Datos actualizados');
  navigate('profesores');
}

async function recalcularDesdeHorario(uid){
  const t = cache.teachers[uid];
  const conocido = profesoresConocidos()[t.nombre];
  if(!conocido){ await customAlert('Este nombre no aparece tal cual en el horario, no lo puedo recalcular solo.'); return; }
  setDoc(doc(db,'teachers',uid), { materias: conocido.materias, cursos: conocido.cursos, asignaciones: conocido.asignaciones }, { merge: true })
    .catch(err=>console.error(err));
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
  deleteDoc(doc(db,'teachers',uid)).then(() => showToast('Profesor/a borrado')).catch(err=>console.error(err));
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

// ---------- Conexión con Google ----------
function normalizeNombre(s){
  return String(s).trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z ,]/g,' ').replace(/\s+/g,' ').trim();
}

window.onGapiLoad = function(){
  gapi.load('client', async () => {
    await gapi.client.init({});
    await gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4');
    await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/drive/v3/rest');
    gapiListo = true;
  });
};
if(window.gapi) window.onGapiLoad();
else window.addEventListener('load', () => { if(window.gapi) window.onGapiLoad(); });

function initGoogleTokenClient(){
  if(gisListo || !window.google || !google.accounts) return;
  googleTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: GOOGLE_SCOPES,
    callback: (resp) => {
      if(resp.error){ customAlert('No se pudo conectar con Google: ' + resp.error); return; }
      gapi.client.setToken({ access_token: resp.access_token });
      driveConectado = true;
      showToast('Conectado con Google Drive');
      render();
    },
  });
  gisListo = true;
}

async function conectarDrive(){
  initGoogleTokenClient();
  if(!gapiListo || !googleTokenClient){
    await customAlert('Todavía está cargando Google, esperá unos segundos y volvé a tocar el botón.');
    return;
  }
  googleTokenClient.requestAccessToken({ prompt: driveConectado ? '' : 'consent' });
}

async function listarSubcarpetas(parentId){
  const res = await gapi.client.drive.files.list({
    q: `'${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: 'files(id,name)', pageSize: 100
  });
  return res.result.files || [];
}
async function listarPlanillas(folderId){
  const res = await gapi.client.drive.files.list({
    q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`,
    fields: 'files(id,name)', pageSize: 200
  });
  return res.result.files || [];
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

async function escanearCarpetaDrive(){
  if(!driveConectado){ await customAlert('Primero conectá con Google Drive.'); return; }
  const estadoEl = document.getElementById('driveEstado');
  if(estadoEl) estadoEl.textContent = 'Buscando subcarpetas por curso...';
  try{
    const subcarpetas = await listarSubcarpetas(DRIVE_ROOT_FOLDER_ID);
    const relevantes = subcarpetas.filter(f => cursoDesdeNombreCarpeta(f.name));
    if(relevantes.length === 0){
      if(estadoEl) estadoEl.textContent = 'No encontré subcarpetas con nombre de curso (ej: "1ER AÑO"). Revisá los nombres en Drive.';
      return;
    }
    const mapeo = {};
    const sinMatch = [];
    let totalArchivos = 0;
    for(const carpeta of relevantes){
      const curso = cursoDesdeNombreCarpeta(carpeta.name);
      if(estadoEl) estadoEl.textContent = `Revisando ${carpeta.name}...`;
      const archivos = await listarPlanillas(carpeta.id);
      totalArchivos += archivos.length;
      archivos.forEach(a => {
        const alumno = emparejarAlumno(a.name, curso);
        if(alumno) mapeo[alumno.id] = { spreadsheetId: a.id, nombreArchivo: a.name, curso };
        else sinMatch.push(`${carpeta.name} / ${a.name}`);
      });
    }
    window.__driveMapeoPendiente = { mapeo, sinMatch, totalArchivos };
    if(estadoEl){
      estadoEl.innerHTML = `Encontrados ${totalArchivos} archivos en ${relevantes.length} carpetas.<br>
        Emparejados con un alumno: <b>${Object.keys(mapeo).length}</b><br>
        Sin poder emparejar: <b>${sinMatch.length}</b>${sinMatch.length ? '<br>' + sinMatch.slice(0,15).map(x=>'· '+x).join('<br>') : ''}`;
    }
    document.getElementById('guardarMapeoBtn').style.display = 'block';
  }catch(err){
    console.error(err);
    if(estadoEl) estadoEl.textContent = 'Hubo un error buscando en Drive: ' + (err.result ? err.result.error.message : err.message);
  }
}

function guardarMapeoDrive(){
  const pendiente = window.__driveMapeoPendiente;
  if(!pendiente) return;
  const ops = Object.entries(pendiente.mapeo).map(([studentId, info]) =>
    setDoc(doc(db,'driveMapping', studentId), info)
  );
  Promise.all(ops).then(() => showToast('Emparejamiento guardado')).catch(err=>console.error(err));
}

// Busca la próxima fila vacía mirando SOLO la columna B (fecha), para no confundirse
// con fórmulas de otras columnas (como la de faltas acumuladas) que bajan mucho más.
async function proximaFilaLibre(spreadsheetId){
  const res = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId, range: "'2026'!B:B"
  });
  const valores = res.result.values || [];
  let ultima = 0;
  valores.forEach((fila, idx) => { if(fila[0] !== undefined && fila[0] !== '') ultima = idx + 1; });
  return ultima + 1; // fila 1-indexed siguiente a la última con fecha
}

async function escribirFilaSheet(spreadsheetId, fechaTexto, tipo, peso){
  const fila = await proximaFilaLibre(spreadsheetId);
  await gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `'2026'!B${fila}:D${fila}`,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[fechaTexto, tipo, peso===undefined?'':peso]] }
  });
}

async function probarEscrituraSheet(studentId){
  const estadoEl = document.getElementById('pruebaEstado');
  const info = cache.driveMapping[studentId];
  if(!info){ if(estadoEl) estadoEl.textContent = 'Este alumno no tiene planilla emparejada.'; return; }
  if(estadoEl) estadoEl.textContent = 'Escribiendo...';
  try{
    const fechaTexto = fmtDateShort(todayISO());
    await escribirFilaSheet(info.spreadsheetId, fechaTexto, 'PRUEBA — se puede borrar esta fila', '');
    if(estadoEl) estadoEl.innerHTML = '✓ Escrita justo debajo de la última fecha cargada. Andá a revisar la planilla de ese alumno en Drive y confirmá que quedó en el lugar correcto. Después borrala a mano.';
  }catch(err){
    console.error(err);
    if(estadoEl) estadoEl.textContent = 'Error al escribir: ' + (err.result ? err.result.error.message : err.message);
  }
}

// Traduce el estado interno de la app al vocabulario que ya usás en tus planillas
function filaParaSheet(rec, tipoManual){
  if(tipoManual) return { tipo: tipoManual, peso: '' };
  if(rec.exencion) return { tipo: rec.exencion, peso: '' };
  if(rec.estado === 'A') return { tipo: 'Clase', peso: 1 };
  if(rec.estado === 'J') return { tipo: 'Clase (Justificado)', peso: 1 };
  if(rec.estado === 'T') return { tipo: 'Tarde', peso: 0.5 };
  if(rec.estado === 'TJ') return { tipo: 'Tarde (Justificado)', peso: '' };
  return null; // Presente no se escribe (igual que en tu Excel: solo figuran los ausentes)
}

function registrosPendientesDeSync(){
  const pendientesAsistencia = [];
  Object.entries(cache.attendance).forEach(([key, rec]) => {
    if(rec.driveSynced) return;
    const [fecha, studentId] = key.split('|');
    if(!cache.driveMapping[studentId]) return;
    const fila = filaParaSheet(rec);
    if(!fila) return;
    pendientesAsistencia.push({ key, studentId, fecha, fila });
  });
  const pendientesEF = [];
  Object.entries(cache.ef).forEach(([key, rec]) => {
    if(rec.driveSynced) return;
    const [fecha, studentId] = key.split('|');
    if(!cache.driveMapping[studentId]) return;
    pendientesEF.push({ key, studentId, fecha, tipo: rec.tipo });
  });
  return { pendientesAsistencia, pendientesEF };
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
    render();
  }catch(err){
    console.error(err);
    if(estadoEl) estadoEl.textContent = `Se cortó en el registro ${hechos}/${total} por un error: ${err.message||err}. Tocá el botón de nuevo para seguir con el resto.`;
  }
}

function esperar(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }
function conTimeout(promise, ms){
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT: no respondió Google a tiempo')), ms))
  ]);
}
function esErrorDeAutenticacion(err){
  const status = (err && err.status) || (err && err.result && err.result.error && err.result.error.status);
  const code = err && err.result && err.result.error && err.result.error.code;
  return status === 'UNAUTHENTICATED' || status === 'PERMISSION_DENIED' || code === 401 || code === 403;
}

let syncCancelado = false;

async function sincronizarPendientesConDrive(){
  if(!driveConectado){ await customAlert('Primero conectá con Google Drive.'); return; }
  const { pendientesAsistencia, pendientesEF } = registrosPendientesDeSync();
  const total = pendientesAsistencia.length + pendientesEF.length;
  const estadoEl = document.getElementById('syncEstado');
  if(total === 0){ if(estadoEl) estadoEl.textContent = 'No hay nada pendiente para sincronizar.'; return; }
  syncCancelado = false;
  const cancelarBtn = document.getElementById('cancelarSyncBtn');
  if(cancelarBtn) cancelarBtn.style.display = 'block';
  if(estadoEl) estadoEl.textContent = `Sincronizando ${total} registros...`;
  let ok = 0, error = 0, cortadoPorAuth = false;

  async function procesar(spreadsheetId, fechaTexto, tipo, peso){
    await conTimeout(escribirFilaSheet(spreadsheetId, fechaTexto, tipo, peso), 15000);
  }

  for(const p of pendientesAsistencia){
    if(syncCancelado) break;
    if(!cache.driveMapping[p.studentId]) continue;
    try{
      await procesar(cache.driveMapping[p.studentId].spreadsheetId, fmtDateShort(p.fecha), p.fila.tipo, p.fila.peso);
      await setDoc(doc(db,'attendance', docId(p.key)), { driveSynced: true }, { merge: true });
      ok++;
    }catch(err){
      console.error(err);
      error++;
      if(esErrorDeAutenticacion(err)){ cortadoPorAuth = true; break; }
    }
    if(estadoEl) estadoEl.textContent = `Sincronizando... ${ok+error}/${total}`;
    await esperar(300);
  }
  if(!cortadoPorAuth){
    for(const p of pendientesEF){
      if(syncCancelado) break;
      if(!cache.driveMapping[p.studentId]) continue;
      try{
        const etiqueta = p.tipo === 'saf' ? 'SAF' : 'Ed. fisica';
        const peso = p.tipo === 'saf' ? '' : 0.5;
        await procesar(cache.driveMapping[p.studentId].spreadsheetId, fmtDateShort(p.fecha), etiqueta, peso);
        await setDoc(doc(db,'ef', docId(`${p.fecha}_${p.studentId}`)), { driveSynced: true }, { merge: true });
        ok++;
      }catch(err){
        console.error(err);
        error++;
        if(esErrorDeAutenticacion(err)){ cortadoPorAuth = true; break; }
      }
      if(estadoEl) estadoEl.textContent = `Sincronizando... ${ok+error}/${total}`;
      await esperar(300);
    }
  }

  if(cancelarBtn) cancelarBtn.style.display = 'none';
  if(estadoEl){
    if(cortadoPorAuth){
      estadoEl.innerHTML = `Se cortó: la conexión con Google venció a mitad de camino. Se sincronizaron ${ok} antes de cortarse. Tocá "Reconectar con Google Drive" arriba y después "Sincronizar ahora" de nuevo para seguir con el resto.`;
    } else if(syncCancelado){
      estadoEl.textContent = `Cancelado. Se sincronizaron ${ok} antes de parar (${error} con error).`;
    } else {
      estadoEl.textContent = `Listo: ${ok} sincronizados${error?`, ${error} con error (revisá la consola)`:''}.`;
    }
  }
  render();
}

function renderConexionDrive(){
  const mapeados = Object.entries(cache.driveMapping || {});
  const { pendientesAsistencia, pendientesEF } = driveConectado ? registrosPendientesDeSync() : { pendientesAsistencia:[], pendientesEF:[] };
  const totalPendiente = pendientesAsistencia.length + pendientesEF.length;
  $app.innerHTML = `
    <div class="appbar" style="padding:0 0 10px;">
      <button class="back-btn" id="backBtn">${icon('back')}</button>
      <h1>Conexión con Drive</h1>
    </div>
    <p style="font-size:13px;color:var(--ink-soft);margin-bottom:14px;">Etapa 1: conectar y emparejar los archivos con cada alumno (no escribe nada todavía).</p>
    <button class="btn-primary" id="conectarDriveBtn" style="margin-bottom:12px;">${driveConectado ? 'Reconectar con Google Drive' : 'Conectar con Google Drive'}</button>
    ${driveConectado ? `<button class="btn-secondary" id="escanearBtn" style="width:100%;margin-bottom:12px;">Buscar y emparejar archivos</button>` : ''}
    <p id="driveEstado" style="font-size:12.5px;color:var(--ink-soft);line-height:1.5;"></p>
    <button class="btn-primary" id="guardarMapeoBtn" style="display:none;margin-top:10px;">Guardar emparejamiento</button>

    ${mapeados.length && driveConectado ? `
      <p class="section-label" style="margin-top:20px;">Etapa 2: prueba con un alumno</p>
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Escribe una fila de prueba bien marcada (no una falta real) en la planilla de un solo alumno, para que revises que no rompe nada.</p>
      <select id="alumnoPruebaSelect" style="margin-bottom:10px;">
        ${getStudents().filter(s => cache.driveMapping[s.id]).sort((a,b)=>a.apellido.localeCompare(b.apellido)).map(s => `<option value="${s.id}">${s.apellido}, ${s.nombre}</option>`).join('')}
      </select>
      <button class="btn-secondary" id="probarEscrituraBtn" style="width:100%;">Escribir fila de prueba</button>
      <p id="pruebaEstado" style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;"></p>

      <p class="section-label" style="margin-top:20px;">Etapa 3: sincronizar cuando quieras</p>
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Cargás la asistencia normal en la app, y cuando quieras mandarla a Drive, entrás acá y tocás sincronizar. Si es la primera vez, marcá primero lo ya cargado como "ya sincronizado" para que no se duplique con lo que ya tenés a mano en el Excel.</p>
      <button class="btn-secondary" id="marcarSyncBtn" style="width:100%;margin-bottom:10px;">Marcar todo lo actual como ya sincronizado</button>
      <button class="btn-primary" id="sincronizarBtn" style="width:100%;">Sincronizar ahora (${totalPendiente} pendiente${totalPendiente!==1?'s':''})</button>
      <button class="btn-secondary" id="cancelarSyncBtn" style="width:100%;margin-top:8px;display:none;color:var(--stamp);">Cancelar sincronización</button>
      <p id="syncEstado" style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;"></p>
    ` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => goBack('home'));
  document.getElementById('conectarDriveBtn').addEventListener('click', conectarDrive);
  if(document.getElementById('escanearBtn')){
    document.getElementById('escanearBtn').addEventListener('click', escanearCarpetaDrive);
  }
  document.getElementById('guardarMapeoBtn').addEventListener('click', guardarMapeoDrive);
  if(document.getElementById('probarEscrituraBtn')){
    document.getElementById('probarEscrituraBtn').addEventListener('click', () => {
      const sid = document.getElementById('alumnoPruebaSelect').value;
      probarEscrituraSheet(sid);
    });
  }
  if(document.getElementById('marcarSyncBtn')){
    document.getElementById('marcarSyncBtn').addEventListener('click', marcarTodoComoYaSincronizado);
  }
  if(document.getElementById('sincronizarBtn')){
    document.getElementById('sincronizarBtn').addEventListener('click', sincronizarPendientesConDrive);
  }
  if(document.getElementById('cancelarSyncBtn')){
    document.getElementById('cancelarSyncBtn').addEventListener('click', () => { syncCancelado = true; });
  }
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

    <div class="module-list">
      ${moduleRow('clipboard','Asistencia diaria','Solo consulta, por curso', 'asistencia')}
      ${moduleRow('alert','Sanciones e incidentes','Registro por alumno', 'sanciones')}
      ${moduleRow('file','Valoraciones pedagógicas','Bimestral, por materia', 'valoraciones')}
      ${moduleRow('chart','Notas','Cuatrimestral, escala 1 a 10', 'notas')}
      ${moduleRow('users','Resumen del alumno','Faltas, apercibimientos y certificados', 'resumen')}
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
}

function renderStudentHome(){
  const stamp = fmtDateStamp();
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

    <div class="module-list big">
      ${moduleRow('clipboard','Mis faltas','Bimestre, materias y detalle día por día', 'studentFaltas')}
      ${moduleRow('chart','Mis notas','1er y 2do cuatrimestre', 'studentNotas')}
      ${moduleRow('calendar','Mi horario','Materias y profesores por día', 'studentHorario')}
      ${moduleRow('users','Mis profesores','Materia y mail de contacto', 'studentProfesores')}
    </div>

    <p style="text-align:center;margin-top:18px;">
      <a href="#" id="cambiarPassLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Cambiar contraseña</a>
      &nbsp;·&nbsp;
      <a href="#" id="salirProfLink" style="font-size:12px;color:var(--ink-soft);text-decoration:underline;">Salir</a>
    </p>
  `;
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
  setDoc(doc(db,'viewers',uid), { activo: !activo }, { merge: true }).catch(err=>console.error(err));
}
async function borrarViewer(uid, nombre){
  if(!(await customConfirm(`¿Borrar el acceso de ${nombre}? No se puede deshacer.`, {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'viewers',uid)).then(() => showToast('Acceso borrado')).catch(err=>console.error(err));
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
  setDoc(doc(db,'students_auth',uid), { activo: !activo }, { merge: true }).catch(err=>console.error(err));
}
async function borrarAlumnoCuenta(uid, nombre){
  if(!(await customConfirm(`¿Borrar la cuenta de ${nombre}? No se puede deshacer.`, {peligro:true, textoSi:'Borrar'}))) return;
  deleteDoc(doc(db,'students_auth',uid)).then(() => showToast('Cuenta borrada')).catch(err=>console.error(err));
}

async function crearCuentasMasivo(){
  const pendientes = window.__cargaMasivaPendiente || [];
  if(pendientes.length === 0) return;
  if(!(await customConfirm(`Se van a crear ${pendientes.length} cuentas con la contraseña genérica. ¿Confirmás?`))) return;
  const estadoEl = document.getElementById('masivoEstado');
  let ok = 0, error = 0;
  for(const a of pendientes){
    try{
      const cred = await createUserWithEmailAndPassword(authSecundaria, a.email, '123456');
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
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Subí el archivo de alumnos emparejados con su mail (JSON), y creá todas esas cuentas de una vez con la contraseña genérica <b>123456</b> (cada alumno la puede cambiar después).</p>
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
  Object.values(SEED_SCHEDULE).forEach(days => {
    Object.values(days).forEach(entries => entries.forEach(e => set.add(e.subject)));
  });
  return [...set].sort();
}

function profesoresConocidos(){
  const map = {};
  Object.entries(SEED_SCHEDULE).forEach(([curso, days]) => {
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
  const days = SEED_SCHEDULE[curso] || {};
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
  setDoc(doc(db,'valoraciones',key), data).catch(err=>console.error(err));
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
        .catch(err=>console.error(err));
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
      }
    });
  });

  alertaList.sort((a,b)=> b.valor - a.valor);
  const scpList = Object.values(scpMap).sort((a,b)=> a.nombre.localeCompare(b.nombre));

  return { total: students.length, enAlerta: alertaList.length, conSCP: scpList.length, alertaList, scpList, porMateria };
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

  XLSX.writeFile(wb, `Respaldo_ISP_${todayISO()}.xlsx`);
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
    if(!idsCurso.has(sid) || rec.exencion) return;
    const dia = diaKeyFor(fecha);
    if(!dia || !(dia in porDia)) return;
    if(rec.estado==='A') porDia[dia] += 1;
    else if(rec.estado==='T') porDia[dia] += 0.5;
  });
  const labels = { lunes:'Lun', martes:'Mar', miercoles:'Mié', jueves:'Jue', viernes:'Vie' };
  return Object.entries(porDia).map(([dia, total]) => ({
    label: labels[dia], promedio: students.length ? Math.round((total/students.length)*100)/100 : 0
  }));
}

function svgTendencia(datos){
  const w = 320, h = 160, padL = 20, padB = 26, padT = 28;
  const max = Math.max(1, ...datos.map(d=>d.promedio));
  const barW = (w - padL - 10) / datos.length;
  const bars = datos.map((d, i) => {
    const barH = Math.max(4, (d.promedio / max) * (h - padT - padB));
    const x = padL + i*barW + barW*0.2;
    const y = h - padB - barH;
    return `<rect x="${x}" y="${y}" width="${barW*0.6}" height="${barH}" rx="3" fill="var(--sage)"/>
      <text x="${x+barW*0.3}" y="${h-padB+18}" text-anchor="middle" font-size="12" fill="var(--ink-soft)">${d.label}</text>
      <text x="${x+barW*0.3}" y="${y-9}" text-anchor="middle" font-family="'Source Serif 4',serif" font-size="16" font-weight="700" fill="var(--ink)">${d.promedio}</text>`;
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

    ${userRole!=='student' ? `<button class="btn-secondary" id="exportarBtn" style="width:100%;margin-bottom:16px;"><span class="btn-icon-fix">${icon('file')}</span> Exportar asistencia a Excel</button>` : ''}

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
  if(document.getElementById('exportarBtn')){
    document.getElementById('exportarBtn').addEventListener('click', () => exportarAsistenciaCurso(selectedCurso));
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

function renderTabbar(){
  const tb = document.getElementById('tabbar');
  if(!userRole){ tb.innerHTML = ''; return; }
  if(userRole === 'teacher'){
    tb.innerHTML = `
      <button class="tab ${currentRoute==='teacherHome'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
      <button class="tab ${currentRoute==='sanciones'||currentRoute==='sancionDetalle'?'active':''}" id="tabSanciones">${icon('alert')}<span>Sanciones</span></button>
      <button class="tab ${currentRoute==='resumen'||currentRoute==='resumenAlumno'?'active':''}" id="tabResumen">${icon('chart')}<span>Resumen</span></button>
    `;
    document.getElementById('tabHome').addEventListener('click', () => navigate('teacherHome'));
    document.getElementById('tabSanciones').addEventListener('click', () => navigate('sanciones'));
    document.getElementById('tabResumen').addEventListener('click', () => navigate('resumen'));
    return;
  }
  if(userRole === 'viewer'){
    tb.innerHTML = `
      <button class="tab ${currentRoute==='viewerHome'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
      <button class="tab ${currentRoute==='resumen'||currentRoute==='resumenAlumno'?'active':''}" id="tabResumen">${icon('users')}<span>Resumen</span></button>
      <button class="tab ${currentRoute==='detalleAlertas'?'active':''}" id="tabAlertas">${icon('alert')}<span>Alertas</span></button>
    `;
    document.getElementById('tabHome').addEventListener('click', () => navigate('viewerHome'));
    document.getElementById('tabResumen').addEventListener('click', () => navigate('resumen'));
    document.getElementById('tabAlertas').addEventListener('click', () => navigate('detalleAlertas'));
    return;
  }
  if(userRole === 'student'){
    tb.innerHTML = `
      <button class="tab ${currentRoute==='studentHome'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
      <button class="tab ${currentRoute==='resumenAlumno'||currentRoute==='detalleFaltasAlumno'||currentRoute==='resumenNotas'?'active':''}" id="tabMio">${icon('chart')}<span>Mis datos</span></button>
      <button class="tab ${currentRoute==='studentProfesores'?'active':''}" id="tabProfes">${icon('users')}<span>Profesores</span></button>
    `;
    document.getElementById('tabHome').addEventListener('click', () => navigate('studentHome'));
    document.getElementById('tabMio').addEventListener('click', () => { selectedStudentId = currentStudentAuth.studentId; navigate('resumenAlumno'); });
    document.getElementById('tabProfes').addEventListener('click', () => navigate('studentProfesores'));
    return;
  }
  tb.innerHTML = `
    <button class="tab ${currentRoute==='home'?'active':''}" id="tabHome">${icon('home')}<span>Inicio</span></button>
    <button class="tab ${currentRoute==='asistencia'?'active':''}" id="tabAsist">${icon('clipboard')}<span>Asistencia</span></button>
    <button class="tab ${currentRoute==='horarios'?'active':''}" id="tabHorarios">${icon('calendar')}<span>Horarios</span></button>
    <button class="tab ${currentRoute==='config'?'active':''}" id="tabConfig">${icon('gear')}<span>Config</span></button>
  `;
  document.getElementById('tabHome').addEventListener('click', () => navigate('home'));
  document.getElementById('tabAsist').addEventListener('click', () => navigate('asistencia'));
  document.getElementById('tabHorarios').addEventListener('click', () => navigate('horarios'));
  document.getElementById('tabConfig').addEventListener('click', () => navigate('config'));
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
  setDoc(doc(db,'config','general'), { entrada, toleranciaMin: tolerancia, corteFaltaCompleta: corte })
    .then(() => showToast('Configuración guardada'))
    .catch(err=>console.error(err));
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
function getTramites(){ return cache.tramites; }
function entregaKey(tramiteId, studentId, itemKey){ return docId(`${tramiteId}_${studentId}_${itemKey}`); }
function getEntrega(tramiteId, studentId, itemKey){ return cache.entregas[entregaKey(tramiteId, studentId, itemKey)]; }

async function toggleEntrega(tramiteId, studentId, itemKey){
  const key = entregaKey(tramiteId, studentId, itemKey);
  const actual = cache.entregas[key];
  const ref = doc(db,'entregas',key);
  if(!actual){
    setDoc(ref, { entregado: true, fecha: todayISO(), autor: getUsuario() }).catch(err=>console.error(err));
  } else if(actual.entregado){
    setDoc(ref, { exento: true, entregado: false, fecha: todayISO(), autor: getUsuario() }).catch(err=>console.error(err));
  } else {
    deleteDoc(ref).catch(err=>console.error(err));
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
  deleteDoc(doc(db,'tramites',id)).then(() => showToast('Trámite borrado')).catch(err=>console.error(err));
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

function renderConfigAvanzada(){
  const feriadosTexto = [...FERIADOS_2026].sort().join('\n');
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
      <textarea id="cfgFeriados" rows="6" placeholder="Una fecha por línea, formato AAAA-MM-DD">${feriadosTexto}</textarea>
      <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 0 0;">Se usan para no contar esos días como clase en el % de asistencia por materia.</p>
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
      <button class="btn-secondary" id="cambiarUsuarioBtn" style="width:100%;">Cambiar usuario</button>
    </div>

    ${esNapo ? `
    <p class="section-label" style="margin-top:20px;">Horarios de entrada (todo el colegio)</p>
    <div class="config-card">
      <div class="field-row"><label>Entrada</label><input id="cfgEntrada" type="text" value="${cfg.entrada}" placeholder="07:45"></div>
      <div class="field-row"><label>Tolerancia (min)</label><input id="cfgTolerancia" type="number" value="${cfg.toleranciaMin}"></div>
      <div class="field-row"><label>Corte falta completa</label><input id="cfgCorte" type="text" value="${cfg.corteFaltaCompleta}" placeholder="09:00"></div>
      <p style="font-size:11.5px;color:var(--ink-soft);margin:8px 0 12px;">Después de la hora de "corte", una llegada ya cuenta como falta completa en vez de tardanza.</p>
      <button class="btn-primary" id="guardarConfigBtn" style="width:100%;">Guardar</button>
    </div>
    ` : ''}

    ${esNapo ? `
    <p class="section-label" style="margin-top:20px;">Mantenimiento</p>
    <div class="config-card">
      <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:10px;">Actualiza los registros viejos de asistencia para que tengan el dato del alumno guardado correctamente (necesario para el acceso de alumnos).</p>
      <button class="btn-secondary" id="migrarBtn" style="width:100%;">Actualizar registros viejos</button>
      <p id="migracionEstado" style="font-size:12px;color:var(--ink-soft);margin-top:8px;"></p>
    </div>
    <button class="btn-secondary" id="irAuditoriaBtn" style="width:100%;margin-top:10px;">Ver registro de actividad</button>
    <button class="btn-secondary" id="irAvanzadaBtn" style="width:100%;margin-top:10px;">Feriados, bimestres, horarios y umbrales</button>
    <button class="btn-secondary" id="irRespaldoBtn" style="width:100%;margin-top:10px;">Descargar respaldo completo (Excel)</button>
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
  if(document.getElementById('guardarConfigBtn')){
    document.getElementById('guardarConfigBtn').addEventListener('click', guardarConfigGeneral);
  }
  if(document.getElementById('migrarBtn')){
    document.getElementById('migrarBtn').addEventListener('click', migrarStudentIdEnAsistencia);
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
}

function getUsuario(){ return localStorage.getItem('isp_usuario') || ''; }
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

// ---------- Init ----------
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
    render();
  } else if(user && !user.isAnonymous){
    startListeners();
    try{
      const tdoc = await getDoc(doc(db,'teachers',user.uid));
      if(tdoc.exists() && tdoc.data().activo !== false){
        userRole = 'teacher';
        currentTeacher = Object.assign({ uid: user.uid }, tdoc.data());
        currentRoute = 'teacherHome';
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
    render();
  } else {
    userRole = null;
    currentTeacher = null;
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
