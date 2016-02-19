import React, { Component } from 'react';
import $ from 'jquery';

//import Mytest from './mytest';
import Navigation from './navigation';
import Information from './information';
import TagList from './tags';
import ArchiveList from './archives';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns page-header">
          <h1>null的博客</h1>
        </div>
        <div className="columns">
          <Navigation />
        </div>
        <div className="columns">
        <div className="block-body column three-fourths">
          <div className="archive-pagination">
            <div className="paginator">
              <span className="page-number current">1</span>
              <a className="page-number" href="/2015/02/page/2/">2</a>
              <a className="extend next" rel="next" href="/2015/02/page/2/">»</a>
            </div>
          </div>
        </div>
        <div className="block-sidebar column one-fourth">
          <Information />
          <div id="tags" className="widget tags">
            <TagList promise={$.getJSON('http://localhost:3001/getAllTag')}/>
          </div>
          <div id="archives" className="widget archives">
            <ArchiveList promise={$.getJSON('http://localhost:3001/getArchive')}/>
          </div>
          <div className="widget text-content">
            <p>
              该博客使用基于 &nbsp;
              <a href="http://www.expressjs.com">express</a>
            </p>
          </div>
        </div>
    </div>
      </div>
    )
  }
}
