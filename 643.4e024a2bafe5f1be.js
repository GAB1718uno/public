"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[643,775],{4643:(_,U,a)=>{a.r(U),a.d(U,{SepulturasModule:()=>I});var Z=a(9808),m=a(1083),b=a(4998),t=a(5e3),i=a(3075),u=a(1326),p=a(2564),s=a(7423);function d(o,l){if(1&o&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.AsE("",e.calle,", ",e.numero,"")}}let g=(()=>{class o{constructor(e,n,c){this.fb=e,this._sepulturaService=n,this._compartidoService=c,this.avatar="",this.nombreFile="",this.items=[{}],this.formUbicacion=this.fb.group({id:[""],calle:[""],numero:[""],avatar:[""],tipo:[""]})}ngOnInit(){}imagenSeleccionada(e){this.imagenSubir=e.target.files[0],console.log(this.imagenSubir)}uploadFile(){console.log(this.nombreFile);const{id:e,calle:n,numero:c,tipo:S}=this.formUbicacion.value;this._compartidoService.uploadFile(e,n,c,S,this.imagenSubir).subscribe(T=>console.log(T))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(u.M),t.Y36(p.D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-agregar-sep"]],decls:43,vars:3,consts:[[1,"mb-3","row"],["autocomplete","off",3,"formGroup"],["for","tipo"],["formControlName","tipo"],["tipo",""],["selected",""],["for","Calle"],["formControlName","calle"],["calle",""],[4,"ngFor","ngForOf"],["for","calle"],["type","text","placeholder","Escriba el nombre de la calle","formControlName","calle",1,"form-control"],["for","numero"],["type","text","placeholder","Digite el numero","formControlName","numero",1,"form-control"],["numero",""],["for","imagen"],["type","file",3,"change"],["mat-stroked-button","","color","warn",1,"mas",2,"margin","5px",3,"click"],[1,"image",2,"max-width","400px",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"label",2),t._uU(3,"Tipo"),t.qZA(),t.TgZ(4,"select",3,4),t.TgZ(6,"option"),t._uU(7,"Fallecidos"),t.qZA(),t.TgZ(8,"option",5),t._uU(9,"Sepulturas"),t.qZA(),t.TgZ(10,"option"),t._uU(11,"Usuarios"),t.qZA(),t.qZA(),t._UZ(12,"br"),t._UZ(13,"br"),t.TgZ(14,"label",6),t._uU(15,"Encontrar Calle"),t.qZA(),t.TgZ(16,"select",7,8),t.YNc(18,d,2,2,"option",9),t._UZ(19,"div"),t.qZA(),t._UZ(20,"br"),t._UZ(21,"hr"),t.TgZ(22,"label",10),t._uU(23,"Calle: "),t.qZA(),t._UZ(24,"input",11,8),t._UZ(26,"br"),t._UZ(27,"br"),t.TgZ(28,"label",12),t._uU(29,"Numero: "),t.qZA(),t._UZ(30,"input",13,14),t._UZ(32,"br"),t.TgZ(33,"label",15),t._uU(34,"Fotografia: "),t.qZA(),t.TgZ(35,"input",16),t.NdJ("change",function(S){return n.imagenSeleccionada(S)}),t.qZA(),t._UZ(36,"br"),t._UZ(37,"hr"),t.TgZ(38,"button",17),t.NdJ("click",function(){return n.uploadFile()}),t._uU(39,"Mandar"),t.qZA(),t.qZA(),t._UZ(40,"br"),t._UZ(41,"br"),t._UZ(42,"img",18),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.formUbicacion),t.xp6(17),t.Q6J("ngForOf",n.items),t.xp6(24),t.s9C("src",n.avatar,t.LSH))},directives:[i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,i.YN,i.Kr,Z.sg,i.Fj,s.lW],styles:[""]}),o})();var h=a(7093),v=a(2340),f=a(9224);const r=function(o){return["/sepulturas/editarsep/",o]};let x=(()=>{class o{constructor(e,n){this._sepulturaSerice=e,this.route=n,this.seps={},this.sepulturas=[],this.baseUrl=v.N.baseUrl,this.imagenUrlSep=`${this.baseUrl}/uploads/sepulturas/`}ngOnInit(){this._sepulturaSerice.obtenerSepulturas().subscribe(e=>{console.log(e),this.sepulturas=e})}editar(e){this.route.navigateByUrl(`/sepulturas/editarsep/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.M),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sepulturas-tarjeta"]],inputs:{seps:"seps"},decls:15,vars:7,consts:[["fxLayout","row wrap",1,"container"],[1,"hijo1"],[1,"img"],[3,"src"],[1,"hijo2"],[1,"hijo3"],["mat-raised-button","","color","primary",1,"edit",3,"routerLink"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"mat-card-header"),t.TgZ(6,"mat-card-title"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-subtitle"),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"div",5),t.TgZ(12,"mat-card-actions"),t.TgZ(13,"button",6),t._uU(14," Editar "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hYB("src","",n.imagenUrlSep,"",n.seps.avatar,"",t.LSH),t.xp6(4),t.Oqu(n.seps.calle),t.xp6(2),t.Oqu(n.seps.numero),t.xp6(4),t.Q6J("routerLink",t.VKq(5,r,n.seps.id)))},directives:[f.a8,h.xw,f.dk,f.n5,f.$j,f.hq,s.lW,m.rH],styles:["mat-card[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px;padding:0}mat-card-content[_ngcontent-%COMP%]{padding-top:5px;color:#0c0c0c;align-items:center;align-self:center;text-align:center;max-width:100%}mat-card-header[_ngcontent-%COMP%]{background-color:#68a7ad;color:#fff;height:100%;width:100%;text-align:center;vertical-align:middle}.container[_ngcontent-%COMP%]{background-color:#99c4c8;width:100%}mat-card-title[_ngcontent-%COMP%]{margin:0;padding-top:10px;line-height:16px;text-align:center;vertical-align:middle;max-width:100%}mat-card-subtitle[_ngcontent-%COMP%]{padding-top:2px;line-height:15px;text-align:center;vertical-align:middle;max-width:100%}mat-card-actions[_ngcontent-%COMP%]{padding-top:2px;line-height:15px;text-align:center;vertical-align:middle;max-width:100%}small[_ngcontent-%COMP%]{align-content:center;max-width:100%}div[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{background:#464141;margin-top:10px}.img[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}img[_ngcontent-%COMP%]{min-width:50px;max-width:100%;max-height:360px;border-radius:30px}.hijo1[_ngcontent-%COMP%], .hijo2[_ngcontent-%COMP%]{order:0;flex:1 1 auto;align-self:center}.hijo3[_ngcontent-%COMP%]{text-align:center;order:0;flex:1 1 auto;align-self:center}.mas[_ngcontent-%COMP%]{border-bottom:#f1ecec;border-color:#0c0c0c;color:#0c0c0c}button[_ngcontent-%COMP%]{max-width:90%}.container[_ngcontent-%COMP%]{width:100%;margin-left:4px;padding:1px}"]}),o})();function C(o,l){if(1&o&&(t.TgZ(0,"div",2),t._UZ(1,"app-sepulturas-tarjeta",3),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Q6J("seps",e)}}let M=(()=>{class o{constructor(e,n){this._sepulturaSerice=e,this.route=n,this.item=[],e.obtenerSepulturas().subscribe(c=>{this.item=c})}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.M),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-mostrar-sep"]],decls:2,vars:1,consts:[["fxLayout","row wrap","fxFlexAlignContent","space-between","fxLayoutAlign","space-between start","fxLayoutGap","1.5px",2,"margin-top","5px","margin-left","5px"],["fxFlex.xl","20","fxFlex.lg","22","fxFlex.md","33","fxFlex.sm","45","fxFlex.xs","48",4,"ngFor","ngForOf"],["fxFlex.xl","20","fxFlex.lg","22","fxFlex.md","33","fxFlex.sm","45","fxFlex.xs","48"],[3,"seps"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,2,1,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.item))},directives:[h.xw,h.Wh,h.SQ,Z.sg,h.yH,x],styles:[""]}),o})();var y=a(3900),F=a(7261);function O(o,l){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",16),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hYB("src","",e.imagenUrlSep,"",e.sepultura.avatar,"",t.LSH)}}function E(o,l){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",16),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.s9C("src",e.capturado1,t.LSH)}}let P=(()=>{class o{constructor(e,n,c,S,T,R){this._activatedRoute=e,this._snackBar=n,this._sepulturaService=c,this._compartidoService=S,this.fb=T,this.route=R,this.sepultura={id:"",calle:"",numero:"",avatar:"",tipo:""},this.imagenBD=!0,this.baseUrl=v.N.baseUrl,this.capturado1="",this.imagenUrlSep=`${this.baseUrl}/uploads/sepulturas/`,this.imagenUrl=`${this.baseUrl}/uploads/${this.sepultura.tipo}/${this.sepultura.avatar}`,this.formUbicacion=this.fb.group({id:[""],calle:[""],numero:[""],avatar:[""],tipo:[""],createdAt:[""],updatedAt:[""]}),this._activatedRoute.params.pipe((0,y.w)(({id:A})=>this._sepulturaService.obtenerSepultura(A))).subscribe(A=>{this.sepultura=A,this.formUbicacion.setValue(this.sepultura),console.log(this.formUbicacion)})}imagenSeleccionada(e){this.imagenSubir=e.target.files[0],this.capturado1=`/assets/images/${this.imagenSubir.name}`,this.imagenBD=!1,console.log(e.target.files[0]),console.log(this.imagenSubir.name)}actualizar(){const{calle:e,numero:n,tipo:c}=this.formUbicacion.value;this._compartidoService.updateSep(this.sepultura.id,e,n,c,this.imagenSubir).subscribe(S=>console.log(S))}eliminar(){this._sepulturaService.eliminarSepultura(this.sepultura.id).subscribe(e=>{console.log("Sepultura borrada")})}crearNueva(){const{calle:e,numero:n,tipo:c}=this.formUbicacion.value;this._compartidoService.uploadFile(this.sepultura.id,e,n,c,this.imagenSubir).subscribe(S=>console.log(S)),this.mostrarSnack("Sepultura Creada con exito"),this.route.navigateByUrl("/sepulturas/mostrarsep")}mostrarSnack(e){this._snackBar.open(e,"Cerrar",{duration:5e3})}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.gz),t.Y36(F.ux),t.Y36(u.M),t.Y36(p.D),t.Y36(i.qu),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-editar-sep"]],inputs:{sepultura:"sepultura",imagenSubir:"imagenSubir",imagenBD:"imagenBD"},decls:41,vars:3,consts:[[1,"mb-3","row"],["autocomplete","off",3,"formGroup"],["for","tipo"],["formControlName","tipo"],["tipo",""],["selected",""],["for","calle"],["type","text","placeholder","Teclee la calle","formControlName","calle",1,"form-control"],["calle",""],["for","numero"],["type","text","placeholder","Digite el numero","formControlName","numero",1,"form-control"],["numero",""],["for","imagen"],["type","file",3,"change"],["mat-stroked-button","","color","warn",1,"mas",2,"margin","5px",3,"click"],[4,"ngIf"],["alt","...",1,"card-img-top",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"label",2),t._uU(3,"Tipo"),t.qZA(),t.TgZ(4,"select",3,4),t.TgZ(6,"option"),t._uU(7,"Fallecidos"),t.qZA(),t.TgZ(8,"option",5),t._uU(9,"Sepulturas"),t.qZA(),t.TgZ(10,"option"),t._uU(11,"Usuarios"),t.qZA(),t.qZA(),t._UZ(12,"br"),t._UZ(13,"hr"),t.TgZ(14,"label",6),t._uU(15,"Calle: "),t.qZA(),t._UZ(16,"input",7,8),t._UZ(18,"br"),t.TgZ(19,"label",9),t._uU(20,"Numero: "),t.qZA(),t._UZ(21,"input",10,11),t._UZ(23,"br"),t.TgZ(24,"label",12),t._uU(25,"Fotografia: "),t.qZA(),t.TgZ(26,"input",13),t.NdJ("change",function(S){return n.imagenSeleccionada(S)}),t.qZA(),t._UZ(27,"br"),t._UZ(28,"hr"),t.TgZ(29,"button",14),t.NdJ("click",function(){return n.actualizar()}),t._uU(30,"Actualizar"),t.qZA(),t._uU(31," | "),t.TgZ(32,"button",14),t.NdJ("click",function(){return n.eliminar()}),t._uU(33,"Eliminar"),t.qZA(),t._uU(34," | "),t.TgZ(35,"button",14),t.NdJ("click",function(){return n.crearNueva()}),t._uU(36,"Crear Nueva"),t.qZA(),t.qZA(),t._UZ(37,"br"),t._UZ(38,"br"),t.YNc(39,O,2,2,"div",15),t.YNc(40,E,2,1,"div",15),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.formUbicacion),t.xp6(38),t.Q6J("ngIf",n.imagenBD),t.xp6(1),t.Q6J("ngIf",!n.imagenBD))},directives:[i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,i.YN,i.Kr,i.Fj,s.lW,Z.O5],styles:[""]}),o})();var B=a(4402);const L=[{path:"",component:b.O,children:[{path:"mostrarsep",component:M},{path:"agregarsep",component:g},{path:"editarsep/:id",component:P},{path:"sepultura",component:(()=>{class o{constructor(e,n,c){this._fallecidosService=e,this._activatedRoute=n,this._sepulturaService=c,this.items={}}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(B.t),t.Y36(m.gz),t.Y36(u.M))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sepultura"]],decls:2,vars:0,consts:[["src",""]],template:function(e,n){1&e&&(t._UZ(0,"hr"),t._UZ(1,"img",0))},styles:["img[_ngcontent-%COMP%]{width:100%;border-radius:10px}"]}),o})()}]}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(L)],m.Bz]}),o})();var D=a(9121),J=a(7775),Y=a(2155),j=a(5113);let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Z.ez,N,i.UX,D.q,J.SharedModule,i.u5,Y.o9,j.xu]]}),o})()},1326:(_,U,a)=>{a.d(U,{M:()=>t});var Z=a(2340),m=a(5e3),b=a(520);let t=(()=>{class i{constructor(p){this.http=p,this.baseUrl=Z.N.baseUrl}obtenerSepultura(p){return this.http.get(`${this.baseUrl}/sepulturas/${p}`)}obtenerSepulturas(){return this.http.get(`${this.baseUrl}/sepulturas`)}eliminarSepultura(p){return this.http.delete(`${this.baseUrl}/sepulturas/${p}`)}editarSepultura(p){return this.http.get(`${this.baseUrl}/sepulturas/${p}`)}}return i.\u0275fac=function(p){return new(p||i)(m.LFG(b.eN))},i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},2564:(_,U,a)=>{a.d(U,{D:()=>i});var Z=a(2340),m=a(4004),b=a(5e3),t=a(520);let i=(()=>{class u{constructor(s){this.http=s,this.baseUrl=Z.N.baseUrl}get files(){return Object.assign({},this._files)}updateSep(s,d,g,h,v){const f=`${this.baseUrl}/sepulturas/${s}`,r=new FormData;return r.append("id",s),r.append("file",v),r.append("calle",d),r.append("numero",g),r.append("tipo",h),this.http.put(f,r,{headers:{"x-token":localStorage.getItem("token")||""}})}uploadFile(s,d,g,h,v){const f=`${this.baseUrl}/sepulturas`,r=new FormData;return r.append("file",v),r.append("calle",d),r.append("numero",g),r.append("tipo",h),this.http.post(f,r,{headers:{"Content-Type":"multipart/form-data","x-token":localStorage.getItem("token")||""}})}obtenerImagen(s,d){return this.http.get(`${this.baseUrl}/uploads/${s}/${d}`).pipe((0,m.U)(g=>{console.log(g)}))}updatFile(s){return console.log(s),this.http.put(`${this.baseUrl}/sepulturas/${s}`,s)}crearLikes(s,d,g,h){return this.http.post(`${this.baseUrl}/likes/`,{usuarioId:s,fallecidoId:d,valor:g,like:h})}borrarLikes(s,d){const g=`${this.baseUrl}/likes/${d}/${s}`;return console.log(d),this.http.delete(g)}obtenerLikes(){return console.log(),this.http.get(`${this.baseUrl}/likes/`)}obtenerLikesIndividuales(s){return console.log(),this.http.get(`${this.baseUrl}/likes/${s}`)}}return u.\u0275fac=function(s){return new(s||u)(b.LFG(t.eN))},u.\u0275prov=b.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},7775:(_,U,a)=>{a.r(U),a.d(U,{SharedModule:()=>f});var Z=a(9808),m=a(9121),b=a(2155),t=a(1083),i=a(4998),u=a(5e3);const p=[{path:"",component:i.O,children:[]}];let s=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[t.Bz.forChild(p)],t.Bz]}),r})();var d=a(9638);const g=[];let h=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[t.Bz.forChild(g)],t.Bz]}),r})(),v=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[Z.ez,m.q,b.o9,h]]}),r})(),f=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[Z.ez,v,m.q,b.o9,t.Bz,s,d.ComentariosModule]]}),r})()}}]);