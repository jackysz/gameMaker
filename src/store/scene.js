import { stateToGetters } from '../common/util'

const SET_GAMEOBJECT = 'SET_GAMEOBJECT'
const SET_GAMEOBJECTS = 'SET_GAMEOBJECTS'
const SET_PLAY = 'SET_PLAY'
const RERENDER = 'RERENDER'

const state = {
    gameObject: null,
    gameObjects: [],
    isPlaying: false,
    shouldRender: false
}

export default {
    state,
    getters: stateToGetters(state),
    mutations: {
        [SET_GAMEOBJECT](state, gameObject) {
            state.gameObject = gameObject
        },
        [SET_GAMEOBJECTS](state, gameObjects) {
            state.gameObjects = gameObjects
        },
        [SET_PLAY](state, isPlaying) {
            state.isPlaying = isPlaying
        },
        [RERENDER](state) {
            state.shouldRender = !state.shouldRender
        }
    },
    actions: {
        setGameObject: ({ commit }, gameObject) =>
            commit(SET_GAMEOBJECT, gameObject),
        setGameObjects: ({ commit }, gameObjects) =>
            commit(SET_GAMEOBJECTS, gameObjects),
        setPlay: ({ commit }, isPlaying) =>
            commit(SET_PLAY, isPlaying),
        rerender: ({ commit }) =>
            commit(RERENDER)
    }
}