import React from 'react'; 
import './Index.css';
import { render } from 'react-dom';
import {Mosaic, MosaicWindow, Record} from 'react-mosaic-component'
import classnames from "classnames";
import Tiles from './tiles/tiles'


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export type ViewId = 'a' | 'b' | 'c' | 'new';

// Make a simple extension class to preserve generic type checking in TSX
class ViewIdMosaic extends Mosaic<ViewId> { }
class ViewIdMosaicWindow extends MosaicWindow<ViewId> { }

const TITLE_MAP: Record<ViewId, string> = {
  a: 'Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: 'New Window'
};

const CONTENT_MAP: Record<ViewId, string> = {
  a: <div><Tiles value='54' /><Tiles value='25' /></div>,
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: <h1>New Window</h1>
};

const RootApp = () => (
  <ViewIdMosaic
    renderTile={(id, path) => (
      <ViewIdMosaicWindow
        path={path}
        createNode={() => 'new'}
        title={TITLE_MAP[id]}
      >
    {CONTENT_MAP[id]}
      </ViewIdMosaicWindow>
    )}
    initialValue={{
      direction: 'row',
      first: 'a',
      second: {
        direction: 'column',
        first: 'b',
        second: 'c'
      }
    }}
  />
);


render(<RootApp />, document.getElementById('rootapp'));
