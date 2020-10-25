const sortFanwork = (works, key = "title") =>
  works.sort((left, right) =>
    (left.author.replace(/^(@)/, "") + left[key]).localeCompare(right.author.replace(/^(@)/, "") + right[key])
  );

const fics = sortFanwork([
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
    characters: ["Other/multiple"],
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
]);

const music = sortFanwork([
  // -- ADD YOUR MUSIC HERE --
  {
    url: "https://thegarages.bandcamp.com/track/the-tug",
    title: "The Tug",
    author: "amadis",
  },
  {
    url: "https://thegarages.bandcamp.com/track/do-not-come-to-the-hellmouth",
    title: "Don't Come To The Hellmouth",
    author: "slavfox",
  },
  {
    url: "https://www.youtube.com/watch?v=Cihbcuii9WA",
    title: "bury our light",
    author: "slavfox",
  },
]);

var shuffle = (array) => {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

  return array;
}

const art = sortFanwork([
  // -- ADD YOUR ART HERE --
  {
    url: "https://twitter.com/CKaelde/status/1320040538704314368/photo",
    src: "/fanart/CKaelde_Nagomi.png",
    author: "@CKaelde",
    author_link: "https://twitter.com/CKaelde",
    characters: ["Nagomi Nava"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1316763493916438531",
    src: "/fanart/slavfoxman_iwillnotallowit.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Nagomi Nava"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1314282058106245120/photo/1",
    src: "/fanart/slavfoxman_gomester_wanted_poster.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Nagomi Nava"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1311725025066704896/photo/1",
    src: "/fanart/slavfoxman_bickle_pitching.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Eugenia Bickle"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1311949280811327488/photo/1",
    src: "/fanart/slavfoxman_monsieur_beam_moose.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Monsieur Beam"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1302032563393957889/photo/1",
    src: "/fanart/slavfoxman_sutton_tlopps_card.png",
    author: "@slavfoxman",
    characters: ["Sutton Bishop"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1301946037704196097/photo/1",
    src: "/fanart/slavfoxman_sutton_shopping.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Sutton Bishop"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1301582950870417415/photo/1",
    src: "/fanart/slavfoxman_nagomi_tlopps.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Nagomi Nava"],
    blur: false,
  },
  {
    url: "https://twitter.com/slavfoxman/status/1299731960730923011/photo/1",
    src: "/fanart/slavfoxman_nagomi_walking.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman/",
    characters: ["Nagomi Nava"],
    blur: false
  },
  {
    url: "https://twitter.com/slavfoxman/status/1306958708149280774/photo/1",
    src: "/fanart/slavfoxman_aro_nagomi_comic.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman/",
    characters: ["Nagomi Nava"],
    blur: false
  },
  {
    url: "https://twitter.com/slavfoxman/status/1310277601257193477/photo/1",
    src: "/fanart/slavfoxman_tentacle_horror_nagomi.png",
    author: "@slavfoxman",
    author_link: "https://twitter.com/slavfoxman",
    characters: ["Nagomi Nava"],
    blur: true, 
    cw: "cw: tentacle horror Nagomi"
  },
  {
    url: "/fanart/hillexed_homeless_moonba_full.png",
    src: "/fanart/hillexed_homeless_moonba.png",
    author: "@hillexed",
    author_link: "https://twitter.com/hillexed",
    characters: ["Moonba"],
    blur: false
  },
  {
    url: "https://twitter.com/larkiiiine/status/1316454078902398980/photo/1",
    src: "/fanart/larkiiiine_gomi.png",
    author: "@larkiiiine",
    author_link: "https://twitter.com/larkiiiine/",
    characters: ["Nagomi Nava"],
    blur: false
  },
  {
    url: "https://twitter.com/larkiiiine/status/1317522798093438976/photo/1",
    src: "/fanart/larkiiiine_party.png",
    author: "@larkiiiine",
    author_link: "https://twitter.com/larkiiiine/",
    characters: ["Nagomi Nava", "Sutton Bishop", "Zack Sanders", "Sandoval Crossing", "Eugenia Bickle", "Lars Taylor", "Dudley Mueller"],
    blur: false
  },
  {
    url: "https://twitter.com/larkiiiine/status/1318601762186690562/photo/1",
    src: "/fanart/larkiiiine_friends.png",
    author: "@larkiiiine",
    author_link: "https://twitter.com/larkiiiine/",
    characters: ["Randall Marijuana", "Emmett Internet"],
    blur: false
  },
  {
    url: "https://twitter.com/larkiiiine/status/1318604833469943811/photo/1",
    src: "/fanart/larkiiiine_friends2.png",
    author: "@larkiiiine",
    author_link: "https://twitter.com/larkiiiine/",
    characters: ["Randall Marijuana", "Emmett Internet", "Nagomi Nava"],
    blur: false
  },
  {
    url: "https://twitter.com/larkiiiine/status/1319311820113543171/photo/1",
    src: "/fanart/larkiiiine_magmatic.png",
    author: "@larkiiiine",
    author_link: "https://twitter.com/larkiiiine/",
    characters: ["Nagomi Nava"],
    blur: false
  },
  {
    url: "/fanart/larkiiiine_duds_full.png",
    src: "/fanart/larkiiiine_duds.png",
    author: "@larkiiiine",
    author_link: "https://twitter.com/larkiiiine/",
    characters: ["Dudley Mueller"],
    blur: false
  },
  {
    url: "/fanart/ivi_pessoa_tigerbeams_full.png",
    src: "/fanart/ivi_pessoa_tigerbeams.png",
    author: "@Ivi_Pessoa",
    author_link: "https://twitter.com/Ivi_Pessoa",
    characters: ["Other/multiple"],
    blur: false
  },
  {
    url: "/fanart/pichi_emmett_full.png",
    src: "/fanart/pichi_emmett.png",
    author: "Pichi2214",
    author_link: null,
    characters: ["Emmett Internet"],
    blur: false
  },
  // Coblin
  {
    url: "/fanart/krasi_savov_bickle_full.png",
    src: "/fanart/krasi_savov_bickle.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Eugenia Bickle"],
    blur: false
  },
  {
    url: "https://twitter.com/Krasi_Savov/status/1317756008903659520/photo/1",
    src: "/fanart/krasi_savov_duds.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Dudley Mueller"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_emmet2a_full.png",
    src: "/fanart/krasi_savov_emmet2a.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Emmett Internet"],
    blur: false
  },
  {
    url: "https://twitter.com/Krasi_Savov/status/1316468128923242504/photo/1",
    src: "/fanart/krasi_savov_hahn.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Hahn Fox"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_hendricks_full.png",
    src: "/fanart/krasi_savov_hendricks.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Hendricks Richardson"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_iggy_full.png",
    src: "/fanart/krasi_savov_iggy.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Igneus Delacruz"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_jeff2_full.png",
    src: "/fanart/krasi_savov_jeff2.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["JEFF!"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_lars_full.png",
    src: "/fanart/krasi_savov_lars.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Lars Taylor"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_miguel_full.png",
    src: "/fanart/krasi_savov_miguel.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Miguel James"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_moonroomba_full.png",
    src: "/fanart/krasi_savov_moonroomba.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Moonba"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_nagomi_full_1.png",
    src: "/fanart/krasi_savov_nagomi_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Nagomi Nava"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_nerd_full_1.png",
    src: "/fanart/krasi_savov_nerd_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Nerd Pacheco"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_randy1_full_1.png",
    src: "/fanart/krasi_savov_randy1_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Randall Marijuana"],
    blur: false
  },
  {
    url: "https://twitter.com/Krasi_Savov/status/1318195220362764288/photo/1",
    src: "/fanart/krasi_savov_sandy_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Sandoval Crossing"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_sigmund_full_1.png",
    src: "/fanart/krasi_savov_sigmund_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Sigmund Castillo"],
    blur: false
  },
  {
    url: "https://twitter.com/Krasi_Savov/status/1318195220362764288/photo/1",
    src: "/fanart/krasi_savov_sutton2_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Sutton Bishop"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_sutton_full_1.png",
    src: "/fanart/krasi_savov_sutton_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Sutton Bishop"],
    blur: false
  },
  {
    url: "/fanart/krasi_savov_zack_full_1.png",
    src: "/fanart/krasi_savov_zack_1.png",
    author: "@Krasi_Savov",
    author_link: "https://twitter.com/Krasi_Savov",
    characters: ["Zack Sanders"],
    blur: false
  },
  // Glempy
  {
    url: "https://twitter.com/Glempy/status/1301863622193426433/photo/1",
    src: "/fanart/glempy_emmett.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Emmett Internet"],
    blur: false
  },
  {
    url: "https://twitter.com/Glempy/status/1306666083387150337/photo/1",
    src: "/fanart/glempy_hahn.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Hahn Fox"],
    blur: false
  },
  {
    url: "https://twitter.com/Glempy/status/1300504809250881536/photo/1",
    src: "/fanart/glempy_hollywoof.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Alaynabella Hollywood"],
    blur: false
  },
  {
    url: "https://twitter.com/Glempy/status/1292096715210870785/photo/1",
    src: "/fanart/glempy_hollywood.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Alaynabella Hollywood"],
    blur: false
  },
  {
    url: "https://twitter.com/Glempy/status/1298238334800625664/photo/1",
    src: "/fanart/glempy_malik.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Malik Romayne"],
    blur: false
  },
  {
    url: "/fanart/glempy_sutton_full.jpg",
    src: "/fanart/glempy_sutton.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Sutton Bishop"],
    blur: false
  },
  {
    url: "/fanart/glempy_hendricks_full.jpg",
    src: "/fanart/glempy_hendricks.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Hendricks Richardson"],
    blur: false
  },
  {
    url: "/fanart/glempy_hendricks2_full.jpg",
    src: "/fanart/glempy_hendricks2.jpg",
    author: "@Glempy",
    author_link: "https://twitter.com/Glempy/",
    characters: ["Hendricks Richardson"],
    blur: false
  },
], "src");

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
  return characters;
}

const countAuthors = (works) => {
  var authors = {};
  for (const work of works) {
    if (work.author in authors) {
      authors[work.author] += 1;
    } else {
      authors[work.author] = 1;
    }
  }
  return authors;
}

const ficCharacters = countCharacters(fics);
const ficAuthors = countAuthors(fics);
const artCharacters = countCharacters(art);
const artAuthors = countAuthors(art);

const websiteState = () => {
  return {
    masonry: null,
    artwork: art,
    ficFilters: { character: "all", words: [0, Infinity], author: "all" },
    artFilters: { character: "all", author: "all" },
    ficCharacters: ficCharacters,
    artCharacters: artCharacters,
    artFiltersOpen: false,
    ficFiltersOpen: false,
    getFilteredFics: (filters) => {
      var filteredFics = fics.map((fic, index) => ({id: index, ...fic}));
      filteredFics = fics.filter(
        (fic) => filters.words[0] <= fic.words <= filters.words[1]
      );
      if (filters.author !== "all") {
        filteredFics = filteredFics.filter(
          (fic) => fic.author === filters.author
        );
      }
      if (filters.character !== "all") {
        filteredFics = filteredFics.filter((work) => work.characters.includes(filters.character));
      }
      return filteredFics;
    },
    getFilteredArt: (filters) => {
      var filteredArt = art.map((work, index) => ({id: index, ...work}));
      if (filters.author !== "all") {
        filteredArt = filteredArt.filter((work) => work.author === filters.author);
      }
      if (filters.character !== "all") {
        filteredArt = filteredArt.filter((work) => work.characters.includes(filters.character));
      }
      return filteredArt;
    },
  };
};
