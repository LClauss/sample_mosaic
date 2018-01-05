import React from 'react'; 
import './Index.css';
import { render } from 'react-dom';
import {Mosaic, MosaicWindow, Record} from 'react-mosaic-component'
import classnames from "classnames";
import Cardtiles from './CardTiles/cardtiles'
import { ResponsiveContainer, Area, LineChart, ComposedChart, Line, XAxis, YAxis, CartesianGrid, CartesianAxis, Tooltip, Legend } from 'recharts'

import CustomDot from './rechart/CustomDot.js'
import CustomActivDot from './rechart/CustomActivDot.js'

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
  a: 'BiCubic bézier curve',
  b: 'Quadradic Bézier curve',
  c: 'Demo Graph with CardTiles',
  new: 'New Window'
};

const CONTENT_MAP: Record<ViewId, string> = {
  a: <svg xmlns="http://www.w3.org/2000/svg" style={{width:"100%"}} viewBox="0 0 499 499" preserveAspectRatio="xMidYMid meet">
      <title>SVG curve</title>
      <desc>example curves in SVG</desc>
      <g id="main">
        <circle id="p1" cx="100" cy="300" r="16" />
        <circle id="p2" cx="300" cy="100" r="16" />

        <circle id="c1" cx="100" cy="200" r="8" />
        <circle id="c2" cx="302" cy="300" r="8" />

        <line id="l1" x1="100" y1="300" x2="100" y2="200" />
        <line id="l2" x1="300" y1="100" x2="302" y2="300" />

        <path id="curve" d="M100,300 C100,200 302,300 300,100" className="" />
      </g>
    </svg>,
    b: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499 499" preserveAspectRatio="xMidYMid meet">
    <title>SVG curve</title>
    <desc>example curves in SVG</desc>
    <g id="main">
      <circle id="p1" cx="100" cy="250" r="16" />
      <circle id="p2" cx="400" cy="250" r="16" />

      <circle id="c1" cx="250" cy="100" r="8" />

      <line id="l1" x1="100" y1="250" x2="250" y2="100" />
      <line id="l2" x1="400" y1="250" x2="250" y2="100" />

      <path id="curve" d="M100,250 Q250,100 400,250" className=""/>
    </g>
  </svg>,
  c: <div style={{height:'calc(100% - 105px)',width:"100%"}}>
    <div className="nomulti">
      <Cardtiles value='+54' unit='%' description='+ skins green' />
      <Cardtiles value='54' unit='Kg' description='no sign is blue' />    
      <Cardtiles value='-25' unit='%' description='-  skins red'  />
    </div>  
  <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4D4E94" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#DCE2EE" stopOpacity={0.5} />
        </linearGradient>    
      </defs>
        <circle id="p1" fill="red" cx="100" cy="250" r="16" />      
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianAxis interval={1} />
      <Tooltip dot={false} cursor={false}/>
      <Legend />
      <Area type='monotone' dataKey='pv' fill="#E0DDE7" fillOpacity={.7} stroke='#4D4E94' strokeWidth={4} activeDot={<CustomActivDot />} dot={<CustomDot />}   />    
      <Area type='monotone' dataKey='uv' fill="#E0DDE7" fillOpacity={.7} stroke='#4D4E94' strokeWidth={4} activeDot={<CustomActivDot />} dot={<CustomDot />} />    
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


/*<Area type='monotone' dataKey='uv' fill="url(#colorPv)" stroke='#4D4E94' strokeWidth={4} activeDot={<CustomActivDot />} dot={<CustomDot />} />  */