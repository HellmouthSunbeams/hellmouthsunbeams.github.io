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
    getFilteredFics: function () {
      var filteredFics = fics.map((fic, index) => ({ id: index, ...fic }));
      filteredFics = fics.filter(
        (fic) =>
          this.ficFilters.words[0] <= fic.words <= this.ficFilters.words[1]
      );
      if (this.ficFilters.author !== "all") {
        filteredFics = filteredFics.filter(
          (fic) => fic.author === this.ficFilters.author
        );
      }
      if (this.ficFilters.character !== "all") {
        filteredFics = filteredFics.filter((work) =>
          work.characters.includes(this.ficFilters.character)
        );
      }
      return filteredFics;
    },
    // art
    artwork: art,
    artFilteredByAuthor: art,
    artFilteredByCharacter: art,
    artFilters: { character: "all", author: "all" },
    artFiltersOpen: false,
    filterArtByAuthor: function (author) {
      this.artFilters.author = author;
      var filteredArt = [...this.artwork];
      if (author !== "all") {
        filteredArt = filteredArt.filter((work) => work.author === author);
      }
      this.artFilteredByAuthor = filteredArt;
    },
    filterArtByCharacter: function (character) {
      this.artFilters.character = character;
      var filteredArt = [...this.artwork];
      if (character !== "all") {
        filteredArt = filteredArt.filter((work) =>
          work.characters.includes(character)
        );
      }
      this.artFilteredByCharacter = filteredArt;
    },
    getFilteredArt: function () {
      return this.artFilteredByAuthor.filter((work) =>
        this.artFilteredByCharacter.includes(work)
      );
    },
  };
};
