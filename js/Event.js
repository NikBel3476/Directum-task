class Event {
	_date;
	_description;
	_participantsAmount;
	_requiredParticipantsAmount;

	constructor(date, description, participantsAmount, requiredParticipantAmount) {
		this._date = date;
		this._description = description;
		this._participantsAmount = participantsAmount;
		this._requiredParticipantsAmount = requiredParticipantAmount;
	}

	get date() {
		return this._date;
	}

	set date(value) {
		if (value instanceof Date) {
			this._date = value;
		} else {
			throw new Error(`Значение, присваемое полю date, должно быть датой. Получено: ${typeof value}`);
		}
	}

	get description() {
		return this._description;
	}

	set description(value) {
		if (typeof value === 'string') {
			this._description = value;
		} else {
			throw new Error(`Значение, присваемое полю description, должно быть строкой. Получено: ${typeof value}`);
		}
	}

	get participantsAmount() {
		return this._participantsAmount;
	}

	set participantsAmount(value) {
		if (typeof value === 'number') {
			this._participantsAmount = value;
		} else {
			throw new Error(`Значение, присваемое полю participantsAmount, должно быть числом. Получено: ${typeof value}`);
		}
	}

	get requiredParticipantsAmount() {
		return this._requiredParticipantsAmount;
	}

	set requiredParticipantsAmount(value) {
		if (typeof value === 'number') {
			this._requiredParticipantsAmount = value;
		} else {
			throw new Error(`Значение, присваемое полю requiredParticipantsAmount, должно быть числом. Получено: ${typeof value}`);
		}
	}

	isEnoughParticipants() {
		return this._participantsAmount - this._requiredParticipantsAmount > 0;
	}
}
