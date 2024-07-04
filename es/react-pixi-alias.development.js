import ReactDOM from 'react-dom';
import * as ReactPixiFiber from 'react-pixi-fiber';

// react-pixi like API
// Note: ReactPIXI.factories is not supported

var CustomPIXIComponent = ReactPixiFiber.CustomPIXIComponent;
var render = ReactDOM.render;
var unmountComponentAtNode = ReactDOM.unmountComponentAtNode;
var BitmapText = ReactPixiFiber.BitmapText;
var DisplayObjectContainer = ReactPixiFiber.Container;
var Graphics = ReactPixiFiber.Graphics;
var ParticleContainer = ReactPixiFiber.ParticleContainer;
var Sprite = ReactPixiFiber.Sprite;
var Stage = ReactPixiFiber.Stage;
var Text = ReactPixiFiber.Text;
var TilingSprite = ReactPixiFiber.TilingSprite;
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

export { BitmapText, CustomPIXIComponent, DisplayObjectContainer, Graphics, ParticleContainer, Sprite, Stage, Text, TilingSprite, ReactPIXI as default, render, unmountComponentAtNode };
