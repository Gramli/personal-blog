import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Navigation/Header';
import Home from './components/Home';
import ArticleHeaderList from './components/articles/ArticleHeadersList';
import Article from './components/articles/Article';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/articles/:articleId">
            <Article />
          </Route>
          <Route path="/articles">
            <ArticleHeaderList />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
