(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.lang.management.ManagementFactory']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GetMemory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPhysicalMemory$', function () {
var o=$I$(1).getOperatingSystemMXBean$();
try {
if (Clazz.instanceOf(o, "com.sun.management.OperatingSystemMXBean")) {
var osb=o;
return osb.getTotalPhysicalMemorySize$();
}} catch (e) {
if (Clazz.exceptionOf(e,"NoClassDefFoundError")){
System.err.println$S("No com.sun.management.OperatingSystemMXBean: cannot get total physical memory size");
} else {
throw e;
}
}
return -1;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
