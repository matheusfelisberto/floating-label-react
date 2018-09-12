"use strict";

exports.__esModule = true;
exports.focusStyles = exports.inputStyles = exports.floatingStyles = exports.spanStyles = exports.labelStyles = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var labelStyles = exports.labelStyles = {
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  paddingTop: 5,
  position: "relative"
};

var spanStyles = exports.spanStyles = {
  boxSizing: "border-box",
  fontSize: "1rem",
  left: 0,
  padding: "17px 0 13px 0",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  transition: "font-size 200ms, padding 200ms",
  zIndex: 1
};

var floatingStyles = exports.floatingStyles = {
  fontSize: "0.625rem",
  padding: 0
};

var inputStyles = exports.inputStyles = {
  border: "none",
  borderBottom: "1px solid black",
  boxSizing: "border-box",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "1rem",
  padding: "12px 0 8px 0"
};

var focusStyles = exports.focusStyles = {
  borderColor: "blue",
  outline: "none"
};

var FloatingLabel = function (_React$Component) {
  _inherits(FloatingLabel, _React$Component);

  function FloatingLabel() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      floating: false,
      focused: false
    }, _this.handleFocusChange = function (evt) {
      evt.type === "focus" ? _this.props.onFocus(evt) : _this.props.onBlur(evt);

      _this.setState({
        focused: !_this.state.focused
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FloatingLabel.prototype.isFloating = function isFloating(value, focused) {
    return value.length || focused;
  };

  FloatingLabel.prototype.render = function render() {
    var focused = this.state.focused;
    var _props = this.props,
        styles = _props.styles,
        value = _props.value,
        onChange = _props.onChange;

    var floating = this.isFloating(value, focused);
    var Node = this.props.element;
    var floatingStyle = floating && Object.assign({}, floatingStyles, styles.floating);
    var focusStyle = focused && Object.assign({}, focusStyles, styles.focus);
    var labelStyle = Object.assign({}, labelStyles, styles.label);
    var spanStyle = Object.assign({}, spanStyles, styles.span, floatingStyle);
    var inputStyle = Object.assign({}, inputStyles, styles.input, focusStyle);

    return _react2.default.createElement(
      "label",
      { htmlFor: this.props.id, style: labelStyle },
      _react2.default.createElement(
        "span",
        { style: spanStyle },
        this.props.placeholder
      ),
      _react2.default.createElement(Node, {
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoFocus: this.props.autoFocus,
        value: this.props.value,
        id: this.props.id,
        inputMode: this.props.inputMode,
        max: this.props.max,
        maxLength: this.props.maxLength,
        min: this.props.min,
        minLength: this.props.minLength,
        name: this.props.name,
        onBlur: this.handleFocusChange,
        onChange: onChange,
        onFocus: this.handleFocusChange,
        pattern: this.props.pattern,
        readOnly: this.props.readOnly,
        required: this.props.required,
        spellCheck: this.props.spellCheck,
        step: this.props.step,
        style: inputStyle,
        type: this.props.type
      })
    );
  };

  return FloatingLabel;
}(_react2.default.Component);

FloatingLabel.propTypes = {
  autoCapitalize: _propTypes2.default.oneOf(["none", "sentences", "words", "characters"]),
  autoComplete: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  element: _propTypes2.default.oneOf(["input", "textarea"]),
  id: _propTypes2.default.string.isRequired,
  inputMode: _propTypes2.default.string,
  max: _propTypes2.default.number,
  maxLength: _propTypes2.default.number,
  min: _propTypes2.default.number,
  minLength: _propTypes2.default.number,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  pattern: _propTypes2.default.any,
  placeholder: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  spellCheck: _propTypes2.default.bool,
  step: _propTypes2.default.number,
  styles: _propTypes2.default.object,
  type: _propTypes2.default.oneOf(["text", "password", "url", "search", "email", "tel"]),
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

FloatingLabel.defaultProps = {
  autoFocus: false,
  disabled: false,
  element: "input",
  name: "",
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  placeholder: "",
  readOnly: false,
  required: false,
  step: 1,
  styles: {},
  type: "text",
  value: ""
};

exports.default = FloatingLabel;
