/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcomponentcore","ojs/ojeditablevalue","ojs/ojradiocheckbox","ojs/ojoption","ojs/ojcore-base","jquery","ojs/ojlogger","ojs/ojtranslation","ojs/ojlabelledbyutils"],function(e,t,i,n,o,s,a,r,l){"use strict";var c,d;o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,(c={properties:{describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string"},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string"},validatorHint:{type:"Array<string>|string"}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},optionRenderer:{type:"function"},options:{type:"object"},optionsKeys:{type:"object",properties:{label:{type:"string"},value:{type:"string"}}},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{readonlyNoValue:{type:"string"},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},value:{type:"Array<any>",writeback:!0,value:[]}},methods:{getProperty:{},refresh:{},reset:{},setProperties:{},setProperty:{},showMessages:{},validate:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateEnd:{},ojAnimateStart:{}},extension:{}}).extension._WIDGET_NAME="ojCheckboxset",c.extension._ALIASED_PROPS={readonly:"readOnly"},c.extension._TRACK_CHILDREN="immediate",o.CustomElementBridge.register("oj-checkboxset",{metadata:o.CollectionUtils.mergeDeep(c,{properties:{readonly:{binding:{consume:{name:"readonly"}}},userAssistanceDensity:{binding:{consume:{name:"userAssistanceDensity"}}},labelEdge:{binding:{consume:{name:"labelEdge"}}}}})}),d={doValueChangeCheck:!1},o.__registerWidget("oj.ojCheckboxset",s.oj.editableValue,{version:"1.0.0",defaultElement:"<div>",widgetEventPrefix:"oj",_WRAPPER_CLASS_NAMES:"oj-checkboxset-wrapper oj-form-control-container",options:{disabled:!1,labelledBy:null,readOnly:!1,optionRenderer:null,options:null,optionsKeys:{},required:!1,value:[]},refresh:function(){this._super(),this._setup()},widget:function(){return this.uiCheckboxset},validate:t.EditableValueUtils.validate,_InitOptions:function(e,i){var n,o,a=[];this._super(e,i),this._IsCustomElement()||t.EditableValueUtils.initializeOptionsFromDom([{attribute:"disabled",validateOption:!0},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"title"},{attribute:"required",coerceDomValue:!0,validateOption:!0}],i,this),this._IsCustomElement()?this._checkValueType(this.options.value):void 0===i.value?(this.$checkboxes=this._findCheckboxesWithMatchingName(),(n=this.$checkboxes.filter(":checked")).length>0&&(n.each(function(){a.push(s(this).val())}),o=a,this.option("value",o,{_context:{writeback:!0,internalSet:!0}})),void 0===this.options.value&&(this.options.value=[])):this._checkValueType(this.options.value)},_ComponentCreate:function(){const e=this.element;if(this._super(),e.is("fieldset"))throw new Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");e.uniqueId(),o.RadioCheckboxUtils.generateOptionsFromData.call(this),this._processOjOptions(),this.$checkboxes=this._findCheckboxesWithMatchingName(),this.$checkboxes._ojRadioCheckbox().attr("data-oj-internal",""),this.uiCheckboxset=e.addClass("oj-checkboxset oj-component").attr("role","group");const t=e.contents().filter(function(){return!(this.getAttribute&&"contextMenu"===this.getAttribute("slot"))});t.length>0?t.wrapAll(`<div class='${this._WRAPPER_CLASS_NAMES}'></div>`):e.append(`<div class='${this._WRAPPER_CLASS_NAMES}'></div>`),this.options.readOnly&&this.element[0].querySelector(".oj-checkboxset-wrapper").setAttribute("tabindex",0),this._on(this._events),this._setup()},_ResetComponentState:function(){this._processOjOptions(),this.$checkboxes=this._findCheckboxesWithMatchingName(),this.$checkboxes.filter(".oj-checkbox").each(function(){var e=void 0!==s(this).attr("disabled")&&!!s(this).prop("disabled");s(this)._ojRadioCheckbox("option","disabled",e)}),this.$checkboxes.not(".oj-checkbox")._ojRadioCheckbox()},GetFocusElement:function(){return this._GetContentElement().not(":disabled").first()[0]},_SetDisabledDom:function(){},_IsRequired:function(){return this.options.required},_refreshRequired:t.EditableValueUtils._refreshRequired,_processOjOptions:function(){if(this._IsCustomElement()){var e,t,i=this.element[0],n=i.querySelector(".oj-checkboxset-wrapper"),o=this._customOptionRenderer.bind(this),s=this.element.children("oj-option").add(this.element.children(".oj-checkboxset-wrapper").find("oj-option")),a=function(e,t){for(var i=e.slice(0),n=t.length-1,o=i.length-1;o>0&&n>-1;){var s=t[n].value,a=i[o];if(s!==a){var r=i.indexOf(s);r>-1&&(i[r]=a,i[o]=s,o-=1),n-=1}else o-=1,n-=1}return i}(this.options.value,s),r=a.length;n||(n=i);var l=i.querySelector("[data-no-value-span]");if(l)(r>0||!this.options.readOnly)&&l.parentElement.removeChild(l);else if(0===r&&this.options.readOnly){var c=document.createElement("span");c.setAttribute("data-no-value-span",""),c.setAttribute("class","oj-choice-item"),c.setAttribute("aria-readonly",!0);var d=this.getTranslatedString("readonlyNoValue");null!==d&&(c.textContent=d),n.appendChild(c)}for(e=0,t=s.length;e<t;e++)s[e].customOptionRenderer=o,this.options.readOnly?this._processReadonlyOptions(s[e],a):this._initInputLabelFromOjOption(s[e])}},_processReadonlyOptions:function(e,t){const i=e.value,n=t.length,o=this.element.get(0),a=s(e).parentsUntil(o,"span.oj-choice-item").get(0);if(null==a?e.classList.add("oj-helper-hidden"):a.classList.add("oj-helper-hidden"),n>0){var r=t.indexOf(i);if(r>-1){var l=r===n-1;this._initReadonlyLabelFromOjOption(e,a,l)}else null!=a&&a.removeAttribute("aria-readonly")}else null!=a&&a.removeAttribute("aria-readonly")},_initInputLabelFromOjOption:function(e){var t,i,n=e;s(n).uniqueId();var o=n.getAttribute("id"),a=o+"|cb",r=document.getElementById(a);if(null!==r){i=n;do{i=i.parentElement}while(i&&"LABEL"!==i.tagName);if(i&&(n.textContent&&""!==n.textContent?i.classList.remove("oj-helper-hidden"):i.classList.add("oj-helper-hidden")),!this.options.readOnly){var l=n;do{l=l.parentElement}while(l&&!l.classList.contains("oj-choice-item"));l&&l.classList.contains("oj-helper-hidden")&&l.classList.contains("oj-choice-item")&&"SPAN"===l.tagName&&l.classList.remove("oj-helper-hidden"),n&&n.classList.contains("oj-helper-hidden")&&n.classList.remove("oj-helper-hidden"),r&&r.parentElement.classList.contains("oj-helper-hidden")&&r.parentElement.classList.remove("oj-helper-hidden")}}else(r=document.createElement("input")).setAttribute("type","checkbox"),r.setAttribute("value",n.value),r.setAttribute("id",a),"LABEL"===n.parentElement.nodeName?((i=n.parentElement).parentElement.insertBefore(r,i),i.parentElement.removeAttribute("aria-readonly"),i.parentElement.classList.remove("oj-helper-hidden")):(t=document.createElement("span"),i=document.createElement("label"),t.setAttribute("class","oj-choice-item"),n.parentElement.insertBefore(t,n),t.appendChild(r),t.appendChild(i),i.appendChild(n)),i.setAttribute("for",a),n.textContent&&""!==n.textContent||i.classList.add("oj-helper-hidden"),n.classList.remove("oj-helper-hidden");var c=this.element[0].id,d=n.getAttribute("aria-label"),h=n.getAttribute("aria-labelledby"),u=i.querySelector("span[data-oj-internal]");u&&u.parentElement.removeChild(u),r.setAttribute("data-oj-option-id",o),c&&""!==c?r.setAttribute("name",c):r.removeAttribute("name"),d&&""!==d?r.setAttribute("aria-label",d):r.removeAttribute("aria-label"),h&&""!==h?r.setAttribute("aria-labelledby",h):r.removeAttribute("aria-labelledby"),n.disabled?r.setAttribute("disabled",!0):r.removeAttribute("disabled")},_initReadonlyLabelFromOjOption:function(e,t,i){function n(e,t){var i=e.querySelector("span[data-oj-internal]");if(t&&!i){var n=r.getTranslatedString("oj-converter.plural-separator");(i=document.createElement("span")).setAttribute("data-oj-internal",""),i.textContent=n,e.appendChild(i)}else!t&&i&&i.parentElement.removeChild(i)}var o=document.createElement("label"),a=e,l=this.element.hasClass("oj-choice-direction-row"),c=l&&!i;if(t){s(a).uniqueId();var d=a.getAttribute("id")+"|cb",h=document.getElementById(d);if(null!==h){h.parentElement.classList.add("oj-helper-hidden");var u=h.parentElement.nextElementSibling;null!==u&&(o.appendChild(a),h.classList.contains("oj-checkbox")&&s(h)._ojRadioCheckbox("destroy"),t.removeChild(u.previousSibling),t.removeChild(u),t.appendChild(o))}t.classList.remove("oj-helper-hidden"),t.setAttribute("aria-readonly",!0),n(a.parentElement,c)}else{e.classList.remove("oj-helper-hidden");var p=document.createElement("span");a.parentElement.insertBefore(p,a),p.setAttribute("class","oj-choice-item"),o.appendChild(a),n(o,c),l||o.setAttribute("class","oj-checkbox-label"),p.appendChild(o),p.setAttribute("aria-readonly",!0)}},_customOptionRenderer:function(e){var t=e,i=t.getAttribute("id")+"|cb",n=document.getElementById(i);null!==n&&n.classList.contains("oj-checkbox")&&s(n)._ojRadioCheckbox("option","disabled",t.disabled)},_labelledByUpdatedForSet:l._labelledByUpdatedForSet,_findCheckboxesWithMatchingName:function(){var e,t,i=this.element.find("input[type=checkbox]:first");return 0===i.length&&a.warn("Could not find any input type=checkbox within this element"),void 0===(e=i.attr("name"))?this.element.find("input[type=checkbox]").not("[name]"):(t='input[type=checkbox][name="'+e+'"]',this.element.find(t))},_NotifyContextMenuGesture:function(e,t,i){var n=this.element.find("input[type=checkbox]:tabbable").first();this._OpenContextMenu(t,i,{launcher:n})},_GetMessagingLauncherElement:function(){return this.widget()},_setup:function(){this._propagateDisabled(this.options.disabled),null!==this.$checkboxes&&(1===this.$checkboxes.length?this.element.addClass("oj-checkboxset-single"):this.element.removeClass("oj-checkboxset-single")),this.options.readOnly?this.element.addClass("oj-read-only"):this.element.removeClass("oj-read-only"),this.element.hasClass("oj-choice-direction-column")||this.element.hasClass("oj-choice-direction-row")||this.element.addClass("oj-choice-direction-column"),this._refreshRequired(this.options.required);var e=this.widget();this._labelledByUpdatedForSet(e[0].id,null,this.options.labelledBy,e)},_events:{change:function(e){this._HandleChangeEvent(e)},"click .oj-checkboxset-wrapper":function(e){this.widget()[0].classList.contains("oj-choice-direction-row")||"INPUT"===e.target.tagName||s(e.target).find("input").click()}},_checkValueType:function(e){null==e?this.option("value",[],{_context:{writeback:!0,internalSet:!0}}):this._confirmValueIsArray(e)},_confirmValueIsArray:function(e){if(!Array.isArray(e))throw new Error("Invalid 'value' set on JET Checkboxset: "+e+".It must be an Array. ")},_HandleChangeEvent:function(e){var t,i;(i=this.$checkboxes).length>0&&i.each(function(){this===e.target&&s(this)._ojRadioCheckbox("setSelectedClass",e.target.checked)}),t=this._GetDisplayValue(),this._SetValue(t,e,d)},_GetDisplayValue:function(e){return this._GetElementValue()},_SetDisplayValue:function(e){var t,i,n,o,a=this.$checkboxes.length;if(this._checkValueType(e),null==e||0===e.length)this.$checkboxes._ojRadioCheckbox("option","checked",!1);else for(t=0;t<a;t++){n=this.$checkboxes[t],o=s(n),i=this._GetOptionValue(n);var r=this._GetOptionIndex(e,i),l=o._ojRadioCheckbox("option","checked");-1!==r?l||o._ojRadioCheckbox("option","checked",!0):l&&o._ojRadioCheckbox("option","checked",!1)}},_GetElementValue:function(){var e=this,t=[],i=this.$checkboxes.filter(":checked");return 0===i.length?[]:(i.each(function(){t.push(e._GetOptionValue(this))}),t)},_GetOptionIndex:function(e,t){var i,n=e.indexOf(t);if(-1===n){i=e.length;for(var s=0;s<i;s++)if(o.Object.compareValues(e[s],t)){n=s;break}}return n},_GetOptionValue:function(e){var t,i;return this._IsCustomElement()?(t=document.getElementById(e.getAttribute("data-oj-option-id")))&&(i=t.value):i=e.value,i},_GetDefaultStyleClass:function(){return"oj-checkboxset"},_GetContentElement:function(){return null!=this.$checkboxes||(this.$checkboxes=this._findCheckboxesWithMatchingName()),this.$checkboxes},_AriaRequiredUnsupported:function(){return!0},_ShowHelpHintsLocation:function(){return"above"},_AfterSetOptionRequired:t.EditableValueUtils._AfterSetOptionRequired,_propagateDisabled:function(e){var t=!!e;this.$checkboxes.each(function(){s(this).data("oj-_ojRadioCheckbox").__setAncestorComponentDisabled(t)}),this.$checkboxes._ojRadioCheckbox("refreshDisabled")},_setOption:function(e,t,i){var n=this.options.labelledBy;switch(this._super(e,t,i),e){case"disabled":this._propagateDisabled(t);break;case"readOnly":this.options.readOnly=!!t;var s=this.element[0].querySelector(".oj-checkboxset-wrapper"),a=this.options.value;this.options.readOnly?(s.setAttribute("tabindex",0),this.element.addClass("oj-read-only")):(s.removeAttribute("tabindex"),this.element.removeClass("oj-read-only")),this._ResetComponentState(),null!=a&&this._SetDisplayValue(a);break;case"value":this._processOjOptions();break;case"labelledBy":var r=this.widget();this._labelledByUpdatedForSet(r[0].id,n,t,r);break;case"options":o.RadioCheckboxUtils.generateOptionsFromData.call(this);break;case"optionsKeys":case"optionRenderer":o.RadioCheckboxUtils.renderOptions.call(this)}},_AfterSetOption:function(e,t,i){switch(this._superApply(arguments),e){case"required":this._AfterSetOptionRequired(e)}},getNodeBySubId:function(e){var t,i,n=this._super(e);if(!n)switch(t=this.$checkboxes.get(),e.subId){case"oj-checkboxset-inputs":n=t;break;case"oj-checkboxset-checkbox":if(void 0!==(i=e.value)){var o,s,a=t.length,r=[];for(o=0;o<a;o++)r[o]=this._GetOptionValue(t[o]);-1!==(s=this._GetOptionIndex(r,i))&&(n=t[s])}}return n||null},getSubIdByNode:function(e){for(var t=this._GetContentElement()[0].parentElement.parentElement.parentElement,i=e;i&&i!==t;){if("LABEL"===i.nodeName&&(i=document.getElementById(i.for)),"INPUT"===i.nodeName)return{subId:"oj-checkboxset-checkbox",value:this._GetOptionValue(i)};i=i.parentElement}return this._super(e)},_destroy:function(){var e=this._super(),t=this.element[0].firstElementChild;return this.$checkboxes&&this.$checkboxes._ojRadioCheckbox("destroy"),s(t).contents().unwrap(),o.RadioCheckboxUtils.removeDataListener.call(this),e}})});
//# sourceMappingURL=ojcheckboxset.js.map