function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);
  function Input(props) {
    var _this;
    _classCallCheck(this, Input);
    _this = _callSuper(this, Input, [props]);
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var newValue = event.target.value;
      var _this$props = _this.props,
        regex = _this$props.regex,
        required = _this$props.required,
        type = _this$props.type;
      var value = _this.state.value;
      if (type === 'file') {
        var isValid = event.target.files.length > 0;
        var fileName = isValid ? event.target.files[0].name : 'No file chosen';
        _this.setState({
          isValid: isValid,
          value: event.target.files,
          fileName: fileName
        });
      } else if (type === 'checkbox') {
        var _isValid = event.target.checked || !required;
        newValue = !value;
        _this.setState({
          isValid: _isValid,
          value: !value
        });
      } else if (!required && regex && newValue.trim() === '') {
        _this.setState({
          isValid: true,
          value: newValue
        });
      } else if (required && newValue.trim() === '') {
        _this.setState({
          isValid: false,
          value: newValue
        });
      } else if (regex) {
        var _isValid2 = regex.test(newValue);
        _this.setState({
          isValid: _isValid2,
          value: newValue
        });
      } else {
        _this.setState({
          isValid: true,
          value: newValue
        });
      }
      _this.StoreValues(newValue);
    });
    _this.state = {
      isValid: !props.required,
      value: '',
      fileName: 'No file chosen',
      get valid() {
        return this.isValid;
      }
    };
    return _this;
  }
  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.id + ' mounted');
      this.StoreValues('');
    }
  }, {
    key: "StoreValues",
    value: function StoreValues(newValue) {
      var _this2 = this;
      var _this$props2 = this.props,
        id = _this$props2.id,
        type = _this$props2.type;
      this.setState({
        value: newValue
      }, function () {
        var isValid = _this2.state.isValid;
        sessionStorage.setItem(id, JSON.stringify({
          "isValid": isValid,
          "value": newValue,
          "type": type
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        placeholder = _this$props3.placeholder,
        warning = _this$props3.warning,
        required = _this$props3.required,
        type = _this$props3.type,
        variants = _this$props3.variants,
        id = _this$props3.id;
      var _this$state = this.state,
        isValid = _this$state.isValid,
        value = _this$state.value,
        fileName = _this$state.fileName;
      if (type === 'combo') {
        return /*#__PURE__*/React.createElement("div", {
          className: "input-wrap"
        }, /*#__PURE__*/React.createElement("select", {
          className: "input ".concat(isValid ? '' : 'invalid'),
          value: value,
          id: id,
          onChange: this.handleChange
        }, /*#__PURE__*/React.createElement("option", {
          value: "",
          disabled: true,
          hidden: true
        }, "Select an option"), variants.map(function (option, index) {
          return /*#__PURE__*/React.createElement("option", {
            key: index,
            value: option
          }, option);
        })), required && value === '' && /*#__PURE__*/React.createElement("span", {
          className: "input-warning"
        }, "This field is required"), /*#__PURE__*/React.createElement("span", {
          className: "input-warning ".concat(isValid ? 'hidden' : '')
        }, warning));
      } else if (type === 'file') {
        return /*#__PURE__*/React.createElement("div", {
          className: "input-wrap"
        }, /*#__PURE__*/React.createElement("input", {
          id: id,
          type: "file",
          className: "input ".concat(isValid ? '' : 'invalid'),
          onChange: this.handleChange,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "file-input-box"
        }, /*#__PURE__*/React.createElement("label", {
          htmlFor: id,
          className: "file-button"
        }), /*#__PURE__*/React.createElement("span", {
          className: "file-chosen"
        }, fileName)), required && value.length === 0 && /*#__PURE__*/React.createElement("span", {
          className: "input-warning"
        }, "This field is required"), /*#__PURE__*/React.createElement("span", {
          className: "input-warning ".concat(isValid ? 'hidden' : '')
        }, warning));
      } else if (type === 'checkbox') {
        return /*#__PURE__*/React.createElement("div", {
          className: "input-wrap"
        }, /*#__PURE__*/React.createElement("input", {
          id: id,
          type: "checkbox",
          className: "input ".concat(isValid ? '' : 'invalid'),
          checked: value,
          onChange: this.handleChange,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/React.createElement("label", {
          htmlFor: id,
          className: "checkbox-input"
        }, placeholder), required && value == false && /*#__PURE__*/React.createElement("span", {
          className: "input-warning"
        }, "This field is required"));
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "input-wrap"
      }, /*#__PURE__*/React.createElement("input", {
        id: id,
        type: "text",
        className: "input ".concat(isValid ? '' : 'invalid'),
        placeholder: placeholder,
        value: value,
        onChange: this.handleChange
      }), required && value.trim() === '' && /*#__PURE__*/React.createElement("span", {
        className: "input-warning"
      }, "This field is required"), !isValid && value.length !== 0 && /*#__PURE__*/React.createElement("span", {
        className: "input-warning ".concat(isValid ? 'hidden' : '')
      }, warning));
    }
  }]);
  return Input;
}(React.Component);
export default Input;