import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateArticle from './CreateArticle';
import articleActionCreators from '../../actions/articles';


export const mapStateToProps = state => ({
  ...state.categoryReducer,
  ...state.articleReducers,
  ...state.imageUploadReducers,
  ...state.articleViewReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  articleActionCreators,
  dispatch,
);

const CreateArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateArticle);

export default CreateArticleContainer;
