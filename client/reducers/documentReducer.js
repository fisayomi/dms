import toastr from 'toastr';
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function roleReducer(state = initialState.manageDocuments, action) {
  switch (action.type) {
    case types.GET_DOCUMENTS_SUCCESS:
      return Object.assign({}, state, { documents: action.documents, documentLabel: action.label, totalCount: action.count, path: action.path });
    case types.CREATE_DOCUMENTS_SUCCESS:
      return Object.assign({}, state);
    case types.SHOW_DOCUMENT:
      return Object.assign({}, state, { showDocument: action.show });
    case types.NEW_DOCUMENT:
      return Object.assign({}, state, { showDocument: action.empty });
    case types.DELETE_DOCUMENTS_SUCCESS:
      toastr.success(action.deleted);
      return state;
    default:
      return state;
  }
}
