class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;
    constructor(name: string, age: number, email: string,
        bff: boolean){
          this.name = name;
          this.age = age;
          this.email = email;
          this.bff = bff;     
                        }
}

let friends: Friend[] = [];
friends.push(new Friend("Bill", 28, "email.com", false), 
            new Friend("Tim", 40, "gmail.com", false),
            new Friend("Sally", 58, "ymail.com", false),
            new Friend("Ginny", 18, "harrypotter.com", true),
            new Friend("Ron", 20, "weasley.com", true));

const message = (fRiends: Friend[]): void =>{
    console.log("Name, Age, Email, BFF")
    for(let friend of fRiends){
        console.log(friend.name, friend.age, friend.email, friend.bff);
    }
}

message(friends);