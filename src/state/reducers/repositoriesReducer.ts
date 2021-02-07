import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action,
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

// type Action =
//   | { type: 'search_repositories' }
//   | { type: 'search_repositories_success'; payload: string[] }
//   | { type: 'search_repositories_error'; payload: string };

// interface DataFetchState {
//   loading: boolean;
//   error: string | null;
//   data: string[]; //array of whatever you're actually fetching
// }

// type DataFetchAction =
//   | { type: 'fetch_data' }
//   | { type: 'fetch_data_success'; payload: string[] }
//   | { type: 'fetch_data_error'; payload: string };

// const dataFetchReducer = (
//   state: DataFetchState,
//   action: DataFetchAction,
// ): DataFetchState => {
//   switch (action.type) {
//     case 'fetch_data':
//       return { loading: true, error: null, data: [] };
//     case 'fetch_data_success':
//       return { loading: false, error: null, data: action.payload };
//     case 'fetch_data_error':
//       return { loading: false, error: action.payload, data: [] };
//     default:
//       return state;
//   }
// };
