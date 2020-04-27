(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'java.awt.Font','javax.swing.JButton','jalview.io.cache.JvCacheableInputBox','javax.swing.JCheckBox','java.awt.BorderLayout','javax.swing.JLabel','jalview.util.MessageManager','javax.swing.JPanel','java.awt.GridLayout','java.awt.Insets','java.awt.event.KeyAdapter','java.awt.Dimension','javax.swing.SwingUtilities','jalview.io.FormatAdapter','jalview.io.DataSourceType','jalview.io.FileFormat','jalview.analysis.AlignSeq','jalview.util.Comparison']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GFinder", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.createFeatures=Clazz.new_($I$(2,1));
this.searchBox=Clazz.new_([this.getCacheKey$()],$I$(3,1).c$$S);
this.caseSensitive=Clazz.new_($I$(4,1));
this.searchDescription=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['createFeatures','javax.swing.JButton','searchBox','jalview.io.cache.JvCacheableInputBox','caseSensitive','javax.swing.JCheckBox','+searchDescription']]
,['O',['VERDANA_12','java.awt.Font']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
var mainBorderLayout=Clazz.new_($I$(5,1));
this.setLayout$java_awt_LayoutManager(mainBorderLayout);
mainBorderLayout.setHgap$I(5);
mainBorderLayout.setVgap$I(5);
var jLabelFind=Clazz.new_([$I$(7).getString$S("label.find")],$I$(6,1).c$$S);
jLabelFind.setFont$java_awt_Font(C$.VERDANA_12);
var findAll=Clazz.new_([$I$(7).getString$S("action.find_all")],$I$(2,1).c$$S);
findAll.setFont$java_awt_Font(C$.VERDANA_12);
findAll.addActionListener$java_awt_event_ActionListener(((P$.GFinder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GFinder'].findAll_actionPerformed$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$1.$init$,[this, null])));
var findNext=Clazz.new_([$I$(7).getString$S("action.find_next")],$I$(2,1).c$$S);
findNext.setFont$java_awt_Font(C$.VERDANA_12);
findNext.addActionListener$java_awt_event_ActionListener(((P$.GFinder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GFinder'].findNext_actionPerformed$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$2.$init$,[this, null])));
var actionsPanel=Clazz.new_($I$(8,1));
var gridLayout1=Clazz.new_($I$(9,1));
actionsPanel.setLayout$java_awt_LayoutManager(gridLayout1);
gridLayout1.setHgap$I(0);
gridLayout1.setRows$I(3);
gridLayout1.setVgap$I(2);
this.createFeatures.setEnabled$Z(false);
this.createFeatures.setFont$java_awt_Font(C$.VERDANA_12);
this.createFeatures.setMargin$java_awt_Insets(Clazz.new_($I$(10,1).c$$I$I$I$I,[0, 0, 0, 0]));
this.createFeatures.setText$S($I$(7).getString$S("label.new_feature"));
this.createFeatures.addActionListener$java_awt_event_ActionListener(((P$.GFinder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GFinder'].createFeatures_actionPerformed$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$3.$init$,[this, null])));
this.searchBox.getComponent$().setFont$java_awt_Font(Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 0, 12]));
this.searchBox.addCaretListener$javax_swing_event_CaretListener(((P$.GFinder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.CaretListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'caretUpdate$javax_swing_event_CaretEvent', function (e) {
this.b$['jalview.jbgui.GFinder'].textfield_caretUpdate$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$4.$init$,[this, null])));
this.searchBox.addKeyListener$java_awt_event_KeyListener(((P$.GFinder$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
this.b$['jalview.jbgui.GFinder'].textfield_keyPressed$java_awt_event_KeyEvent.apply(this.b$['jalview.jbgui.GFinder'], [e]);
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.GFinder$5)));
this.caseSensitive.setHorizontalAlignment$I(2);
this.caseSensitive.setText$S($I$(7).getString$S("label.match_case"));
this.searchDescription.setText$S($I$(7).getString$S("label.include_description"));
actionsPanel.add$java_awt_Component$O(findNext, null);
actionsPanel.add$java_awt_Component$O(findAll, null);
actionsPanel.add$java_awt_Component$O(this.createFeatures, null);
this.add$java_awt_Component$O(jLabelFind, "West");
this.add$java_awt_Component$O(actionsPanel, "East");
var jPanel2=Clazz.new_($I$(8,1));
jPanel2.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[10, 1]));
var jPanel3=Clazz.new_($I$(8,1));
jPanel3.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[10, 1]));
var jPanel4=Clazz.new_($I$(8,1));
jPanel4.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
this.add$java_awt_Component$O(jPanel2, "South");
this.add$java_awt_Component$O(jPanel3, "North");
this.add$java_awt_Component$O(jPanel4, "Center");
jPanel4.add$java_awt_Component$O(this.searchBox.getComponent$(), "North");
var optionsPanel=Clazz.new_($I$(8,1));
var optionsGridLayout=Clazz.new_($I$(9,1));
optionsGridLayout.setHgap$I(0);
optionsGridLayout.setRows$I(2);
optionsGridLayout.setVgap$I(2);
optionsPanel.setLayout$java_awt_LayoutManager(optionsGridLayout);
optionsPanel.add$java_awt_Component$O(this.caseSensitive, null);
optionsPanel.add$java_awt_Component$O(this.searchDescription, null);
jPanel4.add$java_awt_Component$O(optionsPanel, "West");
}, p$1);

Clazz.newMeth(C$, 'textfield_keyPressed$java_awt_event_KeyEvent', function (e) {
if (e.getKeyCode$() == 10) {
if (!this.searchBox.isPopupVisible$()) {
e.consume$();
this.findNext_actionPerformed$();
}}});

Clazz.newMeth(C$, 'findNext_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'findAll_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'createFeatures_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'textfield_caretUpdate$', function () {
if (false && this.searchBox.getUserInput$().indexOf$S(">") > -1 ) {
$I$(13,"invokeLater$Runnable",[((P$.GFinder$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var str=this.b$['jalview.jbgui.GFinder'].searchBox.getUserInput$();
var al=null;
try {
al=Clazz.new_($I$(14,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(str, $I$(15).PASTE, $I$(16).Fasta);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (al != null  && al.getHeight$() > 0 ) {
str=$I$(17,"extractGaps$S$S",[$I$(18).GapChars, al.getSequenceAt$I(0).getSequenceAsString$()]);
}});
})()
), Clazz.new_(P$.GFinder$6.$init$,[this, null]))]);
}});

Clazz.newMeth(C$, 'getCacheKey$', function () {
return "CACHE.FINDER";
});

C$.$static$=function(){C$.$static$=0;
C$.VERDANA_12=Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 0, 12]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
