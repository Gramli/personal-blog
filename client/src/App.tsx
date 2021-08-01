import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './components/Home';
import Article from './components/articles/Article';
import Articles from './components/articles/Articles';
import AddArticle from './components/add-article/AddArticle';
import ArticleAdministration from './components/administration/ArticleAdministration';
import EditArticle from './components/edit-article/EditArticle';
import Login from './components/login/Login';
import LoginContextProvider from './context/LoginContext';

const App: React.FC = ()=> {
  return (
    <LoginContextProvider>
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
          <Route exact path="/administration/Login">
            <Login />
          </Route>
          <Route path="/administration/addArticle">
            <AddArticle />
          </Route>
          <Route path="/administration/editArticle/:articleId">
            <EditArticle />
          </Route>
          <Route path="/:articleId">
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
      </LoginContextProvider>
  );
}

export default App;
