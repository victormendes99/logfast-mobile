(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n.p+"static/media/logfastlogo.54776055.png"},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(54),l=n(101);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d,m=s(s({},i.a),{},{colors:s(s({},i.a.colors),{},{primary:"#01236A",accent:"#02E7D9",text:"#707070",textSecondary:"#9B9B9B",backdrop:"rgba(107, 42, 238, .75)",background:"#fff",surface:"#fafafa",error:"#FC3C00",warning:"#FCA600",success:"#00D34D",grey:{50:"#FAFAFA",100:"#F0F0F0",200:"#D7D9DD",300:"#C4C4C4",400:"#9B9B9B"}}),shape:{borderRadius:"3px"},spacing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return 8*e+"px"}}),p=s(s({},l.a),{},{colors:s(s({},l.a.colors),{},{primary:m.colors.primary,background:m.colors.background,text:m.colors.text,card:m.colors.background,border:m.colors.grey[300]})}),f=m,b=n(190),g=n(274),h=function(e){var t=e.children;return r.a.createElement(g.b,{theme:f},r.a.createElement(b.a,{theme:f},t))},v=n(37),E=n(272),O=n(273),y=n(25),j=n(2),x=function(){return r.a.createElement(j.a,null,r.a.createElement(y.a,null,"Index"))},S=n(8),w=n.n(S),D=n(61),k=n.n(D),I=n(62),P=n(188),C=Object(I.a)(P.a)(d||(d=k()(["\n  margin: 50px auto;\n  padding: ",";\n  width: 100%;\n  max-width: 200px;\n  border-radius: ",";\n"])),(function(e){return e.theme.spacing(.5)}),(function(e){return e.theme.shape.borderRadius}));C.defaultProps={dark:!0,uppercase:!1};var A,F,T,B=C,R=n(189),V=Object(I.a)(R.a)(A||(A=k()(["\n  margin: 50px auto;\n  padding: ",";\n  width: 100%;\n  max-width: 200px;\n  border-radius: ",";\n"])),(function(e){return e.theme.spacing(.5)}),(function(e){return e.theme.shape.borderRadius})),z=Object(I.a)(j.a)(F||(F=k()(["\n  margin-bottom: 20px;\n  padding: ",";\n  width: 100%;\n"])),(function(e){return e.theme.spacing(.5)})),N=n(187),J=n(111),L=n.n(J),M=function(e){var t=e.navigation,n=Object(a.useState)(),o=w()(n,2),c=o[0],i=o[1],l=Object(a.useState)(null),u=w()(l,2),s=u[0],d=u[1],m=Object(a.useState)(),p=w()(m,2),f=p[0],b=p[1],g=Object(a.useState)(!1),h=w()(g,2),v=h[0],E=h[1];return Object(a.useEffect)((function(){L.a.get("https://logfast-api.herokuapp.com/api/search-itens",{params:{item:c,preventiva:v}}).then((function(e){var t=e.data.map((function(e){return{id:e.idSubInventario,title:e.descricao}}));d(t),console.log(t)})),console.log(s)}),[c]),r.a.createElement(j.a,{style:{flex:1,justifyContent:"flex-start",marginTop:10}},r.a.createElement(z,{style:{flexDirection:"row",alignItems:"center"}},r.a.createElement(V,{status:v?"checked":"unchecked",onPress:function(){E(!v)}}),r.a.createElement(y.a,{style:{fontWeight:"bold"},onPress:function(){E(!v)}},"Filtrar subinvent\xe1rio PREVENTIVA")),r.a.createElement(N.a,{clearOnFocus:!1,closeOnSubmit:!1,dataSet:s,onChangeText:function(e){return i(e)},onSelectItem:function(e){e&&b(e.id)},textInputProps:{placeholder:"Digite a descri\xe7\xe3o do item",autoCorrect:!1,autoCapitalize:"none",style:{paddingLeft:18}}}),r.a.createElement(B,{mode:"contained",onPress:function(){t.navigate("ItemDetail",{itemId:f})}},"Ver Item"))},U=n(186),q=Object(I.a)(U.a)(T||(T=k()(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 300px;\n"])));q.defaultProps={mode:"outlined"};var Q=q,W=function(e,t){var n=e.navigation.getState().routes[1].params.itemId,o=Object(a.useState)(null),c=w()(o,2),i=c[0],l=c[1],u=Object(a.useState)(!1),s=w()(u,2),d=s[0],m=s[1],p=Object(a.useState)(null),f=w()(p,2),b=f[0],g=f[1];return Object(a.useEffect)((function(){L.a.get("https://logfast-api.herokuapp.com/api/item",{params:{item:n}}).then((function(e){return e.data})).then((function(e){m(!0),g(e),console.log(b)}),(function(e){m(!0),l(e)}))}),[]),i?r.a.createElement(y.a,null,"Error"):d?r.a.createElement(j.a,{style:{flex:1,justifyContent:"space-evenly"}},r.a.createElement(Q,{label:"C\xf3digo",value:String(null==b?void 0:b.id),editable:!1}),r.a.createElement(Q,{label:"Descri\xe7\xe3o",value:null==b?void 0:b.descricao,editable:!1}),r.a.createElement(Q,{label:"Endere\xe7o",value:null==b?void 0:b.endereco,editable:!1}),r.a.createElement(Q,{label:"Quantidade",value:String(null==b?void 0:b.estoque),editable:!1}),r.a.createElement(Q,{label:"Valor UND",value:null==b?void 0:b.custoUnitario,editable:!1}),r.a.createElement(Q,{label:"SubInvent\xe1rio",value:null==b?void 0:b.subInventario,editable:!1})):r.a.createElement(y.a,null,"Loading...")},G=n(127),H=n.n(G),K=Object(O.a)(),X=function(){return r.a.createElement(E.a,{theme:p},r.a.createElement(K.Navigator,null,r.a.createElement(K.Screen,{name:"SearchItem",component:M,options:{headerTitleAlign:"center",headerTitle:function(){return r.a.createElement(v.a,{style:{width:150,height:40,resizeMode:"cover"},source:H.a})},headerStyle:{backgroundColor:"#01236A"}}}),r.a.createElement(K.Screen,{name:"ItemDetail",component:W,options:{headerTitleAlign:"center",headerTitle:function(){return r.a.createElement(v.a,{style:{width:150,height:40,resizeMode:"cover"},source:H.a})},headerStyle:{backgroundColor:"#01236A"}}}),r.a.createElement(K.Screen,{name:"Index",component:x})))};function Y(){return r.a.createElement(h,null,r.a.createElement(X,null))}},195:function(e,t,n){e.exports=n(265)}},[[195,1,2]]]);
//# sourceMappingURL=app.0ce1ad3e.chunk.js.map