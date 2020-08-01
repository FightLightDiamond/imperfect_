import FactoryService from '../../services/FactoryService';

const getLessonAsync = async (id) =>
    await FactoryService.request('LessonService').show(id)
        .then(authUser => authUser)
        .catch(error => error)

const getLessonsAsync = async (filter) =>
    await FactoryService.request('LessonService').index(filter)
        .then(authUser => authUser)
        .catch(error => error)

const createLessonAsync = async (filter) =>
    await FactoryService.request('LessonService').create(filter)
        .then(authUser => authUser)
        .catch(error => error)

const updateLessonAsync = async (id, filter) =>
    await FactoryService.request('LessonService').update(id, filter)
        .then(authUser => authUser)
        .catch(error => error)

const destroyLessonAsync = async (id) =>
    await FactoryService.request('LessonService').destroy(id)
        .then(authUser => authUser)
        .catch(error => error)

export {getLessonsAsync, createLessonAsync, destroyLessonAsync, getLessonAsync, updateLessonAsync}
