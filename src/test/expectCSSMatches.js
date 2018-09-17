const stripComments = str => str.replace(/\/\*.*?\*\/\n?/g, "");

export const stripWhitespace = str =>
  str
    .trim()
    .replace(/([;\{\}])/g, "$1  ")
    .replace(/\s+/g, " ");

export const expectCSSMatches = (
  _expectation,
  opts = { ignoreWhitespace: true }
) => {
  // NOTE: This should normalise both CSS strings to make irrelevant mismatches less likely
  const expectation = _expectation
    .replace(/ {/g, "{")
    .replace(/:\s+/g, ":")
    .replace(/:\s+;/g, ":;");

  const css = Array.from(document.querySelectorAll("style"))
    .map(tag => tag.innerHTML)
    .join("\n")
    .replace(/ {/g, "{")
    .replace(/:\s+/g, ":")
    .replace(/:\s+;/g, ":;");

  if (opts.ignoreWhitespace) {
    const stripped = stripWhitespace(stripComments(css));
    expect(stripped).toEqual(stripWhitespace(expectation));
    return stripped;
  } else {
    expect(css).toEqual(expectation);
    return css;
  }
};
