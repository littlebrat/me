import B from"./button.esm.079fea4d.js";import{s as h}from"./index.esm.5c9f3883.js";import S from"./tieredmenu.esm.c901f176.js";import{O as w,U as g,i as f,t as c,v as C,L as l,z as d,A as r,$ as b,x as $,V as a,_ as I,a0 as D,a2 as k}from"./entry.c5b3e3ea.js";import{s as z}from"./basecomponent.esm.300800fd.js";import"./badge.esm.97fa3269.js";import"./index.esm.95832743.js";import"./baseicon.esm.a1a237ed.js";import"./overlayeventbus.esm.4da354e8.js";import"./portal.esm.5fc92c2d.js";import"./index.esm.73584a2d.js";function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(t)}function u(t,n,e){return n=P(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function P(t){var n=V(t,"string");return s(n)=="symbol"?n:String(n)}function V(t,n){if(s(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var p=e.call(t,n||"default");if(s(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Z=`
@layer primevue {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton {
        display: flex;
    }
}
`,E={root:function(n){var e=n.props;return["p-splitbutton p-component",u(u(u(u(u(u(u({},"p-button-".concat(e.severity),e.severity),"p-button-raised",e.raised),"p-button-rounded",e.rounded),"p-button-text",e.text),"p-button-outlined",e.outlined),"p-button-sm",e.size==="small"),"p-button-lg",e.size==="large")]},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton"},T=w.extend({name:"splitbutton",css:Z,classes:E}),K={name:"BaseSplitButton",extends:z,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:T,provide:function(){return{$parentInstance:this}}},A={name:"SplitButton",extends:K,emits:["click"],data:function(){return{isExpanded:!1}},mounted:function(){var n=this;this.$watch("$refs.menu.visible",function(e){n.isExpanded=e})},methods:{onDropdownButtonClick:function(n){n&&n.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(n){(n.code==="ArrowDown"||n.code==="ArrowUp")&&(this.onDropdownButtonClick(),n.preventDefault())},onDefaultButtonClick:function(n){this.isExpanded&&this.$refs.menu.hide(n),this.$emit("click",n)}},computed:{ariaId:function(){return g()},containerClass:function(){return[this.cx("root"),this.class]}},components:{PVSButton:B,PVSMenu:S,ChevronDownIcon:h}},N=["data-pc-severity"];function M(t,n,e,p,y,i){var m=f("PVSButton"),v=f("PVSMenu");return c(),C("div",a({class:i.containerClass,style:t.style},t.ptm("root"),{"data-pc-name":"splitbutton","data-pc-severity":t.severity}),[l(t.$slots,"default",{},function(){return[d(m,a({type:"button",class:t.cx("button"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,"aria-label":t.label,onClick:i.onDefaultButtonClick},t.buttonProps,{pt:t.ptm("button"),unstyled:t.unstyled,"data-pc-section":"button"}),{icon:r(function(o){return[l(t.$slots,"icon",{class:b(o.class)},function(){return[$("span",a({class:[t.icon,o.class]},t.ptm("button").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),default:r(function(){return[l(t.$slots,"buttoncontent")]}),_:3},16,["class","label","disabled","severity","text","outlined","size","aria-label","onClick","pt","unstyled"])]}),d(m,a({ref:"button",type:"button",class:t.cx("menuButton"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":y.isExpanded,"aria-controls":i.ariaId+"_overlay",onClick:i.onDropdownButtonClick,onKeydown:i.onDropdownKeydown,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size},t.menuButtonProps,{pt:t.ptm("menuButton"),unstyled:t.unstyled,"data-pc-section":"menubutton"}),{icon:r(function(o){return[l(t.$slots,"menubuttonicon",{class:b(o.class)},function(){return[(c(),I(D(t.menuButtonIcon?"span":"ChevronDownIcon"),a({class:[t.menuButtonIcon,o.class]},t.ptm("menuButton").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","pt","unstyled"]),d(v,{ref:"menu",id:i.ariaId+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("menu")},k({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:r(function(o){return[l(t.$slots,"menuitemicon",{item:o.item,class:b(o.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:r(function(o){return[l(t.$slots,"item",{item:o.item,hasSubmenu:o.hasSubmenu,label:o.label,props:o.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,N)}A.render=M;export{A as default};
