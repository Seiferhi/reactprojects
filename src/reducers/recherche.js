var initialState = {
  listes: [
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      tv: "Tv Lounge",
      salleDeBain: "3 Bedrooms",
      chambre: "2 bathrooms",
      Garage: "1 Garage",
      surface: "4800 sq ft"
    },
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      tv: "Tv Lounge",
      salleDeBain: "3 Bedrooms",
      chambre: "2 bathrooms",
      Garage: "1 Garage",
      surface: "4800 sq ft"
    },
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      tv: "Tv Lounge",
      salleDeBain: "3 Bedrooms",
      chambre: "2 bathrooms",
      Garage: "1 Garage",
      surface: "4800 sq ft"
    },
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      statut: "For Rent",
      prix: "$8,600 Per Month",
      tv: "Tv Lounge",
      salleDeBain: "3 Bedrooms",
      chambre: "2 bathrooms",
      Garage: "1 Garage",
      surface: "4800 sq ft"
    }
  ]
};


const recherche = (state = initialState, action) => {
  if (action.type === 'ADD_SEARCH') {
    return Object.assign({}, state, {
      listes: state.listes.concat(action.payload)
    });
  }
  return state;
};
export default recherche;
