export default class ApiError {

    constructor(code, message) {
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    }

}