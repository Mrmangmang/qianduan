//父类
class People {
    constructor(name) {
        this.name= name
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
}
//子类
 class Student extends People{
     constructor(name,number) {
         super(name)
         this.number = number
     }
     sayHi(){}
 }