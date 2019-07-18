import axios from "axios";
import history from "../history";

export function addNewCatelog(newCatelog) {
  axios({
    method: "POST",
    url: "http://localhost:3333/api/catelogs",
    data: newCatelog
  })
    .then(res => history.push("/admin/catelogs"))
    .catch(error => console.log(error));
}
