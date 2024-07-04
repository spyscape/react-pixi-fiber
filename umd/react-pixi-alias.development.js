(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-dom'), require('react-pixi-fiber')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-dom', 'react-pixi-fiber'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactPixiFiber = {}, global.ReactDOM, global.ReactPixiFiber));
})(this, (function (exports, ReactDOM, ReactPixiFiber) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
  var ReactPixiFiber__namespace = /*#__PURE__*/_interopNamespace(ReactPixiFiber);

  // react-pixi like API
  // Note: ReactPIXI.factories is not supported

  var CustomPIXIComponent = ReactPixiFiber__namespace.CustomPIXIComponent;
  var render = ReactDOM__default["default"].render;
  var unmountComponentAtNode = ReactDOM__default["default"].unmountComponentAtNode;
  var BitmapText = ReactPixiFiber__namespace.BitmapText;
  var DisplayObjectContainer = ReactPixiFiber__namespace.Container;
  var Graphics = ReactPixiFiber__namespace.Graphics;
  var ParticleContainer = ReactPixiFiber__namespace.ParticleContainer;
  var Sprite = ReactPixiFiber__namespace.Sprite;
  var Stage = ReactPixiFiber__namespace.Stage;
  var Text = ReactPixiFiber__namespace.Text;
  var TilingSprite = ReactPixiFiber__namespace.TilingSprite;
  var ReactPIXI = {
    // Render methods
    CustomPIXIComponent: CustomPIXIComponent,
    render: render,
    unmountComponentAtNode: unmountComponentAtNode,
    // Components
    BitmapText: BitmapText,
    DisplayObjectContainer: DisplayObjectContainer,
    Graphics: Graphics,
    ParticleContainer: ParticleContainer,
    Sprite: Sprite,
    Stage: Stage,
    Text: Text,
    TilingSprite: TilingSprite
  };

  exports.BitmapText = BitmapText;
  exports.CustomPIXIComponent = CustomPIXIComponent;
  exports.DisplayObjectContainer = DisplayObjectContainer;
  exports.Graphics = Graphics;
  exports.ParticleContainer = ParticleContainer;
  exports.Sprite = Sprite;
  exports.Stage = Stage;
  exports.Text = Text;
  exports.TilingSprite = TilingSprite;
  exports["default"] = ReactPIXI;
  exports.render = render;
  exports.unmountComponentAtNode = unmountComponentAtNode;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
