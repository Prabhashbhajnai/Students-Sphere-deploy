// Library
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// HOC 
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Library HOC
import LibraryHomeLayoutHOC from "./HOC/Library/Home.Library.Hoc";
import NewspaperLayoutHOC from "./HOC/Library/Newspaper.Library.Hoc";
import LibraryTeacherLayoutHOC from "./HOC/Library/Teachers.Library.Hoc";
import LibraryQuestionpaperLayoutHOC from "./HOC/Library/Questionpaper.Library.Hoc";
import BooksLayoutHOC from "./HOC/Library/Books.Library.Hoc";
import IndividualBookLayoutHOC from "./HOC/Library/IndividualBook.Library.Hoc";

// Forum HOC
import ForumHomeLayoutHOC from "./HOC/Forum/Home.Forum.Hoc";
import ForumQuestionLayoutHOC from "./HOC/Forum/Question.Forum.Hoc";

// Components
import Temp from "./components/Temp";

// Pages
import HomePage from "./Pages/Home";

// Library Pages
import LibraryHome from "./Pages/Library/LibraryHome";
import Newspaper from "./Pages/Library/Newspaper";
import Teachers from "./Pages/Library/TeachersPage";
import Questionpaper from "./Pages/Library/Questionpaper";
import FantasyFiction from "./Pages/Library/Genre/FantasyFiction";
import Romance from "./Pages/Library/Genre/Romance";
import TextBook from "./Pages/Library/Genre/TextBook";
import ScienceFiction from "./Pages/Library/Genre/ScienceFiction";
import ScienceTech from "./Pages/Library/Genre/ScienceTech";
import SpecificBook from "./Pages/Library/Specific Book/SpecificBook";

// Forum Page
import ForumHome from "./Pages/Forum/ForumHome";
import Question from "./Pages/Forum/Question";

// Authentication
import GoogleAuth from "./Pages/GoogleAuth";

// redux action
import { getMyself } from "./Redux/Reducer/user/user.action";

// axios global settings
if (localStorage.studentHubUser) {
  const { token } = JSON.parse(localStorage.studentHubUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}  

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.studentHubUser) dispatch(getMyself());
  }, []);

  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomePage} />

      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />

      {/* Library routes */}
      <LibraryHomeLayoutHOC path="/library" exact component={LibraryHome} />
      <NewspaperLayoutHOC path="/library/newspaper" exact component={Newspaper} />
      <LibraryTeacherLayoutHOC path="/library/teacher" exact component={Teachers} />
      <LibraryQuestionpaperLayoutHOC path="/library/teacher/questionpaper/:id" exact component={Questionpaper} />
      <Route path="/library/books" exact>
        <Redirect to="/library/books/fantasyfiction" />
      </Route>
      <BooksLayoutHOC path="/library/books/fantasyfiction" exact component={FantasyFiction} />
      <BooksLayoutHOC path="/library/books/romance" exact component={Romance} />
      <BooksLayoutHOC path="/library/books/textbook" exact component={TextBook} />
      <BooksLayoutHOC path="/library/books/science-fic" exact component={ScienceFiction} />
      <BooksLayoutHOC path="/library/books/science-tech" exact component={ScienceTech} />
      <IndividualBookLayoutHOC path="/library/books/category/:id" exact component={SpecificBook} />

      {/* Forum routes */}
      <ForumHomeLayoutHOC path="/forum" exact component={ForumHome} />
      <ForumQuestionLayoutHOC path="/forum/:id" exact component={Question} />
    </>
  );
}

export default App;