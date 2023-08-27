/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

import { API_URL, AUTH_URL } from '../settings'

import {
    GET_TRAININGS_DONE,
    setTrainingsDone,
    // GET_CURRENT_TRAINING,
    getCurrentTrainingSuccess,
    GET_GIRLS,
    getGirlsSuccess,
    GET_ONE_GIRL,
    gotError,
    getTrainingsDone,
} from '../actions/trainingAjaxActions'
import {
    setReadTraining,
    POST_NEW_TRAINING,
} from '../actions/readTrainingActions'
import {
    DELETE_TRAINING,
    UPDATE_TRAINING_DONE,
    updateTrainingSuccess,
} from '../actions/trainingsDoneActions'

export default (store) => (next) => (action) => {
    const errorMsg = (
        <div>
            Oups, quelque chose ne se passe pas comme prévu. <br />
            <br /> Si le problème persiste, vous pouvez contacter l'équipe via
            le lien en bas de la page d'accueil
        </div>
    )
    const readTrainingState = store.getState().readTraining
    const trainingsDoneState = store.getState().trainingsDone

    switch (action.type) {
        case GET_TRAININGS_DONE:
            next(action)
            axios
                .get(`${AUTH_URL}/chronofit/trainings-done`, {
                    withCredentials: true,
                })
                .then((res) => {
                    console.log(res.data)
                    for (const exo of res.data) {
                        exo.exos = JSON.parse(exo.exos)
                    }
                    store.dispatch(setTrainingsDone(res.data))
                })
                .catch((err) => console.error(err))
            break

        case GET_GIRLS:
            next(action)
            axios
                .get(`${API_URL}/girls`)
                .then((res) => store.dispatch(getGirlsSuccess(res.data)))
                .catch((err) => {
                    store.dispatch(gotError(errorMsg))
                })
            break

        case GET_ONE_GIRL:
            next(action)
            axios
                .get(`${API_URL}/girl/${action.value}`)
                .then((res) => {
                    store.dispatch(getCurrentTrainingSuccess(res.data))
                    store.dispatch(setReadTraining('girl'))
                })
                .catch((err) => {
                    store.dispatch(gotError(errorMsg))
                })
            break

        case POST_NEW_TRAINING:
            const { trainingDetails, trainingRecord, globalChrono } =
                readTrainingState
            const training = {
                ...trainingDetails,
                exos: trainingRecord,
                duration: Math.round(globalChrono.currentTime),
            }
            console.log(training)
            axios
                .post(
                    `${AUTH_URL}/chronofit/new-training`,
                    {
                        ...training,
                    },
                    { withCredentials: true }
                )
                .then((res) => {
                    // console.log(res.data);
                    window.alert("C'est enregistré !")
                })
                .catch((error) => {
                    store.dispatch(gotError(errorMsg))
                })

            next(action)
            break

        case DELETE_TRAINING:
            console.log('DELETE_TRAINING', action.value)
            axios
                .delete(`${AUTH_URL}/chronofit/training/${action.value}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    // console.log(res.data);
                    res.data
                        ? store.dispatch(getTrainingsDone())
                        : store.dispatch(gotError(errorMsg))
                })
                .catch((error) => {
                    store.dispatch(gotError(errorMsg))
                })

            next(action)
            break

        case UPDATE_TRAINING_DONE:
            next(action)
            axios
                .put(
                    `${AUTH_URL}/chronofit/trainings-done/${action.value}`,
                    { training: trainingsDoneState.currentTraining },
                    { withCredentials: true }
                )
                .then((res) => {
                    console.log(res.data)
                    res.data
                        ? store.dispatch(updateTrainingSuccess())
                        : store.dispatch(gotError(errorMsg))
                })
                .catch((error) => {
                    store.dispatch(gotError(errorMsg))
                })
            break
        default:
            next(action)
    }
}
