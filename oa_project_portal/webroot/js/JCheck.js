/*
 * Compressed by JSA(www.xidea.org)
 */
function submit(_, $, A) {
	if (arguments[1] == undefined)
		$ = document.forms[0];
	else
		$ = arguments[1];
	if (formCheck($, A))
		submitC($, _)
}
function JCheck() {
}
function isNone($) {
	if (isNull($))
		return true;
	if (typeof $ == "string")
		if ($ == "")
			return true;
	return false
}
function isNull($) {
	if ($ == undefined || $ == null)
		return true;
	return false
}
function trim($) {
	if (isNone($))
		return "";
	while (true) {
		var A = $.charAt(0);
		if (A != " ")
			break;
		else
			$ = $.substring(1, $.length)
	}
	while (true) {
		var _ = $.charAt($.length - 1);
		if (_ != " ")
			break;
		else
			$ = $.substring(0, $.length - 1)
	}
	return $
}
function getLengthInCheck(A) {
	var _ = A.length;
	for ( var $ = 0; $ < A.length; $++)
		if (A.charAt($) > "~" || A.charAt($) < " ")
			_++;
	return _
}
function getNowDateInCheck() {
	var A = new Date(), $ = A.getMonth() + 1, _ = A.getDate();
	if ($ < 10)
		$ = "0" + $;
	if (_ < 10)
		_ = "0" + _;
	return A.getFullYear() + "-" + $ + "-" + _
}
function checkDateInCheck(_) {
	var $ = /^\d{4}-[0-1][0-9]-[0-3][0-9]$/;
	return $.test(_)
}
JCheck.prototype = ( {
	innerObj : null,
	show : true,
	index : "value",
	bingFun : null,
	head : "head",
	getValue : function() {
		if (this.innerObj.type.toLowerCase().indexOf("select") != -1) {
			if (this.innerObj.selectedIndex == -1)
				return "";
			return getAttribute(
					this.innerObj.options[this.innerObj.selectedIndex],
					this.index)
		}
		if (this.innerObj.type.toLowerCase() == "radio"
				|| this.innerObj.type.toLowerCase() == "checkbox") {
			var _ = document.getElementsByName(this.innerObj.name);
			for ( var $ = 0; $ < _.length; $++)
				if (_[$].checked)
					return getAttribute(_[$], this.index);
			return ""
		}
		if (isNull(getAttribute(this.innerObj, this.index)))
			return null;
		else
			return getAttribute(this.innerObj, this.index)
	},
	getHead : function() {
		var $ = getAttribute(this.innerObj, this.head);
		if (isNull($))
			return "";
		else
			return $
	},
	innerCheck : function() {
		if (isNull(this.getValue())) {
			this.alert(Res._r["INNERCHECK_HINT"]);
			return false
		}
		return true
	},
	alert : function($) {
		this.showMessage($)
	},
	showMessage : function(A, $) {
		if (this.show)
			if (isNull($) || isNull($[0]) || $[0] == true) {
				var _ = getAttribute(this.innerObj, "message");
				if (!isNone(_))
					alert(_);
				else if (!isNone(A))
					alert(this.getHead() + " " + A)
			}
	},
	notNone : function() {
		if (trim(this.getValue()) == "") {
			var $ = Res._r["NOT_NULL"];
			this.showMessage($, arguments);
			return false
		} else
			return true
	},
	isReg : function(B, A) {
		var $ = trim(this.getValue()), _ = [ true ];
		if (!isNull(arguments[2]))
			_[0] = arguments[2];
		if (!B.test($)) {
			this.showMessage(A, _);
			return false
		} else
			return true
	},
	isNumber : function() {
		var _ = /^[0-9]*$/, $ = Res._r["ONLY_NUMBER"];
		return this.isReg(_, $)
	},
	isOnlyNumber : function() {
		var _ = /^[0-9]+$/, $ = Res._r["ONLY_NUMBER"];
		return this.isReg(_, $)
	},
	isInt : function() {
		var _ = /^[1-9][0-9]*$/, $ = Res._r["ONLY_NATURAL_NUMBER"];
		return this.isReg(_, $)
	},
	isMathNumber : function() {
		var A = /^[0-9]+$/, $ = /^-{1}[0-9]+$/, _ = Res._r["ONLY_NUMBER"];
		if (this.isReg(A, null, false) || this.isReg($, null, false))
			return true;
		else {
			this.showMessage(_, arguments);
			return false
		}
	},
	maxLength : function(_) {
		var $;
		if (typeof _ == "number")
			$ = _;
		else {
			this.alert(Res._r["PARAMETER_NOT_NUMBER"]);
			return false
		}
		if (getLengthInCheck(this.getValue()) > $) {
			var A = Res._r["LENGTH_ALERT_OVER"] + $;
			this.showMessage(A);
			return false
		} else
			return true
	},
	isChecked : function() {
		var A = false;
		if (this.innerObj.type.toLowerCase() == "radio"
				|| this.innerObj.type.toLowerCase() == "checkbox") {
			var _ = document.getElementsByName(this.innerObj.name);
			for ( var $ = 0; $ < _.length; $++)
				if (_[$].checked)
					A = true
		}
		if (!A) {
			var B = Res._r["SELECT_NOT_NULL"];
			this.showMessage(B, arguments);
			return false
		} else
			return true
	},
	isCommonChar : function() {
		var _ = /^[^`~#\$\^&\*=\!\+\\\/\|<>\?;\:'"\{\}\[\]　,]*$/;
		if (!isNone(arguments[0]))
			if (typeof arguments[0] == "string")
				_ = arguments[0];
		var $ = Res._r["CAN_NOT_CONTAIN"]
				+ ",./<>?'; : ~ ! `#$ % ^ & * () = + \\ | {}[]\"";
		return this.isReg(_, $)
	},
	isNumberOrLetter : function() {
		var _ = /^[A-Za-z0-9]*$/, $ = Res._r["ONLY_NUMBER_OR_LETTER"];
		return this.isReg(_, $)
	},
	isLetter : function() {
		var _ = /^[A-Za-z]*$/, $ = Res._r["ONLY_LETTER"];
		return this.isReg(_, $)
	},
	isFloat : function() {
		var _ = /^(-?\d+)(\.\d+)?$/, $ = Res._r["ONLY_FLOAT"];
		return this.isReg(_, $)
	},
	isFloat3 : function() {
		var _ = /^(\d+)(\.\d+)?$/, $ = Res._r["ONLY_FLOAT2"];
		return this.isReg(_, $)
	},
	isFloat2 : function() {
		if (!this.notNone(false))
			return true;
		return this.isFloat()
	},
	isEmail : function() {
		var B = /(^\w{1,}\.?\w{1,})@(\[\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}\])$/, _ = /(^\w{1,}\.?\w{1,})@(\w{2,}\.(\w{2,}\.)?[a-zA-Z]{2,3})$/, $ = Res._r["ONLY_EMAIL"], A = this
				.isReg(_)
				|| this.isReg(B);
		if (A)
			return A;
		else {
			this.showMessage($, arguments);
			return false
		}
	},
	isUrl : function() {
		var _ = /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/, $ = Res._r["ONLY_URL"];
		return this.isReg(_, $)
	},
	minLength : function($) {
		var _;
		if (typeof $ == "number")
			_ = $;
		else {
			this.alert(Res._r["PARAMETER_NOT_NUMBER"]);
			return false
		}
		if (getLengthInCheck(this.getValue()) < _) {
			var A = Res._r["LENGTH_ALERT_LESS"] + _;
			this.showMessage(A);
			return false
		} else
			return true
	},
	cnow : function(C, G, H) {
		var $ = "==";
		if (!isNull(C))
			$ = C;
		var A = "yyyy-MM-dd", B, F = trim(this.getValue());
		if (isNull(G))
			B = getNowDateInCheck();
		else
			B = G;
		if (!checkDateInCheck(F)) {
			this.alert(F + Res._r["CNOW_ALERT_1"] + A + Res._r["CNOW_ALERT_2"]);
			return false
		}
		if (!checkDateInCheck(B)) {
			this.alert(B + Res._r["CNOW_ALERT_1"] + A + Res._r["CNOW_ALERT_2"]);
			return false
		}
		var _, D;
		if ($ == "<=" || $ == "12") {
			_ = (F <= B);
			D = Res._r["CNOW_ALERT_OVER"] + B
		}
		if ($ == "==" || $ == "22") {
			_ = (F == B);
			D = Res._r["CNOW_ALERT_EQUAL"] + B
		}
		if ($ == "<" || $ == "10") {
			_ = (F < B);
			D = Res._r["CNOW_ALERT_OVER_EQUAL"] + B
		}
		if ($ == ">=" || $ == "32") {
			_ = (F >= B);
			D = Res._r["CNOW_ALERT_LESS"] + B
		}
		if ($ == ">" || $ == "30") {
			_ = (F > B);
			D = Res._r["CNOW_ALERT_LESS_EQUAL"] + B
		}
		if (!_) {
			var E = D;
			this.showMessage(E);
			return false
		} else
			return true
	},
	noEquals : function(_) {
		if (this.getValue() == _) {
			var $ = Res._r["VALUE_NOT_EQUAL"] + _;
			this.showMessage($);
			return false
		} else
			return true
	},
	equals : function(_) {
		if (this.getValue() != _) {
			var $ = Res._r["VALUE_EQUAL"] + _;
			this.showMessage($);
			return false
		} else
			return true
	},
	range : function(B, _) {
		if (this.notNone(false)) {
			var A = "";
			if (!isNull(B) && !isNull(_)) {
				A = Res._r["RANGE_OVER_EQUAL"] + B + ","
						+ Res._r["RANGE_LESS_EQUAL"] + _;
				var $ = parseInt(this.getValue(), 10);
				if ($ >= B && $ <= _)
					return true;
				else {
					this.showMessage(A);
					return false
				}
			}
			if (!isNull(B) && isNull(_)) {
				A = Res._r["RANGE_OVER_EQUAL"] + B;
				$ = parseInt(this.getValue(), 10);
				if ($ >= B)
					return true;
				else {
					this.showMessage(A);
					return false
				}
			}
			if (isNull(B) && !isNull(_)) {
				A = Res._r["RANGE_LESS_EQUAL"] + _;
				$ = parseInt(this.getValue(), 10);
				if ($ <= _)
					return true;
				else {
					this.showMessage(A);
					return false
				}
			}
			A = Res._r["RANGE_EXCEPTION"];
			this.showMessage(A);
			return false
		} else
			return true
	}
});
var jCheck = new JCheck();
function disableAllButton() {
	var _ = document.getElementsByTagName("input");
	for ( var $ = 0; $ < _.length; $++)
		if (_[$].type.toLowerCase() == "button"
				|| _[$].type.toLowerCase() == "submit"
				|| _[$].type.toLowerCase() == "reset")
			_[$].disabled = true
}
function submitC($, A) {
	var _;
	if (arguments[0] == undefined)
		_ = document.forms[0];
	else
		_ = arguments[0];
	if (isNone(arguments[1])) {
		disableAllButton();
		_.submit()
	} else if (window.confirm(A)) {
		disableAllButton();
		_.submit()
	}
}
function getAttribute(_, $) {
	if (_ == null)
		return "";
	if ($ == "value")
		return _.value;
	return _.getAttribute($) || _[$]
}
function eCheck() {
	var elements = arguments[0];
	if (elements == null)
		return true;
	for ( var i = 0; i < elements.length; i++) {
		var oo = elements[i], attr = null;
		if (oo.disabled)
			continue;
		if (oo.type != "hidden" && oo.style.display == "none")
			continue;
		attr = getAttribute(oo, "oncheck");
		if (attr == null)
			continue;
		var methods = attr.split(";"), fun = null, checkResult = false;
		for ( var k = 0; k < methods.length; k++) {
			if (trim(methods[k]) == "")
				continue;
			var par = getFun(methods[k]), rs;
			if (par[0]) {
				fun = this[par[2]];
				if (isNull(fun)) {
					alert(Res._r["ECHECK_MISS_FUNCTION"] + par[2]);
					return false
				}
				try {
					rs = fun.apply(this, [ oo ])
				} catch (e) {
					alert(Res._r["ECHECK_INVOKE_ERROR"] + par[2]);
					return false
				}
			} else {
				fun = jCheck[par[2]];
				if (isNull(fun)) {
					alert(Res._r["ECHECK_MISS_FUNCTION"] + par[2]);
					return false
				}
				jCheck.innerObj = oo;
				var paa = getAttribute(oo, "parameter");
				if (!isNone(paa))
					jCheck.index = paa;
				else
					jCheck.index = "value";
				var sh = getAttribute(oo, "show");
				if (!isNone(sh))
					jCheck.show = getBoolean(sh);
				else
					jCheck.show = true;
				jCheck.innerCheck();
				try {
					eval("checkResult = jCheck." + par[1])
				} catch (e) {
					alert(Res._r["ECHECK_INVOKE_ERROR"] + par[1]);
					return false
				}
				rs = checkResult
			}
			if (!rs) {
				try {
					if (isFocusElement(oo)) {
						oo.focus();
						oo.select()
					}
				} catch (e) {
				}
				return false
			}
		}
	}
	return true
}
function isFocusElement($) {
	if ($.type.toLowerCase() == "text" || $.type.toLowerCase() == "textarea"
			|| $.type.toLowerCase() == "select-one")
		return true;
	if ($.type.toLowerCase() == "checkbox" || $.type.toLowerCase() == "radio")
		return true;
	return false
}
function formCheck($, A) {
	var B = arguments[0];
	if (isNull(B))
		B = document.forms[0];
	var C = B.elements;
	if (!eCheck(C))
		return false;
	if (!isNull(arguments[1])) {
		var _ = arguments[1].call(this);
		if (!_)
			return false
	}
	return true
}
function getBoolean($) {
	if ($ == "false")
		return false;
	else
		return true
}
function getFun(_) {
	var $ = new Array();
	if (_.indexOf(":") == -1) {
		$[0] = false;
		$[1] = _
	} else {
		$[0] = true;
		$[1] = _.substring(1)
	}
	if ($[1].indexOf("(") != -1)
		$[2] = $[1].substring(0, $[1].indexOf("("));
	else {
		$[2] = $[1];
		$[1] = $[1] + "()"
	}
	return $
}