(function(){var P$=Clazz.newPackage("org.xml.sax.demo"),I$=[[0,'java.io.StringReader','org.xml.sax.helpers.ParserFactory','org.xml.sax.InputSource','java.net.URL']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EntityDemo", null, 'org.xml.sax.demo.DemoHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.reader=Clazz.new_($I$(1,1).c$$S,["Entity resolution works!"]);
},1);

C$.$fields$=[['O',['reader','java.io.StringReader']]]

Clazz.newMeth(C$, 'main$SA', function (args) {
var parser;
var handler;
if (args.length != 1) {
System.err.println$S("Usage: java -Dorg.xml.sax.parser=<classname> EntityDemo <document>");
System.exit$I(2);
}parser=$I$(2).makeParser$();
handler=Clazz.new_(C$);
parser.setEntityResolver$org_xml_sax_EntityResolver(handler);
parser.setDTDHandler$org_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$org_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$org_xml_sax_ErrorHandler(handler);
parser.parse$S(C$.makeAbsoluteURL$S(args[0]));
}, 1);

Clazz.newMeth(C$, 'resolveEntity$S$S', function (publicId, systemId) {
if (publicId != null  && publicId.equals$O("-//megginson//TEXT Sample Entity//EN") ) {
return Clazz.new_($I$(3,1).c$$java_io_Reader,[this.reader]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeAbsoluteURL$S', function (url) {
var baseURL;
var currentDirectory=System.getProperty$S("user.dir");
var fileSep=System.getProperty$S("file.separator");
var file=currentDirectory.replace$C$C(fileSep.charAt$I(0), "/") + '/';
if (file.charAt$I(0) != "/") {
file="/" + file;
}baseURL=Clazz.new_($I$(4,1).c$$S$S$S,["file", null, file]);
return Clazz.new_($I$(4,1).c$$java_net_URL$S,[baseURL, url]).toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
