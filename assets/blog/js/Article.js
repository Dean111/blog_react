import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';




import Settings from '../../../settings';

class Article extends React.Component{
  constructor(props){
    super(props);

    this.state={
      title:'',
      timeStr:'',
      tags:[],
      post:''
    }
  }

  componentDidMount(){
    this.getArticle(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.getArticle(nextProps);
  }

  getArticle(props){
    let self = this;
    let url = Settings.getServiceUrl();

    //判断是否是从router进入 从router进入这是是undefined
    if(props.params){
      let queryType = props.route.to.queryType;
      if(queryType!='info'){
        url = url + '/' + props.params.year + '/' + props.params.month + '/' + props.params.name;
      }else{
        url = url + '/' + props.params.info;
      }
      
      $.ajax({
        url:url,
        type:'GET',
      }).done(function(result){
        self.setState({
          title:result.article.title,
          timeStr:result.article.timeStr,
          tags:result.article.tags,
          post:result.article.post
        });
      }.bind(self));
    }
    
  }

  render(){
    if(this.props.route){
      return (
        <article>
          <header>
            <h2>
              <a href="#">{this.state.title}</a>
            </h2>
          </header>
          <div className="article-meta clearfix">
            <time className="left">{this.state.timeStr}</time>
            <ul className="tags left"></ul>
            <ul className="tags right">
              {
                this.state.tags.map(function(item,index){
                  return (<li><Link to={"/tag"+"/"+item.tag+"/"}>{item.tagName}</Link></li>)
                })
              }
            </ul>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.post}}>
          </div>
        </article>
      )
    }else{
      return(
        <article>
          <header>
            <h2>
              <Link to={"/"+this.props.articleModel.time.year+"/"+this.props.articleModel.time.month+"/"+this.props.articleModel.name}>{this.props.articleModel.title}</Link>
            </h2>
          </header>
          <div className="article-meta clearfix">
            <time className="left" >{this.props.articleModel.timeStr}</time>
            <ul className="tags right">
              {
                this.props.articleModel.tags.map(function(item,index){
                  return (<li key={index}><Link to={"/tag"+"/"+item.tag+"/"}>{item.tagName}</Link></li>)
                })
              }
            </ul>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.props.articleModel.post}}>
          </div>
        </article>
      )
    }
  }
}

export default Article


