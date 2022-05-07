class Post {
	_creationDate;
	_author;
	_preview;
	_description;

	constructor(creationDate, author, preview, description) {
		this._creationDate = creationDate;
		this._author = author;
		this._preview = preview;
		this._description = description;
	}

	get creationDate() {
		return this._creationDate;
	}

	set creationDate(value) {
		if (value instanceof Date) {
			this._creationDate = value;
		} else {
			throw new Error(`Значение, присваемое полю creationDate, должно быть датой. Получено: ${typeof value}`);
		}
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (typeof value === 'string') {
			this._author = value;
		} else {
			throw new Error(`Значение, присваемое полю author, должно быть строкой. Получено: ${typeof value}`);
		}
	}

	get preview() {
		return this._preview;
	}

	set preview(value) {
		if (typeof value === 'string') {
			this._preview = value;
		} else {
			throw new Error(`Значение, присваемое полю preview, должно быть строкой. Получено: ${typeof value}`);
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

	daysFromCreation() {
		return Math.floor((Date.now() - this._creationDate) / MILLISECONDS_IN_DAY);
	}

	daysFromDate(date) {
		return Math.floor((Date.now() - date) / MILLISECONDS_IN_DAY);
	}
}
