(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fbcc02a"],{"04d1":function(t,e,o){var a=o("342f"),n=a.match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},"0cb2":function(t,e,o){var a=o("e330"),n=o("7b0b"),r=Math.floor,s=a("".charAt),i=a("".replace),l=a("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,o,a,d,m){var p=o+t.length,f=a.length,h=u;return void 0!==d&&(d=n(d),h=c),i(m,h,(function(n,i){var c;switch(s(i,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,o);case"'":return l(e,p);case"<":c=d[l(i,1,-1)];break;default:var u=+i;if(0===u)return n;if(u>f){var m=r(u/10);return 0===m?n:m<=f?void 0===a[m-1]?s(i,1):a[m-1]+s(i,1):n}c=a[u-1]}return void 0===c?"":c}))}},"0d03":function(t,e,o){var a=o("e330"),n=o("6eeb"),r=Date.prototype,s="Invalid Date",i="toString",l=a(r[i]),c=a(r.getTime);String(new Date(NaN))!=s&&n(r,i,(function(){var t=c(this);return t===t?l(this):s}))},"14c3":function(t,e,o){var a=o("da84"),n=o("c65b"),r=o("825a"),s=o("1626"),i=o("c6b6"),l=o("9263"),c=a.TypeError;t.exports=function(t,e){var o=t.exec;if(s(o)){var a=n(o,t,e);return null!==a&&r(a),a}if("RegExp"===i(t))return n(l,t,e);throw c("RegExp#exec called on incompatible receiver")}},"25f0":function(t,e,o){"use strict";var a=o("e330"),n=o("5e77").PROPER,r=o("6eeb"),s=o("825a"),i=o("3a9b"),l=o("577e"),c=o("d039"),u=o("ad6d"),d="toString",m=RegExp.prototype,p=m[d],f=a(u),h=c((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),b=n&&p.name!=d;(h||b)&&r(RegExp.prototype,d,(function(){var t=s(this),e=l(t.source),o=t.flags,a=l(void 0===o&&i(m,t)&&!("flags"in m)?f(t):o);return"/"+e+"/"+a}),{unsafe:!0})},"498a":function(t,e,o){"use strict";var a=o("23e7"),n=o("58a8").trim,r=o("c8d2");a({target:"String",proto:!0,forced:r("trim")},{trim:function(){return n(this)}})},"4e82":function(t,e,o){"use strict";var a=o("23e7"),n=o("e330"),r=o("59ed"),s=o("7b0b"),i=o("07fa"),l=o("577e"),c=o("d039"),u=o("addb"),d=o("a640"),m=o("04d1"),p=o("d998"),f=o("2d00"),h=o("512c"),b=[],g=n(b.sort),v=n(b.push),S=c((function(){b.sort(void 0)})),x=c((function(){b.sort(null)})),y=d("sort"),k=!c((function(){if(f)return f<70;if(!(m&&m>3)){if(p)return!0;if(h)return h<603;var t,e,o,a,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(a=0;a<47;a++)b.push({k:e+a,v:o})}for(b.sort((function(t,e){return e.v-t.v})),a=0;a<b.length;a++)e=b[a].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}})),_=S||!x||!y||!k,U=function(t){return function(e,o){return void 0===o?-1:void 0===e?1:void 0!==t?+t(e,o)||0:l(e)>l(o)?1:-1}};a({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&r(t);var e=s(this);if(k)return void 0===t?g(e):g(e,t);var o,a,n=[],l=i(e);for(a=0;a<l;a++)a in e&&v(n,e[a]);u(n,U(t)),o=n.length,a=0;while(a<o)e[a]=n[a++];while(a<l)delete e[a++];return e}})},"512c":function(t,e,o){var a=o("342f"),n=a.match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},5319:function(t,e,o){"use strict";var a=o("2ba4"),n=o("c65b"),r=o("e330"),s=o("d784"),i=o("d039"),l=o("825a"),c=o("1626"),u=o("5926"),d=o("50c4"),m=o("577e"),p=o("1d80"),f=o("8aa5"),h=o("dc4a"),b=o("0cb2"),g=o("14c3"),v=o("b622"),S=v("replace"),x=Math.max,y=Math.min,k=r([].concat),_=r([].push),U=r("".indexOf),C=r("".slice),w=function(t){return void 0===t?t:String(t)},E=function(){return"$0"==="a".replace(/./,"$0")}(),R=function(){return!!/./[S]&&""===/./[S]("a","$0")}(),P=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,o){var r=R?"$":"$0";return[function(t,o){var a=p(this),r=void 0==t?void 0:h(t,S);return r?n(r,t,a,o):n(e,m(a),t,o)},function(t,n){var s=l(this),i=m(t);if("string"==typeof n&&-1===U(n,r)&&-1===U(n,"$<")){var p=o(e,s,i,n);if(p.done)return p.value}var h=c(n);h||(n=m(n));var v=s.global;if(v){var S=s.unicode;s.lastIndex=0}var E=[];while(1){var R=g(s,i);if(null===R)break;if(_(E,R),!v)break;var P=m(R[0]);""===P&&(s.lastIndex=f(i,d(s.lastIndex),S))}for(var T="",A=0,I=0;I<E.length;I++){R=E[I];for(var V=m(R[0]),N=x(y(u(R.index),i.length),0),$=[],B=1;B<R.length;B++)_($,w(R[B]));var O=R.groups;if(h){var L=k([V],$,N,i);void 0!==O&&_(L,O);var D=m(a(n,void 0,L))}else D=b(V,i,N,$,O,n);N>=A&&(T+=C(i,A,N)+D,A=N+V.length)}return T+C(i,A)}]}),!P||!E||R)},"8aa5":function(t,e,o){"use strict";var a=o("6547").charAt;t.exports=function(t,e,o){return e+(o?a(t,e).length:1)}},a640:function(t,e,o){"use strict";var a=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&a((function(){o.call(null,e||function(){throw 1},1)}))}},a9c7:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("svg-icon",{staticClass:"gayhub",staticStyle:{float:"left"},attrs:{"icon-class":"github"},on:{click:t.goToProject}}),o("svg-icon",{staticClass:"dianbao",staticStyle:{float:"left","margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:t.gotoTgChannel}}),o("svg-icon",{staticClass:"bilibili",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"bilibili"},on:{click:t.gotoBiliBili}}),o("svg-icon",{staticClass:"youguan",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"youtube"},on:{click:t.gotoYouTuBe}}),o("svg-icon",{staticClass:"channel",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:t.gotoTgChannel}}),o("div",{staticStyle:{"text-align":"center","font-size":"15px"}},[t._v("jess的订阅转换")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:t.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持各种订阅链接或单节点链接，多个链接每行一个或用 | 分隔"},model:{value:t.form.sourceSubUrl,callback:function(e){t.$set(t.form,"sourceSubUrl",e)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"生成类型:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:t.form.clientType,callback:function(e){t.$set(t.form,"clientType",e)},expression:"form.clientType"}},t._l(t.options.clientTypes,(function(t,e){return o("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入自己的后端"},on:{change:t.selectChanged},model:{value:t.form.customBackend,callback:function(e){t.$set(t.form,"customBackend",e)},expression:"form.customBackend"}},t._l(t.options.customBackend,(function(t,e){return o("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"短链选择:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入其他可用短链API"},model:{value:t.form.shortType,callback:function(e){t.$set(t.form,"shortType",e)},expression:"form.shortType"}},t._l(t.options.shortTypes,(function(t,e){return o("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:t.form.remoteConfig,callback:function(e){t.$set(t.form,"remoteConfig",e)},expression:"form.remoteConfig"}},t._l(t.options.remoteConfig,(function(e){return o("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)})),1)],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-collapse",[o("el-collapse-item",[o("template",{slot:"title"},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"高级功能:"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"limr",icon:"el-icon-more-outline"}},[t._v("点击显示/隐藏 ")])],1)],1),o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"要保留的节点，支持正则"},model:{value:t.form.includeRemarks,callback:function(e){t.$set(t.form,"includeRemarks",e)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"要排除的节点，支持正则"},model:{value:t.form.excludeRemarks,callback:function(e){t.$set(t.form,"excludeRemarks",e)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"节点命名:"}},[o("el-input",{attrs:{placeholder:"举例：`a@b``1@2`，|符可用\\转义"},model:{value:t.form.rename,callback:function(e){t.$set(t.form,"rename",e)},expression:"form.rename"}})],1),o("el-form-item",{attrs:{label:"远程设备:"}},[o("el-input",{attrs:{placeholder:"用于设置QuantumultX的远程设备ID"},model:{value:t.form.devid,callback:function(e){t.$set(t.form,"devid",e)},expression:"form.devid"}})],1),o("el-form-item",{attrs:{label:"更新间隔:"}},[o("el-input",{attrs:{placeholder:"返用于设置托管配置更新间隔，单位为天"},model:{value:t.form.interval,callback:function(e){t.$set(t.form,"interval",e)},expression:"form.interval"}})],1),o("el-form-item",{attrs:{label:"订阅命名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名，可以在支持文件名的客户端中显示出来"},model:{value:t.form.filename,callback:function(e){t.$set(t.form,"filename",e)},expression:"form.filename"}})],1),o("el-form-item",{staticClass:"eldiy",attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"仅输出节点信息",border:""},model:{value:t.form.nodeList,callback:function(e){t.$set(t.form,"nodeList",e)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:t.form.extraset,callback:function(e){t.$set(t.form,"extraset",e)},expression:"form.extraset"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:t.form.emoji,callback:function(e){t.$set(t.form,"emoji",e)},expression:"form.emoji"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"插入默认节点"},model:{value:t.form.insert,callback:function(e){t.$set(t.form,"insert",e)},expression:"form.insert"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:t.form.udp,callback:function(e){t.$set(t.form,"udp",e)},expression:"form.udp"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"开启TLS_1.3"},model:{value:t.form.tls13,callback:function(e){t.$set(t.form,"tls13",e)},expression:"form.tls13"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 TFO"},model:{value:t.form.tfo,callback:function(e){t.$set(t.form,"tfo",e)},expression:"form.tfo"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"基础节点排序"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:t.form.tpl.clash.doh,callback:function(e){t.$set(t.form.tpl.clash,"doh",e)},expression:"form.tpl.clash.doh"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"插入节点类型"},model:{value:t.form.appendType,callback:function(e){t.$set(t.form,"appendType",e)},expression:"form.appendType"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:t.form.tpl.surge.doh,callback:function(e){t.$set(t.form.tpl.surge,"doh",e)},expression:"form.tpl.surge.doh"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Surge强制更新"},model:{value:t.form.surgeForce,callback:function(e){t.$set(t.form,"surgeForce",e)},expression:"form.surgeForce"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"展开规则全文"},model:{value:t.form.expand,callback:function(e){t.$set(t.form,"expand",e)},expression:"form.expand"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash新字段名"},model:{value:t.form.new_name,callback:function(e){t.$set(t.form,"new_name",e)},expression:"form.new_name"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"跳过证书验证"},model:{value:t.form.scv,callback:function(e){t.$set(t.form,"scv",e)},expression:"form.scv"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"过滤不支持节点"},model:{value:t.form.fdn,callback:function(e){t.$set(t.form,"fdn",e)},expression:"form.fdn"}})],1)],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("更多选项")])],1)],1)],1)],2)],1)],1),o("div",{staticStyle:{"margin-top":"30px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("el-button",{attrs:{type:"zhuti"},on:{click:t.change}},[o("i",{staticClass:"el-icon-sunny",attrs:{id:"rijian"}}),o("i",{staticClass:"el-icon-moon",attrs:{id:"yejian"}})])],1),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:t.customSubUrl,callback:function(e){t.customSubUrl=e},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[t._v("复制 ")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:t.customShortSubUrl,callback:function(e){t.customShortSubUrl=e},expression:"customShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.customShortSubUrl,expression:"customShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[t._v("复制 ")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===t.form.sourceSubUrl.length||t.btnBoolean},on:{click:t.makeUrl}},[t._v("生成订阅链接 ")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:t.loading,disabled:0===t.customSubUrl.length},on:{click:t.makeShortUrl}},[t._v("生成短链接 ")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"250px"},attrs:{type:"primary",icon:"el-icon-upload",loading:t.loading},on:{click:function(e){t.dialogUploadConfigVisible=!0}}},[t._v("进阶自定义配置 ")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{title:"请选择需要观看的视频教程",visible:t.centerDialogVisible,"show-close":!1,width:"40vh",top:"30vh",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",icon:"el-icon-video-play"},on:{click:function(e){t.gotoBasicVideo(),t.centerDialogVisible=!1}}},[t._v("基础视频教程 ")])],1),o("div",{staticStyle:{"text-align":"center",margin:"3vh 0 2vh"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"200px"},attrs:{type:"danger",icon:"el-icon-video-play"},on:{click:function(e){t.gotoAdvancedVideo(),t.centerDialogVisible=!1}}},[t._v("进阶视频教程 ")])],1),o("div",{staticStyle:{"text-align":"center",margin:"3vh 0 2vh"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"200px"},attrs:{type:"warning",icon:"el-icon-download"},on:{click:t.toolsDown}},[t._v("代理工具集合 ")])],1)]),o("el-dialog",{attrs:{visible:t.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%"},on:{"update:visible":function(e){t.dialogUploadConfigVisible=e}}},[o("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"远程配置上传",name:"first"}},[o("el-link",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"danger",href:t.sampleConfig,target:"_blank",icon:"el-icon-info"}},[t._v(" 参考案例 ")]),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"50000","show-word-limit":""},model:{value:t.uploadConfig,callback:function(e){t.uploadConfig=e},expression:"uploadConfig"}})],1)],1),o("div",{staticStyle:{float:"right"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.uploadConfig="",t.dialogUploadConfigVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===t.uploadConfig.length},on:{click:t.confirmUploadConfig}},[t._v("确 定 ")])],1)],1),o("el-tab-pane",{attrs:{label:"JS排序节点",name:"second"}},[o("el-link",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"success",href:t.scriptConfig,target:"_blank",icon:"el-icon-info"}},[t._v(" 参考案例 ")]),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadScript"}},[o("el-input",{attrs:{placeholder:"使用JavaScript对节点进行自定义排序，本功能后端接口自动模版化，JS无需以挤在一行加换行符的形式输入，注意：如果你还需要自定义上传远程配置，此操作务必在其之后进行，另外，如果你需要同时进行JS排序和筛选节点，二三栏的确定按钮只需要任意按一个即可全部提交！！",type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"50000","show-word-limit":""},model:{value:t.uploadScript,callback:function(e){t.uploadScript=e},expression:"uploadScript"}})],1)],1),o("div",{staticStyle:{float:"right"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.uploadScript="",t.dialogUploadConfigVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===t.uploadScript.length},on:{click:t.confirmUploadScript}},[t._v("确 定 ")])],1)],1),o("el-tab-pane",{attrs:{label:"JS筛选节点",name:"third"}},[o("el-link",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"warning",href:t.filterConfig,target:"_blank",icon:"el-icon-info"}},[t._v(" 参考案例 ")]),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadFilter"}},[o("el-input",{attrs:{placeholder:"使用JavaScript对节点进行进阶筛选，本功能后端接口自动模版化，JS无需以挤在一行加换行符的形式输入，注意：如果你还需要自定义上传远程配置，此操作务必在其之后进行，另外，如果你需要同时进行JS排序和筛选节点，二三栏的确定按钮只需要任意按一个即可全部提交！",type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"50000","show-word-limit":""},model:{value:t.uploadFilter,callback:function(e){t.uploadFilter=e},expression:"uploadFilter"}})],1)],1),o("div",{staticStyle:{float:"right"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.uploadFilter="",t.dialogUploadConfigVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===t.uploadFilter.length},on:{click:t.confirmUploadScript}},[t._v("确 定 ")])],1)],1)],1)],1)],1)},n=[],r=(o("0d03"),o("ac1f"),o("5319"),o("d3b7"),o("25f0"),o("4e82"),o("498a"),o("c975"),Object({NODE_ENV:"production",VUE_APP_BOT_LINK:"https://t.me/subconverter",VUE_APP_SCRIPT_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L703-L716",VUE_APP_FILTER_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L514-L531",VUE_APP_SUBCONVERTER_REMOTE_CONFIG:"https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini",VUE_APP_SUBCONVERTER_DEFAULT_BACKEND:"https://sub.789.st",VUE_APP_MYURLS_DEFAULT_BACKEND:"https://d1.mk",VUE_APP_CONFIG_UPLOAD_BACKEND:"https://subapi.v1.mk",BASE_URL:"/"}).VUE_APP_PROJECT),s="https://subapi.v1.mk/api.php",i="https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini",l="https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L703-L716",c="https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L514-L531",u="https://sub.789.st/sub?",d="https://d1.mk/short",m="https://subapi.v1.mk/sub.php",p="https://t.me/subconverter",f=Object({NODE_ENV:"production",VUE_APP_BOT_LINK:"https://t.me/subconverter",VUE_APP_SCRIPT_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L703-L716",VUE_APP_FILTER_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L514-L531",VUE_APP_SUBCONVERTER_REMOTE_CONFIG:"https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini",VUE_APP_SUBCONVERTER_DEFAULT_BACKEND:"https://sub.789.st",VUE_APP_MYURLS_DEFAULT_BACKEND:"https://d1.mk",VUE_APP_CONFIG_UPLOAD_BACKEND:"https://subapi.v1.mk",BASE_URL:"/"}).VUE_APP_YOUTUBE_LINK,h=Object({NODE_ENV:"production",VUE_APP_BOT_LINK:"https://t.me/subconverter",VUE_APP_SCRIPT_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L703-L716",VUE_APP_FILTER_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L514-L531",VUE_APP_SUBCONVERTER_REMOTE_CONFIG:"https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini",VUE_APP_SUBCONVERTER_DEFAULT_BACKEND:"https://sub.789.st",VUE_APP_MYURLS_DEFAULT_BACKEND:"https://d1.mk",VUE_APP_CONFIG_UPLOAD_BACKEND:"https://subapi.v1.mk",BASE_URL:"/"}).VUE_APP_BILIBILI_LINK,b=Object({NODE_ENV:"production",VUE_APP_BOT_LINK:"https://t.me/subconverter",VUE_APP_SCRIPT_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L703-L716",VUE_APP_FILTER_CONFIG:"https://github.com/tindy2013/subconverter/blob/a24cb7c00a7e5a71ef2e6c0d64d84d91bc7a21d6/README-cn.md?plain=1#L514-L531",VUE_APP_SUBCONVERTER_REMOTE_CONFIG:"https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini",VUE_APP_SUBCONVERTER_DEFAULT_BACKEND:"https://sub.789.st",VUE_APP_MYURLS_DEFAULT_BACKEND:"https://d1.mk",VUE_APP_CONFIG_UPLOAD_BACKEND:"https://subapi.v1.mk",BASE_URL:"/"}).VUE_APP_PROXYTOOLS,g={data:function(){return{backendVersion:"",centerDialogVisible:!1,activeName:"first",isPC:!0,btnBoolean:!1,options:{clientTypes:{Clash:"clash",ClashR:"clashr","混合订阅（mixed）":"mixed",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",Surfboard:"surfboard","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksR:"ssr",ShadowsocksD:"ssd",V2Ray:"v2ray",Trojan:"trojan"},shortTypes:{"d1.mk":"https://d1.mk/short","v1.mk":"https://v1.mk/short","dlj.tf":"https://dlj.tf/short","suo.yt":"https://suo.yt/short","sub.cm":"https://sub.cm/short"},customBackend:{"789后端":"https://sub.789.st/sub?","边缘API":"https://pub-api-1.bianyuan.xyz/sub?","肥羊后端":"https://api.v1.mk/sub?","肥羊备用后端":"https://sub.d1.mk/sub?","つつ-国内优化":"https://api.tsutsu.one/sub?"},backendOptions:[{value:"https://sub.789.st/sub?"},{value:"https://pub-api-1.bianyuan.xyz/sub?"},{value:"https://api.v1.mk/sub?"},{value:"https://sub.d1.mk/sub?"},{value:"https://api.tsutsu.one/sub?"}],remoteConfig:[{label:"jess自用规则",options:[{label:"jess自用-神机规则",value:"https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini"}]},{label:"用户投稿",options:[{label:"酷酷精简规则",value:"https://github.com/xiaoshenxian233/cool/blob/rule/coolcool.ini"},{label:"酷酷复合规则",value:"https://github.com/xiaoshenxian233/cool/blob/rule/complex.ini"}]},{label:"つつの专属规则",options:[{label:"つつ-全分组",value:"https://cdn.jsdelivr.net/gh/lhl77/sub-ini@main/tsutsu-full.ini"},{label:"つつ-全分组-地区自动选择",value:"https://cdn.jsdelivr.net/gh/lhl77/sub-ini@main/tsutsu-full-urltest.ini"},{label:"つつ-超jb精简分组-含国内分流",value:"https://cdn.jsdelivr.net/gh/lhl77/sub-ini@main/tsutsu-mini-gfw.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"https://sub.789.st/sub?",shortType:"https://d1.mk/short",remoteConfig:"https://gitlab.com/fengguowudi/ini/-/raw/master/jess-sjgz.ini",excludeRemarks:"",includeRemarks:"",filename:"",rename:"",devid:"",interval:"",emoji:!0,nodeList:!1,extraset:!1,tls13:!1,surgeForce:!1,udp:!1,tfo:!1,sort:!1,expand:!0,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",customShortSubUrl:"",dialogUploadConfigVisible:!1,uploadFilter:"",uploadScript:"",uploadConfig:"",myBot:p,filterConfig:c,scriptConfig:l,sampleConfig:i}},created:function(){document.title="在线订阅转换工具",this.isPC=this.$getOS().isPc},mounted:function(){var t=this;this.form.clientType="clash",this.getBackendVersion(),this.anhei();var e=window.matchMedia("(prefers-color-scheme: light)"),o=window.matchMedia("(prefers-color-scheme: dark)"),a=function(e){e.matches&&t.anhei()};"function"!==typeof o.addEventListener&&"function"!==typeof e.addEventListener||(e.addEventListener("change",a),o.addEventListener("change",a))},methods:{selectChanged:function(){this.getBackendVersion()},anhei:function(){var t=window.localStorage.getItem("localTheme"),e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)"),o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");t?document.getElementsByTagName("body")[0].className=t:null!=t&&"undefined"!=t&&""!=t||((new Date).getHours()>=19||(new Date).getHours()<7?document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"):document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),e&&e.matches&&document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),o&&o.matches&&document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"))},change:function(){var t=document.getElementsByTagName("body")[0].className;"light-mode"===t&&(document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"),window.localStorage.setItem("localTheme","dark-mode")),"dark-mode"===t&&(document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),window.localStorage.setItem("localTheme","light-mode"))},onCopy:function(){this.$message.success("已复制")},goToProject:function(){window.open(r)},gotoTgChannel:function(){window.open(p)},gotoBiliBili:function(){window.open(h)},gotoYouTuBe:function(){window.open(f)},toolsDown:function(){window.open(b)},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?u:this.form.customBackend,e=this.form.sourceSubUrl;e=e.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(e)+"&insert="+this.form.insert,""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),""!==this.form.rename&&(this.customSubUrl+="&rename="+encodeURIComponent(this.form.rename)),""!==this.form.interval&&(this.customSubUrl+="&interval="+encodeURIComponent(86400*this.form.interval)),""!==this.form.devid&&(this.customSubUrl+="&dev_id="+encodeURIComponent(this.form.devid)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.form.tls13&&(this.customSubUrl+="&tls13="+this.form.tls13.toString()),this.form.surgeForce&&(this.customSubUrl+="&strict="+this.form.surgeForce.toString()),this.form.sort&&(this.customSubUrl+="&sort="+this.form.sort.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&expand="+this.form.expand.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString()),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var t=this,e=""===this.form.shortType?d:this.form.shortType;this.loading=!0;var o=new FormData;o.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(e,o,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(e){1===e.data.Code&&""!==e.data.ShortUrl?(t.customShortSubUrl=e.data.ShortUrl,t.$copyText(e.data.ShortUrl),t.$message.success("短链接已复制到剪贴板（IOS设备和Safari浏览器不支持自动复制API，需手动点击复制按钮）")):t.$message.error("短链接获取失败："+e.data.Message)}))["catch"]((function(){t.$message.error("短链接获取失败")}))["finally"]((function(){t.loading=!1}))},confirmUploadConfig:function(){var t=this;this.loading=!0;var e=new FormData;e.append("config",encodeURIComponent(this.uploadConfig)),this.$axios.post(m,e,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(e){0===e.data.code&&""!==e.data.data?(t.$message.success("远程配置上传成功，配置链接已复制到剪贴板"),t.form.remoteConfig=e.data.data,t.$copyText(t.form.remoteConfig),t.dialogUploadConfigVisible=!1):t.$message.error("远程配置上传失败: "+e.data.msg)}))["catch"]((function(){t.$message.error("远程配置上传失败")}))["finally"]((function(){t.loading=!1}))},renderPost:function(){var t=new FormData;return t.append("target",encodeURIComponent(this.form.clientType)),t.append("url",encodeURIComponent(this.form.sourceSubUrl)),t.append("config",encodeURIComponent(this.form.remoteConfig)),t.append("exclude",encodeURIComponent(this.form.excludeRemarks)),t.append("include",encodeURIComponent(this.form.includeRemarks)),t.append("rename",encodeURIComponent(this.form.rename)),t.append("tls13",encodeURIComponent(this.form.tls13.toString())),t.append("surgeForce",encodeURIComponent(this.form.surgeForce.toString())),t.append("emoji",encodeURIComponent(this.form.emoji.toString())),t.append("list",encodeURIComponent(this.form.nodeList.toString())),t.append("udp",encodeURIComponent(this.form.udp.toString())),t.append("tfo",encodeURIComponent(this.form.tfo.toString())),t.append("expand",encodeURIComponent(this.form.expand.toString())),t.append("scv",encodeURIComponent(this.form.scv.toString())),t.append("fdn",encodeURIComponent(this.form.fdn.toString())),t.append("sdoh",encodeURIComponent(this.form.tpl.surge.doh.toString())),t.append("cdoh",encodeURIComponent(this.form.tpl.clash.doh.toString())),t.append("newname",encodeURIComponent(this.form.new_name.toString())),t},confirmUploadScript:function(){var t=this;if(""===this.form.sourceSubUrl.trim())return this.$message.error("订阅链接不能为空"),!1;this.loading=!0;var e=this.renderPost();e.append("sortscript",encodeURIComponent(this.uploadScript)),e.append("filterscript",encodeURIComponent(this.uploadFilter)),this.$axios.post(s,e,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(e){0===e.data.code&&""!==e.data.data?(t.$message.success("自定义JS上传成功，订阅链接已复制到剪贴板（IOS设备和Safari浏览器不支持自动复制API，需手动点击复制按钮）"),t.customSubUrl=e.data.data,t.$copyText(e.data.data),t.dialogUploadConfigVisible=!1,t.btnBoolean=!0):t.$message.error("自定义JS上传失败: "+e.data.msg)}))["catch"]((function(){t.$message.error("自定义JS上传失败")}))["finally"]((function(){t.loading=!1}))},getBackendVersion:function(){var t=this;this.$axios.get(this.form.customBackend.substring(0,this.form.customBackend.length-5)+"/version").then((function(e){t.backendVersion=e.data.replace(/backend\n$/gm,""),t.backendVersion=t.backendVersion.replace("subconverter","SubConverter");var o=-1!==t.form.customBackend.indexOf("api.v1.mk")||-1!==t.form.customBackend.indexOf("sub.d1.mk"),a=-1!==t.form.customBackend.indexOf("v.id9.cc"),n=-1!==t.form.customBackend.indexOf("127.0.0.1");o?t.$message.success("".concat(t.backendVersion)+"肥羊后端支持vless+trojan xtls订阅转换"):a?t.$message.success("".concat(t.backendVersion)+"品云后端支持vless+trojan xtls订阅转换"):n?t.$message.success("".concat(t.backendVersion)+"本地局域网自建版后端"):t.$message.success("".concat(t.backendVersion)+"官方原版后端不支持vless/trojan xtls订阅转换")}))["catch"]((function(){t.$message.error("请求SubConverter版本号返回数据失败，该后端不可用！")}))}}},v=g,S=o("2877"),x=Object(S["a"])(v,a,n,!1,null,null,null);e["default"]=x.exports},addb:function(t,e,o){var a=o("f36a"),n=Math.floor,r=function(t,e){var o=t.length,l=n(o/2);return o<8?s(t,e):i(t,r(a(t,0,l),e),r(a(t,l),e),e)},s=function(t,e){var o,a,n=t.length,r=1;while(r<n){a=r,o=t[r];while(a&&e(t[a-1],o)>0)t[a]=t[--a];a!==r++&&(t[a]=o)}return t},i=function(t,e,o,a){var n=e.length,r=o.length,s=0,i=0;while(s<n||i<r)t[s+i]=s<n&&i<r?a(e[s],o[i])<=0?e[s++]:o[i++]:s<n?e[s++]:o[i++];return t};t.exports=r},c8d2:function(t,e,o){var a=o("5e77").PROPER,n=o("d039"),r=o("5899"),s="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||s[t]()!==s||a&&r[t].name!==t}))}},c975:function(t,e,o){"use strict";var a=o("23e7"),n=o("e330"),r=o("4d64").indexOf,s=o("a640"),i=n([].indexOf),l=!!i&&1/i([1],1,-0)<0,c=s("indexOf");a({target:"Array",proto:!0,forced:l||!c},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return l?i(this,t,e)||0:r(this,t,e)}})},d784:function(t,e,o){"use strict";o("ac1f");var a=o("e330"),n=o("6eeb"),r=o("9263"),s=o("d039"),i=o("b622"),l=o("9112"),c=i("species"),u=RegExp.prototype;t.exports=function(t,e,o,d){var m=i(t),p=!s((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),f=p&&!s((function(){var e=!1,o=/a/;return"split"===t&&(o={},o.constructor={},o.constructor[c]=function(){return o},o.flags="",o[m]=/./[m]),o.exec=function(){return e=!0,null},o[m](""),!e}));if(!p||!f||o){var h=a(/./[m]),b=e(m,""[t],(function(t,e,o,n,s){var i=a(t),l=e.exec;return l===r||l===u.exec?p&&!s?{done:!0,value:h(e,o,n)}:{done:!0,value:i(o,e,n)}:{done:!1}}));n(String.prototype,t,b[0]),n(u,m,b[1])}d&&l(u[m],"sham",!0)}},d998:function(t,e,o){var a=o("342f");t.exports=/MSIE|Trident/.test(a)}}]);
//# sourceMappingURL=chunk-6fbcc02a.53f0b99f.js.map