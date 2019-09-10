var initialState = {
  listes: [
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "8600",
      tv: "Tv Lounge",
      salleDeBain: "3",
      chambre: "2",
      Garage: "1",
      surface: "4800"
    },
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "12000",
      statut: "For Rent",
      tv: "Tv Lounge",
      salleDeBain: "3",
      chambre: "2",
      Garage: "1",
      surface: "4800"
    },
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "3000",
      statut: "For Rent",
      tv: "Tv Lounge",
      salleDeBain: "3",
      chambre: "2",
      Garage: "1",
      surface: "4800"
    },
    {
      titre: "Unique Villa With Private Beach",
      parag:
        "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
      statut: "For Rent",
      prix: "5000",
      statut: "For Rent",
      tv: "Tv Lounge",
      salleDeBain: "3",
      chambre: "2",
      Garage: "2",
      surface: "4800"
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
