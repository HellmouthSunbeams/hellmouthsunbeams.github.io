const fics = [
  // -- ADD YOUR FICS HERE --
  {
    url:
      "https://docs.google.com/document/d/1g4a1xX678CjjaTLEb0_4Uay8qIyoCoiFaiPbx0Sg3Nk/edit",
    title: "Rebooting",
    words: 293,
    author: "ENBY",
    characters: ["Emmett Internet"],
  },
  {
    url:
      "https://docs.google.com/document/d/18Vg6VQuudZoPE7BFbi4_1LLj57wzXw3t7hd8S8lwtjM/edit?usp=sharing",
    title: "This Is Me",
    words: 922,
    author: "slavfox",
    characters: ["Nagomi Nava"],
  },
  {
    url:
      "https://docs.google.com/document/d/1yrhbP46F67OgNgwRzg0xSAikOE3dEi8qZIPVZssUzr8/edit?usp=sharing",
    title: "Haunted Moon Island",
    words: 1014,
    author: "Solistic Barb",
    characters: ["Multiple characters"],
  },
  {
    url:
      "https://docs.google.com/document/d/1AuM4HeM6MLypvpE0iWs5loQQHTxqLwBL0ZcBoYYOtpE/edit?usp=sharing",
    title: "Precognition",
    words: 924,
    author: "dasy",
    characters: ["Nagomi Nava"],
  },
  // -- END FICS --
].sort((left, right) =>
  (left.author + left.title).localeCompare(right.author + right.title)
);

const characters = [...new Set(fics.map((fic) => fic["characters"]).flat())];

const websiteState = () => {
  return {
    ficFilters: { characters: [], words: [0, Infinity], author: null },
    characters: characters,
    getFilteredFics: (filters) => {
      filteredFics = fics.filter(
        (fic) => filters.words[0] <= fic.words <= filters.words[1]
      );
      if (filters.author !== null) {
        filteredFics = filteredFics.filter(
          (fic) => fic.author == filters.author
        );
      }
      if (filters.characters !== []) {
        filteredFics = filteredFics.filter((fic) =>
          filters.characters.every((c) => c in fic.characters)
        );
      }
      return filteredFics;
    },
  };
};
