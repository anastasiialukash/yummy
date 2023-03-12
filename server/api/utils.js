export const reply = (res, body, timeout = 1000, status = 200) =>
    setTimeout(() => {
        res.status(status).json(body);
    }, timeout);

export const getById = (entities) => (id) =>
    entities.find((entity) => entity.id === id);
