console.log("script module");
import {
  Runtime,
  Inspector,
} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/@john-guerra/us-senate-network@434.js?v=4";

export const notebook = new Runtime().module(define, (name) => {
  //   if (name === "viewof minVotes") return new Inspector(document.querySelector("#observablehq-viewof-minVotes"));
  //   if (name === "usVotingNetwork") return new Inspector(document.querySelector("#observablehq-usVotingNetwork"));
  //   if (name === "viewof vote_results_selected") return new Inspector(document.querySelector("#observablehq-viewof-vote_results_selected"));
  //   if (name === "viewof r") return new Inspector(document.querySelector("#observablehq-viewof-r"));
  //   if (name === "viewof selectedSenators") return new Inspector(document.querySelector("#observablehq-viewof-selectedSenators"));
  //   if (name === "senatorToVoteLinksNodes") return new Inspector(document.querySelector("#observablehq-senatorToVoteLinksNodes"));
  return [
    "viewof minVotes",
    "usVotingNetwork",
    "introText",
    "viewof vote_results_selected",
    "viewof r",
    "viewof selectedSenators",
    "senatorToVoteLinksNodes",
    "filteredLinks",
    "colorLegend",
    "senatorToVoteLinks",
    "commonVotesLinks",
    "w",
    "network",
  ].includes(name);
});

// export const minVotes = notebook.value("minVotes");
