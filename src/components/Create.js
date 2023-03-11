import { useState } from "react";


export const Create = () => {
	const [createValues, setCreateValues] = useState({
		name: '',
		type: 'bike',
		season: 'summer',
		mountain: '',
		denivelation: 0,
		distance: 0,
		duration: 0,
		durType: '',
		description: '',
		imageUrl: ''
	});

	const onValueChange = (e) => {
		setCreateValues(state => ({ ...state, [e.target.name]: e.target.value }));
	};

	const createSubmit = (e) => {
		e.preventDefault();
		console.log(createValues);
	}

	return (
		<div className="banner">
			<div className="container">
				<div className="register-area">
					<h3>Create a Story</h3>
					<form onSubmit={createSubmit}>
						<div className="form-group row">
							<div className="form-group col-sm-8">
								<label>Give it a Title</label>
								<input type="text"
									className="form-control"
									name="name"
									placeholder="Title"
									value={createValues.name}
									onChange={onValueChange}
								/>
							</div>
							<div className="form-group col-sm-4">
								<label htmlFor="type">Type</label>
								<select className="form-control" name="type" id="type" value={createValues.type} onChange={onValueChange}>
									<option value="bike">Bike</option>
									<option value="hike">Hike</option>
									<option value="trek">Trek</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<div className="form-group col-sm-6">
								<label htmlFor="season">In which season?</label>
								<select className="form-control" name="season" id="season" value={createValues.season} onChange={onValueChange}>
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
									value={createValues.mountain}
									onChange={onValueChange}
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
									value={createValues.distance}
									onChange={onValueChange}
								/>
							</div>
							<div className="form-group col-sm-6">
								<label>Denivelation &#40;in meters&#41;</label>
								<input type="number"
									className="form-control"
									name="denivelation"
									placeholder="meters"
									value={createValues.denivelation}
									onChange={onValueChange}
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
									value={createValues.duration}
									onChange={onValueChange}
								/>
							</div>
							<div className="form-group col-sm-5">
								<label>Hours or Days?</label>
								<div className="btn-group" data-toggle="buttons">
									<label
										className={`btn ${createValues.durType === 'hours' ? 'btn-success' : 'btn-info'}`}
										htmlFor="hours">Hours
										<input type="radio" name="durType" id="hours" value="hours"
											onChange={onValueChange}
											checked={createValues.durType === 'hours'} />
									</label>
									<label
										className={`btn ${createValues.durType === 'days' ? 'btn-success' : 'btn-info'}`}
										htmlFor="days">Days
										<input type="radio" name="durType" id="days" value="days"
											onChange={onValueChange}
											checked={createValues.durType === 'days'} />
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
								value={createValues.imageUrl}
								onChange={onValueChange}
							/>
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea name="description" cols="54" rows="6"
								value={createValues.description}
								onChange={onValueChange}>
							</textarea>
						</div>
						<button type="submit" className="btn btn-default">SignUp</button>
					</form>
				</div>
			</div>
		</div>
	);
}