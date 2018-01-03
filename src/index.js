import React from 'react'; 
import './Index.css';
import { render } from 'react-dom';
import {Mosaic, MosaicWindow, Record} from 'react-mosaic-component'
import classnames from "classnames";
import Tiles from './tiles/tiles'
import { ResponsiveContainer, Area, LineChart, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import CustomDot from './rechart/CustomDot.js'

import { slide as Menu } from 'react-burger-menu'


class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}


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
  a: 'Leeesdfsdfgsdfgsfdgeft Window',
  b: 'Top Right Window',
  c: 'Demo Graph with CardTiles',
  new: 'New Window'
};

const CONTENT_MAP: Record<ViewId, string> = {
  a: <div></div>,
  b: 'Top Right Window',
  c: <div style={{height:'calc(100% - 144px)',width:"100%"}}>
    <div className="nomulti"><Tiles value='+54' unit='%' description='+ skins green' />
          <Tiles value='54' unit='Kg' description='no sign is blue' />    
          <Tiles value='-25' unit='%' description='-  skins red'  />
    </div>  
  <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} 
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Area type='monotone' dataKey='pv' fill='#DFDDEA' stroke='#4D4E94' strokeWidth={4} dot={<CustomDot />}   />    
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </ComposedChart>
  </ResponsiveContainer></div>,
  new: <h1>New Window</h1>
};

const RootApp = () => (
  <div style={{ height: "100%", width: "100%" }}>
    <Example   width={'280px'} />  
    <ViewIdMosaic id="mosaic"
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
      direction: 'column',
      first: 'c',
      second: {
        direction: 'row',
        first: 'a',
        second: 'b'
      }
    }}
  />
  </div>
);


render(<RootApp />, document.getElementById('rootapp'));
