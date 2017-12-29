import React from 'react'; 
import './Index.css';
import { render } from 'react-dom';
import {Mosaic, MosaicWindow, Record} from 'react-mosaic-component'
import classnames from "classnames";
import Tiles from './tiles/tiles'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
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
  a: <div><Tiles value='54' unit='%' description='Mon super texte'/><Tiles value='25' unit='%' /></div>,
  b: 'Top Right Window',
  c: <LineChart width={600} height={300} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8"  />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>,
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
