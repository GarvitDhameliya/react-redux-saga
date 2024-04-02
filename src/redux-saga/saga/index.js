import { all } from "axios";
import { handle_get_user_saga } from "./rootSaga/userSaga";

function* rootSaga() {
  yield all([handle_get_user_saga()]);
}

export default rootSaga;
