"use strict";(self.webpackChunkweb_mzima_client=self.webpackChunkweb_mzima_client||[]).push([[575],{15575:(ke,F,r)=>{r.r(F),r.d(F,{CategoriesModule:()=>T});var k=r(47288),l=r(52954),c=r(93557),E=r(95432),_=r(952),Z=r(37661),L=r(33695),w=r(56370),u=r(81547),J=r(29383),z=r(19546),j=r(19975),P=r(89857),m=r(40930),O=r(31415),p=r(49119),G=r(33646),g=r(59132),e=r(39609),Q=r(6469),f=r(53625),q=r(34408),Y=r(93149);function R(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mat-checkbox",5),e.NdJ("click",function(i){return i.stopPropagation()})("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.selectCategory(i.category))}),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("checked",t.isChecked(t.category.id))("disabled",t.isDisabled(t.category))}}const B=function(a){return{"category-item--expanded":a}};function D(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mzima-client-button",6),e.NdJ("buttonClick",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleChildren(i.category.id))})("click",function(i){return i.stopPropagation()}),e.ALo(1,"translate"),e._UZ(2,"mat-icon",7),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("iconOnly",!0)("ariaLabel",e.lcZ(1,4,"Expand or collapse "+t.category.tag))("data-qa","toggle-children"),e.xp6(2),e.Q6J("ngClass",e.VKq(6,B,t.displayChildren))}}const K=function(a){return["/settings/categories",a]};class h{category;customClass;isCheckbox;displayChildren;selectedCategories=[];selected=new e.vpe;toggle=new e.vpe;selectCategory(n){this.selected.emit(n)}isChecked(n){return this.selectedCategories.findIndex(t=>t.id===n)>=0}isDisabled(n){return!(!n.parent_id||!this.isChecked(n.parent_id))}toggleChildren(n){this.toggle.emit(n)}hasChildren(n){return n.children.length>0}static \u0275fac=function(t){return new(t||h)};static \u0275cmp=e.Xpm({type:h,selectors:[["app-category-item"]],inputs:{category:"category",customClass:"customClass",isCheckbox:"isCheckbox",displayChildren:"displayChildren",selectedCategories:"selectedCategories"},outputs:{selected:"selected",toggle:"toggle"},decls:6,vars:8,consts:[[1,"category-item",3,"routerLink"],[1,"category-item__title"],["class","category-item__checkbox",3,"checked","disabled","click","change",4,"ngIf"],[3,"routerLink","ngClass"],["class","category-item--expand","fill","clear","color","secondary",3,"iconOnly","ariaLabel","data-qa","buttonClick","click",4,"ngIf"],[1,"category-item__checkbox",3,"checked","disabled","click","change"],["fill","clear","color","secondary",1,"category-item--expand",3,"iconOnly","ariaLabel","data-qa","buttonClick","click"],["svgIcon","arrow-down",1,"category-item__arrow",3,"ngClass"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,R,1,2,"mat-checkbox",2),e.TgZ(3,"h4",3),e._uU(4),e.qZA()(),e.YNc(5,D,3,8,"mzima-client-button",4),e.qZA()),2&t&&(e.Q6J("routerLink",e.VKq(6,K,o.category.id)),e.xp6(2),e.Q6J("ngIf",o.isCheckbox),e.xp6(1),e.Q6J("routerLink",o.category.id.toString())("ngClass",o.customClass),e.xp6(1),e.hij(" ",o.category.tag," "),e.xp6(1),e.Q6J("ngIf",null==o.category.children?null:o.category.children.length))},dependencies:[l.mk,l.O5,m.rH,Z.Hw,J.oG,f.xG,Y.r,u.X$],styles:[".category-item[_ngcontent-%COMP%]{z-index:1;padding:13.5px 16px;display:flex;justify-content:space-between;transition:background-color .35s ease;background:var(--color-neutral-10);margin-bottom:8px;border:1px solid var(--color-neutral-20);border-radius:4px;cursor:pointer}.category-item--selected[_ngcontent-%COMP%]{background:var(--color-primary-90)}.category-item__checkbox[_ngcontent-%COMP%]{font-size:14px}.category-item__content[_ngcontent-%COMP%]{flex:1 1 100%}.category-item__title[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.category-item__title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px;line-height:28px;font-weight:700}.category-item__title--lvl2[_ngcontent-%COMP%]{font-weight:400}.category-item__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;vertical-align:top;display:inline-block;text-decoration:none;transition:color .35s ease}.category-item__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--color-primary-60)}.category-item__controls[_ngcontent-%COMP%]{margin-inline-start:24px}.category-item__expand[_ngcontent-%COMP%]{overflow:visible}.category-item__arrow[_ngcontent-%COMP%]{transition:transform .35s ease}.category-item--expanded[_ngcontent-%COMP%]{transform:rotate(180deg)}"]})}const $=["categoryItem"];function H(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"li",7)(1,"app-category-item",13,9),e.NdJ("selected",function(i){e.CHM(t);const s=e.oxw(5);return e.KtG(s.selectCategory(i))}),e.ALo(3,"lowercase"),e.qZA()()}if(2&a){const t=n.$implicit,o=e.oxw(5);e.xp6(1),e.Q6J("isCheckbox",o.isShowActions)("category",t)("data-qa",e.lcZ(3,5,t.slug.split(" ").join("-")+"-("+t.parent.slug+")"))("customClass","category-item__title--lvl2")("selectedCategories",o.selectedCategories)}}function V(a,n){if(1&a&&(e.TgZ(0,"ul",11),e.YNc(1,H,4,7,"li",12),e.qZA()),2&a){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngForOf",t.children)}}function X(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"li",7)(1,"app-category-item",8,9),e.NdJ("selected",function(i){e.CHM(t);const s=e.oxw(3);return e.KtG(s.selectCategory(i))})("toggle",function(i){e.CHM(t);const s=e.oxw(3);return e.KtG(s.toggleChildren(i))}),e.ALo(3,"lowercase"),e.qZA(),e.YNc(4,V,2,1,"ul",10),e.qZA()}if(2&a){const t=e.oxw().$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("category",t)("data-qa",e.lcZ(3,6,t.slug.split(" ").join("-")))("isCheckbox",o.isShowActions)("displayChildren",o.displayChildren(t.id))("selectedCategories",o.selectedCategories),e.xp6(3),e.Q6J("ngIf",(null==t.children?null:t.children.length)&&o.displayChildren(t.id))}}function W(a,n){if(1&a&&(e.ynx(0),e.YNc(1,X,5,8,"li",6),e.BQk()),2&a){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf",!t.parent_id)}}function ee(a,n){if(1&a&&(e.TgZ(0,"ul",4),e.YNc(1,W,2,1,"ng-container",5),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.categories)}}function te(a,n){1&a&&e._UZ(0,"app-spinner",14)}class C{categoriesService;confirmModalService;translate;notificationService;categoryItems;categories;selectedCategories=[];isShowActions=!1;openedParents=[];constructor(n,t,o,i){this.categoriesService=n,this.confirmModalService=t,this.translate=o,this.notificationService=i,this.getCategories()}getCategories(){this.categoriesService.get().subscribe({next:n=>{this.categories=n.results}})}displayChildren(n){return!!this.isShowActions||this.openedParents.includes(n)}toggleChildren(n){const t=this.openedParents.indexOf(n);t>-1?this.openedParents.splice(t,1):this.openedParents.push(n)}deleteCategories(){var n=this;return(0,O.Z)(function*(){const t=n.confirmationMessages();!(yield n.confirmModalService.open({title:t.title,description:t.description,confirmButtonText:n.translate.instant("app.yes_delete"),cancelButtonText:n.translate.instant("app.no_go_back")}))||(0,G.D)(n.selectedCategories.map(i=>n.categoriesService.delete(i.id))).subscribe({complete:()=>{n.getCategories(),n.selectedCategories=[],n.notificationService.showError(t.toast)}})})()}confirmationMessages(){const n=this.selectedCategories.length>1,t=this.selectedCategories.length;return{title:this.getMessage("destroy_confirm",n,t),description:this.getMessage("destroy_confirm_desc",n,t),toast:this.getMessage("destroy_success",n,t)}}getMessage(n,t=!1,o){return this.translate.instant(`notify.category.${t?"bulk_":""}${n}`,void 0!==o?{count:o}:{})}showActions(n){this.isShowActions=n,n||(this.selectedCategories=[])}selectCategory(n){const t=this.selectedCategories.findIndex(o=>o.id===n.id);t<0?this.selectedCategories.push(n):this.selectedCategories=this.selectedCategories.filter(o=>o.id!==n.id),n.children.length&&n.children.forEach(o=>{t<0?this.selectedCategories.findIndex(s=>s.id===o.id)<0&&this.selectedCategories.push(o):this.selectedCategories=this.selectedCategories.filter(i=>i.id!==o.id)})}static \u0275fac=function(t){return new(t||C)(e.Y36(p.GD),e.Y36(g.hP),e.Y36(u.sK),e.Y36(g.gq))};static \u0275cmp=e.Xpm({type:C,selectors:[["app-categories"]],viewQuery:function(t,o){if(1&t&&e.Gf($,5),2&t){let i;e.iGM(i=e.CRH())&&(o.categoryItems=i)}},decls:5,vars:5,consts:[[1,"categories"],[3,"settingsTitle","newButtonTitle","selectedItem","isShowActionsChange","deleteCall"],["class","categories-list",4,"ngIf","ngIfElse"],["spinner",""],[1,"categories-list"],[4,"ngFor","ngForOf"],["class","categories-list__item",4,"ngIf"],[1,"categories-list__item"],[3,"category","data-qa","isCheckbox","displayChildren","selectedCategories","selected","toggle"],["categoryItem",""],["class","categories-list categories-list--lvl2",4,"ngIf"],[1,"categories-list","categories-list--lvl2"],["class","categories-list__item",4,"ngFor","ngForOf"],[3,"isCheckbox","category","data-qa","customClass","selectedCategories","selected"],[1,"spinner"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"app-settings-header",1),e.NdJ("isShowActionsChange",function(s){return o.showActions(s)})("deleteCall",function(){return o.deleteCategories()}),e.qZA(),e.YNc(2,ee,2,1,"ul",2),e.qZA(),e.YNc(3,te,1,0,"ng-template",null,3,e.W1O)),2&t){const i=e.MAs(4);e.xp6(1),e.Q6J("settingsTitle","app.categories")("newButtonTitle","app.add_new_category")("selectedItem",o.selectedCategories),e.xp6(1),e.Q6J("ngIf",o.categories)("ngIfElse",i)}},dependencies:[l.sg,l.O5,Q.O,f.xG,q.v,h,l.i8],styles:[".spinner[_ngcontent-%COMP%]{display:block;margin-top:20vh;margin-bottom:20vh}.categories-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.categories-list--lvl2[_ngcontent-%COMP%]{padding-left:24px}.categories-list--lvl2[_ngcontent-%COMP%]   .categories-list__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.selected-filters[_ngcontent-%COMP%]{top:0;z-index:10;display:flex;position:sticky;padding:16px 24px;align-items:center;margin:-24px -24px 0;background:var(--color-light);justify-content:space-between;border-bottom:1px solid rgba(var(--color-light-contrast-rgb),.12)}.selected-filters[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0}.selected-filters__controls[_ngcontent-%COMP%]{display:flex;margin-left:-8px;margin-right:-8px;align-items:center;justify-content:flex-start}@media only screen and (max-width: 1024px){.selected-filters__controls[_ngcontent-%COMP%]{justify-content:flex-end}}.selected-filters__controls[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}"]})}var N=r(4540),U=r(69420),A=r(20117),S=r(10909),ne=r(31020),oe=r(74327),ae=r(45002),ie=r(94626),re=r(40436);function se(a,n){1&a&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"category.validation.required.name")," "))}function le(a,n){if(1&a&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t)," ")}}function ce(a,n){if(1&a&&(e.ynx(0),e.YNc(1,le,3,3,"mat-error",18),e.BQk()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",null==t?null:t.error_messages)}}function ge(a,n){if(1&a&&(e.ynx(0),e.YNc(1,ce,2,1,"ng-container",17),e.BQk()),2&a){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf","tag"===(null==t?null:t.field))}}function de(a,n){if(1&a&&(e.ynx(0),e.TgZ(1,"div",6)(2,"mat-label"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"mat-form-field",15),e._UZ(6,"input",16),e.ALo(7,"translate"),e.YNc(8,se,3,3,"mat-error",17),e.YNc(9,ge,2,1,"ng-container",18),e.qZA()(),e.TgZ(10,"div",6)(11,"mat-label"),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"mat-form-field",15)(15,"textarea",19),e.ALo(16,"translate"),e._uU(17,"        "),e.qZA()()(),e.BQk()),2&a){const t=e.oxw();let o;e.xp6(3),e.hij("",e.lcZ(4,8,"category.editor.name")," *"),e.xp6(3),e.s9C("placeholder",e.lcZ(7,10,"category.placeholder.name")),e.xp6(2),e.Q6J("ngIf",null==(o=t.form.get("name"))?null:o.hasError("required")),e.xp6(1),e.Q6J("ngForOf",t.formErrors),e.xp6(3),e.Oqu(e.lcZ(13,12,"category.editor.description")),e.xp6(3),e.s9C("placeholder",e.lcZ(16,14,"category.placeholder.descriptions")),e.Q6J("data-qa","description")("data-qa","description")}}function me(a,n){if(1&a&&(e.TgZ(0,"div",6)(1,"mat-label"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"mat-form-field",15),e._UZ(5,"input",20),e.qZA()(),e.TgZ(6,"div",6)(7,"mat-label"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"mat-form-field",15),e._UZ(11,"input",21),e.qZA()(),e.TgZ(12,"div",6)(13,"mat-label"),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"mat-form-field",15),e._UZ(17,"input",20),e.qZA()(),e.TgZ(18,"div",6)(19,"mat-label"),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"mat-form-field",15),e._UZ(23,"input",22),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.hij("",e.lcZ(3,8,"category.editor.name")," *"),e.xp6(3),e.Q6J("value",t.form.value.name),e.xp6(3),e.AsE("",e.lcZ(9,10,"category.editor.name"),"(",t.selectedTranslation,")"),e.xp6(6),e.Oqu(e.lcZ(15,12,"category.editor.description")),e.xp6(3),e.Q6J("value",t.form.value.description),e.xp6(3),e.AsE("",e.lcZ(21,14,"category.editor.description")," (",t.selectedTranslation,") ")}}function pe(a,n){if(1&a&&(e.TgZ(0,"mat-option",26),e.ALo(1,"lowercase"),e._uU(2),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id)("data-qa",e.lcZ(1,3,t.slug.split(" ").join("-"))),e.xp6(2),e.hij(" ",t.tag," ")}}function ue(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div",6)(1,"mat-label"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"mat-form-field",15)(5,"mat-select",23),e.NdJ("selectionChange",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.parentChanged(i))}),e.TgZ(6,"mat-option",24),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.YNc(9,pe,3,5,"mat-option",25),e.qZA()()()}if(2&a){const t=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,4,"category.parent_category")),e.xp6(3),e.Q6J("data-qa","select-parent-category"),e.xp6(2),e.Oqu(e.lcZ(8,6,"category.placeholder.choose_parent_category")),e.xp6(2),e.Q6J("ngForOf",t.categories)}}function _e(a,n){if(1&a&&e._UZ(0,"app-group-checkbox-select",27),2&a){const t=e.oxw();e.Q6J("data",t.roleOptions)}}function fe(a,n){1&a&&(e.TgZ(0,"div",28)(1,"p",29)(2,"mat-icon"),e._uU(3,"group"),e.qZA(),e._uU(4),e.ALo(5,"translate"),e.qZA()()),2&a&&(e.Q6J("data-qa","category-option"),e.xp6(4),e.hij(" ",e.lcZ(5,2,"category.child_permissions")," "))}function he(a,n){1&a&&e._UZ(0,"div",30)}function Ce(a,n){1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"translate"),e.BQk()),2&a&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"category.delete_category")))}function ye(a,n){1&a&&e._UZ(0,"mat-icon",33)}function xe(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mzima-client-button",31),e.NdJ("buttonClick",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.deleteCategoryEmit())}),e.YNc(1,Ce,3,3,"ng-container",17),e.YNc(2,ye,1,0,"mat-icon",32),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("iconOnly",!t.isDesktop)("data-qa","btn-category-delete"),e.xp6(1),e.Q6J("ngIf",t.isDesktop),e.xp6(1),e.Q6J("ngIf",!t.isDesktop)}}function ve(a,n){}let y=class M extends ne.H{sessionService;breakpointService;fb;categoriesService;rolesService;languageService;dialog;confirmModalService;translate;router;location;loading;category;formSubmit=new e.vpe;deleteCall=new e.vpe;categories;languages;defaultLanguage;activeLanguages=[];selectedTranslation;roleOptions=[];isUpdate=!1;isParent=!1;form;userRole;formErrors=[];constructor(n,t,o,i,s,d,Ae,Se,Ie,Me,Fe){super(n,t),this.sessionService=n,this.breakpointService=t,this.fb=o,this.categoriesService=i,this.rolesService=s,this.languageService=d,this.dialog=Ae,this.confirmModalService=Se,this.translate=Ie,this.router=Me,this.location=Fe,this.checkDesktop(),this.languages=this.languageService.getLanguages(),this.defaultLanguage=this.languages.find(I=>"en"===I.code),this.form=this.fb.group({id:[""],name:["",[c.kI.required,ae.Fd]],description:[""],is_child_to:[""],language:["en"],visible_to:[{value:"everyone",options:[],disabled:!1}],translations:this.fb.array([]),translate_name:[""],translate_description:[""],parent:[]}),this.categoriesService.categoryErrors$.pipe((0,A.t)(this)).subscribe(I=>{this.formErrors=I})}ngOnInit(){if(this.getUserData(),this.formSubscribe(),this.getCategories(),this.getRoles(),this.userRole=localStorage.getItem(`${p.X2.o.LOCAL_STORAGE_PREFIX}role`),this.category&&(this.isParent=!!this.category.children?.length,this.isUpdate=!!this.category,this.form.patchValue({id:this.category.id,name:this.category.tag,description:this.category.description,language:this.category.enabled_languages.default,is_child_to:this.category.parent?.id||null}),this.updateForm("visible_to",S.qs.mapRoleToVisible(this.category?.role,!!this.category.parent_id)),this.category?.translations)){const n=Object.keys(this.category?.translations).map(t=>({id:t,...this.category.translations[t]}));this.activeLanguages=this.languages.filter(t=>n.find(o=>o.id===t.code)),this.form.setControl("translations",this.fb.array(n))}this.activeLanguages.push(this.defaultLanguage)}loadData(){}ngOnDestroy(){this.categoriesService.categoryErrors.next(null)}formSubscribe(){this.form.valueChanges.pipe((0,A.t)(this)).subscribe({next:n=>{if(this.categoriesService.categoryErrors.next(null),this.defaultLanguage?.code!==n.language&&(this.defaultLanguage=this.languages.find(t=>t.code===n.language),this.selectedTranslation=this.defaultLanguage?.code,this.form.value.translations=this.form.value.translations.filter(t=>t.id!==this.defaultLanguage?.code)),this.selectedTranslation&&this.selectedTranslation!==this.defaultLanguage?.code){const t=this.form.value.translations.find(o=>o.id===this.selectedTranslation);t?(t.name=n.translate_name,t.description=n.translate_description):this.form.value.translations.push({id:this.selectedTranslation,name:n.translate_name,description:n.translate_description})}}})}getCategories(){this.categoriesService.get().subscribe({next:n=>{this.categories=n.results.filter(t=>!t.parent_id).filter(t=>t.id!==this.category?.id)}})}getRoles(){this.rolesService.getRoles().subscribe({next:n=>{this.roleOptions=S.qs.roleTransform({roles:n.results,userRole:this.userRole,onlyMe:this.translate.instant("role.only_me"),everyone:this.translate.instant("role.everyone"),specificRoles:this.translate.instant("app.specific_roles"),isShowIcons:!1}),this.category&&this.checkRoleOptions(this.category.parent?.id)}})}checkRoleOptions(n){this.roleOptions.forEach(t=>{t?.options&&t.options.forEach(o=>{this.category.role?(o.checked=this.category.role.includes(o.value),o.disabled=!!n):o.checked="admin"===o.value})})}updateForm(n,t){this.form.patchValue({[n]:t})}isRoleActive(n){return!!this.category.role&&this.category.role.indexOf(n)>-1}submit(){if(this.form.invalid)return;let n;switch(this.form.value.visible_to.value){case"only_me":n=["me"];break;case"everyone":n=null;break;default:n=this.form.value.visible_to.options}const t={user_id:Number(this.user.userId),base_language:this.form.value.language,color:"",description:this.form.value.description,enabled_languages:{default:this.form.value.language,available:[]},icon:"tag",parent:this.form.value.parent,parent_id:this.form.value.is_child_to||null,parent_id_original:this.category?.parent?.id||null,role:n,slug:this.form.value.name,tag:this.form.value.name,translations:this.form.value.translations.reduce((o,i)=>({...o,[i.id]:{name:i.name,description:i.description}}),{}),type:"category"};this.formSubmit.emit(t)}addTranslation(){this.dialog.open(oe.Rg,{width:"100%",maxWidth:576,panelClass:"modal",data:{languages:this.languages,activeLanguages:this.activeLanguages,defaultLanguage:this.defaultLanguage}}).afterClosed().subscribe({next:t=>{if(!t)return;const o=t.indexOf(this.defaultLanguage);t.splice(o,1),this.activeLanguages=[this.defaultLanguage,...t]}})}chooseTranslation(n){this.selectedTranslation=n.code;const t=this.form.controls.translations.value.find(o=>o.id===n.code);t?this.form.patchValue({translate_name:t.name,translate_description:t.description}):(this.form.controls.translate_name.setValue(""),this.form.controls.translate_description.setValue("")),"en"===n.code?this.form.controls.translate_name.clearValidators():this.form.controls.translate_name.setValidators([c.kI.required]),this.form.controls.translate_name.updateValueAndValidity()}deleteTranslation(n,t){var o=this;return(0,O.Z)(function*(){n.stopPropagation();const i=o.languages.find(d=>d.code===t);!(yield o.confirmModalService.open({title:o.translate.instant("notify.do_you_really_want_to_delete_language",{lang:i.name}),description:`<p>${o.translate.instant("notify.default.proceed_warning")}</p>`}))||(o.selectedTranslation===t&&(o.selectedTranslation=o.defaultLanguage?.code),o.activeLanguages.splice(o.activeLanguages.findIndex(d=>d.code===t),1),o.form.value.translations=o.form.value.translations.filter(d=>d.id!==t))})()}parentChanged(n){const t=this.categories.find(i=>i.id===n.value);this.updateForm("visible_to",S.qs.mapRoleToVisible(t?t?.role:null,!!t&&!!t.id)),this.checkRoleOptions(n.value),this.form.controls.parent.setValue(t)}deleteCategoryEmit(){this.deleteCall.emit(!0)}back(){this.isDesktop?this.router.navigate(["settings/categories"]):this.location.back()}static \u0275fac=function(t){return new(t||M)(e.Y36(g.mj),e.Y36(g.r),e.Y36(c.qu),e.Y36(p.GD),e.Y36(p.fu),e.Y36(g.TS),e.Y36(U.uw),e.Y36(g.hP),e.Y36(u.sK),e.Y36(m.F0),e.Y36(l.Ye))};static \u0275cmp=e.Xpm({type:M,selectors:[["app-create-category-form"]],inputs:{loading:"loading",category:"category"},outputs:{formSubmit:"formSubmit",deleteCall:"deleteCall"},features:[e.qOj],decls:26,vars:27,consts:[["novalidate","",1,"create-form",3,"formGroup","submit"],[1,"create-form__topbar"],[3,"settingsTitle","newButtonTitle","isShowActionsButton","isShowCreation","isShowTranslation","selectedLanguage","languages","showLanguagesCall","selectLanguageCall"],[4,"ngIf","ngIfElse"],["translation",""],["class","form-row",4,"ngIf"],[1,"form-row"],["formControlName","visible_to",3,"data",4,"ngIf"],["class","radio-buttons",3,"data-qa",4,"ngIf"],["class","form-controls-spacer",4,"ngIf"],[1,"form-controls-panel","form-controls-panel--sticky"],["color","danger","class","delete-btn",3,"iconOnly","data-qa","buttonClick",4,"ngIf"],["fill","outline","color","secondary",3,"data-qa","buttonClick"],["type","submit",3,"data-qa","disabled"],["rolesRadio",""],["appearance","outline"],["matInput","","formControlName","name",3,"placeholder"],[4,"ngIf"],[4,"ngFor","ngForOf"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","2","cdkAutosizeMaxRows","5","formControlName","description",3,"placeholder","data-qa"],["matInput","","readonly","","disabled","",3,"value"],["matInput","","formControlName","translate_name"],["matInput","","formControlName","translate_description"],["formControlName","is_child_to","disableOptionCentering","",3,"data-qa","selectionChange"],["value",""],[3,"value","data-qa",4,"ngFor","ngForOf"],[3,"value","data-qa"],["formControlName","visible_to",3,"data"],[1,"radio-buttons",3,"data-qa"],[1,"radio-buttons__info"],[1,"form-controls-spacer"],["color","danger",1,"delete-btn",3,"iconOnly","data-qa","buttonClick"],["icon","","svgIcon","delete",4,"ngIf"],["icon","","svgIcon","delete"]],template:function(t,o){if(1&t&&(e.TgZ(0,"form",0),e.NdJ("submit",function(){return o.submit()}),e.TgZ(1,"div",1)(2,"app-settings-header",2),e.NdJ("showLanguagesCall",function(){return o.addTranslation()})("selectLanguageCall",function(s){return o.chooseTranslation(s)}),e.qZA()(),e.YNc(3,de,18,16,"ng-container",3),e.YNc(4,me,24,16,"ng-template",null,4,e.W1O),e.YNc(6,ue,10,8,"div",5),e.TgZ(7,"div",6)(8,"mat-label"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.YNc(11,_e,1,1,"app-group-checkbox-select",7),e.YNc(12,fe,6,4,"div",8),e.qZA(),e.YNc(13,he,1,0,"div",9),e.TgZ(14,"div",10)(15,"div"),e.YNc(16,xe,3,4,"mzima-client-button",11),e.qZA(),e.TgZ(17,"div")(18,"mzima-client-button",12),e.NdJ("buttonClick",function(){return o.back()}),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"mzima-client-button",13),e._uU(22),e.ALo(23,"translate"),e.qZA()()()(),e.YNc(24,ve,0,0,"ng-template",null,14,e.W1O)),2&t){const i=e.MAs(5);e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("settingsTitle",o.isUpdate?"app.edit_category":"app.add_new_category")("newButtonTitle",o.isDesktop?"translations.add_translation_lang":"Translation")("isShowActionsButton",!1)("isShowCreation",!1)("isShowTranslation",!0)("selectedLanguage",o.defaultLanguage)("languages",o.activeLanguages),e.xp6(1),e.Q6J("ngIf",!o.selectedTranslation||o.selectedTranslation===(null==o.defaultLanguage?null:o.defaultLanguage.code))("ngIfElse",i),e.xp6(3),e.Q6J("ngIf",!o.isParent),e.xp6(3),e.Oqu(e.lcZ(10,21,"app.who_can_see_this_category")),e.xp6(2),e.Q6J("ngIf",!(null!=o.category&&null!=o.category.parent&&o.category.parent.id)),e.xp6(1),e.Q6J("ngIf",null==o.category||null==o.category.parent?null:o.category.parent.id),e.xp6(1),e.Q6J("ngIf",!o.isDesktop),e.xp6(3),e.Q6J("ngIf",o.isUpdate),e.xp6(2),e.Q6J("data-qa","btn-category-cancel"),e.xp6(1),e.hij(" ",e.lcZ(20,23,"app.cancel")," "),e.xp6(2),e.Q6J("data-qa","btn-category-save")("disabled",o.form.disabled||o.form.invalid||o.loading),e.xp6(1),e.hij(" ",e.lcZ(23,25,"app.save")," ")}},dependencies:[l.sg,l.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,_.TO,_.KE,_.hX,k.IC,L.Nt,w.gD,ie.ey,re.e,Z.Hw,f.zL,f.xG,q.v,Y.r,l.i8,u.X$],styles:[".create-form__controls[_ngcontent-%COMP%]{display:flex;margin:0 -8px;padding-top:16px;align-items:center;justify-content:flex-end}.create-form__controls[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%]{margin:0 8px;min-width:100px}.radio-buttons__options[_ngcontent-%COMP%]{display:block;margin-top:16px;padding-left:16px}.radio-buttons__info[_ngcontent-%COMP%], .radio-buttons[_ngcontent-%COMP%]  .mat-radio-label-content{display:inline-flex;align-items:center;justify-content:flex-start}.radio-buttons[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-inline-end:8px}.form-controls-panel[_ngcontent-%COMP%]{justify-content:space-between}.form-controls-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}@media only screen and (max-width: 1024px){.delete-button[_ngcontent-%COMP%]{padding:0;display:flex;height:48px;min-width:64px;align-items:center;flex-direction:column;justify-content:center;box-shadow:inset 0 0 0 1px var(--color-neutral-60)!important}}"]})};function be(a,n){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-create-category-form",2),e.NdJ("formSubmit",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.updateCategory(i))})("deleteCall",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.deleteCategory())}),e.qZA(),e.BQk()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("category",t.category)("loading",t.isFormOnSubmit)}}function Te(a,n){1&a&&e._UZ(0,"app-spinner",3)}y=(0,N.gn)([(0,A.c)(),(0,N.w6)("design:paramtypes",[g.mj,g.r,c.qu,p.GD,p.fu,g.TS,U.uw,g.hP,u.sK,m.F0,l.Ye])],y);class x{router;route;categoriesService;confirmModalService;translate;category;isFormOnSubmit;categoryId;constructor(n,t,o,i,s){this.router=n,this.route=t,this.categoriesService=o,this.confirmModalService=i,this.translate=s,this.categoryId=this.route.snapshot.paramMap.get("id")||"",this.categoriesService.getById(this.categoryId).subscribe({next:d=>{this.category=d.result}})}updateCategory(n){this.isFormOnSubmit=!0,this.categoriesService.update(this.categoryId,n).subscribe({next:()=>{this.isFormOnSubmit=!1,this.router.navigate(["settings/categories"])},error:({error:t})=>{this.categoriesService.categoryErrors.next(t.errors.failed_validations),this.isFormOnSubmit=!1}})}deleteCategory(){var n=this;return(0,O.Z)(function*(){!(yield n.confirmModalService.open({title:n.translate.instant("notify.category.destroy_confirm"),description:`<p>${n.translate.instant("notify.category.destroy_confirm_desc")}</p>`,confirmButtonText:n.translate.instant("app.yes_delete"),cancelButtonText:n.translate.instant("app.no_go_back")}))||n.categoriesService.delete(n.categoryId).subscribe({next:()=>{n.router.navigate(["settings/categories"])}})})()}static \u0275fac=function(t){return new(t||x)(e.Y36(m.F0),e.Y36(m.gz),e.Y36(p.GD),e.Y36(g.hP),e.Y36(u.sK))};static \u0275cmp=e.Xpm({type:x,selectors:[["app-category"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["spinner",""],[3,"category","loading","formSubmit","deleteCall"],[1,"spinner"]],template:function(t,o){if(1&t&&(e.YNc(0,be,2,2,"ng-container",0),e.YNc(1,Te,1,0,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",o.category)("ngIfElse",i)}},dependencies:[l.O5,Q.O,y],styles:[".spinner[_ngcontent-%COMP%]{display:block;margin-top:20vh;margin-bottom:20vh}"]})}class v{categoriesService;router;isFormOnSubmit;constructor(n,t){this.categoriesService=n,this.router=t}createCategory(n){this.isFormOnSubmit=!0,this.categoriesService.post(n).subscribe({next:()=>{this.isFormOnSubmit=!1,this.router.navigate(["settings/categories"])},error:({error:t})=>{this.categoriesService.categoryErrors.next(t.errors.failed_validations),this.isFormOnSubmit=!1}})}static \u0275fac=function(t){return new(t||v)(e.Y36(p.GD),e.Y36(m.F0))};static \u0275cmp=e.Xpm({type:v,selectors:[["app-create"]],decls:2,vars:1,consts:[[1,"create-category"],[3,"loading","formSubmit"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"app-create-category-form",1),e.NdJ("formSubmit",function(s){return o.createCategory(s)}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("loading",o.isFormOnSubmit))},dependencies:[y]})}const Ze=[{path:"",component:C},{path:"create",component:v,data:{breadcrumb:"Create category"}},{path:":id",component:x,data:{breadcrumb:"Update category"}}];class b{static \u0275fac=function(t){return new(t||b)};static \u0275mod=e.oAB({type:b});static \u0275inj=e.cJS({imports:[m.Bz.forChild(Ze),m.Bz]})}var Oe=r(17733);class T{static \u0275fac=function(t){return new(t||T)};static \u0275mod=e.oAB({type:T});static \u0275inj=e.cJS({imports:[l.ez,b,P.Fm,u.aw,c.UX,_.lN,k.Ky,L.c,w.LD,z.w,Z.Ps,E.ot,J.p9,P.Z6,j.W,Oe.e]})}}}]);
//# sourceMappingURL=575.547935a43c62ea8e.js.map