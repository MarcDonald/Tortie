export function camelToKebab(camelCaseWord: string) {
  // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
  return camelCaseWord
    .replace(/\B(?:([A-Z])(?=[a-z]))|(?:(?<=[a-z0-9])([A-Z]))/g, '-$1$2')
    .toLowerCase();
}
