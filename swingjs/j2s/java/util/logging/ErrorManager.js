(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ErrorManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.reported=false;
},1);

C$.$fields$=[['Z',['reported']]]

Clazz.newMeth(C$, 'error$S$Exception$I', function (msg, ex, code) {
if (this.reported) {
return;
}this.reported=true;
var text="java.util.logging.ErrorManager: " + code;
if (msg != null ) {
text=text + ": " + msg ;
}System.err.println$S(text);
if (ex != null ) {
ex.printStackTrace$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1