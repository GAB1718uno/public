"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[460],{7915:(O,Z,o)=>{o.d(Z,{g:()=>y});var v=o(4650),t=o(7185);let y=(()=>{class g{constructor(e){this.toastr=e}showSuccess(e,x){console.log("aqui estamos dando like o comprobando validezx de formulario"),this.toastr.warning(e,x,{positionClass:"toast-bottom-center"})}}return g.\u0275fac=function(e){return new(e||g)(v.LFG(t._W))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},9931:(O,Z,o)=>{o.d(Z,{n:()=>n});var v=o(5412),t=o(4650),y=o(4006),g=o(4859),p=o(3546);let e=(()=>{class r{constructor(i,a,f,_){this.fb=i,this.dialogRef=a,this._dialog=f,this.data=_,this.description="Localizaci\xf3n de la sepultura",this.image=this.data.sepultura}close(){this.dialogRef.close()}save(){}onNoClick(){}ngOnInit(){console.log(this.image)}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(y.QS),t.Y36(v.so),t.Y36(v.uw),t.Y36(v.WI))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-dialog"]],decls:14,vars:2,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","",3,"src"],["mat-button","",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header"),t._UZ(2,"div",1),t.TgZ(3,"mat-card-title"),t._uU(4,"Sepultado en:"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()(),t._UZ(7,"img",2),t.TgZ(8,"mat-card-content")(9,"p"),t._uU(10," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),t.qZA()(),t.TgZ(11,"mat-card-actions")(12,"button",3),t.NdJ("click",function(){return a.close()}),t._uU(13,"Cerrar"),t.qZA()()()),2&i&&(t.xp6(6),t.Oqu(a.image.sepult),t.xp6(1),t.s9C("src",a.image.url2,t.LSH))},dependencies:[g.lW,p.a8,p.dk,p.dn,p.n5,p.$j,p.hq,p.G2,p.kc],encapsulation:2}),r})();var x=o(9299),T=o(7266),c=o(7392),C=o(1481),h=o(4968),d=o(4402),m=o(7915),s=o(6895);function u(r,l){1&r&&t._UZ(0,"mat-icon",8)}function b(r,l){1&r&&t._UZ(0,"mat-icon",9)}function A(r,l){1&r&&t._UZ(0,"mat-icon",10)}let F=(()=>{class r{constructor(i,a,f,_,U,S,k){this._matIcon=i,this._domSatanizer=a,this.route=f,this._fallecidoService=_,this._authService=U,this._compartidoService=S,this.notifyService=k,this.item={id:"",name:"",apellidos:"",nacio:new Date,fallecio:"",mote:"",url:"",url2:"",sepult:"",sepulturaId:"",likes:0},this.likes=[{id:"",usuarioId:"",createdAt:"",valor:0,like:!1,updatedAt:"",fallecidoId:""}],this.contador=0,this.total=0,this.apretado=!1,this.title="",i.addSvgIcon("vela2",a.bypassSecurityTrustResourceUrl("../assets/images/icons/vela2.svg")),i.addSvgIcon("vela3",a.bypassSecurityTrustResourceUrl("../assets/images/icons/vela3.svg")),i.addSvgIcon("corazon1",a.bypassSecurityTrustResourceUrl("../assets/images/icons/corazon1.svg")),i.addSvgIcon("nacio",a.bypassSecurityTrustResourceUrl("../assets/images/icons/nacio.svg"))}ngOnInit(){this.subscription=this._compartidoService.obtenerLikes().subscribe(i=>{const a=i.filter(f=>f.fallecidoId==this.item.id);this.apretado=a.some(f=>f.usuarioId==this.usuario.uid),this.contador=a.length})}ngOnDestroy(){this.subscription?.unsubscribe()}like(){const i=localStorage.getItem("token");console.log(this.usuario),this.usuario.usuario&&i?this.apretado?(this.contador=this.contador-1,this.likes[0].fallecidoId=this.item.id,this.likes[0].usuarioId=this.usuario.uid,this.apretado=!1,this._compartidoService.borrarLikes(this.likes[0].usuarioId,this.likes[0].fallecidoId).subscribe(a=>{})):(this.contador=this.contador+1,this.likes[0].like=!0,this.likes[0].fallecidoId=this.item.id,this.likes[0].usuarioId=this.usuario.uid,this.likes[0].valor=this.contador,this.likes[0].createdAt=(new Date).toDateString(),this.likes[0].updatedAt=(new Date).toLocaleDateString(),this.apretado=!0,this._compartidoService.crearLikes(this.likes[0].usuarioId,this.likes[0].fallecidoId,this.likes[0].valor,this.likes[0].like).subscribe(a=>{})):this.notifyService.showSuccess("Para demostrar su afecto es necesario estar conectado!! Haga LogIn o Reg\xedstrese","ATENCI\xd3N")}get usuario(){return this._authService.usuario}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(c.jv),t.Y36(C.H7),t.Y36(x.F0),t.Y36(d.t),t.Y36(T.e),t.Y36(h.D),t.Y36(m.g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-crear-likes"]],inputs:{item:"item",likes:"likes",contador:"contador",apretado:"apretado"},decls:9,vars:4,consts:[["title","title",1,"likes",2,"background-color","rgb(67, 133, 150)","padding-top","5px","margin","0px","align-content","center","vertical-align","middle","text-align","center"],[3,"click"],["color","","svgIcon","vela2",2,"vertical-align","middle"],["color","warn","style","vertical-align: middle;","svgIcon","vela2",4,"ngIf"],["color","","svgIcon","vela3",2,"vertical-align","middle"],["color","warn","style","vertical-align: middle;","svgIcon","corazon1",4,"ngIf"],["color","","style","vertical-align: middle;","svgIcon","corazon1",4,"ngIf"],[2,"vertical-align","middle","font-size","medium"],["color","warn","svgIcon","vela2",2,"vertical-align","middle"],["color","warn","svgIcon","corazon1",2,"vertical-align","middle"],["color","","svgIcon","corazon1",2,"vertical-align","middle"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return a.like()}),t._UZ(2,"mat-icon",2),t.YNc(3,u,1,0,"mat-icon",3),t._UZ(4,"mat-icon",4),t.YNc(5,b,1,0,"mat-icon",5),t.YNc(6,A,1,0,"mat-icon",6),t.qZA(),t.TgZ(7,"span",7),t._uU(8),t.qZA()()),2&i&&(t.xp6(3),t.Q6J("ngIf",a.apretado),t.xp6(2),t.Q6J("ngIf",a.apretado),t.xp6(1),t.Q6J("ngIf",!a.apretado),t.xp6(2),t.hij(" ",a.contador,""))},dependencies:[s.O5,c.Hw]}),r})();var I=o(1576);const M=function(r){return["/fallecidos/editar",r]};let n=(()=>{class r{constructor(i,a,f,_,U,S){this.route=i,this._authService=a,this._matIcon=f,this._domSatanizer=_,this._dialog=U,this._compartidoService=S,this.sepulturaIndividual={},this.item={id:"",name:"",apellidos:"",nacio:new Date,fallecio:"",mote:"",url:"",url2:"",sepult:"",sepulturaId:"",likes:0},this.editarDeshabilitado=!1,this.localizaDeshabilitado=!0,this.contadorAqui=0,this.likes=[{id:"",usuarioId:"",createdAt:"",valor:0,like:!1,updatedAt:"",fallecidoId:""}],this.total=0,this.apretado=!1,f.addSvgIcon("cruz_2",_.bypassSecurityTrustResourceUrl("../assets/images/icons/cruz_2.svg")),f.addSvgIcon("nacio",_.bypassSecurityTrustResourceUrl("../assets/images/icons/nacio.svg")),f.addSvgIcon("nacio_2",_.bypassSecurityTrustResourceUrl("../assets/images/icons/nacio_2.svg"))}ngOnInit(){const i=this.item.url;if(this.posicion=i?.indexOf("/upload"),console.log(this.posicion),-1===this.posicion);else{const f=i?.substring(0,this.posicion+7);console.log(f);const _=i?.substring(this.posicion+7);console.log(_);const U=f+"/q_20"+_;console.log(U),this.item.url=U}}verSepultura(){let i;screen.width<600?(i=this._dialog.open(e,{maxWidth:"95vw",width:"400px",height:"500px",maxHeight:"120vw",data:{sepultura:this.sepulturaIndividual}}),i.afterClosed().subscribe(a=>{console.log("The dialog was closed"),console.log(a)})):(i=this._dialog.open(e,{width:"500px",height:"700px",maxHeight:"150vw",data:{sepultura:this.sepulturaIndividual}}),i.afterClosed().subscribe(a=>{console.log("The dialog was closed"),console.log(a)}))}get usuario(){return this._authService.usuario}navegar(){this.route.navigateByUrl(`fallecidos/${this.item.id}`)}ngOnDestroy(){this.subscription?.unsubscribe()}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(x.F0),t.Y36(T.e),t.Y36(c.jv),t.Y36(C.H7),t.Y36(v.uw),t.Y36(h.D))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-fallecidos-tarjeta"]],inputs:{sepulturaIndividual:"sepulturaIndividual",item:"item",editarDeshabilitado:"editarDeshabilitado",localizaDeshabilitado:"localizaDeshabilitado",likes:"likes"},decls:36,vars:20,consts:[["fxLayout","row wrap",1,"container","box-embossed"],[1,"hijo1"],[1,"img"],[3,"src","click"],[1,"hijo2"],["svgIcon","nacio_2",2,"vertical-align","middle","height","18px"],["svgIcon","cruz_2",2,"vertical-align","middle","height","20px"],[3,"likes","apretado","contador","item"],[1,"hijo3",2,"text-align","center"],["mat-stroked-button","","color","warn",1,"mas",2,"margin","5px",3,"disabled","click"],["mat-stroked-button","","color","warn",1,"mas",2,"margin","5px",3,"click"],["mat-stroked-button","","color","primary",1,"edit",3,"disabled","routerLink"]],template:function(i,a){1&i&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"img",3),t.NdJ("click",function(){return a.navegar()}),t.qZA()()(),t.TgZ(4,"div",4)(5,"mat-card-header")(6,"mat-card-title"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-subtitle"),t._uU(9),t.qZA()(),t.TgZ(10,"mat-card-content")(11,"small")(12,"small"),t._UZ(13,"mat-icon",5),t.qZA(),t._uU(14),t.ALo(15,"date"),t.qZA(),t._UZ(16,"br"),t.TgZ(17,"small")(18,"small"),t._UZ(19,"mat-icon",6),t.qZA(),t._uU(20),t.ALo(21,"date"),t.qZA()()(),t._UZ(22,"br")(23,"hr"),t.TgZ(24,"div",4),t._UZ(25,"app-crear-likes",7),t.qZA(),t._UZ(26,"hr")(27,"br"),t.TgZ(28,"div",8)(29,"mat-card-actions")(30,"button",9),t.NdJ("click",function(){return a.verSepultura()}),t._uU(31," Localizaci\xf3n "),t.qZA(),t.TgZ(32,"button",10),t.NdJ("click",function(){return a.navegar()}),t._uU(33," Ver m\xe1s... "),t.qZA(),t.TgZ(34,"button",11),t._uU(35," Editar "),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("src",a.item.url,t.LSH),t.xp6(4),t.Oqu(a.item.name),t.xp6(2),t.Oqu(a.item.apellidos),t.xp6(5),t.hij(" ",t.xi3(15,12,a.item.nacio,"dd-MM-yyyy")," "),t.xp6(6),t.hij(" ",t.xi3(21,15,a.item.fallecio,"dd-MM-yyyy")," "),t.xp6(5),t.Q6J("likes",a.likes)("apretado",a.apretado)("contador",a.contadorAqui)("item",a.item),t.xp6(5),t.Q6J("disabled",a.localizaDeshabilitado),t.xp6(4),t.Q6J("disabled",a.editarDeshabilitado)("routerLink",t.VKq(18,M,a.item.id)))},dependencies:[F,g.lW,c.Hw,p.a8,p.dk,p.dn,p.n5,p.$j,p.hq,I.xw,x.rH,s.uU],styles:['mat-card[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px;padding:0}mat-card-content[_ngcontent-%COMP%]{padding-top:5px;color:#0c0c0c;align-items:center;align-self:center;text-align:center;max-width:100%}mat-card-header[_ngcontent-%COMP%]{background-color:#68a7ad;color:#fff;height:100%;width:100%;text-align:center;vertical-align:middle}.container[_ngcontent-%COMP%]{background-color:#99c4c8;width:100%}mat-card-title[_ngcontent-%COMP%]{margin:0;padding-top:10px;line-height:16px;text-align:center;vertical-align:middle;max-width:100%}mat-card-subtitle[_ngcontent-%COMP%]{padding-top:2px;line-height:15px;text-align:center;vertical-align:middle;max-width:100%}div[_ngcontent-%COMP%]{width:100%}small[_ngcontent-%COMP%]{align-content:center;max-width:100%}.wigdings[_ngcontent-%COMP%]{font:"Wingdins"}mat-card[_ngcontent-%COMP%]{background:#464141;margin-top:10px}.img[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}img[_ngcontent-%COMP%]{min-width:50px;max-width:100%;max-height:180px;border-radius:30px;border:1px solid #4e6f90;box-shadow:inset 0 0 5px #000c;padding:3px}.hijo1[_ngcontent-%COMP%]{order:0;flex:1 1 auto;align-self:center}.hijo2[_ngcontent-%COMP%]{order:0;flex:1 1 auto;align-self:center;align-items:center}.hijo3[_ngcontent-%COMP%]{text-align:center;order:0;flex:1 1 auto;align-self:center}.mas[_ngcontent-%COMP%]{border-bottom:#f1ecec;border-color:#0c0c0c;color:#0c0c0c}button[_ngcontent-%COMP%]{max-width:90%}.box-embossed[_ngcontent-%COMP%]{border:1px solid #4e6f90;box-shadow:inset 0 0 5px #000c;padding:10px;border-radius:10px}.estilo-x[_ngcontent-%COMP%]{font-size:calc(1em + 1vw)}@media screen and (max-width: 600px){.mat-card-title[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%]{font-size:110%;align-content:center;text-align:center;margin:0%;padding:0%}}.mat-card-header[_ngcontent-%COMP%]{padding:0%;margin-left:0;justify-content:center}']}),r})()},6706:(O,Z,o)=>{o.d(Z,{t:()=>h});var v=o(4004),t=o(4650),y=o(4968),g=o(6895),p=o(3848),e=o(1576);let x=(()=>{class d{transform(s,u){return s.sort((b,A)=>b[u]<A[u]?-1:b[u]>A[u]?1:0)}}return d.\u0275fac=function(s){return new(s||d)},d.\u0275pipe=t.Yjl({name:"sortAntiguo",type:d,pure:!0}),d})();function T(d,m){if(1&d&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&d){const s=t.oxw();t.xp6(1),t.hij(" ",s.message,"")}}function c(d,m){if(1&d&&(t.TgZ(0,"div")(1,"mat-tab",5)(2,"div")(3,"table",6)(4,"colgroup"),t._UZ(5,"col")(6,"col")(7,"col")(8,"col")(9,"col"),t.qZA(),t.TgZ(10,"thead")(11,"tr")(12,"th"),t._uU(13," Nombre y apellidos "),t.qZA(),t.TgZ(14,"th"),t._uU(15," Fecha Defunci\xf3n "),t.qZA(),t.TgZ(16,"th"),t._uU(17," Fecha Entierro "),t.qZA(),t.TgZ(18,"th"),t._uU(19," Hora de Misa "),t.qZA(),t.TgZ(20,"th"),t._uU(21," Sepelio "),t.qZA()()(),t.TgZ(22,"tbody")(23,"tr")(24,"td",7),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"date"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.ALo(31,"date"),t.qZA(),t.TgZ(32,"td"),t._uU(33),t.qZA(),t.TgZ(34,"td"),t._uU(35),t.qZA()()()()()()()),2&d){const s=m.index,u=t.oxw(2);t.xp6(1),t.MGl("label","Entierro ",s+1,""),t.xp6(24),t.AsE("",u.muertosFuturos[u.i+s].nombre," ",u.muertosFuturos[u.i+s].apellidos," "),t.xp6(2),t.Oqu(t.xi3(28,7,u.muertosFuturos[u.i+s].fecha_defuncion,"dd-MM-yyyy")),t.xp6(3),t.Oqu(t.xi3(31,10,u.muertosFuturos[u.i+s].fecha_entierro,"dd-MM-yyyy")),t.xp6(3),t.Oqu(u.muertosFuturos[u.i+s].hora_entierro),t.xp6(2),t.Oqu(u.muertosFuturos[u.i+s].local_sepelio)}}function C(d,m){if(1&d&&(t.TgZ(0,"div",2)(1,"div",3)(2,"mat-tab-group"),t.YNc(3,c,36,13,"div",4),t.ALo(4,"sortAntiguo"),t.qZA()()()),2&d){const s=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.xi3(4,1,s.muertosFuturos,"fecha_entierro"))}}let h=(()=>{class d{constructor(s){this._compartidoService=s,this.muertosFuturos=[],this.arrayFuturos=[],this.i=0,this.pos=0,this.Entierro1=!1,this.message="",this.noHayEntierro=!1,this._compartidoService.obtenerFuturos().pipe((0,v.U)(u=>{console.log(u);let b=new Date;this.arrayFuturos=u.filter(A=>{let F=new Date(A.fecha_entierro);return console.log(this.arrayFuturos),console.log(F),F.toISOString().split("T"),console.log(F),F>=b}),this.muertosFuturos=this.arrayFuturos,console.log(this.muertosFuturos)})).subscribe(u=>{0==this.muertosFuturos.length&&(this.noHayEntierro=!0,this.message="No hay entierros previstos")})}ngOnInit(){}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(y.D))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-futuros"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["hayEntierro",""],["fxLayout","row","fxLayoutAlign","end","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","0px"],["fxFlex","100"],[4,"ngFor","ngForOf"],[3,"label"],[1,"table","table","table-success","table-striped"],[1,"letra"]],template:function(s,u){if(1&s&&(t.YNc(0,T,2,1,"div",0),t.YNc(1,C,5,4,"ng-template",null,1,t.W1O)),2&s){const b=t.MAs(2);t.Q6J("ngIf",u.noHayEntierro)("ngIfElse",b)}},dependencies:[g.sg,g.O5,p.SP,p.uX,e.xw,e.SQ,e.Wh,e.yH,g.uU,x],styles:[".table[_ngcontent-%COMP%]   colgroup[_ngcontent-%COMP%]   col[_ngcontent-%COMP%]:nth-child(2){background-color:red}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(caption) > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:#2d4a50}.table-success[_ngcontent-%COMP%]{--bs-table-bg: #d1e7dd;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:#fff;border-color:#bcd0c7}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;font-style:normal;font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:400;font-stretch:normal;font-size:10px;line-height:20px;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:12px}"]}),d})()},5110:(O,Z,o)=>{o.d(Z,{J:()=>C});var v=o(3900),t=o(4650),y=o(9299),g=o(4402),p=o(6895),e=o(1576),x=o(9931);function T(h,d){1&h&&(t.TgZ(0,"div"),t._UZ(1,"br"),t._uU(2,"Estamos trabajando para "),t._UZ(3,"br"),t._uU(4,"actualizar esta informaci\xf3n"),t._UZ(5,"br"),t._uU(6," ..."),t.qZA())}function c(h,d){if(1&h&&(t.TgZ(0,"div",6),t._UZ(1,"app-fallecidos-tarjeta",7),t.qZA()),2&h){const m=d.$implicit,s=t.oxw();t.xp6(1),t.Q6J("item",m)("editarDeshabilitado",s.boton_editar)}}let C=(()=>{class h{constructor(m,s){this.activatedRoute=m,this.fallecidosService=s,this.fallecido={id:"",name:"",apellidos:"",nacio:new Date,fallecio:"",mote:"",url:"",url2:"",sepult:"",sepulturaId:"",likes:0},this.idDeFallecido=0,this.actualizando=!1,this.relacionados=[],this.boton_editar=!1}ngOnInit(){this.activatedRoute.params.pipe((0,v.w)(({id:m})=>this.fallecidosService.obtenerMuertoPorId(m))).subscribe(m=>{this.fallecido=m,console.log(m),console.log(this.fallecido.id,this.fallecido.sepult),this.idDeFallecido=Number(this.fallecido.id),this.fallecidosService.obtenerRelacionados(this.idDeFallecido,this.fallecido.sepult,this.fallecido.sepulturaId).subscribe(s=>{console.log(s);const u=s.filter(b=>b.id!=m.id);console.log(this.fallecido),this.relacionados=u,console.log(s.length),0==this.relacionados.length&&(this.actualizando=!0),console.log(u),console.log(this.relacionados)})})}}return h.\u0275fac=function(m){return new(m||h)(t.Y36(y.gz),t.Y36(g.t))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-relacionados"]],inputs:{boton_editar:"boton_editar"},decls:9,vars:3,consts:[["fxLayout","row wrap","fxLayoutAlign","start start","fxLayoutGap","5px",2,"margin-top","5px","margin-left","5px"],["fxFlex","100","fxLayoutAlign","center",2,"background","rgb(0, 4, 22)","border-top-right-radius","50px"],[2,"margin-top","5px","padding","15px","text-align","center"],[2,"height","100%","width","100%","background","red","text-align","center","margin-right","53px","display","flex","justify-content","center","align-items","center"],[4,"ngIf"],["fxFlex","100","fxFlex.xl","31.5","fxFlex.lg","32","fxFlex.md","42","fxFlex.sm","23","fxFlex.xs","37","fxLayoutGap","10px","fxLayoutAlign","space-around center",4,"ngFor","ngForOf"],["fxFlex","100","fxFlex.xl","31.5","fxFlex.lg","32","fxFlex.md","42","fxFlex.sm","23","fxFlex.xs","37","fxLayoutGap","10px","fxLayoutAlign","space-around center"],[3,"item","editarDeshabilitado"]],template:function(m,s){1&m&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Sepultados en "),t._UZ(4,"br"),t._uU(5),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,T,7,0,"div",4),t.qZA(),t.YNc(8,c,2,2,"div",5),t.qZA()),2&m&&(t.xp6(5),t.hij("la misma ubicaci\xf3n que ",s.fallecido.name,""),t.xp6(2),t.Q6J("ngIf",s.actualizando),t.xp6(1),t.Q6J("ngForOf",s.relacionados))},dependencies:[p.sg,p.O5,e.xw,e.SQ,e.Wh,e.yH,x.n],encapsulation:2}),h})()},460:(O,Z,o)=>{o.r(Z),o.d(Z,{SharedModule:()=>M});var v=o(6895),t=o(3161),y=o(9814),g=o(9299),p=o(4998),e=o(4650);let x=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-temporal"]],decls:6,vars:0,consts:[[2,"height","100%","background","red","display","flex","justify-content","center","align-items","center"]],template:function(l,i){1&l&&(e.TgZ(0,"div",0),e._UZ(1,"br"),e.TgZ(2,"div"),e._uU(3,"Estamos trabajando para "),e._UZ(4,"br"),e._uU(5,"actualizar esta informaci\xf3n..."),e.qZA()())},encapsulation:2}),n})();var T=o(6706),c=o(4006),C=o(4968);let h=(()=>{class n{constructor(l,i){this.fb=l,this._compartidoService=i,this.miFormulario=this.fb.group({nombre:["",[c.kI.required]],apellidos:["",[c.kI.required]],defuncion:["",[c.kI.required]],entierro:["",[c.kI.required]],hora:["",[c.kI.required]],sepelio:["",[c.kI.required]]})}ngOnInit(){}guardar(){this._compartidoService.crearFuturosEntierros(this.miFormulario.value.nombre,this.miFormulario.value.apellidos,this.miFormulario.value.defuncion,this.miFormulario.value.entierro,this.miFormulario.value.hora,this.miFormulario.value.sepelio).subscribe(l=>{console.log("enviado con exito")}),console.log(this.miFormulario.value.nombre,this.miFormulario.value.apellidos,this.miFormulario.value.defuncion,this.miFormulario.value.entierro,this.miFormulario.value.hora,this.miFormulario.value.sepelio)}}return n.\u0275fac=function(l){return new(l||n)(e.Y36(c.QS),e.Y36(C.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-anyadir-fut"]],decls:46,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","nombre",1,"form-label"],["type","text","id","nombre","aria-describedby","emailHelp","formControlName","nombre",1,"form-control"],["id","textoAviso",1,"form-text"],["for","apellidos",1,"form-label"],["type","text","formControlName","apellidos","id","apellidos",1,"form-control"],["for","hora",1,"form-label"],["type","text","formControlName","hora","id","hora",1,"form-control"],[1,"form-label"],[1,"form-check"],["type","radio","formControlName","sepelio","id","tanaAspe","value","Tanatorio Virgen de las Nieves",1,"form-check-input"],["for","tanaAspe",1,"form-check-label"],["type","radio","formControlName","sepelio","id","basilica","value","Basilica del Socorro",1,"form-check-input"],["for","basilica",1,"form-check-label"],["type","radio","formControlName","sepelio","id","buenPastor","value","Iglesia del Buen Pastor",1,"form-check-input"],["for","buenPastor",1,"form-check-label"],["type","radio","formControlName","sepelio","id","domicilio","value","Domicilio",1,"form-check-input"],["for","domicilio",1,"form-check-label"],["for","defuncion",1,"form-label"],["type","date","formControlName","defuncion","id","defuncion",1,"form-control"],["for","entierro",1,"form-label"],["type","date","formControlName","entierro","id","entierro",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"]],template:function(l,i){1&l&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.guardar()}),e.TgZ(1,"div",1)(2,"label",2),e._uU(3,"Nombre"),e.qZA(),e._UZ(4,"input",3),e.TgZ(5,"div",4),e._uU(6,"Solamente nombre sin apellidos."),e.qZA()(),e.TgZ(7,"div",1)(8,"label",5),e._uU(9,"Apellidos"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"div",1)(12,"label",7),e._uU(13,"Hora del Entierro"),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"div",1),e._UZ(16,"hr"),e.TgZ(17,"label",9),e._uU(18,"Local del Sepelio"),e.qZA(),e.TgZ(19,"div",10),e._UZ(20,"input",11),e.TgZ(21,"label",12),e._uU(22," Tanatorio Virgen de las Nieves "),e.qZA()(),e.TgZ(23,"div",10),e._UZ(24,"input",13),e.TgZ(25,"label",14),e._uU(26," Basilica del Socorro "),e.qZA()(),e.TgZ(27,"div",10),e._UZ(28,"input",15),e.TgZ(29,"label",16),e._uU(30," Iglesia del Buen Pastor "),e.qZA()(),e.TgZ(31,"div",10),e._UZ(32,"input",17),e.TgZ(33,"label",18),e._uU(34," Domicilio "),e.qZA()()(),e._UZ(35,"hr"),e.TgZ(36,"div",1)(37,"label",19),e._uU(38,"Fecha de Defunci\xf3n"),e.qZA(),e._UZ(39,"input",20),e.qZA(),e.TgZ(40,"div",1)(41,"label",21),e._uU(42,"Fecha de Entierro"),e.qZA(),e._UZ(43,"input",22),e.qZA(),e.TgZ(44,"button",23),e._uU(45,"Enviar datos"),e.qZA()()),2&l&&e.Q6J("formGroup",i.miFormulario)},dependencies:[c._Y,c.Fj,c._,c.JJ,c.JL,c.sg,c.u]}),n})();var d=o(5110);const s=[{path:"",component:p.O,children:[{path:"temporal",component:x},{path:"futuros",component:T.t},{path:"anadir",component:h},{path:"relacion",component:d.J},{path:"borrar",component:(()=>{class n{constructor(l,i){this.fb=l,this._compartidoService=i,this.otro=this.fb.group({id:["",[c.kI.required]]})}ngOnInit(){}guardar(){this._compartidoService.borrarFuturosEntierros(this.otro.value.id).subscribe(l=>{console.log("enviado con exito"),console.log(this.otro.value.id)})}}return n.\u0275fac=function(l){return new(l||n)(e.Y36(c.qu),e.Y36(C.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-borrar-fut"]],decls:7,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","id",1,"form-label"],["type","text","formControlName","id","id","id",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"]],template:function(l,i){1&l&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.guardar()}),e.TgZ(1,"div",1)(2,"label",2),e._uU(3,"Id"),e.qZA(),e._UZ(4,"input",3),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Enviar datos "),e.qZA()()),2&l&&e.Q6J("formGroup",i.otro)},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u]}),n})()}]}];let u=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(s),g.Bz]}),n})();var b=o(9638);const A=[];let F=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(A),g.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.ez,t.q,y.o9,F]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.ez,I,t.q,y.o9,g.Bz,u,b.ComentariosModule]}),n})()}}]);