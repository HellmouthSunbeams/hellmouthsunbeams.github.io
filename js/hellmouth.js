const countCharacters = (works) => {
  var characters = {};
  for (const work of works) {
    for (const character of work.characters) {
      if (character in characters) {
        characters[character] += 1;
      } else {
        characters[character] = 1;
      }
    }
  }
  return Object.entries(characters).sort(([ch1, count1], [ch2, count2]) =>
    count1 === count2 ? ch1.localeCompare(ch2) : count2 - count1
  );
};

const countAuthors = (works) => {
  var authors = {};
  for (const work of works) {
    if (work.author in authors) {
      authors[work.author] += 1;
    } else {
      authors[work.author] = 1;
    }
  }
  return Object.entries(authors).sort(([auth1, count1], [auth2, count2]) =>
    count1 === count2 ? auth1.localeCompare(auth2) : count2 - count1
  );
};

const ficCharacters = countCharacters(fics);
const ficAuthors = countAuthors(fics);
const websiteState = () => {
  return {
    masonry: null,
    // fics
    ficFilters: { character: "all", words: [0, Infinity], author: "all" },
    ficCharacters: ficCharacters,
    ficFiltersOpen: false,
    getFilteredFics: (filters) => {
      var filteredFics = fics.map((fic, index) => ({ id: index, ...fic }));
      filteredFics = fics.filter(
        (fic) => filters.words[0] <= fic.words <= filters.words[1]
      );
      if (filters.author !== "all") {
        filteredFics = filteredFics.filter(
          (fic) => fic.author === filters.author
        );
      }
      if (filters.character !== "all") {
        filteredFics = filteredFics.filter((work) =>
          work.characters.includes(filters.character)
        );
      }
      return filteredFics;
    },
    // art
    artwork: art,
    artFilters: { character: "all", author: "all" },
    artFiltersOpen: false,
    getFilteredArt: (filters) => {
      var filteredArt = art.map((work, index) => ({ id: index, ...work }));
      if (filters.author !== "all") {
        filteredArt = filteredArt.filter(
          (work) => work.author === filters.author
        );
      }
      if (filters.character !== "all") {
        filteredArt = filteredArt.filter((work) =>
          work.characters.includes(filters.character)
        );
      }
      return filteredArt;
    },
    getArtAuthorsCount: (filters) => {
      var filteredArt = art;
      if (filters.character !== "all") {
        filteredArt = filteredArt.filter((work) =>
          work.characters.includes(filters.character)
        );
      }
      return countAuthors(filteredArt);      
    },
    getArtCharactersCount: (filters) => {
      var filteredArt = art;
      if (filters.author !== "all") {
        filteredArt = filteredArt.filter(
          (work) => work.author === filters.author
        );
      }
      return countCharacters(filteredArt);      
    },
    getCountForCurrentAuthor: (filters) => {
      if (filters.author !== "all") {
        return art.filter(
          (work) => work.author === filters.author
        ).length;
      } else {
        return art.length;
      }
    },
    getCountForCurrentCharacter: (filters) => {
      if (filters.character !== "all") {
        return art.filter(
          (work) => work.character === filters.character
        ).length;
      } else {
        return art.length;
      }
    },
  };
};
