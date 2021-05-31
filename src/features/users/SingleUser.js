export function SingleUser({ fullName, setFullName, phone, setPhone }) {
	const nameChanged = e => {
		setFullName(e.target.value);
	};

	const phoneChanged = e => {
		setPhone(e.target.value);
	};

	return (
		<div className='content hero'>
			<h1 className='title'>details</h1>

			<form className="form">
				<div className="form__field">
					<label htmlFor='name'>Full Name:</label>
					<input id='name' value={fullName} onChange={nameChanged} />
				</div>
				<div className="form__field">
					<label htmlFor='phone'>Phone Number</label>
					<input id='phone' value={phone} onChange={phoneChanged} />
				</div>
			</form>
		</div>
	);
}
