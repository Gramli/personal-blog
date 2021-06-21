import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './components/Home';
import Article from './components/articles/Article';
import Articles from './components/articles/Articles';
import AddArticle from './components/add-article/AddArticle';

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
          <Route path="/addArticle">
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
