const db=require('../utils/db')

class Products{

    constructor(title,desc,price,image){
        this.title=title,
        this.desc=desc,
        this.price=price,
        this.image=image
    }


save(){
    return db.execute(
        'INSERT INTO products (title,description,price,image) VALUES (?,?,?,?)',
    [this.title,this.desc,this.price, this.image]
    );
}

fetch(){
    return db.execute('select * from products')
}

static searchFilter(id){
    console.log(`${typeof id} value is ${id}`)
    return db.execute('Select * from products where id = ?',[id])
}

static update(){
    //Do Some-Thing
}

static delete(){
// Do Some Thing
}

}

module.exports.getProduct=Products
