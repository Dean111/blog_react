import React from 'react';
import $ from 'jquery';

class Navigation extends React.Component{
	render(){
		return (
			<div className="navigation clearfix">
				<nav className="menus-main left">
					<a href="/" className="favicon">
						<img src="./assets/blog/images/favicon.png" alt="null在吹牛逼" title="null在吹牛逼" />
					</a>
					<a href="/">关于</a>
					<a href="/">简历</a>
					<a href="/">链接</a>
					<a href="/">书单</a>
					<a href="/">碎语</a>
					<a href="/">所有日志</a>
				</nav>
				<nav className="menus-right right">
					<a target="_blank" href="http://git.oschina.net/mywei1989" className="favicon">
           <img src="./assets/blog/images/gitosc.png" alt="myGitosc" title="myGitosc" />
          </a>
          <a target="_blank" href="https://github.com/mywei1989" className="favicon">
           <img src="./assets/blog/images/github.png" alt="myGithub" title="myGithub" />
          </a>
				</nav>
			</div>
		)
	}
}


export default Navigation;