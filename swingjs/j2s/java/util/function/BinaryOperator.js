(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "BinaryOperator", null, null, 'java.util.function.BiFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, 'minBy$java_util_Comparator', function (comparator) {
$I$(1).requireNonNull$O(comparator);
return ((P$.BinaryOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O', function (a, b) { return (this.$finals$.comparator.compare$O$O(a, b) <= 0 ? a : b);});
})()
), Clazz.new_(P$.BinaryOperator$lambda1.$init$,[this, {comparator:comparator}]));
}, 1);

Clazz.newMeth(C$, 'maxBy$java_util_Comparator', function (comparator) {
$I$(1).requireNonNull$O(comparator);
return ((P$.BinaryOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O', function (a, b) { return (this.$finals$.comparator.compare$O$O(a, b) >= 0 ? a : b);});
})()
), Clazz.new_(P$.BinaryOperator$lambda2.$init$,[this, {comparator:comparator}]));
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
