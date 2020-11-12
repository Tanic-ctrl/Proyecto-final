let rndNumber = Math.random().toString(36).substr(1, 4);

let data = {
    email: 'dummy' + rndNumber + '@mailinator.com',
    //email: 'dummy' + 'tania' + '@mailinator.com',
    firstName: 'Tania',
    lastName: 'Radilla',
    password: '99999',
    pbox: "PO Box 7687",
    city: "New York",
    state: "New York",
    postCode: '10001',
    country: "United States",
    mobile: '553321353548',
    passwordWrong: '090909'
}
export { data }