"use strict";(self.webpackChunkweb_mzima_client=self.webpackChunkweb_mzima_client||[]).push([[178],{42178:(Se,F,o)=>{o.r(F),o.d(F,{GeneralModule:()=>x});var g=o(52954),l=o(93557),D=o(95432),M=o(29383),b=o(37661),T=o(33695),A=o(56370),S=o(95236),E=o(17733),m=o(81547),H=o(89857),B=o(85140),$=o(47031),k=o(40930),G=o(31415),f=o(4540),U=o(51937),c=o(59132),Q=o(54185),e=o(39609),I=o(10909),u=o(20117),h=o(78275),V=o(19156),X=o(67605),W=o(21491),ee=o(97586),p=o(952),N=o(94626),O=o(53625),P=o(93149);class _{transform(t){return t.filter(n=>n.visible)}static \u0275fac=function(n){return new(n||_)};static \u0275pipe=e.Yjl({name:"filterVisibleLayers",type:_,pure:!0})}function te(i,t){if(1&i){const n=e.EpF();e.TgZ(0,"li",19),e.NdJ("click",function(){const r=e.CHM(n).$implicit,d=e.oxw(3);return e.KtG(d.selectLocation(r))}),e._uU(1),e.qZA()}if(2&i){const n=t.$implicit;e.Q6J("data-qa","geocoder-list-item"),e.xp6(1),e.hij(" ",n.name," ")}}function ne(i,t){if(1&i&&(e.TgZ(0,"ul",17),e.YNc(1,te,2,2,"li",18),e.qZA()),2&i){const n=e.oxw(2);e.Q6J("data-qa","geocoder-list"),e.xp6(1),e.Q6J("ngForOf",n.geocodingResults)}}function ae(i,t){if(1&i){const n=e.EpF();e.TgZ(0,"div",20),e.NdJ("leafletMapReady",function(s){e.CHM(n);const r=e.oxw(2);return e.KtG(r.onMapReady(s))}),e.qZA()}if(2&i){const n=e.oxw(2);e.Q6J("leafletOptions",n.leafletOptions)("leafletLayers",n.mapLayers)}}function ie(i,t){if(1&i&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.Q6J("value",n.code),e.xp6(1),e.hij(" ",n.name," ")}}function oe(i,t){if(1&i){const n=e.EpF();e.TgZ(0,"div",1)(1,"mat-label"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"mat-form-field",2)(5,"input",13),e.NdJ("ngModelChange",function(s){e.CHM(n);const r=e.oxw(2);return e.KtG(r.mapConfig.location_precision=s)})("ngModelChange",function(){e.CHM(n);const s=e.oxw(2);return e.KtG(s.updatePrecision())}),e.qZA()(),e.TgZ(6,"p")(7,"span"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e._uU(10),e.qZA()()}if(2&i){const n=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,6,"settings.map_location_precision")),e.xp6(3),e.Q6J("ngModel",n.mapConfig.location_precision)("max",n.maxObfuscation)("min",n.minObfuscation),e.xp6(3),e.Oqu(e.lcZ(9,8,"settings.map_precise_to")),e.xp6(2),e.hij("",n.currentPrecision,"km ")}}function se(i,t){if(1&i){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",1)(2,"mat-label"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"mat-form-field",2)(6,"input",3),e.NdJ("ngModelChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.queryLocation=s)})("ngModelChange",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.searchLocation())})("focusout",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.searchLocation())}),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"mzima-client-button",4),e._UZ(9,"mat-icon",5),e.qZA()(),e.YNc(10,ne,2,2,"ul",6),e.qZA(),e.TgZ(11,"div",7),e.YNc(12,ae,1,2,"div",8),e.qZA(),e.TgZ(13,"div",9)(14,"div",1)(15,"mat-label"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"mat-form-field",2)(19,"input",10),e.NdJ("ngModelChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.mapConfig.default_view.lat=s)}),e.qZA()()(),e.TgZ(20,"div",1)(21,"mat-label"),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.TgZ(24,"mat-form-field",2)(25,"input",10),e.NdJ("ngModelChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.mapConfig.default_view.lon=s)}),e.qZA()()(),e.TgZ(26,"div",1)(27,"mat-label"),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"mat-form-field",2)(31,"mat-select",11),e.NdJ("valueChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.mapConfig.default_view.baselayer=s)})("valueChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.layerChange(s))}),e.YNc(32,ie,2,2,"mat-option",12),e.ALo(33,"filterVisibleLayers"),e.qZA()()(),e.TgZ(34,"div",1)(35,"mat-label"),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"mat-form-field",2)(39,"input",13),e.NdJ("ngModelChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.mapConfig.default_view.zoom=s)})("ngModelChange",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.onZoomChange())}),e.qZA()()(),e.YNc(40,oe,11,10,"div",14),e.qZA(),e.TgZ(41,"div",1)(42,"div",15)(43,"mat-checkbox",16),e.NdJ("change",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.mapConfig.clustering=s.checked)}),e._uU(44),e.ALo(45,"translate"),e.qZA()()(),e.BQk()}if(2&i){const n=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,27,"survey.location")),e.xp6(3),e.s9C("placeholder",e.lcZ(7,29,"settings.general_settings.placeholder.pick_location")),e.Q6J("ngModel",n.queryLocation)("data-qa","query-location"),e.xp6(2),e.Q6J("iconOnly",!0),e.xp6(2),e.Q6J("ngIf",n.isShowGeocodingResults&&n.geocodingResults.length),e.xp6(2),e.Q6J("ngIf",n.mapReady),e.xp6(4),e.Oqu(e.lcZ(17,31,"settings.map_default_latitude")),e.xp6(3),e.Q6J("ngModel",n.mapConfig.default_view.lat)("max",90)("min",-90)("data-qa","default-latitude"),e.xp6(3),e.Oqu(e.lcZ(23,33,"settings.map_default_longitude")),e.xp6(3),e.Q6J("ngModel",n.mapConfig.default_view.lon)("max",180)("min",-180)("data-qa","default-longitude"),e.xp6(3),e.Oqu(e.lcZ(29,35,"settings.map_default_baselayer")),e.xp6(3),e.Q6J("value",n.mapConfig.default_view.baselayer),e.xp6(1),e.Q6J("ngForOf",e.lcZ(33,37,n.baseLayers)),e.xp6(4),e.Oqu(e.lcZ(37,39,"settings.map_default_zoom_level")),e.xp6(3),e.Q6J("ngModel",n.mapConfig.default_view.zoom)("max",n.maxZoom)("min",n.minZoom),e.xp6(1),e.Q6J("ngIf",n.locationPrecisionEnabled),e.xp6(3),e.Q6J("checked",n.mapConfig.clustering),e.xp6(1),e.hij(" ",e.lcZ(45,41,"settings.map_clustering")," ")}}let L=class J{sessionService;changeDetector;minObfuscation=0;maxObfuscation=9;leafletOptions;map;mapMarker;mapLayers=[];mapConfig;mapReady=!1;maxZoom=22;minZoom=1;baseLayers=Object.values(I.Lz.getMapLayers().baselayers);geocoderControl;queryLocation="";searchSubject=new X.x;geocodingResults=[];isShowGeocodingResults=!1;locationPrecisionEnabled;currentPrecision=9;constructor(t,n){this.sessionService=t,this.changeDetector=n}ngOnInit(){this.searchSubject.pipe((0,W.b)(600),(0,u.t)(this)).subscribe(t=>{this.performSearch(t)}),this.mapConfig=this.sessionService.getMapConfigurations(),this.currentPrecision=this.getPrecision(),this.locationPrecisionEnabled=!!this.sessionService.getFeatureConfigurations()["anonymise-reporters"]?.enabled,this.leafletOptions={scrollWheelZoom:!0,zoomControl:!1,layers:[],center:[this.mapConfig.default_view.lat,this.mapConfig.default_view.lon],zoom:this.mapConfig.default_view.zoom},this.mapReady=!0,this.addTileLayerToMap(this.mapConfig.default_view.baselayer)}addMarker(){this.mapMarker&&this.map.removeLayer(this.mapMarker),this.mapMarker=(0,h.marker)(this.map.getCenter(),{draggable:!0,icon:(0,ee.pointIcon)(this.mapConfig.default_view.color)}).addTo(this.map),this.mapMarker.on("dragend",t=>{this.handleDragEnd(t)})}addTileLayerToMap(t){const n=I.Lz.getMapLayers().baselayers[t];this.mapLayers=this.mapLayers.filter(a=>!(a instanceof h.TileLayer)),this.mapLayers.push((0,h.tileLayer)(n.url,n.layerOptions))}layerChange(t){this.addTileLayerToMap(t)}onMapReady(t){this.geocoderControl=new V.ZP({defaultMarkGeocode:!1,position:"topleft",collapsed:!1}),this.map=t,h.control.zoom({position:"bottomleft"}).addTo(this.map),this.addMarker(),this.geocoderControl.addTo(this.map),this.map.on("click",n=>{this.mapClick(n)}),this.map.on("zoomend",()=>{this.mapConfig.default_view.zoom=t.getZoom(),this.changeDetector.detectChanges()}),this.geocoderControl.on("finishgeocode",n=>{this.geocodingResults=n.results})}updateMapPreview(){this.map.setView([this.mapConfig.default_view.lat,this.mapConfig.default_view.lon],this.mapConfig.default_view.zoom),this.mapMarker.setLatLng([this.mapConfig.default_view.lat,this.mapConfig.default_view.lon]),this.changeDetector.detectChanges()}mapClick(t){const n=t.latlng.wrap();this.setCoordinates(n.lat,n.lng)}handleDragEnd(t){const n=t.target.getLatLng().wrap();this.setCoordinates(n.lat,n.lng)}searchLocation(){this.isShowGeocodingResults=!0,this.searchSubject.next(this.queryLocation)}performSearch(t){this.geocoderControl.options.placeholder=t,this.geocoderControl._input.value=t,this.geocoderControl._geocode()}selectLocation(t){this.queryLocation=t.name;const n=t.center;this.map.fitBounds(t.bbox),this.setCoordinates(n.lat,n.lng),this.geocodingResults=[],this.searchSubject.next("")}setCoordinates(t,n){this.mapConfig.default_view.lat=t,this.mapConfig.default_view.lon=n,this.addMarker(),this.updateMapPreview()}onZoomChange(){this.map&&this.map.setZoom(this.mapConfig.default_view.zoom)}updatePrecision(){this.currentPrecision=this.getPrecision(),this.updateMapPreview()}getPrecision(){return this.sessionService.getPrecision(this.mapConfig.location_precision)}static \u0275fac=function(n){return new(n||J)(e.Y36(c.mj),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:J,selectors:[["app-settings-map"]],inputs:{minObfuscation:"minObfuscation",maxObfuscation:"maxObfuscation"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"form-row"],["appearance","outline"],["matInput","",3,"ngModel","placeholder","data-qa","ngModelChange","focusout"],["fill","clear","matSuffix","","color","secondary",3,"iconOnly"],["icon","","svgIcon","search-small"],["class","geocoder-list",3,"data-qa",4,"ngIf"],[1,"form-row","map-holder"],["id","settings-map","class","map","leaflet","",3,"leafletOptions","leafletLayers","leafletMapReady",4,"ngIf"],[1,"inputs"],["type","number","matInput","","readonly","",3,"ngModel","max","min","data-qa","ngModelChange"],["disableOptionCentering","",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["type","number","matInput","",3,"ngModel","max","min","ngModelChange"],["class","form-row",4,"ngIf"],[1,"checkbox"],[3,"checked","change"],[1,"geocoder-list",3,"data-qa"],["class","geocoder-list__item",3,"data-qa","click",4,"ngFor","ngForOf"],[1,"geocoder-list__item",3,"data-qa","click"],["id","settings-map","leaflet","",1,"map",3,"leafletOptions","leafletLayers","leafletMapReady"],[3,"value"]],template:function(n,a){1&n&&e.YNc(0,se,46,43,"ng-container",0),2&n&&e.Q6J("ngIf",a.mapConfig)},dependencies:[g.sg,g.O5,S.je,S.x,l.Fj,l.wV,l.JJ,l.qQ,l.Fd,p.KE,p.hX,p.R9,T.Nt,A.gD,N.ey,M.oG,b.Hw,O.xG,l.On,P.r,m.X$,_],styles:['.map-holder[_ngcontent-%COMP%]{z-index:0;min-height:325px;position:relative}.map-holder[_ngcontent-%COMP%]:before{content:"";display:block;padding-top:41.8430884184%}.form-row[_ngcontent-%COMP%]{margin-bottom:16px}.map[_ngcontent-%COMP%]{top:0;left:0;width:100%;height:100%;position:absolute}.map[_ngcontent-%COMP%]  .leaflet-control-geocoder{display:none}.inputs[_ngcontent-%COMP%]{display:flex;margin:0 -8px;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start}.inputs[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{flex-basis:auto;margin-left:8px;margin-right:8px;width:calc(50% - 16px)}@media only screen and (max-width: 768px){.inputs[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{width:calc(100% - 16px)}}  .leaflet-control-geocoder{display:block}  .leaflet-control-attribution{font-size:7px}  .leaflet-touch .leaflet-bar a{align-items:center;justify-content:center}.geocoder-list[_ngcontent-%COMP%]{list-style:none;margin-top:0;border:1px solid var(--color-neutral-60);padding:10px;top:-5px;display:block;position:inherit;border-radius:5px}.geocoder-list__item[_ngcontent-%COMP%]{cursor:pointer}.geocoder-list__item[_ngcontent-%COMP%]:not(:last-child){padding-bottom:10px;border-bottom:1px solid var(--color-neutral-60)}.geocoder-list__item[_ngcontent-%COMP%]:not(:first-child){padding-top:10px}']})};L=(0,f.gn)([(0,u.c)(),(0,f.w6)("design:paramtypes",[c.mj,e.sBO])],L);var C=o(49119),z=o(11754),K=o(98703),j=o(20680),Y=o(51167),R=o(10742),re=o(45006),le=o(47288);const ce=["mapSettings"];function pe(i,t){1&i&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"settings.settings_list.general")))}function ge(i,t){1&i&&(e.TgZ(0,"mat-error",27),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"settings.valid.name.required")," "))}function me(i,t){1&i&&(e.TgZ(0,"mat-error",27),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"settings.valid.name.pattern")," "))}function de(i,t){1&i&&(e.TgZ(0,"mat-error",27),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"settings.valid.name.minlength")," "))}function ue(i,t){if(1&i&&(e.TgZ(0,"mat-error",27),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i){const n=t.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,"contact.valid.email."+n.key)," ")}}function fe(i,t){if(1&i&&(e.ynx(0),e.YNc(1,ue,3,3,"mat-error",28),e.ALo(2,"keyvalue"),e.BQk()),2&i){const n=e.oxw();let a;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,null==(a=n.generalForm.get("email"))?null:a.errors))}}function he(i,t){if(1&i&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.Q6J("value",n.code),e.xp6(1),e.hij(" ",n.name," ")}}function _e(i,t){1&i&&(e.TgZ(0,"div",35),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"share.copied")))}function Ce(i,t){if(1&i){const n=e.EpF();e.TgZ(0,"div",2)(1,"mat-label"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"mat-form-field",30),e._UZ(5,"input",31),e.YNc(6,_e,3,3,"div",32),e.TgZ(7,"mzima-client-button",33),e.NdJ("buttonClick",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.copyToClipboard(s.apiKey.api_key))}),e._UZ(8,"mat-icon",34),e.qZA(),e.TgZ(9,"mat-hint"),e._uU(10),e.ALo(11,"translate"),e.qZA()()()}if(2&i){const n=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,7,"settings.general_settings.api_key")),e.xp6(3),e.Q6J("value",n.apiKey.api_key)("data-qa","api_key"),e.xp6(1),e.Q6J("ngIf",n.copySuccess),e.xp6(1),e.Q6J("iconOnly",!0)("disabled",n.copySuccess),e.xp6(3),e.Oqu(e.lcZ(11,9,"settings.api_key_desc"))}}function ve(i,t){1&i&&e._UZ(0,"div",36)}let q=class w{sessionService;formBuilder;mediaService;configService;loader;langService;translate;apiKeyService;confirmModalService;clipboard;breakpointService;notificationService;snackBar;cancel=new e.vpe;mapSettings;isDesktop$;generalForm;copySuccess=!1;submitted=!1;initialFormValue;changesMade=!1;siteConfig;apiKey;uploadedFile;minObfuscation=0;maxObfuscation=9;constructor(t,n,a,s,r,d,Z,y,ye,Me,be,Te,Ae){this.sessionService=t,this.formBuilder=n,this.mediaService=a,this.configService=s,this.loader=r,this.langService=d,this.translate=Z,this.apiKeyService=y,this.confirmModalService=ye,this.clipboard=Me,this.breakpointService=be,this.notificationService=Te,this.snackBar=Ae,this.isDesktop$=this.breakpointService.isDesktop$.pipe((0,u.t)(this)),this.generalForm=this.formBuilder.group({name:["",[l.kI.required,l.kI.minLength(3),l.kI.maxLength(255)]],description:["",[]],email:["",[l.kI.email,l.kI.required]],language:["en",[]],private:[!1,[]],disable_registration:[!1,[]]})}ngOnInit(){this.siteConfig=this.sessionService.getSiteConfigurations(),this.generalForm.patchValue({name:this.siteConfig.name,description:this.siteConfig.description,email:this.siteConfig.email,language:this.siteConfig.language,private:this.siteConfig.private,disable_registration:this.siteConfig.disable_registration}),this.apiKeyService.get().subscribe(t=>{this.apiKey=t.results.shift()}),this.translate.onLangChange.subscribe(t=>{this.generalForm.controls.language.setValue(t.lang)}),this.generalForm.valueChanges.pipe((0,u.t)(this)).subscribe(()=>{this.changesMade=!0}),this.initialFormValue=this.generalForm.value}fileUploaded(t){this.siteConfig.image_header=t.dataURI,this.uploadedFile=t.file}headerImageDeleted(){this.siteConfig.image_header="",this.uploadedFile=void 0}generateApiKey(){var t=this;return(0,G.Z)(function*(){!(yield t.confirmModalService.open({title:t.translate.instant("notify.api_key.change_question"),description:`<p>${t.translate.instant("notify.default.proceed_warning")}</p>`,confirmButtonText:t.translate.instant("settings.general_settings.generate_api_key")}))||(t.apiKey?t.apiKeyService.update(t.apiKey.id,t.apiKey).subscribe(a=>{t.apiKey=a.result}):t.apiKeyService.post({}).subscribe(a=>{t.apiKey=a.result}))})()}save(){this.submitted=!0,this.loader.show(),this.uploadedFile?this.mediaService.uploadFile(this.uploadedFile).pipe((0,Q.z)(t=>(this.siteConfig.image_header=t.result.original_file_url,this.updateSettings()))).subscribe({complete:()=>{this.loader.hide(),this.submitted=!1},error:t=>{this.loader.hide(),this.submitted=!1,this.notificationService.showError(t.message)}}):this.updateSettings().subscribe({complete:()=>{this.submitted=!1,this.loader.hide(),this.changesMade=!1},error:t=>{this.submitted=!1,this.loader.hide(),this.notificationService.showError(t.message)}})}updateSettings(){const t=Object.assign({},this.generalForm.value,{image_header:this.siteConfig.image_header});return this.langService.changeLanguage(t.language),this.configService.update("site",t).pipe((0,Q.z)(n=>(this.sessionService.setConfigurations("site",n.result),this.configService.update("map",this.mapSettings.mapConfig))))}copyToClipboard(t){this.copySuccess=this.clipboard.copy(t),setTimeout(()=>this.copySuccess=!this.copySuccess,2e3)}isIntegerAndZeroToNine(t){return"0"===t&&(t=parseFloat(t)),Number.isInteger(t)&&t>=this.minObfuscation&&t<=this.maxObfuscation}openConfirmModal(){var t=this;return(0,G.Z)(function*(){t.changesMade?(yield t.confirmModalService.open({title:t.translate.instant("notify.default.data_has_not_been_saved"),description:t.translate.instant("notify.default.proceed_warning"),confirmButtonText:"OK"}))&&JSON.stringify(t.generalForm.value)!==JSON.stringify(t.initialFormValue)&&(t.generalForm.patchValue(t.initialFormValue),t.cancel.emit(),t.showSnackbar("Changes discarded successfully"),t.changesMade=!1):t.showSnackbar("No changes made yet")})()}showSnackbar(t){this.snackBar.open(t,"Close",{duration:3e3,horizontalPosition:"center",verticalPosition:"bottom"})}static \u0275fac=function(n){return new(n||w)(e.Y36(c.mj),e.Y36(l.qu),e.Y36(C.yJ),e.Y36(z.E),e.Y36(K.D),e.Y36(j.T),e.Y36(m.sK),e.Y36(C.gM),e.Y36(Y.h),e.Y36(U.TU),e.Y36(c.r),e.Y36(c.gq),e.Y36(R.ux))};static \u0275cmp=e.Xpm({type:w,selectors:[["app-general"]],viewQuery:function(n,a){if(1&n&&e.Gf(ce,5),2&n){let s;e.iGM(s=e.CRH())&&(a.mapSettings=s.first)}},outputs:{cancel:"cancel"},decls:75,vars:70,consts:[[4,"ngIf"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-row"],["appearance","outline"],["matInput","","formControlName","name","required","",3,"placeholder","data-qa"],["class","form-row__error",4,"ngIf"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMaxRows","10","formControlName","description",3,"cdkAutosizeMinRows","placeholder","data-qa"],[3,"imageSrc","fileUpload","delete"],["matInput","","placeholder","name@domain.com","formControlName","email","required","",3,"data-qa"],["formControlName","language","disableOptionCentering","",3,"data-qa"],[3,"value",4,"ngFor","ngForOf"],[1,"checkbox-group"],[1,"checkbox"],["formControlName","private",3,"data-qa"],[1,"small"],["formControlName","disable_registration",3,"data-qa"],["translate","settings.site_disable_registration_desc"],[1,"api-key"],["class","form-row",4,"ngIf"],["fill","outline","color","secondary",3,"expand","data-qa","click"],["icon","","svgIcon","key"],[3,"minObfuscation","maxObfuscation"],["mapSettings",""],["class","form-controls-spacer",4,"ngIf"],[1,"form-controls-panel","form-controls-panel--sticky"],["type","button","fill","outline","color","secondary","data-qa","'btn-cancel'",1,"cancel-button",3,"click"],["type","submit","data-qa","btn-save",3,"disabled","buttonClick"],[1,"form-row__error"],["class","form-row__error",4,"ngFor","ngForOf"],[3,"value"],["appearance","outline",1,"copy"],["matInput","","readonly","",3,"value","data-qa"],["class","copy-success",4,"ngIf"],["matSuffix","","fill","clear","color","secondary",3,"iconOnly","disabled","buttonClick"],["icon","","svgIcon","copy"],[1,"copy-success"],[1,"form-controls-spacer"]],template:function(n,a){if(1&n&&(e.YNc(0,pe,3,3,"h1",0),e.ALo(1,"async"),e.TgZ(2,"form",1),e.NdJ("ngSubmit",function(){return a.save()}),e.TgZ(3,"div",2)(4,"mat-label"),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"mat-form-field",3),e._UZ(8,"input",4),e.ALo(9,"translate"),e.qZA(),e.YNc(10,ge,3,3,"mat-error",5),e.YNc(11,me,3,3,"mat-error",5),e.YNc(12,de,3,3,"mat-error",5),e.qZA(),e.TgZ(13,"div",2)(14,"mat-label"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"mat-form-field",3),e._UZ(18,"textarea",6),e.ALo(19,"async"),e.ALo(20,"translate"),e.qZA()(),e.TgZ(21,"div",2)(22,"mat-label"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"app-file-uploader",7),e.NdJ("fileUpload",function(r){return a.fileUploaded(r)})("delete",function(){return a.headerImageDeleted()}),e.qZA()(),e.TgZ(26,"div",2)(27,"mat-label"),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"mat-form-field",3),e._UZ(31,"input",8),e.qZA(),e.YNc(32,fe,3,3,"ng-container",0),e.qZA(),e.TgZ(33,"div",2)(34,"mat-label"),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"mat-form-field",3)(38,"mat-select",9),e.YNc(39,he,2,2,"mat-option",10),e.qZA()()(),e.TgZ(40,"div",2)(41,"mat-label"),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"div",11)(45,"div",12)(46,"mat-checkbox",13),e._uU(47),e.ALo(48,"translate"),e.qZA(),e.TgZ(49,"p",14),e._uU(50),e.ALo(51,"translate"),e.qZA()(),e.TgZ(52,"div",12)(53,"mat-checkbox",15),e._uU(54),e.ALo(55,"translate"),e.qZA(),e._UZ(56,"p",16),e.qZA()()()(),e.TgZ(57,"div",17),e.YNc(58,Ce,12,11,"div",18),e.TgZ(59,"mzima-client-button",19),e.NdJ("click",function(){return a.generateApiKey()}),e.TgZ(60,"span"),e._uU(61),e.ALo(62,"translate"),e.qZA(),e._UZ(63,"mat-icon",20),e.qZA()(),e._UZ(64,"app-settings-map",21,22),e.YNc(66,ve,1,0,"div",23),e.ALo(67,"async"),e.TgZ(68,"div",24)(69,"mzima-client-button",25),e.NdJ("click",function(){return a.openConfirmModal()}),e._uU(70),e.ALo(71,"translate"),e.qZA(),e.TgZ(72,"mzima-client-button",26),e.NdJ("buttonClick",function(){return a.save()}),e._uU(73),e.ALo(74,"translate"),e.qZA()()),2&n){const s=e.MAs(65);let r,d,Z,y;e.Q6J("ngIf",e.lcZ(1,36,a.isDesktop$)),e.xp6(2),e.Q6J("formGroup",a.generalForm),e.xp6(3),e.hij("",e.lcZ(6,38,"settings.deployment_name")," *"),e.xp6(3),e.s9C("placeholder",e.lcZ(9,40,"settings.deployment_name")),e.Q6J("data-qa","name"),e.xp6(2),e.Q6J("ngIf",null==(r=a.generalForm.get("name"))?null:r.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(d=a.generalForm.get("name"))?null:d.hasError("specialCharacters")),e.xp6(1),e.Q6J("ngIf",null==(Z=a.generalForm.get("name"))?null:Z.hasError("minlength")),e.xp6(3),e.Oqu(e.lcZ(16,42,"settings.site_description")),e.xp6(3),e.s9C("placeholder",e.lcZ(20,46,"settings.site_description")),e.Q6J("cdkAutosizeMinRows",e.lcZ(19,44,a.isDesktop$)?6:3)("data-qa","description"),e.xp6(5),e.Oqu(e.lcZ(24,48,"settings.deployment_logo")),e.xp6(2),e.Q6J("imageSrc",a.siteConfig.image_header),e.xp6(3),e.hij("",e.lcZ(29,50,"settings.site_email")," *"),e.xp6(3),e.Q6J("data-qa","email"),e.xp6(1),e.Q6J("ngIf",null==(y=a.generalForm.get("email"))?null:y.invalid),e.xp6(3),e.Oqu(e.lcZ(36,52,"settings.site_language")),e.xp6(3),e.Q6J("data-qa","language"),e.xp6(1),e.Q6J("ngForOf",a.langService.getLanguages()),e.xp6(3),e.Oqu(e.lcZ(43,54,"settings.general_settings.private_settings")),e.xp6(4),e.Q6J("data-qa","site-private"),e.xp6(1),e.hij(" ",e.lcZ(48,56,"settings.site_private")," "),e.xp6(3),e.Oqu(e.lcZ(51,58,"settings.site_private_desc")),e.xp6(3),e.Q6J("data-qa","site-disable-registration"),e.xp6(1),e.hij(" ",e.lcZ(55,60,"settings.site_disable_registration")," "),e.xp6(4),e.Q6J("ngIf",a.apiKey),e.xp6(1),e.Q6J("expand",!1)("data-qa","generate-api-key"),e.xp6(2),e.Oqu(e.lcZ(62,62,"settings.general_settings.generate_api_key")),e.xp6(3),e.Q6J("minObfuscation",a.minObfuscation)("maxObfuscation",a.maxObfuscation),e.xp6(2),e.Q6J("ngIf",!e.lcZ(67,64,a.isDesktop$)),e.xp6(4),e.hij(" ",e.lcZ(71,66,"app.cancel")," "),e.xp6(2),e.Q6J("disabled",a.generalForm.invalid||a.generalForm.disabled||a.submitted||!a.isIntegerAndZeroToNine(s.mapConfig.location_precision)),e.xp6(1),e.hij(" ",e.lcZ(74,68,"app.save")," ")}},dependencies:[g.sg,g.O5,re.G,m.Pi,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,le.IC,p.TO,p.KE,p.bx,p.hX,p.R9,T.Nt,A.gD,N.ey,M.oG,b.Hw,O.zL,O.xG,P.r,L,g.Ov,g.Nd,m.X$],styles:[".api-key[_ngcontent-%COMP%]{margin-bottom:24px}.api-key[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{margin-bottom:16px}.copy[_ngcontent-%COMP%]{position:relative}.copy-success[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:7px;color:var(--color-success)}"]})};q=(0,f.gn)([(0,u.c)(),(0,f.w6)("design:paramtypes",[c.mj,l.qu,C.yJ,z.E,K.D,j.T,m.sK,C.gM,Y.h,U.TU,c.r,c.gq,R.ux])],q);const xe=[{path:"",component:q}];class v{static \u0275fac=function(n){return new(n||v)};static \u0275mod=e.oAB({type:v});static \u0275inj=e.cJS({imports:[k.Bz.forChild(xe),k.Bz]})}var Ze=o(69420);class x{static \u0275fac=function(n){return new(n||x)};static \u0275mod=e.oAB({type:x});static \u0275inj=e.cJS({imports:[g.ez,v,S.UO,$.SettingsModule,m.aw,l.UX,T.c,A.LD,M.p9,D.ot,b.Ps,H.Z6,l.u5,E.e,B.zx,Ze.Is]})}}}]);
//# sourceMappingURL=178.697f4b1a4314fcf0.js.map