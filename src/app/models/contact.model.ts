export class Contact {

    constructor(public name: string = '', public email: string = '', public phone: string = '', public _id?: string) {
    }

    setId?() {
        this._id = makeId()
    }
}

function makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}