const happyButton = document.querySelector("#happy");
const sadButton = document.querySelector("#sad");
const angryButton = document.querySelector("#angry");
const confusedButton = document.querySelector("#confused");
const h1 = document.querySelector("h1")

happyButton.addEventListener("click", (e)=>{
    store.dispatch({type: "Happy"});
    const state = store.getState();
    h1.innerText = state.mood;
});

sadButton.addEventListener("click", (e)=> {
    store.dispatch({type: "Sad"});
    const state = store.getState();
    h1.innerText = state.mood;
});

angryButton.addEventListener("click", (e)=> {
    store.dispatch({type: "Angry"});
    const state = store.getState();
    h1.innerText = state.mood;
});

confusedButton.addEventListener("click", (e)=> {
    store.dispatch({type: "Confused" });
    const state = store.getState();
    h1.innerText = state.mood;
})