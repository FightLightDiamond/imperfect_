import FactoryService from '../../services/FactoryService';

const createLessonAsync = async (payload) =>
    await FactoryService.request('LessonService').create(payload)
        .then(authUser => authUser)
        .catch(error => error);


const updateLessonAsync = async (id, payload) => {
    await FactoryService.request('LessonService').update(id, payload)
        .then(authUser => authUser)
        .catch(error => error);
}

const deleteLessonAsync = async (id) =>
    await FactoryService.request('LessonService').delete(id)
        .then(authUser => authUser)
        .catch(error => error);

export {createLessonAsync, updateLessonAsync, deleteLessonAsync}
