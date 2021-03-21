import queryString from "query-string";

export default function getQueryParams(querySearch) {
  return queryString.parse(querySearch);
}