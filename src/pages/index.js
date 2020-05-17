import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PreHeader from '../components/PreHeader'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      isBlackBackground: true
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleBGChange = this.handleBGChange.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleBGChange(){
   
    if(this.state.isBlackBackground){
      this.state.isBlackBackground = false; 
      document.body.style.backgroundColor = '#cccccc';
      document.body.style.color = '#000000';
      document.body.style.borderColor = '#000000';
      document.getElementById('headerName').style.color = '#000000';
      document.getElementById('sun').style.display = 'inline';
      return; 
    }

    if(!this.state.isBlackBackground){
      this.state.isBlackBackground = true; 
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#cccccc';
      document.body.style.borderColor = '#cccccc';
      document.getElementById('headerName').style.color = '#cccccc';
      document.getElementById('moon').style.display = 'none';
      return; 
    }

  }


  getDisplayProp(m){
    if(m == 'moon'){
      if(this.state.isBlackBackground)
        return 'none';
      else
        return 'inline';
    }
    if(m == 'sun'){
      if(this.state.isBlackBackground)
        return 'inline';
      else
        return 'none';
    }


  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }





  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <PreHeader isBlackBackground={this.isBlackBackground} 
                       handleBGChange={this.handleBGChange}
                       getDisplayProp= {this.getDisplayProp} />
            <Header onOpenArticle={this.handleOpenArticle} 
                    timeout={this.state.timeout} 
                    isBlackBackground={this.isBlackBackground} 
                    handleBGChange={this.handleBGChange} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              isBlackBackground={this.isBlackBackground}
              handleBGChange={this.handleBGChange}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
