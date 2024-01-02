
const INITIAL_STATE = {mood: "¯\_( ͡❛ ͜ʖ ͡❛)_/¯"};

const moodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "Happy" :
            return {...state, mood: "╰(°▽°)╯"};

        case "Sad":
            return {...state, mood: "╥﹏╥"};

        case "Angry":
            return {...state, mood: "ಠ益ಠ"};

        case "Confused":
            return {...state, mood: "¯\_(ツ)_/¯"}
        default: 
            return state;
    }
};

const store = Redux.createStore(moodReducer);