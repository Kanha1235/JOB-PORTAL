import React from "react";

const VOID_ELEMENTS = new Set([
  "br",
  "hr",
  "img",
  "input",
  "meta",
  "link",
]);

export function renderJobDescription(htmlString) {
  if (!htmlString) return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  function convertNode(node, key) {
    // Text node
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    // Ignore non-elements
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const tagName = node.tagName.toLowerCase();

    const props = { key };

    //  Preserve anchor attributes
    if (tagName === "a") {
      props.href = node.getAttribute("href");
      props.target = "_blank";
      props.rel = "noopener noreferrer";
    }

    // VOID ELEMENTS → NO CHILDREN
    if (VOID_ELEMENTS.has(tagName)) {
      return React.createElement(tagName, props);
    }

    // Normal elements
    const children = Array.from(node.childNodes).map((child, index) =>
      convertNode(child, index)
    );

    return React.createElement(tagName, props, children);
  }

  return (
    <div className="job-description">
      {Array.from(doc.body.childNodes).map((node, index) =>
        convertNode(node, index)
      )}
    </div>
  );
}
