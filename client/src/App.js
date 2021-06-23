import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './components/Home';
import Article from './components/articles/Article';
import Articles from './components/articles/Articles';
import AddArticle from './components/add-edit-article/AddArticle';
import ArticleAdministration from './components/administration/ArticleAdministration';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/administration">
            <ArticleAdministration />
          </Route>
          <Route path="/administration/addArticle">
            <AddArticle />
          </Route>
          <Route path="/:articleId">
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
