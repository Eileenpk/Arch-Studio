export default function Transition (state, time) {
    state(true);
    setTimeout(() => {
        state(false);
    }, time);
}