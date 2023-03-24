

export const validateCreate = (values) => {

    const typeValues = ['Bike', 'Hike', 'Trek'];
    const seasons = ['summer', 'autumn', 'winter', 'spring'];
    const durTypes = ['hours', 'days'];

    if (values.name.length === 0)
        return 'You should give a title to your story!';

    if (typeValues.indexOf(values.type) < 0)
        return 'The adventure type should be one of the listed!';

    if (seasons.indexOf(values.season) < 0)
        return 'The season should be one of the listed!';

    if (values.mountain.length === 0)
        return 'Please provide the name of the mountain!';

    if (isNaN(values.distance))
        return 'Distance should be a number!';

        if (Number(values.distance) <= 0)
            return 'A distance is not a distance if it is no more than zero :)'

    if (isNaN(values.denivelation))
        return 'Denivelation should be a number!';

    if (isNaN(values.duration))
        return 'Duration should be a number!';

        if (Number(values.duration) <= 0)
            return 'Duration should be a positive number!'

    if (values.durType === '')
        return `${values.duration} pears?!?! Please select "Hours" or "Days"!`;

        if (durTypes.indexOf(values.durType) < 0)
            return 'The duration type can only be hours or days!'

    if (!(/^https?:\/\//.test(values.imageUrl)))
        return 'Please provide a valid image url ("http://" or "https://")'

    if (values.description.length === 0)
        return 'You should provide a description!'

    return 'noError';
}