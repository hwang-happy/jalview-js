(function(){var P$=Clazz.newPackage("jalview.fts.core"),I$=[[0,'java.util.ArrayList','java.util.Objects','Boolean','java.io.BufferedReader','java.io.InputStreamReader','StringBuilder','jalview.util.MessageManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FTSRestClient", null, null, 'jalview.fts.api.FTSRestClientI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataColumns=Clazz.new_($I$(1,1));
this.dataColumnGroups=Clazz.new_($I$(1,1));
this.searchableDataColumns=Clazz.new_($I$(1,1));
this.defaulDisplayedDataColumns=Clazz.new_($I$(1,1));
this.primaryKeyColumnCode=null;
this.defaultResponsePageSize=100;
},1);

C$.$fields$=[['I',['defaultResponsePageSize'],'S',['primaryKeyColumnCode'],'O',['dataColumns','java.util.Collection','+dataColumnGroups','+searchableDataColumns','+defaulDisplayedDataColumns','primaryKeyColumn','jalview.fts.api.FTSDataColumnI']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parseDataColumnsConfigFile$', function () {
var fileName=this.getColumnDataConfigFileName$();
var $in=this.getClass$().getResourceAsStream$S(fileName);
try {
var br=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_InputStream,[$in])],$I$(4,1).c$$java_io_Reader);
try {
var line;
while ((line=br.readLine$()) != null ){
var lineData=line.split$S(";");
try {
if (lineData.length == 2) {
if (lineData[0].equalsIgnoreCase$S("_data_column.primary_key")) {
this.primaryKeyColumnCode=lineData[1];
}if (lineData[0].equalsIgnoreCase$S("_data_column.default_response_page_size")) {
this.defaultResponsePageSize=(Integer.valueOf$S(lineData[1])).valueOf();
}} else if (lineData.length == 3) {
this.dataColumnGroups.add$O(((P$.FTSRestClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FTSRestClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.fts.api.FTSDataColumnI','jalview.fts.api.FTSDataColumnI.FTSDataColumnGroupI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getID$', function () {
return this.$finals$.lineData[0];
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$finals$.lineData[1];
});

Clazz.newMeth(C$, 'getSortOrder$', function () {
return (Integer.valueOf$S(this.$finals$.lineData[2])).valueOf();
});

Clazz.newMeth(C$, 'toString', function () {
return this.$finals$.lineData[1];
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2,"hash$OA",[[this.getID$(), this.getName$(), new Integer(this.getSortOrder$())]]);
});

Clazz.newMeth(C$, 'equals$O', function (otherObject) {
var that=otherObject;
return this.getID$().equals$O(that.getID$()) && this.getName$().equals$O(that.getName$()) && this.getSortOrder$() == that.getSortOrder$()  ;
});
})()
), Clazz.new_(P$.FTSRestClient$1.$init$,[this, {lineData:lineData}])));
} else if (lineData.length > 6) {
var dataCol=((P$.FTSRestClient$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FTSRestClient$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.fts.api.FTSDataColumnI', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString', function () {
return this.$finals$.lineData[0];
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$finals$.lineData[0];
});

Clazz.newMeth(C$, 'getCode$', function () {
return this.$finals$.lineData[1].split$S("\\|")[0];
});

Clazz.newMeth(C$, 'getAltCode$', function () {
return this.$finals$.lineData[1].split$S("\\|").length > 1 ? this.$finals$.lineData[1].split$S("\\|")[1] : this.getCode$();
});

Clazz.newMeth(C$, 'getDataType$', function () {
var dataTypeString=this.$finals$.lineData[2].split$S("\\|");
var classString=dataTypeString[0].toUpperCase$();
return ((P$.FTSRestClient$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FTSRestClient$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.fts.api.FTSDataColumnI','jalview.fts.api.FTSDataColumnI.DataTypeI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isFormtted$', function () {
if (this.$finals$.dataTypeString.length > 1 && this.$finals$.dataTypeString[1] != null  ) {
switch (this.$finals$.dataTypeString[1].toUpperCase$()) {
case "T":
case "TRUE":
return true;
case "F":
case "False":
default:
return false;
}
}return false;
});

Clazz.newMeth(C$, 'getSignificantFigures$', function () {
if (this.$finals$.dataTypeString.length > 2 && this.$finals$.dataTypeString[2] != null  ) {
return (Integer.valueOf$S(this.$finals$.dataTypeString[2])).valueOf();
}return 0;
});

Clazz.newMeth(C$, 'getDataTypeClass$', function () {
switch (this.$finals$.classString) {
case "INT":
case "INTEGER":
return Clazz.getClass(Integer);
case "DOUBLE":
return Clazz.getClass(Double);
case "STRING":
default:
return Clazz.getClass(String);
}
});
})()
), Clazz.new_(P$.FTSRestClient$2$1.$init$,[this, {dataTypeString:dataTypeString,classString:classString}]));
});

Clazz.newMeth(C$, 'getGroup$', function () {
var group=null;
try {
group=this.b$['jalview.fts.core.FTSRestClient'].getDataColumnGroupById$S.apply(this.b$['jalview.fts.core.FTSRestClient'], [this.$finals$.lineData[3]]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return group;
});

Clazz.newMeth(C$, 'getMinWidth$', function () {
return (Integer.valueOf$S(this.$finals$.lineData[4])).valueOf();
});

Clazz.newMeth(C$, 'getMaxWidth$', function () {
return (Integer.valueOf$S(this.$finals$.lineData[5])).valueOf();
});

Clazz.newMeth(C$, 'getPreferredWidth$', function () {
return (Integer.valueOf$S(this.$finals$.lineData[6])).valueOf();
});

Clazz.newMeth(C$, 'isPrimaryKeyColumn$', function () {
return this.getName$().equalsIgnoreCase$S(this.b$['jalview.fts.core.FTSRestClient'].primaryKeyColumnCode) || this.getCode$().equalsIgnoreCase$S(this.b$['jalview.fts.core.FTSRestClient'].primaryKeyColumnCode) ;
});

Clazz.newMeth(C$, 'isVisibleByDefault$', function () {
return ($I$(3).valueOf$S(this.$finals$.lineData[7])).valueOf();
});

Clazz.newMeth(C$, 'isSearchable$', function () {
return ($I$(3).valueOf$S(this.$finals$.lineData[8])).valueOf();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2,"hash$OA",[[this.getName$(), this.getCode$(), this.getGroup$()]]);
});

Clazz.newMeth(C$, 'equals$O', function (otherObject) {
var that=otherObject;
return otherObject == null  ? false : this.getCode$().equals$O(that.getCode$()) && this.getName$().equals$O(that.getName$()) && this.getGroup$().equals$O(that.getGroup$())  ;
});
})()
), Clazz.new_(P$.FTSRestClient$2.$init$,[this, {lineData:lineData}]));
this.dataColumns.add$O(dataCol);
if (dataCol.isSearchable$()) {
this.searchableDataColumns.add$O(dataCol);
}if (dataCol.isVisibleByDefault$()) {
this.defaulDisplayedDataColumns.add$O(dataCol);
}} else {
continue;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}
try {
this.primaryKeyColumn=this.getDataColumnByNameOrCode$S(this.primaryKeyColumnCode);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}finally{/*res*/
try{br&&br.close$&&br.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'getPrimaryKeyColumIndex$java_util_Collection$Z', function (wantedFields, hasRefSeq) {
var pdbFieldIndexCounter=hasRefSeq ? 1 : 0;
for (var field, $field = wantedFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
if (field.isPrimaryKeyColumn$()) {
break;
}++pdbFieldIndexCounter;
}
return pdbFieldIndexCounter;
});

Clazz.newMeth(C$, 'getDataColumnsFieldsAsCommaDelimitedString$java_util_Collection', function (dataColumnFields) {
var result="";
if (dataColumnFields != null  && !dataColumnFields.isEmpty$() ) {
var returnedFields=Clazz.new_($I$(6,1));
for (var field, $field = dataColumnFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
returnedFields.append$S(",").append$S(field.getCode$());
}
returnedFields.deleteCharAt$I(0);
result=returnedFields.toString();
}return result;
});

Clazz.newMeth(C$, 'getAllFTSDataColumns$', function () {
if (this.dataColumns == null  || this.dataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}return this.dataColumns;
});

Clazz.newMeth(C$, 'getSearchableDataColumns$', function () {
if (this.searchableDataColumns == null  || this.searchableDataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}return this.searchableDataColumns;
});

Clazz.newMeth(C$, 'getAllDefaultDisplayedFTSDataColumns$', function () {
if (this.defaulDisplayedDataColumns == null  || this.defaulDisplayedDataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}return this.defaulDisplayedDataColumns;
});

Clazz.newMeth(C$, 'getPrimaryKeyColumn$', function () {
if (this.defaulDisplayedDataColumns == null  || this.defaulDisplayedDataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}return this.primaryKeyColumn;
});

Clazz.newMeth(C$, 'getDataColumnByNameOrCode$S', function (nameOrCode) {
if (this.dataColumns == null  || this.dataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}for (var column, $column = this.dataColumns.iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
if (column.getName$().equalsIgnoreCase$S(nameOrCode) || column.getCode$().equalsIgnoreCase$S(nameOrCode) ) {
return column;
}}
throw Clazz.new_(Clazz.load('Exception').c$$S,["Couldn't find data column with name : " + nameOrCode]);
});

Clazz.newMeth(C$, 'getDataColumnGroupById$S', function (id) {
if (this.dataColumns == null  || this.dataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}for (var columnGroup, $columnGroup = this.dataColumnGroups.iterator$(); $columnGroup.hasNext$()&&((columnGroup=($columnGroup.next$())),1);) {
if (columnGroup.getID$().equalsIgnoreCase$S(id)) {
return columnGroup;
}}
throw Clazz.new_(Clazz.load('Exception').c$$S,["Couldn't find data column group with id : " + id]);
});

Clazz.newMeth(C$, 'getMessageByHTTPStatusCode$I$S', function (code, service) {
var message="";
switch (code) {
case 400:
message="Bad request. There is a problem with your input.";
break;
case 410:
message=$I$(7).formatMessage$S$OA(service + " rest services no longer available!", []);
break;
case 403:
case 404:
message="The requested resource could not be found";
break;
case 408:
case 409:
case 500:
case 501:
case 502:
case 504:
case 505:
message="There seems to be an error from the " + service + " server" ;
break;
case 503:
message="Service not available. The server is being updated, try again later.";
break;
default:
break;
}
return String.valueOf$I(code) + " " + message ;
}, 1);

Clazz.newMeth(C$, 'getResourceFile$S', function (fileName) {
var result="";
try {
result=this.getClass$().getResource$S(fileName).getFile$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'getDefaultResponsePageSize$', function () {
if (this.dataColumns == null  || this.dataColumns.isEmpty$() ) {
this.parseDataColumnsConfigFile$();
}return this.defaultResponsePageSize;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
