// 1- Utility Types --> Readymade Helpers

interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
}

// Partial --> all property are optional

type UpdateUserInput = Partial<User>

const updateData: UpdateUserInput = {
  name: "Sheraz",
  email: "sheraz@dev.com"
}

// Pick 
// if we can choose specific propertyt then we use pick

type UserPublicInfo = Pick<User, "name" | "role">

// only use specific property --> not all
const publicUser:UserPublicInfo ={
  name: "Sheraz",
  role: "admin"
}

// Omit --> Alternative of pick
type RegisterUserInput = Omit<User, "id">

const newUser:RegisterUserInput = {
    name: "Ali",
    email: "ali@dev.com",
    role: "user"
}

// Record 
//Record<Type of key, Type of value>
// Basically we create a new instance that we can define key and value type
type PageNames = "home" | "dashboard" | "adminPannel"

type PageConfig = Record<PageNames, boolean >

const websiteConfig: PageConfig ={
  home: true,
  dashboard: false,
  adminPannel: true
}


export {};
