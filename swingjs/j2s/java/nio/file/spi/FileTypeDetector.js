(function(){var P$=Clazz.newPackage("java.nio.file.spi"),I$=[[0,'RuntimePermission']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileTypeDetector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkPermission$', function () {
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(1,1).c$$S,["fileTypeDetector"]));
return null;
}, 1);

Clazz.newMeth(C$, 'c$$Void', function (ignore) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Void.apply(this, [C$.checkPermission$()]);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
