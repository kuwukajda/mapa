"use strict";(self.webpackChunkweb_mzima_client=self.webpackChunkweb_mzima_client||[]).push([[927],{8927:(le,L,i)=>{i.r(L),i.d(L,{RolesModule:()=>C});var l=i(52954),r=i(93557),Q=i(95432),M=i(94626),T=i(37661),J=i(33695),I=i(1620),c=i(40930),f=i(81547),k=i(89857),N=i(31415),g=i(4540),e=i(39609),_=i(20117),Y=i(53886),h=i(59132),m=i(49119),U=i(51167),Z=i(53625),q=i(6469),y=i(952),D=i(93149);function F(n,o){if(1&n&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,t.isUpdate?"role.edit_role":"role.add_role"))}}function E(n,o){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t)," ")}}function w(n,o){if(1&n&&(e.ynx(0),e.YNc(1,E,3,3,"mat-error",7),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",null==t?null:t.error_messages)}}function z(n,o){if(1&n&&(e.ynx(0),e.YNc(1,w,2,1,"ng-container",0),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngIf","name"===(null==t?null:t.field))}}function P(n,o){if(1&n&&(e.TgZ(0,"mat-list-option",17),e._uU(1),e.qZA()),2&n){const t=o.$implicit,a=e.oxw(2);e.Q6J("value",t.name)("selected",t.checked)("disabled",!!a.isUpdate&&a.userRole===a.role.name)("data-qa",t.test),e.xp6(1),e.hij(" ",t.name," ")}}function $(n,o){1&n&&e._UZ(0,"div",18)}function H(n,o){1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"translate"),e.BQk()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"role.delete")))}function B(n,o){1&n&&e._UZ(0,"mat-icon",21)}function j(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"mzima-client-button",19),e.NdJ("buttonClick",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.deleteRole())}),e.YNc(1,H,3,3,"ng-container",0),e.YNc(2,B,1,0,"mat-icon",20),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("iconOnly",!t.isDesktop)("data-qa","btn-delete-role"),e.xp6(1),e.Q6J("ngIf",t.isDesktop),e.xp6(1),e.Q6J("ngIf",!t.isDesktop)}}function G(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"translate"),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,1,t.isUpdate?"app.update_and_close":"app.save_and_close"))}}function K(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"translate"),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,1,t.isUpdate?"app.update":"app.save"))}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"form",3),e.NdJ("ngSubmit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.save())}),e.TgZ(1,"div",4)(2,"mat-label"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"mat-form-field",5)(6,"input",6),e.NdJ("ngModelChange",function(s){e.CHM(t);const p=e.oxw();return e.KtG(p.setName(s))}),e.ALo(7,"translate"),e.qZA()(),e.YNc(8,z,2,1,"ng-container",7),e.qZA(),e.TgZ(9,"div",4)(10,"mat-label"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"mat-form-field",5),e._UZ(14,"input",8),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"div",4)(17,"mat-label"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"p",9),e.ALo(21,"translate"),e.TgZ(22,"mat-selection-list",10),e.NdJ("ngModelChange",function(s){e.CHM(t);const p=e.oxw();return e.KtG(p.selectedItems(s))}),e.YNc(23,P,2,5,"mat-list-option",11),e.qZA()(),e.YNc(24,$,1,0,"div",12),e.TgZ(25,"div",13)(26,"div"),e.YNc(27,j,3,4,"mzima-client-button",14),e.qZA(),e.TgZ(28,"div")(29,"mzima-client-button",15),e.NdJ("buttonClick",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.navigateToRoles())}),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"mzima-client-button",16),e.YNc(33,G,3,3,"ng-container",0),e.YNc(34,K,3,3,"ng-container",0),e.qZA()()()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.form),e.xp6(3),e.Oqu(e.lcZ(4,18,"role.name")),e.xp6(3),e.s9C("placeholder",e.lcZ(7,20,"role.placeholder.name")),e.xp6(2),e.Q6J("ngForOf",t.formErrors),e.xp6(3),e.Oqu(e.lcZ(12,22,"role.description")),e.xp6(3),e.s9C("placeholder",e.lcZ(15,24,"role.placeholder.description")),e.xp6(4),e.Oqu(e.lcZ(19,26,"role.permissions")),e.xp6(2),e.Q6J("innerHTML",e.lcZ(21,28,"settings.roles.roles_description"),e.oJD),e.xp6(2),e.Q6J("data-qa","role-permissions-list"),e.xp6(1),e.Q6J("ngForOf",t.permissionsList),e.xp6(1),e.Q6J("ngIf",!t.isDesktop),e.xp6(3),e.Q6J("ngIf",t.isUpdate&&!(null!=t.role&&t.role.protected)),e.xp6(2),e.Q6J("data-qa","btn-cancel-role"),e.xp6(1),e.hij(" ",e.lcZ(31,30,"app.cancel")," "),e.xp6(2),e.Q6J("disabled",t.form.invalid||t.isFormOnSubmit)("data-qa","btn-save-role"),e.xp6(1),e.Q6J("ngIf",t.isDesktop),e.xp6(1),e.Q6J("ngIf",!t.isDesktop)}}function W(n,o){1&n&&e._UZ(0,"app-spinner",22)}let x=class S{route;router;fb;rolesService;permissionsService;confirmModalService;translate;breakpointService;location;changeDetectorRef;isDesktop$;permissionsList=[];role;isUpdate=!1;userRole;form;isDesktop=!1;formErrors=[];isFormOnSubmit=!1;constructor(o,t,a,s,p,d,b,u,se,ae){this.route=o,this.router=t,this.fb=a,this.rolesService=s,this.permissionsService=p,this.confirmModalService=d,this.translate=b,this.breakpointService=u,this.location=se,this.changeDetectorRef=ae,this.isDesktop$=this.breakpointService.isDesktop$.pipe((0,_.t)(this)),this.isDesktop$.subscribe({next:re=>{this.isDesktop=re}}),this.form=this.fb.group({display_name:["",[r.kI.required]],description:[""],permissions:[[],[r.kI.required]],id:[null],protected:[!1]})}ngOnInit(){this.userRole=localStorage.getItem(`${m.X2.o.LOCAL_STORAGE_PREFIX}role`)||"",this.isUpdate=!!this.route.snapshot.paramMap.get("id");const o=this.route.snapshot.paramMap.get("id")||"",t=this.rolesService.getRoleById(o),a=this.permissionsService.getPermissions();(0,Y.a)([t,a]).subscribe({next:([s,p])=>{if(this.role=s.result,this.permissionsList=p.results.map(d=>({name:d.name,checked:!1,test:d.name.replace(" ","-").toLowerCase()})),this.isUpdate){this.fillInForm(this.role);for(const d of this.role.permissions)this.permissionsList.reduce((b,u)=>u.name===d?[...b,u.checked=!0]:[...b,u],[]);this.changeDetectorRef.detectChanges()}},error:s=>console.log(s)})}setName(o){this.form.patchValue({name:o.toLowerCase()})}fillInForm(o){this.form.patchValue({id:o.id,display_name:o.display_name,description:o.description,protected:o.protected,url:o.url,permissions:o.permissions}),this.changeDetectorRef.detectChanges()}navigateToRoles(){this.isDesktop?this.router.navigate(["settings/roles"]):this.location.back()}save(){this.isFormOnSubmit=!0;const o=this.form.value;this.isUpdate?(o.name=this.role.name,this.rolesService.updateRole(this.role.id,o).subscribe({next:()=>this.navigateToRoles(),error:({error:t})=>{this.formErrors=t.errors.failed_validations,this.isFormOnSubmit=!1}})):(delete o.id,o.name=o.display_name,this.rolesService.post(o).subscribe({next:()=>this.navigateToRoles(),error:({error:t})=>{this.formErrors=t.errors.failed_validations,this.isFormOnSubmit=!1}}))}deleteRole(){var o=this;return(0,N.Z)(function*(){!(yield o.confirmModalService.open({title:o.translate.instant("role.are_you_sure_you_want_to_delete_role",{roleName:o.role.display_name}),description:o.translate.instant("app.action_cannot_be_undone")}))||(yield o.delete())})()}delete(){var o=this;return(0,N.Z)(function*(){o.rolesService.deleteRole(o.role.id).subscribe({next:()=>o.navigateToRoles(),error:t=>console.log(t)})})()}selectedItems(o){o.includes("Delete Their Own Posts")&&(o.find(t=>"Edit Their Own Posts"===t)||(o.push("Edit Their Own Posts"),this.form.patchValue({permissions:o})))}static \u0275fac=function(t){return new(t||S)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(r.qu),e.Y36(m.fu),e.Y36(m.qQ),e.Y36(U.h),e.Y36(f.sK),e.Y36(h.r),e.Y36(l.Ye),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:S,selectors:[["app-role-item"]],decls:4,vars:3,consts:[[4,"ngIf"],["class","form","novalidate","",3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["spinner",""],["novalidate","",1,"form",3,"formGroup","ngSubmit"],[1,"form-row"],["appearance","outline"],["matInput","","formControlName","display_name",3,"placeholder","ngModelChange"],[4,"ngFor","ngForOf"],["matInput","","formControlName","description",3,"placeholder"],[3,"innerHTML"],["formControlName","permissions",3,"data-qa","ngModelChange"],["color","primary","class","list-option","checkboxPosition","before",3,"value","selected","disabled","data-qa",4,"ngFor","ngForOf"],["class","form-controls-spacer",4,"ngIf"],[1,"form-controls-panel","form-controls-panel--sticky"],["color","danger","class","delete-btn",3,"iconOnly","data-qa","buttonClick",4,"ngIf"],["fill","outline","color","secondary",3,"data-qa","buttonClick"],["type","submit",3,"disabled","data-qa"],["color","primary","checkboxPosition","before",1,"list-option",3,"value","selected","disabled","data-qa"],[1,"form-controls-spacer"],["color","danger",1,"delete-btn",3,"iconOnly","data-qa","buttonClick"],["icon","","svgIcon","delete",4,"ngIf"],["icon","","svgIcon","delete"],[1,"spinner"]],template:function(t,a){if(1&t&&(e.YNc(0,F,3,3,"h1",0),e.YNc(1,X,35,32,"form",1),e.YNc(2,W,1,0,"ng-template",null,2,e.W1O)),2&t){const s=e.MAs(3);e.Q6J("ngIf",a.isDesktop),e.xp6(1),e.Q6J("ngIf",a.permissionsList.length)("ngIfElse",s)}},dependencies:[l.sg,l.O5,Z.zL,Z.xG,q.O,T.Hw,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,y.TO,y.KE,y.hX,J.Nt,I.Ub,I.vS,D.r,f.X$],styles:["h1[_ngcontent-%COMP%]{margin-bottom:32px}.form-controls-panel[_ngcontent-%COMP%]{justify-content:space-between}.form-controls-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}@media only screen and (max-width: 1024px){.delete-button[_ngcontent-%COMP%]{padding:0;display:flex;height:48px;min-width:64px;align-items:center;flex-direction:column;justify-content:center;box-shadow:inset 0 0 0 1px var(--color-neutral-60)!important}}.spinner[_ngcontent-%COMP%]{display:block;margin:20vh auto}"]})};function V(n,o){1&n&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"app.roles")))}x=(0,g.gn)([(0,_.c)(),(0,g.w6)("design:paramtypes",[c.gz,c.F0,r.qu,m.fu,m.qQ,U.h,f.sK,h.r,l.Ye,e.sBO])],x);const ee=function(n){return["update",n]};function te(n,o){if(1&n&&(e.TgZ(0,"a",6),e.ALo(1,"lowercase"),e._uU(2),e.qZA()),2&n){const t=o.$implicit;e.Q6J("routerLink",e.VKq(5,ee,t.id))("data-qa",e.lcZ(1,3,"btn-"+t.display_name)),e.xp6(2),e.hij(" ",t.display_name," ")}}const oe=function(){return["create"]};let R=class A{rolesService;breakpointService;isDesktop$;roleResponse$;constructor(o,t){this.rolesService=o,this.breakpointService=t,this.isDesktop$=this.breakpointService.isDesktop$.pipe((0,_.t)(this))}ngOnInit(){this.getRoles()}getRoles(){this.roleResponse$=this.rolesService.getRoles()}static \u0275fac=function(t){return new(t||A)(e.Y36(m.fu),e.Y36(h.r))};static \u0275cmp=e.Xpm({type:A,selectors:[["app-roles"]],decls:11,vars:12,consts:[[1,"form-head-panel"],[4,"ngIf"],[3,"routerLink","data-qa"],["icon","","svgIcon","plus"],[1,"roles"],["matRipple","","class","role-item",3,"routerLink","data-qa",4,"ngFor","ngForOf"],["matRipple","",1,"role-item",3,"routerLink","data-qa"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,V,3,3,"h1",1),e.ALo(2,"async"),e.TgZ(3,"mzima-client-button",2)(4,"span"),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"mat-icon",3),e.qZA()(),e.TgZ(8,"div",4),e.YNc(9,te,3,7,"a",5),e.ALo(10,"async"),e.qZA()),2&t){let s;e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,a.isDesktop$)),e.xp6(2),e.Q6J("routerLink",e.DdM(11,oe))("data-qa","btn-add-role"),e.xp6(2),e.Oqu(e.lcZ(6,7,"role.add_role")),e.xp6(4),e.Q6J("ngForOf",null==(s=e.lcZ(10,9,a.roleResponse$))?null:s.results)}},dependencies:[l.sg,l.O5,c.rH,c.yS,Z.xG,T.Hw,M.wG,D.r,l.Ov,l.i8,f.X$],styles:["@media only screen and (max-width: 1024px){.form-head-panel[_ngcontent-%COMP%]{display:flex;margin-bottom:24px;justify-content:flex-end}}.roles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -4px -24px;justify-content:flex-start}@media only screen and (max-width: 1366px){.roles[_ngcontent-%COMP%]{margin-bottom:-16px}}.role-item[_ngcontent-%COMP%]{display:flex;font-size:20px;min-height:74px;font-weight:700;line-height:1.28;padding:8px 24px;margin:0 4px 24px;text-align:center;border-radius:8px;align-items:center;text-decoration:none;flex-direction:column;justify-content:center;color:var(--color-black);width:calc(33.3333% - 8px);background:var(--color-neutral-10)}@media only screen and (max-width: 1366px){.role-item[_ngcontent-%COMP%]{font-size:18px;margin-bottom:16px}}@media only screen and (max-width: 1024px){.role-item[_ngcontent-%COMP%]{width:calc(50% - 8px)}}@media only screen and (max-width: 768px){.role-item[_ngcontent-%COMP%]{width:calc(100% - 8px)}}"]})};R=(0,g.gn)([(0,_.c)(),(0,g.w6)("design:paramtypes",[m.fu,h.r])],R);const ne=[{path:"",component:R},{path:"update/:id",component:x,data:{breadcrumb:"Update role"}},{path:"create",component:x,data:{breadcrumb:"Create role"}}];class v{static \u0275fac=function(t){return new(t||v)};static \u0275mod=e.oAB({type:v});static \u0275inj=e.cJS({imports:[c.Bz.forChild(ne),c.Bz]})}var ie=i(17733);class C{static \u0275fac=function(t){return new(t||C)};static \u0275mod=e.oAB({type:C});static \u0275inj=e.cJS({imports:[l.ez,v,c.Bz,f.aw,Q.ot,k.Z6,k.Fm,T.Ps,M.si,r.UX,J.c,I.ie,ie.e]})}}}]);
//# sourceMappingURL=927.0125d60ebf75d2ca.js.map