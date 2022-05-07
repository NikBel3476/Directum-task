class Comment {
	_creationDate;
	_author;
	_content;

	constructor(creationDate, author, content) {
		this._creationDate = creationDate;
		this._author = author;
		this._content = content;
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

	get content() {
		return this._content;
	}

	set content(value) {
		if (typeof value === 'string') {
			this._content = value;
		} else {
			throw new Error(`Значение, присваемое полю content, должно быть строкой. Получено: ${typeof value}`);
		}
	}

	daysFromCreation() {
		return Math.floor((Date.now() - this._creationDate) / MILLISECONDS_IN_DAY);
	}
}
