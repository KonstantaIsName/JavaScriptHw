function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];

users.push(new User(1, "ІА", "ІВА", "@email", "123-456-7890"));
users.push(new User(2, "ВАВІ", "ІВА", "@email", "234-567-8901"));
users.push(new User(3, "АВА", "ІАВ", "@email", "345-678-9012"));
users.push(new User(4, "Bob", "ІАВ", "@email", "456-789-0123"));
users.push(new User(5, "АІe", "АІВ", "@email", "567-890-1234"));
users.push(new User(6, "ІАВd", "АІ", "@email", "678-901-2345"));
users.push(new User(7, "ІАВ", "АІ", "@email", "789-012-3456"));
users.push(new User(8, "ІАВ", "MАІВ", "@email", "890-123-4567"));
users.push(new User(9, "ІАВ", "ІВА", "@email", "901-234-5678"));
users.push(new User(10, "ІВА", "ІВАІВ", "@email", "012-345-6789"));

console.log(users);
