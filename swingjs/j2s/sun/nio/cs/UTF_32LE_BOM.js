(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[[0,'sun.nio.cs.StandardCharsets',['sun.nio.cs.UTF_32Coder','.Decoder'],['sun.nio.cs.UTF_32Coder','.Encoder']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UTF_32LE_BOM", null, 'sun.nio.cs.Unicode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$SA.apply(this,["X-UTF-32LE-BOM", $I$(1).aliases_UTF_32LE_BOM]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$', function () {
return "X-UTF-32LE-BOM";
});

Clazz.newMeth(C$, 'newDecoder$', function () {
return Clazz.new_($I$(2,1).c$$java_nio_charset_Charset$I,[this, 2]);
});

Clazz.newMeth(C$, 'newEncoder$', function () {
return Clazz.new_($I$(3,1).c$$java_nio_charset_Charset$I$Z,[this, 2, true]);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
