(this.webpackJsonplapalma=this.webpackJsonplapalma||[]).push([[0],Array(19).concat([function(e,a,t){e.exports=t.p+"static/media/logo.0d940843.png"},function(e,a,t){e.exports=t.p+"static/media/nosotros.dc9c3a80.jpg"},function(e,a,t){e.exports=t.p+"static/media/Servicio1.db61e6e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/Servicio2.6351a2bd.jpg"},function(e,a,t){e.exports=t.p+"static/media/Servicio3.4fcab89a.jpg"},function(e,a,t){e.exports=t.p+"static/media/Servicio4.c3788b97.jpg"},function(e,a,t){e.exports=t.p+"static/media/Servicio5.f2e242a0.jpg"},function(e,a,t){e.exports=t.p+"static/media/opcion1.6590ae7e.png"},function(e,a,t){e.exports=t.p+"static/media/opcion2.3de56566.png"},function(e,a,t){e.exports=t.p+"static/media/opcion3.00adeff7.png"},function(e,a,t){e.exports=t.p+"static/media/opcion4.aacd486d.png"},function(e,a,t){e.exports=t.p+"static/media/cliente1.4ad43290.png"},function(e,a,t){e.exports=t.p+"static/media/cliente2.c8931329.png"},function(e,a,t){e.exports=t.p+"static/media/cliente3.e1d879f8.png"},function(e,a,t){e.exports=t.p+"static/media/cliente4.a7570a66.png"},function(e,a,t){e.exports=t.p+"static/media/logo-white.88578cb2.png"},function(e,a,t){e.exports=t(51)},,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(6),c=t.n(i),r=t(7),s=t(8),o=t(10),m=t(9),d=t(1),u=t(2),p=t(19),E=t.n(p),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).menuRef=l.a.createRef(),n.state={openMenu:!1,offsetTopMenu:null,stylesMenu:{}},n.handleScroll=n.handleScroll.bind(Object(d.a)(n)),n.handleClickLink=n.handleClickLink.bind(Object(d.a)(n)),n}return Object(s.a)(t,[{key:"handleScroll",value:function(){if(!this.state.offsetTopMenu){var e=this.menuRef.current.offsetTop;this.setState({offsetTopMenu:e})}this.setState({stylesMenu:{position:window.scrollY>=this.state.offsetTopMenu?"fixed":"relative"}})}},{key:"handleClickLink",value:function(){this.setState({openMenu:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.state.openMenu?"menu is-open":"menu",ref:this.menuRef,style:this.state.stylesMenu},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"menu__logo"},l.a.createElement("img",{src:E.a,alt:"Variedades y Tipograf\xeda la palma | Logo"})),l.a.createElement("menu",{className:"menu__items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.Link,{activeClass:"active",to:"header",spy:!0,smooth:!0,offset:-100,duration:500,onClick:this.handleClickLink},"INICIO")),l.a.createElement("li",null,l.a.createElement(u.Link,{activeClass:"active",to:"nosotros",spy:!0,smooth:!0,offset:-100,duration:500,onClick:this.handleClickLink},"NOSOTROS")),l.a.createElement("li",null,l.a.createElement(u.Link,{activeClass:"active",to:"servicios",spy:!0,smooth:!0,offset:-100,duration:500,onClick:this.handleClickLink},"SERVICIOS")),l.a.createElement("li",null,l.a.createElement(u.Link,{activeClass:"active",to:"contacto",spy:!0,smooth:!0,offset:-100,duration:500,onClick:this.handleClickLink},"CONTACTO")),l.a.createElement("li",{className:"rs"},l.a.createElement("a",{href:"tel:3154004265",className:"rs__item-whatsap"},l.a.createElement("i",{className:"fas fa-phone-volume"})),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=573154004265",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-whatsapp"})),l.a.createElement("a",{href:"mailto:alejoastudillo2@gmail.com"},l.a.createElement("i",{className:"far fa-envelope"}))))),l.a.createElement("a",{className:"menu__button",href:"#0",onClick:function(){return e.setState({openMenu:!e.state.openMenu})}},l.a.createElement("span",{className:"menu__button-icon"}))))}}]),t}(l.a.Component),h=function(){return l.a.createElement("header",{className:"header",id:"header"},l.a.createElement("div",{className:"header__slide"},l.a.createElement("div",{className:"mouse"})),l.a.createElement(f,null))},g=t(20),N=t.n(g),v=function(){return l.a.createElement("div",{className:"nosotros container",id:"nosotros"},l.a.createElement("h5",{className:"title"},"NOSOTROS"),l.a.createElement("div",{className:"nosotros__container"},l.a.createElement("div",{className:"nosotros__container-text"},l.a.createElement("p",null,"Se renueva con los equipos de \xfaltima tecnolog\xeda. Imprimimos sus diplomas y certificados institucionales con los requerimientos necesarios que garantizan su autenticidad. Ofrecemos la impresi\xf3n de diplomas de todos los grados, elaboraci\xf3n de carpetas en pasta dura, tarjetas de invitaci\xf3n y papeler\xeda en general \xfanicamente para instituciones educativas."),l.a.createElement("p",null,"Contamos con una experiencia de m\xe1s de 15 a\xf1os en el Cauca. Calidad y compromiso es nuestro lema, para la marcaci\xf3n de sus piezas le ofrecemos acabados en seguridad en troqueleado y repuje.")),l.a.createElement("img",{src:N.a,className:"nosotros__container-img",alt:"Tipograf\xeda la palma"})))},_=function(e){return l.a.createElement("div",{className:"servicio__item"},l.a.createElement("img",{src:e.img,className:"servicio__item-img",alt:"".concat(e.title," Tipograf\xeda la palma")}),l.a.createElement("div",{className:"servicio__item_title"},e.title))},b=t(21),C=t.n(b),O=t(22),y=t.n(O),M=t(23),x=t.n(M),k=t(24),S=t.n(k),j=t(25),A=t.n(j),T=function(){var e=[{img:C.a,title:"Diplomas"},{img:y.a,title:"Medallas"},{img:x.a,title:"Suministros para oficina"},{img:S.a,title:"Muebles para oficina"},{img:A.a,title:"Productos de Aseo"}];return l.a.createElement("div",{className:"servicios",id:"servicios"},l.a.createElement("h5",{className:"title"},"NUESTROS SERVICIOS"),l.a.createElement("div",{className:"servicios__container container"},l.a.Children.toArray(e.map((function(e){return l.a.createElement(_,{title:e.title,img:e.img})})))))},L=function(e){return l.a.createElement("div",{className:"diploma__item"},l.a.createElement("h6",{className:"subtitle"},e.title),l.a.createElement("div",{className:"diploma__container"},l.a.createElement("img",{src:e.img,className:"diploma__item-img",alt:"Diplomas Tipograf\xeda la palma"}),l.a.createElement("div",{className:"diploma__item-text"},l.a.createElement("ul",null,l.a.Children.toArray(e.caracteristicas1.map((function(e){return l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right"}),e)})))),l.a.createElement("ul",null,l.a.Children.toArray(e.caracteristicas2.map((function(e){return l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right"}),e)})))),e.caracteristicas3&&l.a.createElement("ul",null,l.a.Children.toArray(e.caracteristicas3.map((function(e){return l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right"}),e)})))))))},w=t(26),D=t.n(w),I=t(27),R=t.n(I),P=t(28),z=t.n(P),V=t(29),q=t.n(V),G=function(){var e=[{title:"Opci\xf3n 1:",img:D.a,caracteristicas1:["Diploma en papel Pergamino de 180gr.","Medidas 24 x 34 cm.","Escudo de Colombia repujado full color.","Dos Actas de Grado en papel Kimberly full color."],caracteristicas2:["Carpeta pasta dura color azul o vino tinto.","Estampados en dorado con Escudo del Colegio.","Medidas 24 x 34 cm."],caracteristicas3:["Obsequio: Dos tarjetas invididuales de invitaci\xf3n de grado.","Tama\xf1o Lord: 18.5 x 12.7 cm. Full Color.","Opalina de 120gr."]},{title:"Opci\xf3n 2:",img:R.a,caracteristicas1:["Diploma en papel Nacarado de 180gr.","Medidas 24 x 34 cm.","Escudo de Colombia repujado full color.","Dos Actas de Grado en papel Kimberly full color."],caracteristicas2:["Carpeta pasta dura color azul o vino tinto.","Estampados en dorado con Escudo del Colegio.","Medidas 24 x 34 cm."],caracteristicas3:["Obsequio: Dos tarjetas invididuales de invitaci\xf3n de grado.","Tama\xf1o Lord: 18.5 x 12.7 cm. Full Color.","Opalina de 120gr."]},{title:"Opci\xf3n 3:",img:z.a,caracteristicas1:["Diploma en papel Kimberly de 180gr.","Medidas 24 x 34 cm.","Escudo de Colombia repujado full color.","Dos Actas de Grado en papel Kimberly full color."],caracteristicas2:["Carpeta pasta dura color azul o vino tinto.","Estampados en dorado con Escudo del Colegio.","Medidas 24 x 34 cm."]}];return l.a.createElement("section",null,l.a.createElement("h5",{className:"title"},"DIPLOMAS"),l.a.createElement("article",{className:"diplomas__container container"},l.a.Children.toArray(e.map((function(e){return l.a.createElement(L,e)}))),l.a.createElement("div",{className:"diploma__item other"},l.a.createElement("img",{src:q.a,className:"diploma__item-img",alt:"Diplomas Tipograf\xeda la palma"}),l.a.createElement("div",{className:"diploma__item-text"},l.a.createElement("h6",{className:"subtitle"},"Grado 9\xb0"),l.a.createElement("p",null,"Diploma en papel Kimberly de 180gr.",l.a.createElement("br",null),"Medidias 24 x 34 cm."),l.a.createElement("h6",{className:"subtitle"},"Preescolar"),l.a.createElement("p",null,"Opalina de 120gr. a full color.",l.a.createElement("br",null),"Tama\xf1o carta."),l.a.createElement("h6",{className:"subtitle"},"Menciones de Honor"),l.a.createElement("p",null,"Opalina de 120gr. a full color.",l.a.createElement("br",null),"Medidas 12.5 x 17.5 cm.")))))},K=t(30),B=t.n(K),F=t(31),J=t.n(F),H=t(32),U=t.n(H),Y=t(33),W=t.n(Y),Q=function(){var e=[B.a,J.a,U.a,W.a];return l.a.createElement("div",{className:"clientes"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"clientes__title"},l.a.createElement("h3",{className:"clientes__title-text"},"CLIENTES")),l.a.createElement("div",{className:"clientes__container"},l.a.Children.toArray(e.map((function(e){return l.a.createElement("div",{className:"clientes__item"},l.a.createElement("img",{src:e,className:"clientes__item-img",alt:"Clientes de Variedades y Tipograf\xeda la palma"}))}))))))},X=function(){return l.a.createElement("div",{className:"contacto",id:"contacto"},l.a.createElement("h5",{className:"title"},"CONTACTO"),l.a.createElement("div",{className:"contacto__container container"},l.a.createElement("div",{className:"contacto__data"},l.a.createElement("div",{className:"contacto__data-item"},l.a.createElement("h6",{className:"subtitle"},"D\xd3NDE ENCONTRARNOS"),l.a.createElement("p",null,"Carrera 6A No. 13N-31 Local 1 | Barri\xf3 Bol\xedvar ",l.a.createElement("br",null),"Popay\xe1n, Cauca")),l.a.createElement("div",{className:"contacto__data-item"},l.a.createElement("h6",{className:"subtitle"},"ENV\xcdANOS UN EMAIL"),l.a.createElement("p",null,"alejoastudillo2@gmail.com ",l.a.createElement("br",null),"alejoastudillo2@hotmail.com")),l.a.createElement("div",{className:"contacto__data-item"},l.a.createElement("h6",{className:"subtitle"},"LL\xc1MENOS"),l.a.createElement("p",null,"T\xe9lefono: 8 363535 ",l.a.createElement("br",null),"M\xf3vil: 315 400 4265"))),l.a.createElement("div",{className:"contacto__map"},l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.5420270724671!2d-76.60124917085108!3d2.451055999888378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjcnMDMuOCJOIDc2wrAzNicwMi41Ilc!5e0!3m2!1sen!2sco!4v1584562582179!5m2!1sen!2sco",width:"100%",height:"100%",title:"Mapa de Popay\xe1n, ASODAMVI Carrera 11 3N-30 Local 101 Barrio Modelo",style:{border:0}}))))},Z=t(34),$=t.n(Z),ee=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer__container container"},l.a.createElement("div",{className:"bussines"},l.a.createElement("img",{src:$.a,alt:"Variedades y Tipograf\xeda la palma | Logo",className:"footer__container-img"}),l.a.createElement("div",{className:"copyright"},"COPYRIGHT \xa9 2020 TIPOGRAF\xcdA LA PALMA")),l.a.createElement("div",{className:"rs"},l.a.createElement("a",{href:"tel:3154004265",className:"rs__item-whatsap"},l.a.createElement("i",{className:"fas fa-phone-volume"})," Ll\xe1manos"),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=573154004265",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-whatsapp"})," Whatsapp"),l.a.createElement("a",{href:"mailto:alejoastudillo2@gmail.com"},l.a.createElement("i",{className:"far fa-envelope"})," Email"))))},ae=(t(50),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement(T,null),l.a.createElement(G,null),l.a.createElement(Q,null),l.a.createElement(X,null),l.a.createElement(ee,null))}}]),t}(l.a.Component));c.a.render(l.a.createElement(ae,null),document.getElementById("root"))}]),[[35,1,2]]]);
//# sourceMappingURL=main.a7b3d0db.chunk.js.map