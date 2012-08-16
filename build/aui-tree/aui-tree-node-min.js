AUI.add("aui-tree-node",function(ac){var W=ac.Lang,aL=W.isString,aB=W.isBoolean,aT="alwaysShowHitArea",O="",r="boundingBox",g="children",aH="clearfix",w="collapsed",a="container",aa="content",u="contentBox",j="expanded",o="helper",T="hidden",f="hitAreaEl",G="hitarea",S="icon",aS="iconEl",ar="id",ai="label",U="labelEl",R="lastSelected",aG="leaf",p="node",ak="over",X="ownerTree",e="parentNode",ay="radio",aQ="rendered",aF="selected",s=" ",h="tree",H="tree-node",aO=function(){return Array.prototype.slice.call(arguments).join(s);},ao=function(A){return(A instanceof ac.TreeNode);},aN=function(A){return(A instanceof ac.TreeView);},E=ac.ClassNameManager.getClassName,af=E(o,aH),y=E(h,w),b=E(h,a),aA=E(h,u),aU=E(h,j),t=E(h,T),au=E(h,G),D=E(h,S),k=E(h,ai),aD=E(h,p),C=E(h,p,aa),av=E(h,p,T,G),i=E(h,p,aG),aK=E(h,p,ak),I=E(h,p,aF),ab='<div class="'+au+'"></div>',q='<div class="'+D+'"></div>',d='<div class="'+k+'"></div>',aR="<ul></ul>",v='<li class="'+aD+'"></li>',Y='<div class="'+aO(af,C)+'"></div>';var M=ac.Component.create({NAME:H,ATTRS:{boundingBox:{valueFn:function(){return ac.Node.create(v);}},contentBox:{valueFn:function(){return ac.Node.create(Y);}},draggable:{value:true,validator:aB},ownerTree:{value:null},label:{value:O,validator:aL},expanded:{value:false,validator:aB},id:{validator:aL},leaf:{value:true,setter:function(A){if(A&&this.get(g).length){return false;}return A;},validator:aB},nextSibling:{getter:"_getSibling",value:null,validator:ao},prevSibling:{getter:"_getSibling",value:null,validator:ao},parentNode:{value:null,validator:function(A){return ao(A)||aN(A);}},labelEl:{setter:ac.one,valueFn:function(){var A=this.get(ai);return ac.Node.create(d).html(A).unselectable();}},hitAreaEl:{setter:ac.one,valueFn:function(){return ac.Node.create(ab);}},alwaysShowHitArea:{value:true,validator:aB},iconEl:{setter:ac.one,valueFn:function(){return ac.Node.create(q);}},tabIndex:{value:null},rendered:{validator:aB,value:false}},AUGMENTS:[ac.TreeData],EXTENDS:ac.Base,prototype:{BOUNDING_TEMPLATE:v,CONTENT_TEMPLATE:Y,initializer:function(){var A=this;var L=A.get(r);L.setData(H,A);A.on({expandedChange:function(aX){A.bubbleEvent(aX.newVal?"expand":"collapse",A.getEventOutputMap(A));}});A._syncTreeNodeBBId();A._uiSetExpanded(A.get(j));A._uiSetLeaf(A.get(aG));A.initTreeData();},bindUI:function(){var A=this;A.after("childrenChange",ac.bind(A._afterSetChildren,A));A.after("expandedChange",ac.bind(A._afterExpandedChange,A));A.after("idChange",A._afterSetId,A);A.after("leafChange",ac.bind(A._afterLeafChange,A));},render:function(L){var A=this;if(!A.get(aQ)){A.renderUI();A.bindUI();A.syncUI();A.set(aQ,true);}if(L){A.get(r).appendTo(L);}},renderUI:function(){var A=this;A._renderBoundingBox();A._renderContentBox();},syncUI:function(){var A=this;A._syncHitArea(A.get(g));},_afterExpandedChange:function(L){var A=this;A._uiSetExpanded(L.newVal);},_afterLeafChange:function(L){var A=this;A._uiSetLeaf(L.newVal);},_afterSetChildren:function(L){var A=this;A._syncHitArea(L.newVal);},_renderContentBox:function(aY){var A=this;var L=A.get(u);if(!A.isLeaf()){var aX=A.get(j);L.addClass(aX?aU:y);if(aX){A.expand();}}return L;},_renderBoundingBox:function(){var A=this;var aX=A.get(r);var L=A.get(u);var aY=null;L.append(A.get(aS));L.append(A.get(U));aX.append(L);var aY=A.get(a);if(aY){if(!A.get(j)){aY.addClass(t);}aX.append(aY);}return aX;},_createNodeContainer:function(){var A=this;var L=A.get(a)||ac.Node.create(aR);L.addClass(b);A.set(a,L);return L;},_syncHitArea:function(L){var A=this;if(A.get(aT)||L.length){A.showHitArea();}else{A.hideHitArea();A.collapse();}},appendChild:function(){var A=this;if(!A.isLeaf()){ac.TreeNode.superclass.appendChild.apply(A,arguments);}},collapse:function(){var A=this;A.set(j,false);},collapseAll:function(){var A=this;ac.TreeNode.superclass.collapseAll.apply(A,arguments);A.collapse();},contains:function(A){return A.isAncestor(this);},expand:function(){var A=this;A.set(j,true);},expandAll:function(){var A=this;ac.TreeNode.superclass.expandAll.apply(A,arguments);A.expand();},getDepth:function(){var aX=0;var L=this;var A=L.get(e);while(A){++aX;A=A.get(e);}return aX;},hasChildNodes:function(){var A=this;return(!A.isLeaf()&&ac.TreeNode.superclass.hasChildNodes.apply(this,arguments));},isSelected:function(){return this.get(u).hasClass(I);},isLeaf:function(){var A=this;return A.get(aG);},isAncestor:function(aX){var L=this;var A=L.get(e);while(A){if(A===aX){return true;}A=A.get(e);}return false;},toggle:function(){var A=this;if(A.get(j)){A.collapse();}else{A.expand();}},select:function(){var A=this;var L=A.get(X);if(L){L.set(R,A);}A.get(u).addClass(I);A.fire("select");},unselect:function(){var A=this;A.get(u).removeClass(I);A.fire("unselect");},over:function(){this.get(u).addClass(aK);},out:function(){this.get(u).removeClass(aK);},showHitArea:function(){var A=this;var L=A.get(f);L.removeClass(av);},hideHitArea:function(){var A=this;var L=A.get(f);L.addClass(av);},_syncTreeNodeBBId:function(L){var A=this;A.get(r).attr(ar,A.get(ar));},_getSibling:function(aZ,L){var A=this;var aY="_"+L;var aX=A[aY];if(aX!==null&&!ao(aX)){aX=null;A[aY]=aX;}return aX;},_uiSetExpanded:function(aY){var A=this;if(!A.isLeaf()){var aX=A.get(a);var L=A.get(u);if(aY){L.replaceClass(y,aU);if(aX){aX.removeClass(t);}}else{L.replaceClass(aU,y);if(aX){aX.addClass(t);}}}},_uiSetLeaf:function(aX){var A=this;var L=A.get(u);if(aX){A.get(a).remove();A.get(f).remove();}else{L.prepend(A.get(f));A._createNodeContainer();A._uiSetExpanded(A.get(j));}L.toggleClass(i,aX);}}});ac.TreeNode=M;var ax=W.isFunction,F=W.isObject,ad=W.isValue,aM="cache",at="end",aj="io",aC="limit",aP="loaded",aV="loading",ah="paginator",am="start",aq="tree-node-io",c="paginatorClick",az=E(h,p,ah),x=E(h,p,aj,aV),aw='<a class="'+az+'" href="javascript:void(0);">Load more results</a>';var K=ac.Component.create({NAME:aq,ATTRS:{io:{lazyAdd:false,value:null,setter:function(A){return this._setIO(A);}},loading:{value:false,validator:aB},loaded:{value:false,validator:aB},cache:{value:true,validator:aB},leaf:{value:false,validator:aB},paginator:{setter:function(A){return ac.merge({alwaysVisible:false,autoFocus:true,element:ac.Node.create(aw),endParam:at,limitParam:aC,start:0,startParam:am},A);
},validator:F}},EXTENDS:ac.TreeNode,prototype:{bindUI:function(){var A=this;ac.TreeNodeIO.superclass.bindUI.apply(this,arguments);A._bindPaginatorUI();A._createEvents();},syncUI:function(){var A=this;ac.TreeNodeIO.superclass.syncUI.apply(this,arguments);A._syncPaginatorUI();},_bindPaginatorUI:function(){var A=this;var aX=A.get(ah);if(aX){var L=ac.bind(A._handlePaginatorClickEvent,A);aX.element.on("click",L);}},createNodes:function(L){var A=this;ac.Array.each(ac.Array(L),function(aY){var aX=A.createNode.call(A,aY);A.appendChild(aX);});A._syncPaginatorUI(L);},expand:function(){var A=this;var L=A.get(aM);var aZ=A.get(aj);var aX=A.get(aP);var aY=A.get(aV);if(!L){A.set(aP,false);}if(aZ&&!aX&&!aY&&!this.hasChildNodes()){if(!L){A.empty();}A.initIO();}else{ac.TreeNodeIO.superclass.expand.apply(this,arguments);}},initIO:function(){var L=this;var aX=L.get(aj);if(ax(aX.cfg.data)){aX.cfg.data=aX.cfg.data.call(L,L);}L._syncPaginatorIOData(aX);if(ax(aX.loader)){var A=ac.bind(aX.loader,L);A(aX.url,aX.cfg,L);}else{ac.io.request(aX.url,aX.cfg);}},ioStartHandler:function(){var A=this;var L=A.get(u);A.set(aV,true);L.addClass(x);},ioCompleteHandler:function(){var A=this;var L=A.get(u);A.set(aV,false);A.set(aP,true);L.removeClass(x);},ioSuccessHandler:function(){var A=this;var a2=A.get(aj);var aX=Array.prototype.slice.call(arguments);var aZ=aX.length;var L=aX[1];if(aZ>=3){var a1=aX[2];try{L=ac.JSON.parse(a1.responseText);}catch(a0){}}var aY=a2.formatter;if(aY){L=aY(L);}A.createNodes(L);A.expand();},ioFailureHandler:function(){var A=this;A.set(aV,false);A.set(aP,false);},_createEvents:function(){var A=this;A.publish(c,{defaultFn:A._defPaginatorClickFn,prefix:aq});},_defPaginatorClickFn:function(L){var A=this;var aX=A.get(ah);if(ad(aX.limit)){aX.start+=aX.limit;}if(A.get(aj)){A.initIO();}},_handlePaginatorClickEvent:function(aY){var A=this;var aX=A.get(X);var L=A.getEventOutputMap(A);A.fire(c,L);if(aX){aX.fire(c,L);}aY.halt();},_inheritOwnerTreeAttrs:function(){var L=this;var aX=L.get(X);if(aX){if(!L.get(aj)){L.set(aj,ac.clone(aX.get(aj)));}if(!L.get(ah)){var A=aX.get(ah);if(A&&A.element){A.element=A.element.clone();}L.set(ah,A);}}},_setIO:function(aX){var A=this;if(!aX){return null;}else{if(aL(aX)){aX={url:aX};}}aX=aX||{};aX.cfg=aX.cfg||{};aX.cfg.on=aX.cfg.on||{};var L={start:ac.bind(A.ioStartHandler,A),complete:ac.bind(A.ioCompleteHandler,A),success:ac.bind(A.ioSuccessHandler,A),failure:ac.bind(A.ioFailureHandler,A)};ac.each(L,function(a0,aY){var a1=aX.cfg.on[aY];if(ax(a1)){var aZ=function(){a0.apply(A,arguments);a1.apply(A,arguments);};aX.cfg.on[aY]=ac.bind(aZ,A);}else{aX.cfg.on[aY]=a0;}});return aX;},_syncPaginatorIOData:function(aY){var A=this;var aX=A.get(ah);if(aX&&ad(aX.limit)){var L=aY.cfg.data||{};L[aX.limitParam]=aX.limit;L[aX.startParam]=aX.start;L[aX.endParam]=(aX.start+aX.limit);aY.cfg.data=L;}},_syncPaginatorUI:function(aX){var a1=this;var L=a1.get(g);var a2=a1.get(ah);if(a2){var a0=true;if(aX){a0=(aX.length>0);}var A=a2.start;var aZ=a2.total||L.length;var a3=a0&&(aZ>L.length);if(a2.alwaysVisible||a3){a1.get(a).append(a2.element.show());if(a2.autoFocus){try{a2.element.focus();}catch(aY){}}}else{a2.element.hide();}}}}});ac.TreeNodeIO=K;var l="checkbox",n="checked",Z="checkContainerEl",aI="checkEl",N="checkName",V=".",m="name",z="tree-node-check",ag=E(h,p,l),an=E(h,p,l,a),ap=E(h,p,n),Q='<div class="'+an+'"></div>',al='<input class="'+ag+'" type="checkbox" />';var aE=ac.Component.create({NAME:z,ATTRS:{checked:{value:false,validator:aB},checkName:{value:z,validator:aL},checkContainerEl:{setter:ac.one,valueFn:function(){return ac.Node.create(Q);}},checkEl:{setter:ac.one,valueFn:function(){var A=this.get(N);return ac.Node.create(al).attr(m,A);}}},EXTENDS:ac.TreeNodeIO,prototype:{initializer:function(){var A=this;A._uiSetChecked(A.get(n));A.on({checkedChange:function(L){A.bubbleEvent(L.newVal?"check":"uncheck",A.getEventOutputMap(A));}});},renderUI:function(){var L=this;ac.TreeNodeCheck.superclass.renderUI.apply(L,arguments);var aX=L.get(U);var A=L.get(aI);var aY=L.get(Z);A.hide();aY.append(A);aX.placeBefore(aY);if(L.isChecked()){L.check();}},bindUI:function(){var A=this;var L=A.get(u);var aX=A.get(U);ac.TreeNodeCheck.superclass.bindUI.apply(A,arguments);A.after("checkedChange",ac.bind(A._afterCheckedChange,A));L.delegate("click",ac.bind(A.toggleCheck,A),V+an);L.delegate("click",ac.bind(A.toggleCheck,A),V+k);aX.swallowEvent("dblclick");},check:function(L){var A=this;A.set(n,true,{originalTarget:L});},uncheck:function(L){var A=this;A.set(n,false,{originalTarget:L});},toggleCheck:function(){var L=this;var A=L.get(aI);var aX=A.attr(n);if(!aX){L.check();}else{L.uncheck();}},isChecked:function(){var A=this;return A.get(n);},_afterCheckedChange:function(L){var A=this;A._uiSetChecked(L.newVal);},_uiSetChecked:function(L){var A=this;if(L){A.get(u).addClass(ap);A.get(aI).attr(n,n);}else{A.get(u).removeClass(ap);A.get(aI).attr(n,O);}}}});ac.TreeNodeCheck=aE;var B="child",P="tree-node-task",J="unchecked",aJ=function(A){return A instanceof ac.TreeNodeCheck;},ae=E(h,p,B,J);var aW=ac.Component.create({NAME:P,EXTENDS:ac.TreeNodeCheck,prototype:{check:function(aX){var A=this;var L=A.get(u);aX=aX||A;if(!A.isLeaf()){A.eachChildren(function(aY){if(aJ(aY)){aY.check(aX);}});}A.eachParent(function(aY){if(aJ(aY)&&!aY.isChecked()){aY.get(u).addClass(ae);}});L.removeClass(ae);ac.TreeNodeTask.superclass.check.call(this,aX);},uncheck:function(aX){var A=this;var L=A.get(u);aX=aX||A;if(!A.isLeaf()){A.eachChildren(function(aY){if(aY instanceof ac.TreeNodeCheck){aY.uncheck(aX);}});}A.eachParent(function(aY){if(aJ(aY)&&!aY.isChecked()){aY.get(u).removeClass(ae);}});L.removeClass(ae);ac.TreeNodeTask.superclass.uncheck.call(this,aX);}}});ac.TreeNodeTask=aW;ac.TreeNode.nodeTypes={task:ac.TreeNodeTask,check:ac.TreeNodeCheck,node:ac.TreeNode,io:ac.TreeNodeIO};},"@VERSION@",{skinnable:false,requires:["aui-tree-data","aui-io","json","querystring-stringify"]});