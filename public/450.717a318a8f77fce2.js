"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[450,469],{3450:(A,U,r)=>{r.r(U),r.d(U,{SepulturasModule:()=>L});var v=r(9808),g=r(4996),S=r(4998),t=r(5e3),n=r(3075),u=r(1326),p=r(2564),a=r(7423);function m(o,s){if(1&o&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.AsE("",e.calle,", ",e.numero,"")}}let f=(()=>{class o{constructor(e,i,h){this.fb=e,this._sepulturaService=i,this._compartidoService=h,this.avatar="",this.nombreFile="",this.items=[{}],this.formUbicacion=this.fb.group({id:[""],calle:[""],numero:[""],avatar:[""],tipo:[""]})}ngOnInit(){this._sepulturaService.obtenerSepulturas().subscribe(e=>{this.items=e,console.log(this.items)})}imagenSeleccionada(e){this.imagenSubir=e.target.files[0],console.log(this.imagenSubir)}uploadFile(){console.log(this.nombreFile);const{id:e,calle:i,numero:h,tipo:b}=this.formUbicacion.value;this._compartidoService.uploadFile(e,i,h,b,this.imagenSubir).subscribe(C=>console.log(C))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(u.M),t.Y36(p.D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-agregar-sep"]],decls:43,vars:4,consts:[[1,"mb-3","row"],["autocomplete","off",3,"formGroup"],["for","tipo"],["formControlName","tipo"],["tipo",""],["selected",""],["for","Calle"],["formControlName","calle"],["calle",""],[4,"ngFor","ngForOf"],["for","calle"],["type","text","formControlName","calle",1,"form-control",3,"placeholder"],["for","numero"],["type","text","placeholder","Digite el numero","formControlName","numero",1,"form-control"],["numero",""],["for","imagen"],["type","file",3,"change"],["mat-stroked-button","","color","warn",1,"mas",2,"margin","5px",3,"click"],[1,"image",2,"max-width","400px",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"label",2),t._uU(3,"Tipo"),t.qZA(),t.TgZ(4,"select",3,4),t.TgZ(6,"option"),t._uU(7,"Fallecidos"),t.qZA(),t.TgZ(8,"option",5),t._uU(9,"Sepulturas"),t.qZA(),t.TgZ(10,"option"),t._uU(11,"Usuarios"),t.qZA(),t.qZA(),t._UZ(12,"br"),t._UZ(13,"br"),t.TgZ(14,"label",6),t._uU(15,"Encontrar Calle"),t.qZA(),t.TgZ(16,"select",7,8),t.YNc(18,m,2,2,"option",9),t._UZ(19,"div"),t.qZA(),t._UZ(20,"br"),t._UZ(21,"hr"),t.TgZ(22,"label",10),t._uU(23,"Calle: "),t.qZA(),t._UZ(24,"input",11,8),t._UZ(26,"br"),t._UZ(27,"br"),t.TgZ(28,"label",12),t._uU(29,"Numero: "),t.qZA(),t._UZ(30,"input",13,14),t._UZ(32,"br"),t.TgZ(33,"label",15),t._uU(34,"Fotografia: "),t.qZA(),t.TgZ(35,"input",16),t.NdJ("change",function(b){return i.imagenSeleccionada(b)}),t.qZA(),t._UZ(36,"br"),t._UZ(37,"hr"),t.TgZ(38,"button",17),t.NdJ("click",function(){return i.uploadFile()}),t._uU(39,"Mandar"),t.qZA(),t.qZA(),t._UZ(40,"br"),t._UZ(41,"br"),t._UZ(42,"img",18),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",i.formUbicacion),t.xp6(17),t.Q6J("ngForOf",i.items),t.xp6(6),t.s9C("placeholder",i.items[0].calle),t.xp6(18),t.s9C("src",i.avatar,t.LSH))},directives:[n._Y,n.JL,n.sg,n.EJ,n.JJ,n.u,n.YN,n.Kr,v.sg,n.Fj,a.lW],styles:[""]}),o})();var l=r(2340),c=r(9224),Z=r(7093);const d=function(o){return["/sepulturas/editarsep/",o]};let T=(()=>{class o{constructor(e,i){this._sepulturaSerice=e,this.route=i,this.seps={},this.sepulturas=[],this.imagenUrl=[],this.baseUrl=l.N.baseUrl}ngOnInit(){this._sepulturaSerice.obtenerSepulturas().subscribe(e=>{console.log(e),this.sepulturas=e,this.imagenUrl=`${this.baseUrl}/uploads/`})}editar(e){this.route.navigateByUrl(`/sepulturas/editarsep/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.M),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sepulturas-tarjeta"]],inputs:{seps:"seps"},decls:15,vars:6,consts:[["fxLayout","row wrap",1,"container"],[1,"hijo1"],[1,"img"],[3,"src"],[1,"hijo2"],[1,"hijo3"],["mat-raised-button","","color","primary",1,"edit",3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"mat-card-header"),t.TgZ(6,"mat-card-title"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-subtitle"),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"div",5),t.TgZ(12,"mat-card-actions"),t.TgZ(13,"button",6),t._uU(14," Editar "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.MGl("src","http://localhost:3000/api/uploads/sepulturas/",i.seps.avatar,"",t.LSH),t.xp6(4),t.Oqu(i.seps.calle),t.xp6(2),t.Oqu(i.seps.numero),t.xp6(4),t.Q6J("routerLink",t.VKq(4,d,i.seps.id)))},directives:[c.a8,Z.xw,c.dk,c.n5,c.$j,c.hq,a.lW,g.rH],styles:["mat-card[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px;padding:0}mat-card-content[_ngcontent-%COMP%]{padding-top:5px;color:#0c0c0c;align-items:center;align-self:center;text-align:center;max-width:100%}mat-card-header[_ngcontent-%COMP%]{background-color:#68a7ad;color:#fff;height:100%;width:100%;text-align:center;vertical-align:middle}.container[_ngcontent-%COMP%]{background-color:#99c4c8;width:100%}mat-card-title[_ngcontent-%COMP%]{margin:0;padding-top:10px;line-height:16px;text-align:center;vertical-align:middle;max-width:100%}mat-card-subtitle[_ngcontent-%COMP%]{padding-top:2px;line-height:15px;text-align:center;vertical-align:middle;max-width:100%}mat-card-actions[_ngcontent-%COMP%]{padding-top:2px;line-height:15px;text-align:center;vertical-align:middle;max-width:100%}small[_ngcontent-%COMP%]{align-content:center;max-width:100%}div[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{background:#464141;margin-top:10px}.img[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}img[_ngcontent-%COMP%]{min-width:50px;max-width:100%;max-height:360px;border-radius:30px}.hijo1[_ngcontent-%COMP%], .hijo2[_ngcontent-%COMP%]{order:0;flex:1 1 auto;align-self:center}.hijo3[_ngcontent-%COMP%]{text-align:center;order:0;flex:1 1 auto;align-self:center}.mas[_ngcontent-%COMP%]{border-bottom:#f1ecec;border-color:#0c0c0c;color:#0c0c0c}button[_ngcontent-%COMP%]{max-width:90%}.container[_ngcontent-%COMP%]{width:100%;margin-left:4px;padding:1px}"]}),o})();function M(o,s){if(1&o&&(t.TgZ(0,"div",2),t._UZ(1,"app-sepulturas-tarjeta",3),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("seps",e)}}let _=(()=>{class o{constructor(e,i){this._sepulturaSerice=e,this.route=i,this.item=[],e.obtenerSepulturas().subscribe(h=>{this.item=h})}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.M),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-mostrar-sep"]],decls:2,vars:1,consts:[["fxLayout","row wrap","fxFlexAlignContent","space-between","fxLayoutAlign","space-between start","fxLayoutGap","1.5px",2,"margin-top","5px","margin-left","5px"],["fxFlex","30",4,"ngFor","ngForOf"],["fxFlex","30"],[3,"seps"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,M,2,1,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.item))},directives:[v.sg,T],styles:[""]}),o})();var x=r(3900);const F=[{path:"",component:S.O,children:[{path:"mostrarsep",component:_},{path:"agregarsep",component:f},{path:"editarsep/:id",component:(()=>{class o{constructor(e,i,h,b){this._activatedRoute=e,this._sepulturaService=i,this._compartidoService=h,this.fb=b,this.sepultura={id:"",calle:"",numero:"",avatar:"",tipo:""},this.baseUrl="http://167.71.36.17:3000/api",this.imagenUrl=`${this.baseUrl}/uploads/${this.sepultura.tipo}/${this.sepultura.avatar}`,this.formUbicacion=this.fb.group({id:[""],calle:[""],numero:[""],avatar:[""],tipo:[""],createdAt:[""],updatedAt:[""]}),this._activatedRoute.params.pipe((0,x.w)(({id:C})=>this._sepulturaService.obtenerSepultura(C))).subscribe(C=>{this.sepultura=C,this.formUbicacion.setValue(this.sepultura),console.log(this.formUbicacion)})}imagenSeleccionada(e){this.imagenSubir=e.target.files[0],console.log(this.imagenSubir)}actualizar(){const{calle:e,numero:i,tipo:h}=this.formUbicacion.value;this._compartidoService.updateSep(this.sepultura.id,e,i,h,this.imagenSubir).subscribe(b=>console.log(b))}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.gz),t.Y36(u.M),t.Y36(p.D),t.Y36(n.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-editar-sep"]],decls:34,vars:2,consts:[[1,"mb-3","row"],["autocomplete","off",3,"formGroup"],["for","tipo"],["formControlName","tipo"],["tipo",""],["for","calle"],["type","text","placeholder","Teclee la calle","formControlName","calle",1,"form-control"],["calle",""],["for","numero"],["type","text","placeholder","Digite el numero","formControlName","numero",1,"form-control"],["numero",""],["for","imagen"],["type","file",3,"change"],["mat-stroked-button","","color","warn",1,"mas",2,"margin","5px",3,"click"],["alt","...",1,"card-img-top",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"label",2),t._uU(3,"Tipo"),t.qZA(),t.TgZ(4,"select",3,4),t.TgZ(6,"option"),t._uU(7,"Fallecidos"),t.qZA(),t.TgZ(8,"option"),t._uU(9,"Sepulturas"),t.qZA(),t.TgZ(10,"option"),t._uU(11,"Usuarios"),t.qZA(),t.qZA(),t._UZ(12,"br"),t._UZ(13,"hr"),t.TgZ(14,"label",5),t._uU(15,"Calle: "),t.qZA(),t._UZ(16,"input",6,7),t._UZ(18,"br"),t.TgZ(19,"label",8),t._uU(20,"Numero: "),t.qZA(),t._UZ(21,"input",9,10),t._UZ(23,"br"),t.TgZ(24,"label",11),t._uU(25,"Fotografia: "),t.qZA(),t.TgZ(26,"input",12),t.NdJ("change",function(b){return i.imagenSeleccionada(b)}),t.qZA(),t._UZ(27,"br"),t._UZ(28,"hr"),t.TgZ(29,"button",13),t.NdJ("click",function(){return i.actualizar()}),t._uU(30,"Actualizar"),t.qZA(),t.qZA(),t._UZ(31,"br"),t._UZ(32,"br"),t._UZ(33,"img",14),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",i.formUbicacion),t.xp6(32),t.MGl("src","http://localhost:3000/api/uploads/sepulturas/",i.sepultura.avatar,"",t.LSH))},directives:[n._Y,n.JL,n.sg,n.EJ,n.JJ,n.u,n.YN,n.Kr,n.Fj,a.lW],styles:[""]}),o})()}]}];let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(F)],g.Bz]}),o})();var P=r(9121),$=r(1469);let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.ez,E,n.UX,P.q,$.SharedModule]]}),o})()},1326:(A,U,r)=>{r.d(U,{M:()=>t});var v=r(2340),g=r(5e3),S=r(520);let t=(()=>{class n{constructor(p){this.http=p,this.baseUrl=v.N.baseUrl}obtenerSepultura(p){return this.http.get(`${this.baseUrl}/sepulturas/${p}`)}obtenerSepulturas(){return this.http.get(`${this.baseUrl}/sepulturas`)}eliminarSepultura(p){return this.http.delete(`${this.baseUrl}/sepulturas/${p}`)}editarSepultura(p){return this.http.get(`${this.baseUrl}/sepulturas/${p}`)}}return n.\u0275fac=function(p){return new(p||n)(g.LFG(S.eN))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},2564:(A,U,r)=>{r.d(U,{D:()=>n});var v=r(2340),g=r(4004),S=r(5e3),t=r(520);let n=(()=>{class u{constructor(a){this.http=a,this.baseUrl=v.N.baseUrl}get files(){return Object.assign({},this._files)}updateSep(a,m,f,l,c){const Z=`${this.baseUrl}/sepulturas/${a}`,d=new FormData;return d.append("id",a),d.append("file",c),d.append("calle",m),d.append("numero",f),d.append("tipo",l),this.http.put(Z,d,{headers:{"x-token":localStorage.getItem("token")||""}})}uploadFile(a,m,f,l,c){const Z=`${this.baseUrl}/sepulturas`,d=new FormData;return d.append("file",c),d.append("calle",m),d.append("numero",f),d.append("tipo",l),this.http.post(Z,d,{headers:{"x-token":localStorage.getItem("token")||""}})}obtenerImagen(a,m){return this.http.get(`${this.baseUrl}/uploads/${a}/${m}`).pipe((0,g.U)(f=>{console.log(f)}))}updatFile(a){return console.log(a),this.http.put(`${this.baseUrl}/sepulturas/${a}`,a)}crearLikes(a,m,f,l){return this.http.post(`${this.baseUrl}/likes/`,{usuarioId:a,fallecidoId:m,valor:f,mensaje:l})}borrarLikes(a,m,f,l){return this.http.delete(`${this.baseUrl}/likes/${m}`,a)}obtenerLikes(){return console.log(),this.http.get(`${this.baseUrl}/likes/`)}obtenerLikesIndividuales(a){return console.log(),this.http.get(`${this.baseUrl}/likes/${a}`)}}return u.\u0275fac=function(a){return new(a||u)(S.LFG(t.eN))},u.\u0275prov=S.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1469:(A,U,r)=>{r.r(U),r.d(U,{SharedModule:()=>f});var v=r(9808),g=r(9121),S=r(2155),t=r(4996),n=r(4998),u=r(5e3);const p=[{path:"",component:n.O,children:[]}];let a=(()=>{class l{}return l.\u0275fac=function(Z){return new(Z||l)},l.\u0275mod=u.oAB({type:l}),l.\u0275inj=u.cJS({imports:[[t.Bz.forChild(p)],t.Bz]}),l})();var m=r(9638);let f=(()=>{class l{}return l.\u0275fac=function(Z){return new(Z||l)},l.\u0275mod=u.oAB({type:l}),l.\u0275inj=u.cJS({imports:[[v.ez,g.q,S.o9,t.Bz,a,m.ComentariosModule]]}),l})()}}]);