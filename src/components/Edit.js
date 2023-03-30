import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { validateCreate } from "../utils/validateValues";
import { paths } from "../constants/paths";
import { get, del } from "../utils/api";
import { useForm } from "../hooks/useForm";

export const Edit = ({
    editStory,
    deleteStory
}) => {
    const { storyId } = useParams();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        name: '',
        type: 'Bike',
        season: 'summer',
        mountain: '',
        denivelation: 0,
        distance: 0,
        duration: 0,
        durType: '',
        description: '',
        imageUrl: '',
    }, editSubmit)

    useEffect(() => {
        get(paths.getById(storyId))
            .then(data => {
                changeValues(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [storyId]);


    function editSubmit() {
        const error = validateCreate(values)
        if (error !== 'noError')
            return window.alert(error);

        editStory(values, storyId);
    }

    function onDelete() {
        const choice = window.confirm(`Are you sure you want to delete ${values.name}?`);
        if (choice) {
            deleteStory(storyId);
        }
    }

    return (
        <div className="banner">
            <div className="container">
                <div className="register-area">
                    <h3>Edit Story</h3>
                    <form>
                        <div className="form-group row">
                            <div className="form-group col-sm-8">
                                <label>Give it a Title</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Title"
                                    value={values.name}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="type">Type</label>
                                <select className="form-control" name="type" id="type" value={values.type} onChange={changeHandler}>
                                    <option value="Bike">Bike</option>
                                    <option value="Hike">Hike</option>
                                    <option value="Trek">Trek</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="season">In which season?</label>
                                <select className="form-control" name="season" id="season" value={values.season} onChange={changeHandler}>
                                    <option value="summer">Summer</option>
                                    <option value="autumn">Autumn</option>
                                    <option value="winter">Winter</option>
                                    <option value="spring">Spring</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-6">
                                <label>In which Mountain?</label>
                                <input type="text"
                                    className="form-control"
                                    name="mountain"
                                    placeholder="Mountain"
                                    value={values.mountain}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group col-sm-6">
                                <label>Distance &#40;in kilometers&#41;</label>
                                <input type="number"
                                    className="form-control"
                                    name="distance"
                                    placeholder="kilometers"
                                    value={values.distance}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <label>Denivelation &#40;in meters&#41;</label>
                                <input type="number"
                                    className="form-control"
                                    name="denivelation"
                                    placeholder="meters"
                                    value={values.denivelation}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group col-sm-7">
                                <label>How much did it last?</label>
                                <input type="number"
                                    className="form-control"
                                    name="duration"
                                    placeholder="Time"
                                    value={values.duration}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group col-sm-5">
                                <label>Hours or Days?</label>
                                <div className="btn-group" data-toggle="buttons">
                                    <label
                                        className={`btn ${values.durType === 'hours' ? 'btn-success' : 'btn-info'}`}
                                        htmlFor="hours">Hours
                                        <input type="radio" name="durType" id="hours" value="hours"
                                            onChange={changeHandler}
                                            checked={values.durType === 'hours'} />
                                    </label>
                                    <label
                                        className={`btn ${values.durType === 'days' ? 'btn-success' : 'btn-info'}`}
                                        htmlFor="days">Days
                                        <input type="radio" name="durType" id="days" value="days"
                                            onChange={changeHandler}
                                            checked={values.durType === 'days'} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="text"
                                className="form-control"
                                name="imageUrl"
                                placeholder="https://..."
                                value={values.imageUrl}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name="description" cols="54" rows="6"
                                value={values.description}
                                onChange={changeHandler}>
                            </textarea>
                        </div>
                    </form>
                    <div className="form-group row">
                        <div className="form-group col-sm-6">
                            <button onClick={onSubmit} className="btn btn-default">Edit</button>
                        </div>
                        <div className="form-group col-sm-6">
                            <button onClick={onDelete} type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}