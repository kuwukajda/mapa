"use strict";(self.webpackChunkweb_mzima_client=self.webpackChunkweb_mzima_client||[]).push([[84],{36368:(I,h,i)=>{i.d(h,{w:()=>r});var t=i(69420),e=i(39609),g=i(52954),m=i(92638),u=i(60079),x=i(78499),f=i(70282),v=i(37661),C=i(53625),w=i(93149),P=i(81547);function M(_,p){if(1&_){const s=e.EpF();e.TgZ(0,"app-post-details",6),e.NdJ("edit",function(){e.CHM(s);const n=e.oxw(2);return e.KtG(n.handleEditPost())})("statusChanged",function(){e.CHM(s);const n=e.oxw(2);return e.KtG(n.statusChangedHandle())}),e.qZA()}if(2&_){const s=e.oxw(2);e.Q6J("post",s.post)("feedView",!1)("color",s.color)}}function b(_,p){if(1&_&&(e.ynx(0),e.YNc(1,M,1,3,"app-post-details",5),e.BQk()),2&_){const s=e.oxw(),d=e.MAs(8);e.xp6(1),e.Q6J("ngIf",!s.editable)("ngIfElse",d)}}function O(_,p){1&_&&e._UZ(0,"app-post-not-found")}function E(_,p){1&_&&e._UZ(0,"app-post-not-allowed")}function T(_,p){if(1&_){const s=e.EpF();e.TgZ(0,"app-post-edit",7),e.NdJ("cancel",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.cancel())})("updated",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.updated())}),e.qZA()}if(2&_){const s=e.oxw();e.Q6J("modalView",!0)("postInput",s.post)}}class r{data;matDialogRef;post;color;editable;urlEnd;constructor(p,s){this.data=p,this.matDialogRef=s,this.post=p?.post,this.color=p?.color,this.editable=p?.editable,this.urlEnd=p?.urlEnd}handleEditPost(){this.editable=!this.editable}cancel(){this.editable=!1,this.matDialogRef.close()}updated(){this.editable=!1,this.matDialogRef.close({update:!0})}statusChangedHandle(){this.matDialogRef.close({statusChanged:!0})}postIs={available:()=>!this.urlEnd||!this.postIs.notfound()||!this.postIs.notAllowed(),notfound:()=>"not-found"===this.urlEnd,notAllowed:()=>"not-allowed"===this.urlEnd};static \u0275fac=function(s){return new(s||r)(e.Y36(t.WI),e.Y36(t.so))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-post-details-modal"]],decls:9,vars:9,consts:[["tabindex","-1","fill","outline","color","light-gray",1,"modal__close-btn",3,"iconOnly","data-qa","mat-dialog-close","ariaLabel"],["icon","","svgIcon","close"],[1,"post"],[4,"ngIf"],["editPost",""],[3,"post","feedView","color","edit","statusChanged",4,"ngIf","ngIfElse"],[3,"post","feedView","color","edit","statusChanged"],[3,"modalView","postInput","cancel","updated"]],template:function(s,d){1&s&&(e.TgZ(0,"mzima-client-button",0),e.ALo(1,"translate"),e._UZ(2,"mat-icon",1),e.qZA(),e.TgZ(3,"mat-dialog-content",2),e.YNc(4,b,2,2,"ng-container",3),e.YNc(5,O,1,0,"app-post-not-found",3),e.YNc(6,E,1,0,"app-post-not-allowed",3),e.qZA(),e.YNc(7,T,1,2,"ng-template",null,4,e.W1O)),2&s&&(e.s9C("ariaLabel",e.lcZ(1,7,"modal.button.close")),e.Q6J("iconOnly",!0)("data-qa","btn-close")("mat-dialog-close",!1),e.xp6(4),e.Q6J("ngIf",d.postIs.available()),e.xp6(1),e.Q6J("ngIf",d.postIs.notfound()),e.xp6(1),e.Q6J("ngIf",d.postIs.notAllowed()))},dependencies:[g.O5,m.k,u.u,x.$,f.U,v.Hw,t.ZT,t.xY,C.xG,w.r,P.X$],styles:[".resize-css-handler{display:block}@media only screen and (min-width: 1025px){  .resize-css-handler{display:none}}  .post-modal .mat-dialog-container{padding-inline-start:34px;border-radius:8px!important}@media only screen and (max-width: 1024px){  .post-modal .mat-dialog-container{overflow-y:auto;overflow-x:hidden;padding-inline-start:26px;padding-inline-end:16px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}}@media only screen and (max-width: 1024px){  .post-modal .mat-dialog-content{overflow:visible;max-height:none!important}}@media only screen and (max-width: 1024px){  .post-modal .post{position:relative}}@media only screen and (max-width: 1024px){  .post-modal .post__head{position:static!important}}@media only screen and (max-width: 1024px){  .post-modal .post__border{top:-16px;left:-16px;bottom:-16px}}  .post-modal .post-item-page{padding:0!important;height:auto!important;overflow:visible!important}  .post-modal .page-content{padding:0!important;box-shadow:none!important}  .post-modal .survey-name{padding-right:48px}  .post-modal .form-controls-panel--sticky{bottom:-16px;position:sticky;margin-left:-16px;margin-right:-16px;margin-bottom:-16px}"]})}},75471:(I,h,i)=>{i.d(h,{X:()=>d});var t=i(39609),e=i(49119),g=i(67605),m=i(52954),u=i(93557),x=i(29383),f=i(93149),v=i(92477),C=i(58046),w=i(405),P=i(81547);function M(n,a){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"mat-checkbox",11),t.NdJ("ngModelChange",function(l){t.CHM(o);const D=t.oxw(2);return t.KtG(D.isChecked=l)}),t.qZA(),t.BQk()}if(2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngModel",o.isChecked)}}function b(n,a){if(1&n&&(t.TgZ(0,"div",12),t._UZ(1,"app-twitter-widget",13),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("id",o.post.data_source_message_id)}}function O(n,a){if(1&n&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Oqu(o.post.title||o.post.content)}}function E(n,a){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Oqu(o.post.content)}}function T(n,a){if(1&n&&(t.TgZ(0,"div",14),t._UZ(1,"img",15),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("src",o.media.original_file_url,t.LSH)("alt",o.media.caption||o.post.title)}}function r(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"div",16)(1,"mzima-client-button",17),t.NdJ("buttonClick",function(){t.CHM(o);const l=t.oxw(2);return t.KtG(l.showDetails())}),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&n&&(t.xp6(1),t.Q6J("expand",!1),t.xp6(1),t.hij(" ",t.lcZ(3,2,"post.read_more")," "))}const _=function(n){return{"--color":n}},p=function(n,a){return{"post--feed":n,"post--selectable":a}};function s(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(l){t.CHM(o);const D=t.oxw();return t.KtG(D.postClicked(l))}),t.TgZ(1,"div",2),t.YNc(2,M,2,1,"ng-container",3),t.TgZ(3,"app-post-head",4),t.NdJ("refresh",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.refresh.emit())})("edit",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.edit.emit())})("deleted",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.deletedHandle())})("statusChanged",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.statusChangedHandle())}),t.qZA()(),t.YNc(4,b,2,1,"div",5),t.TgZ(5,"div",6)(6,"div",7),t.YNc(7,O,2,1,"h3",3),t.YNc(8,E,2,1,"p",3),t.qZA(),t.YNc(9,T,2,2,"div",8),t.qZA(),t.YNc(10,r,4,4,"div",9),t._UZ(11,"app-post-metadata",10),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("ngStyle",t.VKq(13,_,o.post.color||"var(--color-neutral-100)"))("ngClass",t.WLB(15,p,o.feedView,o.selectable)),t.xp6(2),t.Q6J("ngIf",o.selectable),t.xp6(1),t.Q6J("post",o.post)("feedView",!!o.feedView)("editable",o.post.allowed_privileges.includes("update"))("deleteable",o.post.allowed_privileges.includes("delete")),t.xp6(1),t.Q6J("ngIf","Twitter"===o.post.source&&o.post.data_source_message_id),t.xp6(3),t.Q6J("ngIf",(null==o.post.title?null:o.post.title.length)||(null==o.post.content?null:o.post.content.length)),t.xp6(1),t.Q6J("ngIf",(null==o.post.title?null:o.post.title.length)&&(null==o.post.content?null:o.post.content.length)),t.xp6(1),t.Q6J("ngIf",o.media&&"Twitter"!==o.post.source),t.xp6(1),t.Q6J("ngIf",!o.feedView),t.xp6(1),t.Q6J("post",o.post)}}class d{mediaService;post;user;feedView;selectable;isChecked;selected=new t.vpe;edit=new t.vpe;refresh=new t.vpe;deleted=new t.vpe;statusChanged=new t.vpe;mediaLoaded=new t.vpe;media;details=new g.x;details$=this.details.asObservable();onDeleted=new g.x;deleted$=this.onDeleted.asObservable();allowed_privileges;constructor(a){this.mediaService=a}ngOnInit(){this.allowed_privileges=this.post?.allowed_privileges??""}ngOnChanges(a){if(a.post){this.allowed_privileges=this.post?.allowed_privileges??"";const o=this.post.post_content?.flatMap(c=>c.fields.filter(l=>"media"===l.type&&l.value?.id))[0];o?.value?.id&&this.mediaService.getById(o.value.value).subscribe({next:c=>{this.media=c.result,this.mediaLoaded.emit()}})}}showDetails(){this.details.next(!0)}postClicked(a){this.selectable&&(a.stopPropagation(),this.isChecked=!this.isChecked,this.selected.emit(this.isChecked))}deletedHandle(){this.feedView?this.deleted.emit():this.onDeleted.next(this.post)}statusChangedHandle(){this.statusChanged.emit()}static \u0275fac=function(o){return new(o||d)(t.Y36(e.yJ))};static \u0275cmp=t.Xpm({type:d,selectors:[["app-post-preview"]],inputs:{post:"post",user:"user",feedView:"feedView",selectable:"selectable",isChecked:"isChecked"},outputs:{selected:"selected",edit:"edit",refresh:"refresh",deleted:"deleted",statusChanged:"statusChanged",mediaLoaded:"mediaLoaded"},features:[t.TTD],decls:1,vars:1,consts:[["class","post",3,"ngStyle","ngClass","click",4,"ngIf"],[1,"post",3,"ngStyle","ngClass","click"],[1,"post__head"],[4,"ngIf"],[3,"post","feedView","editable","deleteable","refresh","edit","deleted","statusChanged"],["class","post__twitter",4,"ngIf"],[1,"post__main"],[1,"post__content"],["class","post__visual",4,"ngIf"],["class","post__more",4,"ngIf"],[1,"post__metadata",3,"post"],[3,"ngModel","ngModelChange"],[1,"post__twitter"],[3,"id"],[1,"post__visual"],[3,"src","alt"],[1,"post__more"],["size","small","fill","clear",3,"expand","buttonClick"]],template:function(o,c){1&o&&t.YNc(0,s,12,18,"div",0),2&o&&t.Q6J("ngIf",c.post)},dependencies:[m.mk,m.O5,m.PC,u.JJ,u.On,x.oG,f.r,v.g,C.I,w.$,P.X$],styles:['.post--feed[_ngcontent-%COMP%]{padding:24px;cursor:pointer;min-height:100%;border-radius:4px;background:var(--color-light);box-shadow:inset 0 0 0 1px var(--color-neutral-30)}@media only screen and (max-width: 1024px){.post--feed[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:8px;padding-inline-end:16px;padding-inline-start:24px}}.post--selectable[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.post__head[_ngcontent-%COMP%]{display:flex;font-size:13px;margin-bottom:8px;align-items:center;justify-content:flex-end}.post--selectable[_ngcontent-%COMP%]   .post__head[_ngcontent-%COMP%]{justify-content:space-between}.post__head[_ngcontent-%COMP%]  .mat-checkbox-inner-container{margin-inline-end:0!important}.post__head[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}.post__visual[_ngcontent-%COMP%]{margin-top:8px;overflow:hidden;max-height:200px;border-radius:4px;position:relative}.post__visual[_ngcontent-%COMP%]:before{content:"";display:block;padding-top:50%}.post__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{top:0;left:0;width:100%;height:100%;object-fit:cover;position:absolute}.post__twitter[_ngcontent-%COMP%]{height:216px;overflow:auto;padding-top:8px;position:relative;margin-bottom:8px;padding-bottom:8px;scroll-behavior:smooth;padding-inline-end:8px;margin-inline-end:-12px;-webkit-overflow-scrolling:touch;--scrollbar-background: var(--color-light)}@media only screen and (max-width: 1024px){.post__twitter[_ngcontent-%COMP%]{padding-inline-end:0;margin-inline-end:0}}.post__twitter[_ngcontent-%COMP%]   app-twitter-widget[_ngcontent-%COMP%]{z-index:5;display:block;height:100%;position:relative}.post__content[_ngcontent-%COMP%]{flex:1 1 100%;font-size:14px;line-height:1.3;font-weight:400;word-break:break-word}.post__content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;line-height:1.28;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.post__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;overflow:hidden;word-break:break-word;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;line-clamp:5;-webkit-box-orient:vertical}.post__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.post__more[_ngcontent-%COMP%]{margin-top:8px;text-align:right}.post__more[_ngcontent-%COMP%]   mzima-client-button[_ngcontent-%COMP%]{vertical-align:top;display:inline-block}.post__metadata[_ngcontent-%COMP%]{display:block;margin-top:8px}']})}}}]);
//# sourceMappingURL=84.21a910976af8a864.js.map