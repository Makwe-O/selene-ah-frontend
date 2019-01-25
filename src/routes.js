import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUpContainer';
import VerifyAuth from './containers/Auth/SocialAuth/VerifyAuth';
import NoMatch from './components/pages/NoMatch/NoMatch';
import ResetPassword from './containers/Auth/ResetPassword/ResetPassword';
import UpdatePassword from './containers/Auth/ResetPassword/UpdatePassword';
import ArticleView from './containers/Article/ArticleView';
import CreateArticle from './components/Article/CreateArticle';
import EmailVerification
  from './components/pages/EmailVerification/EmailVerification';

const routes = [
  {
    path: '/signup',
    component: SignUp,
    name: 'signup',
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    exact: true,
  },
  {
    path: '/auth/twitter',
    component: VerifyAuth,
    name: 'authTwitter',
    exact: true,
  },
  {
    path: '/auth/facebook',
    component: VerifyAuth,
    name: 'authFacebook',
    exact: true,
  },
  {
    path: '/create-article',
    component: CreateArticle,
    name: 'createArticle',
    exact: false,
  },
  {
    path: '/email-verification',
    component: EmailVerification,
    name: 'email-verification',
    exact: true,
  },
  {
    path: '/password-reset',
    component: ResetPassword,
    name: 'reset-password',
    exact: true,
  },
  {
    path: '/password-update',
    component: UpdatePassword,
    name: 'update-password',
    exact: true,
  },
  {
    path: '/article/:slug',
    component: ArticleView,
    name: 'article page',
    exact: true,
  },
  {
    path: '/auth',
    component: VerifyAuth,
    name: 'auth',
    exact: true,
  },
  {
    component: NoMatch, name: 'no-match',
  },
];
export default routes;
